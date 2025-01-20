const TaxiOrderDao = require("../dao/TaxiOrder");
const DriverDao = require("../dao/Driver");

const { io } = require("../socket");
const { TAXI_ORDER_STATUS, VEHICLE_CLASS, ORDER_TYPE } = require("./constants");
const prisma = require("../prisma/prisma");
const gApi = require("./gApis");
const NUMBER_OF_DRIVERS_TO_SEND = 1;
const UserSockets = require("../socket").UserSockets;
const { sendNotificationToUser } = require("./oneSignal");
const moment = require("moment");
const { preferences } = require("joi");
const { getLocalisedTexts } = require("../localisations/languages");

const MAX_PENDING_ORDERS = 3;

async function scheduledOrdersNotificationsHandler() {
	try {
		const now = new Date();
		const twentyFourHoursLater = moment(now).add(24, "hours").toDate();
		const oneHourLater = moment(now).add(1, "hours").toDate();
		// Query orders where `scheduled_time` is exactly 24 hours from now
		const DayOrders = await prisma.taxi_orders.findMany({
			where: {
				preferences: {
					path: ["departure_time"],
					gte: moment(twentyFourHoursLater).startOf("minute").toDate(), // start of the target minute
					lt: moment(twentyFourHoursLater).endOf("minute").toDate()   // end of the target minute
				}
			},
			include: {
				user: true
			}
		});
		const HourOrders = await prisma.taxi_orders.findMany({
			where: {
				preferences: {
					path: ["departure_time"],
					gte: moment(oneHourLater).startOf("minute").toDate(), // start of the target minute
					lt: moment(oneHourLater).endOf("minute").toDate()   // end of the target minute
				}
			},
			include: {
				user: true
			}
		});
		for (let order of DayOrders) {
			const l10nText = getLocalisedTexts("USER_NOTIFICATIONS", order.user)
			const l10nTextHeading = getLocalisedTexts("HEADING", order.user);
			await sendNotificationToUser(l10nTextHeading?.scheduled_tomorrow, l10nText?.scheduled_tomorrow + order.preferences.departure_time, order.user_id);
		}
		for (let order of HourOrders) {
			const l10nText = getLocalisedTexts("USER_NOTIFICATIONS", order.user)
			const l10nTextHeading = getLocalisedTexts("HEADING", order.user);
			await sendNotificationToUser(l10nTextHeading?.scheduled_hour, l10nText?.scheduled_hour, order.user_id);
		}

		return true;
	} catch (error) {
		console.taxiHelpers(error);

	}
}

function waitSeconds(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}

async function searchAfter20Seconds() {
	await waitSeconds(20);
	checkIfOrdersNeedSending();
}

async function searchAfter40Seconds() {
	await waitSeconds(40);
	checkIfOrdersNeedSending();
}

async function revokeAcceptedOrdersFromDriverHandler() {
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(20);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(30);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(40);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(50);
	await revokeAcceptedOrdersFromDriver();
}

async function revokeAcceptedOrdersFromDriver() {
	const orders = await TaxiOrderDao.getAcceptedOrders();
	for (let order of orders) {
		await revokeTaxiOrderFromDrivers(order.order_id, true);
	}
}


async function findTaxiOrderDrivers(order) {
	console.log("hi");
	return new Promise(async (resolve, reject) => {
		let drivers = [];
		console.log("Finding drivers for order: ", order.order_id);
		if (order?.driver_id) {
			// If a specific driver is selected in the order creation, send the order only to that driver
			const driver = await DriverDao.getDriverById(order.driver_id);

			if (driver) {
				drivers = [driver];
			}
		} else {
			drivers = await selectTaxiOrderDrivers(order);

		}
		//console.log("Drivers found: ", drivers);
		let pushDrivers = [];
		if (Array.isArray(drivers)) {
			for (let driver of drivers) {
				pushDrivers.push(sendTaxiOrderToDriver(order, driver));
			}
		}
		Promise.all(pushDrivers).then(() => {
			TaxiOrderDao.updateOrderLastSentAt(order.order_id);
			resolve();
		}).catch((e) => {
			console.taxiHelpers("Find drivers error", e);
			reject(e);
		});
	});
}

function compareDurations(a, b) {
	return parseInt(a.duration) - parseInt(b.duration);
}
async function getNumberPendingOrders(driver_id) {
	let sent_orders = await TaxiOrderDao.getAlreadySentOrdersByDriverId(driver_id);
	if (!sent_orders) return 0;
	return sent_orders.length
}

