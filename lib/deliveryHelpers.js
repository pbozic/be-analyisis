import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import DeliveryDriverDao from '../dao/DeliveryDriver.js';
import MenuItemDao from '../dao/MenuItem.js';
import BusinessDao from '../dao/Business.js';
import AddressDao from '../dao/Address.js';
import DriverDao from '../dao/Driver.js';
import socket from '../socket.js';
import {
	DELIVERY_ORDER_STATUS,
	TAXI_ORDER_STATUS,
	DRIVE_FEE,
	RESTAURANT_FEE,
	AUTOREJECT_THRESHOLD_MINUTES,
	SCORING_POINTS_REASON,
	FUNDS_TYPE,
	DELIVERY_COST_CALCULATION,
	DELIVERY_ORDER_END_STATES,
	SERVICE_TYPE,
} from './constants.js';
import prisma from '../prisma/prisma.js';
import gApi from './gApis.js';
import TaxiOrderDao from '../dao/TaxiOrder.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { sendNotificationToUser } from './oneSignal.js';
import { sendDeliveryOrderNotifications } from './notifications.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import stripe from './stripe.js';
import WalletFundsHelpers from './WalletFundsHelpers.js';
import ScoringPointsDao from '../dao/ScoringPoints.js';
import { haversineDistance } from './helpersLib.js';
const { io, SocketStore, UserSockets } = socket;
// const haversine = require("haversine-distance");
const NUMBER_OF_DRIVERS_TO_SEND = 3;
const MAX_ORDER_FIND_ATTEMPTS = 0;
const cropped_user_columns = {
	first_name: true,
	last_name: true,
	user_id: true,
};
async function findDeliveryOrderDrivers(order) {
	return new Promise(async (resolve, reject) => {
		let drivers = await selectDeliveryOrderDrivers(order);
		let pushDrivers = [];
		for (let driver of drivers) {
			pushDrivers.push(sendDeliveryOrderToDriver(order, driver));
		}
		Promise.all(pushDrivers)
			.then(() => {
				DeliveryOrderDao.updateOrderLastSentAt(order.order_id);
				resolve();
			})
			.catch((e) => {
				console.log('Find delivery drivers error', e);
				reject(e);
			});
	});
}
async function addDeliveryEarningToOrder(order, driver) {
	if (order?.details?.delivery_cost) {
		order.details.delivery_earnings = order.details.delivery_cost * 1.25;
	} else {
		const pricePerKm = 0.5; // Example rate per kilometer
		const deliveryEarning = pricePerKm * order.details.distance * 1.25;
		if (!order.details) {
			order.details = {};
		}
		order.details.delivery_earnings = deliveryEarning;
	}
	console.log('delivery_earnings', order.details.delivery_earnings);
	await DeliveryOrderDao.updateOrder(order.order_id, order);
	return order;
}
async function getNumberPendingOrders(driver_id) {
	let sent_orders = await DeliveryOrderDao.getAlreadySentOrdersByDeliveryDriverId(driver_id);
	if (!sent_orders) return 0;
	return sent_orders.length;
}
async function calculateDeliveryDriverScore(driver, readyTime, arrivalTime, order) {
	let score = 100;
	const LATE_SCORE = 5;
	const EARLY_SCORE = 1;
	const MINUTE_SUB = 1;
	const PENDING_ORDER_SCORE = 10;
	const numberPendingOrders = getNumberPendingOrders(driver.delivery_driver_id || driver.driver_id);
	//TODO: calcualte a score dpentding on the time difference between the ready time and the arrival time
	let timeDifference = arrivalTime.getTime() - readyTime.getTime();
	let timeDifferenceMinutes = timeDifference / 1000 / 60;
	if (timeDifference > 0) {
		score = score - timeDifferenceMinutes * LATE_SCORE * MINUTE_SUB;
	} else {
		score = score + timeDifferenceMinutes * EARLY_SCORE * MINUTE_SUB;
	}
	if (driver.on_order) {
		score -= 25; // Deduct points if the driver is not available
	}
	score -= (numberPendingOrders || 0) * PENDING_ORDER_SCORE; // Deduct points for pending orders
	console.log('score: ', score);
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
	let etaToMerchant = travelTime / 60;
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
	console.log('timeDifference', timeDifference);
	let timingScore;
	if (timeDifference <= 0) {
		// Arriving before or exactly at ready_to_pickup time
		timingScore = Math.abs(timeDifference) * EARLY_SCORE; // Example: lose 2 points per minute early
	} else {
		// Arriving after ready_to_pickup time
		timingScore = LATE_SCORE * 5; // Example: lose 5 points per minute late
	}
	console.log('timingScore', timingScore);
	baseScore -= timingScore;
	// Add any other factors and corresponding score calculations here
	return baseScore;
}
async function selectDeliveryOrderDrivers(order) {
	let eligibleDrivers = [];
	let now = new Date();
	let readyTime = new Date(order.details.ready_for_pickup_at);
	console.log('ready time: ', readyTime);
	console.log('now: ', now);
	// is readyTime 20min from now or less
	if (readyTime.getTime() > now.getTime() + 20 * 60 * 1000) {
		console.log('Order is not ready yet');
		return eligibleDrivers;
	}
	const MIN_ORDER_SCORE = 85 - order.find_drivers_attempts * 5;
	let onlineDrivers;
	onlineDrivers = await DeliveryDriverDao.getOnlineDeliveryDrivers({ on_order: false });
	onlineDrivers = onlineDrivers.concat(
		await DriverDao.getOnlineDrivers({
			handles_delivery_orders: true,
			delivery_orders_toggled: true,
			on_order: false,
		})
	);
	console.info('available drivers', onlineDrivers);
	// TODO: get pending orders for the driver and check if the order is already sent to the driver
	for (let driver of onlineDrivers) {
		let isSent = await DeliveryOrderDao.isOrderSent(order.order_id, driver);
		if (isSent) {
			console.info('order already send!');
			continue;
		}
		//Skip driver whose socket is not connected
		if (!UserSockets.get(driver.user_id)) {
			console.log('UserSocket not found for driver: ', driver.user_id);
			continue;
		}
		if (driver.location.coordinates.latitude === null) continue;
		if (driver.location.coordinates.longitude === null) continue;
		let { distance, duration, result } = await gApi.distanceBetweenTwoPoints(
			driver.location.coordinates,
			order.pickup_location.coordinates,
			'driving',
			new Date(),
			'best_guess'
		);
		let travelTime = result.rows[0].elements[0].duration.value;
		let distanceM = result.rows[0].elements[0].distance.value;
		console.log('travel time: ', travelTime);
		let arrivalTime = new Date(now.getTime() + travelTime * 1000);
		console.log('arrival time: ', arrivalTime.getTime());
		console.log('ready time: ', readyTime.getTime());
		console.log('arrival time - ready time: ', arrivalTime.getTime() < readyTime.getTime());
		driver.travelTime = travelTime;
		driver.arrivalTime = arrivalTime;
		driver.distance = distance;
		driver.distanceM = distanceM;
		driver.distanceKm = distanceM / 1000;
		driver.duration = result.rows[0].elements[0].duration.value;
		driver.timeDifference = arrivalTime.getTime() - readyTime.getTime();
		await addDeliveryEarningToOrder(order, driver);
		driver.score = await calculateDeliveryDriverScore(driver, readyTime, arrivalTime, order);
		console.log('MIN_ORDER_SCORE', MIN_ORDER_SCORE);
		console.log(driver.score, 'driver.score');
		//TODO: uncomment
		//if (driver.score >= MIN_ORDER_SCORE) eligibleDrivers.push(driver);
		if (order.find_drivers_attempts >= MAX_ORDER_FIND_ATTEMPTS) eligibleDrivers.push(driver);
	}
	eligibleDrivers.sort((a, b) => b.score - a.score);
	eligibleDrivers = eligibleDrivers.slice(0, NUMBER_OF_DRIVERS_TO_SEND);
	console.log('eligible drivers: ', eligibleDrivers);
	if (eligibleDrivers.length === 0) {
		console.log('No eligible drivers found');
		order.find_drivers_attempts = order.find_drivers_attempts + 1;
		await DeliveryOrderDao.updateOrder(order.order_id, {
			find_drivers_attempts: order.find_drivers_attempts,
		});
	}
	return eligibleDrivers;
}
async function sendDeliveryOrderToDriver(order, delivery_driver) {
	try {
		let isSent = await DeliveryOrderDao.isOrderSent(order.order_id, delivery_driver);
		if (isSent) {
			return;
		}
		if (!UserSockets.get(delivery_driver.user_id)) {
			//console.log("UserSocket not found for driver: ", delivery_driver.user_id);
			throw new Error(`UserSocket not found for driver ${delivery_driver.user_id}`);
		}
		await DeliveryOrderDao.createOrderSent(order.order_id, delivery_driver);
		const l10nText = getLocalisedTexts('DELIVERY_DRIVER_NOTIFICATIONS', delivery_driver);
		const l10nTextHeading = getLocalisedTexts('HEADING', delivery_driver);
		sendNotificationToUser(l10nTextHeading?.pending_delivery, l10nText?.accepted, delivery_driver.user_id);
		console.log(
			'Sending order: ',
			order.order_id,
			' to delivery driver: ',
			delivery_driver.user_id,
			'with socket: ',
			UserSockets.get(delivery_driver.user_id)
		);
		UserSockets.get(delivery_driver.user_id).emit('new_order__delivery', order);
	} catch (e) {
		console.log(e);
	}
}
async function revokeDeliveryOrderFromDrivers(order_id) {
	let deliveryOrderSent = await DeliveryOrderDao.getSentDeliveryDrivers(order_id);
	for (let sent of deliveryOrderSent) {
		if (sent.accepted) {
			continue;
		}
		SocketStore.removeUserFromRoom(sent.delivery_driver?.user_id || sent.driver?.user_id, `order_${order_id}`);
		if (UserSockets.get(sent.delivery_driver?.user_id)) {
			UserSockets.get(sent.delivery_driver.user_id).emit('order_revoked__delivery', order_id);
		} else if (UserSockets.get(sent.driver?.user_id)) {
			UserSockets.get(sent.driver.user_id).emit('order_revoked__delivery', order_id);
		}
	}
}
async function checkIfDeliveryOrdersNeedSending() {
	console.log('Checking for delivery orders to send...');
	let orders = await DeliveryOrderDao.getOrders({
		where: {
			AND: [
				{
					//If any driver is set the order shouldn't be sent to anyone.
					delivery_driver_id: null,
					driver_id: null,
				},
				{
					OR: [
						{ status: DELIVERY_ORDER_STATUS.MERCHANT_PREPARING },
						{ status: DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP },
					],
				},
				{
					OR: [
						{ last_sent_at: null }, // Include records where last_sent_at is null
						{ last_sent_at: { lte: new Date(new Date() - 0.5 * 60 * 1000) } }, // Include records where last_sent_at is less than or equal to 5 minutes ago
					],
				},
				{
					details: {
						path: ['type'],
						equals: 'delivery',
					},
				},
				{
					is_daily_meal: false,
				},
			],
		},
		include: {
			user: {
				select: {
					user_id: true,
					first_name: true,
					last_name: true,
					telephone: true,
				},
			},
		},
	});
	console.log('open delivery orders: ', orders.length);
	for (let order of orders) {
		findDeliveryOrderDrivers(order); //TODO: notify the closest drivers X minutes (travel time to the merchant from delivery drivers) before order status is MERCHANT_READY_FOR_PICKUP.
	}
}
async function checkIfRestaurantOrderIsPrepared() {
	const now = new Date();
	console.log('Checking delivery orders!');
	const orders = await prisma.delivery_orders.findMany({
		where: {
			status: DELIVERY_ORDER_STATUS.MERCHANT_PREPARING,
		},
	});
	for (const or of orders) {
		const readyTime = new Date(or.details?.ready_for_pickup_at);
		if (readyTime.getTime() <= now.getTime()) {
			const order = await DeliveryOrderDao.updateOrderStatus(
				or.order_id,
				DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
			);
			if (order) {
				console.log(`Order ${order.order_id} is ready for pickup`);
				io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
			}
		}
	}
}
async function autoRejectDeliveryOrders() {
	const now = new Date();
	const threshold_time = new Date(now.getTime() - AUTOREJECT_THRESHOLD_MINUTES * 60 * 1000);
	console.log('Checking delivery orders!');
	const orders = await prisma.delivery_orders.findMany({
		where: {
			status: { in: [DELIVERY_ORDER_STATUS.PENDING, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_PENDING] },
			created_at: {
				lt: threshold_time,
			},
		},
	});
	for (const or of orders) {
		let order = await DeliveryOrderDao.updateOrderStatus(or.order_id, DELIVERY_ORDER_STATUS.AUTO_REJECTED);
		//TODO: handle payment cleanup
		await handlePaymentCleanup(order);
		let d;
		if (order.driver_id) {
			d = await DriverDao.getDriverById(order.driver_id);
		} else if (order.delivery_driver_id) {
			d = await DeliveryDriverDao.getDeliveryDriverById(order.delivery_driver_id);
		}
		sendDeliveryOrderNotifications(order.user, d?.user, order.user_id, d?.user_id, order.status);
		order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.FAIL);
		if (order) {
			console.log(`Order ${order.order_id} has been automatically rejected.`);
			io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
			io.to('orders_' + order.business_id).emit('order_status_change__delivery', order);
			await ScoringPointsDao.createScoringPoints(
				order.business_id,
				null,
				order.order_id,
				null,
				1,
				true,
				SCORING_POINTS_REASON.AUTO_REJECTED
			);
		}
	}
}
async function resendPendingOrdersToDeliveryDriver(driver) {
	try {
		const deliverer_id = driver.delivery_driver_id || driver.driver_id;
		const sentOrders = await DeliveryOrderDao.getAlreadySentOrdersByDeliveryDriverId(deliverer_id);
		for (let sentOrder of sentOrders) {
			if (sentOrder.accepted) continue;
			const order = await DeliveryOrderDao.getOrder(sentOrder.order_id, {
				include: { user: { select: cropped_user_columns } },
			});
			if (!(order.delivery_driver_id || order.driver_id) && !DELIVERY_ORDER_END_STATES.includes(order.status)) {
				if (UserSockets.get(driver.user_id)) {
					console.log('Re-sending order: ', order.order_id, ' to driver: ', driver.user_id);
					UserSockets.get(driver.user_id).emit('new_order__delivery', order);
				}
			}
		}
	} catch (error) {
		console.error('Error re-sending pending orders to driver:', error);
	}
}
async function sendActiveOrdersToDeliveryDriver(driver) {
	try {
		const deliverer_id = driver.delivery_driver_id || driver.driver_id;
		const activeOrders = await DeliveryOrderDao.getActiveOrdersByDeliveryDriverId(deliverer_id);
		console.info('SCHEDULED MEALS ROUTE', driver?.scheduled_meals_route);
		console.info('sendActiveOrdersToDeliveryDriver', driver.user_id);
		console.info('ORDERS', activeOrders.length);
		const today = new Date().toISOString().split('T')[0];
		// Separate daily meal orders for the current day
		const dailyMealOrders = activeOrders.filter((order) => {
			const createdAtDate = new Date(order.created_at).toISOString().split('T')[0];
			return order.is_daily_meal && createdAtDate === today;
		});
		const otherOrders = activeOrders.filter((order) => !order.is_daily_meal);
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
		const combinedOrders = [...sortedDailyMealOrders, ...sortedOtherOrders];
		const pendingOrders = combinedOrders.filter(
			(order) =>
				[DELIVERY_ORDER_STATUS.MERCHANT_PREPARING, DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP].includes(
					order.status
				) &&
				!order.timeline.some(
					(entry) =>
						entry.status === DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED && entry.driver_id === deliverer_id
				)
		);
		const activeCombinedOrders = combinedOrders.filter((order) =>
			order.timeline.some(
				(entry) => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED && entry.driver_id === deliverer_id
			)
		);
		const orders = {
			activeOrders: activeCombinedOrders,
			pendingOrders: pendingOrders,
		};
		// Send the divided orders to the delivery driver via socket
		if (UserSockets.get(driver.user_id)) {
			console.info('Sending [active] orders to delivery driver: ', driver.user_id);
			UserSockets.get(driver.user_id).emit('load_active_orders__delivery', {
				...orders,
				scheduled_meals_route: driver?.scheduled_meals_route,
			});
		}
	} catch (error) {
		console.error('Error sending active orders to driver:', error);
	}
}
function generateItemsFromPreferences(preferences, menuItem) {
	const items = [];
	const { normal, substitution } = preferences;
	const createItem = (id, type) => ({
		menu_item_id: id,
		names: {
			en: type === 'substitution' ? 'Substitution meal' : 'Normal meal',
		},
		price: menuItem.price,
		discount: menuItem.discount,
		quantity: type === 'normal' ? normal.amount : substitution.amount,
	});
	if (normal.amount > 0) items.push(createItem(0, 'normal'));
	if (substitution.amount > 0) items.push(createItem(1, 'substitution'));
	return items;
}

