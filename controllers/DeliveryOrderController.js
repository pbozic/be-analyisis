import moment from 'moment';
import { v4 } from 'uuid';
import { SPLIT_DESTINATION_TYPE, SPLIT_STATUS, DAILY_MEAL_INSTANCE_STATUS, BUSINESS_TYPE } from '@prisma/client';

import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import DeliveryDriverDao from '../dao/DeliveryDriver.js';
import BusinessDao from '../dao/Business.js';
import EmailHelper from '../lib/emailSender.js';
import gApi from '../lib/gApis.js';
import socket from '../socket.js';
import stripe from '../lib/stripe.js';
import { getOrderAndPDF } from '../lib/orderPdf.js';
import {
	DELIVERY_ORDER_STATUS,
	DOCUMENT_TYPE,
	CREDITS,
	ORDER_TYPE,
	CASHBACK_SOURCE,
	DRIVE_FEE,
	DELIVERY_ORDER_END_STATES,
	SCORING_POINTS_REASON,
	SERVICE_TYPE,
	RESTAURANT_SHARE_PERC,
} from '../lib/constants.js';
import {
	calculateAndVerifyPriceForOrderItems,
	revokeDeliveryOrderFromDrivers,
	calculateDeliveryOrderPaymentCuts,
	handlePaymentCleanup,
	handlePaymentRefund,
	generateOrder,
} from '../lib/deliveryHelpers.js';
import { createAndTransferGroupSplits } from '../lib/paymentHelpers.ts';
import { sortObjectsByNearestNeighbor, todaysEarnings } from '../lib/helpersLib.js';
import prisma from '../prisma/prisma.js';
import WalletFundsHelpers from '../lib/WalletFundsHelpers.js';
import DriverDao from '../dao/Driver.js';
import { sendDeliveryOrderNotifications } from '../lib/notifications.js';
import CashbackDao from '../dao/Cashback.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import { handleReferral } from '../lib/referralHelper.js';
import ScoringPointsDao from '../dao/ScoringPoints.js';
import LateEventsDao from '../dao/LateEvents.js';
import PaymentDao from '../dao/Payment.ts';
import BusinessUsersDao from '../dao/BusinessUsers.js';
import DailyMealDao from '../dao/DailyMealDao.ts';
import UserDao from '../dao/User.js';
const { UserSockets, io, SocketStore } = socket;
const uuidv4 = { v4 }.v4;
/**
 * GET /delivery/orders/:daily_meals
 * @tag Delivery
 * @summary Get all delivery orders.
 * @description This fetches all delivery orders.
 * @operationId getAllDeliveryOrders
 * @response 200 - Successful operation. Returns a list of all orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getDeliveryOrders(req, res) {
	const { is_daily_meal } = req.params;
	const where = {
		where: {
			is_daily_meal: !!is_daily_meal,
		},
	};
	try {
		const orders = await DeliveryOrderDao.getOrders(where);
		res.status(200).json(orders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/active
 * @tag Delivery
 * @summary Get all active delivery orders.
 * @description This fetches all active delivery orders.
 * @operationId getActiveDeliveryOrders
 * @response 200 - Successful operation. Returns a list of active orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getActiveDeliveryOrders(req, res) {
	try {
		const activeOrders = await DeliveryOrderDao.getActiveDeliveryOrders();
		res.status(200).json(activeOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/order/{orderId}
 * @tag Delivery
 * @summary Get order details.
 * @description This fetches the order details using the given order id.
 * @operationId getOrder
 * @pathParam {integer} orderId - The ID of the delivery order to retrieve
 * @response 200 - Successful operation. Returns order details in the response body.
 * @responseContent {Order} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getOrder(req, res) {
	try {
		let order = await DeliveryOrderDao.getOrder(req.params.order_id);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/order/user/{order_id}
 * @tag Delivery
 * @summary Get order details.
 * @description This fetches the order details using the given order id.
 * @operationId getUserByDeliveryOrderId
 * @pathParam {integer} order_id - The ID of the delivery order to retrieve the customer
 * @response 200 - Successful operation. Returns order customer details in the response body.
 * @responseContent {Order} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getUserByDeliveryOrderId(req, res) {
	const { order_id } = req.params;
	try {
		const user = await DeliveryOrderDao.getUserByDeliveryOrderId(order_id);
		if (user) {
			res.json(user);
		} else {
			res.status(404).send('User not found for this order');
		}
	} catch (error) {
		res.status(500).send('Failed to fetch user data', error);
	}
}

/**
 * POST /delivery/orders/order
 * @tag Delivery
 * @summary Create a new delivery order.
 * @description This creates a new delivery order with the provided details from the request body. Returns the created order if successful.
 * @operationId createOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {DeliveryOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the newly created order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function createOrder(req, res) {
	const { orderBody, return_url } = req.body;
	try {
		const user_id = req.user?.user_id;
		if (!user_id) {
			return res.status(403).json({ message: 'Unauthorized' });
		}
		const { order, payment_intent } = await generateOrder(orderBody, user_id, return_url);
		res.status(200).json({
			...order,
			payment_intent,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: e.message });
	}
}

/**
 * POST /delivery/orders/daily_meals
 * @tag Delivery
 * @summary Create daily meals.
 * @description This creates the daily meals for the subscribed users.
 * @operationId startDailyMeals
 * @response 200 - Successful operation. Returns updated delivery driver.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function startDailyMeals(req, res) {
	const user_id = req.user?.user_id;
	if (!user_id) {
		return res.status(401).json({ message: 'Unauthorized user.' });
	}
	const userSocket = UserSockets.get(user_id);
	if (!userSocket) {
		console.info('User is not connected to the socket');
		return res.status(400).json({ message: 'User is not connected to the socket.' });
	}
	try {
		const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverByUserId(user_id);
		if (!deliveryDriver) {
			return res.status(404).json({ message: 'Delivery driver not found.' });
		}
		if (!deliveryDriver?.location?.coordinates) {
			return res.status(400).json({ message: 'Delivery driver location not set.' });
		}
		const dailyMealOrders = await DeliveryOrderDao.getOrders({
			where: {
				is_daily_meal: true,
				delivery_driver_id: deliveryDriver.delivery_driver_id,
				status: DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP,
			},
		});
		if (!dailyMealOrders || dailyMealOrders.length === 0) {
			return res.status(404).json({ message: 'No daily meal orders found.' });
		}
		const convertAddressToLocation = (address) => {
			return {
				address: address.address,
				coordinates: {
					latitude: address.latitude,
					longitude: address.longitude,
				},
			};
		};
		const getRouteDuration = async (locationA, locationB, departure_time) => {
			try {
				let { result } = await gApi.distanceBetweenTwoPoints(
					locationA.coordinates,
					locationB.coordinates,
					'driving',
					departure_time,
					'best_guess'
				);
				return {
					duration: result.rows[0].elements[0].duration.value,
					distance: result.rows[0].elements[0].distance.value,
				};
			} catch (error) {
				console.error('Error calculating route duration:', error);
				return res.status(500).json({ message: 'Error calculating route duration.' });
			}
		};
		const business = await BusinessDao.getBusinessById(deliveryDriver.daily_meal_business_id);
		const providerLocation = convertAddressToLocation(business.delivery_address);
		let sortedOrders = [];
		if (business.daily_users_sorting_type === 'MANUAL') {
			// Manual sorting based on provider.daily_users_sorted
			//FIXME: business.daily_users_sorted deprecated?
			if (!Array.isArray(business.daily_users_sorted)) {
				return res.status(400).json({ message: 'Manual sort order missing or invalid.' });
			}

			// Step 1: Map user_id → index
			const sortIndexMap = new Map(business.daily_users_sorted.map((user_id, index) => [user_id, index]));

			// Step 2: Sort with fallback for unknown users
			sortedOrders = [...dailyMealOrders].sort((a, b) => {
				const indexA = sortIndexMap.has(a.user_id) ? sortIndexMap.get(a.user_id) : Infinity;
				const indexB = sortIndexMap.has(b.user_id) ? sortIndexMap.get(b.user_id) : Infinity;
				return indexA - indexB;
			});

			console.info('sortedUserAddresses MANUAL', sortedOrders);
			console.info('sortedUserAddresses MANUAL', sortedOrders[0].address);
		} else {
			// Automatic sorting by nearest neighbor
			sortedOrders = sortObjectsByNearestNeighbor([
				{ address: business.address },
				...dailyMealOrders.map((order) => ({ ...order, address: order.delivery_location })),
			]).slice(1);
			console.info('sortedUserAddresses AUTOMATIC', sortedOrders);
			console.info('sortedUserAddresses AUTOMATIC', sortedOrders[0].address);
		}

		const orders = [];
		const now = new Date();
		const start_time = new Date(now.setHours(10, 45, 0, 0));
		console.log('Start time for daily meals:', start_time.toISOString());
		let cumulativeTime =
			(await getRouteDuration(deliveryDriver.location, providerLocation, start_time)?.duration) || 0; // Track the total elapsed time
		let scheduledMealsRoute = [providerLocation];

		for (const order of sortedOrders) {
			const deliveryLocation = order.delivery_location;
			const route = await getRouteDuration(
				scheduledMealsRoute[scheduledMealsRoute.length - 1],
				deliveryLocation,
				new Date(start_time.getTime() + cumulativeTime * 1000)
			);
			const durationValue = route?.duration || 0;
			const distanceValue = route?.distance || 0;

			// Calculate expected delivery time based on cumulative time
			const customerExpectedDeliveryAt = new Date(
				start_time.getTime() + cumulativeTime * 1000 + durationValue * 1000 + 5 * 60 * 1000
			);
			cumulativeTime += durationValue;
			const readyForPickupAt = start_time.toISOString();
			const orderData = {
				details: {
					...order.details,
					ready_for_pickup_at: readyForPickupAt,
					customer_expected_delivery_at: customerExpectedDeliveryAt.toISOString(),
					daily_meal_delivery_order: scheduledMealsRoute.length - 1,
					duration: cumulativeTime,
					distance: distanceValue / 1000,
				},
			};
			const updatedOrder = await DeliveryOrderDao.updateOrder(order.order_id, orderData);
			if (updatedOrder) orders.push(updatedOrder);
			await DeliveryOrderDao.createOrderSent(updatedOrder.order_id, deliveryDriver);
			SocketStore.addUserToRoom(updatedOrder.user_id, `order_${updatedOrder.order_id}`);
			SocketStore.addUserToRoom(deliveryDriver.user_id, `order_${updatedOrder.order_id}`);
			scheduledMealsRoute.push(deliveryLocation);
		}
		scheduledMealsRoute.push(providerLocation);
		const updatedDriver = await DeliveryDriverDao.updateDeliveryDriver(deliveryDriver?.delivery_driver_id, {
			scheduled_meals_route: scheduledMealsRoute,
			delivery_timeline: [],
			on_daily_meals: true,
		});
		userSocket.emit('daily_meals', {
			orders: orders,
			scheduled_meals_route: scheduledMealsRoute,
		});
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Something went wrong with creating daily meals...' });
	}
}
/**
 * POST /delivery/order/accept
 * @tag Delivery
 * @summary Accept a delivery order.
 * @description Accepts delivery order with the provided details from the request body. Returns the accepted order if successful.
 * @operationId acceptOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {DeliveryOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the accepted order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function acceptOrderDeliveryOld(req, res) {
	//console.log("accept order user_id", req.body.user?.user_id);
	const { order_id, user } = req.body;
	const deliverer_id = user?.delivery_driver?.delivery_driver_id || user?.driver?.driver_id;
	try {
		let order = await DeliveryOrderDao.getOrder(order_id, {
			include: {
				delivery_driver: true,
				driver: true,
			},
		});
		let deliverer = user?.delivery_driver?.delivery_driver_id
			? await DeliveryDriverDao.getDeliveryDriverById(deliverer_id)
			: await DriverDao.getDriverById(deliverer_id);
		if (!deliverer.online) {
			return res.status(400).json({ error: `You are offline!.`, errorType: 'ERR_DRIVER_OFFLINE' });
		} else if (
			//TODO: handle dispatcher canceled.
			[].includes(order.status)
		) {
			return res
				.status(400)
				.json({ error: `Order has been canceled: ${order.status}.`, errorType: 'ERR_ORDER_ALREADY_CANCELED' });
		} else if (
			![DELIVERY_ORDER_STATUS.MERCHANT_PREPARING, DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP].includes(
				order.status
			)
		) {
			return res
				.status(400)
				.json({ error: 'Order cannot be accepted in this state.', errorType: 'ERR_ORDER_UNACCEPTABLE' });
		} else if (
			(order.driver?.driver_id && order.driver?.driver_id !== deliverer_id) ||
			(order.delivery_driver?.delivery_driver_id && order.delivery_driver?.delivery_driver_id !== deliverer_id)
		) {
			return res
				.status(400)
				.json({ error: 'Order is already accepted.', errorType: 'ERR_ORDER_ALREADY_ACCEPTED' });
		}
		const vehicle = deliverer.current_vehicle || deliverer.vehicles[0];
		order = await DeliveryOrderDao.acceptOrderDelivery(order, deliverer_id, vehicle?.vehicle_id);
		order = await DeliveryOrderDao.getOrder(order.order_id, {
			include: {
				delivery_driver: true,
				driver: true,
			},
		});
		let driver;
		if (order.delivery_driver?.delivery_driver_id) {
			driver = await DeliveryDriverDao.getDeliveryDriverById(deliverer_id, {
				vehicles: {
					include: {
						vehicle_specification: true,
					},
				},
			});
			driver.vehicle = vehicle;
			order.driver = driver;
		}
		/*let { result } = await gApi.distanceBetweenTwoPoints(order.pickup_location.coordinates, order.delivery_location.coordinates, "driving", new Date());
		order.details.distance = result.rows[0].elements[0].distance.text;
		order.details.duration = result.rows[0].elements[0].duration.text;
		if (!order?.is_daily_meal) {
			order.details.customer_expected_delivery_at = new Date(new Date(order.details.ready_for_pickup_at).getTime() + result.rows[0].elements[0].duration.value * 1000 + 3600000);
			console.log(order.details.customer_expected_delivery_at, "expected delivery ...");
		}
		order = await DeliveryOrderDao.updateOrder(order.order_id, {
			details: order.details
		});*/
		console.log('order accepted', order);
		SocketStore.addUserToRoom(deliverer.user_id, `order_${order.order_id}`);
		io.to('order_' + order.order_id).emit('order_accepted__delivery', order);
		io.emit('driver_unavailable', deliverer_id);
		await revokeDeliveryOrderFromDrivers(order.order_id);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

