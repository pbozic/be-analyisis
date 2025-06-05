import {
	payments,
	PAYMENT_METHOD,
	PAYMENT_STATUS,
	SPLIT_DESTINATION_TYPE,
	payment_splits,
	SPLIT_STATUS,
	type Prisma as TPrisma,
} from '@prisma/client';
import { type Stripe as TStripe } from 'stripe';

import PaymentSplitDao, { PaymentSplitData } from '../dao/PaymentSplit.ts';
import PaymentDao from '../dao/Payment.ts';
import WalletFundsHelpers from '../lib/WalletFundsHelpers.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import UserDao from '../dao/User.js';
import stripe from './stripe.js';

/**
 * Generates payment splits from a combination of fixed-amount and value-based splits.
 *
 * @export
 * @param {number} amount - The total amount to split (in cents).
 * @param {number} credits_amount - The total credits to allocate (in cents).
 * @param {DestinationCut[]} fixedSplitsData - Array of fixed splits: { type, id, value } (value is amount in cents)
 * @param {DestinationCut[]} percentSplitsData - Array of percent splits: { type, id, value } (value is percent)
 * @returns {PaymentSplitData[]}
 * @throws {Error} If the sum of fixed split values exceeds the total amount.
 */
type DestinationCut = {
	type: SPLIT_DESTINATION_TYPE;
	destination_id?: string;
	value: number;
	metadata?: Record<string, string | number | boolean | object | null>;
};