function groupSubscriptionsForDailyMeals(subscriptions) {
	const groupsMap = new Map();

	for (const sub of subscriptions) {
		const key = sub.grouped_id; //`${sub.user_id}_${JSON.stringify(sub.address)}`;
		const items = sub.menu_category.menu_items.map((m_i) => ({
			...m_i,
			quantity: sub.quantity,
			price: 0,
			discount: 0,
		}));

		if (!groupsMap.has(key)) {
			groupsMap.set(key, {
				grouped_id: sub.grouped_id,
				dm_items: [...items],
				courier_comment: sub.courier_comment || '',
				restaurant_comment: sub.restaurant_comment || '',
				address: sub.address,
				user_id: sub.user_id,
				user: sub.user,
				address_id: sub.address.address_id,
				subscription_ids: [sub.daily_meals_subscriptions_id],
			});
		} else {
			const group = groupsMap.get(key);
			group.dm_items.push(...items);
			group.subscription_ids.push(sub.daily_meals_subscriptions_id);

			// Append comments with separator if not already included
			if (sub.courier_comment) {
				group.courier_comment += group.courier_comment ? ` | ${sub.courier_comment}` : sub.courier_comment;
			}
			if (sub.restaurant_comment) {
				group.restaurant_comment += group.restaurant_comment
					? ` | ${sub.restaurant_comment}`
					: sub.restaurant_comment;
			}
		}
	}
	console.log(JSON.stringify(Array.from(groupsMap.values()), null, 2));

	return Array.from(groupsMap.values());
}