async function acceptOrderDelivery(req, res) {
	const { order_id, user } = req.body;
	const deliverer_id = user.delivery_driver?.delivery_driver_id ?? user.driver?.driver_id;
	const isDD = !!user.delivery_driver;

	try {
		let order = await DeliveryOrderDao.getOrder(order_id, {
			include: {
				delivery_driver: true,
				driver: true,
			},
		});
		let deliverer = user?.delivery_driver?.delivery_driver_id
			? await DeliveryDriverDao.getDeliveryDriverById(deliverer_id)
			: await DriverDao.getDriverById(deliverer_id);
		if (!deliverer.online) {
			return res.status(400).json({ error: `You are offline!.`, errorType: 'ERR_DRIVER_OFFLINE' });
		} else if (
			//TODO: handle dispatcher canceled.
			[].includes(order.status)
		) {
			return res
				.status(400)
				.json({ error: `Order has been canceled: ${order.status}.`, errorType: 'ERR_ORDER_ALREADY_CANCELED' });
		} else if (
			![DELIVERY_ORDER_STATUS.MERCHANT_PREPARING, DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP].includes(
				order.status
			)
		) {
			return res
				.status(400)
				.json({ error: 'Order cannot be accepted in this state.', errorType: 'ERR_ORDER_UNACCEPTABLE' });
		} else if (
			(order.driver?.driver_id && order.driver?.driver_id !== deliverer_id) ||
			(order.delivery_driver?.delivery_driver_id && order.delivery_driver?.delivery_driver_id !== deliverer_id)
		) {
			return res
				.status(400)
				.json({ error: 'Order is already accepted.', errorType: 'ERR_ORDER_ALREADY_ACCEPTED' });
		}
		const order2 = await DeliveryOrderDao.acceptOrderDeliveryWithRawLock(
			order_id,
			deliverer_id,
			user.current_vehicle?.vehicle_id,
			isDD
		);
		let newOrder = await DeliveryOrderDao.getOrder(order2.order_id, {
			include: {
				delivery_driver: true,
				driver: true,
			},
		});
		// sockets, notifications, etc.
		SocketStore.addUserToRoom(deliverer_id, `order_${order_id}`);
		io.to(`order_${order_id}`).emit('order_accepted__delivery', newOrder);
		io.emit('driver_unavailable', deliverer_id);
		await revokeDeliveryOrderFromDrivers(order_id);

		res.status(200).json(newOrder);
	} catch (err) {
		// Postgres NOWAIT lock error will bubble up here
		const msg = err.code === '55P03' ? 'Order is already being claimed' : err.message;

		if (err.code === '55P03' /* lock_not_available */) {
			return res.status(409).json({ error: msg, errorType: 'ERR_ORDER_ALREADY_ACCEPTED' });
		}

		console.error(err);
		res.status(500).json({ error: msg });
	}
}
/**
 * POST /delivery/order/cancel_delivery
 * @tag Delivery
 * @summary Driver cancels their delivery of a delivery order which they have accepted but not picked up yet.
 * @description Allows a driver to cancel their delivery of an accepted delivery order if the order is in MERCHANT_PREPARING or MERCHANT_READY_FOR_PICKUP state.
 * @operationId cancelDelivery
 * @bodyDescription Request body must include order_id.
 * @bodyContent {DeliveryOrderOptOutRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 400 - Bad request. Returns error message if the order delivery cannot be canceled.
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function cancelOrderDelivery(req, res) {
	const { order_id } = req.body;
	try {
		const old_order = await DeliveryOrderDao.getOrder(order_id, {
			include: { user: true, driver: true, delivery_driver: true },
		});
		if (
			[
				DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
				DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
				DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED,
				DELIVERY_ORDER_STATUS.CUSTOMER_PICKED_UP,
				DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
				...DELIVERY_ORDER_END_STATES,
			].includes(old_order.status)
		) {
			throw new Error('This order is not in a cancelable state.');
		}
		let new_order = await DeliveryOrderDao.updateOrderStatus(
			old_order.order_id,
			DELIVERY_ORDER_STATUS.DELIVERY_CANCELED
		);
		let driver;
		if (old_order.driver_id) {
			driver = await DriverDao.getDriverById(old_order.driver_id);
			await prisma.drivers.update({
				where: {
					driver_id: driver.driver_id,
				},
				data: {
					on_order: false,
				},
			});
		} else if (old_order.delivery_driver_id) {
			driver = await DeliveryDriverDao.getDeliveryDriverById(old_order.delivery_driver_id);
			await prisma.delivery_drivers.update({
				where: {
					driver_id: driver.delivery_driver_id,
				},
				data: {
					on_order: false,
				},
			});
		}
		revokeDeliveryOrderFromDrivers(new_order.order_id);
		sendDeliveryOrderNotifications(
			old_order.user,
			driver?.user,
			old_order.user_id,
			driver?.user_id,
			new_order.status
		);

		io.to('order_' + new_order.order_id).emit('order_status_change__delivery', new_order);
		new_order = await DeliveryOrderDao.updateOrderStatus(old_order.order_id, DELIVERY_ORDER_STATUS.FAIL);
		io.to('order_' + new_order.order_id).emit('order_status_change__delivery', new_order);
		//TODO: hnadle cash payment -> refund merchant
		io.to('order_' + new_order.order_id).emit('order_canceled', new_order);
		SocketStore.closeRoom(`order_${new_order.order_id}`);
		res.status(200).json(new_order);
	} catch (e) {
		console.error('Error canceling order', e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/order/complete
 * @tag Delivery
 * @summary Complete a delivery order.
 * @description Completes a delivery order with the provided order ID from the request body. Returns the completed order if successful and emits a 'driver_available' event.
 * @operationId completeOrder
 * @bodyDescription Request body must include 'order_id'.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the completed order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Console logs the error message and returns it in the response.
 */
