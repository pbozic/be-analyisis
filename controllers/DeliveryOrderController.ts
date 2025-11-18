import moment from 'moment';
import {
	TRANSFER_GROUP_TYPE,
	SPLIT_DESTINATION_TYPE,
	SPLIT_STATUS,
	DAILY_MEAL_INSTANCE_STATUS,
	SUBSCRIPTION_TYPE,
	MODULE,
} from '@prisma/client';
import {
	PROMO_TYPE,
	ANALYTICS_TYPE,
	DELIVERY_ORDER_STATUS,
	ORDER_TYPE,
	CASHBACK_SOURCE,
	SCORING_POINTS_REASON,
} from '@prisma/client';
import { Response, Request } from 'express';
import { Socket } from 'socket.io';

import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import BusinessDao from '../dao/Business.js';
import gApi from '../lib/gApis.js';
import socket from '../socket.js';
import { logPromoAnalytics } from '../lib/analytics.ts';
import stripe from '../lib/stripe.js';
import {
	DAILY_MEAL_DELIVERY_COST_CENTS,
	CREDITS,
	DRIVE_FEE,
	DELIVERY_ORDER_END_STATES,
	SERVICE_TYPE,
	RESTAURANT_SHARE_PERC,
} from '../lib/constants.js';
import {
	revokeDeliveryOrderFromDrivers,
	calculateDeliveryOrderPaymentCuts,
	handlePaymentCleanup,
	handlePaymentRefund,
	generateOrder,
	sendPdfDeliveryOrder,
	processOrderReady,
	handleOrderProcessingFailure,
	handleStockSync,
} from '../lib/deliveryHelpers.js';
import { createAndProcessTransferGroupSplits } from '../lib/paymentHelpers.ts';
import { todaysEarnings } from '../lib/helpersLib.js';
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
import { ValidatedRequest, AuthenticatedRequest } from '../types/validatedRequest.js';
import type {
	CreateDeliveryOrderInput,
	AcceptDeliveryOrderInput,
	CompleteDeliveryOrderInput,
	CancelDeliveryOrderInput,
	RejectDeliveryOrderInput,
	MerchantAcceptOrderInput,
	MerchantConfirmOrderReadyInput,
	LocalConfirmMultipleOrdersReadyInput,
	UpdateOrderPickupTimeInput,
	UpdateOrderDeliveryTimeInput,
	UpdateDeliveryOrderTimelineInput,
	UpdateDeliveryOrderItemsInput,
	DispatcherCancelOrderInput,
	DispatcherRevokeOrderInput,
	SetDeliveryImageInput,
	StartOrderInput,
	UpdateOrderStatusInput,
	AddToDeliveryOrderTimelineInput,
} from '../schemas/dto/DeliveryOrders/deliveryOrder.validators.js';
import { PromoAnalyticsBase } from '../schemas/dto/PromoAnalytics/promo-analytics.dto.ts';
import { DeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/deliveryOrder.dto.ts';
const { UserSockets, io, SocketStore } = socket;
/**
 * GET /delivery/orders/:daily_meals
 * @tag Delivery
 * @summary Get all delivery orders.
 * @description This fetches all delivery orders.
 * @operationId getAllDeliveryOrders
 * @response 200 - Successful operation. Returns a list of all orders in the response body.
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getDeliveryOrders(req: ValidatedRequest<never, { daily_meals: string }>, res: Response): Promise<void> {
	const { daily_meals } = req.params;
	const where = {
		where: {
			is_daily_meal: !!daily_meals,
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
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getActiveDeliveryOrders(req: Request, res: Response): Promise<void> {
	try {
		const activeOrders = await DeliveryOrderDao.getActiveDeliveryOrders();
		res.status(200).json(activeOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/order/:order_id
 * @tag Delivery
 * @summary Get order details.
 * @description This fetches the order details using the given order id.
 * @operationId getOrder
 * @pathParam {integer} orderId - The ID of the delivery order to retrieve
 * @response 200 - Successful operation. Returns order details in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getOrder(req: ValidatedRequest<never, { order_id: string }>, res: Response): Promise<void> {
	try {
		let order = await DeliveryOrderDao.getOrder(req.params.order_id);
		res.status(200).json(order);
	} catch (e) {
		console.error(e);
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
 * @responseContent {UserBase} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model users
 * @prisma_model delivery_orders
 */
async function getUserByDeliveryOrderId(
	req: ValidatedRequest<never, { order_id: string }>,
	res: Response
): Promise<void> {
	const { order_id } = req.params;
	try {
		const user = await DeliveryOrderDao.getUserByDeliveryOrderId(order_id);
		if (user) {
			res.json(user);
		} else {
			res.status(404).send('User not found for this order');
		}
	} catch (error) {
		console.error(error);
		res.status(500).send('Failed to fetch user data');
	}
}

/**
 * POST /delivery/orders/order
 * @tag Delivery
 * @summary Create a new delivery order.
 * @description This creates a new delivery order with the provided details from the request body. Returns the created order if successful.
 * @operationId createOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {CreateDeliveryOrderRequest} application/json
 * @bodyRequired
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_WORDS] - Optional promo words for analytics
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_SECTION] - Optional promo section ID for analytics
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_AD] - Optional promo ad ID for analytics
 * @response 200 - Successful operation. Returns the newly created order in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 401 - Unauthorized. Returns error message "Unauthorized" if user is not authenticated.
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 * @prisma_model users
 * @prisma_model promo_analytics
 */
async function createOrder(
	req: ValidatedRequest<
		CreateDeliveryOrderInput,
		never,
		{
			ANALYTICS_PARAM_PROMO_WORDS?: string[];
			ANALYTICS_PARAM_PROMO_SECTION?: string;
			ANALYTICS_PARAM_PROMO_AD?: string;
		}
	>,
	res: Response
): Promise<void> {
	const { orderBody, return_url } = req.body;
	const { ANALYTICS_PARAM_PROMO_WORDS, ANALYTICS_PARAM_PROMO_SECTION, ANALYTICS_PARAM_PROMO_AD } = req.query;
	try {
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ message: 'Unauthorized' });
			return;
		}
		const { order, payment_intent } = await generateOrder(orderBody, user_id, return_url);
		if (order && (ANALYTICS_PARAM_PROMO_AD || ANALYTICS_PARAM_PROMO_SECTION || ANALYTICS_PARAM_PROMO_WORDS)) {
			logPromoAnalytics({
				business_id: order.business_id as string,
				user_id,
				order_id: order.order_id,
				analytics_type: ANALYTICS_TYPE.ORDER_CREATE,
				promo_type: ANALYTICS_PARAM_PROMO_AD
					? PROMO_TYPE.AD
					: ANALYTICS_PARAM_PROMO_SECTION
						? PROMO_TYPE.SECTION
						: PROMO_TYPE.WORD,
				promo_ads_id: ANALYTICS_PARAM_PROMO_AD,
				promo_sections_id: ANALYTICS_PARAM_PROMO_SECTION,
				wordIds: ANALYTICS_PARAM_PROMO_WORDS,
			})
				.then((res) => console.log('Promo analytics ORDER CREATE success', res))
				.catch((err) => console.warn('Promo analytics ORDER CREATE failed', err));
		}
		res.status(200).json({
			...order,
			payment_intent,
		});
	} catch (e: unknown) {
		console.error(e);
		res.status(500).json({ message: (e as Error).message });
	}
}

/**
 * POST /delivery/orders/daily_meals
 * @tag Delivery
 * @summary Create daily meals.
 * @description This creates the daily meals for the subscribed users.
 * @operationId startDailyMeals
 * @response 200 - Successful operation. Returns updated delivery driver.
 * @responseContent {DeliveryDriverDetail} 200.application/json
 * @response 400 - Bad Request. Returns error message for various failure scenarios.
 * @response 401 - Unauthorized. Returns error message "Unauthorized user." if user is not authenticated.
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 * @prisma_model delivery_drivers
 * @prisma_model businesses
 */
