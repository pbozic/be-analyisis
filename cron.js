const cron = require("node-cron");
const { checkIfOrdersNeedSending } = require("./lib/taxiHelpers");
const { checkIfDeliveryOrdersNeedSending } = require("./lib/deliveryHelpers");

function startCronJobs() { 
    // Every minute
    cron.schedule("* * * * *", checkIfOrdersNeedSending);
    cron.schedule("* * * * *", checkIfDeliveryOrdersNeedSending);
}


module.exports = startCronJobs;