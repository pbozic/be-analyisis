const prisma = require('../prisma/prisma');
const { CREDIT_STATUS, CASHBACK_STATUS } = require('../lib/constants');

const createCredit = async (data) => {
	try {
		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 30);
		expiryDate.setHours(23, 59, 59, 999);
		return await prisma.credits.create({
			data: {
				...data,
				expires_at: expiryDate,
			}
		});
	} catch (error) {
		throw error;
	}
}

const convertCashbacksToCredit = async (data, pendingCashbacks) => {
	try {
		return await prisma.$transaction(async (tx) => {
			const expiryDate = new Date();
			expiryDate.setDate(expiryDate.getDate() + 30);
			expiryDate.setHours(23, 59, 59, 999);
			const credit = await tx.credits.create({
				data: {
					...data,
					expires_at: expiryDate,
				}
			});
			await tx.cashback.updateMany({
				where: {
					cashback_id: {
						in: pendingCashbacks.map(cb => cb.cashback_id)
					}
				},
				data: {
					status: CASHBACK_STATUS.CONVERTED,
					converted_at: new Date(),
				}
			});
			return credit;
		});
	} catch (error) {
		throw error;
	}
}

const expireOutdatedCredits = async () => {
	const now = new Date();
	now.setHours(0, 0, 0, 0);

	try {
		return await prisma.credits.updateMany({
			where: {
				status: CREDIT_STATUS.ACTIVE,
				expires_at: {
					lt: now
				}
			},
			data: {
				status: CREDIT_STATUS.EXPIRED
			}
		});
	} catch (error) {
		console.error('Error expiring credits:', error);
		throw error;
	}
};

const findCreditsExpiringInDays = async (days) => {
	try {
		const startDate = new Date();
		startDate.setHours(0, 0, 0, 0);

		const endDate = new Date();
		endDate.setDate(endDate.getDate() + days);
		endDate.setHours(23, 59, 59, 999);

		return prisma.cashback.findMany({
			where: {
				status: CREDIT_STATUS.ACTIVE,
				expires_at: {
					gte: startDate,
					lte: endDate
				}
			},
			include: {
				user: true
			}
		});
	} catch (error) {
		throw error;
	}
}

const getAvailableCredits = async (userId, type) => {
	try {
		return await prisma.credits.findMany({
			where: {
				user_id: userId,
				type: type,
				status: CREDIT_STATUS.ACTIVE
			}
		});
	} catch (error) {
		throw error;
	}
}

const getExpiredCredits = async (userId, type) => {
	try {
		return await prisma.credits.findMany({
			where: {
				user_id: userId,
				type: type,
				status: CREDIT_STATUS.EXPIRED
			}
		});
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createCredit,
	getAvailableCredits,
	getExpiredCredits,
	convertCashbacksToCredit,
	expireOutdatedCredits,
	findCreditsExpiringInDays,
}