async function selectTaxiOrderDrivers(order) {
	try {
		let drivers = [];
		let radius = 2000;
		let vehicleClass = order.preferences?.vehicle_class || "";
		let category = order.preferences?.vehicle_category || "";
		let vehicleFilters = {
			class: ((vehicleClass === VEHICLE_CLASS.ANY || vehicleClass === VEHICLE_CLASS.PRIVATE_DRIVER) ? "" : vehicleClass),
			category: (category === VEHICLE_CLASS.ANY ? "" : category)
		};
		console.log(vehicleFilters, "FILTERS")
		// if (order.find_driver_attempts === 4) {
		// 	//TODO emit event to notify user that no drivers are available
		// 	if (!UserSockets.get(order.user_id)) {
		// 		return;
		// 	}
		// 	UserSockets.get(order.user_id).emit("no_drivers_found_taxi", order);
		// }
		//console.info(order.preferences.ride_requirements, "ride_Req");
		while (drivers.length === 0 && radius < 30000) {
			drivers = await prisma.drivers.inRadius(order.pickup_location.coordinates, radius, order.preferences.ride_requirements, vehicleFilters);
			//console.taxiHelpers("in radius", drivers);
			radius += 1000;
		}


		// If no drivers found within radius, get a list of all available drivers as fallback
		// if (drivers.length === 0) {
		// 	console.info("No drivers found within the radius. Using fallback option.");
		// 	drivers = await prisma.drivers.findMany();
		// }

		//console.info("before check", drivers);
		let acceptableDrivers = [];
		if (drivers.length > 0) {
			for (let driver of drivers) {
				if (order.type === ORDER_TYPE.TAXI && (!driver.handles_taxi_orders || !driver.taxi_orders_toggled)) {
					continue;
				} else if (order.type !== ORDER_TYPE.TAXI && (!driver.handles_transfer_orders || !driver.transfer_orders_toggled)) {
					continue;
				}
				let isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver);
				if (isSent) continue;
				let numPendingOrders = await getNumberPendingOrders(driver.driver_id);
				console.log("PENNDDING ORDDERS OF DRIVER", numPendingOrders)
				if (numPendingOrders >= MAX_PENDING_ORDERS) continue;
				let {
					distance,
					duration,
					result
				} = await gApi.distanceBetweenTwoPoints(order.pickup_location.coordinates, driver.location.coordinates, "driving", new Date());
				driver.distance = distance;
				driver.duration = duration;
				driver.numPendingOrders = numPendingOrders;
				acceptableDrivers.push(driver);
			}
		}
		acceptableDrivers.sort((a, b) => {
			// Compare by duration first
			if (parseInt(a.duration) !== parseInt(b.duration)) {
				return parseInt(a.duration) - parseInt(b.duration);// Sort by ascending duration
			}
		
			// If duration is the same, compare by number of pending orders
			return a.numPendingOrders - b.numPendingOrders; // Sort by ascending pending orders
		});
		
		acceptableDrivers = acceptableDrivers.slice(0, NUMBER_OF_DRIVERS_TO_SEND);


		// Obtain the list of drivers again via their respective IDs to include user and vehicle information
		const eligibleDrivers = [];
		for (let driver of acceptableDrivers) {
			const detailedDriver = await DriverDao.getDriverById(driver.driver_id);
			if (detailedDriver) {
				console.log("Eligible driver: ", detailedDriver.user_id)
				eligibleDrivers.push(detailedDriver);
			}
		}
		await TaxiOrderDao.updateOrder(order.order_id, {
			find_drivers_attempts: order.find_drivers_attempts + 1
		});
		return eligibleDrivers;
	} catch (e) {
		console.log("select driver:", e);
	}
}

async function sendTaxiOrderToDriver(order, driver, force = false) {
	let isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver);
	if (isSent && !force) {
		console.taxiHelpers("Order: ", order.order_id, "was already sent to driver: ", driver.user_id);
		return;
	}
	if (!UserSockets.get(driver.user_id)) {
		return;
	}
	//TODO: zakaj smo že prestavili order na sent, če ga še nismo poslali driverju?
	let order_sent =  await prisma.taxi_order_sent.findUnique({
		where: {
			taxi_order_sent_driver_unique: {
				order_id: order.order_id,
				driver_id: driver.driver_id
			}
		},
	});
	if (!order_sent){
		await TaxiOrderDao.createOrderSent(order.order_id, driver);
	} else {
		if (order_sent.taxi_order_sent_id) {
			await prisma.taxi_order_sent.update({
				where: {
					taxi_order_sent_id: order_sent.taxi_order_sent_id
				},
				data: {
					rejected: false
				}
			})
		}
	}
	const l10nText = getLocalisedTexts("DRIVER_NOTIFICATIONS", driver.user)
	const l10nTextHeading = getLocalisedTexts("HEADING", driver.user);
	await sendNotificationToUser(l10nTextHeading?.pending, l10nText?.pending, driver.user_id);
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
			console.info("resendPendingOrdersToDriver", driver.user_id);
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
		console.info("sendActiveOrdersToDriver", driver.user_id);
		if (UserSockets.get(driver.user_id)) {
			console.taxiHelpers("Sending [active] orders to driver: ", driver.user_id);
			UserSockets.get(driver.user_id).emit("load_active_orders__taxi", activeOrders);
		}
	} catch (error) {
		console.error("Error sending active orders to driver:", error);
	}
}

