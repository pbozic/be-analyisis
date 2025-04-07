const cron = require("node-cron");
const TaxiHelpers = require("./lib/taxiHelpers");
const DeliveryHelpers = require("./lib/deliveryHelpers");
const WalletFundsHelper = require("./lib/WalletFundsHelpers");
const BusinessHelper = require("./lib/businessHelpers");
const { checkPingStatus } = require("./lib/driverHelpers");
const stripe = require("./lib/stripe");

function startCronJobs() { 
    // Every minute
    cron.schedule("* * * * *", TaxiHelpers.checkIfOrdersNeedSending);
    cron.schedule("* * * * *", TaxiHelpers.searchAfter20Seconds);
    cron.schedule("* * * * *", TaxiHelpers.searchAfter40Seconds);
    cron.schedule("* * * * *", DeliveryHelpers.checkIfDeliveryOrdersNeedSending);
    cron.schedule("* * * * *", DeliveryHelpers.checkIfRestaurantOrderIsPrepared);
    cron.schedule("* * * * *", DeliveryHelpers.autoRejectDeliveryOrders);
    cron.schedule("* * * * *", checkPingStatus);
    cron.schedule("* * * * *", TaxiHelpers.revokeAcceptedOrdersFromDriverHandler);
    cron.schedule("* * * * *", TaxiHelpers.scheduledOrdersNotificationsHandler);
    cron.schedule("* * * * *", TaxiHelpers.closeScheduledOrders);

    // Every day at midnight - check for expired credits
    cron.schedule("0 0 * * *", WalletFundsHelper.handleCreditExpiration);
    cron.schedule("0 9 * * *", WalletFundsHelper.notifyUpcomingCreditExpirations);
    cron.schedule("0 0 * * *", BusinessHelper.aggregateScoringPoints);

    //Every 10 days
    cron.schedule("0 0 */10 * *", stripe.payoutAvailableBalanceToBusinesses);

    cron.schedule("59 23 * * *", BusinessHelper.setNewBusinesses);
}

module.exports = startCronJobs;