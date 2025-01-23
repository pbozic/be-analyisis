const DeliveryOrderDao = require("../dao/DeliveryOrder");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const DriverDao = require("../dao/Driver");
const { io } = require("../socket");
const { DELIVERY_ORDER_STATUS, TAXI_ORDER_STATUS } = require("./constants");
const UserSockets = require('../socket').UserSockets;
const prisma = require("../prisma/prisma");
const gApi = require('./gApis');
const TaxiOrderDao = require("../dao/TaxiOrder");
const e = require("cors");
const { drive } = require("googleapis/build/src/apis/drive");
const { getLocalisedTexts } = require("../localisations/languages");
const { sendNotificationToUser } = require("./oneSignal");
const { sendDeliveryOrderNotifications } = require("./notifications");
const NUMBER_OF_DRIVERS_TO_SEND = 1;
const MAX_ORDER_FIND_ATTEMPTS = 0;

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

async function addDeliveryEarningToOrder(order, driver) {
	if(order?.details?.delivery_cost){
		order.details.delivery_earnings = order.details.delivery_cost * 1.25;
	}else{
		const pricePerKm = 0.5; // Example rate per kilometer

		const deliveryEarning = pricePerKm * order.details.distance * 1.25;
		if (!order.details) {
			order.details = {};
		}
		order.details.delivery_earnings = deliveryEarning;
	}
	console.log('delivery_earnings', order.details.delivery_earnings)
	await DeliveryOrderDao.updateOrder(order.order_id, order)

	return order;
}

async function calculateDeliveryDriverScore(driver, readyTime, arrivalTime, order) {
	let score = 100;
	const LATE_SCORE = 5;
	const EARLY_SCORE = 1;
	const MINUTE_SUB = 1;

	//TODO: calcualte a score dpentding on the time difference between the ready time and the arrival time
	let timeDifference = arrivalTime.getTime() - readyTime.getTime();
	let timeDifferenceMinutes = timeDifference / 1000 / 60;
	if (timeDifference > 0) {
		score = score - (timeDifferenceMinutes * LATE_SCORE * MINUTE_SUB);
	} else {
		score = score + (timeDifferenceMinutes * EARLY_SCORE * MINUTE_SUB);
	}
	console.log("score: ", score);
	return score;

}
async function calculateDriverScore(driver, readyTime, travelTime, order) {
    let baseScore = 100;
	const LATE_SCORE = 5;
	const EARLY_SCORE = 1;
    // // Proximity to merchant (distance in kilometers)
    // let distanceToMerchant = driver.distanceKm
    // let proximityScore = Math.max(0, 100 - distanceToMerchant * 10); // Example: lose 10 points per km
    // baseScore -= proximityScore;

    // ETA to merchant (time in minutes)
    let etaToMerchant = travelTime / 60
    // let etaScore = Math.max(0, 100 - etaToMerchant); // Example: lose 1 point per minute
    // baseScore -= etaScore;

    // Driver availability
    if (driver.on_order) {
        baseScore -= 50; // Deduct points if the driver is not available
    }

    let readyToPickup = readyTime.getTime();
    let currentTime = new Date().getTime();

    let etaToMerchantTime = currentTime + etaToMerchant * 60 * 1000;
	let timeDifference = Math.abs(etaToMerchantTime - readyToPickup) / (60 * 1000); // difference in minutes
	console.log("timeDifference", timeDifference)
	let timingScore;
    if (timeDifference <= 0) {
        // Arriving before or exactly at ready_to_pickup time
        timingScore = Math.abs(timeDifference) * EARLY_SCORE; // Example: lose 2 points per minute early
    } else {
        // Arriving after ready_to_pickup time
        timingScore = LATE_SCORE * 5; // Example: lose 5 points per minute late
	}
	console.log("timingScore", timingScore)
    baseScore -= timingScore;

    // Add any other factors and corresponding score calculations here

    return baseScore;
}
async function selectDeliveryOrderDrivers(order) {
	let eligibleDrivers = [];
	let now = new Date();
	let readyTime = new Date(order.details.ready_for_pickup_at)
	console.log("ready time: ", readyTime);
	console.log("now: ", now);
	// is readyTime 15min from now or less
	if (readyTime.getTime() > now.getTime() + 20 * 60 * 1000) {
		console.log("Order is not ready yet");
		return eligibleDrivers;
	}

	const MIN_ORDER_SCORE = (85 - (order.find_drivers_attempts * 5));

	let onlineDrivers;

	onlineDrivers = await DeliveryDriverDao.getOnlineDeliveryDrivers();
	onlineDrivers = onlineDrivers.concat(await DriverDao.getOnlineDrivers({handles_delivery_orders: true, delivery_orders_toggled: true}));
	console.info('online drivers', onlineDrivers)

	for (let driver of onlineDrivers) {
		let isSent = await DeliveryOrderDao.isOrderSent(order.order_id, driver);
		if (isSent) {
			console.info('order already send!')
			continue;
		}
		/*//Skip driver whose socket is not connected
		if (!UserSockets.get(driver.user_id)) {
			console.log("UserSocket not found for driver: ", driver.user_id);
			continue;
		}*/
		if (driver.location.coordinates.latitude === null) continue
		if (driver.location.coordinates.longitude === null) continue
		let { distance, duration, result } = await gApi.distanceBetweenTwoPoints(driver.location.coordinates, order.pickup_location.coordinates, "driving", new Date());
		let travelTime = result.rows[0].elements[0].duration.value;
		let distanceM = result.rows[0].elements[0].distance.value;
		console.log("travel time: ", travelTime);

		let arrivalTime = new Date(now.getTime() + travelTime * 1000);
		console.log("arrival time: ", arrivalTime.getTime());
		console.log("ready time: ", readyTime.getTime());
		console.log("arrival time - ready time: ", arrivalTime.getTime() < readyTime.getTime());
		driver.travelTime = travelTime;
		driver.arrivalTime = arrivalTime;
		driver.distance = distance;
		driver.distanceM = distanceM;
		driver.distanceKm = distanceM / 1000;
		driver.duration = result.rows[0].elements[0].duration.value;
		driver.timeDifference = arrivalTime.getTime() - readyTime.getTime();
		
		await addDeliveryEarningToOrder(order, driver);

		driver.score = await calculateDeliveryDriverScore(driver, readyTime, arrivalTime, order)
		console.log("MIN_ORDER_SCORE", MIN_ORDER_SCORE)
		console.log(driver.score, 'driver.score')
		//TODO: uncomment
		//if (driver.score >= MIN_ORDER_SCORE) eligibleDrivers.push(driver);
		if (order.find_drivers_attempts >= MAX_ORDER_FIND_ATTEMPTS) eligibleDrivers.push(driver);
	}

	eligibleDrivers.sort((a, b) => b.score - a.score);
	eligibleDrivers = eligibleDrivers.slice(0, NUMBER_OF_DRIVERS_TO_SEND);
	console.log("eligible drivers: ", eligibleDrivers);

	if (eligibleDrivers.length === 0) { 
		console.log("No eligible drivers found");
		order.find_drivers_attempts = order.find_drivers_attempts + 1;
		await DeliveryOrderDao.updateOrder(order.order_id, {
			find_drivers_attempts: order.find_drivers_attempts
		});
	}

	return eligibleDrivers;
}