async function calculateDeliveryOrderPaymentCuts(order, orderType = 'order') {
	const { details, user_id, order_id } = order;
	const TOTAL_PRICE_CENTS = Math.round(details.total_price * 100); // already includes delivery cost
	const reservedCredits = (await WalletFundsDao.getReservedCredits(user_id, order_id, orderType)) || [];
	const CREDITS_AMOUNT_RESERVED = reservedCredits.reduce((sum, wf) => sum + (wf.amount || 0), 0);
	const INITIAL_DELIVERY_CUT = Math.round(details.delivery_cost * 100 * (1 - DRIVE_FEE));
	const INITIAL_MERCHANT_CUT = Math.round(Math.round(details.sub_total_price * 100) * (1 - RESTAURANT_FEE));
	const INITIAL_PLATFORM_CUT = TOTAL_PRICE_CENTS - INITIAL_DELIVERY_CUT - INITIAL_MERCHANT_CUT;
	const PLATFORM_CREDIT_CUT_CENTS = Math.min(INITIAL_PLATFORM_CUT, CREDITS_AMOUNT_RESERVED);
	const remainingCreditsAfterPlatform = CREDITS_AMOUNT_RESERVED - PLATFORM_CREDIT_CUT_CENTS;
	const MERCHANT_CREDIT_CUT_CENTS = Math.min(INITIAL_MERCHANT_CUT, remainingCreditsAfterPlatform);
	const PLATFORM_CUT_CENTS = INITIAL_PLATFORM_CUT - PLATFORM_CREDIT_CUT_CENTS;
	const MERCHANT_CUT_CENTS = INITIAL_MERCHANT_CUT - MERCHANT_CREDIT_CUT_CENTS;
	const remainingCreditsAfterMerchant = remainingCreditsAfterPlatform - MERCHANT_CREDIT_CUT_CENTS;
	const DRIVER_CREDIT_CUT_CENTS = Math.min(INITIAL_DELIVERY_CUT, remainingCreditsAfterMerchant);
	const DRIVER_CUT_CENTS = INITIAL_DELIVERY_CUT - DRIVER_CREDIT_CUT_CENTS;
	// console.log("Final Calculated Values:", {
	// 	DRIVER_CREDIT_CUT_CENTS,
	// 	MERCHANT_CREDIT_CUT_CENTS,
	// 	PLATFORM_CREDIT_CUT_CENTS,
	// 	DRIVER_CUT_CENTS,
	// 	MERCHANT_CUT_CENTS,
	// 	PLATFORM_CUT_CENTS
	// });
	return {
		DRIVER_CREDIT_CUT: DRIVER_CREDIT_CUT_CENTS,
		MERCHANT_CREDIT_CUT: MERCHANT_CREDIT_CUT_CENTS,
		PLATFORM_CREDIT_CUT: PLATFORM_CREDIT_CUT_CENTS,
		DRIVER_CUT: DRIVER_CUT_CENTS,
		MERCHANT_CUT: MERCHANT_CUT_CENTS,
		PLATFORM_CUT: PLATFORM_CUT_CENTS,
	};
}
/**
 * Handles payment failure by canceling a payment intent if necessary and releasing any reserved wallet funds.
 * @param {Object} order - the order object for which the payment failed.
 */
