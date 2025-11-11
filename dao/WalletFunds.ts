import { Prisma, TRANSACTION_TYPE, FUNDS_TYPE, CREDIT_STATUS, CASHBACK_STATUS } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { SERVICE_TYPE } from '../lib/constants.js';
import {
	WalletFundsBase,
	WalletFundsResponse,
	CreateWalletFunds,
	ConvertCashbacksToCredit,
} from '../schemas/dto/WalletFunds/walletFunds.dto.js';

type ServiceType = keyof typeof SERVICE_TYPE;

/**
 * Create wallet funds entry and associated transaction.
 *
 * @param {string} user_id
 * @param {number} amount_cents Amount in cents
 * @param {string|null} charge_id Optional charge id (stripe)
 * @param {TRANSACTION_TYPE} transaction_type
 * @returns {Promise<WalletFundsBase>} Created wallet funds entry
 */
export async function createWalletFunds(
	user_id: string,
	amount_cents: number,
	charge_id: string | null = null,
	transaction_type: TRANSACTION_TYPE = TRANSACTION_TYPE.CREDIT
): Promise<WalletFundsBase> {
	console.log('createWalletFunds ', user_id, amount_cents);
	return await prisma.transactions.create({
		data: {
			user: { connect: { user_id: user_id } },
			amount: amount_cents / 100,
			type: transaction_type,
			description: 'Added funds to wallet',
			wallet_funds: {
				create: {
					charge_id: charge_id,
					amount: amount_cents,
					user: { connect: { user_id: user_id } },
					type: FUNDS_TYPE.FUNDS,
				},
			},
		},
	});
}

/**
 * Get available wallet funds for a user by type.
 *
 * @param {string} userId
 * @param {string} funds_type
 * @returns {Promise<WalletFundsResponse[]>} Available wallet funds
 */
export async function getAvailableWalletFunds(userId: string, funds_type: string): Promise<WalletFundsResponse[]> {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
				type: funds_type,
			},
			include: { user: true },
			orderBy: [{ expires_at: { sort: 'asc', nulls: 'last' } }, { created_at: 'asc' }],
		});
	} catch (error) {
		console.error('Error retrieving available wallet funds:', error);
		throw error;
	}
}

/**
 * Get reserved wallet funds for a user by order and reserve type.
 *
 * @param {string} userId
 * @param {string} order_id
 * @param {'order' | 'daily_meals_subscription_payment'} reserveType
 * @returns {Promise<WalletFundsBase[]>} Reserved wallet funds
 */
export async function getReservedWalletFunds(
	userId: string,
	order_id: string,
	reserveType: 'order' | 'daily_meals_subscription_payment' = 'order'
): Promise<WalletFundsBase[]> {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				...(reserveType === 'order' ? { reserved_order: order_id } : {}),
				...(reserveType === 'daily_meals_subscription_payment'
					? { reserved_daily_meals_subscription: order_id }
					: {}),
			},
			orderBy: { created_at: 'asc' },
		});
	} catch (error) {
		console.error('Error retrieving reserved wallet funds:', error);
		throw error;
	}
}

/**
 * Get all reserved wallet funds.
 *
 * @returns {Promise<WalletFundsBase[]>} Reserved wallet funds
 */
export async function getAllReservedWalletFunds(): Promise<WalletFundsBase[]> {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				reserved_order: { not: null },
				reserved_daily_meals_subscription: { not: null },
			},
			orderBy: { created_at: 'asc' },
		});
	} catch (error) {
		console.error('Error retrieving all reserved wallet funds:', error);
		throw error;
	}
}

/**
 * Delete wallet funds by ID.
 *
 * @param {string} wallet_funds_id
 */
export async function deleteWalletFunds(wallet_funds_id: string): Promise<void> {
	try {
		await prisma.wallet_funds.delete({ where: { wallet_funds_id } });
		console.log(`Wallet fund with ID ${wallet_funds_id} has been deleted.`);
		// return res;
	} catch (error) {
		console.error(`Error deleting wallet fund with ID ${wallet_funds_id}:`, error);
		throw error;
	}
}

/**
 * Subtract funds from wallet funds entry and create associated transaction.
 *
 * @param {string} walletFundsId
 * @param {number} amount
 * @param {string|null} order_id
 * @param {ServiceType|null} service_type
 */
