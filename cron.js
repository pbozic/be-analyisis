const cron = require("node-cron");
const { checkIfOrdersNeedSending } = require("./lib/taxiHelpers");
const { checkIfDeliveryOrdersNeedSending, checkIfRestaurantOrderIsPrepared } = require("./lib/deliveryHelpers");

function startCronJobs() { 
    // Every minute
    cron.schedule("* * * * *", checkIfOrdersNeedSending);
    cron.schedule("* * * * *", checkIfDeliveryOrdersNeedSending);
    cron.schedule("* * * * *", checkIfRestaurantOrderIsPrepared);
}


module.exports = startCronJobs;