async function startDailyMeals(req: AuthenticatedRequest, res: Response): Promise<void> {
	const user_id = req.user?.user_id;
	if (!user_id) {
		res.status(401).json({ message: 'Unauthorized user.' });
		return;
	}
	const userSocket = UserSockets.get(user_id);
	if (!userSocket) {
		console.info('User is not connected to the socket');
		res.status(400).json({ message: 'User is not connected to the socket.' });
		return;
	}
	try {
		const deliveryDriver = await DriverDao.getDriverByUserId(user_id);
		if (!deliveryDriver) {
			res.status(400).json({ message: 'Delivery driver not found.' });
			return;
		}
		if (!deliveryDriver?.location?.coordinates) {
			res.status(400).json({ message: 'Delivery driver location not set.' });
			return;
		}
		const dailyMealOrders = await DeliveryOrderDao.getOrders({
			where: {
				is_daily_meal: true,
				driver_id: deliveryDriver.driver_id,
				status: DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP,
				created_at: { gte: new Date(new Date().setUTCHours(0, 0, 0, 0)) },
			},
		});
		if (!dailyMealOrders || dailyMealOrders.length === 0) {
			res.status(204).json({ message: 'No daily meal orders found.' });
			return;
		}
		// TODO: Fix this now that driver can have multiple daily meal businesses
		// const convertAddressToLocation = (address) => {
		// 	return {
		// 		address: address.address,
		// 		coordinates: {
		// 			latitude: address.latitude,
		// 			longitude: address.longitude,
		// 		},
		// 	};
		// };
		// const getRouteDuration = async (locationA, locationB, departure_time) => {
		// 	try {
		// 		let { result } = await gApi.distanceBetweenTwoPoints(
		// 			locationA.coordinates,
		// 			locationB.coordinates,
		// 			'driving',
		// 			departure_time,
		// 			'best_guess'
		// 		);
		// 		return {
		// 			duration: result.rows?.[0]?.elements?.[0]?.duration.value,
		// 			distance: result.rows?.[0]?.elements?.[0]?.distance.value,
		// 		};
		// 	} catch (error) {
		// 		console.error('Error calculating route duration:', error);
		// 		return res.status(500).json({ message: 'Error calculating route duration.' });
		// 	}
		// };
		// const business = await BusinessDao.getBusinessById(deliveryDriver.daily_meal_business_id);
		// const providerLocation = convertAddressToLocation(business.daily_meals_module.delivery_address);
		// let sortedOrders = [];
		// if (business.daily_users_sorting_type === 'MANUAL') {
		// 	// Manual sorting based on provider.daily_users_sorted
		// 	//FIXME: business.daily_users_sorted deprecated?
		// 	if (!Array.isArray(business.daily_users_sorted)) {
		// 		return res.status(400).json({ message: 'Manual sort order missing or invalid.' });
		// 	}

		// 	// Step 1: Map user_id → index
		// 	const sortIndexMap = new Map(business.daily_users_sorted.map((user_id, index) => [user_id, index]));

		// 	// Step 2: Sort with fallback for unknown users
		// 	sortedOrders = [...dailyMealOrders].sort((a, b) => {
		// 		const indexA = sortIndexMap.has(a.user_id) ? sortIndexMap.get(a.user_id) : Infinity;
		// 		const indexB = sortIndexMap.has(b.user_id) ? sortIndexMap.get(b.user_id) : Infinity;
		// 		return indexA - indexB;
		// 	});

		// 	console.info('sortedUserAddresses MANUAL', sortedOrders);
		// 	console.info('sortedUserAddresses MANUAL', sortedOrders[0].address);
		// } else {
		// 	// Automatic sorting by nearest neighbor
		// 	sortedOrders = sortObjectsByNearestNeighbor([
		// 		{ address: business.address },
		// 		...dailyMealOrders.map((order) => ({ ...order, address: order.delivery_location })),
		// 	]).slice(1);
		// 	console.info('sortedUserAddresses AUTOMATIC', sortedOrders);
		// 	console.info('sortedUserAddresses AUTOMATIC', sortedOrders[0].address);
		// }

		// const orders = [];
		// const now = new Date();
		// const start_time = new Date(now.setHours(10, 45, 0, 0));
		// console.log('Start time for daily meals:', start_time.toISOString());
		// let cumulativeTime =
		// 	(await getRouteDuration(deliveryDriver.location, providerLocation, start_time)?.duration) || 0; // Track the total elapsed time
		// let scheduledMealsRoute = [providerLocation];

		// for (const order of sortedOrders) {
		// 	const deliveryLocation = order.delivery_location;
		// 	const route = await getRouteDuration(
		// 		scheduledMealsRoute[scheduledMealsRoute.length - 1],
		// 		deliveryLocation,
		// 		new Date(start_time.getTime() + cumulativeTime * 1000)
		// 	);
		// 	const durationValue = route?.duration || 0;
		// 	const distanceValue = route?.distance || 0;

		// 	// Calculate expected delivery time based on cumulative time
		// 	const customerExpectedDeliveryAt = new Date(
		// 		start_time.getTime() + cumulativeTime * 1000 + durationValue * 1000 + 5 * 60 * 1000
		// 	);
		// 	cumulativeTime += durationValue;
		// 	const readyForPickupAt = start_time.toISOString();
		// 	const orderData = {
		// 		details: {
		// 			...order.details,
		// 			ready_for_pickup_at: readyForPickupAt,
		// 			customer_expected_delivery_at: customerExpectedDeliveryAt.toISOString(),
		// 			daily_meal_delivery_order: scheduledMealsRoute.length - 1,
		// 			duration: cumulativeTime,
		// 			distance: distanceValue / 1000,
		// 		},
		// 	};
		// 	const updatedOrder = await DeliveryOrderDao.updateOrder(order.order_id, orderData);
		// 	if (updatedOrder) orders.push(updatedOrder);
		// 	await DeliveryOrderDao.createOrderSent(updatedOrder.order_id, deliveryDriver);
		// 	SocketStore.addUserToRoom(updatedOrder.user_id, `order_${updatedOrder.order_id}`);
		// 	SocketStore.addUserToRoom(deliveryDriver.user_id, `order_${updatedOrder.order_id}`);
		// 	scheduledMealsRoute.push(deliveryLocation);
		// }
		// scheduledMealsRoute.push(providerLocation);
		// const updatedDriver = await DriverDao.updateDriver(deliveryDriver?.driver_id, {
		// 	scheduled_meals_route: scheduledMealsRoute,
		// 	delivery_timeline: [],
		// 	on_daily_meals: true,
		// });
		// userSocket.emit('daily_meals', {
		// 	orders: orders,
		// 	scheduled_meals_route: scheduledMealsRoute,
		// });
		// res.status(200).json(updatedDriver);
		res.status(200).json({ message: 'Daily meals processing is not yet implemented.' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Something went wrong with creating daily meals...' });
	}
}
// /**
//  * POST /delivery/orders/order/accept
//  * @tag Delivery
//  * @summary Accept a delivery order.
//  * @description Accepts delivery order with the provided details from the request body. Returns the accepted order if successful.
//  * @operationId acceptOrder
//  * @bodyDescription Request body must include necessary order details.
//  * @bodyContent {AcceptDeliveryOrderRequest} application/json
//  * @bodyRequired
//  * @response 200 - Successful operation. Returns the accepted order in the response body.
//  * @responseContent {DeliveryOrderDetail} 200.application/json
//  * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
//  * @prisma_model delivery_orders
//  */
// async function acceptOrderDeliveryOld(req: ValidatedRequest<AcceptDeliveryOrderInput>, res: Response) {
// 	//console.log("accept order user_id", req.body.user?.user_id);
// 	const { order_id, user } = req.body;
// 	const deliverer_id = user?.delivery_driver?.delivery_driver_id || user?.driver?.driver_id;
// 	try {
// 		let order = await DeliveryOrderDao.getOrder(order_id, {
// 			include: {
// 				delivery_driver: true,
// 				driver: true,
// 			},
// 		});
// 		let deliverer = user?.delivery_driver?.delivery_driver_id
// 			? await DeliveryDriverDao.getDeliveryDriverById(deliverer_id)
// 			: await DriverDao.getDriverById(deliverer_id);
// 		if (!deliverer.online) {
// 			return res.status(400).json({ error: `You are offline!.`, errorType: 'ERR_DRIVER_OFFLINE' });
// 		} else if (
// 			//TODO: handle dispatcher canceled.
// 			[].includes(order.status)
// 		) {
// 			return res
// 				.status(400)
// 				.json({ error: `Order has been canceled: ${order.status}.`, errorType: 'ERR_ORDER_ALREADY_CANCELED' });
// 		} else if (
// 			![DELIVERY_ORDER_STATUS.MERCHANT_PREPARING, DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP].includes(
// 				order.status
// 			)
// 		) {
// 			return res
// 				.status(400)
// 				.json({ error: 'Order cannot be accepted in this state.', errorType: 'ERR_ORDER_UNACCEPTABLE' });
// 		} else if (
// 			(order.driver?.driver_id && order.driver?.driver_id !== deliverer_id) ||
// 			(order.delivery_driver?.delivery_driver_id && order.delivery_driver?.delivery_driver_id !== deliverer_id)
// 		) {
// 			return res
// 				.status(400)
// 				.json({ error: 'Order is already accepted.', errorType: 'ERR_ORDER_ALREADY_ACCEPTED' });
// 		}
// 		const vehicle = deliverer.current_vehicle;
// 		order = await DeliveryOrderDao.acceptOrderDelivery(order, deliverer_id, vehicle?.vehicle_id);
// 		order = await DeliveryOrderDao.getOrder(order.order_id, {
// 			include: {
// 				delivery_driver: true,
// 				driver: true,
// 			},
// 		});
// 		let driver;
// 		if (order.delivery_driver?.delivery_driver_id) {
// 			driver = await DeliveryDriverDao.getDeliveryDriverById(deliverer_id, {
// 				vehicles: true,
// 			});
// 			driver.vehicle = vehicle;
// 			order.driver = driver;
// 		}
// 		/*let { result } = await gApi.distanceBetweenTwoPoints(order.pickup_location.coordinates, order.delivery_location.coordinates, "driving", new Date());
// 		order.details.distance = result.rows[0].elements[0].distance.text;
// 		order.details.duration = result.rows[0].elements[0].duration.text;
// 		if (!order?.is_daily_meal) {
// 			order.details.customer_expected_delivery_at = new Date(new Date(order.details.ready_for_pickup_at).getTime() + result.rows[0].elements[0].duration.value * 1000 + 3600000);
// 			console.log(order.details.customer_expected_delivery_at, "expected delivery ...");
// 		}
// 		order = await DeliveryOrderDao.updateOrder(order.order_id, {
// 			details: order.details
// 		});*/
// 		console.log('order accepted', order);
// 		SocketStore.addUserToRoom(deliverer.user_id, `order_${order.order_id}`);
// 		io.to('order_' + order.order_id).emit('order_accepted__delivery', order);
// 		io.emit('driver_unavailable', deliverer_id);
// 		await revokeDeliveryOrderFromDrivers(order.order_id);
// 		res.status(200).json(order);
// 	} catch (e) {
// 		console.log(e);
// 		res.status(500).json(e);
// 	}
// }
/**
 * POST /delivery/orders/order/accept
 * @tag Delivery
 * @summary Accept a delivery order.
 * @description Accepts delivery order with the provided details from the request body. Returns the accepted order if successful.
 * @operationId acceptOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {AcceptDeliveryOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the accepted order in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function acceptOrderDelivery(req: ValidatedRequest<AcceptDeliveryOrderInput>, res: Response): Promise<void> {
	const { order_id } = req.body;
	const userId = req.user?.user_id;
	if (!userId) {
		res.status(401).json({ error: 'Unauthorized', errorType: 'ERR_UNAUTHORIZED' });
		return;
	}
	const user = await UserDao.getUserById(userId);
	const deliverer_id = user?.driver?.driver_id;
	if (!deliverer_id) {
		res.status(404).json({ error: 'Driver not found for user', errorType: 'ERR_DRIVER_NOT_FOUND' });
		return;
	}

	try {
		let order = await DeliveryOrderDao.getOrder(order_id, {
			include: {
				driver: true,
			},
		});
		if (!order) {
			res.status(404).json({ error: 'Order not found', errorType: 'ERR_ORDER_NOT_FOUND' });
			return;
		}
		let deliverer = await DriverDao.getDriverById(deliverer_id);
		if (!deliverer) {
			res.status(404).json({ error: 'Driver not found', errorType: 'ERR_DRIVER_NOT_FOUND' });
			return;
		}
		if (!deliverer.online) {
			res.status(400).json({ error: `You are offline!.`, errorType: 'ERR_DRIVER_OFFLINE' });
			return;
		} else if (DELIVERY_ORDER_END_STATES.includes(order.status)) {
			res.status(400).json({
				error: `Order has been canceled: ${order.status}.`,
				errorType: 'ERR_ORDER_ALREADY_CANCELED',
			});
			return;
		} else if (
			order.status !== DELIVERY_ORDER_STATUS.MERCHANT_PREPARING &&
			order.status !== DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
		) {
			res.status(400).json({
				error: 'Order cannot be accepted in this state.',
				errorType: 'ERR_ORDER_UNACCEPTABLE',
			});
			return;
		} else if (order.driver?.driver_id && order.driver?.driver_id !== deliverer_id) {
			res.status(400).json({ error: 'Order is already accepted.', errorType: 'ERR_ORDER_ALREADY_ACCEPTED' });
			return;
		}
		const order2 = await DeliveryOrderDao.acceptOrderDeliveryWithRawLock(
			order_id,
			deliverer_id,
			deliverer.current_vehicle_id as string
		);
		const newOrder = await DeliveryOrderDao.getOrder(order2.order_id, {
			include: {
				driver: true,
			},
		});
		// sockets, notifications, etc.
		SocketStore.addUserToRoom(deliverer_id, `order_${order_id}`);
		(io as Socket).to(`order_${order_id}`).emit('order_accepted__delivery', newOrder);
		(io as Socket).emit('driver_unavailable', deliverer_id);
		await revokeDeliveryOrderFromDrivers(order_id);

		res.status(200).json(newOrder);
	} catch (err: unknown) {
		// Postgres NOWAIT lock error will bubble up here
		if ((err as { code?: string }).code === '55P03' /* lock_not_available */) {
			res.status(409).json({ error: 'Order is already being claimed', errorType: 'ERR_ORDER_ALREADY_ACCEPTED' });
			return;
		}
		console.error(err);
		res.status(500).json({
			error: err instanceof Error ? err.message : 'Unknown error',
			errorType: 'ERR_INTERNAL_SERVER',
		});
	}
}
/**
 * POST /delivery/orders/order/cancel_delivery
 * @tag Delivery
 * @summary Driver cancels their delivery of a delivery order which they have accepted but not picked up yet.
 * @description Allows a driver to cancel their delivery of an accepted delivery order if the order is in MERCHANT_PREPARING or MERCHANT_READY_FOR_PICKUP state.
 * @operationId cancelDelivery
 * @bodyDescription Request body must include order_id.
 * @bodyContent {CancelDeliveryOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 400 - Bad request. Returns error message if the order delivery cannot be canceled.
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function cancelOrderDelivery(req: ValidatedRequest<CancelDeliveryOrderInput>, res: Response): Promise<void> {
	const { order_id } = req.body;
	try {
		const old_order = await DeliveryOrderDao.getOrder(order_id, {
			include: { user: true, driver: true },
		});
		if (!old_order) {
			res.status(404).json({ error: 'Order not found.' });
			return;
		}
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
					driver_id: driver?.driver_id,
				},
				data: {
					on_order: false,
				},
			});
		}
		revokeDeliveryOrderFromDrivers(new_order.order_id);
		sendDeliveryOrderNotifications(
			old_order.user?.language ?? 'en',
			driver?.user?.language ?? 'en',
			old_order.user_id,
			driver?.user_id as string,
			new_order.status
		);

		(io as Socket).to('order_' + new_order.order_id).emit('order_status_change__delivery', new_order);
		new_order = await DeliveryOrderDao.updateOrderStatus(
			old_order.order_id,
			DELIVERY_ORDER_STATUS.ORDER_FINISHED_FAIL
		);
		(io as Socket).to('order_' + new_order.order_id).emit('order_status_change__delivery', new_order);
		//TODO: handle cash payment -> refund merchant
		(io as Socket).to('order_' + new_order.order_id).emit('order_canceled', new_order);
		SocketStore.closeRoom(`order_${new_order.order_id}`);
		res.status(200).json(new_order);
	} catch (e) {
		console.error('Error canceling order', e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/order/complete
 * @tag Delivery
 * @summary Complete a delivery order.
 * @description Completes a delivery order with the provided order ID from the request body. Returns the completed order if successful and emits a 'driver_available' event.
 * @operationId completeOrder
 * @bodyDescription Request body must include 'order_id'.
 * @bodyContent {CompleteDeliveryOrderRequest} application/json
 * @bodyRequired
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_WORDS] - Optional promo words for analytics
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_SECTION] - Optional promo section ID for analytics
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_AD] - Optional promo ad ID for analytics
 * @response 200 - Successful operation. Returns the completed order in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 500 - Server error. Console logs the error message and returns it in the response.
 * @prisma_model delivery_orders
 */