export async function subtractFunds(
	walletFundsId: string,
	amount: number,
	order_id: string | null = null,
	service_type: ServiceType | null = null
): Promise<void> {
	try {
		if (amount <= 0) throw new Error('Subtract amount must be greater than 0');
		const walletFund = await prisma.wallet_funds.findUnique({ where: { wallet_funds_id: walletFundsId } });
		if (!walletFund) throw new Error('Wallet fund entry not found');
		if (walletFund.amount < amount) throw new Error(`Insufficient funds ${walletFund.amount} < ${amount}`);
		let updatedWalletFund = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			const updated_WF = await tx.wallet_funds.update({
				where: { wallet_funds_id: walletFundsId },
				data: { amount: walletFund.amount - amount },
			});
			console.info(`subtracted ${amount} from WF:\n${JSON.stringify(walletFund, null, 2)}. `);
			if (walletFund.reserved_order !== null) {
				await tx.transactions.create({
					data: {
						user: { connect: { user_id: updated_WF.user_id } },
						amount: -amount / 100,
						type: 'DEBIT',
						taxi_order:
							service_type === SERVICE_TYPE.TAXI ? { connect: { order_id: order_id! } } : undefined,
						delivery_order:
							service_type === SERVICE_TYPE.DELIVERY ? { connect: { order_id: order_id! } } : undefined,
						description: 'Subtracted funds from wallet',
						wallet_funds: { connect: { wallet_funds_id: updated_WF.wallet_funds_id } },
					},
				});
			}
			// return updated_WF;
		});
		if (updatedWalletFund.amount === 0) {
			updatedWalletFund = await deleteWalletFunds(updatedWalletFund.wallet_funds_id);
		}
		// return updatedWalletFund;
	} catch (error) {
		console.error('Error subtracting funds:', error);
		throw error;
	}
}

/**
 * Reserve funds from a wallet funds entry.
 *
 * @param {string} walletFundsId
 * @param {number} reserveAmount
 * @param {'order' | 'daily_meals_subscription_payment'} reserveType
 * @returns {Promise<WalletFundsBase>}
 */
export async function reserveFunds(
	walletFundsId: string,
	reserveAmount: number,
	orderId: string,
	reserveType: 'order' | 'daily_meals_subscription_payment' = 'order'
): Promise<WalletFundsBase> {
	try {
		if (reserveAmount <= 0) throw new Error('Reserve amount must be greater than 0');
		const walletFund = await prisma.wallet_funds.findUnique({ where: { wallet_funds_id: walletFundsId } });
		if (!walletFund) throw new Error('Wallet fund entry not found');
		if (walletFund.reserved_order !== null) throw new Error('Source wallet fund entry already reserved');
		if (walletFund.amount < reserveAmount) throw new Error('Insufficient funds');
		await subtractFunds(walletFund.wallet_funds_id, reserveAmount);
		const existingReservedFund = await prisma.wallet_funds.findFirst({
			where: {
				user_id: walletFund.user_id,
				charge_id: walletFund.charge_id,
				...(reserveType === 'order' ? { reserved_order: orderId } : {}),
				...(reserveType === 'daily_meals_subscription_payment'
					? { reserved_daily_meals_subscription: orderId }
					: {}),
				reserved_business: orderId,
				expires_at: walletFund.expires_at,
				referral_id: walletFund.referral_id,
				type: walletFund.type,
			},
		});
		if (existingReservedFund) {
			return await prisma.wallet_funds.update({
				where: { wallet_funds_id: existingReservedFund.wallet_funds_id },
				data: { amount: existingReservedFund.amount + reserveAmount },
			});
		}
		return await prisma.wallet_funds.create({
			data: {
				user_id: walletFund.user_id,
				charge_id: walletFund.charge_id,
				...(reserveType === 'order' ? { reserved_order: orderId } : {}),
				...(reserveType === 'daily_meals_subscription_payment'
					? { reserved_daily_meals_subscription: orderId }
					: {}),
				expires_at: walletFund.expires_at,
				referral_id: walletFund.referral_id,
				type: walletFund.type,
				amount: reserveAmount,
			},
		});
	} catch (error) {
		console.error('Error reserving funds:', error);
		throw error;
	}
}

/**
 * Release reserved funds back to available wallet funds.
 *
 * @param {string} walletFundsId
 * @param {number} releaseAmount
 * @returns {Promise<WalletFundsBase>}
 */