async function completeOrder(req, res) {
	try {
		let order = await DeliveryOrderDao.completeOrder(req.body.order_id);
		let driver;
		if (order.details?.type !== 'pickup') {
			driver = order.delivery_driver_id
				? await DeliveryDriverDao.getDeliveryDriverById(order.delivery_driver_id)
				: await DriverDao.getDriverById(order.driver_id);
			//assign penalties for being late
			const timeline_delivered_timestamp = order.timeline.findLast(
				(entry) => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_DELIVERED
			)?.timestamp;
			if (timeline_delivered_timestamp && order.details?.customer_expected_delivery_at) {
				const late_seconds = moment(timeline_delivered_timestamp).diff(
					moment(order.details.customer_expected_delivery_at),
					'seconds'
				);
				console.log(`Order was ${late_seconds} seconds ${late_seconds > 0 ? 'late' : 'early or on time'}.`);
				let allowed_leeway = 60 * 30;
				if (late_seconds > allowed_leeway) {
					await LateEventsDao.createLateEvent(
						driver.business_id,
						driver.user_id,
						order.order_id,
						null,
						late_seconds - allowed_leeway
					);
				}
			} else {
				await ScoringPointsDao.createScoringPoints(
					order.business_id,
					driver.user_id,
					order.order_id,
					null,
					0,
					false,
					SCORING_POINTS_REASON.INSUFFICIENT_DATA
				);
			}
			if (!order.is_daily_meal) {
				let delivery_business_stripe = await BusinessDao.getBusinessStripeByBusinessId(driver.business_id);
				const INITIAL_DELIVERY_CUT = Math.round(order.details.delivery_cost * 100 * (1 - DRIVE_FEE));
				const remainingReservedCredits = await WalletFundsDao.getReservedCredits(order.user_id, order.order_id);
				const CREDITS_AMOUNT_RESERVED = remainingReservedCredits.reduce((sum, wf) => sum + wf.amount, 0);
				const DELIVERY_CREDIT_CUT_CENTS = Math.min(INITIAL_DELIVERY_CUT, CREDITS_AMOUNT_RESERVED);
				if (DELIVERY_CREDIT_CUT_CENTS > 0) {
					const transferCreditsDeliveryDriver = await WalletFundsHelpers.transferReservedCreditsForOrder(
						order.user_id,
						delivery_business_stripe,
						DELIVERY_CREDIT_CUT_CENTS,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
				}
				const DISCOUNTED_DELIVERY_COST_CENTS = INITIAL_DELIVERY_CUT - DELIVERY_CREDIT_CUT_CENTS;
				console.info({
					delivery_credits: DELIVERY_CREDIT_CUT_CENTS,
					remaining_delivery_cost: DISCOUNTED_DELIVERY_COST_CENTS,
				});
				if (DISCOUNTED_DELIVERY_COST_CENTS > 0) {
					if (order.payment.type === 'CARD' || order.payment.type === 'PLATFORM') {
						const paymentIntent = await stripe.client.paymentIntents.retrieve(order.payment_intent_id);
						const transferDelivery = stripe.splitCutFromPaymentIntent(
							paymentIntent,
							delivery_business_stripe,
							DISCOUNTED_DELIVERY_COST_CENTS
						);
					} else if (order.payment.type === 'WALLET') {
						console.info(order);
						const transfersForDeliveryDriver = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							order.user_id,
							delivery_business_stripe,
							DISCOUNTED_DELIVERY_COST_CENTS,
							order.order_id,
							SERVICE_TYPE.DELIVERY
						);
					}
				}
			} else {
				let delivery_business_stripe = await BusinessDao.getBusinessStripeByBusinessId(driver.business_id);
				const grouped_id = order.details.subscription_grouped_id;
				if (!grouped_id) {
					console.warn('Daily meal order details do not contain subscription_grouped_id');
				} else {
					const subscription_payment = await PaymentDao.getPaymentByGroupedId(grouped_id);
					const first_available_driver_split = subscription_payment.payment_splits.find(
						(split) =>
							split.destination_type === SPLIT_DESTINATION_TYPE.DRIVER &&
							split.status === SPLIT_STATUS.RESERVED
					);

					const amount_merchant = Math.floor(
						((order.details.sub_total_price * RESTAURANT_SHARE_PERC) / 100) * 100
					);
					const amount_platform = Math.floor((order.details.sub_total_price - amount_merchant) * 100);
					const amount_driver =
						first_available_driver_split.amount_regular +
						(await createAndTransferGroupSplits(
							subscription_payment.payment_id,
							[
								{
									destination_type: SPLIT_DESTINATION_TYPE.MERCHANT,
									destination_id: restaurant_acc,
									amount: amount_merchant,
								},
								{
									destination_type: SPLIT_DESTINATION_TYPE.PLATFORM,
									destination_id: 'platform',
									amount: amount_platform,
								},
								{
									destination_type: SPLIT_DESTINATION_TYPE.DRIVER,
									amount:
										first_available_driver_split.amount_regular +
										first_available_driver_split.amount_credits,
									destination_id: delivery_business_stripe,
								},
							],
							TRANSFER_GROUP_TYPE.TRANSFER
						));
				}
			}
		}
		if (!order.is_daily_meal) {
			const DELIVERY_COST_CENTS = order.details.total_price * 100;
			let cashbackAmount =
				DELIVERY_COST_CENTS >= CREDITS.CASHBACK_THRESHOLD_DELIVERY ? Math.floor(DELIVERY_COST_CENTS / 100) : 1;
			const cashback = await CashbackDao.createCashback({
				user: { connect: { user_id: order.user_id } },
				amount: Math.round(cashbackAmount),
				type: ORDER_TYPE.DELIVERY,
				source: CASHBACK_SOURCE.ORDER,
				description: `Cashback for delivery order ${order.order_id}`,
				delivery_order: { connect: { order_id: order.order_id } },
			});
			if (cashback) {
				const pendingCashbacks = await CashbackDao.getPendingUserCashbackByType(
					order.user_id,
					ORDER_TYPE.DELIVERY
				);
				const baskets = pendingCashbacks.reduce((sum, cb) => sum + cb.amount, 0);
				if (baskets >= CREDITS.CASHBACK_CONVERSION_DELIVERY) {
					const remainder = baskets % CREDITS.CASHBACK_CONVERSION_DELIVERY;
					if (remainder > 0) {
						await CashbackDao.createCashback({
							user: { connect: { user_id: order.user_id } },
							amount: Math.round(remainder),
							type: ORDER_TYPE.DELIVERY,
							source: CASHBACK_SOURCE.CONVERSION,
							description: `Cashback remainder after conversion to credit`,
						});
					}
					const expiryDate = new Date();
					expiryDate.setDate(expiryDate.getDate() + 30);
					expiryDate.setHours(23, 59, 59, 999);
					if (baskets > 0) {
						await WalletFundsDao.convertCashbacksToCredit(
							{
								user: { connect: { user_id: order.user_id } },
								amount: Math.floor(baskets / CREDITS.CASHBACK_CONVERSION_DELIVERY) * 100,
							},
							pendingCashbacks
						);
					}
				}
			}
		} else {
			await DailyMealDao.updateDailyMealInstances(
				order.details.instance_ids,
				DAILY_MEAL_INSTANCE_STATUS.DELIVERED
			);
		}
		await handleReferral(order.user_id);
		sendDeliveryOrderNotifications(order.user, null, order.user_id, null, order.status);
		// send email
		sendPdfDeliveryOrder(order);
		// order = await DeliveryOrderDao.updateOrderStatus(order.order_id,DELIVERY_ORDER_STATUS.SUCCESS)
		io.to('order_' + order.order_id).emit('order_completed__delivery', order);
		io.emit('driver_available', driver);
		setTimeout(() => {
			SocketStore.closeRoom(`order_${order.order_id}`);
		}, 10000);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
async function sendPdfDeliveryOrder(order) {
	let template = 'orderConfirmation';
	let pdf = await getOrderAndPDF(order.order_id);
	let templateData = {
		userName: order.user.first_name,
		restaurant: order.business.name,
		orderDate: moment(order.created_at).format('DD/MM/YYYY HH:mm'),
		orderId: order.order_id,
		subtotal: order.details.sub_total_price,
		total: order.details.total_price,
		discount: order.details.discount_savings,
		delivery_cost: order.details.delivery_cost,
		paymentMethod: order.payment.type,
	};
	EmailHelper.sendEmailTemplate('Order confirmation ' + order.order_id, template, order.user.email, templateData, {
		filename: 'Order_confirmation_' + order.order_id + '.pdf',
		content: Buffer.isBuffer(pdf) ? pdf : Buffer.from(pdf, 'binary'),
		contentType: 'application/pdf',
	});
}
/**
 * GET /delivery/orders/driver/:driver_id
 * @tag Delivery
 * @summary Get completed delivery orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedDeliveryOrdersByDriverId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getDeliveryOrdersByDriverId(req, res) {
	const { driver_id } = req.params;
	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				OR: [{ delivery_driver_id: driver_id }, { driver_id: driver_id }],
			},
			include: {
				business: true,
				user: true,
				driver: { include: { user: true } },
				delivery_driver: { include: { user: true } },
			},
		});
		res.status(200).json(orders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/completed
 * @tag Delivery
 * @summary Get completed delivery orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedDeliveryOrdersByDriverId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCompletedDeliveryOrdersByDriverId(req, res) {
	console.log('get completed orders');
	const { driver_id } = req.params;
	try {
		const completedOrders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				OR: [{ delivery_driver_id: driver_id }, { driver_id: driver_id }],
			},
			include: {
				business: true,
			},
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/active/driver/:driver_id
 * @tag Delivery
 * @summary Get active delivery orders.
 * @description This fetches all active orders for a specific driver.
 * @operationId getActiveDeliveryOrdersByDriverId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getActiveDeliveryOrdersByDriverId(req, res) {
	const { driver_id } = req.params;
	try {
		const allActiveOrders = await DeliveryOrderDao.getOrders({
			where: {
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
				OR: [{ delivery_driver_id: driver_id }, { driver_id: driver_id }],
			},
		});
		const activeOrders = [];
		const pendingOrders = [];
		for (let order of allActiveOrders) {
			if (!order.is_daily_meal || order.timeline.includes(DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED)) {
				activeOrders.push(order);
			}
		}
		const sentOrders = await DeliveryOrderDao.getAlreadySentOrdersByDeliveryDriverId(driver_id);
		for (let sentOrder of sentOrders) {
			const order = await DeliveryOrderDao.getOrder(sentOrder.order.order_id);
			if (
				!DELIVERY_ORDER_END_STATES.includes(order.status) &&
				!order.timeline.includes(DELIVERY_ORDER_STATUS.DELIVERY_PICKED_UP) &&
				!order.driver_id &&
				!order.delivery_driver_id
			) {
				pendingOrders.push(order);
				console.info('Re-sending pending order: ', order.order_id, ' to driver: ', driver_id);
			}
		}
		res.status(200).json({
			active: activeOrders,
			pending: pendingOrders,
		});
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/completed/user/:user_id
 * @tag Delivery
 * @summary Get completed delivery orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedDeliveryOrdersByDriverId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCompletedDeliveryOrdersByUserId(req, res) {
	const { user_id } = req.params;
	try {
		const completedOrders = await DeliveryOrderDao.getOrders({
			where: {
				user_id: user_id,
				status: { in: DELIVERY_ORDER_END_STATES },
			},
			include: {
				business: {
					include: {
						address: true,
						documents: {
							where: {
								document_type: DOCUMENT_TYPE.LOGO,
							},
							include: {
								files: true,
							},
						},
					},
				},
				delivery_driver: true,
				driver: true,
			},
			orderBy: {
				updated_at: 'desc',
			},
		});
		const result = completedOrders.map((order) => {
			const business = order.business;
			const logoDocument = business.documents.find((doc) => doc.document_type === DOCUMENT_TYPE.LOGO);
			const logo = logoDocument ? { ...logoDocument, files: logoDocument.files } : null;
			return {
				...order,
				business: {
					...business,
					logo: logo,
				},
			};
		});
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/active/:user_id
 * @tag Delivery
 * @summary Get active delivery orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedDeliveryOrdersByDriverId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getActiveDeliveryOrdersByUserId(req, res) {
	const { user_id } = req.params;
	try {
		const activeOrders = await DeliveryOrderDao.getDeliveryOrdersIfNotCompleted(user_id);
		const filteredOrders = activeOrders.filter(
			(order) => !order.is_daily_meal || order.timeline.includes(DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED)
		);
		res.status(200).json(filteredOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/active/business/:business_id
 * @tag Delivery
 * @summary Get active delivery orders.
 * @description This fetches all completed orders for a specific business.
 * @operationId getCompletedDeliveryOrdersByBusinessId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getActiveDeliveryOrdersByBusinessId(req, res) {
	const { business_id } = req.params;
	try {
		const activeOrders = await DeliveryOrderDao.getActiveDeliveryOrdersForBusiness(business_id);
		res.status(200).json(activeOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/:business_id
 * @tag Delivery
 * @summary Get delivery orders.
 * @description This fetches all restaurant orders.
 * @operationId getDeliveryOrdersByBusinessId
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getDeliveryOrdersByBusinessId(req, res) {
	const { business_id } = req.params;
	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				business_id: business_id,
			},
		});
		// console.log('business orders', orders)
		res.status(200).json(orders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/completed/business/:business_id
 * @tag Delivery
 * @summary Get completed delivery orders by business id.
 * @description This fetches all completed restaurant orders.
 * @operationId getCompletedDeliveryOrdersByBusinessId
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCompletedDeliveryOrdersByBusinessId(req, res) {
	const { business_id } = req.params;
	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				business_id: business_id,
				status: DELIVERY_ORDER_STATUS.SUCCESS,
			},
		});
		// console.log('business completed orders', orders)
		res.status(200).json(orders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/order/status
 * @tag Delivery
 * @summary Update a delivery order's status.
 * @description Updates the status of a specific delivery order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateOrderStatus
 * @bodyDescription Request body must include 'order_id' to identify the order and 'status' to specify the new status.
 * @bodyContent {UpdateOrderStatusRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderStatus(req, res) {
	try {
		let order = await DeliveryOrderDao.getOrder(req.body.order_id, { include: { user: true } });
		let user;
		if (order) user = order.user;
		if (req.body.status === DELIVERY_ORDER_STATUS.MERCHANT_REJECTED) {
			await handlePaymentCleanup(order);
		}
		if (req.body.status === DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP) {
			await handleStockSync(order);
		}
		order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, req.body.status);
		io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
		if (
			[
				DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
				DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
				DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED,
			].includes(order.status)
		) {
			order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, DELIVERY_ORDER_STATUS.FAIL);
			await handleStockSync(order);
			//TODO: handle payment cleanup here?
			io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
		} else if (
			[DELIVERY_ORDER_STATUS.CUSTOMER_PICKED_UP, DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED].includes(order.status)
		) {
			order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, DELIVERY_ORDER_STATUS.SUCCESS);
			io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
		}
		let d;
		if (order.driver_id) {
			d = await DriverDao.getDriverById(order.driver_id);
		} else if (order.delivery_driver_id) {
			d = await DeliveryDriverDao.getDeliveryDriverById(order.delivery_driver_id);
		}
		sendDeliveryOrderNotifications(user, d?.user, user?.user_id, d?.user_id, req.body.status);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/orders/order/reject
 * @tag Delivery
 * @summary Reject a delivery order.
 * @description Rejects a delivery order by updating its status to MERCHANT_REJECTED and FAIL, and emits the order status change event.
 * @operationId rejectOrder
 * @bodyDescription Request body must include 'order_id' to identify the order.
 * @bodyContent {RejectOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution
 */
async function rejectOrder(req, res) {
	const { order_id, reason, items } = req.body;
	try {
		if (!order_id) {
			return res.status(400).json({ error: 'order_id is required.' });
		}
		if (Array.isArray(items) && items.length > 0) {
			await DeliveryOrderDao.updateOrderItems(order_id, items);
		}
		let order = await DeliveryOrderDao.updateOrder(order_id, {
			rejection_reason: reason,
		});
		let user;
		if (order) user = order.user;
		await handlePaymentCleanup(order);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.MERCHANT_REJECTED);
		io.to('order_' + order.order_id).emit('order_rejected__delivery', order);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.FAIL);
		io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
		await handleStockSync(order);
		sendDeliveryOrderNotifications(user, null, user?.user_id, null, DELIVERY_ORDER_STATUS.MERCHANT_REJECTED);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/order/merchant_accept
 * @tag Delivery
 * @summary Merchant accepts a delivery order and processes payment.
 * @description
 * Processes a delivery order from PENDING status.
 * Captures payment (if neccessary), updates order status, and emits relevant events.
 * Handles payment via CARD, WALLET, PLATFORM, or CASH, and moves the order through the correct state transitions.
 * In the case of a CARD or PLATFORM payment, the payment and state transitions are left up to the stripe webhook handler.
 * If preparation_time is provided, updates the order's pickup time.
 *
 * @operationId merchantAcceptOrder
 * @bodyDescription The request body must include 'order_id' to identify the order and optionally 'preparation_time' (ISO string or timestamp).
 * @bodyContent {
 *   "order_id": 123,
 *   "preparation_time": "2025-07-30T12:00:00.000Z"
 * } application/json
 * @bodyRequired
 * @response 200 - Order processed and moved to next state. Returns the updated DeliveryOrder object.
 * @responseContent {
 *   "order_id": 123,
 *   "user_id": 456,
 *   "business_id": 789,
 *   "details": { ... },
 *   "status": "MERCHANT_PREPARING",
 *   "payment": { ... },
 *   "items": [ ... ],
 *   "timeline": [ ... ],
 *   "created_at": "...",
 *   "updated_at": "..."
 * } 200.application/json
 * @responseExample 200.application/json {
 *   "order_id": 123,
 *   "user_id": 456,
 *   "business_id": 789,
 *   "details": { "total_price": 1000, "delivery_cost": 100, ... },
 *   "status": "MERCHANT_PREPARING",
 *   "payment": { "type": "CARD", "status": "IN_PAYMENT_PROCESSING", ... },
 *   "items": [ { "menu_item_id": 1, "quantity": 2, ... } ],
 *   "timeline": [ { "status": "MERCHANT_ACCEPTED", "timestamp": "..." } ],
 *   "created_at": "...",
 *   "updated_at": "..."
 * }
 * @response 400 - Preparation time must be set if not scheduled.
 * @response 500 - Error processing the order.
 * @prisma_model delivery_orders
 * @prisma_model businesses
 */
async function merchantAcceptOrder(req, res) {
	const { order_id, preparation_time } = req.body;
	try {
		let order = await DeliveryOrderDao.getOrder(order_id, { include: { business: true } });
		const user = order?.user;
		if (preparation_time) {
			order = await DeliveryOrderDao.updateOrderPickupTime(order_id, preparation_time);
			io.to('order_' + order.order_id).emit('order_pickup_time', order);
		} else if (!order.scheduled?.date && !order.scheduled?.time) {
			console.error('Preparation time must be set');
			return res.status(400).json(order_id);
		}
		order = await DeliveryOrderDao.getOrder(order_id, { include: { business: true } });
		console.info('got into merchantAcceptOrder', JSON.stringify(order.payment_intent_id));
		console.log(order.business.type);
		if (![BUSINESS_TYPE.MERCHANT, BUSINESS_TYPE.LOCAL].includes(order.business.type)) {
			const restaurant_stripe = await BusinessDao.getBusinessStripeByBusinessId(order.business_id);
			const { PLATFORM_CREDIT_CUT, PLATFORM_CUT, MERCHANT_CREDIT_CUT, MERCHANT_CUT } =
				await calculateDeliveryOrderPaymentCuts(order);

			if (order.payment.type === 'CARD' || order.payment.type === 'PLATFORM') {
				if (Math.round(order.details.total_price * 100) === order.details.credit_discount) {
					const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
						order.user_id,
						restaurant_stripe,
						MERCHANT_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
					const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
						order.user_id,
						'platform',
						PLATFORM_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
				} else {
					order = await DeliveryOrderDao.updateOrder(order.order_id, {
						payment: {
							...order.payment,
							status: 'IN_PAYMENT_PROCESSING',
						},
					});
					// Status update happens elsewhere for CARD payments
					await stripe.client.paymentIntents.capture(order.payment_intent_id, {
						metadata: {
							preparation_time: preparation_time,
						},
					});
					return res.status(200).json(order);
				}
			} else if (order.payment.type === 'WALLET') {
				const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					restaurant_stripe,
					MERCHANT_CUT + MERCHANT_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY
				);
				const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					'platform',
					PLATFORM_CUT + PLATFORM_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY
				);
			} else if (order.payment.type === 'CASH') {
				if (MERCHANT_CREDIT_CUT > 0) {
					const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
						order.user_id,
						restaurant_stripe,
						MERCHANT_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
				}
				if (PLATFORM_CREDIT_CUT > 0) {
					const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
						order.user_id,
						'platform',
						PLATFORM_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
				}
			} else {
				// TODO: reject
				throw new Error('Payment type not supported');
			}
			order = await DeliveryOrderDao.updateOrderStatus(
				order_id,
				DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL
			);
		}
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.MERCHANT_ACCEPTED);
		sendDeliveryOrderNotifications(user, null, order.user_id, null, order.status);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.MERCHANT_PREPARING);
		io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		await handlePaymentCleanup(order_id);
		let order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED);
		io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.FAIL);
		io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
		SocketStore.closeRoom(`order_${order.order_id}`);
		res.status(500).json(e);
	}
}

