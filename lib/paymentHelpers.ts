import {
	payments,
	PAYMENT_METHOD,
	PAYMENT_STATUS,
	SPLIT_DESTINATION_TYPE,
	payment_splits,
	SPLIT_STATUS,
} from '@prisma/client';

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
	destination_id: string;
	value: number;
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
	const fixedSplits = fixedSplitsData.map((cut) => ({
		destination_type: cut.type,
		destination_id: cut.destination_id,
		amount: cut.value,
	}));
	// 2. Handle percent splits for the remaining amount
	const remainingAmount = amount - fixedTotal;
	const totalPercent = percentSplitsData.reduce((sum, cut) => sum + cut.value, 0);
	if (totalPercent >= 100) {
		throw new Error('Sum of percent split values must be less than 100%');
	}
	const percentSplits: Array<{ destination_type: SPLIT_DESTINATION_TYPE; destination_id: string; amount: number }> =
		[];

	if (remainingAmount <= 0) {
		if (percentSplitsData.length > 0) {
			throw new Error('No remaining amount to allocate for percent splits');
		}
	} else {
		const splitDefs: DestinationCut[] = [];

		// Add PLATFORM with remaining percent if needed
		const remainingPercent = 100 - totalPercent;
		if (remainingPercent > 0) {
			splitDefs.push({ type: 'PLATFORM', destination_id: 'platform', value: remainingPercent });
		}
		splitDefs.push(...percentSplitsData);

		// Calculate amounts for each percent split, using integer math to avoid floating point errors
		let allocated = 0;
		for (let i = 0; i < splitDefs.length; i++) {
			const def = splitDefs[i]!;
			if (def.value <= 0) throw new Error('Percent split value must be greater than 0');

			let splitAmount: number;
			if (i === splitDefs.length - 1) {
				// Last split gets the remainder to ensure total matches
				splitAmount = remainingAmount - allocated;
			} else {
				splitAmount = Math.floor((remainingAmount * def.value) / 100);
				allocated += splitAmount;
			}
			percentSplits.push({
				destination_type: def.type,
				destination_id: def.destination_id,
				amount: splitAmount,
			});
		}
	}

	// 3. Combine all splits
	const allSplits = [...fixedSplits, ...percentSplits];

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
				metadata: {},
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
				metadata: {},
			});
		}
	}

	return finalSplits;
}

// export async function createSubscriptionPaymentHelper(params: {
// 	user_id: string;
// 	total_price: number;
// 	payment_method: PAYMENT_METHOD;
// 	allow_credits_usage?: boolean;
// 	business_id: string;
// }): Promise<{ payment: payments; grouped_id: string }> {
// 	const { user_id, total_price, payment_method, allow_credits_usage, business_id } = params;

// 	const available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(user?.user_id);
// 	if (payment_type === 'WALLET') {
// 		if (available_wallet_balances['DELIVERY'] + available_wallet_balances[null] < TOTAL_PRICE_CENT / 100) {
// 			throw new Error('Insufficient funds');
// 		}
// 	}

// 	let groupedId = uuidv4();
// 	let hasUuid = false;
// 	while (!hasUuid) {
// 		const sub = await prisma.daily_meals_subscriptions.findFirst({ where: { grouped_id: groupedId } });
// 		if (!sub) hasUuid = true;
// 		else groupedId = uuidv4();
// 	}

// 	const TOTAL_PRICE_CENTS = Math.round(total_price * 100);

// 	let payment = await PaymentDao.createPayment(user_id, TOTAL_PRICE_CENTS, payment_method, 0, null, groupedId);

// 	let CREDITS_AMOUNT_RESERVED = 0;
// 	if (allow_credits_usage) {
// 		const reservedCredits = await WalletFundsHelpers.reserveCreditsForOrder(
// 			user_id,
// 			TOTAL_PRICE_CENTS,
// 			groupedId,
// 			'CREDITS_DELIVERY',
// 			'daily_meals_subscription'
// 		);
// 		CREDITS_AMOUNT_RESERVED = reservedCredits.reduce((sum, wf) => sum + wf.amount, 0);
// 		payment = await PaymentDao.updatePayment(payment.payment_id, { credits_amount: CREDITS_AMOUNT_RESERVED });
// 	}

// 	if (payment_method === 'WALLET') {
// 		await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
// 			user_id,
// 			TOTAL_PRICE_CENTS - CREDITS_AMOUNT_RESERVED,
// 			groupedId,
// 			'daily_meals_subscription'
// 		);
// 		payment = await PaymentDao.updatePayment(payment.payment_id, { status: 'SUCCEEDED' as PAYMENT_STATUS });
// 	}

// 	return { payment, grouped_id: groupedId };
// }

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
): Promise<payments> {
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

	if (total_price_cents - CREDITS_AMOUNT_RESERVED > 0) {
		switch (payment_method) {
			case PAYMENT_METHOD.CARD:
			case PAYMENT_METHOD.PLATFORM: {
				let user = await UserDao.getUserById(user_id);
				const customer_acc = user?.stripe_customer_id;
				if (!customer_acc) {
					throw new Error('User does not have a stripe customer account.');
				}
				let payment_intent = await stripe.createSplittablePayment(
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
					payment_intent_id: payment_intent.payment_intent_id,
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
	return response_payment;
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
		if (dest_types.includes(split.destination_type)) {
			if (split.is_credits) {
				// Transfer reserved credits for this split
				await WalletFundsHelpers.transferReservedCreditsForOrder(
					payment.user_id,
					split.destination_id,
					split.amount,
					payment.subscription_grouped_id || payment.payment_id,
					payment.order_type
				);
			} else {
				switch (payment.payment_method) {
					case 'CARD':
					case 'PLATFORM':
						await stripe.splitCutFromPaymentIntent(
							payment.payment_intent_id,
							split.destination_id,
							split.amount
						);
						break;
					case 'WALLET':
						await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							payment.user_id,
							split.destination_id,
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

export default { createPaymentHelper, transferSplitsForTypes, handlePaymentRefund };