async function sendDeliveryOrderToDriver(order, delivery_driver) {
	let isSent = await DeliveryOrderDao.isOrderSent(order.order_id, delivery_driver);
	if (isSent) {
		return;
	}
	if (!UserSockets.get(delivery_driver.user_id)) {
		//console.log("UserSocket not found for driver: ", delivery_driver.user_id);
		throw new Error(`UserSocket not found for driver ${delivery_driver.user_id}`);
	}
	await DeliveryOrderDao.createOrderSent(order.order_id, delivery_driver);
	const l10nText = getLocalisedTexts("DELIVERY_DRIVER_NOTIFICATIONS", delivery_driver)
	const l10nTextHeading = getLocalisedTexts("HEADING", delivery_driver);
	sendNotificationToUser(l10nTextHeading?.pending_delivery, l10nText?.accepted, delivery_driver.user_id)
	console.log("Sending order: ", order.order_id, " to delivery driver: ", delivery_driver.user_id);
	UserSockets.get(delivery_driver.user_id).emit('new_order__delivery', order);
}

async function revokeDeliveryOrderFromDrivers(order_id) {
	let deliveryOrderSent = await DeliveryOrderDao.getSentDeliveryDrivers(order_id);
	for (let sent of deliveryOrderSent) {
		if (sent.accepted) {
			continue;
		}
		if (UserSockets.get(sent.delivery_driver?.user_id)) {
			UserSockets.get(sent.delivery_driver.user_id).emit('order_revoked__delivery', order_id);
		} else if (UserSockets.get(sent.driver?.user_id)) {
			UserSockets.get(sent.driver.user_id).emit('order_revoked__delivery', order_id);
		}
	}
}

async function checkIfDeliveryOrdersNeedSending() {
	console.log("Checking for delivery orders to send...");
	let orders = await DeliveryOrderDao.getOrders({
		where: {
			AND: [
				{
					OR: [
						{ status: DELIVERY_ORDER_STATUS.MERCHANT_PREPARING },
						{ status: DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP },
					],
				},
				{
					OR: [
						{ last_sent_at: null }, // Include records where last_sent_at is null
						{ last_sent_at: { lte: new Date(new Date() - 1 * 60 * 1000) } }, // Include records where last_sent_at is less than or equal to 5 minutes ago
					],
				},
				{
					details: {
						path: ['type'],
						equals: 'delivery'
					},
				},
				{
					is_daily_meal: false,
				}
			],
		}
	});
	console.log("open delivery orders: ", orders.length);
	for (let order of orders) {
		findDeliveryOrderDrivers(order); //TODO: notify the closest drivers X minutes (travel time to the merchant from delivery drivers) before order status is MERCHANT_READY_FOR_PICKUP.
	}
}

