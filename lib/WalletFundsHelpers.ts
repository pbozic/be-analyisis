import { FUNDS_TYPE } from '@prisma/client';

import WalletFundsDao from '../dao/WalletFunds.ts';
import stripe from './stripe.js';
import { sendCreditExpirationNotifications } from './notifications.ts';
import { WalletFundsBase, WalletFundsResponse } from '../schemas/dto/WalletFunds/walletFunds.dto.js';
import { UserBase } from '../schemas/dto/User/index.js';

// Minimal transfer object surface (Stripe Transfer subset we rely on). We avoid importing from stripe types.
export interface StripeTransferRef {
	id: string;
	amount: number; // in cents
	currency: string;
	destination: string;
	metadata?: Record<string, string>;
}

type ReserveType = 'order' | 'daily_meals_subscription_payment';

// Internal helper for summing amounts from wallet funds collections.
function sumAmounts(rows: Array<{ amount: number }>): number {
	return rows.reduce((acc, r) => acc + r.amount, 0);
}
/**
 * Reserve available wallet funds up to a target amount for an order.
 * @param {string} userId - User ID.
 * @param {number} amount - Amount to reserve (cents).
 * @param {string} orderId - Order ID.
 * @param {string} [reserveType='order'] - Reserve type key.
 * @returns {Promise<object[]>} Reserved wallet_funds records.
 */
export async function reserveAvailableWalletFundsForOrder(
	userId: string,
	amount: number,
	orderId: string,
	reserveType: ReserveType = 'order'
): Promise<WalletFundsBase[]> {
	if (amount <= 0) throw new Error('Amount must be greater than 0.');
	const availableWalletFunds = await WalletFundsDao.getAvailableWalletFunds(userId, FUNDS_TYPE.FUNDS);
	let sum = 0;
	const included: WalletFundsResponse[] = [];
	for (const wf of availableWalletFunds) {
		sum += wf.amount;
		included.push(wf);
		if (sum >= amount) break;
	}
	if (sum < amount) throw new Error('Insufficient funds to reserve.');
	const reserved: WalletFundsBase[] = [];
	let fundsToReserve = amount;
	for (const wf of included) {
		const splitAmount = Math.min(fundsToReserve, wf.amount);
		fundsToReserve -= splitAmount;
		const reservedWF = await WalletFundsDao.reserveFunds(wf.wallet_funds_id, splitAmount, orderId, reserveType);
		reserved.push(reservedWF);
		if (fundsToReserve <= 0) break;
	}
	if (fundsToReserve > 0) throw new Error('Unexpected error, insufficient funds reserved.');
	return reserved;
}
/**
 * Release previously reserved wallet funds for an order (all or partial amount).
 * @param {string} userId - User ID.
 * @param {string} orderId - Order ID.
 * @param {number} [amount] - Amount to release; -1 releases all reserved.
 * @param {string} [reserveType] - Reserve type key.
 * @returns {Promise<void>}
 */
export async function releaseReservedWalletFundsForOrder(
	userId: string,
	orderId: string,
	amount: number = -1,
	reserveType: ReserveType = 'order'
): Promise<void> {
	const reservedCredits = await WalletFundsDao.getReservedWalletFunds(userId, orderId, reserveType);
	const reservedAmount = sumAmounts(reservedCredits);
	if (amount > reservedAmount) throw new Error('Release amount must be smaller than reserved amount!');
	let remainingReleaseAmount = amount >= 0 ? amount : reservedAmount;
	for (const wf of reservedCredits) {
		if (remainingReleaseAmount <= 0) break;
		const releaseAmt = Math.min(remainingReleaseAmount, wf.amount);
		await WalletFundsDao.releaseFunds(wf.wallet_funds_id, releaseAmt);
		remainingReleaseAmount -= releaseAmt;
	}
	if (remainingReleaseAmount > 0) throw new Error('Unexpected error releasing reserved funds.');
}
/**
 * Transfer reserved wallet funds to a destination account or platform and subtract from reserves.
 * @param {string} userId - User ID.
 * @param {string} destination_acc - 'platform' or connected account ID.
 * @param {number} amount - Amount in cents to transfer.
 * @param {string} orderId - Order ID.
 * @param {string} service_type - Service type for audit.
 * @param {string} [reserveType] - Reserve type key.
 * @returns {Promise<object[]>} Stripe transfer objects (if not platform).
 */
export async function transferReservedWalletFundsForOrder(
	userId: string,
	destination_acc: string,
	amount: number,
	orderId: string,
	service_type: string,
	reserveType: ReserveType = 'order'
): Promise<StripeTransferRef[]> {
	if (amount <= 0) throw new Error('Amount must be greater than 0.');
	const reservedWalletFunds = await WalletFundsDao.getReservedWalletFunds(userId, orderId, reserveType);
	let sum = 0;
	const included: WalletFundsBase[] = [];
	for (const wf of reservedWalletFunds) {
		sum += wf.amount;
		included.push(wf);
		if (sum >= amount) break;
	}
	if (sum < amount) throw new Error('Insufficient funds reserved.');
	const transfers: StripeTransferRef[] = [];
	let fundsToSubtract = amount;
	for (const wf of included) {
		const splitAmount = Math.min(fundsToSubtract, wf.amount);
		fundsToSubtract -= splitAmount;
		if (destination_acc !== 'platform') {
			const transferObj = await stripe.splitCutFromCharge(wf.charge_id, destination_acc, splitAmount, orderId);
			const transfer = transferObj as {
				id: string;
				amount: number;
				currency: string;
				destination: string;
				metadata?: Record<string, string>;
			};
			transfers.push({
				id: transfer.id,
				amount: transfer.amount,
				currency: transfer.currency,
				destination: transfer.destination,
				metadata: transfer.metadata ?? undefined,
			});
		}
		await WalletFundsDao.subtractFunds(wf.wallet_funds_id, splitAmount, orderId, service_type as any);
		if (fundsToSubtract <= 0) break;
	}
	if (fundsToSubtract > 0) throw new Error('Unexpected error, insufficient funds transferred.');
	return transfers;
}
/**
 * Reserve credits of a given type up to a target amount for an order.
 * @param {string} userId - User ID.
 * @param {number} amount - Amount to reserve (cents).
 * @param {string} orderId - Order ID.
 * @param {string} credit_type - Credit type key (FUNDS_TYPE.*).
 * @param {string} [reserveType] - Reserve type key.
 * @returns {Promise<object[]>} Reserved credit records.
 */
