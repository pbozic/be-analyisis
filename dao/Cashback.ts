import prisma from '../prisma/prisma.js';
import { CASHBACK_STATUS } from '../lib/constants.js';
import type { CashbackBase, CashbackDetail } from '../schemas/dto/Cashback/cashback.dto.js';
import { toCashbackDetail } from '../schemas/dto/Cashback/cashback.dto.js';
import type { CashbackWithOrdersPrisma } from '../prisma/includes/cashback.js';
import cashbackOrdersInclude from '../prisma/includes/cashback.js';

/**
 * Create a cashback entry.
 *
 * @param {object} data - Cashback payload (user_id, amount, type, status, order links, etc.).
 * @returns {Promise<CashbackBase>} Created cashback.
 */
export async function createCashback(data: Record<string, any>): Promise<CashbackBase> {
	try {
		return await prisma.cashback.create({
			data: {
				...data,
			},
		});
	} catch (error) {
		console.error('Error creating cashback:', error);
		throw error;
	}
}

/**
 * Get a user's cashback history ordered by earned_at desc.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<CashbackDetail[]>} Cashback entries with taxi/delivery order includes.
 */
export async function getUserCashbackHistory(user_id: string): Promise<CashbackDetail[]> {
	try {
		const cashbacks = await prisma.cashback.findMany({
			where: { user_id },
			include: cashbackOrdersInclude,
			orderBy: { earned_at: 'desc' },
		});

		return (cashbacks as CashbackWithOrdersPrisma[]).map(toCashbackDetail);
	} catch (error) {
		console.error('Error fetching user cashback history:', error);
		throw error;
	}
}

/**
 * Get pending cashback for a user by type ordered by earned_at asc.
 *
 * @param {string} user_id - User ID.
 * @param {string} type - Cashback type (CASHBACK_TYPE enum).
 * @returns {Promise<CashbackDetail[]>} Pending cashback entries.
 */
export async function getPendingUserCashbackByType(user_id: string, type: string): Promise<CashbackDetail[]> {
	try {
		const cashbacks = await prisma.cashback.findMany({
			where: { user_id: user_id, status: CASHBACK_STATUS.PENDING, type: type },
			include: cashbackOrdersInclude,
			orderBy: { earned_at: 'asc' },
		});

		return (cashbacks as CashbackWithOrdersPrisma[]).map(toCashbackDetail);
	} catch (error) {
		console.error('Error fetching pending user cashback by type:', error);
		throw error;
	}
}

export default {
	createCashback,
	getUserCashbackHistory,
	getPendingUserCashbackByType,
};
