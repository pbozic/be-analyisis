import prisma from '../prisma/prisma.js';
import { CASHBACK_STATUS } from '../lib/constants.js';
/**
 * Create a cashback entry.
 *
 * @param {object} data - Cashback payload (user_id, amount, type, status, order links, etc.).
 * @returns {Promise<object>} Created cashback.
 */
const createCashback = async (data) => {
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
};
/**
 * Get a user's cashback history ordered by earned_at desc.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<object[]>} Cashback entries with taxi/delivery order includes.
 */
const getUserCashbackHistory = async (user_id) => {
	try {
		return prisma.cashback.findMany({
			where: {
				user_id,
			},
			include: {
				taxi_order: true,
				delivery_order: true,
			},
			orderBy: {
				earned_at: 'desc',
			},
		});
	} catch (error) {
		console.error('Error fetching user cashback history:', error);
		throw error;
	}
};
/**
 * Get pending cashback for a user by type ordered by earned_at asc.
 *
 * @param {string} user_id - User ID.
 * @param {string} type - Cashback type (CASHBACK_TYPE enum).
 * @returns {Promise<object[]>} Pending cashback entries.
 */
const getPendingUserCashbackByType = async (user_id, type) => {
	try {
		return prisma.cashback.findMany({
			where: {
				user_id: user_id,
				status: CASHBACK_STATUS.PENDING,
				type: type,
			},
			include: {
				taxi_order: true,
				delivery_order: true,
			},
			orderBy: {
				earned_at: 'asc',
			},
		});
	} catch (error) {
		console.error('Error fetching pending user cashback by type:', error);
		throw error;
	}
};
export { createCashback };
export { getUserCashbackHistory };
export { getPendingUserCashbackByType };
export default {
	createCashback,
	getUserCashbackHistory,
	getPendingUserCashbackByType,
};
