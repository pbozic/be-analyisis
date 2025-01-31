const CashbackDao = require('../dao/Cashback');

async function handleCreditExpiration() {
	try {
		const expiredCount = await CashbackDao.expireOutdatedCredits();
		if (expiredCount > 0) {
			console.log(`Successfully expired ${expiredCount} credits`);
		}
	} catch (error) {
		console.error('Error in handleCreditExpiration:', error);
	}
}

async function notifyUpcomingCreditExpirations() {
	try {
		// Check for credits expiring in 7 days
		const sevenDayWarnings = await CashbackDao.findCreditsExpiringInDays(7);
		for (const credit of sevenDayWarnings) {
			//TODO: send notifications
		}

		// Check for credits expiring tomorrow
		const oneDayWarnings = await CashbackDao.findCreditsExpiringInDays(1);
		for (const credit of oneDayWarnings) {
			//TODO: send notifications
		}

		const totalNotifications = sevenDayWarnings.length + oneDayWarnings.length;
		if (totalNotifications > 0) {
			console.log(`Sent ${totalNotifications} credit expiration notifications`);
		}
	} catch (error) {
		console.error('Error in notifyUpcomingCreditExpirations:', error);
	}
}

module.exports = {
	handleCreditExpiration,
	notifyUpcomingCreditExpirations
};