function generatePaymentSplits(
	amount: number,
	credits_amount: number,
	fixedSplitsData: DestinationCut[] = [],
	percentSplitsData: DestinationCut[] = []
): PaymentSplitData[] {
	if (credits_amount > amount) {
		throw new Error('Credits amount cannot exceed total payment amount');
	}
	const fixedTotal = fixedSplitsData.reduce((sum, cut) => sum + cut.value, 0);
	if (fixedTotal > amount) {
		throw new Error('Sum of fixed split values exceeds the total amount');
	}

	// 1. Handle fixed splits
	const fixedSplits: Omit<PaymentSplitData, 'is_credits'>[] = fixedSplitsData.map((cut) => ({
		destination_type: cut.type,
		destination_id: cut.destination_id,
		amount: cut.value,
		metadata: cut.metadata,
	}));
	// 2. Handle percent splits for the remaining amount
	const remainingAmountForPercentages = amount - fixedTotal;
	const totalPercent = percentSplitsData.reduce((sum, cut) => sum + cut.value, 0);
	if (totalPercent >= 100) {
		throw new Error('Sum of percent split values must be less than 100%');
	}
	const percentSplits: Omit<PaymentSplitData, 'is_credits'>[] = [];

	if (remainingAmountForPercentages <= 0) {
		if (percentSplitsData.length > 0) {
			throw new Error('No remaining amount to allocate for percent splits');
		}
	} else {
		// Calculate amounts for each percent split while rounding to avoid floating point errors
		let allocated = 0;
		for (let i = 0; i < percentSplitsData.length; i++) {
			const def = percentSplitsData[i]!;
			if (def.value <= 0) throw new Error('Percent split value must be greater than 0');

			let splitAmount = Math.floor((remainingAmountForPercentages * def.value) / 100);
			allocated += splitAmount;

			percentSplits.push({
				destination_type: def.type,
				destination_id: def.destination_id,
				amount: splitAmount,
				metadata: def.metadata,
			});
		}
		let platformSplitAmount = remainingAmountForPercentages - allocated;
		if (platformSplitAmount > 0) {
			percentSplits.push({
				destination_type: 'PLATFORM',
				destination_id: 'platform',
				amount: platformSplitAmount,
			});
		}
	}
	const enumOrder = Object.values(SPLIT_DESTINATION_TYPE);

	// 3. Combine, merge and sort splits
	const allSplits = Array.from(
		[...fixedSplits, ...percentSplits]
			.reduce((map, split, index) => {
				//Merging splits by key data while skipping the merge operation for splits with no destination_id
				const key = split.destination_id
					? `${split.destination_type}:${split.destination_id}:${JSON.stringify(split.metadata)}`
					: `null:${index}`;
				const existing = map.get(key);
				if (existing) {
					existing.amount += split.amount;
				} else {
					map.set(key, { ...split });
				}
				return map;
			}, new Map<string, Omit<PaymentSplitData, 'is_credits'>>())
			.values()
	).sort((a, b) => {
		if (a.destination_type === 'PLATFORM' && b.destination_type !== 'PLATFORM') return -1;
		if (a.destination_type !== 'PLATFORM' && b.destination_type === 'PLATFORM') return 1;

		return enumOrder.indexOf(a.destination_type) - enumOrder.indexOf(b.destination_type);
	});

	// 4. Allocate credits to splits
	let remainingCredits = credits_amount;
	const finalSplits: PaymentSplitData[] = [];

	for (const split of allSplits) {
		const creditPart = Math.min(split.amount, remainingCredits);
		if (creditPart > 0) {
			finalSplits.push({
				destination_type: split.destination_type,
				destination_id: split.destination_id,
				amount: creditPart,
				is_credits: true,
				metadata: split?.metadata,
			});
			remainingCredits -= creditPart;
		}
		const remainingPart = split.amount - creditPart;
		if (remainingPart > 0) {
			finalSplits.push({
				destination_type: split.destination_type,
				destination_id: split.destination_id,
				amount: remainingPart,
				is_credits: false,
				metadata: split?.metadata,
			});
		}
	}

	return finalSplits;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {string} user_id
 * @param {number} total_price_cents
 * @param {string} order_type
 * @param {string} payment_type
 * @param {PAYMENT_METHOD} payment_method
 * @param {(string | null)} [payment_method_id=null]
 * @param {boolean} [allow_credits_usage=false]
 * @param {Record<SPLIT_DESTINATION_TYPE, Record<string, number>>} splits_data
 * @param {(string | null)} [return_url=null]
 * @param {?string} [product_identifier]
 * @returns {Promise<{ payment: payments; product_identifier?: string }>}
 */
export async function createPaymentHelper(
	user_id: string,
	total_price_cents: number,
	order_type: string,
	payment_type: string,
	payment_method: PAYMENT_METHOD,
	payment_method_id: string | null = null,
	capture_method: 'manual' | 'automatic' = 'manual',
	allow_credits_usage: boolean = false,
	fixed_splits_data: DestinationCut[] = [], //[{destination_type,destination_id,value:amount}]
	percent_splits_data: DestinationCut[] = [], //[{destination_type,destination_id,value:percent}]
	return_url: string | null = null,
	product_identifier?: string
	// business_id: string,
): Promise<{ payment: payments; payment_intent: TStripe.PaymentIntent | null }> {
	const available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(user_id);
	if (payment_method === 'WALLET') {
		if (
			available_wallet_balances['CREDITS_DELIVERY'] + available_wallet_balances['CREDITS_ANY'] <
			total_price_cents
		) {
			throw new Error('Insufficient funds');
		}
	}

	let payment = await PaymentDao.createPayment(
		user_id,
		total_price_cents,
		payment_method,
		0,
		null,
		product_identifier
	);

	let CREDITS_AMOUNT_RESERVED = 0;
	if (allow_credits_usage) {
		const reservedCredits = await WalletFundsHelpers.reserveCreditsForOrder(
			user_id,
			total_price_cents,
			product_identifier,
			'CREDITS_DELIVERY',
			'daily_meals_subscription'
		);
		CREDITS_AMOUNT_RESERVED = reservedCredits.reduce((sum, wf) => sum + wf.amount, 0);
		payment = await PaymentDao.updatePayment(payment.payment_id, { credits_amount: CREDITS_AMOUNT_RESERVED });
	}

	let splits: PaymentSplitData[] =
		fixed_splits_data.length > 0 || percent_splits_data.length > 0
			? generatePaymentSplits(total_price_cents, CREDITS_AMOUNT_RESERVED, fixed_splits_data, percent_splits_data)
			: [];
	await PaymentSplitDao.createManyPaymentSplits(payment.payment_id, splits);
	let payment_intent = null;
	if (total_price_cents - CREDITS_AMOUNT_RESERVED > 0) {
		switch (payment_method) {
			case PAYMENT_METHOD.CARD:
			case PAYMENT_METHOD.PLATFORM: {
				let user = await UserDao.getUserById(user_id);
				const customer_acc = user?.stripe_customer_id;
				if (!customer_acc) {
					throw new Error('User does not have a stripe customer account.');
				}
				payment_intent = await stripe.createSplittablePayment(
					customer_acc,
					product_identifier,
					payment_method_id,
					total_price_cents,
					order_type,
					null,
					return_url,
					payment_type,
					capture_method
				);
				if (!payment_intent) {
					throw new Error('Failed to create payment intent');
				}
				payment = await PaymentDao.updatePayment(payment.payment_id, {
					payment_intent_id: payment_intent.id,
				});
				break;
			}
			case PAYMENT_METHOD.WALLET: {
				await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
					user_id,
					total_price_cents - CREDITS_AMOUNT_RESERVED,
					product_identifier,
					'daily_meals_subscription'
				);
				payment = await PaymentDao.updatePayment(payment.payment_id, { status: 'SUCCEEDED' as PAYMENT_STATUS });
				break;
			}
			case PAYMENT_METHOD.CASH:
				break;
			default:
				throw new Error('Unsupported payment method');
		}
	} else {
		payment = await PaymentDao.updatePayment(payment.payment_id, { status: 'SUCCEEDED' as PAYMENT_STATUS });
	}
	const response_payment = await PaymentDao.getPaymentById(payment.payment_id);
	if (!response_payment) {
		throw new Error('Payment not found after update');
	}
	return { payment: response_payment, payment_intent };
}