export async function releaseFunds(walletFundsId: string, releaseAmount: number): Promise<WalletFundsBase> {
	try {
		if (releaseAmount <= 0) throw new Error('Release amount must be greater than 0');
		const walletFund = await prisma.wallet_funds.findUnique({ where: { wallet_funds_id: walletFundsId } });
		if (!walletFund) throw new Error('Wallet fund entry not found');
		if (walletFund.reserved_order === null && walletFund.reserved_business === null)
			throw new Error('Source wallet fund entry is not reserved');
		if (walletFund.amount < releaseAmount) throw new Error('Insufficient funds');
		return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			const amount_after_release = walletFund.amount - releaseAmount;
			if (amount_after_release === 0) {
				await tx.wallet_funds.delete({ where: { wallet_funds_id: walletFundsId } });
			} else {
				await tx.wallet_funds.update({
					where: { wallet_funds_id: walletFundsId },
					data: { amount: amount_after_release },
				});
			}
			console.info(`released ${releaseAmount} from WF:\n${JSON.stringify(walletFund, null, 2)}. `);
			const existingFund = await tx.wallet_funds.findFirst({
				where: {
					user_id: walletFund.user_id,
					charge_id: walletFund.charge_id,
					expires_at: walletFund.expires_at,
					referral_id: walletFund.referral_id,
					type: walletFund.type,
				},
			});
			if (existingFund) {
				return await tx.wallet_funds.update({
					where: { wallet_funds_id: existingFund.wallet_funds_id },
					data: { amount: existingFund.amount + releaseAmount },
				});
			}
			return await tx.wallet_funds.create({
				data: {
					user_id: walletFund.user_id,
					charge_id: walletFund.charge_id,
					expires_at: walletFund.expires_at,
					referral_id: walletFund.referral_id,
					type: walletFund.type,
					amount: releaseAmount,
				},
			});
		});
	} catch (error) {
		console.error('Error releasing funds:', error);
		throw error;
	}
}

/**
 * Get available wallet balance for a user (sum of FUNDS type).
 *
 * @param {string} userId
 * @returns {Promise<number>}
 */
export async function getAvailableWalletBalance(userId: string): Promise<number> {
	try {
		const result = await prisma.wallet_funds.aggregate({
			where: {
				user_id: userId,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
				type: FUNDS_TYPE.FUNDS,
			},
			_sum: { amount: true },
		});
		return result._sum.amount || 0;
	} catch (error) {
		console.error('Error retrieving available wallet balance:', error);
		throw error;
	}
}

/**
 * Get available wallet balance grouped by type for a user.
 *
 * @param {string} userId
 * @returns {Promise<Record<string, number>>}
 */
export async function getAvailableWalletBalanceGroupedByType(userId: string): Promise<Record<string, number>> {
	try {
		const result = await prisma.wallet_funds.groupBy({
			by: ['type'],
			where: {
				user_id: userId,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
			},
			_sum: { amount: true },
		});
		const balances: Record<string, number> = {};
		for (const row of result) {
			balances[row.type] = row._sum.amount || 0;
		}
		return balances;
	} catch (error) {
		console.error('Error retrieving grouped wallet balance:', error);
		throw error;
	}
}

/**
 * Create credit wallet funds entry (30-day expiry).
 *
 * @param {CreateWalletFunds} data
 * @returns {Promise<WalletFundsBase>}
 */
export const createCredit = async (data: CreateWalletFunds): Promise<WalletFundsBase> => {
	try {
		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 30);
		expiryDate.setHours(23, 59, 59, 999);
		return await prisma.wallet_funds.create({
			data: {
				expires_at: data.expires_at || expiryDate,
				user: { connect: { user_id: data.user_id } },
				amount: data.amount || 0,
				type: data.type || FUNDS_TYPE.CREDITS_ANY,
				referral: data.referral_id ? { connect: { referral_id: data.referral_id } } : undefined,
			},
		});
	} catch (error) {
		console.error('Error creating credit:', error);
		throw error;
	}
};

/**
 * Convert pending cashbacks to credit wallet funds entry.
 *
 * @param {ConvertCashbacksToCredit} data
 * @returns {Promise<WalletFundsBase>}
 */
export const convertCashbacksToCredit = async (data: ConvertCashbacksToCredit): Promise<WalletFundsBase> => {
	const expiryDate = new Date();
	expiryDate.setDate(expiryDate.getDate() + 30);
	expiryDate.setHours(23, 59, 59, 999);
	try {
		return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			const credit = await tx.wallet_funds.create({
				data: {
					type: FUNDS_TYPE.CREDITS_ANY,
					expires_at: expiryDate,
					user: { connect: { user_id: data.user_id } },
					amount: data.amount,
					referral: data.referral_id ? { connect: { referral_id: data.referral_id } } : undefined,
				},
			});
			await tx.cashback.updateMany({
				where: { cashback_id: { in: data.pending_cashback_ids } },
				data: { status: CASHBACK_STATUS.CONVERTED, converted_at: new Date() },
			});
			return credit;
		});
	} catch (error) {
		console.error('Error converting cashbacks to credit:', error);
		throw error;
	}
};

