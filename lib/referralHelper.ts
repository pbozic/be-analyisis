import ReferralDao from '../dao/Referrals.ts';
import WalletFundsDao from '../dao/WalletFunds.ts';
import TaxiOrderDao from '../dao/TaxiOrder.ts';
import DeliveryOrderDao from '../dao/DeliveryOrder.ts';
import { CREDITS, TAXI_ORDER_STATUS, DELIVERY_ORDER_STATUS } from './constants.js';
import { sendReferralNotifications } from './notifications.js';
import type { UserBase } from '../schemas/dto/User/index.js';
import type { TaxiOrderDetail } from '../schemas/dto/TaxiOrders/taxiOrder.dto.js';
import type { DeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/index.js';

function isTaxiOrder(order: TaxiOrderDetail | DeliveryOrderDetail): order is TaxiOrderDetail {
	return Object.prototype.hasOwnProperty.call(order, 'type');
}

/**
 * Check referral conditions for a newly active user and award credits to the referrer if thresholds are met.
 * - Aggregates both taxi and delivery orders for the referred user.
 * - Marks referral as conditions_met and creates a credit for the referrer when eligible.
 * @param {string} userId - The referred user's ID to evaluate.
 * @returns {Promise<void>} Resolves when processing completes.
 */
export async function handleReferral(userId: string): Promise<void> {
	const referral = await ReferralDao.getReferralByReferredUserId(userId);
	if (!referral) {
		console.log(`No referral found for user ${userId}`);
		return;
	}

	if (referral.conditions_met) {
		return;
	}

	if (!referral.referrer) {
		console.error("The referrer was not found and couldn't be given credits");
		return;
	}

	const referredUserTaxiOrders = await TaxiOrderDao.getOrders({
		where: {
			status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
			user_id: referral.referred_user_id,
		},
	});

	const referredUserDeliveryOrders = await DeliveryOrderDao.getOrders({
		where: {
			status: DELIVERY_ORDER_STATUS.SUCCESS,
			user_id: referral.referred_user_id,
		},
	});

	const referredUserCombinedOrders: Array<TaxiOrderDetail | DeliveryOrderDetail> = [
		...referredUserTaxiOrders,
		...referredUserDeliveryOrders,
	];

	if (referredUserCombinedOrders.length === 0) {
		return;
	}

	const eligibleOrders = referredUserCombinedOrders.filter((order) => {
		if (isTaxiOrder(order)) {
			const price = typeof order.price === 'number' ? order.price : 0;
			return price >= CREDITS.MINIMUM_ORDER_AMOUNT;
		}
		const total =
			order.details && typeof (order.details as any).total_price === 'number'
				? ((order.details as any).total_price as number)
				: 0;
		return total >= CREDITS.MINIMUM_ORDER_AMOUNT;
	});

	if (eligibleOrders.length >= CREDITS.REFERRAL_THRESHOLD) {
		await ReferralDao.updateReferralConditionsMet(referral.referral_id, true);

		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 30);
		expiryDate.setHours(23, 59, 59, 999);

		await WalletFundsDao.createCredit({
			expires_at: expiryDate.toISOString(),
			user_id: referral.referrer.user_id,
			amount: CREDITS.REFERRAL,
			type: 'CREDITS_ANY',
			transaction_type: 'CREDIT',
			referral_id: referral.referral_id,
		});

		await sendReferralNotifications(referral.referrer as UserBase);
	}
}

export default {
	handleReferral,
};