async function handlePaymentCleanup(order) {
	try {
		if (order?.payment?.type === 'CARD' && order.payment_intent_id) {
			await stripe.client.paymentIntents.cancel(order.payment_intent_id);
		}
		await WalletFundsHelpers.releaseReservedWalletFundsForOrder(order.user_id, order.order_id);
	} catch (e) {
		console.error('Failed to handle payment cleanup:', e);
	}
}
async function handlePaymentRefund(order) {
	const WF_reserved = await WalletFundsDao.getReservedWalletFunds(order.user_id, order.order_id);
	const { credits_wf_amount_reserved, regular_wf_amount_reserved } = WF_reserved.reduce(
		(acc, wf) => {
			if (wf.type !== FUNDS_TYPE.FUNDS) {
				acc.credits_wf_amount_reserved += wf.amount || 0;
			} else {
				acc.regular_wf_amount_reserved += wf.amount || 0;
			}
			return acc;
		},
		{ credits_wf_amount_reserved: 0, regular_wf_amount_reserved: 0 }
	);
	const credit_discount_used = order.details.credit_discount || 0;
	const total_price_cents = Math.round(order.details.total_price * 100);
	const PAYMENT_TYPE = order.payment.type;
	// console.log("reserved amounts: ",{ credits_wf_amount_reserved,regular_wf_amount_reserved })
	// console.log({credit_discount_used,total_price_cents,PAYMENT_TYPE})
	await WalletFundsHelpers.releaseReservedWalletFundsForOrder(order.user_id, order.order_id);
	//calculate transfered credits and if needed, create new ones with fresh expiry dates
	if (credit_discount_used > credits_wf_amount_reserved) {
		await WalletFundsDao.createCredit({
			user: { connect: { user_id: order.user_id } },
			amount: credit_discount_used - credits_wf_amount_reserved,
			type: FUNDS_TYPE.CREDITS_DELIVERY,
		});
	}
	if (PAYMENT_TYPE === 'WALLET') {
		//calculate transfered WF and if needed, create new ones
		if (total_price_cents > regular_wf_amount_reserved) {
			console.log(`got into wallet if`);
			await WalletFundsDao.createWalletFunds(
				order.user_id,
				credit_discount_used - regular_wf_amount_reserved,
				null
			); //,"REFUND")
		}
	}
	if (PAYMENT_TYPE === 'CARD') {
		//cancel or refund paymentIntent if any exists.
		if (order.payment_intent_id) {
			console.log(`got into card if`);
			const payment_intent = await stripe.client.paymentIntents.retrieve(order.payment_intent_id);
			if (!['succeeded', 'canceled', 'processing'].includes(payment_intent.status)) {
				const canceled_PI = await stripe.client.paymentIntents.cancel(order.payment_intent_id);
			} else {
				const refund_obj = await stripe.client.refunds.create({
					payment_intent: order.payment_intent_id,
				});
			}
		}
	}
}
const calculateOrderDeliveryCost = (orderData, is_student) => {
	if (orderData?.details?.type === 'delivery' && !is_student) {
		const distance = haversineDistance(
			orderData.delivery_location?.coordinates,
			orderData.pickup_location?.coordinates
		);
		let pricePer500m = DELIVERY_COST_CALCULATION.COST_PER_500;
		console.info(distance);
		const delivery_cost = Math.round(distance / 0.5) * pricePer500m;
		return Math.max(DELIVERY_COST_CALCULATION.MINIMUM_COST, delivery_cost);
	} else {
		return 0;
	}
};
const verifyOrderCosts = async (orderData) => {
	const menu_item_ids = Array.isArray(orderData?.items) ? orderData.items.map((item) => item.menu_item_id) : [];
	const merchant_business = await BusinessDao.getBusinessById(orderData.details.business_id);
	let items = await MenuItemDao.getMenuItemsByIds(menu_item_ids);
	items = items.map((item) => {
		const matching_item = orderData.items.find((i) => i.menu_item_id === item.menu_item_id);
		const quantity = matching_item?.quantity || 0;
		return { ...item, quantity };
	});
	let orderTotal = 0;
	let discountTotal = 0;
	let is_student = false;
	items.forEach((item) => {
		const price = Number(item?.price) || 0;
		const discount = Number(item?.discount) || 0;
		const quantity = Number(item?.quantity) || 0;
		if (item?.menu_category.menu_categories_categories.some((mcc) => mcc.category.tag === 'student-meals'))
			is_student = true;
		const discountedPrice = price - price * discount;
		orderTotal += discountedPrice * quantity;
		discountTotal += discount * price * quantity;
		// Extras
		if (Array.isArray(item?.extras)) {
			item.extras.forEach((extra) => {
				const extraPrice = Number(extra?.price) || 0;
				orderTotal += extraPrice * quantity;
			});
		}
		// Sides
		if (Array.isArray(item?.sides)) {
			item.sides.forEach((side) => {
				const sidePrice = Number(side?.price) || 0;
				orderTotal += sidePrice * quantity;
			});
		}
	});
	let delivery_cost = calculateOrderDeliveryCost(orderData, is_student);
	console.info('Comparing:', delivery_cost, orderData.details.delivery_cost);
	if (delivery_cost.toFixed(2) !== orderData.details.delivery_cost.toFixed(2)) return false;
	console.info('Comparing:', orderTotal, orderData.details.sub_total_price);
	console.info('Comparing:', discountTotal, orderData.details.discount_savings);
	if (
		orderTotal.toFixed(2) !== orderData.details.sub_total_price.toFixed(2) ||
		orderData.details.discount_savings.toFixed(2) !== discountTotal.toFixed(2)
	)
		return false;
	//minimum_order_fee
	const expectedFee = (merchant_business?.minimum_order - orderTotal).toFixed(2);
	const actualFee = orderData.details.minimum_order_fee.toFixed(2);
	console.info('Comparing:', actualFee, expectedFee);
	if (orderTotal < merchant_business?.minimum_order && actualFee !== expectedFee) return false;
	return true;
};
function shouldReleaseFunds(order, service_type, date_threshold) {
	const updatedAt = new Date(order.updated_at);
	if (updatedAt > date_threshold) return false;
	if (service_type === 'delivery' && order.status === DELIVERY_ORDER_STATUS.FAIL) {
		return true;
	}
	if (
		service_type === 'taxi' &&
		[TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED].includes(order.status)
	) {
		return true;
	}
	return false;
}
async function releaseWFForFailedOrders() {
	try {
		const reservedWFs = await WalletFundsDao.getAllReservedWalletFunds();
		const groupedReservedWFs = reservedWFs.reduce((groups, wf) => {
			const orderId = wf.reserved_order;
			if (!groups[orderId]) groups[orderId] = [];
			groups[orderId].push(wf);
			return groups;
		}, {});
		const orderIds = Object.keys(groupedReservedWFs);
		const now = new Date();
		const date_threshold = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
		const releasePromises = [];
		await Promise.all(
			orderIds.map(async (orderId) => {
				let order = await DeliveryOrderDao.getOrder(orderId);
				let service_type = SERVICE_TYPE.DELIVERY;
				if (!order) {
					order = await TaxiOrderDao.getOrder(orderId);
					service_type = SERVICE_TYPE.TAXI;
				}
				if (!order) {
					console.warn(`Order not found for ID: ${orderId}`);
					return;
				}
				if (shouldReleaseFunds(order, service_type, date_threshold)) {
					for (const wf of groupedReservedWFs[orderId]) {
						releasePromises.push(
							WalletFundsDao.releaseFunds(wf.wallet_funds_id, wf.amount).catch((err) => {
								console.error(`Failed to release wallet fund ${wf.wallet_funds_id}:`, err);
							})
						);
					}
				}
			})
		);
		const results = await Promise.allSettled(releasePromises);
		const successCount = results.filter((r) => r.status === 'fulfilled').length;
		const failureCount = results.filter((r) => r.status === 'rejected').length;
		console.log(`Successfully released ${successCount} wallet funds.`);
		console.log(`Failed to release ${failureCount} wallet funds (see error logs).`);
	} catch (error) {
		console.error('Error in releaseWFForFailedOrders:', error);
	}
}

