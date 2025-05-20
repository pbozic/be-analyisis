const prisma = require('../prisma/prisma');
const { TAXI_ORDER_STATUS, DELIVERY_ORDER_STATUS } = require('../lib/constants');

const createReferral = async (referrerUserId, referredUserId, referralCode) => {
	try {
		return await prisma.referrals.create({
			data: {
				referral_code: referralCode,
				referrer: { connect: { user_id: referrerUserId } },
				referred: { connect: { user_id: referredUserId } },
			},
			include: {
				referrer: true,
			},
		});
	} catch (error) {
		console.error('Error creating referral:', error);
		throw error;
	}
};

const getReferralByReferralId = async (referralId) => {
	try {
		return await prisma.referrals.findUnique({
			where: {
				referral_id: referralId,
			},
		});
	} catch (error) {
		console.error('Error getting referral:', error);
		throw error;
	}
};

const updateReferralConditionsMet = async (referralId, conditionsMet) => {
	try {
		return await prisma.referrals.update({
			where: {
				referral_id: referralId,
			},
			data: {
				conditions_met: conditionsMet,
			},
		});
	} catch (error) {
		console.error('Error updating referral conditions met:', error);
		throw error;
	}
};

const updateReferralRewardClaimed = async (referralId, claimed) => {
	try {
		return await prisma.referrals.update({
			where: {
				referral_id: referralId,
			},
			data: {
				reward_claimed: claimed,
			},
		});
	} catch (error) {
		console.error('Error updating referral award claimed:', error);
		throw error;
	}
};

const getReferralByReferredUserId = async (referredUserId) => {
	try {
		return await prisma.referrals.findUnique({
			where: {
				referred_user_id: referredUserId,
			},
			include: {
				referrer: true,
				referred: true,
			},
		});
	} catch (error) {
		console.error('Error getting referral:', error);
		throw error;
	}
};

const getReferralsByReferrerUserId = async (referrerUserId) => {
	try {
		return await prisma.referrals.findMany({
			where: {
				referrer_user_id: referrerUserId,
			},
			include: {
				referred: true,
			},
		});
	} catch (error) {
		console.error('Error getting referrals:', error);
		throw error;
	}
};

module.exports = {
	getReferralByReferralId,
	createReferral,
	updateReferralConditionsMet,
	updateReferralRewardClaimed,
	getReferralByReferredUserId,
	getReferralsByReferrerUserId,
};