export async function reserveCreditsForOrder(
	userId: string,
	amount: number,
	orderId: string,
	credit_type: string | null,
	reserveType: ReserveType = 'order'
): Promise<WalletFundsBase[]> {
	if (amount <= 0 || credit_type === null) return [];
	const availableCredits = await WalletFundsDao.getAvailableCreditsForOrder(userId, credit_type);
	const reserved: WalletFundsBase[] = [];
	let amountToReserve = amount;
	for (const credit of availableCredits) {
		const splitAmount = Math.min(amountToReserve, credit.amount);
		amountToReserve -= splitAmount;
		const reservedCredit = await WalletFundsDao.reserveFunds(
			credit.wallet_funds_id,
			splitAmount,
			orderId,
			reserveType
		);
		reserved.push(reservedCredit);
		if (amountToReserve <= 0) break;
	}
	return reserved;
}
/**
 * Transfer reserved credits to a destination account or platform and subtract from reserves.
 * @param {string} userId - User ID.
 * @param {string} destination_acc - 'platform' or connected account ID.
 * @param {number} amount - Amount in cents to transfer.
 * @param {string} orderId - Order ID.
 * @param {string} service_type - Service type key.
 * @param {string} [reserveType] - Reserve type key.
 * @returns {Promise<object[]>} Stripe transfer objects (if not platform).
 */
export async function transferReservedCreditsForOrder(
	userId: string,
	destination_acc: string,
	amount: number,
	orderId: string,
	service_type: string,
	reserveType: ReserveType = 'order'
): Promise<StripeTransferRef[]> {
	if (amount <= 0) throw new Error('Amount must be greater than 0.');
	const reservedCredits = await WalletFundsDao.getReservedCredits(userId, orderId, reserveType);
	const totalReserved = sumAmounts(reservedCredits);
	if (amount > totalReserved) throw new Error('Transfer amount is greater than reserved total!');
	const transfers: StripeTransferRef[] = [];
	let fundsToSubtract = amount;
	for (const credit of reservedCredits) {
		const splitAmount = Math.min(fundsToSubtract, credit.amount);
		fundsToSubtract -= splitAmount;
		if (destination_acc !== 'platform') {
			const transferObj = await stripe.splitCutFromCharge(
				credit.charge_id,
				destination_acc,
				splitAmount,
				orderId
			);
			const transfer = transferObj as {
				id: string;
				amount: number;
				currency: string;
				destination: string;
				metadata?: Record<string, string>;
			};
			transfers.push({
				id: transfer.id,
				amount: transfer.amount,
				currency: transfer.currency,
				destination: transfer.destination,
				metadata: transfer.metadata ?? undefined,
			});
		}
		await WalletFundsDao.subtractFunds(credit.wallet_funds_id, splitAmount, orderId, service_type as any);
		if (fundsToSubtract <= 0) break;
	}
	return transfers;
}
/**
 * Expire outdated credits and log the result.
 *
 * @returns {Promise<void>}
 */
export async function handleCreditExpiration(): Promise<void> {
	try {
		await WalletFundsDao.expireOutdatedCredits();
		console.log(`Successfully expired credits operation executed`);
	} catch (error) {
		console.error('Error in handleCreditExpiration:', error);
	}
}

/**
 * Send notifications to users whose credits will expire soon.
 *
 * @returns {Promise<void>}
 */
export async function notifyUpcomingCreditExpirations(): Promise<void> {
	try {
		const sevenDayWarnings = await WalletFundsDao.findCreditsExpiringInDays(7);
		for (const credit of sevenDayWarnings) {
			const wf = credit as WalletFundsResponse;
			const user = wf.user as UserBase | undefined;
			if (user) {
				await sendCreditExpirationNotifications(user);
			} else {
				console.log(`Credit expiration notification not sent for user ${wf.user_id}`);
			}
		}
		if (sevenDayWarnings.length > 0) {
			console.log(`Sent ${sevenDayWarnings.length} credit expiration notifications`);
		}
	} catch (error) {
		console.error('Error in notifyUpcomingCreditExpirations:', error);
	}
}

export default {
	reserveAvailableWalletFundsForOrder,
	releaseReservedWalletFundsForOrder,
	transferReservedWalletFundsForOrder,
	reserveCreditsForOrder,
	transferReservedCreditsForOrder,
	handleCreditExpiration,
	notifyUpcomingCreditExpirations,
};
