const prisma = require('../prisma/prisma');
const { CASHBACK_STATUS, CASHBACK_TYPE } = require('../lib/constants');

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

module.exports = {
	createCashback,
	getUserCashbackHistory,
	getPendingUserCashbackByType,
};