/**
 * Expire outdated credits (set status EXPIRED).
 *
 * @returns {Promise<WalletFundsBase[]>}
 */
export const expireOutdatedCredits = async (): Promise<WalletFundsBase[]> => {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	try {
		return await prisma.wallet_funds.updateMany({
			where: { status: CREDIT_STATUS.ACTIVE, expires_at: { lt: now } },
			data: { status: CREDIT_STATUS.EXPIRED },
		});
	} catch (error) {
		console.error('Error expiring credits:', error);
		throw error;
	}
};

/**
 * Find credits expiring in a given number of days.
 *
 * @param {number} days
 * @returns {Promise<WalletFundsResponse[]>}
 */
export const findCreditsExpiringInDays = async (days: number): Promise<WalletFundsResponse[]> => {
	try {
		const endDateStart = new Date();
		const endDateEnd = new Date();
		endDateStart.setDate(endDateStart.getDate() + days);
		endDateStart.setHours(0, 0, 0, 0);
		endDateEnd.setDate(endDateEnd.getDate() + days);
		endDateEnd.setHours(23, 59, 59, 999);
		return prisma.wallet_funds.findMany({
			where: { status: CREDIT_STATUS.ACTIVE, expires_at: { gte: endDateStart, lte: endDateEnd } },
			include: { user: true },
		});
	} catch (error) {
		console.error('Error finding credits expiring in days:', error);
		throw error;
	}
};

/**
 * Get available credits by type for a user.
 *
 * @param {string} userId
 * @param {string} type
 * @returns {Promise<WalletFundsBase[]>}
 */
export const getAvailableCreditsByType = async (userId: string, type: string): Promise<WalletFundsBase[]> => {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				type: type,
				status: CREDIT_STATUS.ACTIVE,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
			},
		});
	} catch (error) {
		console.error('Error retrieving available credits by type:', error);
		throw error;
	}
};

/**
 * Get available credits for order by type (includes CREDITS_ANY).
 *
 * @param {string} userId
 * @param {string} type
 * @returns {Promise<WalletFundsBase[]>}
 */
export const getAvailableCreditsForOrder = async (userId: string, type: string): Promise<WalletFundsBase[]> => {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				type: { in: [type, FUNDS_TYPE.CREDITS_ANY] },
				status: CREDIT_STATUS.ACTIVE,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
			},
		});
	} catch (error) {
		console.error('Error retrieving available credits for order:', error);
		throw error;
	}
};

/**
 * Get reserved non-FUNDS credits for order/subscription.
 *
 * @param {string} userId
 * @param {string} orderId
 * @param {'order' | 'daily_meals_subscription_payment'} reserveType
 * @returns {Promise<WalletFundsBase[]>}
 */
export const getReservedCredits = async (
	userId: string,
	orderId: string,
	reserveType: 'order' | 'daily_meals_subscription_payment' = 'order'
): Promise<WalletFundsBase[]> => {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				NOT: { type: FUNDS_TYPE.FUNDS },
				...(reserveType === 'order' ? { reserved_order: orderId } : {}),
				...(reserveType === 'daily_meals_subscription_payment'
					? { reserved_daily_meals_subscription: orderId }
					: {}),
			},
		});
	} catch (error) {
		console.error('Error retrieving reserved credits:', error);
		throw error;
	}
};

/**
 * Get expired credits for a user by type.
 *
 * @param {string} userId
 * @param {string} type
 * @returns {Promise<WalletFundsBase[]>}
 */
export const getExpiredCredits = async (userId: string, type: string): Promise<WalletFundsBase[]> => {
	try {
		return await prisma.wallet_funds.findMany({
			where: { user_id: userId, type: type, status: CREDIT_STATUS.EXPIRED },
		});
	} catch (error) {
		console.error('Error retrieving expired credits:', error);
		throw error;
	}
};

export default {
	createWalletFunds,
	getAvailableWalletFunds,
	getAvailableWalletBalance,
	getAvailableWalletBalanceGroupedByType,
	getReservedWalletFunds,
	getAllReservedWalletFunds,
	deleteWalletFunds,
	subtractFunds,
	reserveFunds,
	releaseFunds,
	createCredit,
	getAvailableCreditsByType,
	getAvailableCreditsForOrder,
	getReservedCredits,
	getExpiredCredits,
	convertCashbacksToCredit,
	expireOutdatedCredits,
	findCreditsExpiringInDays,
};
