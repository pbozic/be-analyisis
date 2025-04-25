const ReferralDao = require("../dao/Referrals");
const WalletFundsDao = require("../dao/WalletFunds");
const { CREDITS, ORDER_TYPE, FUNDS_TYPE } = require("./constants");
const { sendReferralNotifications } = require("./notifications");

async function handleReferral(userId) {
	const referral = await ReferralDao.getReferralByReferredUserId(userId);
	if (!referral) {
		console.log(`No referral found for user ${userId}`);
		return;
	}

	if (!referral?.conditions_met) {
		// await ReferralDao.updateReferralConditionsMet(referral.referral_id, true);
		if (referral?.referrer) {
			const referredUserTaxiOrders = referral.referred?.taxi_orders
			const referredUserDeliveryOrders = referral.referred?.delivery_orders
			const referredUserCombinedOrders = [...referredUserTaxiOrders, ...referredUserDeliveryOrders];
			if (referredUserCombinedOrders.length > 0) {
				const taxiOrders = referredUserCombinedOrders.filter(order => {
					if (order.type === ORDER_TYPE.TAXI) {
						return order.payment?.price >= CREDITS.MINIMUM_ORDER_AMOUNT
					} else {
						return order.details?.total_price >= CREDITS.MINIMUM_ORDER_AMOUNT
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
						referral: { connect: { referral_id: referral.referral_id } }
					});
					await sendReferralNotifications(referral.referrer);
				}
			}
		} else {
			console.error("The referrer was not found and couldn't be given credits");
		}
	}
}

module.exports = {
	handleReferral,
}