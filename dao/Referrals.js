import prisma from '../prisma/prisma.js';
/**
 * Create a referral linking referrer and referred users with a referral code.
 *
 * @param {string} referrerUserId - Referrer user ID.
 * @param {string} referredUserId - Referred user ID.
 * @param {string} referralCode - Referral code used.
 * @returns {Promise<object>} Created referral with referrer included.
 */
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
/**
 * Get a referral by its referral_id.
 *
 * @param {string} referralId - Referral ID.
 * @returns {Promise<object|null>} Referral or null.
 */
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
/**
 * Update whether referral conditions are met.
 *
 * @param {string} referralId - Referral ID.
 * @param {boolean} conditionsMet - Conditions met flag.
 * @returns {Promise<object>} Updated referral.
 */
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
/**
 * Update whether the referral reward has been claimed.
 *
 * @param {string} referralId - Referral ID.
 * @param {boolean} claimed - Reward claimed flag.
 * @returns {Promise<object>} Updated referral.
 */
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
/**
 * Get a referral by referred_user_id with referrer and referred included.
 *
 * @param {string} referredUserId - Referred user ID.
 * @returns {Promise<object|null>} Referral or null.
 */
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
/**
 * Get referrals initiated by a referrer; includes referred user.
 *
 * @param {string} referrerUserId - Referrer user ID.
 * @returns {Promise<object[]>} Referrals.
 */
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
export { getReferralByReferralId };
export { createReferral };
export { updateReferralConditionsMet };
export { updateReferralRewardClaimed };
export { getReferralByReferredUserId };
export { getReferralsByReferrerUserId };
export default {
	getReferralByReferralId,
	createReferral,
	updateReferralConditionsMet,
	updateReferralRewardClaimed,
	getReferralByReferredUserId,
	getReferralsByReferrerUserId,
};
