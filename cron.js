const cron = require("node-cron");
const { checkIfOrdersNeedSending } = require("./lib/taxiHelpers");
const { checkIfDeliveryOrdersNeedSending, checkIfRestaurantOrderIsPrepared } = require("./lib/deliveryHelpers");
const  { chekPingStatus } = require("./lib/driverHelpers");

function startCronJobs() { 
    // Every minute
    cron.schedule("* * * * *", checkIfOrdersNeedSending);
    cron.schedule("* * * * *", checkIfDeliveryOrdersNeedSending);
    cron.schedule("* * * * *", checkIfRestaurantOrderIsPrepared);
    cron.schedule("* * * * *", chekPingStatus);

}


module.exports = startCronJobs;