async function revokeTaxiOrderFromDrivers(order_id, cron = false) {
	let taxiOrderSent = await TaxiOrderDao.getSentDrivers(order_id);
	for (let sent of taxiOrderSent) {
		if (sent.accepted && cron) {
			continue;
		}
		console.taxiHelpers("Revoking order: ", order_id, " from driver: ", sent.driver.user_id);
		if (!UserSockets.get(sent.driver.user_id)) {
			return;
		}
		UserSockets.get(sent.driver.user_id).emit("order_revoked__taxi", order_id);
	}
}

async function revokeTaxiOrderFromDriver(order_id, driver_id) {
	let driver = await DriverDao.getDriverById(driver_id);
	console.taxiHelpers("Revoking order: ", order_id, " from driver: ", driver.user_id);
	if (!UserSockets.get(driver.user_id)) {
		return;
	}
	UserSockets.get(driver.user_id).emit("order_revoked__taxi", order_id);
}
async function revokeTaxiOrderFromOtherDrivers(order_id, driver_id) {
	let taxiOrderSent = await TaxiOrderDao.getSentDrivers(order_id);
	for (let sent of taxiOrderSent) {
		if (sent.accepted) {
			continue;
		}
		if (sent.driver.driver_id === driver_id) {
			continue;
		}
		console.taxiHelpers("Revoking order: ", order_id, " from driver: ", sent.driver.user_id);
		if (!UserSockets.get(sent.driver.user_id)) {
			return;
		}
		UserSockets.get(sent.driver.user_id).emit("order_revoked__taxi", order_id);
	}
}
async function checkIfOrdersNeedSending() {
	try {
		console.taxiHelpers("Checking for taxi orders to send...");

		let orders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.PENDING,
				is_scheduled: false
			}
		});
		console.log("Open taxi orders not scheduled:", orders.length);
		const tresholdAmountOfTimeLater = new Date(); // Current date and time
		tresholdAmountOfTimeLater.setMinutes(tresholdAmountOfTimeLater.getMinutes() + 30); // Add 30 min
		console.log("Scheduled time threshold:", tresholdAmountOfTimeLater);
		let localDate = moment.parseZone(tresholdAmountOfTimeLater).utc(true).format();
		console.log("Local date:", localDate);
		let scheduledOrders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.PENDING,
				is_scheduled: true,
				preferences: {
					path: ["departure_time"],
					lte: localDate
				}
			}
		});
		console.log("Open taxi orders scheduled:", scheduledOrders.length);
		for (let order of [...orders, ...scheduledOrders]) {
			console.taxiHelpers("Order last_sent_at:", order.last_sent_at);
			await findTaxiOrderDrivers(order);
		}
	} catch (error) {
		console.taxiHelpers(error);
	}

}
async function closeScheduledOrders() {
	const twoHoursBeforeNow = new Date();
	twoHoursBeforeNow.setHours(twoHoursBeforeNow.getHours() - 2);
	let localDate = moment.parseZone(twoHoursBeforeNow).utc(true).format();

	let scheduledOrders = await TaxiOrderDao.getOrders({
		where: {
			status: TAXI_ORDER_STATUS.PENDING,
			is_scheduled: true,
			preferences: {
				path: ["departure_time"],
				lte: localDate
			}
		}
	});
	for (let order of scheduledOrders) {
		await TaxiOrderDao.cancelOrder(order.order_id, TAXI_ORDER_STATUS.TAXI_CANCELED, "System cleanup - order was scheduled but not accepted after 2hours");
	}
}

module.exports = {
	checkIfOrdersNeedSending,
	findTaxiOrderDrivers,
	resendPendingOrdersToDriver,
	sendActiveOrdersToDriver,
	selectTaxiOrderDrivers,
	sendTaxiOrderToDriver,
	revokeTaxiOrderFromDrivers,
	searchAfter20Seconds,
	searchAfter40Seconds,
	revokeAcceptedOrdersFromDriverHandler,
	scheduledOrdersNotificationsHandler,
	revokeTaxiOrderFromDriver,
	revokeTaxiOrderFromOtherDrivers,
	closeScheduledOrders,
};
