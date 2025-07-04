import cron from 'node-cron';

import TaxiHelpers from './lib/taxiHelpers.js';
import DeliveryHelpers from './lib/deliveryHelpers.js';
import WalletFundsHelper from './lib/WalletFundsHelpers.js';
import BusinessHelper from './lib/businessHelpers.js';
import DailyMealHelper from './lib/dailyMealHelpers.js';
import { getSettlementsWeatherForecast } from './lib/weatherHelpers.js';
import { checkPingStatus } from './lib/driverHelpers.js';
import stripe from './lib/stripe.js';
function startCronJobs() {
	// Every minute
	cron.schedule('* * * * *', TaxiHelpers.checkIfOrdersNeedSending);
	cron.schedule('* * * * *', TaxiHelpers.searchAfter20Seconds);
	cron.schedule('* * * * *', TaxiHelpers.searchAfter40Seconds);
	cron.schedule('* * * * *', DeliveryHelpers.checkIfDeliveryOrdersNeedSending);
	cron.schedule('* * * * *', DeliveryHelpers.checkIfRestaurantOrderIsPrepared);
	cron.schedule('* * * * *', DeliveryHelpers.autoRejectDeliveryOrders);
	cron.schedule('* * * * *', checkPingStatus);
	cron.schedule('* * * * *', TaxiHelpers.revokeAcceptedOrdersFromDriverHandler);
	cron.schedule('* * * * *', TaxiHelpers.scheduledOrdersNotificationsHandler);
	cron.schedule('* * * * *', TaxiHelpers.closeScheduledOrders);
	cron.schedule('* * * * *', DailyMealHelper.generateDailyMealMenuCategoriesUpToToday);

	// Every day at midnight - check for expired credits
	cron.schedule('0 0 * * *', WalletFundsHelper.handleCreditExpiration);
	cron.schedule('0 0 * * *', DeliveryHelpers.releaseWFForFailedOrders);
	cron.schedule('0 9 * * *', WalletFundsHelper.notifyUpcomingCreditExpirations);
	cron.schedule('0 0 * * *', BusinessHelper.aggregateScoringPoints);
	cron.schedule('* */1 * * *', getSettlementsWeatherForecast);
	cron.schedule('0 0 * * *', DailyMealHelper.generateDailyMealMenuCategoriesUpToToday);
	//Every 10 days
	cron.schedule('0 0 */10 * *', stripe.payoutAvailableBalanceToBusinesses);
	cron.schedule('59 23 * * *', BusinessHelper.setNewBusinesses);
}
export default startCronJobs;