async function checkIfRestaurantOrderIsPrepared() {
	const now = new Date();
	const orders = await prisma.delivery_orders.findMany({
		where: {
			status: DELIVERY_ORDER_STATUS.MERCHANT_PREPARING,
			details: {
				path: ['ready_for_pickup_at'],
				lte: now.toISOString(),
			}
		}
	});

	for (const order of orders) {
		await prisma.delivery_orders.update({
			where: { order_id: order.order_id },
			data: { status: DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP }
		});
		console.log(`Order ${order.order_id} is ready for pickup`);
	}
}

async function resendPendingOrdersToDeliveryDriver(driver) {
	try {
		const sentOrders = await DeliveryOrderDao.getAlreadySentOrdersByDeliveryDriverId(driver.delivery_driver_id);
		for (let sentOrder of sentOrders) {
			const order = await DeliveryOrderDao.getOrder(sentOrder.order.order_id);
			if (order.status !== DELIVERY_ORDER_STATUS.MERCHANT_PREPARING && order.status !== DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP) {
				continue
			}
			if (UserSockets.get(driver.user_id)) {
				console.log("Re-sending order: ", order.order_id, " to driver: ", driver.user_id);
				UserSockets.get(driver.user_id).emit('new_order__delivery', order);
			}
		}
	} catch (error) {
		console.error("Error re-sending pending orders to driver:", error);
	}
}

async function sendActiveOrdersToDeliveryDriver(driver) {
	try {
		const activeOrders = await DeliveryOrderDao.getActiveOrdersByDeliveryDriverId(driver.delivery_driver_id);

		console.info('SCHEDULED MEALS ROUTE', driver?.scheduled_meals_route);
		console.info("sendActiveOrdersToDeliveryDriver", driver.user_id);
		console.info("ORDERS", activeOrders.length);

		const today = new Date().toISOString().split('T')[0];

		// Separate daily meal orders for the current day
		const dailyMealOrders = activeOrders.filter(order => {
			const createdAtDate = new Date(order.created_at).toISOString().split('T')[0];
			return order.is_daily_meal && createdAtDate === today;
		});

		const otherOrders = activeOrders.filter(order => !order.is_daily_meal);

		// Sort daily meal orders first by `created_at`, then by `daily_meal_delivery_order`
		const sortedDailyMealOrders = dailyMealOrders.sort((a, b) => {
			const createdAtA = new Date(a.created_at);
			const createdAtB = new Date(b.created_at);

			if (createdAtA - createdAtB !== 0) {
				return createdAtA - createdAtB;
			}

			const mealDeliveryA = new Date(a.details?.daily_meal_delivery_order);
			const mealDeliveryB = new Date(b.details?.daily_meal_delivery_order);

			return mealDeliveryA - mealDeliveryB;
		});

		// Sort other orders by `customer_expected_delivery_at`
		const sortedOtherOrders = otherOrders.sort((a, b) => {
			const deliveryTimeA = new Date(a.details?.customer_expected_delivery_at);
			const deliveryTimeB = new Date(b.details?.customer_expected_delivery_at);

			return deliveryTimeA - deliveryTimeB;
		});

		const combinedOrders = [...sortedDailyMealOrders, ...sortedOtherOrders]

		const pendingOrders = combinedOrders.filter(order =>
			order.status === DELIVERY_ORDER_STATUS.MERCHANT_PREPARING ||
			order.status === DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
		);

		const activeCombinedOrders = combinedOrders.filter(order =>
			order.status !== DELIVERY_ORDER_STATUS.MERCHANT_PREPARING &&
			order.status !== DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
		);

		const orders = {
			activeOrders: activeCombinedOrders,
			pendingOrders: pendingOrders
		};

		// Send the divided orders to the delivery driver via socket
		if (UserSockets.get(driver.user_id)) {
			console.info("Sending [active] orders to delivery driver: ", driver.user_id);
			UserSockets.get(driver.user_id).emit("load_active_orders__delivery", {
				...orders,
				scheduled_meals_route: driver?.scheduled_meals_route
			});
		}
	} catch (error) {
		console.error("Error sending active orders to driver:", error);
	}
}

function generateItemsFromPreferences(preferences, menuItem) {
	const items = [];
	const { normal, substitution } = preferences;

	const createItem = (id, type) => ({
		menu_item_id: id,
		names: {
			en: type === 'substitution' ? 'Substitution meal' : 'Normal meal'
		},
		price: menuItem.price,
		discount: menuItem.discount,
		quantity: type === 'normal' ? normal.amount : substitution.amount
	});

	items.push(createItem(0, 'normal'));
	items.push(createItem(1, 'substitution'));
	return items;
}

module.exports = {
	checkIfDeliveryOrdersNeedSending,
	checkIfRestaurantOrderIsPrepared,
	resendPendingOrdersToDeliveryDriver,
	generateItemsFromPreferences,
	sendActiveOrdersToDeliveryDriver,
	revokeDeliveryOrderFromDrivers
};