async function completeOrder(
	req: ValidatedRequest<
		CompleteDeliveryOrderInput,
		never,
		{
			ANALYTICS_PARAM_PROMO_WORDS?: string[];
			ANALYTICS_PARAM_PROMO_SECTION?: string;
			ANALYTICS_PARAM_PROMO_AD?: string;
		}
	>,
	res: Response
): Promise<void> {
	try {
		let order = await DeliveryOrderDao.completeOrder(req.body.order_id);
		if (!order) {
			res.status(404).json({ error: 'Order not found' });
			return;
		}
		const existingPromoAnalyticsLogs = await prisma.promo_analytics.findMany({
			where: {
				order_id: order.order_id,
			},
		});
		if (existingPromoAnalyticsLogs?.length > 0) {
			logPromoAnalytics({
				business_id: order.business_id as string,
				user_id: order.user_id,
				order_id: order.order_id,
				analytics_type: ANALYTICS_TYPE.ORDER_FINISH,
				promo_type: existingPromoAnalyticsLogs[0].promo_type,
				promo_ads_id: existingPromoAnalyticsLogs[0].promo_ads_id,
				promo_sections_id: existingPromoAnalyticsLogs[0].promo_sections_id,
				wordIds: existingPromoAnalyticsLogs[0].word_id
					? existingPromoAnalyticsLogs.map((log: PromoAnalyticsBase) => log.word_id)
					: null,
			})
				.then((res) => console.log('Promo analytics ORDER FINISH success', res))
				.catch((err) => console.warn('Promo analytics ORDER FINISH failed', err));
		}
		let driver = await DriverDao.getDriverById(order.driver_id as string);
		if (order.details?.type !== 'pickup') {
			//assign penalties for being late
			const timeline_delivered_timestamp = order.timeline
				.slice()
				.reverse()
				.find((entry) => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_DELIVERED)?.timestamp;
			if (driver && timeline_delivered_timestamp && order.details?.customer_expected_delivery_at) {
				const late_seconds = moment(timeline_delivered_timestamp).diff(
					moment(order.details.customer_expected_delivery_at),
					'seconds'
				);
				console.log(`Order was ${late_seconds} seconds ${late_seconds > 0 ? 'late' : 'early or on time'}.`);
				let allowed_leeway = 60 * 30;
				if (late_seconds > allowed_leeway) {
					await LateEventsDao.createLateEvent({
						driver_id: driver.driver_id,
						delivery_order_id: order.order_id,
						seconds: late_seconds - allowed_leeway,
					});
				}
			} else {
				await ScoringPointsDao.createScoringPoints({
					driver_id: order.driver_id || undefined,
					delivery_order_id: order.order_id,
					points: 0,
					isPenalty: false,
					reason: SCORING_POINTS_REASON.INSUFFICIENT_DATA,
				});
			}
			if (!order.is_daily_meal) {
				let delivery_business_stripe = await BusinessDao.getBusinessStripeByBusinessId(
					driver?.business_id as string
				);
				const INITIAL_DELIVERY_CUT = Math.round(order.details?.delivery_cost * 100 * (1 - DRIVE_FEE));
				const remainingReservedCredits = await WalletFundsDao.getReservedCredits(order.user_id, order.order_id);
				const CREDITS_AMOUNT_RESERVED = remainingReservedCredits.reduce((sum, wf) => sum + wf.amount, 0);
				const DELIVERY_CREDIT_CUT_CENTS = Math.min(INITIAL_DELIVERY_CUT, CREDITS_AMOUNT_RESERVED);
				if (DELIVERY_CREDIT_CUT_CENTS > 0) {
					await WalletFundsHelpers.transferReservedCreditsForOrder(
						order.user_id,
						delivery_business_stripe as string,
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
					if (order.payment?.type === 'CARD' || order.payment?.type === 'PLATFORM') {
						const paymentIntent = await stripe.client.paymentIntents.retrieve(
							order.payment_intent_id as string
						);
						await stripe.splitCutFromPaymentIntent(
							paymentIntent,
							delivery_business_stripe as string,
							DISCOUNTED_DELIVERY_COST_CENTS
						);
					} else if (order.payment?.type === 'WALLET') {
						console.info(order);
						await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							order.user_id,
							delivery_business_stripe as string,
							DISCOUNTED_DELIVERY_COST_CENTS,
							order.order_id,
							SERVICE_TYPE.DELIVERY
						);
					}
				}
			} else {
				const delivery_business_stripe = await BusinessDao.getBusinessStripeByBusinessId(
					driver?.business_id as string
				);
				const restaurant_business_stripe = await BusinessDao.getBusinessStripeByBusinessId(
					order?.business_id as string
				);
				const grouped_id = order.details?.subscription_id;
				if (!grouped_id) {
					console.warn('Daily meal order details do not contain subscription_grouped_id');
				} else {
					const subscription = await DailyMealDao.getSubscriptionById(order.details?.subscription_id);
					if (!subscription) {
						console.warn('No subscription found for id ' + order.details?.subscription_id);
					}

					if (subscription?.type === SUBSCRIPTION_TYPE.DATED) {
						const subscription_payment = await PaymentDao.getPaymentByGroupedId(grouped_id);
						const sub_total_price = Math.round(order.details?.sub_total_price * 100);
						const first_available_driver_split = subscription_payment?.payment_splits?.find(
							(split) =>
								split.destination_type === SPLIT_DESTINATION_TYPE.DRIVER &&
								split.status === SPLIT_STATUS.RESERVED
						);
						const amount_merchant = Math.floor((sub_total_price * RESTAURANT_SHARE_PERC) / 100);
						const amount_platform = sub_total_price - amount_merchant;
						const amount_driver =
							(first_available_driver_split?.amount_regular ?? 0) +
							(first_available_driver_split?.amount_credits ?? 0);
						// console.log([
						// 	{
						// 		destination_type: SPLIT_DESTINATION_TYPE.MERCHANT,
						// 		destination_id: restaurant_business_stripe,
						// 		amount: amount_merchant,
						// 	},
						// 	{
						// 		destination_type: SPLIT_DESTINATION_TYPE.PLATFORM,
						// 		destination_id: 'platform',
						// 		amount: amount_platform,
						// 	},
						// 	{
						// 		destination_type: SPLIT_DESTINATION_TYPE.DRIVER,
						// 		amount:
						// 			first_available_driver_split.amount_regular +
						// 			first_available_driver_split.amount_credits,
						// 		destination_id: delivery_business_stripe,
						// 	},
						// ])
						await createAndProcessTransferGroupSplits(
							subscription_payment?.payment_id as string,
							[
								{
									destination_type: SPLIT_DESTINATION_TYPE.MERCHANT,
									destination_id: restaurant_business_stripe ?? undefined,
									amount: amount_merchant,
								},
								{
									destination_type: SPLIT_DESTINATION_TYPE.PLATFORM,
									destination_id: 'platform',
									amount: amount_platform,
								},
								{
									destination_type: SPLIT_DESTINATION_TYPE.DRIVER,
									amount: amount_driver,
									new_destination_id: delivery_business_stripe ?? undefined,
								},
							],
							TRANSFER_GROUP_TYPE.TRANSFER
						);
					} else {
						const amount_driver = DAILY_MEAL_DELIVERY_COST_CENTS;
						await stripe.transferToConnectedAccount(
							amount_driver,
							delivery_business_stripe as string,
							grouped_id
						);
					}
				}
			}
		}
		if (!order.is_daily_meal) {
			const DELIVERY_COST_CENTS = order.details?.total_price * 100;
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
					if (baskets > 0) {
						await WalletFundsDao.convertCashbacksToCredit({
							user_id: order.user_id,
							amount: Math.floor(baskets / CREDITS.CASHBACK_CONVERSION_DELIVERY) * 100,
							pending_cashback_ids: pendingCashbacks.map((cb) => cb.cashback_id),
						});
					}
				}
			}
		} else {
			await DailyMealDao.updateDailyMealInstances(
				order.details?.instance_ids,
				DAILY_MEAL_INSTANCE_STATUS.DELIVERED
			);
		}
		await handleReferral(order.user_id);
		sendDeliveryOrderNotifications(order.user?.language ?? 'en', '', order.user_id, null, order.status);
		// send email
		sendPdfDeliveryOrder(order);
		// order = await DeliveryOrderDao.updateOrderStatus(order.order_id,DELIVERY_ORDER_STATUS.SUCCESS)
		(io as Socket).to('order_' + order.order_id).emit('order_completed__delivery', order);
		if (driver) (io as Socket).emit('driver_available', driver);
		setTimeout(() => {
			SocketStore.closeRoom(`order_${order.order_id}`);
		}, 10000);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/driver/:driver_id
 * @tag Delivery
 * @summary Get completed delivery orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedDeliveryOrdersByDriverId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getDeliveryOrdersByDriverId(
	req: ValidatedRequest<never, { driver_id: string }>,
	res: Response
): Promise<void> {
	const { driver_id } = req.params;
	try {
		const orders = await DeliveryOrderDao.getOrdersByDeliveryDriverId(driver_id);
		res.status(200).json(orders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/completed/:driver_id
 * @tag Delivery
 * @summary Get completed delivery orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedDeliveryOrdersByDriverId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getCompletedDeliveryOrdersByDriverId(
	req: ValidatedRequest<never, { driver_id: string }>,
	res: Response
): Promise<void> {
	console.log('get completed orders');
	const { driver_id } = req.params;
	try {
		const completedOrders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.ORDER_FINISHED_SUCCESS,
				driver_id,
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
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getActiveDeliveryOrdersByDriverId(
	req: ValidatedRequest<never, { driver_id: string }>,
	res: Response
): Promise<void> {
	const { driver_id } = req.params;
	try {
		const allActiveOrders = await DeliveryOrderDao.getActiveOrdersByDeliveryDriverId(driver_id);
		const activeOrders: DeliveryOrderDetail[] = [];
		const pendingOrders: DeliveryOrderDetail[] = [];
		for (let order of allActiveOrders) {
			let driver = await DriverDao.getDriverById(driver_id);
			if ((!order.is_daily_meal && !driver?.on_daily_meals) || (order.is_daily_meal && driver?.on_daily_meals)) {
				activeOrders.push(order);
			}
		}
		const sentOrders = await DeliveryOrderDao.getAlreadySentOrdersByDeliveryDriverId(driver_id);
		for (let sentOrder of sentOrders) {
			const order = await DeliveryOrderDao.getOrder(sentOrder.order.order_id);
			if (
				order &&
				!DELIVERY_ORDER_END_STATES.includes(order.status) &&
				!order.timeline.some((entry) => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_PICKED_UP) &&
				!order.driver_id
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
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getCompletedDeliveryOrdersByUserId(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<void> {
	const { user_id } = req.params;
	try {
		const result = await DeliveryOrderDao.getOrders({
			where: {
				user_id: user_id,
				status: { in: DELIVERY_ORDER_END_STATES },
			},
			include: {
				driver: true,
			},
			orderBy: {
				updated_at: 'desc',
			},
		});
		// const reviews = await ReviewsDao.getReviewsByUserId(user_id);
		// const result = orders.map((order) => {
		// 	const review = reviews.find((r) => r.feedback?.order_id === order.order_id);
		// 	return { ...order, review };
		// });
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
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getActiveDeliveryOrdersByUserId(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<void> {
	const { user_id } = req.params;
	try {
		const activeOrders = await DeliveryOrderDao.getDeliveryOrdersIfNotCompleted(user_id);
		const filteredOrders = activeOrders.filter(
			(order) =>
				!order.is_daily_meal ||
				order.timeline.some((entry) => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED)
		);
		res.status(200).json(filteredOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/active/business/:business_id/:module
 * @tag Delivery
 * @summary Get active delivery orders.
 * @description This fetches all completed orders for a specific business.
 * @operationId getCompletedDeliveryOrdersByBusinessId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getActiveDeliveryOrdersByBusinessId(
	req: ValidatedRequest<never, { business_id: string; module: string }>,
	res: Response
): Promise<void> {
	const { business_id, module } = req.params;
	try {
		const activeOrders = await DeliveryOrderDao.getActiveDeliveryOrdersForBusiness(business_id, module as MODULE);
		res.status(200).json(activeOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/business/:business_id/:module
 * @tag Delivery
 * @summary Get delivery orders.
 * @description This fetches all restaurant orders.
 * @operationId getDeliveryOrdersByBusinessId
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getDeliveryOrdersByBusinessId(
	req: ValidatedRequest<never, { business_id: string; module: string }>,
	res: Response
): Promise<void> {
	const { business_id, module } = req.params;
	try {
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business) {
			res.status(404).json({ error: 'Business not found' });
			return;
		}
		let whereClause: { [key: string]: any } = {};
		if (module === MODULE.STORES) {
			whereClause.stores_id = business.stores_id;
		} else if (module === MODULE.FOOD_DRINKS) {
			whereClause.food_drinks_id = business.food_drinks_id;
		}
		const orders = await DeliveryOrderDao.getOrders({
			where: whereClause,
		});
		// console.log('business orders', orders)
		res.status(200).json(orders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /delivery/orders/completed/business/:business_id/:module
 * @tag Delivery
 * @summary Get completed delivery orders by business id.
 * @description This fetches all completed restaurant orders.
 * @operationId getCompletedDeliveryOrdersByBusinessId
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {DeliveryOrderDetail[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getCompletedDeliveryOrdersByBusinessId(
	req: ValidatedRequest<never, { business_id: string; module: string }>,
	res: Response
): Promise<void> {
	const { business_id, module } = req.params;
	try {
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business) {
			res.status(404).json({ error: 'Business not found' });
			return;
		}
		let whereClause: { [key: string]: any } = {};
		if (module === MODULE.STORES) {
			whereClause.stores_id = business.stores_id;
		} else if (module === MODULE.FOOD_DRINKS) {
			whereClause.food_drinks_id = business.food_drinks_id;
		}
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				...whereClause,
				status: DELIVERY_ORDER_STATUS.ORDER_FINISHED_SUCCESS,
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
 * @bodyContent {TaxiIdAndStatus} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @prisma_model delivery_orders
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderStatus(req: ValidatedRequest<UpdateOrderStatusInput>, res: Response): Promise<void> {
	try {
		let order = await DeliveryOrderDao.getOrder(req.body.order_id, { include: { user: true } });
		if (!order) {
			res.status(404).json({ error: 'Order not found.' });
			return;
		}
		let user;
		if (order) user = order.user;
		if (req.body.status === DELIVERY_ORDER_STATUS.MERCHANT_REJECTED) {
			await handlePaymentCleanup(order);
		}
		if (req.body.status === DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP) {
			await handleStockSync(order);
		}
		order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, req.body.status);
		(io as Socket).to('order_' + order.order_id).emit('order_status_change__delivery', order);
		if (
			order.status === DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED ||
			order.status === DELIVERY_ORDER_STATUS.MERCHANT_REJECTED ||
			order.status === DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED
		) {
			order = await DeliveryOrderDao.updateOrderStatus(
				req.body.order_id,
				DELIVERY_ORDER_STATUS.ORDER_FINISHED_FAIL
			);
			await handleStockSync(order);
			//TODO: handle payment cleanup here?
			(io as Socket).to('order_' + order.order_id).emit('order_status_change__delivery', order);
		} else if (
			order.status === DELIVERY_ORDER_STATUS.CUSTOMER_PICKED_UP ||
			order.status === DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED
		) {
			order = await DeliveryOrderDao.updateOrderStatus(
				req.body.order_id,
				DELIVERY_ORDER_STATUS.ORDER_FINISHED_SUCCESS
			);
			(io as Socket).to('order_' + order.order_id).emit('order_status_change__delivery', order);
		}
		let d;
		if (order.driver_id) {
			d = await DriverDao.getDriverById(order.driver_id);
		}
		sendDeliveryOrderNotifications(
			user?.language ?? 'en',
			d?.user?.language ?? 'en',
			order.user_id as string,
			d?.user_id as string,
			req.body.status
		);
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
 * @bodyContent {RejectDeliveryOrderInput} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @prisma_model delivery_orders
 * @response 500 - Server error. Returns error message if any exception is encountered during execution
 */
async function rejectOrder(req: ValidatedRequest<RejectDeliveryOrderInput>, res: Response): Promise<void> {
	const { order_id, reason, items } = req.body;
	try {
		if (!order_id) {
			res.status(400).json({ error: 'order_id is required.' });
			return;
		}
		if (Array.isArray(items) && items.length > 0) {
			//TODO: update line_items instead of order items
			await DeliveryOrderDao.updateOrderItems(order_id, items);
		}
		let order = await DeliveryOrderDao.updateOrder(order_id, {
			rejection_reason: reason,
		});
		let user;
		if (order) user = order.user;
		await handlePaymentCleanup(order);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.MERCHANT_REJECTED);
		(io as Socket).to('order_' + order.order_id).emit('order_rejected__delivery', order);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.ORDER_FINISHED_FAIL);
		(io as Socket).to('order_' + order.order_id).emit('order_status_change__delivery', order);
		await handleStockSync(order);
		sendDeliveryOrderNotifications(
			user?.language ?? 'en',
			'',
			order?.user_id,
			null,
			DELIVERY_ORDER_STATUS.MERCHANT_REJECTED
		);
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
 * @description Processes a delivery order from PENDING status. Captures payment (if neccessary), updates order status, and emits relevant events. Handles payment via CARD, WALLET, PLATFORM, or CASH, and moves the order through the correct state transitions. In the case of a CARD or PLATFORM payment, the payment and state transitions are left up to the stripe webhook handler. If preparation_time is provided, updates the order's pickup time.
 * @operationId merchantAcceptOrder
 * @bodyDescription The request body must include 'order_id' to identify the order and optionally 'preparation_time' (ISO string or timestamp).
 * @bodyContent {MerchantAcceptOrderInput} application/json
 * @bodyRequired
 * @response 200 - Order processed and moved to next state. Returns the updated DeliveryOrder object.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 400 - Preparation time must be set if not scheduled.
 * @response 404 - Order not found.
 * @response 500 - Error processing the order.
 * @prisma_model delivery_orders
 * @prisma_model businesses
 */
async function merchantAcceptOrder(req: ValidatedRequest<MerchantAcceptOrderInput>, res: Response): Promise<void> {
	const { order_id, preparation_time } = req.body;
	try {
		let order = await DeliveryOrderDao.getOrder(order_id, { include: { business: true } });
		if (!order) {
			res.status(404).json({ error: 'Order not found' });
			return;
		}
		const user = order?.user;
		if (preparation_time) {
			order = await DeliveryOrderDao.updateOrderPickupTime(order_id, preparation_time);
			(io as Socket).to('order_' + order.order_id).emit('order_pickup_time', order);
		} else if (!order?.scheduled_at) {
			console.error('Preparation time must be set');
			res.status(400).json(order_id);
			return;
		}
		order = await DeliveryOrderDao.getOrder(order_id, { include: { business: true } });
		if (!order) {
			res.status(404).json({ error: 'Order not found' });
			return;
		}
		console.info('got into merchantAcceptOrder', JSON.stringify(order.payment_intent_id));
		if (order.module_type === MODULE.FOOD_DRINKS) {
			const restaurant_stripe = await BusinessDao.getBusinessStripeByBusinessId(
				order.business?.business_id as string
			);
			const { PLATFORM_CREDIT_CUT, PLATFORM_CUT, MERCHANT_CREDIT_CUT, MERCHANT_CUT } =
				await calculateDeliveryOrderPaymentCuts(order);

			if (order.payment?.type === 'CARD' || order.payment?.type === 'PLATFORM') {
				if (Math.round(order.details?.total_price * 100) === order.details?.credit_discount) {
					await WalletFundsHelpers.transferReservedWalletFundsForOrder(
						order.user_id,
						restaurant_stripe as string,
						MERCHANT_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
					await WalletFundsHelpers.transferReservedWalletFundsForOrder(
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
					await stripe.client.paymentIntents.capture(order.payment_intent_id as string, {
						metadata: {
							preparation_time: preparation_time as string,
						},
					});
					res.status(200).json(order);
				}
			} else if (order.payment?.type === 'WALLET') {
				await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					restaurant_stripe as string,
					MERCHANT_CUT + MERCHANT_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY
				);
				await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					'platform',
					PLATFORM_CUT + PLATFORM_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY
				);
			} else if (order.payment?.type === 'CASH') {
				if (MERCHANT_CREDIT_CUT > 0) {
					await WalletFundsHelpers.transferReservedWalletFundsForOrder(
						order.user_id,
						restaurant_stripe as string,
						MERCHANT_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
				}
				if (PLATFORM_CREDIT_CUT > 0) {
					await WalletFundsHelpers.transferReservedWalletFundsForOrder(
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
		sendDeliveryOrderNotifications(user?.language ?? 'en', '', order.user_id, null, order.status);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.MERCHANT_PREPARING);
		(io as Socket).to('order_' + order.order_id).emit('order_status_change__delivery', order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		let order = await DeliveryOrderDao.getOrder(order_id);
		if (order) await handlePaymentCleanup(order);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED);
		(io as Socket).to('order_' + order.order_id).emit('order_status_change__delivery', order);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.ORDER_FINISHED_FAIL);
		(io as Socket).to('order_' + order.order_id).emit('order_status_change__delivery', order);
		SocketStore.closeRoom(`order_${order.order_id}`);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/orders/order/merchant_ready
 * @tag Delivery
 * @summary Merchant confirms order is ready for pickup.
 * @description If needed recalculates pricing and processes payment then updates the order as ready for pickup and if needed, and emits relevant events. Handles payment via CARD, WALLET, PLATFORM, or CASH, and moves the order through the correct state transitions. In the case of a CARD or PLATFORM payment, the payment and state transitions are left up to the stripe webhook handler.
 * @operationId merchantConfirmOrderReady
 * @bodyDescription The request body must include 'order_id' to identify the order.
 * @bodyContent {MerchantConfirmOrderReadyInput} application/json
 * @bodyRequired
 * @response 200 - Order marked as ready for pickup. Returns the updated DeliveryOrder object.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 500 - Error processing the order.
 * @prisma_model delivery_orders
 * @prisma_model businesses
 */
async function merchantConfirmOrderReady(
	req: ValidatedRequest<MerchantConfirmOrderReadyInput>,
	res: Response
): Promise<void> {
	const { order_id } = req.body;
	try {
		const order = await processOrderReady(order_id);
		res.status(200).json(order);
	} catch (e) {
		console.error(e);
		try {
			const order = await DeliveryOrderDao.getOrder(order_id);
			if (order) await handleOrderProcessingFailure(order);
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
 * @description Sets all preparing orders for a specific business_local_location as ready for pickup. Only works for LOCAL business type. Recalculates pricing and processes payments for all orders, then updates them as ready for pickup and emits relevant events. Handles payment via CARD, WALLET, PLATFORM, or CASH for each order.
 * @operationId localConfirmMultipleOrdersReady
 * @bodyDescription The request body must include 'business_local_location_id' to identify which location's orders to process.
 * @bodyContent {LocalConfirmMultipleOrdersReadyInput} application/json
 * @bodyRequired
 * @response 200 - Orders marked as ready for pickup. Returns summary of processed orders.
 * @responseContent {
 * 	 success: boolean;
 * 	 processed_orders: number;
 * 	 successful_orders: number;
 * 	 failed_orders: number;
 * 	 orders: Array<Record<string, any>>;
 * } 200.application/json
 * @response 400 - Invalid business_local_location_id or no preparing orders found.
 * @response 500 - Error processing the orders.
 * @prisma_model delivery_orders
 * @prisma_model business_local_locations
 * @prisma_model businesses
 */
async function localConfirmMultipleOrdersReady(
	req: ValidatedRequest<LocalConfirmMultipleOrdersReadyInput>,
	res: Response
): Promise<void> {
	const { business_local_location_id } = req.body;
	if (!business_local_location_id) {
		res.status(400).json({ error: 'business_local_location_id is required' });
		return;
	}

	try {
		const userId = req.user?.user_id;
		if (!userId) {
			res.status(403).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.getUserById(userId);
		if (!user) {
			res.status(404).json({ error: 'User not found' });
			return;
		}
		// TODO: properly check that user is not only authenticated,
		// but also a business user of the business owning the business_local_location
		// if (!user.business_users?.[0]?.business?.types?.includes(BUSINESS_TYPE.LOCAL)) {
		// 	res.status(400).json({ error: 'This endpoint is only for LOCAL business type' });
		// 	return;
		// }

		const businessLocalLocation = await prisma.business_local_locations.findUnique({
			where: { business_local_location_id },
		});
		if (!businessLocalLocation) {
			res.status(400).json({ error: 'Invalid business_local_location_id' });
			return;
		}

		const preparingOrders = await DeliveryOrderDao.getOrdersByBusinessLocalLocation(
			business_local_location_id,
			DELIVERY_ORDER_STATUS.MERCHANT_PREPARING
		);
		if (!preparingOrders || preparingOrders.length === 0) {
			res.status(400).json({
				error: 'No preparing orders found for this business_local_location_id',
				processed_orders: 0,
				successful_orders: 0,
				failed_orders: 0,
				orders: [],
			});
			return;
		}

		console.log(
			`Processing ${preparingOrders.length} orders for business_local_location_id: ${business_local_location_id}`
		);

		const results: {
			success: boolean;
			processed_orders: number;
			successful_orders: number;
			failed_orders: number;
			orders: Record<string, any>[];
		} = {
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
					await handleOrderProcessingFailure(order);
					results.orders.push({
						order_id: order.order_id,
						status: 'failed',
						error: (e as Error).message || 'Order processing failed',
					});
				} catch (cleanupError) {
					console.error(`Cleanup failed for order ${order.order_id}:`, cleanupError);
					results.orders.push({
						order_id: order.order_id,
						status: 'failed',
						error: `Order processing and cleanup failed: ${(e as Error).message}`,
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
	} catch (e: unknown) {
		console.error('Error in localConfirmMultipleOrdersReady:', e);
		res.status(500).json({
			error: 'Failed to process orders',
			message: (e as Error).message,
			success: false,
			processed_orders: 0,
			successful_orders: 0,
			failed_orders: 0,
			orders: [],
		});
	}
}

/**
 * POST /delivery/orders/order/pickup_time
 * @tag Delivery
 * @summary Update a delivery order's pickup time.
 * @description Updates pickup time of the delivery order
 * @operationId updateOrderPickupTime
 * @bodyDescription Request body must include 'order_id' to identify the order and 'status' to specify the new status.
 * @bodyContent {UpdateOrderPickupTimeInput} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @prisma_model delivery_orders
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderPickupTime(
	req: AuthenticatedRequest<UpdateOrderPickupTimeInput>,
	res: Response
): Promise<void> {
	const { order_id, pickup_time } = req.body;
	try {
		let order = await DeliveryOrderDao.getOrder(order_id);
		if (req.user?.user_id) {
			const businessUser = await BusinessUsersDao.getBusinessUserByUserId(req.user.user_id);
			if (businessUser?.business_id !== order?.business_id) {
				if (!order) {
					res.status(400).json({ error: 'Order not found' });
					return;
				} else if (
					order?.details?.ready_for_pickup_at &&
					new Date(order.details.ready_for_pickup_at) > new Date(pickup_time)
				) {
					res.status(400).json({ error: 'Pickup time cannot be earlier than the ready for pickup time' });
					return;
				}
			}
		} else {
			res.status(403).json({ error: 'Unauthorized' });
			return;
		}
		order = await DeliveryOrderDao.updateOrderPickupTime(order_id, pickup_time);
		(io as Socket).to('order_' + order.order_id).emit('order_pickup_time', order);
		const totalDelay = order.timeline.reduce((sum, entry) => {
			if (entry.status === DELIVERY_ORDER_STATUS.MERCHANT_DELAYED) {
				return sum + (entry.delay || 0);
			}
			return sum;
		}, 0);
		let d;
		if (order.driver_id) {
			d = await DriverDao.getDriverById(order.driver_id);
		}
		sendDeliveryOrderNotifications(
			'',
			d?.user?.language ?? 'en',
			null,
			d?.user_id as string,
			DELIVERY_ORDER_STATUS.MERCHANT_DELAYED
		);
		if (totalDelay > 120) {
			const exising_penalties = await ScoringPointsDao.getScoringPointsByModuleId(order.module_id);
			const already_penalized_order = exising_penalties?.find(
				(sp) => sp.delivery_order_id === order.order_id && sp.reason === SCORING_POINTS_REASON.LARGE_DELAY
			);
			if (!already_penalized_order) {
				await ScoringPointsDao.createScoringPoints({
					stores_id: order.module_type === MODULE.STORES ? order.module_id : undefined,
					food_drinks_id: order.module_type === MODULE.FOOD_DRINKS ? order.module_id : undefined,
					delivery_order_id: order.order_id,
					points: 1,
					isPenalty: true,
					reason: SCORING_POINTS_REASON.LARGE_DELAY,
				});
			}
		}
		res.status(200).json(order);
	} catch (e: unknown) {
		console.log('Error updating order pickup time', (e as Error).message);
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
 * @bodyContent {UpdateOrderDeliveryTimeInput} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @prisma_model delivery_orders
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderDeliveryTime(
	req: ValidatedRequest<UpdateOrderDeliveryTimeInput>,
	res: Response
): Promise<void> {
	const { order_id, delivery_time } = req.body;
	try {
		let order = await DeliveryOrderDao.updateOrderDeliveryTime(order_id, delivery_time);
		(io as Socket).to('order_' + order.order_id).emit('order_delivery_time', order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/timeline
 * @tag Delivery
 * @summary Update a delivery order's timeline.
 * @description Updates the timeline of a taxi order.
 * @operationId updateDeliveryOrderTimeline
 * @bodyDescription Request body must include 'order_id', and the new 'timeline' details.
 * @bodyContent {UpdateDeliveryOrderTimelineInput} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function updateDeliveryOrderTimeline(
	req: ValidatedRequest<UpdateDeliveryOrderTimelineInput>,
	res: Response
): Promise<void> {
	const { order_id, timeline } = req.body;
	try {
		let order = await DeliveryOrderDao.updateDeliveryOrderTimeline(order_id, timeline);
		(io as Socket).to('order_' + order.order_id).emit('order_timeline_change_delivery', order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/add_to_timeline
 * @tag Delivery
 * @summary Update a delivery order's timeline by appending an entry.
 * @description Appends a new timeline entry with the given status and optional extra data in entry_data.
 * @operationId updateDeliveryOrderTimeline
 * @bodyDescription Request body must include 'order_id', and the new entry's status.
 * @bodyContent {AddToDeliveryOrderTimelineInput} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function addToDeliveryOrderTimeline(
	req: ValidatedRequest<AddToDeliveryOrderTimelineInput>,
	res: Response
): Promise<void> {
	const { order_id, timeline } = req.body;
	const { status, entry_data } = timeline;
	try {
		let order = await DeliveryOrderDao.addTimelineEntry(order_id, status, entry_data || {});
		(io as Socket).to('order_' + order.order_id).emit('order_timeline_change_delivery', order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/order/update/items
 * @tag Delivery
 * @summary Update delivery order items.
 * @description Updates a delivery order.
 * @operationId updateDeliveryOrderItems
 * @bodyDescription Request body must include 'order_id'
 * @bodyContent {UpdateDeliveryOrderItemsInput} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function updateDeliveryOrderItems(
	req: ValidatedRequest<UpdateDeliveryOrderItemsInput>,
	res: Response
): Promise<void> {
	const { order_id, items } = req.body;
	try {
		// TODO: replace this with line items update logic
		// const updated = await LineItemsDao.updateLineItem(line_item_id, data);
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
 * @responseContent {
 * 	 orders: number;
 *   amount: number;
 * } 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function getDeliveryOrdersToday(req: Request, res: Response): Promise<void> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				status: DELIVERY_ORDER_STATUS.ORDER_FINISHED_SUCCESS,
				created_at: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
				is_daily_meal: req.query?.dailyMeals === 'true' ? true : false,
			},
		});
		res.status(200).json({
			orders: orders?.length || 0,
			amount: todaysEarnings(orders, DELIVERY_ORDER_STATUS.ORDER_FINISHED_SUCCESS),
		});
	} catch (e) {
		console.error('DeliveryOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/order/dispatcher_cancel
 * @tag Delivery
 * @summary Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent
 * @description Cancel and if necessary refund an order
 * @operationId dispatcherRevoke
 * @bodyDescription Request body must include 'order_id' to identify the order.
 * @bodyContent {DispatcherCancelOrderInput} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated Order.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 401 - Unauthorized. Returns error message "Unauthorized" if the user is not authenticated.
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function dispatcherCancel(req: ValidatedRequest<DispatcherCancelOrderInput>, res: Response): Promise<void> {
	const { order_id } = req.body;
	const dispatcher_user_id = req.user?.user_id;
	if (!dispatcher_user_id) {
		res.status(401).json({ error: 'Unauthorized' });
		return;
	}
	try {
		const old_order = await DeliveryOrderDao.getOrder(order_id, { include: { user: true } });
		if (!old_order) {
			res.status(404).json({ error: 'Order not found' });
			return;
		}
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
		const driver = await DriverDao.getDriverById(old_order.driver_id as string);
		if (driver?.driver_id) {
			await prisma.drivers.update({
				where: {
					driver_id: driver.driver_id,
				},
				data: {
					on_order: false,
				},
			});
		}
		revokeDeliveryOrderFromDrivers(new_order.order_id);
		sendDeliveryOrderNotifications(
			old_order.user?.language ?? 'en',
			driver?.user?.language ?? 'en',
			old_order.user_id,
			driver?.user_id as string,
			new_order.status
		);
		//TODO: handle extras for socket on FE if needed.
		(io as Socket).to('order_' + new_order.order_id).emit('order_status_change__delivery', new_order);
		new_order = await DeliveryOrderDao.updateOrderStatus(
			old_order.order_id,
			DELIVERY_ORDER_STATUS.ORDER_FINISHED_FAIL
		);
		(io as Socket).to('order_' + new_order.order_id).emit('order_status_change__delivery', new_order);
		await handleStockSync(new_order);
		await handlePaymentRefund(new_order);
		//TODO: handle on FE if needed.
		(io as Socket).to('order_' + new_order.order_id).emit('order_canceled', new_order);
		SocketStore.closeRoom(`order_${new_order.order_id}`);
		res.status(200).json(new_order);
	} catch (e) {
		console.error('Error canceling order', e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/order/dispatcher_revoke
 * @tag Delivery
 * @summary Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent
 * @description Cancel and if necessary refund an order
 * @bodyDescription Request body must include 'order_id' to identify the order.
 * @bodyContent {DispatcherRevokeOrderInput} application/json
 * @bodyRequired
 * @operationId dispatcherRevoke
 * @response 200 - Successful operation. Returns the updated Order.
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 401 - Unauthorized. Returns error message "Unauthorized" if the user is not authenticated.
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 * @prisma_model delivery_orders
 */
async function dispatcherRevoke(req: ValidatedRequest<DispatcherRevokeOrderInput>, res: Response): Promise<void> {
	const { order_id } = req.body;
	const dispatcher_user_id = req.user?.user_id;
	if (!dispatcher_user_id) {
		res.status(401).json({ error: 'Unauthorized' });
		return;
	}
	try {
		const old_order = await DeliveryOrderDao.getOrder(order_id, {
			include: { driver: true },
		});
		if (!old_order) {
			res.status(404).json({ error: 'Order not found' });
			return;
		}
		let updated_order = null;
		if (
			old_order.status === DELIVERY_ORDER_STATUS.MERCHANT_PREPARING ||
			old_order.status === DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
		) {
			await DeliveryOrderDao.removeDriverFromOrder(old_order.order_id);
			await DeliveryOrderDao.addTimelineEntry(old_order.order_id, DELIVERY_ORDER_STATUS.DISPATCHER_REVOKED, {
				dispatcher: dispatcher_user_id,
			});
			updated_order = await DeliveryOrderDao.updateOrderStatus(old_order.order_id, old_order.status);
		} else if (
			old_order.status === DELIVERY_ORDER_STATUS.DELIVERY_PICKED_UP ||
			old_order.status === DELIVERY_ORDER_STATUS.DELIVERY_IN_DELIVERY
		) {
			let new_location;
			if (old_order.driver?.location) {
				new_location = old_order.driver.location;
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
			if (UserSockets.get(old_order.driver?.user_id)) {
				UserSockets.get(old_order.driver?.user_id).emit('order_revoked__delivery', order_id);
			}
			SocketStore.removeUserFromRoom(old_order.driver?.user_id, `order_${old_order.order_id}`);
		}
		//TODO: handle extras for socket on FE if needed.
		(io as Socket).to('order_' + updated_order?.order_id).emit('order_status_change__delivery', updated_order);
		res.status(200).json(updated_order);
	} catch (e) {
		console.error('Error canceling order', e);
		res.status(500).json(e);
	}
}
/**
 * POST /delivery/orders/order/start
 * @tag Delivery
 * @summary Start an order and log promo analytics if applicable.
 * @description This endpoint is used to start an order. It logs promotional analytics based on query parameters.
 * @operationId startOrder
 * @bodyDescription The request body must include 'business_id' and 'is_daily_meal' to identify the business and order type.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Order started successfully. Returns the logged analytics data if applicable.
 * @responseContent {SuccessMessage} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 * @prisma_model delivery_orders
 * @prisma_model promo_analytics
 */
async function startOrder(
	req: ValidatedRequest<
		StartOrderInput,
		never,
		{
			ANALYTICS_PARAM_PROMO_WORDS?: string[];
			ANALYTICS_PARAM_PROMO_SECTION?: string;
			ANALYTICS_PARAM_PROMO_AD?: string;
		}
	>,
	res: Response
): Promise<void> {
	// This is where we should create order_id with added line item
	// Not possible right now, so let's just use it to log analytics
	try {
		const { ANALYTICS_PARAM_PROMO_WORDS, ANALYTICS_PARAM_PROMO_SECTION, ANALYTICS_PARAM_PROMO_AD } = req.query;
		let log: boolean = false;
		if (ANALYTICS_PARAM_PROMO_AD || ANALYTICS_PARAM_PROMO_SECTION || ANALYTICS_PARAM_PROMO_WORDS) {
			await logPromoAnalytics({
				business_id: req.body.business_id,
				user_id: req.user?.user_id,
				// order_id: req.body.order_id,
				analytics_type: req.body.is_daily_meal
					? ANALYTICS_TYPE.DAILY_MEAL_SUBSCRIPTION_START
					: ANALYTICS_TYPE.ORDER_START,
				promo_type: ANALYTICS_PARAM_PROMO_AD
					? PROMO_TYPE.AD
					: ANALYTICS_PARAM_PROMO_SECTION
						? PROMO_TYPE.SECTION
						: PROMO_TYPE.WORD,
				promo_ads_id: ANALYTICS_PARAM_PROMO_AD,
				promo_sections_id: ANALYTICS_PARAM_PROMO_SECTION,
				wordIds: ANALYTICS_PARAM_PROMO_WORDS,
			})
				.then((res) => {
					log = true;
					console.log(
						`Promo analytics ${req.body.is_daily_meal ? 'DAILY MEALS' : 'ORDER'} START success`,
						res
					);
				})
				.catch((err) =>
					console.warn(
						`Promo analytics ${req.body.is_daily_meal ? 'DAILY MEALS' : 'ORDER'} START failed`,
						err
					)
				);
		}
		res.status(200).json({ message: `Order started, analytics ${!log ? 'not ' : ''}logged` });
	} catch (e) {
		console.error('Error starting order', e);
		res.status(500).json(e);
	}
}

/**
 *
 * POST /delivery/orders/order/:order_id/image
 * @tag DeliveryOrders
 * @summary Set or replace delivery proof image for an order
 * @description Upserts a files row linked to delivery_orders via file_id/delivery_order_id.
 * @operationId setDeliveryImage
 * @bodyDescription Image info
 * @bodyContent {SetDeliveryImageInput} application/json
 * @bodyRequired
 * @response 200 - Image set
 * @responseContent {DeliveryOrderDetail} 200.application/json
 * @response 400 - Missing url or mime_type
 * @prisma_model files
 * @prisma_model delivery_orders
 */
export async function setDeliveryImage(
	req: ValidatedRequest<SetDeliveryImageInput, { order_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { order_id } = req.params;
		const { url, mime_type, public: isPublic } = req.body;
		if (!url || !mime_type) {
			res.status(400).json({ error: 'url and mime_type are required' });
			return;
		}
		const order = await DeliveryOrderDao.setDeliveryImage(order_id, url, mime_type, !!isPublic);
		res.json(order);
	} catch (e) {
		res.status(500).json({ error: (e as Error).message });
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
export { localConfirmMultipleOrdersReady };
export { startOrder };
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
	startOrder,
	setDeliveryImage,
};
