const cron = require("node-cron");
const TaxiHelpers = require("./lib/taxiHelpers");
const DeliveryHelpers = require("./lib/deliveryHelpers");
const  { checkPingStatus } = require("./lib/driverHelpers");
const stripe = require("stripe");

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

    //Every 10 days at 10AM
    cron.schedule("0 10 */10 * *", stripe.payoutAvailableBalanceToBusinesses);

}


module.exports = startCronJobs;