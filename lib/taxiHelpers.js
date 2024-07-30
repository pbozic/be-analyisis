const TaxiOrderDao = require("../dao/TaxiOrder");
const DriverDao = require("../dao/Driver");
const { io } = require("../socket");
const { TAXI_ORDER_STATUS } = require("./constants");
const prisma = require("../prisma/prisma");
const gApi = require("./gApis");
const NUMBER_OF_DRIVERS_TO_SEND = 1;
const UserSockets = require("../socket").UserSockets;

async function findTaxiOrderDrivers(order) {
	return new Promise(async (resolve, reject) => {
		let drivers = [];

		if (order?.driver?.driver_id) {
			// If a specific driver is selected in the order creation, send the order only to that driver
			drivers = [await DriverDao.getDriverById(order.driver)];
		} else {
			drivers = await selectTaxiOrderDrivers(order);
		}

		let pushDrivers = [];
		for (let driver of drivers) {
			pushDrivers.push(sendTaxiOrderToDriver(order, driver));
		}
		Promise.all(pushDrivers).then(() => {
			TaxiOrderDao.updateOrderLastSentAt(order.order_id);
			resolve();
		}).catch((e) => {
			console.log("Find drivers error", e);
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
	let vehicleFilters = {
		class: order.preferences.vehicle_class,
		category: order.preferences.vehicle_category
	}
	if (order.find_driver_attempts === 4) {
		//TODO emit event to notify user that no drivers are available
		if (!UserSockets.get(order.user_id)) {
			return;
		}
		UserSockets.get(order.user_id).emit("no_drivers_found_taxi", order);
	}
	while (drivers.length === 0 && radius < 30000) {
		let drivers = await prisma.drivers.inRadius(order.pickup_location.coordinates, radius, order.preferences.ride_requirements, vehicleFilters);
		console.log(drivers);
		radius += 1000;
	}


	// If no drivers found within radius, get a list of all available drivers as fallback
	// if (drivers.length === 0) {
	// 	console.log("No drivers found within the radius. Using fallback option.");
	// 	drivers = await prisma.drivers.findMany();
	// }
    console.log("before check", drivers);
	let acceptableDrivers = [];
	if (drivers.length > 0) {
		for (let driver of drivers) {
			let isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver);
			
		
			let {
				distance,
				duration,
				result
			} = await gApi.distanceBetweenTwoPoints(order.pickup_location.coordinates, driver.location.coordinates, "driving", new Date());
			driver.distance = distance;
			driver.duration = duration;
			acceptableDrivers.push(driver);
		}
	}
	acceptableDrivers.sort(compareDurations);
	acceptableDrivers = acceptableDrivers.slice(0, NUMBER_OF_DRIVERS_TO_SEND);



	// Obtain the list of drivers again via their respective IDs to include user and vehicle information
	const eligibleDrivers = [];
	for (let driver of acceptableDrivers) {
		const detailedDriver = await DriverDao.getDriverById(driver.driver_id);
		if (detailedDriver) {
			eligibleDrivers.push(detailedDriver);
		}
	}
	await TaxiOrderDao.updateOrder(order.order_id, {
		find_drivers_attempts: order.find_drivers_attempts + 1
	})
	return eligibleDrivers;
}

async function sendTaxiOrderToDriver(order, driver) {
	let isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver);
	if (isSent) {
		console.log("Order: ", order.order_id, "was already sent to driver: ", driver.user_id);
		return;
	}
	if (!UserSockets.get(driver.user_id)) {
		return;
	}
	await TaxiOrderDao.createOrderSent(order.order_id, driver);

	console.log("Sending order: ", order.order_id, " to driver: ", driver.user_id);
	UserSockets.get(driver.user_id).emit("new_order__taxi", order);
}

async function resendPendingOrdersToDriver(driver) {
	try {
		const sentOrders = await TaxiOrderDao.getAlreadySentOrdersByDriverId(driver.driver_id);
		for (let sentOrder of sentOrders) {
			const order = await TaxiOrderDao.getOrder(sentOrder.order.order_id);
			if (order.status !== TAXI_ORDER_STATUS.PENDING) {
				continue;
			}
			if (UserSockets.get(driver.user_id)) {
				console.log("Re-sending order: ", order.order_id, " to driver: ", driver.user_id);
				UserSockets.get(driver.user_id).emit("new_order__taxi", order);
			}
		}
	} catch (error) {
		console.error("Error re-sending pending orders to driver:", error);
	}
}

async function sendActiveOrdersToDriver(driver) {
	try {
		const activeOrders = await TaxiOrderDao.getActiveOrdersByDriverId(driver.driver_id);
		if (UserSockets.get(driver.user_id)) {
			console.log("Sending [active] orders to driver: ", driver.user_id);
			UserSockets.get(driver.user_id).emit("load_active_orders__taxi", activeOrders);
		}
	} catch (error) {
		console.error("Error sending active orders to driver:", error);
	}
}

async function revokeTaxiOrderFromDrivers(order_id) {
	let taxiOrderSent = await TaxiOrderDao.getSentDrivers(order_id);
	for (let sent of taxiOrderSent) {
		if (sent.accepted) {
			continue;
		}
		UserSockets.get(sent.driver.user_id).emit("order_revoked__taxi", order_id);
	}
}

async function checkIfOrdersNeedSending() {
	try {
		console.log("Checking for taxi orders to send...");

		let orders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.PENDING,
				is_scheduled: false,
			}
		});
		console.log("Open taxi orders not scheduled:", orders.length);
		const tresholdAmountOfTimeLater = new Date(); // Current date and time
		tresholdAmountOfTimeLater.setMinutes(tresholdAmountOfTimeLater.getMinutes() + 30); // Add 30 min
		console.log("Scheduled time threshold:", tresholdAmountOfTimeLater);
		let scheduledOrders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.PENDING,
				is_scheduled: true,
				preferences: {
					path: ['departure_time'],
					lte: tresholdAmountOfTimeLater,
				},
			}
		});
		console.log("Open taxi orders scheduled:", scheduledOrders.length);
		for (let order of [...orders, ...scheduledOrders]) {
			console.log("Order last_sent_at:", order.last_sent_at);
			findTaxiOrderDrivers(order);
		}
	} catch (error) {
		console.log(error);
	}
	
}

module.exports = {
	checkIfOrdersNeedSending,
	findTaxiOrderDrivers,
	resendPendingOrdersToDriver,
	sendActiveOrdersToDriver,
	selectTaxiOrderDrivers,
	sendTaxiOrderToDriver,
	revokeTaxiOrderFromDrivers
};