/**
 * Transfers a payment split to its destination.
 *
 * This function handles the transfer of a split amount either via Stripe or wallet-based systems,
 * depending on the original payment method. It validates the destination account, ensuring it is
 * either provided or already associated with the split. Throws if any mismatch or invalid conditions arise.
 *
 * @export
 * @async
 * @function transferSplit
 *
 * @param {string} payment_split_id - The ID of the payment split to be transferred.
 * @param {string} [destination_id] - Optional override destination ID. If provided, must match the existing one if already set.
 *
 * @throws {Error} If no destination is provided and the split has no existing destination.
 * @throws {Error} If a destination is provided that conflicts with the existing destination.
 * @throws {Error} If the payment method is unsupported.
 *
 * @returns {Promise<void>} Resolves when the transfer is successfully processed.
 *
 * @example
 * await transferSplit(SPLIT_OBJECT, PAYMENT_OBJECT, 'acct_5678');
 * @example
 * await transferSplit(SPLIT_OBJECT, PAYMENT_OBJECT);
 */
async function transferSplit(
	split: payment_splits | TPrisma.payment_splitsGetPayload<{ include: { payment: true } }>,
	payment: payments,
	destination_id?: string
): Promise<void> {
	const destination = split.destination_id || destination_id;
	if (!destination) {
		throw new Error('No destination for payment split!');
	}

	if (destination_id && split.destination_id && split.destination_id !== destination_id) {
		throw new Error('Payment split already has a destination which does not match the given one!');
	}

	if (split.is_credits) {
		// Transfer reserved credits for this split
		await WalletFundsHelpers.transferReservedCreditsForOrder(
			payment.user_id,
			destination,
			split.amount,
			payment.subscription_grouped_id || payment.payment_id,
			payment.order_type
		);
	} else {
		switch (payment.payment_method) {
			case 'CARD':
			case 'PLATFORM': {
				const payment_intent = await stripe.client.paymentIntents.retrieve(payment.payment_intent_id);
				await stripe.splitCutFromPaymentIntent(payment_intent, destination, split.amount);
				break;
			}
			case 'WALLET':
				await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					payment.user_id,
					destination,
					split.amount,
					payment.subscription_grouped_id || payment.payment_id,
					payment.order_type
				);
				break;
			case 'CASH':
				// TODO: Handle cash transfer logic?
				break;
			default:
				throw new Error('Unsupported payment method for split transfer');
		}
	}
	await PaymentSplitDao.updatePaymentSplitById(split.split_id, { status: 'TRANSFERED' });
}

/**
 * Helper to transfer all splits of given destination types for a payment to their respective destination ids.
 * @param payment_id - The payment to process.
 * @param dest_types - Array of SPLIT_DESTINATION_TYPE to transfer.
 * @returns Promise<void>
 */
