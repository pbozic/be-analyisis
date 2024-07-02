const DeliveryOrderDao = require("../dao/DeliveryOrder");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const { io } = require("../socket");
const { DELIVERY_ORDER_STATUS } = require("./constants");
const UserSockets = require('../socket').UserSockets;
const gApi = require('./gApis');
const NUMBER_OF_DRIVERS_TO_SEND = 1;
async function findDeliveryOrderDrivers(order) {
	return new Promise(async (resolve, reject) => {
		let drivers = await selectDeliveryOrderDrivers(order);
		let pushDrivers = [];
		for (let driver of drivers) {
			pushDrivers.push(sendDeliveryOrderToDriver(order, driver));
		}
		Promise.all(pushDrivers).then(() => {
			DeliveryOrderDao.updateOrderLastSentAt(order.order_id);
			resolve();
		}).catch((e) => {
			console.log("Find delivery drivers error", e);
			reject(e);
		});
	});
}

async function selectDeliveryOrderDrivers(order) {
	let now = new Date();
	let readyTime = new Date(order.details.ready_for_pickup_at)
  
	let onlineDrivers = await DeliveryDriverDao.getOnlineDeliveryDrivers();
  
	let eligibleDrivers = [];
	for (let driver of onlineDrivers) {
		let isSent = await DeliveryOrderDao.isOrderSent(order.order_id, driver);
		if (isSent) {
			continue;
		}
		if (driver.on_order) {
			continue;
		}
		let { distance, duration, result } = await gApi.distanceBetweenTwoPoints(driver.location.coordinates, order.pickup_location.coordinates, "driving", new Date());
		let travelTime = result.rows[0].elements[0].duration.value;
		console.log("travel time: ", travelTime);

		let arrivalTime = new Date(now.getTime() + travelTime * 1000);
		console.log("arrival time: ", arrivalTime.getTime());
		console.log("ready time: ", readyTime.getTime());
		console.log("arrival time - ready time: ", arrivalTime.getTime() < readyTime.getTime());

		if (arrivalTime.getTime() < readyTime.getTime()) {
			driver.distance = distance;
			driver.duration = result.rows[0].elements[0].duration.value;
			driver.timeDifference = arrivalTime.getTime() - readyTime.getTime();
			eligibleDrivers.push(driver);
	    }
	}
	eligibleDrivers.sort((a, b) => a.timeDifference - b.timeDifference);
	eligibleDrivers = eligibleDrivers.slice(0, NUMBER_OF_DRIVERS_TO_SEND);
	console.log("eligible drivers: ", eligibleDrivers);
	return eligibleDrivers;
}

async function sendDeliveryOrderToDriver(order, delivery_driver) {
	let isSent = await DeliveryOrderDao.isOrderSent(order.order_id, delivery_driver);
	if (isSent) {
		return;
	}
	if (!UserSockets.get(delivery_driver.user_id)) {
		return;
	}
	await DeliveryOrderDao.createOrderSent(order.order_id, delivery_driver);

	console.log("Sending order: ", order.order_id, " to delivery driver: ", delivery_driver.user_id);
	UserSockets.get(delivery_driver.user_id).emit('new_order__delivery', order);
}

async function revokeDeliveryOrderFromDrivers(order_id) {
	let deliveryOrderSent = await DeliveryOrderDao.getSentDeliveryDrivers(order_id);
	for (let sent of deliveryOrderSent) {
		if (sent.accepted) {
			continue;
		}
		UserSockets.get(sent.delivery_driver.user_id).emit('order_revoked__delivery', order_id);
	}
}

async function checkIfDeliveryOrdersNeedSending() {
	console.log("Checking for delivery orders to send...");
	let orders = await DeliveryOrderDao.getOrders({
		where: {
			status: DELIVERY_ORDER_STATUS.MERCHANT_PREPARING,
			OR: [
                { last_sent_at: null }, // Include records where last_sent_at is null
                { last_sent_at: { lte: new Date(new Date() - 5 * 60 * 1000) } }, // Include records where last_sent_at is less than or equal to 5 minutes ago
              ],
		}
	});
	console.log("open delivery orders: ", orders.length);
	for (let order of orders) {
		findDeliveryOrderDrivers(order); //TODO: notify the closest drivers X minutes (travel time to the merchant from delivery drivers) before order status is MERCHANT_READY_FOR_PICKUP.
	}
}

module.exports = {
	checkIfDeliveryOrdersNeedSending,
	findDeliveryOrderDrivers,
	selectDeliveryOrderDrivers,
	sendDeliveryOrderToDriver,
	revokeDeliveryOrderFromDrivers
};