async function createDailyMealsSubscriptions(delivery_location, daysData, user_id, grouped_id, details) {
	const address = await AddressDao.addAddress({
		address: delivery_location.address,
		latitude: `${delivery_location.coordinates.latitude}`,
		longitude: `${delivery_location.coordinates.longitude}`,
	});
	for (const day of daysData) {
		let menu = day.menu;
		for (let menuTag of Object.keys(menu)) {
			let date = new Date(day.date);
			date.setHours(10, 0, 0);
			const menuData = menu[menuTag];
			const business_id = details.business_id || menuData.business_id;
			if (menuData.people && menuData.people > 0) {
				await DeliveryOrderDao.createDailyMealsSubscription(
					grouped_id,
					user_id,
					business_id,
					menuData.menu_id,
					address.address_id,
					menuData.menu_category_id,
					day.commentCourier,
					day.commentRestaurant,
					date,
					menuData.people
				);
			}
		}
	}
}

export { autoRejectDeliveryOrders };
export { checkIfDeliveryOrdersNeedSending };
export { checkIfRestaurantOrderIsPrepared };
export { resendPendingOrdersToDeliveryDriver };
export { generateItemsFromPreferences };
export { sendActiveOrdersToDeliveryDriver };
export { revokeDeliveryOrderFromDrivers };
export { calculateDeliveryOrderPaymentCuts };
export { handlePaymentCleanup };
export { handlePaymentRefund };
export { verifyOrderCosts };
export { releaseWFForFailedOrders };
export { groupSubscriptionsForDailyMeals };
export { createDailyMealsSubscriptions };
export default {
	autoRejectDeliveryOrders,
	checkIfDeliveryOrdersNeedSending,
	checkIfRestaurantOrderIsPrepared,
	resendPendingOrdersToDeliveryDriver,
	generateItemsFromPreferences,
	sendActiveOrdersToDeliveryDriver,
	revokeDeliveryOrderFromDrivers,
	calculateDeliveryOrderPaymentCuts,
	handlePaymentCleanup,
	handlePaymentRefund,
	verifyOrderCosts,
	releaseWFForFailedOrders,
	groupSubscriptionsForDailyMeals,
	createDailyMealsSubscriptions,
};
