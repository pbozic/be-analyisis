const DeliveryOrderDao = require("../dao/DeliveryOrder");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const { io } = require("../socket");
const { DELIVERY_ORDER_STATUS } = require("./constants");
const UserSockets = require('../socket').UserSockets;

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
	//TODO: extend logic to find (closest, available) drivers for order
	return await DeliveryDriverDao.getOnlineDeliveryDrivers();
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
			last_sent_at: {
				lte: new Date(new Date() - 5 * 60 * 1000)
			}
		}
	});
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