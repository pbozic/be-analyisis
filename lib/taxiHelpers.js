const TaxiOrderDao = require("../dao/TaxiOrder");
const DriverDao = require("../dao/Driver");
const UserSockets = require('../socket').UserSockets;
async function findTaxiOrderDrivers(order) {
    return new Promise(async (resolve, reject) => {
        
        //TODO: get all drivers for start
        let drivers = await selectTaxiOrderDrivers(order);
        let pushDrivers = []
        for (let driver of drivers) {
            pushDrivers.push(sendTaxiOrderToDriver(order, driver));
        }
        Promise.all(pushDrivers).then(() => {
            TaxiOrderDao.updateOrderLastSentAt(order.taxi_order_id);
            resolve();
            //TODO: update last_sent_at
        }).catch((e) => {
            console.log("Find drivers", e)
            reject(e);
        });
    });  
}

async function selectTaxiOrderDrivers(order) {
        //TODO: get specific drivers for order
        return await DriverDao.getDrivers();
}

async function sendTaxiOrderToDriver(order, driver) {
    await TaxiOrderDao.createOrderSent(order.taxi_order_id, driver);
    // TODO: send Socket update to driver
    UserSockets.get(driver.user_id).emit('new_order', order);

}
async function revokeTaxiOrderFromDrivers(taxi_order_id) {
     //TODO: revoke order request from drivers that did not accept it
    let taxiOrderSent = await TaxiOrderDao.getSentDrivers(taxi_order_id);
    for (let sent of taxiOrderSent) {
        if (sent.accepted) {
            continue;
        }
        UserSockets.get(sent.driver.user_id).emit('order_revoked', taxi_order_id);
    }
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