/**
 * Helper function to process order ready for pickup
 * @param {string} order_id - The order ID to process
 * @returns {Promise<Object>} The processed order
 */
async function processOrderReady(order_id) {
	let order = await DeliveryOrderDao.getOrder(order_id, { include: { business: true } });
	if (order.status !== DELIVERY_ORDER_STATUS.MERCHANT_PREPARING) {
		throw new Error(`Order ${order_id} is not in MERCHANT_PREPARING state.`);
	}
	const user = order?.user;
	console.info('got into processOrderReady', JSON.stringify(order.payment_intent_id));

	if ([BUSINESS_TYPE.MERCHANT, BUSINESS_TYPE.LOCAL].includes(order.business.type)) {
		const { items, grand_total, discount_total, delivery_cost, total_price, is_student } =
			await calculateAndVerifyPriceForOrderItems(order);
		order = await DeliveryOrderDao.updateOrder(order.order_id, {
			details: {
				...order.details,
				delivery_cost: delivery_cost,
				total_price: total_price,
				sub_total_price: grand_total,
				discount_savings: discount_total,
			},
		});
		console.log(
			// 	JSON.stringify(order.items, null, 2),
			// JSON.stringify(items, null, 2),
			{
				delivery_cost: delivery_cost,
				total_price: total_price,
				sub_total_price: grand_total,
				discount_savings: discount_total,
			}
		);
		order = await DeliveryOrderDao.getOrder(order.order_id, { include: { business: true } });
		const restaurant_stripe = order.business.stripe_account_id;
		const { PLATFORM_CREDIT_CUT, PLATFORM_CUT, MERCHANT_CREDIT_CUT, MERCHANT_CUT, DRIVER_CUT } =
			await calculateDeliveryOrderPaymentCuts(order);

		if (order.payment.type === 'CARD' || order.payment.type === 'PLATFORM') {
			if (Math.round(order.details.total_price * 100) === order.details.credit_discount) {
				const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					restaurant_stripe,
					MERCHANT_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY
				);
				const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					'platform',
					PLATFORM_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY
				);
			} else {
				order = await DeliveryOrderDao.updateOrder(order.order_id, {
					payment: {
						...order.payment,
						status: 'IN_PAYMENT_PROCESSING',
					},
				});
				const pi = await stripe.client.paymentIntents.retrieve(order.payment_intent_id);
				await stripe.client.paymentIntents.update(order.payment_intent_id, {
					metadata: {
						...pi.metadata,
						merchant_cut: MERCHANT_CUT,
					},
				});

				console.log('capturing PI', order.payment_intent_id, {
					amount_to_capture: PLATFORM_CUT + MERCHANT_CUT + DRIVER_CUT,
				});
				await stripe.client.paymentIntents.capture(order.payment_intent_id, {
					amount_to_capture: PLATFORM_CUT + MERCHANT_CUT + DRIVER_CUT,
				});
				// Status update happens elsewhere for CARD payments - return early for single order processing
				return order;
			}
		} else if (order.payment.type === 'WALLET') {
			const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
				order.user_id,
				restaurant_stripe,
				MERCHANT_CUT + MERCHANT_CREDIT_CUT,
				order.order_id,
				SERVICE_TYPE.DELIVERY
			);
			const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
				order.user_id,
				'platform',
				PLATFORM_CUT + PLATFORM_CREDIT_CUT,
				order.order_id,
				SERVICE_TYPE.DELIVERY
			);
		} else if (order.payment.type === 'CASH') {
			if (MERCHANT_CREDIT_CUT > 0) {
				const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					restaurant_stripe,
					MERCHANT_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY
				);
			}
			if (PLATFORM_CREDIT_CUT > 0) {
				const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					'platform',
					PLATFORM_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY
				);
			}
		} else {
			// TODO: reject
			throw new Error('Payment type not supported');
		}
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL);
	}

	order = await DeliveryOrderDao.updateOrderPickupTime(order_id, new Date().toISOString());
	io.to('order_' + order.order_id).emit('order_pickup_time', order);
	order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP);
	sendDeliveryOrderNotifications(user, null, order.user_id, null, order.status);
	io.to('order_' + order.order_id).emit('order_status_change__delivery', order);

	return order;
}

