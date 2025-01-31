const prisma = require('../prisma/prisma');
const { CASHBACK_STATUS } = require('../lib/constants');

const createCashback = async (data) => {
	try {
		return prisma.cashback.create({
			data: {
				data
			}
		});
	} catch (error) {
		console.error('Error creating credits:', error);
		throw error;
	}
}

const getUserCashbackHistory = async (user_id) => {
	try {
		return prisma.cashback.findMany({
			where: {
				user_id,
			},
			include: {
				taxi_order: true,
				delivery_order: true,
				referral: true
			},
			orderBy: {
				earned_at: 'desc'
			}
		});
	} catch (error) {
		console.error('Error fetching user credits:', error);
		throw error;
	}
}

const expireOutdatedCredits = async () => {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	try {
		const result = await prisma.cashback.updateMany({
			where: {
				status: CASHBACK_STATUS.ACTIVE,
				expires_at: {
					lt: now
				}
			},
			data: {
				status: CASHBACK_STATUS.EXPIRED
			}
		});

		return result.count;
	} catch (error) {
		console.error('Error expiring credits:', error);
		throw error;
	}
}

const findCreditsExpiringInDays = async (days) => {
	try {
		const startDate = new Date();
		startDate.setHours(0, 0, 0, 0);

		const endDate = new Date();
		endDate.setDate(endDate.getDate() + days);
		endDate.setHours(23, 59, 59, 999);

		return prisma.cashback.findMany({
			where: {
				status: CASHBACK_STATUS.ACTIVE,
				expires_at: {
					gte: startDate,
					lte: endDate
				}
			},
			include: {
				user: true
			}
		});
	} catch {
		throw error;
	}
}

module.exports = {
	createCashback,
	getUserCashbackHistory,
	expireOutdatedCredits,
	findCreditsExpiringInDays,
}