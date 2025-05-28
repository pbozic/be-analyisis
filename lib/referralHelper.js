import ReferralDao from '../dao/Referrals.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import TaxiOrderDao from '../dao/TaxiOrder.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import { CREDITS, ORDER_TYPE, FUNDS_TYPE, TAXI_ORDER_STATUS, DELIVERY_ORDER_STATUS } from './constants.js';
import { sendReferralNotifications } from './notifications.js';
async function handleReferral(userId) {
	const referral = await ReferralDao.getReferralByReferredUserId(userId);
	if (!referral) {
		console.log(`No referral found for user ${userId}`);
		return;
	}
	if (!referral?.conditions_met) {
		// await ReferralDao.updateReferralConditionsMet(referral.referral_id, true);
		if (referral?.referrer) {
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
			const referredUserCombinedOrders = [...referredUserTaxiOrders, ...referredUserDeliveryOrders];
			if (referredUserCombinedOrders.length > 0) {
				const taxiOrders = referredUserCombinedOrders.filter((order) => {
					if (order.type === ORDER_TYPE.TAXI) {
						return order.payment?.price >= CREDITS.MINIMUM_ORDER_AMOUNT;
					} else {
						return order.details?.total_price >= CREDITS.MINIMUM_ORDER_AMOUNT;
					}
				});
				if (taxiOrders.length >= CREDITS.REFERRAL_THRESHOLD) {
					await ReferralDao.updateReferralConditionsMet(referral.referral_id, true);
					const expiryDate = new Date();
					expiryDate.setDate(expiryDate.getDate() + 30);
					expiryDate.setHours(23, 59, 59, 999);
					await WalletFundsDao.createCredit({
						expires_at: expiryDate,
						user: { connect: { user_id: referral.referrer.user_id } },
						amount: CREDITS.REFERRAL,
						type: FUNDS_TYPE.CREDITS_ANY,
						referral: { connect: { referral_id: referral.referral_id } },
					});
					await sendReferralNotifications(referral.referrer);
				}
			}
		} else {
			console.error("The referrer was not found and couldn't be given credits");
		}
	}
}
export { handleReferral };
export default {
	handleReferral,
};
