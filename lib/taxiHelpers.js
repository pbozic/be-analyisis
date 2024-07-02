const TaxiOrderDao = require("../dao/TaxiOrder");
const DriverDao = require("../dao/Driver");
const { io } = require("../socket");
const { TAXI_ORDER_STATUS } = require("./constants");
const UserSockets = require('../socket').UserSockets;
const prisma = require('../prisma/prisma');
const gApi = require('./gApis');
const NUMBER_OF_DRIVERS_TO_SEND = 1;

async function findTaxiOrderDrivers(order) {
    return new Promise(async (resolve, reject) => {
        let drivers = await selectTaxiOrderDrivers(order);
        let pushDrivers = []
        for (let driver of drivers) {
            pushDrivers.push(sendTaxiOrderToDriver(order, driver));
        }
        Promise.all(pushDrivers).then(() => {
            TaxiOrderDao.updateOrderLastSentAt(order.order_id);
            resolve();
        }).catch((e) => {
            console.log("Find drivers error", e)
            reject(e);
        });
    });  
}
function compareDurations(a, b) {
    return parseInt(a.duration) - parseInt(b.duration);
  }

async function selectTaxiOrderDrivers(order) {
    let drivers = [];
    let radius = 2000;
    while (drivers.length === 0 && radius < 20000) {
        drivers = await prisma.drivers.inRadius(order.pickup_location.coordinates, radius);
        console.log(drivers);
        radius += 1000;
    }
    let acceptableDrivers = [];
    if (drivers.length > 0) { 
        for (driver of drivers) {
            let isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver);
            if (isSent) { 
                // driver already has order
                continue;
            }
            let { distance, duration, result } = await gApi.distanceBetweenTwoPoints(order.pickup_location.coordinates, driver.location.coordinates, "driving", new Date());
            driver.distance = distance;
            driver.duration = duration;
            acceptableDrivers.push(driver);
        }
    }
    acceptableDrivers.sort(compareDurations);
    acceptableDrivers = acceptableDrivers.slice(0, NUMBER_OF_DRIVERS_TO_SEND);
    return acceptableDrivers
}

async function sendTaxiOrderToDriver(order, driver) {
    let isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver);
    if (isSent) {
        return;
    }
    if (!UserSockets.get(driver.user_id)) {
        return;
    }
    await TaxiOrderDao.createOrderSent(order.order_id, driver);

    console.log("Sending order: ", order.order_id, " to driver: ", driver.user_id)
    UserSockets.get(driver.user_id).emit('new_order__taxi', order);
}

async function revokeTaxiOrderFromDrivers(order_id) {
    let taxiOrderSent = await TaxiOrderDao.getSentDrivers(order_id);
    for (let sent of taxiOrderSent) {
        if (sent.accepted) {
            continue;
        }
        UserSockets.get(sent.driver.user_id).emit('order_revoked__taxi', order_id);
    }
}

async function checkIfOrdersNeedSending() {
    console.log("Checking for orders to send...")
    let orders = await TaxiOrderDao.getOrders({
        where: {
            status: TAXI_ORDER_STATUS.PENDING,
            OR: [
                { last_sent_at: null }, // Include records where last_sent_at is null
                { last_sent_at: { lte: new Date(new Date() - 5 * 60 * 1000) } }, // Include records where last_sent_at is less than or equal to 5 minutes ago
              ],
        }
    })
    console.log("open orders: ", orders.length)
    for (let order of orders) {
        findTaxiOrderDrivers(order);
    }
}

module.exports = {
    checkIfOrdersNeedSending,
    findTaxiOrderDrivers,
    selectTaxiOrderDrivers,
    sendTaxiOrderToDriver,
    revokeTaxiOrderFromDrivers
};
