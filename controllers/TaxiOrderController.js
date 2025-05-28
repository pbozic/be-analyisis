import { randomUUID } from 'crypto';

import moment from 'moment';

import TaxiOrderDao from '../dao/TaxiOrder.js';
import DriverDao from '../dao/Driver.js';
import UsersDao from '../dao/User.js';
import FlagDao from '../dao/Flags.js';
import BusinessUsersDao from '../dao/BusinessUsers.js';
import CashbackDao from '../dao/Cashback.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import socket from '../socket.js';
import gApi from '../lib/gApis.js';
import TaxiHelper from '../lib/taxiHelpers.js';
import {
	TAXI_ORDER_STATUS,
	VEHICLE_CAPACITY,
	VEHICLE_CLASS,
	DRIVE_FEE,
	CARGO_TRANSFER_FEE,
	ORDER_TYPE,
	CREDITS,
	CASHBACK_SOURCE,
	USER_ROLE,
	SCORING_POINTS_REASON,
	FUNDS_TYPE,
	SERVICE_TYPE,
	VEHICLE_CATEGORY,
	ORDER_SUBTYPE,
} from '../lib/constants.js';
import { sendOrderNotifications } from '../lib/notifications.js';
import { range, todaysEarnings } from '../lib/helpersLib.js';
import prisma from '../prisma/prisma.js';
import BusinessDao from '../dao/Business.js';
import WalletFundsHelpers from '../lib/WalletFundsHelpers.js';
import { sendNotificationToUser } from '../lib/oneSignal.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { handleReferral } from '../lib/referralHelper.js';
import ScoringPointsDao from '../dao/ScoringPoints.js';
import LateEventsDao from '../dao/LateEvents.js';
import { createAndStorePaymentIntent, validatePaymentIntent, splitCutFromPaymentIntent } from '../lib/stripe.js';
import stripe from '../lib/stripe.js';
import { calculateTransferOrderPaymentCuts } from '../lib/taxiHelpers.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
const { UserSockets, io, SocketStore } = socket;
/**
 * GET /taxi/order/{orderId}
 * @tag Taxi
 * @summary Get order details.
 * @description This fetches the order details using the given order id.
 * @operationId getOrder
 * @pathParam {integer} orderId - The ID of the taxi order to retrieve
 * @response 200 - Successful operation. Returns order details in the response body.
 * @responseContent {Order} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getOrder(req, res) {
	const { order_id } = req.params;
	try {
		const order = await TaxiOrderDao.getOrder(order_id);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/active/:user_id/:type
 * @tag Taxi
 * @summary Get active taxi orders.
 * @description This fetches all completed orders for a specific user.
 * @operationId getCompletedDeliveryOrders
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getActiveTaxiOrders(req, res) {
	const { user_id, type } = req.params;
	try {
		const activeOrders = await TaxiOrderDao.getTaxiOrdersIfNotCompleted(user_id, type);
		if (activeOrders) {
			// Iterate over the list of active orders
			for (let i = 0; i < activeOrders.length; i++) {
				const activeOrder = activeOrders[i];
				if (activeOrder && activeOrder.status === TAXI_ORDER_STATUS.TAXI_ACCEPTED) {
					const driver = activeOrder.driver;
					const { result, distance, duration } = await gApi.distanceBetweenTwoPoints(
						activeOrder.pickup_location.coordinates,
						driver.location.coordinates,
						'driving',
						new Date(),
						'best_guess'
					);
					console.log('ROES:', result, result?.rows[0], result?.rows[0]?.elements[0]);
					console.log('ROES DISTANCE:', distance);
					console.log('ROES DURATION:', duration);
					if (
						result &&
						result.rows &&
						result.rows[0] &&
						result.rows[0].elements &&
						result.rows[0].elements[0]
					) {
						activeOrder.estimates.pickup_time_in_seconds = result.rows[0].elements[0].duration.value;
						const estimatedPickupTime = new Date();
						estimatedPickupTime.setSeconds(
							estimatedPickupTime.getSeconds() + result.rows[0].elements[0].duration.value
						);
						activeOrder.estimates.pickup_time = estimatedPickupTime;
					} else {
						if (duration && distance) {
							const estimatedPickupTime = new Date();
							estimatedPickupTime.setSeconds(estimatedPickupTime.getSeconds() + duration);
							activeOrder.estimates.pickup_time = estimatedPickupTime;
						}
						console.log('Invalid response structure from distanceBetweenTwoPoints');
						activeOrder.estimates.pickup_time_in_seconds = -1;
						activeOrder.estimates.pickup_time = null;
					}
					// Update the order with the new estimates
					await TaxiOrderDao.updateOrder(activeOrder.order_id, {
						estimates: activeOrder.estimates,
					});
					const userSocket = UserSockets.get(activeOrder.user_id);
					console.log('userSocket: ', userSocket);
					if (userSocket) {
						io.emit('active_order_updated__taxi', {
							...activeOrder,
						});
					}
				}
			}
		}
		res.status(200).json(activeOrders);
	} catch (e) {
		console.error('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/active/driver/:driver_id
 * @tag Taxi
 * @summary Get active taxi orders for a driver.
 * @description This fetches all active (not completed AND not pending) orders for a specific driver.
 * @operationId getActiveTaxiOrdersByDriverId
 * @pathParam {integer} driver_id - The ID of the driver to retrieve active orders for
 * @response 200 - Successful operation. Returns a list of active orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getActiveTaxiOrdersByDriverId(req, res) {
	const { driver_id } = req.params;
	try {
		const activeOrders = await TaxiOrderDao.getActiveOrdersByDriverId(driver_id);
		let pendingOrders = [];
		const sentOrders = await TaxiOrderDao.getAlreadySentOrdersByDriverId(driver_id);
		for (let sentOrder of sentOrders) {
			const order = await TaxiOrderDao.getOrder(sentOrder.order.order_id);
			if (order.status !== TAXI_ORDER_STATUS.PENDING) {
				continue;
			}
			console.info('Re-sending pending order: ', order.order_id, ' to driver: ', driver_id);
			pendingOrders.push(order);
		}
		res.status(200).json({
			active: activeOrders,
			pending: pendingOrders,
		});
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json({ message: 'Error something went wrong...' });
	}
}
/**
 * GET /taxi/orders/driver/:driver_id
 * @tag Taxi
 * @summary Get completed taxi orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedTaxiOrders
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getTaxiOrdersByDriverId(req, res) {
	const { driver_id } = req.params;
	try {
		const orders = await TaxiOrderDao.getOrders({
			where: {
				driver_id: driver_id,
			},
		});
		res.status(200).json(orders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/completed
 * @tag Taxi
 * @summary Get completed taxi orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedTaxiOrders
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCompletedTaxiOrders(req, res) {
	const { driver_id } = req.params;
	try {
		const completedOrders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
				driver_id: driver_id,
			},
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/canceled/:driver_id
 * @tag Taxi
 * @summary Get canceled taxi orders.
 * @description This fetches all canceled orders for a specific driver.
 * @operationId getCanceledTaxiOrders
 * @response 200 - Successful operation. Returns a list of canceled orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCanceledTaxiOrders(req, res) {
	const { driver_id } = req.params;
	try {
		const canceledOrders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_CANCELED,
				driver_id: driver_id,
			},
		});
		res.status(200).json(canceledOrders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/rejected/:driver_id
 * @tag Taxi
 * @summary Get rejected taxi orders.
 * @description This fetches all rejected orders for a specific driver.
 * @operationId getRejectedTaxiOrders
 * @response 200 - Successful operation. Returns a list of rejected orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getRejectedTaxiOrders(req, res) {
	const { driver_id } = req.params;
	try {
		const rejectedOrders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_REJECTED,
				driver_id: driver_id,
			},
		});
		res.status(200).json(rejectedOrders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders
 * @tag Taxi
 * @summary Get all taxi orders.
 * @description This fetches all taxi orders.
 * @operationId getTaxiOrders
 * @response 200 - Successful operation. Returns a list of all taxi orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getTaxiOrders(req, res) {
	try {
		const orders = await prisma.taxi_orders.findMany({
			include: {
				user: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				vehicle: true,
			},
		});
		// console.log("taxi orders", orders);
		res.status(200).json(orders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/completed/user/:user_id
 * @tag Taxi
 * @summary Get completed taxi orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedTaxiOrdersByUserId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCompletedTaxiOrdersByUserId(req, res) {
	const { user_id } = req.params;
	try {
		const completedOrders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
				user_id: user_id,
			},
			orderBy: {
				updated_at: 'desc',
			},
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/completed/business/:business_id
 * @tag Taxi
 * @summary Get completed taxi orders.
 * @description This fetches all completed orders for a business.
 * @operationId getCompletedTaxiOrdersByBusinessId
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCompletedTaxiOrdersByBusinessId(req, res) {
	const { business_id } = req.params;
	try {
		const business = await BusinessDao.getBusinessById(business_id);
		let userIds = business.business_users?.map((businessUser) => businessUser.user_id) || [];
		userIds = [...userIds, ...(business.business_clients?.map((client) => client.user_id) || [])];
		const completedOrders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
				user_id: { in: userIds },
			},
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/canceled/user/:user_id
 * @tag Taxi
 * @summary Get canceled taxi orders.
 * @description This fetches all canceled orders for a specific driver.
 * @operationId getCanceledTaxiOrders
 * @response 200 - Successful operation. Returns a list of canceled orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCanceledTaxiOrdersByUserId(req, res) {
	const { user_id } = req.params;
	try {
		const completedOrders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
				user_id: user_id,
			},
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
function preprocessOrderData(orderData) {
	const cleanedOrderData = {
		// user_id: orderData.user_id,
		// driver_id: orderData.driver.driver_id,
		// driver: orderData.driver,
		// vehicle_id: orderData.vehicle_id,
		allow_credits_usage: orderData.allow_credits_usage,
		cargo_preferences: orderData.cargo_preferences,
		creating_user_id: orderData.creating_user_id,
		customer_note: orderData.customer_note,
		delivery_location: orderData.delivery_location,
		estimates: orderData.estimates,
		flags: orderData.flags,
		first_name: orderData.first_name,
		last_name: orderData.last_name,
		parent_user_type: orderData.parent_user_type,
		payment: orderData.payment,
		pickup_location: orderData.pickup_location,
		preferences: orderData.preferences,
		route: orderData.route,
		status: orderData.status,
		subtype: orderData.subtype,
		telephone: orderData.telephone,
		type: orderData.type,
	};
	const prefs = cleanedOrderData.preferences;
	const is_repeat = !!prefs.repeat_ride && !prefs.repeat_ride.some((item) => item.value === 'do_not_repeat');
	if (prefs.vehicle_class === VEHICLE_CLASS.CARGO_VAN) {
		cleanedOrderData.payment = {
			...cleanedOrderData.payment,
			extras: {
				price:
					CARGO_TRANSFER_FEE.CARGO_FEE +
					cleanedOrderData.cargo_preferences?.additional_workers * CARGO_TRANSFER_FEE.ADDITIONAL_WORKER_FEE,
				type: 'CARGO_TRANSFER_FEE',
			},
		};
	}
	cleanedOrderData.is_scheduled = prefs.departure_date != null;
	cleanedOrderData.route = cleanedOrderData.route.map((r_i) => ({ ...r_i, id: randomUUID(), locked: false }));
	cleanedOrderData.route[0] = { ...cleanedOrderData.route[0], locked: true };
	if (cleanedOrderData.pickup_location) {
		cleanedOrderData.pickup_location = {
			address: cleanedOrderData.pickup_location.address,
			coordinates: cleanedOrderData.pickup_location.coordinates,
		};
	}
	if (cleanedOrderData.delivery_location) {
		cleanedOrderData.delivery_location = {
			address: cleanedOrderData.delivery_location.address,
			coordinates: cleanedOrderData.delivery_location.coordinates,
		};
	}
	let orderDataArray = [];
	if (is_repeat) {
		orderDataArray = generateOrdersForRepeatOrder(
			cleanedOrderData,
			prefs.repeat_ride,
			prefs.repeat_duration.length > 0 ? prefs.repeat_duration[0].value : 0
		);
	} else {
		orderDataArray.push(cleanedOrderData);
	}
	return orderDataArray;
}
async function generateVehicleTransferOrder(orderData) {
	let vehicleTransferOrderData = orderData.vehicle_transfer_order;
	vehicleTransferOrderData = {
		...vehicleTransferOrderData,
		status: 'PENDING',
		telephone: orderData.telephone,
		first_name: orderData.first_name,
		last_name: orderData.last_name,
		is_scheduled: !!orderData.preferences?.departure_date,
	};
	const vehicle_transfer_order = await TaxiOrderDao.createOrder({
		...vehicleTransferOrderData,
		user: {
			connect: {
				user_id: orderData.user_id,
			},
		},
	});
	return vehicle_transfer_order;
}
function subdivideOrder(vehicle_class, vehicle_category, n_adults, n_children) {
	let splits = [];
	let num_orders;
	let unassigned_adults = n_adults;
	let unassigned_children = n_children;
	let total_seats = unassigned_adults + unassigned_children;
	if (vehicle_class === VEHICLE_CLASS.ANY) {
		if (total_seats > 4) {
			let defaultNumSeats = vehicle_category === VEHICLE_CATEGORY.STANDARD ? 4 : 3;
			num_orders = Math.ceil(total_seats / defaultNumSeats);
		} else {
			num_orders = 1;
		}
	} else {
		num_orders = Math.ceil(total_seats / VEHICLE_CAPACITY[vehicle_class]);
	}
	console.log('num_orders', num_orders);
	for (let i = 0; i < num_orders; i++) {
		let availableSeats = VEHICLE_CAPACITY[vehicle_class];
		let adults_seated = 0;
		let children_seated = 0;
		for (let i = 0; i < availableSeats; i++) {
			if (unassigned_adults > 0) {
				adults_seated++;
				unassigned_adults--;
			} else if (unassigned_children > 0) {
				children_seated++;
				unassigned_children--;
			} else {
				break;
			}
		}
		splits.push({
			adults_seated,
			children_seated,
		});
	}
	return splits;
}
async function makeOrder(cleanOrderData, userId, parentOrderId, driverId, businessUserId, businessClientId) {
	const orderPayload = {
		...cleanOrderData,
		user: {
			connect: {
				user_id: userId,
			},
		},
	};
	if (parentOrderId) {
		orderPayload.parent_order = {
			connect: {
				order_id: parentOrderId,
			},
		};
	}
	if (driverId) {
		orderPayload.driver = {
			connect: {
				driver_id: driverId,
			},
		};
	}
	if (businessUserId) {
		orderPayload.business_users = {
			connect: {
				business_users_id: businessUserId,
			},
		};
	}
	if (businessClientId) {
		orderPayload.business_clients = {
			connect: {
				business_clients_id: businessClientId,
			},
		};
	}
	const order = await TaxiOrderDao.createOrder(orderPayload);
	return order;
}
async function buildOrder(cleanOrderData, userId, parentOrderId, driverId, businessUserId, businessClientId) {
	const { vehicle_class, vehicle_category, adults, children_under_140 } = cleanOrderData.preferences;
	const splits = subdivideOrder(vehicle_class, vehicle_category, adults, children_under_140);
	let firstOrderId = parentOrderId;
	for (let i = 0; i < splits.length; i++) {
		const { adults_seated, children_seated } = splits[i];
		cleanOrderData.preferences.adults = adults_seated;
		cleanOrderData.preferences.children_under_140 = children_seated;
		const order = await makeOrder(
			cleanOrderData,
			userId,
			parentOrderId,
			driverId,
			businessUserId,
			businessClientId
		);
		if (!firstOrderId) {
			firstOrderId = order.order_id;
		}
	}
	return firstOrderId;
}
async function requestTransferOrderPrice(req, res) {
	try {
		//TODO: update to use route
		const { route, vehicle_category } = req.body;
		let priceData = await TaxiHelper.calculateTransferRidePrice(route, vehicle_category);
		res.status(200).json(priceData);
	} catch (e) {
		console.error(e);
		res.status(500);
	}
}
async function cleanedCreateOrderHelper(orderData) {
	try {
		const user_id = orderData.user_id;
		const driver_id = orderData?.driver_id || orderData?.driver?.driver_id;
		const businessUserId = orderData.business_user?.business_users_id;
		const businessClientId = orderData.business_client?.business_clients_id;
		console.log('ORDER DATA DRIVER', orderData.driver);
		const cleanedOrderDataArray = preprocessOrderData(orderData);
		let firstOrderId = null;
		for (const cleanOrderData of cleanedOrderDataArray) {
			firstOrderId = await buildOrder(
				cleanOrderData,
				user_id,
				firstOrderId,
				driver_id,
				businessUserId,
				businessClientId
			);
		}
		const order = await TaxiOrderDao.getOrder(firstOrderId, {
			include: {
				grouped_orders: true,
			},
		});
		console.log('parentOrderId', firstOrderId);
		console.log('fetched grouped_orders', order.grouped_orders);
		if (order && order.preferences.vehicle_class === VEHICLE_CLASS.PRIVATE_DRIVER) {
			await generateVehicleTransferOrder(orderData);
		}
		return order;
	} catch (error) {
		console.error('TaxiOrderController', error);
		throw new Error('Error in cleanedCreateOrderHelper!');
	}
}
async function handlePaymentForTransferOrder(order, return_url) {
	try {
		let user = await UsersDao.getUserById(order.user_id);
		let payment_intent = null;
		//CALCULATE IN CENTS
		const PRICE_CENTS = Math.round(parseFloat(order.payment.price) * 100);
		const EXTRAS_COST_CENTS = Math.round(
			parseFloat(
				[VEHICLE_CLASS.PRIVATE_DRIVER, VEHICLE_CLASS.CARGO_VAN].includes(order.preferences?.vehicle_class)
					? order.payment.extras?.price ||
							order.cargo_preferences?.additional_workers * CARGO_TRANSFER_FEE.ADDITIONAL_WORKER_FEE +
								CARGO_TRANSFER_FEE.CARGO_FEE
					: 0
			) * 100
		);
		const TOTAL_COST_CENTS = PRICE_CENTS + EXTRAS_COST_CENTS;
		const INITIAL_PLATFORM_CUT = Math.round(PRICE_CENTS * DRIVE_FEE) + EXTRAS_COST_CENTS;
		const INITIAL_DRIVER_CUT = TOTAL_COST_CENTS - INITIAL_PLATFORM_CUT;
		//Handle automatic credits spending ~ use credits to pay platform cut first, to keep the driver cut mostly off stripe
		const reservedCredits = order.allow_credits_usage
			? await WalletFundsHelpers.reserveCreditsForOrder(
					user.user_id,
					TOTAL_COST_CENTS,
					order.order_id,
					FUNDS_TYPE.CREDITS_TAXI
				)
			: [];
		const CREDITS_AMOUNT_RESERVED = reservedCredits.reduce((sum, wf) => sum + wf.amount, 0);
		const DISCOUNTED_TOTAL_COST = TOTAL_COST_CENTS - CREDITS_AMOUNT_RESERVED;
		const PLATFORM_CREDIT_CUT_CENTS = Math.min(INITIAL_PLATFORM_CUT, CREDITS_AMOUNT_RESERVED);
		const DRIVER_CREDIT_CUT_CENTS =
			CREDITS_AMOUNT_RESERVED > PLATFORM_CREDIT_CUT_CENTS
				? CREDITS_AMOUNT_RESERVED - PLATFORM_CREDIT_CUT_CENTS
				: 0;
		order.payment.credit_discount = CREDITS_AMOUNT_RESERVED;
		order.payment.credit_discount_details = {
			taxi_driver: DRIVER_CREDIT_CUT_CENTS,
			platform: PLATFORM_CREDIT_CUT_CENTS,
		};
		order = await TaxiOrderDao.updateTaxiOrderPayment(order.order_id, order.payment);
		const PLATFORM_CUT_CENTS = INITIAL_PLATFORM_CUT - PLATFORM_CREDIT_CUT_CENTS;
		const DRIVER_CUT_CENTS = INITIAL_DRIVER_CUT - DRIVER_CREDIT_CUT_CENTS;
		// if(PLATFORM_CREDIT_CUT_CENTS>0) {
		// 	const transferedCreditsPlatform = await WalletFundsHelpers.transferReservedCreditsForOrder(user.user_id, "platform", PLATFORM_CREDIT_CUT_CENTS, order.order_id, SERVICE_TYPE.TAXI);
		// }
		// if(DRIVER_CREDIT_CUT_CENTS>0) {
		// 	const transferedCreditsDriver = await WalletFundsHelpers.transferReservedCreditsForOrder(user.user_id, driver_business.stripe_account_id, DRIVER_CREDIT_CUT_CENTS, order.order_id, SERVICE_TYPE.TAXI);
		// }
		const available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(user.user_id);
		if (DISCOUNTED_TOTAL_COST > 0) {
			if (order.payment.type === 'WALLET') {
				// handle wallet payment
				if (available_wallet_balances['TAXI'] + available_wallet_balances[null] < DISCOUNTED_TOTAL_COST / 100) {
					throw new Error('Insufficient funds');
				}
				// await UsersDao.removeWalletBalance(order.user_id, (DISCOUNTED_TOTAL_COST / 100), order.order_id, "taxi");
				const reservedFunds = await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
					user.user_id,
					DISCOUNTED_TOTAL_COST,
					order.order_id
				);
				order = await TaxiOrderDao.updateOrder(order.order_id, {
					payment: {
						...order.payment,
						status: 'PAID',
					},
				});
				order = await TaxiOrderDao.updateOrderStatus(order.order_id, TAXI_ORDER_STATUS.PENDING);
			}
			if (order.payment.type === 'FAMILY_WALLET') {
				// handle wallet payment
				let has_parent_user = user.parent_user;
				if (!has_parent_user) {
					throw new Error('User has no family wallet');
				}
				let parent_user = user.parent_user.parent_user;
				const parent_available_wallet_balances = WalletFundsDao.getAvailableWalletBalanceGroupedByType(
					parent_user.user_id
				);
				let is_businessUser = await BusinessUsersDao.getBusinessUserByUserId(parent_user.user_id);
				let allowance = user.parent_user.allowance?.amount_taxi;
				if (is_businessUser) {
					allowance = allowance * 2;
				}
				// todo is parent business user?
				if (allowance < DISCOUNTED_TOTAL_COST / 100) {
					throw new Error('Insufficient allowance');
				}
				//TODO: Should this allow usage of credits from parent?
				if (parent_available_wallet_balances[null] < DISCOUNTED_TOTAL_COST / 100) {
					throw new Error('Insufficient funds');
				}
				// await UsersDao.removeWalletBalance(parent_user.user_id, DISCOUNTED_TOTAL_COST, order.order_id, "taxi");
				const reservedFunds = await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
					parent_user.user_id,
					DISCOUNTED_TOTAL_COST,
					order.order_id
				);
				const updateData = {};
				if (order.type === ORDER_TYPE.TAXI) {
					updateData.amount_taxi = { decrement: DISCOUNTED_TOTAL_COST / 100 };
				} else {
					updateData.amount_transfer = { decrement: DISCOUNTED_TOTAL_COST / 100 };
				}
				await prisma.allowances.update({
					where: {
						group_user_id: user.parent_user.group_user_id,
					},
					data: updateData,
				});
				order = await TaxiOrderDao.updateOrder(order.order_id, {
					payment: {
						...order.payment,
						status: 'PAID',
					},
				});
				order = await TaxiOrderDao.updateOrderStatus(order.order_id, TAXI_ORDER_STATUS.PENDING);
			}
			if (order.payment.type === 'CARD' || order.payment.type === 'PLATFORM') {
				payment_intent = await stripe.createSplittablePayment(
					user.stripe_customer_id,
					order.order_id,
					order.payment.payment_method_id,
					DISCOUNTED_TOTAL_COST,
					order.type,
					{},
					return_url
				);
				console.info('payment_intent', payment_intent);
				order = await TaxiOrderDao.updateTaxiOrderPayment(order.order_id, {
					...order.payment,
					payment_intent_id: payment_intent.id,
				});
			}
		} else {
			order = await TaxiOrderDao.updateOrder(order.order_id, {
				payment: {
					...order.payment,
					status: 'PAID',
				},
			});
			order = await TaxiOrderDao.updateOrderStatus(order.order_id, TAXI_ORDER_STATUS.PENDING);
		}
		return payment_intent;
	} catch (e) {
		await TaxiOrderDao.updateOrderStatus(order.order_id, TAXI_ORDER_STATUS.CUSTOMER_CANCELED);
		await TaxiHelper.handlePaymentRefund(
			order.order_id,
			order.user_id,
			order.payment,
			order?.cargo_preferences?.additional_workers,
			order?.preferences?.vehicle_class,
			true
		);
		throw new Error('Error when handling payment: ', e);
	}
}
/**
 * POST /taxi/order
 * @tag Taxi
 * @summary Create a new taxi order.
 * @description This creates a new taxi order with the provided details from the request body. Returns the created order if successful.
 * @operationId createOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {TaxiOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the newly created order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function createOrder(req, res) {
	try {
		const { return_url } = req.body;
		delete req.body.return_url;
		let user = await UsersDao.getUserById(req.user.user_id);
		let orderData = {
			...req.body,
			user_id: req.body?.user_id || user.user_id,
			first_name: req.body?.first_name || user.first_name,
			last_name: req.body?.last_name || user.last_name,
			telephone: req.body?.telephone || user.telephone,
			is_scheduled: req.body.preferences?.departure_date,
		};
		let coordinates = orderData?.pickup_location?.coordinates || orderData?.route?.[0]?.coordinates;
		let region = null;
		if (coordinates) {
			const pointWKT = `SRID=4326;POINT(${coordinates.longitude} ${coordinates.latitude})`;
			region = await prisma.$queryRaw`
			SELECT 
				municipalities_id,
				name,
				requires_license
			FROM municipalities
			WHERE ST_Contains(geom_generated, ST_GeomFromText(${pointWKT}))
			LIMIT 1;
			`;
		}
		console.log('REGION', region);
		if (region) {
			orderData.estimates = {
				...orderData.estimates,
				region_id: region[0].municipalities_id,
				region: region[0].name,
				region_license: region[0].requires_license,
			};
		}
		let business_client;
		if (orderData.subtype === ORDER_SUBTYPE.CREATED_BY_BUSINESS && orderData?.business_user) {
			const businessClient = orderData?.business_client;
			if (!businessClient?.business_clients_id && businessClient?.telephone) {
				business_client = await prisma.business_clients.create({
					data: {
						first_name: businessClient.first_name,
						last_name: businessClient.last_name,
						telephone: businessClient.telephone,
						telephone_number: businessClient.telephone_number,
						telephone_code: businessClient.telephone_code,
						email: businessClient.email,
						business: {
							connect: {
								business_id: orderData?.business_user?.business_id,
							},
						},
					},
				});
			} else {
				business_client = businessClient;
			}
		}
		orderData.business_client = business_client;
		console.info('USER TELEPHONE', orderData.telephone);
		console.info('USER ID', orderData.user_id);
		console.info('dep date', req.body.preferences?.departure_date);
		let flags = await FlagDao.getFlags();
		let flagsObj = {};
		flags.map((flag) => {
			flagsObj[flag.name] = flag.status;
		});
		orderData.flags = flagsObj;
		orderData.status = TAXI_ORDER_STATUS.PENDING;
		if (orderData.type === ORDER_TYPE.TRANSFER_PRIVATE) {
			const { route, preferences } = orderData;
			let { price } = await TaxiHelper.calculateTransferRidePrice(route, preferences.vehicle_category);
			if (price !== orderData.payment.price) {
				console.error(`Price mismatch, got ${orderData.payment.price}, calculated ${price}`);
				throw new Error('Price mismatch');
			}
			if (orderData.payment.price >= 25) {
				orderData.status = TAXI_ORDER_STATUS.AWAITING_PAYMENT;
				if (
					VEHICLE_CAPACITY[orderData.preferences.vehicle_class] <
					orderData.preferences.adults + orderData.preferences.children_under_140
				) {
					throw new Error('Number of requested seats exceeds vehicle capacity!');
				}
				if (
					!!orderData.preferences.repeat_ride &&
					!orderData.preferences.repeat_ride.some((item) => item.value === 'do_not_repeat')
				) {
					throw new Error(`Repeating orders not allowed for transfer orders above ${25}€!`);
				}
				let user = await UsersDao.getUserById(orderData.user_id);
				const customer_acc = user.stripe_customer_id;
				const available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(
					orderData.user_id
				);
				if (orderData.payment.type === 'WALLET') {
					const TOTAL_PRICE_CENT = Math.round(orderData.payment.price * 100);
					if (
						available_wallet_balances[SERVICE_TYPE.TAXI] + available_wallet_balances[null] <
						TOTAL_PRICE_CENT / 100
					) {
						throw new Error('Insufficient funds');
					}
				}
				if (orderData.payment.type === 'CARD') {
					if (!customer_acc) {
						throw new Error('Missing stripe_customer_id');
					}
				}
			}
		}
		let order = await cleanedCreateOrderHelper(orderData);
		//TODO: payment management for order
		let payment_intent =
			orderData.status === TAXI_ORDER_STATUS.AWAITING_PAYMENT
				? await handlePaymentForTransferOrder(order, return_url)
				: null;
		console.info('ORDER: ', order);
		console.info('PAYMENT_INTENT: ', payment_intent);
		if (!order?.creating_user_id) SocketStore.addUserToRoom(req.user.user_id, 'order_' + order.order_id);
		//console.log("create taxi order", order)
		const userSocket = UserSockets.get(order.user_id);
		if (userSocket && order.creating_user_id && order.creating_user_id !== order.user_id) {
			console.log('userSocket exists!');
			userSocket.emit('child_order_created__taxi', {
				...order,
			});
		}
		res.status(200).json({
			...order,
			payment_intent,
		});
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
function getDayIndex(dayName) {
	// Map day names to their corresponding indices
	const daysOfWeek = {
		Sunday: 0,
		Monday: 1,
		Tuesday: 2,
		Wednesday: 3,
		Thursday: 4,
		Friday: 5,
		Saturday: 6,
	};
	return daysOfWeek[dayName]; // Return the index of the day
}
function generateOrdersForRepeatOrder(orderData, repeatData, repeatDuration) {
	try {
		console.log('rd', repeatDuration);
		const orders = [];
		const currentDate = new Date();
		// Get the hours and minutes from the departure time
		const departureTime = new Date(orderData.preferences.departure_time);
		const departureHours = departureTime.getHours();
		const departureMinutes = departureTime.getMinutes();
		// Get current week's day number
		const currentDay = currentDate.getDay();
		for (let week = 0; week < repeatDuration; week++) {
			for (let day of repeatData) {
				console.log('day', day);
				const dayIndex = getDayIndex(day.value); // Get day index from day name
				console.log('dayIndex', dayIndex);
				const daysUntilNextOccurrence = ((dayIndex - currentDay + 7) % 7) + week * 7; // Calculate days until the next occurrence of this weekday
				console.log('daysUntilNextOccurrence', dayIndex);
				const orderDate = new Date(currentDate); // Create a copy of the current date
				console.log('orderDate', orderDate);
				orderDate.setDate(orderDate.getDate() + daysUntilNextOccurrence); // Add the days to reach the next occurrence of this day
				// Set the time for the order
				console.log('orderDate added', orderDate);
				orderDate.setHours(departureHours);
				orderDate.setMinutes(departureMinutes);
				orderDate.setSeconds(0);
				orderDate.setMilliseconds(0);
				// Format the date and time
				const formattedDepartureDate = new Intl.DateTimeFormat('en-US', {
					day: '2-digit',
					month: 'long',
					year: 'numeric',
				}).format(orderDate);
				const formattedDepartureTime = orderDate.toISOString().slice(0, -1);
				// Generate an order for this day
				let order = {
					...orderData,
					preferences: {
						...orderData.preferences,
						departure_date: formattedDepartureDate, // Format as "DD MMMM YYYY"
						departure_time: formattedDepartureTime, // Format as "YYYY-MM-DDTHH:mm:ss.sss"
					},
				};
				orders.push(order); // Add to orders list
			}
		}
		return orders; // Return generated orders
	} catch (error) {
		console.log('TaxiOrderController', error);
		throw new Error(error);
	}
}
/**
 * POST /taxi/dispatch-order
 * @tag Taxi
 * @summary Create a new delivery order as dispatch.
 * @description This creates a new delivery order with the provided details from the request body. Returns the created order if successful.
 * @operationId createOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {DeliveryOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the newly created order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function createDispatchOrder(req, res) {
	try {
		let orderData = {
			...req.body,
			status: 'PENDING',
			user_id: req.user.user_id,
			telephone: req.body.telephone,
		};
		let order = await cleanedCreateOrderHelper(orderData);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/accept
 * @tag Taxi
 * @summary Accept a taxi order.
 * @description Accepts taxi order with the provided details from the request body. Returns the accepted order if successful.
 * @operationId acceptOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {TaxiOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the accepted order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function acceptOrder(req, res) {
	const { order_id, user } = req.body;
	try {
		let driver = await DriverDao.getDriverById(user.driver.driver_id);
		if (!driver.online) {
			return res.status(400).json({ error: 'Driver is offline.', errorType: 'ERR_DRIVER_OFFLINE' });
		} else if (driver.on_order) {
			return res.status(400).json({ error: 'Driver is already on order.', errorType: 'ERR_DRIVER_ON_ORDER' });
		}
		let order = await TaxiOrderDao.getOrder(order_id);
		if (order.status === TAXI_ORDER_STATUS.CUSTOMER_CANCELED) {
			return res
				.status(400)
				.json({ error: 'Order has been canceled by customer.', errorType: 'ERR_ORDER_ALREADY_CANCELED' });
		} else if (order.status !== TAXI_ORDER_STATUS.PENDING) {
			return res
				.status(400)
				.json({ error: 'Order is already accepted.', errorType: 'ERR_ORDER_ALREADY_ACCEPTED' });
		}
		if (order.is_scheduled) {
			let isSent = await TaxiOrderDao.isOrderSent(order.order_id, user.driver);
			if (!isSent) {
				await TaxiOrderDao.createOrderSent(order.order_id, user.driver);
			}
		}
		await TaxiOrderDao.acceptOrder(order, user);
		driver.vehicle = driver.current_vehicle;
		order.driver = driver;
		const { result, distance, duration } = await gApi.distanceBetweenTwoPoints(
			order.pickup_location.coordinates,
			driver.location.coordinates,
			'driving',
			new Date(),
			'best_guess'
		);
		console.log('ROES:', result, result?.rows[0], result?.rows[0]?.elements[0]);
		console.log('ROES DISTANCE:', distance);
		console.log('ROES DURATION:', duration);
		if (!order.estimates) order.estimates = {};
		if (result && result.rows && result.rows[0] && result.rows[0].elements && result.rows[0].elements[0]) {
			order.estimates.pickup_time_in_seconds = result.rows[0].elements[0].duration.value;
			const estimatedPickupTime = new Date();
			estimatedPickupTime.setSeconds(
				estimatedPickupTime.getSeconds() + result.rows[0].elements[0].duration.value
			);
			order.estimates.pickup_time = estimatedPickupTime;
		} else {
			if (duration && distance) {
				const estimatedPickupTime = new Date();
				estimatedPickupTime.setSeconds(estimatedPickupTime.getSeconds() + duration);
				order.estimates.pickup_time = estimatedPickupTime;
			}
			console.log('Invalid response structure from distanceBetweenTwoPoints');
			order.estimates.pickup_time_in_seconds = -1;
			order.estimates.pickup_time = null;
		}
		order = await TaxiOrderDao.updateOrder(order.order_id, {
			estimates: order.estimates,
		});
		order.driver = driver;
		let userSocket = UserSockets.get(order.user_id);
		console.log('LALA, user_id', order.user_id);
		console.log('order accepted', order);
		if (userSocket) {
			io.to('order_' + order.order_id).emit('order_accepted__taxi', order);
			io.emit('driver_unavailable', order.driver_id);
			console.log('userSocket', userSocket);
		}
		SocketStore.addUserToRoom(driver.user_id, `order_${order.order_id}`);
		if (order.type !== ORDER_TYPE.VEHICLE_TRANSFER_COMBO)
			sendOrderNotifications(
				order?.user,
				driver?.user,
				order.user_id,
				driver.driver_id,
				TAXI_ORDER_STATUS.TAXI_ACCEPTED
			);
		await TaxiHelper.revokeTaxiOrderFromOtherDrivers(order.order_id, user.driver.driver_id);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/complete
 * @tag Taxi
 * @summary Complete a taxi order.
 * @description Completes a taxi order with the provided order ID from the request body. Returns the completed order if successful and emits a 'driver_available' event.
 * @operationId completeOrder
 * @bodyDescription Request body must include 'order_id'.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the completed order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Console logs the error message and returns it in the response.
 */
