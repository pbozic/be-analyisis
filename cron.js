const cron = require("node-cron");
const TaxiHelpers = require("./lib/taxiHelpers");
const DeliveryHelpers = require("./lib/deliveryHelpers");
const  { checkPingStatus } = require("./lib/driverHelpers");

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

}


module.exports = startCronJobs;