/**
 * Helper function to handle order processing failure
 * @param {string} order_id - The order ID that failed
 * @returns {Promise<Object>} The failed order
 */
async function handleOrderProcessingFailure(order_id) {
	await handlePaymentCleanup(order_id);
	let order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED);
	io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
	order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.FAIL);
	io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
	await handleStockSync(order);
	SocketStore.closeRoom(`order_${order.order_id}`);
	return order;
}

/**
 * POST /delivery/orders/order/merchant_ready
 * @tag Delivery
 * @summary Merchant confirms order is ready for pickup.
 * @description
 * If needed recalculates pricing and processes payment then updates the order
 * as ready for pickup and if needed, and emits relevant events.
 * Handles payment via CARD, WALLET, PLATFORM, or CASH, and moves the order through the correct state transitions.
 * In the case of a CARD or PLATFORM payment, the payment and state transitions are left up to the stripe webhook handler.
 *
 * @operationId merchantConfirmOrderReady
 * @bodyDescription The request body must include 'order_id' to identify the order.
 * @bodyContent {
 *   "order_id": 123
 * } application/json
 * @bodyRequired
 * @response 200 - Order marked as ready for pickup. Returns the updated DeliveryOrder object.
 * @responseContent {
 *   "order_id": 123,
 *   "user_id": 456,
 *   "business_id": 789,
 *   "details": { ... },
 *   "status": "MERCHANT_READY_FOR_PICKUP",
 *   "payment": { ... },
 *   "items": [ ... ],
 *   "timeline": [ ... ],
 *   "created_at": "...",
 *   "updated_at": "..."
 * } 200.application/json
 * @responseExample 200.application/json {
 *   "order_id": 123,
 *   "user_id": 456,
 *   "business_id": 789,
 *   "details": { "total_price": 1000, "delivery_cost": 100, ... },
 *   "status": "MERCHANT_READY_FOR_PICKUP",
 *   "payment": { "type": "CARD", "status": "IN_PAYMENT_PROCESSING", ... },
 *   "items": [ { "menu_item_id": 1, "quantity": 2, ... } ],
 *   "timeline": [ { "status": "MERCHANT_READY_FOR_PICKUP", "timestamp": "..." } ],
 *   "created_at": "...",
 *   "updated_at": "..."
 * }
 * @response 500 - Error processing the order.
 * @prisma_model delivery_orders
 * @prisma_model businesses
 */
