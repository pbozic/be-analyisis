import prisma from '../prisma/prisma.js';
import { ReferralBase, ReferralDetail } from '../schemas/dto/Referral/referral.dto.js';

/**
 * Create a referral linking referrer and referred users with a referral code.
 *
 * @param {string} referrerUserId - Referrer user ID.
 * @param {string} referredUserId - Referred user ID.
 * @param {string} referralCode - Referral code used.
 * @returns {Promise<ReferralDetail>} Created referral with referrer included.
 */
export const createReferral = async (
	referrerUserId: string,
	referredUserId: string,
	referralCode: string
): Promise<ReferralDetail> => {
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
		throw error as Error;
	}
};

/**
 * Get a referral by its referral_id.
 *
 * @param {string} referralId - Referral ID.
 * @returns {Promise<ReferralBase|null>} Referral or null.
 */
export const getReferralByReferralId = async (referralId: string): Promise<ReferralBase | null> => {
	try {
		return await prisma.referrals.findUnique({
			where: { referral_id: referralId },
		});
	} catch (error) {
		console.error('Error getting referral:', error);
		throw error as Error;
	}
};

/**
 * Update whether referral conditions are met.
 *
 * @param {string} referralId - Referral ID.
 * @param {boolean} conditionsMet - Conditions met flag.
 * @returns {Promise<ReferralBase>} Updated referral.
 */
export const updateReferralConditionsMet = async (
	referralId: string,
	conditionsMet: boolean
): Promise<ReferralBase> => {
	try {
		return await prisma.referrals.update({
			where: { referral_id: referralId },
			data: { conditions_met: conditionsMet },
		});
	} catch (error) {
		console.error('Error updating referral conditions met:', error);
		throw error as Error;
	}
};

/**
 * Update whether the referral reward has been claimed.
 *
 * @param {string} referralId - Referral ID.
 * @param {boolean} claimed - Reward claimed flag.
 * @returns {Promise<ReferralBase>} Updated referral.
 */
export const updateReferralRewardClaimed = async (referralId: string, claimed: boolean): Promise<ReferralBase> => {
	try {
		return await prisma.referrals.update({
			where: { referral_id: referralId },
			data: { reward_claimed: claimed },
		});
	} catch (error) {
		console.error('Error updating referral award claimed:', error);
		throw error as Error;
	}
};

/**
 * Get a referral by referred_user_id with referrer and referred included.
 *
 * @param {string} referredUserId - Referred user ID.
 * @returns {Promise<ReferralDetail|null>} Referral or null.
 */
export const getReferralByReferredUserId = async (referredUserId: string): Promise<ReferralDetail | null> => {
	try {
		return await prisma.referrals.findUnique({
			where: { referred_user_id: referredUserId },
			include: { referrer: true, referred: true },
		});
	} catch (error) {
		console.error('Error getting referral:', error);
		throw error as Error;
	}
};

/**
 * Get referrals initiated by a referrer; includes referred user.
 *
 * @param {string} referrerUserId - Referrer user ID.
 * @returns {Promise<ReferralBase[]>} Referrals.
 */
export const getReferralsByReferrerUserId = async (referrerUserId: string): Promise<ReferralBase[]> => {
	try {
		return await prisma.referrals.findMany({
			where: { referrer_user_id: referrerUserId },
			include: { referred: true },
		});
	} catch (error) {
		console.error('Error getting referrals:', error);
		throw error as Error;
	}
};

export default {
	getReferralByReferralId,
	createReferral,
	updateReferralConditionsMet,
	updateReferralRewardClaimed,
	getReferralByReferredUserId,
	getReferralsByReferrerUserId,
};
