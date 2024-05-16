const TaxiOrderDao = require("../dao/TaxiOrder");
async function findTaxiOrderDrivers(order) {
    return new Promise(async (resolve, reject) => {
        
        //TODO: get all drivers for start
        let drivers = await selectTaxiOrderDrivers(order);
        let pushDrivers = []
        for (let driver of drivers) {
            pushDrivers.push(sendTaxiOrderToDriver(driver));
        }
        Promise.all(pushDrivers).then(() => {
            resolve();
            //TODO: update last_sent_at
        }).catch((e) => {
            console.log("Find drivers", e)
            reject(e);
        });
    });  
}

async function selectTaxiOrderDrivers(order) {
        //TODO: get all drivers for start
        return []
}

async function sendTaxiOrderToDriver(taxi_order_id, driver) {
    await TaxiOrderDao.createOrderSent(taxi_order_id, driver);
    // TODO: send Socket update to driver
}
async function revokeTaxiOrderFromDrivers(taxi_order_id) {
    //TODO: revoke order request from drivers that did not accept it
}
async function driverAcceptTaxiOrder(taxi_order_id, driver_id) {
    
}

async function checkIfOrdersNeedSending() {
    console.log("Checking for orders to send...")
    let orders = await TaxiOrderDao.getOrders({
        where: {
            order_status: "PENDING",
            last_sent_at: {
                lte: new Date(new Date() - 5 * 60 * 1000)
            }
        }
    })
    for (let order of orders) {
        findTaxiOrderDrivers(order);
    }
}

module.exports = {
    checkIfOrdersNeedSending,
    findTaxiOrderDrivers,
    selectTaxiOrderDrivers,
    sendTaxiOrderToDriver,
    revokeTaxiOrderFromDrivers,
};