export async function transferSplitsForTypes(payment_id: string, dest_types: SPLIT_DESTINATION_TYPE[]): Promise<void> {
	const payment = await PaymentDao.getPaymentById(payment_id);
	if (!payment) throw new Error('Payment not found');

	for (const split of payment.payment_splits) {
		if (dest_types.includes(split.destination_type) && split.status === SPLIT_STATUS.RESERVED) {
			transferSplit(split, payment);
		}
	}
}

/**
 * Transfers a payment split to its destination.
 *
 * This function handles the transfer of a split by its ID
 *
 * @export
 * @async
 * @function transferSplitById
 *
 * @param {string} payment_split_id - The ID of the payment split to be transferred.
 * @param {string} [destination_id] - Optional override destination ID. If provided, must match the existing one if already set.
 *
 * @throws {Error} If the payment split is not found.
 *
 * @returns {Promise<void>} Resolves when the transfer is successfully processed.
 *
 * @example
 * await transferSplitById('split-uuid-1234', 'acct_5678');
 * @example
 * await transferSplitById('split-uuid-1234');
 */
export async function transferSplitById(payment_split_id: string, destination_id?: string): Promise<void> {
	try {
		const split = await PaymentSplitDao.getPaymentSplitById(payment_split_id);
		if (!split) throw new Error('Payment split not found');
		await transferSplit(split, split.payment, destination_id);
	} catch (error) {
		console.error('Error transfering payment_split: ', error);
		throw new Error(`Error transfering payment_split: ${error instanceof Error ? error.message : 'unknown error'}`);
	}
}

/**
 * Handles payment refund by releasing reserved wallet funds and refunding/canceling payment intents.
 * Also restores credits or wallet funds if needed, based on payment splits.
 * Updates split status to 'REFUNDED' or 'CANCELED' depending on transfer state.
 * Works with the Payments system.
 * @param payment - The payment object (must include payment_splits relation).
 */
export async function handlePaymentRefund(payment: payments & { payment_splits: payment_splits[] }) {
	// Group splits by is_credits and status
	for (const split of payment.payment_splits) {
		// Only process splits that have a positive amount
		if (!split.amount || split.amount <= 0) continue;

		// If split was already transferred, we need to create new wallet funds/credits for the user
		if (split.status === 'TRANSFERED') {
			if (split.is_credits) {
				// Refund credits to user
				await WalletFundsDao.createCredit({
					user: { connect: { user_id: payment.user_id } },
					amount: split.amount,
					type: 'CREDITS_DELIVERY',
				});
			} else {
				// Refund wallet funds to user
				await WalletFundsDao.createWalletFunds(
					payment.user_id,
					split.amount,
					null
					// add type if needed
				);
			}
			// Mark split as refunded
			await PaymentSplitDao.updatePaymentSplitById(split.split_id, { status: SPLIT_STATUS.REFUNDED });
		} else {
			// If not transferred, just release reserved funds/credits
			if (split.is_credits) {
				await WalletFundsHelpers.releaseReservedWalletFundsForOrder(
					payment.user_id,
					payment.payment_id,
					split.amount
				);
			} else {
				await WalletFundsHelpers.releaseReservedWalletFundsForOrder(
					payment.user_id,
					payment.payment_id,
					split.amount
				);
			}
			await PaymentSplitDao.updatePaymentSplitById(split.split_id, { status: SPLIT_STATUS.CANCELED });
		}
	}

	// Refund/cancel payment intent if needed
	switch (payment.payment_method) {
		case 'CARD':
		case 'PLATFORM':
			if (payment.payment_intent_id) {
				const payment_intent = await stripe.client.paymentIntents.retrieve(payment.payment_intent_id);
				if (!['succeeded', 'canceled', 'processing'].includes(payment_intent.status)) {
					await stripe.client.paymentIntents.cancel(payment.payment_intent_id);
				} else {
					await stripe.client.refunds.create({
						payment_intent: payment.payment_intent_id,
					});
				}
			}
			break;
		case 'WALLET':
			// Wallet funds are handled above per split
			break;
		case 'CASH':
			// No action needed for cash
			break;
		default:
			throw new Error('Unsupported payment method for refund');
	}
}

export default { createPaymentHelper, transferSplitsForTypes, transferSplitById, handlePaymentRefund };
