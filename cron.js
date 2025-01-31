const cron = require("node-cron");
const TaxiHelpers = require("./lib/taxiHelpers");
const DeliveryHelpers = require("./lib/deliveryHelpers");
const CashbackHelpers = require("./lib/cashbackHelpers");
const  { checkPingStatus } = require("./lib/driverHelpers");
const stripe = require("./lib/stripe");

function startCronJobs() { 
    // Every minute
    cron.schedule("* * * * *", TaxiHelpers.checkIfOrdersNeedSending);
    cron.schedule("* * * * *", TaxiHelpers.searchAfter20Seconds);
    cron.schedule("* * * * *", TaxiHelpers.searchAfter40Seconds);
    cron.schedule("* * * * *", DeliveryHelpers.checkIfDeliveryOrdersNeedSending);
    cron.schedule("* * * * *", DeliveryHelpers.checkIfRestaurantOrderIsPrepared);
    cron.schedule("* * * * *", checkPingStatus);
    cron.schedule("* * * * *", TaxiHelpers.revokeAcceptedOrdersFromDriverHandler);
    cron.schedule("* * * * *", TaxiHelpers.scheduledOrdersNotificationsHandler);
    cron.schedule("* * * * *", TaxiHelpers.closeScheduledOrders);

    // Every day at midnight - check for expired credits
    cron.schedule("0 0 * * *", CashbackHelpers.handleCreditExpiration);

    // cron.schedule("0 10 * * *", CashbackHelpers.notifyUpcomingCreditExpirations);

    //Every 10 days
    cron.schedule("0 0 */10 * *", stripe.payoutAvailableBalanceToBusinesses);

}


module.exports = startCronJobs;