async function completeOrder(req, res) {
	try {
		let order = await TaxiOrderDao.getOrder(req.body.order_id);
		let driver = await DriverDao.getDriverById(order.driver_id);
		let driver_business = await BusinessDao.getBusinessById(driver.business_id);
		//assign penalties for being late
		const timeline_first_waiting_timestamp = order.timeline.find(
			(entry) => entry.status === TAXI_ORDER_STATUS.TAXI_WAITING
		)?.location?.timestamp;
		const timeline_accept_timestamp = order.timeline.findLast(
			(entry) => entry.status === TAXI_ORDER_STATUS.TAXI_ACCEPTED
		)?.location?.timestamp;
		const estimated_pickup_timestamp = order.estimates?.pickup_time;
		if (estimated_pickup_timestamp && timeline_accept_timestamp && timeline_first_waiting_timestamp) {
			const expected_travel_seconds_to_pickup = moment(estimated_pickup_timestamp).diff(
				moment(timeline_accept_timestamp),
				'seconds'
			);
			const late_seconds = moment(timeline_first_waiting_timestamp).diff(
				moment(estimated_pickup_timestamp),
				'seconds'
			);
			console.log(`pickup was ${late_seconds} seconds ${late_seconds > 0 ? 'late' : 'early or on time'}.`);
			let allowed_leeway = order.is_scheduled ? 60 * 10 : Math.max(expected_travel_seconds_to_pickup, 60 * 5);
			if (late_seconds > allowed_leeway) {
				await LateEventsDao.createLateEvent(
					driver.business_id,
					driver.user_id,
					null,
					order.order_id,
					late_seconds - allowed_leeway
				);
			}
		} else {
			await ScoringPointsDao.createScoringPoints(
				order.business_id,
				driver.user_id,
				null,
				order.order_id,
				0,
				false,
				SCORING_POINTS_REASON.INSUFFICIENT_DATA
			);
		}
		io.emit('driver_available', driver);
		let user = order.user;
		if (order.type === ORDER_TYPE.VEHICLE_TRANSFER_COMBO) {
			const l10nText = getLocalisedTexts('USER_NOTIFICATIONS', order.user);
			const l10nTextHeading = getLocalisedTexts('HEADING', order.user);
			await sendNotificationToUser(l10nTextHeading?.completed, l10nText?.vehicleTransferCompleted, order.user_id);
			order = await TaxiOrderDao.completeOrder(req.body.order_id);
		} else {
			const orderingUser = !order.creating_user_id ? user : await UsersDao.getUserById(order.creating_user_id);
			let TOTAL_COST_CENTS = 0;
			if (order.type === ORDER_TYPE.TRANSFER_PRIVATE && order.payment.price >= 25) {
				//Handle expensive transfer payments
				const { DRIVER_CREDIT_CUT, PLATFORM_CREDIT_CUT, DRIVER_CUT, PLATFORM_CUT } =
					await calculateTransferOrderPaymentCuts(order);
				TOTAL_COST_CENTS = DRIVER_CREDIT_CUT + PLATFORM_CREDIT_CUT + DRIVER_CUT + PLATFORM_CUT;
				if (PLATFORM_CREDIT_CUT > 0) {
					const transferedCreditsPlatform = await WalletFundsHelpers.transferReservedCreditsForOrder(
						user.user_id,
						'platform',
						PLATFORM_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.TAXI
					);
				}
				if (DRIVER_CREDIT_CUT > 0) {
					const transferedCreditsDriver = await WalletFundsHelpers.transferReservedCreditsForOrder(
						user.user_id,
						driver_business.stripe_account_id,
						DRIVER_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.TAXI
					);
				}
				if (order.payment.type === 'CARD' || order.payment.type === 'PLATFORM') {
					if (order.payment.payment_intent_id) {
						const paymentIntent = await stripe.client.paymentIntents.retrieve(
							order.payment.payment_intent_id
						);
						const transferDriver = stripe.splitCutFromPaymentIntent(
							paymentIntent,
							driver_business.stripe_account_id,
							DRIVER_CUT
						);
					}
				} else if (order.payment.type === 'WALLET') {
					if (PLATFORM_CUT > 0) {
						const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							order.user_id,
							'platform',
							PLATFORM_CUT,
							order.order_id,
							SERVICE_TYPE.TAXI
						);
					}
					if (DRIVER_CUT > 0) {
						const transfersForDeliveryDriver = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							order.user_id,
							driver_business.stripe_account_id,
							DRIVER_CUT,
							order.order_id,
							SERVICE_TYPE.TAXI
						);
					}
				} else if (order.payment.type === 'FAMILY_WALLET') {
					// handle wallet payment
					let has_parent_user = user.parent_user;
					if (!has_parent_user) {
						throw new Error('User has no family wallet');
					}
					let parent_user = user.parent_user.parent_user;
					const parent_available_wallet_balances = WalletFundsDao.getAvailableWalletBalanceGroupedByType(
						parent_user.user_id
					);
					let allowance = user.parent_user.allowance?.amount_taxi_wallet;
					if (!allowance) {
						allowance = user.parent_user.allowance?.amount_any_wallet;
					}
					if (allowance < TOTAL_COST_CENTS / 100) {
						throw new Error('Insufficient allowance');
					}
					//TODO: Should this allow usage of credits from parent?
					if (parent_available_wallet_balances[null] < TOTAL_COST_CENTS / 100) {
						throw new Error('Insufficient funds');
					}
					let parent_user_id = user.parent_user.parent_user_id;
					if (PLATFORM_CUT > 0) {
						const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							parent_user_id,
							'platform',
							PLATFORM_CUT,
							order.order_id,
							SERVICE_TYPE.TAXI
						);
					}
					if (DRIVER_CUT > 0) {
						const transfersForDriver = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							parent_user_id,
							driver_business.stripe_account_id,
							DRIVER_CUT,
							order.order_id,
							SERVICE_TYPE.TAXI
						);
					}
				}
			} else {
				//handle regular payments
				//CALCULATE IN CENTS
				const PRICE_CENTS = Math.round(parseFloat(order.payment.price) * 100);
				const EXTRAS_COST_CENTS = Math.round(
					parseFloat(
						[VEHICLE_CLASS.PRIVATE_DRIVER, VEHICLE_CLASS.CARGO_VAN].includes(
							order.preferences?.vehicle_class
						)
							? order.payment.extras?.price ||
									order.cargo_preferences?.additional_workers *
										CARGO_TRANSFER_FEE.ADDITIONAL_WORKER_FEE +
										CARGO_TRANSFER_FEE.CARGO_FEE
							: 0
					) * 100
				);
				TOTAL_COST_CENTS = PRICE_CENTS + EXTRAS_COST_CENTS;
				const INITIAL_PLATFORM_CUT = Math.round(PRICE_CENTS * DRIVE_FEE) + EXTRAS_COST_CENTS;
				const INITIAL_DRIVER_CUT = TOTAL_COST_CENTS - INITIAL_PLATFORM_CUT;
				//Handle automatic credits spending ~ use credits to pay platform cut first, to keep the driver cut mostly off stripe
				const reservedCredits = order.allow_credits_usage
					? await WalletFundsHelpers.reserveCreditsForOrder(
							user.user_id,
							TOTAL_COST_CENTS,
							order.order_id,
							FUNDS_TYPE.CREDITS_TAXI
						)
					: [];
				const CREDITS_AMOUNT_RESERVED = reservedCredits.reduce((sum, wf) => sum + wf.amount, 0);
				const DISCOUNTED_TOTAL_COST = TOTAL_COST_CENTS - CREDITS_AMOUNT_RESERVED;
				const PLATFORM_CREDIT_CUT_CENTS = Math.min(INITIAL_PLATFORM_CUT, CREDITS_AMOUNT_RESERVED);
				const DRIVER_CREDIT_CUT_CENTS =
					CREDITS_AMOUNT_RESERVED > PLATFORM_CREDIT_CUT_CENTS
						? CREDITS_AMOUNT_RESERVED - PLATFORM_CREDIT_CUT_CENTS
						: 0;
				order.payment.credit_discount = CREDITS_AMOUNT_RESERVED;
				order.payment.credit_discount_details = {
					taxi_driver: DRIVER_CREDIT_CUT_CENTS,
					platform: PLATFORM_CREDIT_CUT_CENTS,
				};
				order = await TaxiOrderDao.updateTaxiOrderPayment(order.order_id, order.payment);
				const PLATFORM_CUT_CENTS = INITIAL_PLATFORM_CUT - PLATFORM_CREDIT_CUT_CENTS;
				const DRIVER_CUT_CENTS = INITIAL_DRIVER_CUT - DRIVER_CREDIT_CUT_CENTS;
				if (PLATFORM_CREDIT_CUT_CENTS > 0) {
					const transferedCreditsPlatform = await WalletFundsHelpers.transferReservedCreditsForOrder(
						user.user_id,
						'platform',
						PLATFORM_CREDIT_CUT_CENTS,
						order.order_id,
						SERVICE_TYPE.TAXI
					);
				}
				if (DRIVER_CREDIT_CUT_CENTS > 0) {
					const transferedCreditsDriver = await WalletFundsHelpers.transferReservedCreditsForOrder(
						user.user_id,
						driver_business.stripe_account_id,
						DRIVER_CREDIT_CUT_CENTS,
						order.order_id,
						SERVICE_TYPE.TAXI
					);
				}
				const businessUser =
					order.payment?.subtype === 'BUSINESS'
						? await BusinessUsersDao.getBusinessUserByUserId(order.creating_user_id)
						: order.business_users;
				const available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(
					businessUser ? businessUser.user_id : user.user_id
				);
				if (DISCOUNTED_TOTAL_COST > 0) {
					//TODO: add order.payment.type === 'BUSINESS_WALLET' instead of order.payment.subtype
					if (order.payment.type === 'WALLET') {
						// handle wallet payment
						if (
							available_wallet_balances['TAXI'] + available_wallet_balances[null] <
							DISCOUNTED_TOTAL_COST / 100
						) {
							throw new Error('Insufficient funds');
						}
						let any;
						if (businessUser) {
							let allowance = businessUser.allowance?.amount_taxi_wallet;
							if (!allowance) {
								allowance = businessUser.allowance?.amount_any_wallet;
								any = true;
							}
							if (allowance < DISCOUNTED_TOTAL_COST / 100) {
								throw new Error('Insufficient allowance');
							}
						}
						// await UsersDao.removeWalletBalance(order.user_id, (DISCOUNTED_TOTAL_COST / 100), order.order_id, "taxi");
						const reservedFunds = await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
							businessUser ? businessUser.user_id : user.user_id,
							DISCOUNTED_TOTAL_COST,
							order.order_id
						);
						if (businessUser) {
							const updateData = {};
							if (any) {
								updateData.amount_any_wallet = { decrement: DISCOUNTED_TOTAL_COST / 100 };
							} else {
								if (order.type === ORDER_TYPE.TAXI) {
									updateData.amount_taxi_wallet = { decrement: DISCOUNTED_TOTAL_COST / 100 };
								} else {
									updateData.amount_transfer_wallet = { decrement: DISCOUNTED_TOTAL_COST / 100 };
								}
							}
							await prisma.allowances.update({
								where: {
									business_users_id: businessUser.business_users_id,
								},
								data: updateData,
							});
						}
						//Only transfer money to driver since we already have the wallet money?
						// const transfer = await stripe.transferToConnectedAccount(DRIVER_CUT_AMOUNT, driver_business.stripe_account_id);
						const transfersForDriver = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							businessUser ? businessUser.user_id : user.user_id,
							driver_business.stripe_account_id,
							DRIVER_CUT_CENTS,
							order.order_id,
							SERVICE_TYPE.TAXI
						);
						const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							businessUser ? businessUser.user_id : user.user_id,
							'platform',
							PLATFORM_CUT_CENTS,
							order.order_id,
							SERVICE_TYPE.TAXI
						);
					} else if (order.payment.type === 'FAMILY_WALLET') {
						// handle wallet payment
						let has_parent_user = user.parent_user;
						if (!has_parent_user) {
							throw new Error('User has no family wallet');
						}
						let parent_user = user.parent_user.parent_user;
						const parent_available_wallet_balances = WalletFundsDao.getAvailableWalletBalanceGroupedByType(
							parent_user.user_id
						);
						let any;
						let allowance = user.parent_user.allowance?.amount_taxi_wallet;
						if (!allowance) {
							allowance = user.parent_user.allowance?.amount_any_wallet;
							any = true;
						}
						if (allowance < DISCOUNTED_TOTAL_COST / 100) {
							throw new Error('Insufficient allowance');
						}
						//TODO: Should this allow usage of credits from parent?
						if (parent_available_wallet_balances[null] < DISCOUNTED_TOTAL_COST / 100) {
							throw new Error('Insufficient funds');
						}
						// await UsersDao.removeWalletBalance(parent_user.user_id, DISCOUNTED_TOTAL_COST, order.order_id, "taxi");
						const reservedFunds = await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
							parent_user.user_id,
							DISCOUNTED_TOTAL_COST,
							order.order_id
						);
						const updateData = {};
						if (any) {
							updateData.amount_any_wallet = { decrement: DISCOUNTED_TOTAL_COST / 100 };
						} else {
							if (order.type === ORDER_TYPE.TAXI) {
								updateData.amount_taxi_wallet = { decrement: DISCOUNTED_TOTAL_COST / 100 };
							} else {
								updateData.amount_transfer_wallet = { decrement: DISCOUNTED_TOTAL_COST / 100 };
							}
						}
						await prisma.allowances.update({
							where: {
								group_user_id: user.parent_user.group_user_id,
							},
							data: updateData,
						});
						const transfersForDriver = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							parent_user.user_id,
							driver_business.stripe_account_id,
							DRIVER_CUT_CENTS,
							order.order_id,
							SERVICE_TYPE.TAXI
						);
						const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
							parent_user.user_id,
							'platform',
							PLATFORM_CUT_CENTS,
							order.order_id,
							SERVICE_TYPE.TAXI
						);
					} else if (businessUser && order.payment.type === 'PURCHASE_ORDER') {
						let any;
						let allowance = businessUser.allowance?.amount_taxi_purchase_order;
						if (!allowance) {
							allowance = businessUser.allowance?.amount_any_purchase_order;
							any = true;
						}
						if (allowance < DISCOUNTED_TOTAL_COST / 100) {
							throw new Error('Insufficient allowance');
						}
						const updateData = {};
						if (any) {
							updateData.amount_any_purchase_order = { decrement: DISCOUNTED_TOTAL_COST / 100 };
						} else {
							if (order.type === ORDER_TYPE.TAXI) {
								updateData.amount_taxi_purchase_order = { decrement: DISCOUNTED_TOTAL_COST / 100 };
							} else {
								updateData.amount_transfer_purchase_order = { decrement: DISCOUNTED_TOTAL_COST / 100 };
							}
						}
						await prisma.allowances.update({
							where: {
								business_users_id: businessUser.business_users_id,
							},
							data: updateData,
						});
					}
				}
				order = await TaxiOrderDao.updateOrder(order.order_id, {
					payment: {
						...order.payment,
						status: 'PAID',
					},
				});
			}
			if (orderingUser.user_role === USER_ROLE.PERSONAL) {
				let cashbackAmount =
					TOTAL_COST_CENTS >= CREDITS.CASHBACK_THRESHOLD_TAXI ? Math.floor(TOTAL_COST_CENTS / 100) : 1;
				const cashback = await CashbackDao.createCashback({
					user: { connect: { user_id: orderingUser.user_id } },
					amount: Math.round(cashbackAmount),
					type: ORDER_TYPE.TAXI,
					source: CASHBACK_SOURCE.ORDER,
					description: `Cashback for taxi order ${order.order_id}`,
					taxi_order: { connect: { order_id: order.order_id } },
				});
				if (cashback) {
					const pendingCashbacks = await CashbackDao.getPendingUserCashbackByType(
						orderingUser.user_id,
						ORDER_TYPE.TAXI
					);
					const wheels = pendingCashbacks.reduce((sum, cb) => sum + cb.amount, 0);
					if (wheels >= CREDITS.CASHBACK_CONVERSION_TAXI) {
						const remainder = wheels % CREDITS.CASHBACK_CONVERSION_TAXI;
						if (remainder > 0) {
							await CashbackDao.createCashback({
								user: { connect: { user_id: orderingUser.user_id } },
								amount: Math.round(remainder),
								type: ORDER_TYPE.TAXI,
								source: CASHBACK_SOURCE.CONVERSION,
								description: `Cashback remainder after conversion to credit`,
							});
						}
						const expiryDate = new Date();
						expiryDate.setDate(expiryDate.getDate() + 30);
						expiryDate.setHours(23, 59, 59, 999);
						if (wheels > 0) {
							await WalletFundsDao.convertCashbacksToCredit(
								{
									user: { connect: { user_id: orderingUser.user_id } },
									amount: 100,
									type: FUNDS_TYPE.CREDITS_TAXI,
								},
								pendingCashbacks
							);
						}
					}
				}
			}
			order = await TaxiOrderDao.completeOrder(req.body.order_id);
			await handleReferral(orderingUser.user_id);
		}
		// io.to("order_" + order.order_id).emit('order_status_change__taxi', order);
		io.to('order_' + order.order_id).emit('order_completed__taxi', order);
		SocketStore.closeRoom('order_' + order.order_id);
		console.log('order_completed__taxi ', req.body.order_id);
		//io.emit("driver_available", driver);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/status
 * @tag Taxi
 * @summary Update a taxi order's status.
 * @description Updates the status of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateOrderStatus
 * @bodyDescription Request body must include 'order_id' to identify the order and 'status' to specify the new status.
 * @bodyContent {UpdateOrderStatusRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderStatus(req, res) {
	try {
		let order = await TaxiOrderDao.updateOrderStatus(req.body.order_id, req.body.status);
		io.to('order_' + order.order_id).emit('order_status_change__taxi', order);
		let user_id = order?.user_id;
		let driver_id = order?.driver?.driver_id;
		let user = await UsersDao.getUserById(user_id);
		let driver = await DriverDao.getDriverById(driver_id);
		if (order.is_scheduled && !driver.on_order) {
			await prisma.drivers.update({
				where: {
					driver_id: driver_id,
				},
				data: {
					on_order: true,
				},
			});
		}
		if (
			order.type !== ORDER_TYPE.VEHICLE_TRANSFER_COMBO &&
			order.status !== TAXI_ORDER_STATUS.TAXI_DRIVING && //Dont send TAXI_DRIVING notification
			// !(//only send "your driver is on his way" notification once in order lifespan
			// 	order.status===TAXI_ORDER_STATUS.TAXI_DRIVING &&
			// 	order?.timeline?.some(entry=>entry.status===TAXI_ORDER_STATUS.TAXI_DRIVING)
			// ) &&
			!(
				//only send "your driver is waiting for you" notification once in order lifespan
				(
					order.status === TAXI_ORDER_STATUS.TAXI_WAITING &&
					order?.timeline?.some((entry) => entry.status === TAXI_ORDER_STATUS.TAXI_WAITING)
				)
			)
		)
			sendOrderNotifications(user, driver?.user, user_id, driver_id, req.body.status);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/update/preferences
 * @tag Taxi
 * @summary Update a taxi order's vehicle preferences.
 * @description Updates the vehicle preferences of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateTaxiOrderPreferences
 * @bodyDescription Request body must include 'order_id' to identify the order and 'vehicle_category' and 'vehicle_class' to specify the new vehicle preferences.
 * @bodyContent {UpdateOrderVehiclePreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderPreferences(req, res) {
	try {
		const { order_id, vehicle_category, vehicle_class, ride_requirements } = req.body;
		// Fetch the current order details
		let order = await TaxiOrderDao.getOrder(order_id);
		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}
		// Update only the vehicle category and vehicle class in the order's preferences
		const updatedPreferences = {
			...order.preferences,
			vehicle_category: vehicle_category,
			vehicle_class: vehicle_class,
			ride_requirements: ride_requirements,
		};
		order = await TaxiOrderDao.updateOrder(order.order_id, {
			preferences: updatedPreferences,
		});
		io.to('order_' + order.order_id).emit('order_preferences_change__taxi', order);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json({ message: 'Server error', error: e });
	}
}
/**
 * POST /taxi/order/cancel
 * @tag Taxi
 * @summary Cancel a taxi order.
 * @description Cancels a taxi order with the provided order ID, status, and cancellation reason from the request body. Returns the cancelled order if successful and emits a 'order_cancelled' event.
 * @operationId cancelOrder
 * @bodyDescription Request body must include 'order_id', 'status', and 'cancellation_reason'.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the cancelled order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Console logs the error message and returns it in the response.
 */
async function cancelOrder(req, res) {
	const { order_id, status, cancellation_reason } = req.body;
	console.info('TaxiOrderController', 'CANCEL ORDER', req.body);
	try {
		let order = await TaxiOrderDao.getOrder(order_id);
		console.info('TaxiOrderController', 'GET ORDER BY ID', order);
		let user_id = order?.user_id;
		let driver_id = order?.driver_id;
		let user = await UsersDao.getUserById(user_id);
		let driver = driver_id ? await DriverDao.getDriverById(driver_id) : null;
		const skip_cancellation_fee = order.type === 'TAXI' || req.user.user_id !== order?.user_id;
		if (req.user.user_id === driver?.user?.user_id) {
			await ScoringPointsDao.createScoringPoints(
				driver.business_id,
				req.user.user_id,
				null,
				order.order_id,
				1,
				true,
				SCORING_POINTS_REASON.CANCELED
			);
		}
		console.log('user console.log', user?.user_id);
		console.log('Driver console.log', driver?.user?.user_id);
		if (order.type !== ORDER_TYPE.VEHICLE_TRANSFER_COMBO)
			sendOrderNotifications(user, driver?.user, user_id, driver_id, status);
		await TaxiHelper.revokeTaxiOrderFromDrivers(order.order_id);
		// Determine the cancellation reason
		let reason = '';
		if (Array.isArray(cancellation_reason) && cancellation_reason.length > 0) {
			reason = cancellation_reason[0].value;
		} else if (typeof cancellation_reason === 'string' && cancellation_reason.trim() !== '') {
			reason = cancellation_reason; // Use the raw cancellation reason if it's a non-empty string
		}
		// if(!order.is_scheduled) {
		// 	if (order.parent_order_id) {
		// 		let parentOrder = await TaxiOrderDao.getOrder(order.parent_order_id);
		// 		if (parentOrder.grouped_orders.length > 0) {
		// 			for (let or of parentOrder.grouped_orders) {
		// 				await TaxiHelper.revokeTaxiOrderFromDrivers(or.order_id);
		// 				await TaxiOrderDao.cancelOrder(or.order_id, status, reason);
		// 				io.to("order_" + or.order_id).emit("order_status_change__taxi", or);
		// 				io.to("order_" + or.order_id).emit("order_cancelled__taxi", or);
		// 			}
		// 		}
		// 	}
		// 	if (order.grouped_orders.length > 0) {
		// 		for (let or of order.grouped_orders) {
		// 			await TaxiHelper.revokeTaxiOrderFromDrivers(or.order_id);
		// 			await TaxiOrderDao.cancelOrder(or.order_id, status, reason);
		// 			io.to("order_" + or.order_id).emit("order_status_change__taxi", or);
		// 			io.to("order_" + or.order_id).emit("order_cancelled__taxi", or);
		// 		}
		// 	}
		// }
		if (order.preferences?.vehicle_class === VEHICLE_CLASS.PRIVATE_DRIVER) {
			let vehicle_transfer_order = await TaxiOrderDao.cancelVehicleTransferOrder(order.user_id, status, reason);
			if (vehicle_transfer_order) {
				if (vehicle_transfer_order.driver_id) {
					let driver = await DriverDao.getDriverById(order.driver_id);
					await TaxiOrderDao.updateOrder(order_id, {
						driver: {
							disconnect: true,
						},
					});
					io.emit('driver_available', driver);
				}
				await TaxiHelper.revokeTaxiOrderFromDrivers(vehicle_transfer_order.order_id);
				io.to('order_' + vehicle_transfer_order.order_id).emit('order_cancelled__taxi', vehicle_transfer_order);
				SocketStore.removeUserFromRoom(driver?.user_id, `order_${order_id}`);
			}
		}
		order = await TaxiOrderDao.cancelOrder(order_id, status, reason);
		await TaxiHelper.handlePaymentRefund(
			order.order_id,
			order.user_id,
			order.payment,
			order?.cargo_preferences?.additional_workers,
			order?.preferences?.vehicle_class,
			skip_cancellation_fee
		);
		if (order.driver_id) {
			let driver = await DriverDao.getDriverById(order.driver_id);
			await TaxiOrderDao.updateOrder(order_id, {
				driver: {
					disconnect: true,
				},
			});
			io.emit('driver_available', driver);
			SocketStore.removeUserFromRoom(driver?.user_id, `order_${order_id}`);
		}
		io.to('order_' + order.order_id).emit('order_cancelled__taxi', order);
		SocketStore.removeUserFromRoom(order?.user_id, `order_${order_id}`);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/reject
 * @tag Taxi
 * @summary Reject a taxi order.
 * @description Rejects a taxi order with the provided order ID, status, and rejection reason from the request body. Returns the rejected order if successful and emits a 'order_rejected' event.
 * @operationId rejectOrder
 * @bodyDescription Request body must include 'order_id', 'status', and 'rejection_reason'.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the rejected order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Console logs the error message and returns it in the response.
 */
async function rejectOrder(req, res) {
	const { order_id, status, cancellation_reason } = req.body;
	console.info('TaxiOrderController', 'REJECT ORDER', req.body);
	let new_status = status;
	try {
		let order = await TaxiOrderDao.getOrder(order_id);
		if (order?.status === TAXI_ORDER_STATUS.CUSTOMER_CANCELED) {
			return res
				.status(410)
				.json({ error: 'Order was already canceled by customer.', error_type: 'ERR_ORDER_ALREADY_CANCELED' });
		}
		let user_id = order?.user_id;
		let driver_id = order?.driver_id;
		let user = await UsersDao.getUserById(user_id);
		let driver = driver_id ? await DriverDao.getDriverById(driver_id) : null;
		let userDriver = await DriverDao.getDriverByUserId(req.user.user_id);
		console.log('user console.log', user?.user_id);
		console.log('Driver console.log', driver?.user?.user_id);
		if (order.type !== ORDER_TYPE.VEHICLE_TRANSFER_COMBO)
			sendOrderNotifications(user, driver?.user, user_id, driver_id, status);
		if (status === TAXI_ORDER_STATUS.TAXI_REJECTED) {
			new_status = TAXI_ORDER_STATUS.PENDING;
			await TaxiOrderDao.updateOrder(order_id, {
				status: TAXI_ORDER_STATUS.PENDING,
				last_sent_at: null,
			});
		}
		SocketStore.removeUserFromRoom(driver?.user_id, `order_${order_id}`);
		if (userDriver && userDriver.driver_id) {
			await TaxiHelper.revokeTaxiOrderFromDriver(order.order_id, userDriver.driver_id);
			await ScoringPointsDao.createScoringPoints(
				userDriver.business_id,
				req.user.user_id,
				null,
				order.order_id,
				1,
				true,
				SCORING_POINTS_REASON.REJECTED
			);
			let order_sent = await prisma.taxi_order_sent.findUnique({
				where: {
					taxi_order_sent_driver_unique: {
						order_id,
						driver_id: userDriver.driver_id,
					},
				},
			});
			console.log('REJECT ' + order_sent.taxi_order_sent_id);
			if (order_sent.taxi_order_sent_id) {
				await prisma.taxi_order_sent.update({
					where: {
						taxi_order_sent_id: order_sent.taxi_order_sent_id,
					},
					data: {
						rejected: true,
					},
				});
			}
		}
		// Determine the cancellation reason
		let reason = '';
		if (Array.isArray(cancellation_reason) && cancellation_reason.length > 0) {
			reason = cancellation_reason[0].value;
		} else if (typeof cancellation_reason === 'string' && cancellation_reason.trim() !== '') {
			reason = cancellation_reason;
		}
		// Cancel the order with the determined reason
		order = await TaxiOrderDao.cancelOrder(order_id, new_status, reason);
		if (order.driver_id) {
			let driver = await DriverDao.getDriverById(order.driver_id);
			await TaxiOrderDao.updateOrder(order_id, {
				driver: {
					disconnect: true,
				},
			});
			io.emit('driver_available', driver);
		}
		io.to('order_' + order.order_id).emit('order_rejected__taxi', order);
		io.to('order_' + order.order_id).emit('order_status_change__taxi', order);
		let userActiveOrders = await TaxiOrderDao.userActiveOrders(order.user_id);
		let pending = true;
		for (let or of userActiveOrders) {
			if (or.status !== TAXI_ORDER_STATUS.PENDING) {
				pending = false;
			}
		}
		console.log('pending', pending);
		if (pending) {
			if (UserSockets.get(order.user_id) && order.creating_user_id !== order.user_id) {
				console.log('EMITTING order_restart_search');
				UserSockets.get(order.user_id).emit('order_restart_search', order);
			}
		}
		console.log('order_status_change__taxi', 'order_rejected__taxi');
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/route
 * @tag Taxi
 * @summary Update a taxi order's route.
 * @description Updates the route of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateTaxiOrderRoute
 * @bodyDescription Request body must include 'order_id' and the new 'route' details.
 * @bodyContent {UpdateOrderRouteRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new route in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderRoute(req, res) {
	try {
		let order = await TaxiOrderDao.updateTaxiOderRoute(req.body.order_id, req.body.route);
		io.to('order_' + order.order_id).emit('order_route_change', order);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/pickup_location
 * @tag Taxi
 * @summary Update a taxi order's pickup location.
 * @description Updates the pickup location of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateTaxiOrderPickupLocation
 * @bodyDescription Request body must include 'order_id' and the new 'pickup_location' details.
 * @bodyContent {UpdateOrderPickupLocationRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new pickup location in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderPickupLocation(req, res) {
	try {
		let order = await TaxiOrderDao.updateTaxiOrderPickupLocation(req.body.order_id, req.body.pickup_location);
		io.to('order_' + order.order_id).emit('order_pickup_location_change', order);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/delivery_location
 * @tag Taxi
 * @summary Update a taxi order's delivery location.
 * @description Updates the delivery location of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateTaxiOrderDeliveryLocation
 * @bodyDescription Request body must include 'order_id' and the new 'delivery_location' details.
 * @bodyContent {UpdateOrderDeliveryLocationRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new delivery location in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderDeliveryLocation(req, res) {
	try {
		let order = await TaxiOrderDao.updateTaxiOrderDeliveryLocation(req.body.order_id, req.body.delivery_location);
		io.to('order_' + order.order_id).emit('order_delivery_location_change', order);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/complete_route
 * @tag Taxi
 * @summary Update a taxi order's complete route.
 * @description Updates the complete route of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateCompleteTaxiRoute
 * @bodyDescription Request body must include 'order_id', and the new 'route' details.
 * @bodyContent {UpdateCompleteRouteRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new complete route in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateCompleteTaxiRoute(req, res) {
	const { order_id, route } = req.body;
	try {
		let order = await TaxiOrderDao.updateCompleteTaxiRoute(order_id, route);
		io.to('order_' + order.order_id).emit('order_complete_route_change', order);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/timeline
 * @tag Taxi
 * @summary Update a taxi order's timeline.
 * @description Updates the timeline of a taxi order.
 * @operationId updateTaxiOrderTimeline
 * @bodyDescription Request body must include 'order_id', and the new 'timeline' details.
 * @bodyContent {UpdateTaxiOrderTimelineRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderTimeline(req, res) {
	const { order_id, timeline } = req.body;
	console.info('TaxiOrderController', 'UPDATE ORDER TIMELINE', req.body);
	try {
		let order = await TaxiOrderDao.updateTaxiOrderTimeline(order_id, timeline);
		io.to('order_' + order.order_id).emit('order_timeline_change', order);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/payment
 * @tag Taxi
 * @summary Update a taxi order's payment details.
 * @description Updates the payment details of the order.
 * @operationId updateTaxiOrderPayment
 * @bodyDescription Request body must include 'order_id', and the new 'route' details.
 * @bodyContent {UpdateTaxiOrderPaymentRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new payment details.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderPayment(req, res) {
	const { order_id, payment } = req.body;
	try {
		let order = await TaxiOrderDao.getOrder(order_id);
		if (order.payment.status === 'PAID') {
			throw new Error('Cant update paid payment.');
		}
		order = await TaxiOrderDao.updateTaxiOrderPayment(order_id, payment);
		io.to('order_' + order.order_id).emit('order_payment_change__taxi', order);
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/driver
 * @tag Taxi
 * @summary Append driver to taxi order.
 * @description Append driver to taxi order.
 * @operationId appendTaxiDriver
 * @bodyDescription Request body must include 'order_id', and 'driver_id'
 * @bodyContent {selectTaxiDriverRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new driver details.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function appendTaxiDriver(req, res) {
	const { order_id, driver_id } = req.body;
	try {
		console.info(order_id, driver_id);
		const order = await TaxiOrderDao.updateOrder(order_id, {
			driver: {
				connect: {
					driver_id: driver_id,
				},
			},
		});
		await TaxiHelper.revokeTaxiOrderFromOtherDrivers(order_id, driver_id);
		const driver = await DriverDao.getDriverById(driver_id);
		await TaxiHelper.sendTaxiOrderToDriver(order, driver, true);
		res.status(200).json({ message: 'driver selected' });
	} catch (e) {
		console.info('appendTaxiDriver', e);
		res.status(500).json(e);
	}
}
async function getScheduledOrders(req, res) {
	try {
		const orders = await TaxiOrderDao.getOrders({
			where: {
				is_scheduled: true,
				status: TAXI_ORDER_STATUS.PENDING,
			},
		});
		console.info(orders.length, 'scheduled orders');
		res.status(200).json(orders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
async function getAcceptedScheduledOrders(req, res) {
	try {
		const orders = await TaxiOrderDao.getOrders({
			where: {
				is_scheduled: true,
				driver_id: req.params.driver_id,
				status: TAXI_ORDER_STATUS.TAXI_ACCEPTED,
			},
		});
		console.info(orders.length, 'scheduled orders');
		res.status(200).json(orders);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
async function getScheduledOrdersByUserId(req, res) {
	const { user_id } = req.params;
	try {
		const orders = await TaxiOrderDao.getOrders({
			where: {
				is_scheduled: true,
				user_id: user_id,
				status: TAXI_ORDER_STATUS.PENDING,
			},
		});
		console.info(orders.length, 'scheduled orders');
		res.status(200).json(orders);
	} catch (e) {
		console.error('Error getting scheduled orders by user_id.', e);
		res.status(500).json(e);
	}
}
async function getDriversForOrder(req, res) {
	try {
		const drivers = await DriverDao.getAvailableDrivers();
		const order_id = req.params.order_id;
		let availableDrivers = [];
		for (let driver of drivers) {
			let isSent = await TaxiOrderDao.isOrderSent(order_id, driver);
			if (isSent && isSent.rejected) {
				continue;
			}
			availableDrivers.push(driver);
		}
		res.status(200).json(availableDrivers);
	} catch (error) {
		res.status(500).json(error);
	}
}
/**
 * GET /taxi/orders/pagination
 * @tag Taxi
 * @summary Get taxi orders with pagination.
 * @description This fetches orders with pagination.
 * @operationId getTaxiOrdersWithPagination
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getTaxiOrdersWithPagination(req, res) {
	const { where, orderBy } = req.body;
	const page = req.body.page ? parseInt(req.body.page) : 1;
	const take = req.body.take ? parseInt(req.body.take) : 8;
	try {
		const skip = (page - 1) * take;
		const [data, total] = await Promise.all([
			prisma.taxi_orders.findMany({
				take: take,
				skip: skip,
				where,
				orderBy: orderBy ? orderBy : { created_at: 'desc' },
				include: { user: true, vehicle: true, driver: { include: { user: true } } },
			}),
			prisma.taxi_orders.count({
				where, // Ensure the count matches the filtered results
			}),
		]);
		res.status(200).json({ data, total });
	} catch (error) {
		console.error('TaxiOrderController', error);
		res.status(500).json({ message: 'Error something went wrong...' });
	}
}
/**
 * GET /taxi/orders/today
 * @tag Taxi
 * @summary Get all taxi orders for today and earnings.
 * @description This fetches all taxi orders for today and earnings.
 * @operationId getTaxiOrdersToday
 * @response 200 - Successful operation. Returns a list of all taxi orders today and earnings in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getTaxiOrdersToday(req, res) {
	try {
		const orders = await prisma.taxi_orders.findMany({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
				created_at: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
			},
		});
		if (orders) {
			return res
				.status(200)
				.json({ orders: orders.length, amount: todaysEarnings(orders, TAXI_ORDER_STATUS.TAXI_COMPLETED) });
		}
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
async function cancelGroupedOrderByParentId(req, res) {
	console.info('TaxiOrderController', 'CANCEL GROUP ORDER', req.body);
	const { parent_order_id, status, cancellation_reason } = req.body;
	let reason = '';
	if (Array.isArray(cancellation_reason) && cancellation_reason.length > 0) {
		reason = cancellation_reason[0].value;
	} else if (typeof cancellation_reason === 'string' && cancellation_reason.trim() !== '') {
		reason = cancellation_reason; // Use the raw cancellation reason if it's a non-empty string
	}
	const STATUS = status;
	try {
		await TaxiHelper.revokeTaxiOrderFromDrivers(parent_order_id);
		let parent_order = await TaxiOrderDao.getOrder(parent_order_id);
		console.info(parent_order.grouped_orders);
		const skip_cancellation_fee = order.type === 'TAXI' || req.user.user_id !== order?.user_id;
		for (let order of parent_order.grouped_orders) {
			console.info('TaxiOrderController', 'CANCELLING CHILD ORDER', order);
			const { order_id, user_id, driver_id } = order;
			const user = await UsersDao.getUserById(user_id);
			const driver = driver_id ? await DriverDao.getDriverById(driver_id) : null;
			sendOrderNotifications(user, driver?.user, user_id, driver_id, STATUS);
			await TaxiHelper.revokeTaxiOrderFromDrivers(order_id);
			const canceled_order = await TaxiOrderDao.cancelOrder(order_id, STATUS, reason);
			await TaxiHelper.handlePaymentRefund(
				order.order_id,
				order.user_id,
				order.payment,
				order?.cargo_preferences?.additional_workers,
				order?.preferences?.vehicle_class,
				skip_cancellation_fee
			);
			io.to('order_' + order_id).emit('order_status_change__taxi', canceled_order);
			io.to('order_' + order_id).emit('order_cancelled__taxi', canceled_order);
			SocketStore.removeUserFromRoom(user_id, `order_${order_id}`);
			if (driver) {
				SocketStore.removeUserFromRoom(driver.user_id, `order_${order_id}`);
				await TaxiOrderDao.updateOrder(order_id, {
					driver: {
						disconnect: true,
					},
				});
				io.emit('driver_available', driver);
			}
		}
		console.info('TaxiOrderController', 'CANCELLING PARENT ORDER', parent_order);
		const { order_id, user_id, driver_id } = parent_order;
		const user = await UsersDao.getUserById(user_id);
		const driver = driver_id ? await DriverDao.getDriverById(driver_id) : null;
		sendOrderNotifications(user, driver?.user, user_id, driver_id, STATUS);
		const canceled_order = await TaxiOrderDao.cancelOrder(order_id, STATUS, reason);
		io.to('order_' + order_id).emit('order_status_change__taxi', canceled_order);
		io.to('order_' + order_id).emit('order_cancelled__taxi', canceled_order);
		SocketStore.removeUserFromRoom(user_id, `order_${order_id}`);
		if (driver) {
			SocketStore.removeUserFromRoom(driver.user_id, `order_${order_id}`);
			await TaxiOrderDao.updateOrder(order_id, {
				driver: {
					disconnect: true,
				},
			});
			io.emit('driver_available', driver);
		}
		res.status(200).json([parent_order_id, ...parent_order.grouped_orders.map((order) => order.order_id)]);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
async function rejectGroupedOrderByParentId(req, res) {
	console.info('TaxiOrderController', 'REJECT GROUP ORDER', req.body);
	const { parent_order_id, rejection_reason } = req.body;
	let reason = '';
	if (Array.isArray(rejection_reason) && rejection_reason.length > 0) {
		reason = rejection_reason[0].value;
	} else if (typeof rejection_reason === 'string' && rejection_reason.trim() !== '') {
		reason = rejection_reason; // Use the raw cancellation reason if it's a non-empty string
	}
	const STATUS = TAXI_ORDER_STATUS.TAXI_REJECTED;
	try {
		let parent_order = await TaxiOrderDao.getOrder(parent_order_id);
		console.info(parent_order.grouped_orders);
		let orders = [...parent_order.grouped_orders, parent_order];
		for (let order of orders) {
			console.info('TaxiOrderController', 'REJECTING CHILD ORDER', order);
			const { order_id, user_id, driver_id } = order;
			//const user = await UsersDao.getUserById(user_id);
			const driver = driver_id ? await DriverDao.getDriverById(driver_id) : null;
			const userDriver = await DriverDao.getDriverByUserId(req.user.user_id);
			//sendOrderNotifications(user, driver?.user, user_id, driver_id, STATUS);
			if (order.driver_id === userDriver.driver_id) {
				order = await TaxiOrderDao.updateOrder(order_id, {
					status: TAXI_ORDER_STATUS.PENDING,
					last_sent_at: null,
					cancellation_reason: reason,
				});
			}
			if (userDriver && userDriver.driver_id) {
				await TaxiHelper.revokeTaxiOrderFromDriver(order_id, userDriver.driver_id);
				let order_sent = await prisma.taxi_order_sent.findUnique({
					where: {
						taxi_order_sent_driver_unique: {
							order_id,
							driver_id: userDriver.driver_id,
						},
					},
				});
				if (order_sent?.taxi_order_sent_id) {
					await prisma.taxi_order_sent.update({
						where: {
							taxi_order_sent_id: order_sent.taxi_order_sent_id,
						},
						data: {
							rejected: true,
						},
					});
				}
			}
			io.to('order_' + order_id).emit('order_status_change__taxi', order);
			if (driver && userDriver.driver_id === driver.driver_id) {
				io.to('order_' + order_id).emit('order_rejected__taxi', order);
				const user = await UsersDao.getUserById(user_id);
				sendOrderNotifications(user, driver?.user, user_id, driver_id, STATUS);
				await TaxiOrderDao.updateOrder(order_id, {
					driver: {
						disconnect: true,
					},
				});
				SocketStore.removeUserFromRoom(driver?.user_id, `order_${order_id}`);
				io.emit('driver_available', driver);
			}
		}
		let userActiveOrders = await TaxiOrderDao.userActiveOrders(parent_order.user_id);
		let pending = true;
		for (let or of userActiveOrders) {
			if (or.status !== TAXI_ORDER_STATUS.PENDING) {
				pending = false;
			}
		}
		console.log('pending', pending);
		let rejected_order = await TaxiOrderDao.getOrder(parent_order_id);
		if (pending) {
			if (UserSockets.get(parent_order.user_id) && parent_order.creating_user_id !== parent_order.user_id) {
				console.log('EMITTING order_restart_search');
				UserSockets.get(parent_order.user_id).emit('order_restart_search', rejected_order);
			}
		}
		res.status(200).json(orders.map((order) => order.order_id));
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/today
 * @tag Taxi
 * @summary Splits Van order into multiple smaller orders
 * @description If we cant find a Van driver, we offer the user to split his order into multiple smaller orders.
 * @operationId splitVanOrder
 * @response 200 - Successful operation. Returns a list of all taxi orders created.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function splitVanOrder(req, res) {
	const { order_id, info } = req.body;
	console.info('TaxiOrderController', 'SPLIT VAN ORDER', req.body);
	try {
		let order = await TaxiOrderDao.getOrder(order_id);
		if (order.preferences?.vehicle_class === VEHICLE_CLASS.VAN) {
			if (order.parent_order_id) {
				order = await TaxiOrderDao.getOrder(order.parent_order_id);
			}
			if (order.grouped_orders.length > 0) {
				let num_people = 0;
				for (let or of order.grouped_orders) {
					if (or.status === TAXI_ORDER_STATUS.PENDING || or.status === TAXI_ORDER_STATUS.TAXI_REJECTED) {
						let seats_Adults = or.prefs.adults;
						let seats_ChildrenUnder140 = or.prefs.children_under_140;
						let total_seats = seats_Adults + seats_ChildrenUnder140;
						num_people += total_seats;
					}
				}
			}
		}
		res.status(200).json(order);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
async function calculateTransferPrice(req, res) {
	const { pickup_location, delivery_location, departure_time } = req.body;
	try {
		let priceData = await TaxiHelper.calculateTransferRidePrice(
			pickup_location.coordinates,
			delivery_location.coordinates,
			departure_time
		);
		if (!priceData) {
			return res.status(400).json({ message: 'Price could not be calculated' });
		}
		res.status(200).json(priceData);
	} catch (e) {
		console.log('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
export { getTaxiOrders };
export { getTaxiOrdersToday };
export { getOrder };
export { getTaxiOrdersByDriverId };
export { getCompletedTaxiOrders };
export { getCanceledTaxiOrders };
export { getRejectedTaxiOrders };
export { createOrder };
export { acceptOrder };
export { completeOrder };
export { cancelOrder };
export { cancelGroupedOrderByParentId };
export { rejectOrder };
export { rejectGroupedOrderByParentId };
export { updateOrderStatus };
export { updateTaxiOrderRoute };
export { updateTaxiOrderPickupLocation };
export { updateTaxiOrderDeliveryLocation };
export { updateTaxiOrderPreferences };
export { updateCompleteTaxiRoute };
export { updateTaxiOrderPayment };
export { updateTaxiOrderTimeline };
export { getActiveTaxiOrders };
export { getCompletedTaxiOrdersByUserId };
export { getCompletedTaxiOrdersByBusinessId };
export { getCanceledTaxiOrdersByUserId };
export { getActiveTaxiOrdersByDriverId };
export { createDispatchOrder };
export { appendTaxiDriver };
export { getScheduledOrders };
export { getDriversForOrder };
export { getAcceptedScheduledOrders };
export { getScheduledOrdersByUserId };
export { getTaxiOrdersWithPagination };
export { calculateTransferPrice };
export { requestTransferOrderPrice };
export default {
	getTaxiOrders,
	getTaxiOrdersToday,
	getOrder,
	getTaxiOrdersByDriverId,
	getCompletedTaxiOrders,
	getCanceledTaxiOrders,
	getRejectedTaxiOrders,
	createOrder,
	acceptOrder,
	completeOrder,
	cancelOrder,
	cancelGroupedOrderByParentId,
	rejectOrder,
	rejectGroupedOrderByParentId,
	updateOrderStatus,
	updateTaxiOrderRoute,
	updateTaxiOrderPickupLocation,
	updateTaxiOrderDeliveryLocation,
	updateTaxiOrderPreferences,
	updateCompleteTaxiRoute,
	updateTaxiOrderPayment,
	updateTaxiOrderTimeline,
	getActiveTaxiOrders,
	getCompletedTaxiOrdersByUserId,
	getCompletedTaxiOrdersByBusinessId,
	getCanceledTaxiOrdersByUserId,
	getActiveTaxiOrdersByDriverId,
	createDispatchOrder,
	appendTaxiDriver,
	getScheduledOrders,
	getDriversForOrder,
	getAcceptedScheduledOrders,
	getScheduledOrdersByUserId,
	getTaxiOrdersWithPagination,
	calculateTransferPrice,
	requestTransferOrderPrice,
};
