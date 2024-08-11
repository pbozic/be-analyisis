const cron = require("node-cron");
const { checkIfOrdersNeedSending, searchAfter20Seconds, searchAfter40Seconds, revokeAcceptedOrdersFromDriverHandler } = require("./lib/taxiHelpers");
const { checkIfDeliveryOrdersNeedSending, checkIfRestaurantOrderIsPrepared } = require("./lib/deliveryHelpers");
const  { chekPingStatus } = require("./lib/driverHelpers");

function startCronJobs() { 
    // Every minute
    cron.schedule("* * * * *", checkIfOrdersNeedSending);
    cron.schedule("* * * * *", searchAfter20Seconds);
    cron.schedule("* * * * *", searchAfter40Seconds);
    cron.schedule("* * * * *", checkIfDeliveryOrdersNeedSending);
    cron.schedule("* * * * *", checkIfRestaurantOrderIsPrepared);
    cron.schedule("* * * * *", chekPingStatus);
    cron.schedule("* * * * *", revokeAcceptedOrdersFromDriverHandler);

}


module.exports = startCronJobs;