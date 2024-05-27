const cron = require("node-cron");
const { checkIfOrdersNeedSending } = require("./lib/taxiHelpers");

function startCronJobs() { 
    // Every minute
    cron.schedule("* * * * *", checkIfOrdersNeedSending);
}


module.exports = startCronJobs;