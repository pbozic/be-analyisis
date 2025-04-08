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
	//TODO: update how we set referral conditions met!
	if (referral && !referral?.conditions_met) {
		await ReferralDao.updateReferralConditionsMet(referral.referral_id, true);
	//  return;
	// }
	// if (referral?.conditions_met) {
		if (referral?.referrer) {
			await WalletFundsDao.createCredit({
				user: { connect: { user_id: referral.referrer.user_id } },
				amount: CREDITS.TAXI,
				type: FUNDS_TYPE.CREDITS_ANY,
				referral: { connect: { referral_id: referral.referral_id } }
			});
			await sendReferralNotifications(referral.referrer);
		} else {
			console.error("The referrer was not found and couldn't be given credits");
		}
	}
}

module.exports = {
	handleReferral,
}