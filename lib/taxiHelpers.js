const TaxiOrderDao = require("../dao/TaxiOrder");
const DriverDao = require("../dao/Driver");
const UserSockets = require('../socket').UserSockets;
async function findTaxiOrderDrivers(order) {
    return new Promise(async (resolve, reject) => {
        let drivers = await selectTaxiOrderDrivers(order);
        let pushDrivers = []
        for (let driver of drivers) {
            pushDrivers.push(sendTaxiOrderToDriver(order, driver));
        }
        Promise.all(pushDrivers).then(() => {
            TaxiOrderDao.updateOrderLastSentAt(order.taxi_order_id);
            resolve();
        }).catch((e) => {
            console.log("Find drivers", e)
            reject(e);
        });
    });  
}

async function selectTaxiOrderDrivers(order) {
         //TODO: implement logic to find drivers for order
        return await DriverDao.getDrivers();
}

async function sendTaxiOrderToDriver(order, driver) {
    let isSent = await TaxiOrderDao.isOrderSent(order.taxi_order_id, driver);
    if (isSent) {
        return;
    }
    //TODO: remove commentsbelow to actaully send orders to active drivers
    await TaxiOrderDao.createOrderSent(order.taxi_order_id, driver);
    if (!UserSockets.get(driver.user_id)) {
        return;
    }
    console.log("Sending order: ", order.taxi_order_id, " to driver: ", driver.user_id)
    UserSockets.get(driver.user_id).emit('new_order', order);

}
async function revokeTaxiOrderFromDrivers(taxi_order_id) {
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
            status: "PENDING",
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