async function merchantConfirmOrderReady(req, res) {
	const { order_id } = req.body;
	try {
		const order = await processOrderReady(order_id);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		try {
			await handleOrderProcessingFailure(order_id);
		} catch (cleanupError) {
			console.error('Error during cleanup:', cleanupError);
		}
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/orders/order/local_ready
 * @tag Delivery
 * @summary LOCAL business confirms multiple orders are ready for pickup.
 * @description
 * Sets all preparing orders for a specific business_local_location as ready for pickup.
 * Only works for LOCAL business type. Recalculates pricing and processes payments for all orders,
 * then updates them as ready for pickup and emits relevant events.
 * Handles payment via CARD, WALLET, PLATFORM, or CASH for each order.
 *
 * @operationId localConfirmMultipleOrdersReady
 * @bodyDescription The request body must include 'business_local_location_id' to identify which location's orders to process.
 * @bodyContent {
 *   "business_local_location_id": "uuid-string"
 * } application/json
 * @bodyRequired
 * @response 200 - Orders marked as ready for pickup. Returns summary of processed orders.
 * @responseContent {
 *   "success": true,
 *   "processed_orders": 5,
 *   "successful_orders": 4,
 *   "failed_orders": 1,
 *   "orders": [
 *     {
 *       "order_id": 123,
 *       "status": "success",
 *       "order": { ... }
 *     },
 *     {
 *       "order_id": 124,
 *       "status": "failed",
 *       "error": "Payment processing failed"
 *     }
 *   ]
 * } 200.application/json
 * @responseExample 200.application/json {
 *   "success": true,
 *   "processed_orders": 2,
 *   "successful_orders": 2,
 *   "failed_orders": 0,
 *   "orders": [
 *     {
 *       "order_id": 123,
 *       "status": "success",
 *       "order": {
 *         "order_id": 123,
 *         "user_id": 456,
 *         "business_id": 789,
 *         "status": "MERCHANT_READY_FOR_PICKUP"
 *       }
 *     },
 *     {
 *       "order_id": 124,
 *       "status": "success",
 *       "order": {
 *         "order_id": 124,
 *         "user_id": 457,
 *         "business_id": 789,
 *         "status": "MERCHANT_READY_FOR_PICKUP"
 *       }
 *     }
 *   ]
 * }
 * @response 400 - Invalid business_local_location_id or no preparing orders found.
 * @response 500 - Error processing the orders.
 * @prisma_model delivery_orders
 * @prisma_model business_local_locations
 * @prisma_model businesses
 */
async function localConfirmMultipleOrdersReady(req, res) {
	const { business_local_location_id } = req.body;
	if (!business_local_location_id) {
		return res.status(400).json({ error: 'business_local_location_id is required' });
	}

	try {
		const userId = req.user?.user_id;
		if (!userId) {
			return res.status(403).json({ error: 'Unauthorized' });
		}
		const user = await UserDao.getUserById(userId);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		if (user.business_users?.[0]?.business?.type !== BUSINESS_TYPE.LOCAL) {
			return res.status(400).json({ error: 'This endpoint is only for LOCAL business type' });
		}

		const businessLocalLocation = await prisma.business_local_locations.findUnique({
			where: { business_local_location_id },
			include: {
				business: true,
			},
		});
		if (!businessLocalLocation) {
			return res.status(400).json({ error: 'Invalid business_local_location_id' });
		}

		const preparingOrders = await DeliveryOrderDao.getOrdersByBusinessLocalLocation(
			business_local_location_id,
			DELIVERY_ORDER_STATUS.MERCHANT_PREPARING
		);
		if (!preparingOrders || preparingOrders.length === 0) {
			return res.status(400).json({
				error: 'No preparing orders found for this business_local_location_id',
				processed_orders: 0,
				successful_orders: 0,
				failed_orders: 0,
				orders: [],
			});
		}

		console.log(
			`Processing ${preparingOrders.length} orders for business_local_location_id: ${business_local_location_id}`
		);

		const results = {
			success: true,
			processed_orders: preparingOrders.length,
			successful_orders: 0,
			failed_orders: 0,
			orders: [],
		};

		for (const order of preparingOrders) {
			try {
				const processedOrder = await processOrderReady(order.order_id);
				results.successful_orders++;
				results.orders.push({
					order_id: order.order_id,
					status: 'success',
					order: processedOrder,
				});
			} catch (e) {
				console.error(`Failed to process order ${order.order_id}:`, e);
				results.failed_orders++;
				try {
					await handleOrderProcessingFailure(order.order_id);
					results.orders.push({
						order_id: order.order_id,
						status: 'failed',
						error: e.message || 'Order processing failed',
					});
				} catch (cleanupError) {
					console.error(`Cleanup failed for order ${order.order_id}:`, cleanupError);
					results.orders.push({
						order_id: order.order_id,
						status: 'failed',
						error: `Order processing and cleanup failed: ${e.message}`,
					});
				}
			}
		}
		results.success = results.failed_orders === 0;
		console.log(`Completed processing for business_local_location_id: ${business_local_location_id}`, {
			total: results.processed_orders,
			successful: results.successful_orders,
			failed: results.failed_orders,
		});
		res.status(200).json(results);
	} catch (e) {
		console.error('Error in localConfirmMultipleOrdersReady:', e);
		res.status(500).json({
			error: 'Failed to process orders',
			message: e.message,
			success: false,
			processed_orders: 0,
			successful_orders: 0,
			failed_orders: 0,
			orders: [],
		});
	}
}

/**
 * Calculates the stock change for a menu item based on the order and business context.
 * And returns the object for stock change creation.
 *
 * @param {Object} item - The menu item object.
 * @param {number} item.menu_item_id - The unique identifier for the menu item.
 * @param {number} item.quantity - The quantity of the item ordered (in grams if weighted).
 * @param {boolean} item.is_weighted - Indicates if the item is sold by weight.
 * @param {Object} order - The order object.
 * @param {number} order.order_id - The unique identifier for the order.
 * @returns {Object} An object representing the stock change for the menu item.
 * @returns {number} return.quantity - The negative quantity to subtract from stock.
 * @returns {string} return.reason - The reason for the stock change ("ORDER").
 * @returns {Object} return.order - The order connection object.
 * @returns {Object} return.menu_item - The menu item connection object.
 */
function getMenuItemStockChange(item, order) {
	let quantity;
	if (item.is_weighted) {
		const roundedKilos = item.quantity / 1000;
		quantity = -roundedKilos;
	} else {
		quantity = -item.quantity;
	}
	return {
		quantity,
		reason: 'ORDER',
		order: {
			connect: {
				order_id: order.order_id,
			},
		},
		menu_item: {
			connect: {
				menu_item_id: item.menu_item_id,
			},
		},
	};
}

/**
 * Synchronizes stock movements for a given order by:
 * 1. Deleting all existing stock movement records linked to the order.
 * 2. Creating new stock movement records based on the current order items.
 *
 * @async
 * @function handleStockSync
 * @param {Object} order - The order object containing order details and menu items.
 * @param {Object} business - The business object related to the order.
 * @returns {Promise<boolean>} Returns true if synchronization succeeds, false otherwise.
 */
export async function handleStockSync(order) {
	try {
		// 1. Delete all existing stock movements linked to the order
		console.info('Removing stock changes for order:', order.order_id);
		await removeOrderStockChange(order);
		if (order.status !== DELIVERY_ORDER_STATUS.FAIL) {
			const stockUpdates = order.items
				.filter((i) => !i.removed)
				.map((item) => getMenuItemStockChange(item, order));
			console.info('Creating stock changes for order:', order.order_id, 'with updates:', stockUpdates);
			// 2. Create new stock movements based on the current order items
			for (const update of stockUpdates) {
				await prisma.menu_item_stock_change.create({ data: update });
			}
		}
		return true;
	} catch (error) {
		console.error('Error in handleStockRemove:', error);
		return false;
	}
}
async function removeOrderStockChange(order) {
	try {
		await prisma.menu_item_stock_change.deleteMany({
			where: {
				order_id: order.order_id,
			},
		});
	} catch (error) {
		console.error('Error in removeOrderStockChange:', error);
	}
}
/**
 * POST /delivery/orders/order/pickup_time
 * @tag Delivery
 * @summary Update a delivery order's pickup time.
 * @description Updates pickup time of the delivery order
 * @operationId updateOrderPickupTime
 * @bodyDescription Request body must include 'order_id' to identify the order and 'status' to specify the new status.
 * @bodyContent {updateOrderPickupTimeRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderPickupTime(req, res) {
	const { order_id, pickup_time } = req.body;
	try {
		let order = await DeliveryOrderDao.getOrder(order_id);
		if (req.user?.user_id) {
			const businessUser = await BusinessUsersDao.getBusinessUserByUserId(req.user.user_id);
			if (businessUser?.business_id !== order?.business_id) {
				if (!order) {
					return res.status(400).json({ error: 'Order not found' });
				} else if (
					order?.details?.ready_for_pickup_at &&
					new Date(order.details.ready_for_pickup_at) > new Date(pickup_time)
				) {
					return res
						.status(400)
						.json({ error: 'Pickup time cannot be earlier than the ready for pickup time' });
				}
			}
		} else {
			return res.status(403).json({ error: 'Unauthorized' });
		}
		order = await DeliveryOrderDao.updateOrderPickupTime(order_id, pickup_time);
		io.to('order_' + order.order_id).emit('order_pickup_time', order);
		const totalDelay = order.timeline.reduce((sum, entry) => {
			if (entry.status === DELIVERY_ORDER_STATUS.MERCHANT_DELAYED) {
				return sum + (entry.delay || 0);
			}
			return sum;
		}, 0);
		let d;
		if (order.driver_id) {
			d = await DriverDao.getDriverById(order.driver_id);
		} else if (order.delivery_driver_id) {
			d = await DeliveryDriverDao.getDeliveryDriverById(order.delivery_driver_id);
		}
		sendDeliveryOrderNotifications(null, d?.user, null, d?.user_id, DELIVERY_ORDER_STATUS.MERCHANT_DELAYED);
		if (totalDelay > 120) {
			const exising_penalties = await ScoringPointsDao.getScoringPointsByBusinessId(order.business_id);
			const already_penalized_order = exising_penalties?.find(
				(sp) => sp.delivery_order_id === order.order_id && sp.reason === SCORING_POINTS_REASON.LARGE_DELAY
			);
			if (!already_penalized_order) {
				//Assuming only merchant makes this api call so we can user req.user.user_id
				await ScoringPointsDao.createScoringPoints(
					order.business_id,
					req.user.user_id,
					order.order_id,
					null,
					1,
					true,
					SCORING_POINTS_REASON.LARGE_DELAY
				);
			}
		}
		res.status(200).json(order);
	} catch (e) {
		console.log('Error updating order pickup time', e.message);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/order/delivery_time
 * @tag Delivery
 * @summary Update a delivery order's delivery time.
 * @description Updates delivery time of the delivery order
 * @operationId updateOrderDeliveryTime
 * @bodyDescription Request body must include 'order_id' and 'delivery_time' to set the delivery time.
 * @bodyContent {updateOrderDeliveryTimeRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderDeliveryTime(req, res) {
	const { order_id, delivery_time } = req.body;
	try {
		let order = await DeliveryOrderDao.updateOrderDeliveryTime(order_id, delivery_time);
		io.to('order_' + order.order_id).emit('order_delivery_time', order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/order/timeline
 * @tag Taxi
 * @summary Update a delivery order's timeline.
 * @description Updates the timeline of a taxi order.
 * @operationId updateDeliveryOrderTimeline
 * @bodyDescription Request body must include 'order_id', and the new 'timeline' details.
 * @bodyContent {updateDeliveryOrderTimelineRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateDeliveryOrderTimeline(req, res) {
	const { order_id, timeline } = req.body;
	try {
		let order = await DeliveryOrderDao.updateDeliveryOrderTimeline(order_id, timeline);
		io.to('order_' + order.order_id).emit('order_timeline_change_delivery', order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/order/add_to_timeline
 * @tag Delivery
 * @summary Update a delivery order's timeline by appending an entry.
 * @description Appends a new timeline entry with the given status and optional extra data in entry_data.
 * @operationId updateDeliveryOrderTimeline
 * @bodyDescription Request body must include 'order_id', and the new entry's status.
 * @bodyContent {updateDeliveryOrderTimelineRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function addToDeliveryOrderTimeline(req, res) {
	const { order_id, status, entry_data } = req.body;
	try {
		let order = await DeliveryOrderDao.addTimelineEntry(order_id, status, entry_data || {});
		io.to('order_' + order.order_id).emit('order_timeline_change_delivery', order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/order/update/items
 * @tag Taxi
 * @summary Update delivery order items.
 * @description Updates a delivery order.
 * @operationId updateDeliveryOrderItems
 * @bodyDescription Request body must include 'order_id'
 * @bodyContent {updateDeliveryOrderItemsRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateDeliveryOrderItems(req, res) {
	const { order_id, items } = req.body;
	try {
		let order = await DeliveryOrderDao.updateOrderItems(order_id, items);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/today
 * @tag Delivery
 * @summary Get all delivery orders for today and earnings.
 * @description This fetches all delivery orders for today and earnings.
 * @operationId getDeliveryOrdersToday
 * @response 200 - Successful operation. Returns a list of all delivery orders today and earnings in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getDeliveryOrdersToday(req, res) {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				created_at: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
				is_daily_meal: req.query?.dailyMeals === 'true' ? true : false,
			},
		});
		return res
			.status(200)
			.json({ orders: orders?.length || 0, amount: todaysEarnings(orders, DELIVERY_ORDER_STATUS.SUCCESS) });
	} catch (e) {
		console.error('DeliveryOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/order/dispatcher_cancel
 * @tag Delivery
 * @summary Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent
 * @description Cancel and if necessary refund an order
 * @operationId dispatcherCancel
 * @response 200 - Successful operation. Returns the updated Order.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function dispatcherCancel(req, res) {
	const { order_id } = req.body;
	try {
		const old_order = await DeliveryOrderDao.getOrder(order_id, { include: { user: true } });
		if (
			[
				DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
				DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
				DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED,
				DELIVERY_ORDER_STATUS.CUSTOMER_PICKED_UP,
				DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
				...DELIVERY_ORDER_END_STATES,
			].includes(old_order.status)
		) {
			throw new Error('This order is not in a cancelable state.');
		}
		let new_order = await DeliveryOrderDao.updateOrderStatus(
			old_order.order_id,
			DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED
		);
		let driver;
		if (old_order.driver_id) {
			driver = await DriverDao.getDriverById(old_order.driver_id);
			await prisma.drivers.update({
				where: {
					driver_id: driver.driver_id,
				},
				data: {
					on_order: false,
				},
			});
		} else if (old_order.delivery_driver_id) {
			driver = await DeliveryDriverDao.getDeliveryDriverById(old_order.delivery_driver_id);
			await prisma.delivery_drivers.update({
				where: {
					driver_id: driver.delivery_driver_id,
				},
				data: {
					on_order: false,
				},
			});
		}
		revokeDeliveryOrderFromDrivers(new_order.order_id);
		sendDeliveryOrderNotifications(
			old_order.user,
			driver?.user,
			old_order.user_id,
			driver?.user_id,
			new_order.status
		);
		//TODO: handle extras for socket on FE if needed.
		io.to('order_' + new_order.order_id).emit('order_status_change__delivery', new_order);
		new_order = await DeliveryOrderDao.updateOrderStatus(old_order.order_id, DELIVERY_ORDER_STATUS.FAIL);
		io.to('order_' + new_order.order_id).emit('order_status_change__delivery', new_order);
		await handleStockSync(new_order);
		await handlePaymentRefund(new_order);
		//TODO: handle on FE if needed.
		io.to('order_' + new_order.order_id).emit('order_canceled', new_order);
		SocketStore.closeRoom(`order_${new_order.order_id}`);
		res.status(200).json(new_order);
	} catch (e) {
		console.error('Error canceling order', e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/order/dispatcher_revoke
 * @tag Delivery
 * @summary Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent
 * @description Cancel and if necessary refund an order
 * @operationId dispatcherCancel
 * @response 200 - Successful operation. Returns the updated Order.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function dispatcherRevoke(req, res) {
	const { order_id } = req.body;
	const dispatcher_user_id = req.user.user_id;
	try {
		const old_order = await DeliveryOrderDao.getOrder(order_id, {
			include: { driver: true, delivery_driver: true },
		});
		let updated_order = null;
		if (
			[DELIVERY_ORDER_STATUS.MERCHANT_PREPARING, DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP].includes(
				old_order.status
			)
		) {
			await DeliveryOrderDao.removeDriverFromOrder(old_order.order_id);
			await DeliveryOrderDao.addTimelineEntry(old_order.order_id, DELIVERY_ORDER_STATUS.DISPATCHER_REVOKED, {
				dispatcher: dispatcher_user_id,
			});
			updated_order = await DeliveryOrderDao.updateOrderStatus(old_order.order_id, old_order.status);
		} else if (
			[DELIVERY_ORDER_STATUS.DELIVERY_PICKED_UP, DELIVERY_ORDER_STATUS.DELIVERY_IN_DELIVERY].includes(
				old_order.status
			)
		) {
			let new_location = null;
			if (old_order.driver?.location) {
				new_location = old_order.driver.location;
			} else if (old_order.delivery_driver?.location) {
				new_location = old_order.delivery_driver.location;
			}
			if (!new_location || !(new_location?.coordinates?.latitude && new_location?.coordinates?.longitude)) {
				throw new Error('The current driver does not have a well defined location.');
			}
			const new_address = await gApi.addressFromCoordinates(
				new_location?.coordinates?.latitude,
				new_location?.coordinates?.longitude
			);
			new_location.address = `Previous Driver Location ${new_address ? '(' + new_address + ')' : '(use navigation)'}`;
			await DeliveryOrderDao.removeDriverFromOrder(old_order.order_id);
			await DeliveryOrderDao.updateOrder(old_order.order_id, { pickup_location: new_location });
			await DeliveryOrderDao.addTimelineEntry(old_order.order_id, DELIVERY_ORDER_STATUS.DISPATCHER_REVOKED, {
				dispatcher: dispatcher_user_id,
			});
			updated_order = await DeliveryOrderDao.updateOrderStatus(
				old_order.order_id,
				DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
			);
		} else {
			throw new Error('This order is not in a reassignable state.');
		}
		if (old_order.driver) {
			if (UserSockets.get(old_order.driver.user_id)) {
				UserSockets.get(old_order.driver.user_id).emit('order_revoked__delivery', order_id);
			}
			SocketStore.removeUserFromRoom(old_order.driver.user_id, `order_${old_order.order_id}`);
		}
		if (old_order.delivery_driver) {
			if (UserSockets.get(old_order.delivery_driver.user_id)) {
				UserSockets.get(old_order.delivery_driver.user_id).emit('order_revoked__delivery', order_id);
			}
			SocketStore.removeUserFromRoom(old_order.delivery_driver.user_id, `order_${old_order.order_id}`);
		}
		//TODO: handle extras for socket on FE if needed.
		io.to('order_' + updated_order.order_id).emit('order_status_change__delivery', updated_order);
		res.status(200).json(updated_order);
	} catch (e) {
		console.error('Error canceling order', e);
		res.status(500).json(e);
	}
}

export { getDeliveryOrders };
export { getDeliveryOrdersToday };
export { getActiveDeliveryOrders };
export { getOrder };
export { createOrder };
export { merchantAcceptOrder };
export { rejectOrder };
export { merchantConfirmOrderReady };
export { acceptOrderDelivery };
export { cancelOrderDelivery };
export { completeOrder };
export { updateOrderStatus };
export { dispatcherCancel };
export { dispatcherRevoke };
export { getDeliveryOrdersByDriverId };
export { getCompletedDeliveryOrdersByDriverId };
export { updateDeliveryOrderTimeline };
export { addToDeliveryOrderTimeline };
export { getUserByDeliveryOrderId };
export { updateOrderPickupTime };
export { getDeliveryOrdersByBusinessId };
export { updateOrderDeliveryTime };
export { getActiveDeliveryOrdersByUserId };
export { getCompletedDeliveryOrdersByUserId };
export { getActiveDeliveryOrdersByDriverId };
export { updateDeliveryOrderItems };
export { startDailyMeals };
export { getActiveDeliveryOrdersByBusinessId };
export { getCompletedDeliveryOrdersByBusinessId };
export { generateOrder };
export { localConfirmMultipleOrdersReady };
export default {
	getDeliveryOrders,
	getDeliveryOrdersToday,
	getActiveDeliveryOrders,
	getOrder,
	createOrder,
	merchantAcceptOrder,
	rejectOrder,
	merchantConfirmOrderReady,
	acceptOrderDelivery,
	cancelOrderDelivery,
	completeOrder,
	updateOrderStatus,
	dispatcherCancel,
	dispatcherRevoke,
	getDeliveryOrdersByDriverId,
	getCompletedDeliveryOrdersByDriverId,
	updateDeliveryOrderTimeline,
	addToDeliveryOrderTimeline,
	getUserByDeliveryOrderId,
	updateOrderPickupTime,
	getDeliveryOrdersByBusinessId,
	updateOrderDeliveryTime,
	getActiveDeliveryOrdersByUserId,
	getCompletedDeliveryOrdersByUserId,
	getActiveDeliveryOrdersByDriverId,
	updateDeliveryOrderItems,
	startDailyMeals,
	getActiveDeliveryOrdersByBusinessId,
	getCompletedDeliveryOrdersByBusinessId,
	localConfirmMultipleOrdersReady,
	generateOrder,
};
