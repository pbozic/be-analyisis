import {
	MODULE,
	DELIVERY_ORDER_STATUS,
	TAXI_ORDER_STATUS,
	BUSINESS_TYPE,
	SCORING_POINTS_REASON,
	FUNDS_TYPE,
	TRANSACTION_TYPE,
} from '@prisma/client';

import type { BusinessWithAllModulesResponseDto } from '../schemas/dto/Business';
import type { DeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/deliveryOrder.dto.ts';
import type { BusinessByIdResponse } from '../schemas/dto/Business/business.dto.ts';
import type { UserBase } from '../schemas/dto/User/index.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import DriverDao from '../dao/Driver.js';
import BusinessDao from '../dao/Business.js';
import MenuItemDao from '../dao/MenuItem.js';
import MenuDao from '../dao/Menu.js';
import TaxiOrderDao from '../dao/TaxiOrder.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import ScoringPointsDao from '../dao/ScoringPoints.js';
import prisma from '../prisma/prisma.js';
import socket from '../socket.js';
import UsersDao from '../dao/User.js';
import { haversineDistance } from './helpersLib.js';
import BusinessHelpers from './businessHelpers.js';
import gApi from './gApis.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { sendNotificationToUser } from './oneSignal.js';
import {
	DELIVERY_ORDER_END_STATES,
	AUTOREJECT_THRESHOLD,
	DELIVERY_COST_CALCULATION,
	DRIVE_FEE,
	RESTAURANT_FEE,
	WEIGHTED_ITEM_QTY_INCREASE_LIMIT,
	MAX_DELIVERY_RADIUS_KM,
} from './constants.js';
import { sendDeliveryOrderNotifications } from './notifications.js';
import WalletFundsHelpers from './WalletFundsHelpers.js';
import stripe from './stripe.js';
import { handleStockSync } from '../controllers/DeliveryOrderController.js';
import { LocationWithAddress } from '../schemas/dto/Address/address.ts';
import { OrderItem } from '../schemas/dto/DeliveryOrders/deliveryOrder.dto.ts';

const NUMBER_OF_DRIVERS_TO_SEND = 3;
const MAX_ORDER_FIND_ATTEMPTS = 0;

const { io, SocketStore, UserSockets } = socket;

// Narrow types for driver objects used during scoring (subset of DeliveryDriverDetail/DriverDetail)
export interface CandidateDriver {
	driver_id?: string;
	// delivery_driver_id?: string;
	user_id: string;
	on_order?: boolean;
	location: { coordinates: { latitude: number | null; longitude: number | null } };
	travelTime?: number;
	arrivalTime?: Date;
	distanceM?: number;
	distanceKm?: number;
	duration?: number;
	timeDifference?: number;
	score?: number;
}

interface DeliveryOrderWithAttempts extends DeliveryOrderDetail {
	find_drivers_attempts?: number;
}

/**
 * Finds eligible delivery drivers for a given order and sends it to them.
 * - Selects drivers, computes scores, sends socket events, and updates last_sent_at.
 * @param {DeliveryOrderWithAttempts} order - The delivery order to dispatch.
 * @returns {Promise<void>} Resolves when notifications are sent.
 */
export async function findDeliveryOrderDrivers(order: DeliveryOrderWithAttempts): Promise<void> {
	try {
		const drivers = await selectDeliveryOrderDrivers(order);
		await Promise.all(drivers.map((d) => sendDeliveryOrderToDriver(order, d)));
		await DeliveryOrderDao.updateOrderLastSentAt(order.order_id);
	} catch (e) {
		console.log('Find delivery drivers error', e);
		throw e;
	}
}
/**
 * Calculates and attaches delivery earnings estimate to the order based on distance/cost.
 * @param {DeliveryOrderWithAttempts} order - The order object; will have details.delivery_earnings assigned.
 * @returns {Promise<DeliveryOrderWithAttempts>} The updated order with delivery_earnings.
 */
async function addDeliveryEarningToOrder(order: DeliveryOrderWithAttempts): Promise<DeliveryOrderWithAttempts> {
	if (order?.details?.delivery_cost) {
		(order.details as any).delivery_earnings = order.details.delivery_cost * 1.25;
	} else if (order?.details) {
		const pricePerKm = 0.5;
		const deliveryEarning = pricePerKm * order.details.distance * 1.25;
		(order.details as any).delivery_earnings = deliveryEarning;
	}
	console.log('delivery_earnings', order.details?.delivery_earnings);
	await DeliveryOrderDao.updateOrder(order.order_id, order as unknown as Record<string, unknown>);
	return order;
}
/**
 * Returns the number of orders already sent to a delivery driver and not yet accepted.
 * @param {string} driver_id - The delivery_driver_id or driver_id.
 * @returns {Promise<number>} Count of pending sent orders.
 */
async function getNumberPendingOrders(driver_id: string): Promise<number> {
	const sent = await DeliveryOrderDao.getAlreadySentOrdersByDeliveryDriverId(driver_id);
	return sent?.length || 0;
}
/**
 * Heuristic score to prioritize drivers for a delivery order based on timing and availability.
 * @param {CandidateDriver} driver - Driver object including on_order flag.
 * @param {Date} readyTime - When the order is ready for pickup.
 * @param {Date} arrivalTime - Driver ETA to merchant.
 * @returns {Promise<number>} Score from roughly 0-100+ (higher is better).
 */
async function calculateDeliveryDriverScore(
	driver: CandidateDriver,
	readyTime: Date,
	arrivalTime: Date
): Promise<number> {
	let score = 100;
	const LATE_SCORE = 5;
	const EARLY_SCORE = 1;
	const MINUTE_SUB = 1;
	const PENDING_ORDER_SCORE = 10;
	const numberPendingOrders = await getNumberPendingOrders(driver.driver_id || driver.user_id);
	const timeDifference = arrivalTime.getTime() - readyTime.getTime();
	const timeDifferenceMinutes = timeDifference / 60000;
	if (timeDifference > 0) score -= timeDifferenceMinutes * LATE_SCORE * MINUTE_SUB;
	else score += timeDifferenceMinutes * EARLY_SCORE * MINUTE_SUB;
	if (driver.on_order) score -= 25;
	score -= (numberPendingOrders || 0) * PENDING_ORDER_SCORE;
	console.log('score: ', score);
	return score;
}
async function calculateDriverScore(
	driver: CandidateDriver,
	readyTime: Date,
	travelTime: number,
	order: DeliveryOrderWithAttempts
) {
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
/**
 * Selects eligible delivery drivers for a given order based on readiness and scoring.
 *
 * - Computes scores, filters, and sorts drivers to find the best candidates.
 * @param {DeliveryOrderWithAttempts} order - The delivery order to evaluate.
 * @returns {Promise<CandidateDriver[]>} List of candidate drivers sorted by score.
 */
export async function selectDeliveryOrderDrivers(order: DeliveryOrderWithAttempts): Promise<CandidateDriver[]> {
	const eligible: CandidateDriver[] = [];
	const now = new Date();
	const readyRaw = order.details?.ready_for_pickup_at;
	if (!readyRaw) return eligible;
	const readyTime = new Date(readyRaw);
	console.log('ready time: ', readyTime);
	console.log('now: ', now);
	// is readyTime 20min from now or less
	if (readyTime.getTime() > now.getTime() + 20 * 60 * 1000) {
		console.log('Order is not ready yet');
		return eligible;
	}
	const MIN_ORDER_SCORE = 85 - (order.find_drivers_attempts as number) * 5;
	const onlineDrivers = await DriverDao.getOnlineDrivers({
		handles_delivery_orders: true,
		delivery_orders_toggled: true,
		on_order: false,
	});
	console.info('available drivers', onlineDrivers?.length);
	// TODO: get pending orders for the driver and check if the order is already sent to the driver
	for (const driver of onlineDrivers) {
		if (await DeliveryOrderDao.isOrderSent(order.order_id, driver)) continue;
		if (!UserSockets.get(driver.user_id)) continue;
		const lat = (driver as any).location?.coordinates?.latitude;
		const lng = (driver as any).location?.coordinates?.longitude;
		if (lat == null || lng == null) continue;
		const { distanceM, durationS } = await gApi.distanceBetweenTwoPoints(
			(driver as any).location.coordinates,
			(order as any).pickup_location.coordinates,
			'driving',
			new Date(),
			'best_guess'
		);
		const travelTime = durationS; // seconds
		console.log('travel time: ', travelTime);
		let arrivalTime = new Date(now.getTime() + travelTime * 1000);
		console.log('arrival time: ', arrivalTime.getTime());
		console.log('ready time: ', readyTime.getTime());
		console.log('arrival time - ready time: ', arrivalTime.getTime() < readyTime.getTime());
		const cd: CandidateDriver = {
			driver_id: driver.driver_id,
			user_id: driver.user_id,
			on_order: driver.on_order,
			location: driver.location,
			travelTime,
			arrivalTime,
			distanceM,
			distanceKm: distanceM / 1000,
			duration: travelTime,
			timeDifference: arrivalTime.getTime() - readyTime.getTime(),
		};
		await addDeliveryEarningToOrder(order);
		cd.score = await calculateDeliveryDriverScore(cd, readyTime, arrivalTime);
		console.log('MIN_ORDER_SCORE', MIN_ORDER_SCORE);
		console.log(cd.score, 'driver.score');
		//TODO: uncomment
		//if (cd.score >= MIN_ORDER_SCORE) eligibleDrivers.push(cd);
		if ((order.find_drivers_attempts as number) >= MAX_ORDER_FIND_ATTEMPTS) eligible.push(cd); // retain logic from JS (score gating disabled)
	}
	eligible.sort((a, b) => b.score! - a.score!);
	const sliced = eligible.slice(0, NUMBER_OF_DRIVERS_TO_SEND);
	if (!sliced.length) {
		order.find_drivers_attempts = (order.find_drivers_attempts || 0) + 1;
		await DeliveryOrderDao.updateOrder(order.order_id, {
			find_drivers_attempts: order.find_drivers_attempts,
		});
	}
	return sliced;
}

/**
 * Calculates order details for an order lobby including totals, fees, and delivery information.
 *
 * This function computes:
 * - Sub-total from cart items (including extras and sides)
 * - Discount savings
 * - Minimum order fee (if applicable)
 * - Delivery cost (with student meal consideration)
 * - Total price (sum of all above)
 *
 * @param {BusinessWithAllModulesResponseDto} provider - The business/restaurant providing the order
 * @param {MenuItemBase[]} cartItems - Array of menu items with quantities, prices, and optional extras/sides
 * @param {AddressBase} selectedAddress - The delivery address with coordinates
 * @param {string} [paymentType='cash'] - Payment method type
 * @param {any} orderData - Additional order data for delivery cost calculation
 * @returns {DeliveryOrderDetail['details']} Order details object with all calculated values
 */
export function CalculateOrderLobbyOrderDetails(
	provider: BusinessWithAllModulesResponseDto,
	cartItems: OrderItem[],
	selectedAddress: LocationWithAddress,
	paymentType: string = 'cash',
	orderData: any
): DeliveryOrderDetail['details'] {
	// TODO: Refactor this function!!!!!!!!!
	// On items there will be options, that means extras and sides are not valid anymore

	let orderTotal = 0;
	let discountTotal = 0;
	let minimum_order_fee = 0;

	const items = Array.isArray(cartItems) ? cartItems : [];

	let student_meal = false;

	items.forEach((item) => {
		const quantity = Number(item.quantity) || 0;
		const price = Number(item.price) || 0;
		const discount = Number(item.discount) || 0;

		const discountedPrice = price - price * discount;

		orderTotal += discountedPrice * quantity;
		discountTotal += discount * price * quantity;

		// Extras
		if (Array.isArray(item?.extras)) {
			item.extras.forEach((extra: any) => {
				if (typeof extra !== 'string') {
					// Then it must be of type MenuItemType
					const extraPrice = Number(extra?.price) || 0;
					orderTotal += extraPrice * quantity;
				}
			});
		}

		// Sides
		if (Array.isArray(item?.sides)) {
			item.sides.forEach((side: any) => {
				if (typeof side !== 'string') {
					// Then it must be of type MenuItemType
					const sidePrice = Number(side?.price) || 0;
					orderTotal += sidePrice * quantity;
				}
			});
		}

		if (item?.student_meal) student_meal = true;
	});

	// Minimum order fee
	const providerMinimumOrder = provider?.minimum_order ?? 0;
	if (orderTotal < providerMinimumOrder) {
		minimum_order_fee = providerMinimumOrder - orderTotal;
	}

	// Delivery Cost
	const delivery_cost = calculateOrderDeliveryCost(orderData, student_meal);

	const deliverLocation = {
		address: selectedAddress?.address,
		coordinates: {
			latitude: selectedAddress?.latitude,
			longitude: selectedAddress?.longitude,
		},
	};

	return {
		sub_total_price: orderTotal,
		total_price: orderTotal + (delivery_cost || 0) + (minimum_order_fee || 0),
		discount_savings: discountTotal,
		provider_address: {
			address: provider?.address?.address,
			coordinates: {
				latitude: provider?.address?.latitude,
				longitude: provider?.address?.longitude,
			},
		},
		business_id: provider?.business_id || '',
		delivery_cost: delivery_cost || 0,
		delivery_address: deliverLocation,
		minimum_order_fee: minimum_order_fee || 0,
		payment_type: paymentType,
		ready_for_pickup_at: null,
		customer_expected_delivery_at: null,
		type: 'delivery',
	} as DeliveryOrderDetail['details'];
}

/**
 * Notifies a single driver about a new delivery order via sockets and push notifications.
 * Skips if already sent or driver socket is missing.
 * @param {DeliveryOrderWithAttempts} order - The delivery order payload.
 * @param {CandidateDriver} delivery_driver - The driver object to notify.
 * @returns {Promise<void>}
 */
export async function sendDeliveryOrderToDriver(
	order: DeliveryOrderWithAttempts,
	driver: CandidateDriver
): Promise<void> {
	try {
		if (await DeliveryOrderDao.isOrderSent(order.order_id, driver)) return;
		const sock = UserSockets.get(driver.user_id);
		if (!sock) throw new Error(`UserSocket not found for driver ${driver.user_id}`);
		await DeliveryOrderDao.createOrderSent(order.order_id, driver);
		const l10nText = getLocalisedTexts('DELIVERY_DRIVER_NOTIFICATIONS', driver.user.language);
		const l10nTextHeading = getLocalisedTexts('HEADING', driver.user.language);
		sendNotificationToUser(l10nTextHeading?.pending_delivery, l10nText?.accepted, driver.user_id);
		sock.emit('new_order__delivery', order);
	} catch (e) {
		console.error(e);
	}
}
/**
 * Revokes a delivery order from all drivers it was sent to but not accepted.
 * Emits socket event and removes rooms.
 * @param {string} order_id - The order identifier.
 * @returns {Promise<void>}
 */
export async function revokeDeliveryOrderFromDrivers(order_id: string): Promise<void> {
	const sent = await DeliveryOrderDao.getSentDeliveryDrivers(order_id);
	for (const s of sent) {
		if (s.accepted) continue;
		const userId = s.delivery_driver?.user_id || s.driver?.user_id;
		if (userId) await SocketStore.removeUserFromRoom(userId, `order_${order_id}`);
		const sock = userId ? UserSockets.get(userId) : undefined;
		sock?.emit('order_revoked__delivery', order_id);
	}
}
/**
 * Periodic worker: finds pending delivery orders that should be re-sent to drivers.
 * Uses status checks, last_sent_at window, and details.type filter.
 * @returns {Promise<void>}
 */
export async function checkIfDeliveryOrdersNeedSending(): Promise<void> {
	console.log('Checking for delivery orders to send...');
	const orders = await DeliveryOrderDao.getOrders({
		where: {
			AND: [
				{ delivery_driver_id: null, driver_id: null },
				{
					OR: [
						{ status: DELIVERY_ORDER_STATUS.MERCHANT_PREPARING },
						{ status: DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP },
					],
				},
				{ OR: [{ last_sent_at: null }, { last_sent_at: { lte: new Date(Date.now() - 30 * 1000) } }] },
				{ details: { path: ['type'], equals: 'delivery' } },
				{ is_daily_meal: false },
			],
		},
		include: { user: { select: { user_id: true, first_name: true, last_name: true, telephone: true } } },
	});
	console.log('open delivery orders: ', orders.length);
	for (const order of orders as DeliveryOrderDetail[]) findDeliveryOrderDrivers(order);
}
/**
 * Periodic worker: transitions restaurant orders to READY_FOR_PICKUP when ready_time reached.
 * Emits order status change events upon transition.
 * @returns {Promise<void>}
 */
export async function checkIfRestaurantOrderIsPrepared(): Promise<void> {
	const now = new Date();
	console.log('Checking delivery orders prepared!');
	const orders = await prisma.delivery_orders.findMany({
		where: { status: DELIVERY_ORDER_STATUS.MERCHANT_PREPARING },
		include: { business: { select: { type: true } } },
	});
	for (const or of orders) {
		const readyRaw = (or.details as any)?.ready_for_pickup_at;
		if (!readyRaw) continue;
		const readyTime = new Date(readyRaw);
		if (readyTime.getTime() <= now.getTime() && or.food_drinks_module_id) {
			const updated = await DeliveryOrderDao.updateOrderStatus(
				or.order_id,
				DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
			);
			if (updated) io.to('order_' + updated.order_id).emit('order_status_change__delivery', updated);
		}
	}
}
/**
 * Periodic worker: auto-rejects stale or overdue orders based on business type thresholds.
 * Handles payment cleanup, scoring, stock sync, and emits status events.
 * @returns {Promise<void>}
 */
export async function autoRejectDeliveryOrders(): Promise<void> {
	console.log('Checking delivery orders auto-reject!');
	const orders: DeliveryOrderDetail[] = await prisma.delivery_orders.findMany({
		where: { status: { in: [DELIVERY_ORDER_STATUS.PENDING, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_PENDING] } },
	});
	for (const or of orders) {
		const type = or.business_local_location_id
			? BUSINESS_TYPE.LOCAL
			: or.stores_id
				? BUSINESS_TYPE.RETAIL_STORE
				: BUSINESS_TYPE.RESTAURANT;
		const threshold = AUTOREJECT_THRESHOLD[type] || AUTOREJECT_THRESHOLD.RESTAURANT;
		const now = new Date();
		const threshold_time = new Date(now.getTime() - (threshold as number) * 60 * 1000);
		if (
			new Date(or.created_at as string).getTime() > threshold_time.getTime() &&
			(type !== BUSINESS_TYPE.LOCAL || now.getTime() < new Date(or.scheduled_at as string).getTime())
		) {
			continue;
		}
		let order = await DeliveryOrderDao.updateOrderStatus(or.order_id, DELIVERY_ORDER_STATUS.AUTO_REJECTED);
		await handlePaymentCleanup(order);
		let d;
		if (order.driver_id) {
			d = await DriverDao.getDriverById(order.driver_id);
		}
		sendDeliveryOrderNotifications(
			order.user as UserBase,
			d?.user as UserBase,
			order.user_id,
			d?.user_id || null,
			order.status
		);
		order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.ORDER_FINISHED_FAIL);
		await handleStockSync(order);
		if (order) {
			console.log(`Order ${order.order_id} has been automatically rejected.`);
			io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
			io.to('orders_' + order.business_id).emit('order_status_change__delivery', order);
			await ScoringPointsDao.createScoringPoints({
				stores_id: order.stores_id || null,
				food_drinks_id: order.food_drinks_id || null,
				delivery_order_id: order.order_id,
				points: 1,
				isPenalty: true,
				reason: SCORING_POINTS_REASON.AUTO_REJECTED,
			});
		}
	}
}
/**
 * Re-sends pending (not accepted) orders to a specific driver if still eligible.
 * @param {object} driver - Driver object containing user_id and delivery/driver id.
 * @returns {Promise<void>}
 */
export async function resendPendingOrdersToDeliveryDriver(driver: Partial<CandidateDriver>): Promise<void> {
	try {
		if (!driver?.driver_id) {
			console.log('Driver ID is missing, cannot resend orders.');
			return;
		}
		const sentOrders = await DeliveryOrderDao.getAlreadySentOrdersByDeliveryDriverId(driver?.driver_id);
		for (let sentOrder of sentOrders) {
			if (sentOrder.accepted) continue;
			const order = await DeliveryOrderDao.getOrder(sentOrder.order_id, {
				include: {
					user: {
						select: {
							first_name: true,
							last_name: true,
							user_id: true,
						},
					},
				},
			});
			if (order && !order.driver_id && !DELIVERY_ORDER_END_STATES.includes(order.status)) {
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

/**
 * Sends active and pending orders to a driver: splits daily meals vs other orders and sorts.
 * Emits a single socket payload with both lists.
 * @param {object} driver - Driver with user_id and scheduled route info.
 * @returns {Promise<void>}
 */
export async function sendActiveOrdersToDeliveryDriver(driver) {
	try {
		const deliverer_id = driver.delivery_driver_id || driver.driver_id;
		const activeOrders = await DeliveryOrderDao.getActiveOrdersByDeliveryDriverId(deliverer_id);
		console.info('SCHEDULED MEALS ROUTE', driver?.scheduled_meals_route);
		console.info('sendActiveOrdersToDeliveryDriver', driver.user_id);
		console.info('ORDERS', activeOrders.length);
		const today = new Date().toISOString().split('T')[0];
		// Separate daily meal orders for the current day
		const dailyMealOrders = activeOrders.filter((order) => {
			const createdAtDate = new Date(order.created_at as string).toISOString().split('T')[0];
			return order.is_daily_meal && createdAtDate === today;
		});
		const otherOrders = activeOrders.filter((order) => !order.is_daily_meal);
		// Sort daily meal orders first by `created_at`, then by `daily_meal_delivery_order`
		const sortedDailyMealOrders = dailyMealOrders.sort((a, b) => {
			const createdAtA = new Date(a.created_at as string).getTime();
			const createdAtB = new Date(b.created_at as string).getTime();
			if (createdAtA - createdAtB !== 0) {
				return createdAtA - createdAtB;
			}
			const mealDeliveryA = new Date(a.details?.daily_meal_delivery_order).getTime();
			const mealDeliveryB = new Date(b.details?.daily_meal_delivery_order).getTime();
			return mealDeliveryA - mealDeliveryB;
		});
		// Sort other orders by `customer_expected_delivery_at`
		const sortedOtherOrders = otherOrders.sort((a, b) => {
			const deliveryTimeA = new Date(a.details?.customer_expected_delivery_at).getTime();
			const deliveryTimeB = new Date(b.details?.customer_expected_delivery_at).getTime();
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
/**
 * Generates order items based on daily meal preferences for a given menu item.
 * @param {object} preferences - Preferences containing normal and substitution amounts.
 * @param {object} menuItem - The base menu item used for price/discount.
 * @returns {object[]} Generated item list for the order body.
 */
// Legacy helper retained; exported for potential future controller parity.
export function generateItemsFromPreferences(preferences: any, menuItem: any) {
	const items = [];
	const { normal, substitution } = preferences;
	const createItem = (id: string, type: 'normal' | 'substitution') => ({
		menu_item_id: id,
		names: {
			en: type === 'substitution' ? 'Substitution meal' : 'Normal meal',
		},
		price: menuItem.price,
		discount: menuItem.discount,
		quantity: type === 'normal' ? normal.amount : substitution.amount,
	});
	if (normal.amount > 0) items.push(createItem('0', 'normal'));
	if (substitution.amount > 0) items.push(createItem('1', 'substitution'));
	return items;
}

/**
 * Calculates platform, merchant, and driver cuts in cents considering reserved credits.
 * @param {object} order - Delivery order with details including delivery_cost and sub_total_price.
 * @param {string} [orderType='order'] - The type used for wallet reservation lookup.
 * @returns {Promise<{DRIVER_CREDIT_CUT:number, MERCHANT_CREDIT_CUT:number, PLATFORM_CREDIT_CUT:number, DRIVER_CUT:number, MERCHANT_CUT:number, PLATFORM_CUT:number}>}
 */
export async function calculateDeliveryOrderPaymentCuts(order: any, orderType = 'order') {
	const { details, user_id, order_id } = order;
	const TOTAL_PRICE_CENTS = Math.round(details.total_price * 100); // already includes delivery cost

	const reservedCredits =
		(await WalletFundsDao.getReservedCredits(
			user_id,
			order_id,
			orderType as 'order' | 'daily_meals_subscription_payment'
		)) || [];
	const CREDITS_AMOUNT_RESERVED = reservedCredits.reduce((sum, wf) => sum + (wf.amount || 0), 0);
	// console.log(JSON.stringify(reservedCredits, null, 2));
	console.log(CREDITS_AMOUNT_RESERVED);

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
	console.log('Final Calculated Values:', {
		DRIVER_CREDIT_CUT_CENTS,
		MERCHANT_CREDIT_CUT_CENTS,
		PLATFORM_CREDIT_CUT_CENTS,
		DRIVER_CUT_CENTS,
		MERCHANT_CUT_CENTS,
		PLATFORM_CUT_CENTS,
	});
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
export async function handlePaymentCleanup(order: any) {
	try {
		if (order?.payment?.type === 'CARD' && order.payment_intent_id) {
			await stripe.client.paymentIntents.cancel(order.payment_intent_id);
		}
		await WalletFundsHelpers.releaseReservedWalletFundsForOrder(order.user_id, order.order_id);
	} catch (e) {
		console.error('Failed to handle payment cleanup:', e);
	}
}
/**
 * Handles refund logic for an order: releases/resets credits and wallet funds, and cancels/refunds card payments.
 * @param {object} order - The order to refund, including payment info and details.
 * @returns {Promise<void>}
 */
export async function handlePaymentRefund(order: any) {
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
			user_id: order.user_id,
			amount: credit_discount_used - credits_wf_amount_reserved,
			type: FUNDS_TYPE.CREDITS_DELIVERY,
			transaction_type: TRANSACTION_TYPE.CREDIT,
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
				await stripe.client.paymentIntents.cancel(order.payment_intent_id);
			} else {
				await stripe.client.refunds.create({
					payment_intent: order.payment_intent_id,
				});
			}
		}
	}
}

/**
 * Builds a lookup table of menu items (by menu_item_id) from active menus.
 * Later items with the same id overwrite previous entries.
 * @param {object[]} menus - Active menus including categories and menu_items.
 * @returns {object} Lookup object keyed by menu_item_id.
 */
function buildMenuItemLookupFromMenus(menus: any[]): Record<string, any> {
	return menus.reduce((lookup, menu) => {
		menu.categories.forEach((category) => {
			category.menu_items.forEach((item) => {
				if (item.is_enabled) lookup[item.menu_item_id] = item; // Last one wins if duplicates
			});
		});
		return lookup;
	}, {});
}

/**
 * Validates that the provided extras and sides are allowed for the specified menu item.
 *
 * This function checks whether each `extra.menu_item_id` and `side.menu_item_id` exists
 * within the allowed `extras` and `sides` arrays of the corresponding parent menu item definition.
 * Throws an error if any invalid extra or side is found.
 *
 * @param {string} itemId - The ID of the parent menu item to validate against.
 * @param {Record<string, any>} menuItemLookup - A lookup object containing all valid menu item definitions keyed by `menu_item_id`.
 * @param {Array<{ menu_item_id: string }>} [extras=[]] - A list of extra items to validate. Each must exist in the parent item's `extras` array.
 * @param {Array<{ menu_item_id: string }>} [sides=[]] - A list of side items to validate. Each must exist in the parent item's `sides` array.
 * @throws Will throw an error if the parent menu item is not found or if any extra or side is not valid for the item.
 */
function validateExtrasAndSides(
	itemId: string,
	menuItemLookup: Record<string, any>,
	extras: Array<{ menu_item_id: string }> = [],
	sides: Array<{ menu_item_id: string }> = []
) {
	const menuDef = menuItemLookup[itemId];
	if (!menuDef) throw new Error(`menu_item_id "${itemId}" not found in menuItemLookup`);

	for (const extra of extras) {
		if (!menuDef.extras.includes(extra.menu_item_id)) {
			throw new Error(`Invalid extra "${extra.menu_item_id}" for menu_item "${itemId}"`);
		}
	}

	for (const side of sides) {
		if (!menuDef.sides.includes(side.menu_item_id)) {
			throw new Error(`Invalid side "${side.menu_item_id}" for menu_item "${itemId}"`);
		}
	}
}

/**
 * Enriches an order item with corresponding data from the menu item lookup, validating its extras and sides.
 *
 * This function merges the provided `orderItem` with its definition from the `menuItemLookup`, ensuring
 * that all listed extras and sides are valid. If the item contains a `replaced_item` that is not marked
 * as removed, it is recursively enriched as well. If the replaced item is removed or not present,
 * `replaced_item` will be omitted from the result.
 *
 * The returned object includes:
 * - Original order item properties
 * - Overwritten fields from the menu item definition
 * - Preserved `extras` and `sides` from the original order item
 * - Enriched `replaced_item`, if applicable
 *
 * @param {Object} orderItem - The order item to enrich. Must contain a valid `menu_item_id`.
 * @param {Record<string, any>} menuItemLookup - A lookup object mapping `menu_item_id` to menu item definitions fetched from the database.
 * @returns {Object} The enriched order item with validated extras, sides, and optionally a replaced item.
 * @throws {Error} If the `menu_item_id` is not found in the lookup or if any extra or side is invalid.
 */
function enrichItem(orderItem: any, menuItemLookup: Record<string, any>): any {
	const itemId = orderItem.menu_item_id;

	if (!menuItemLookup[itemId]) {
		throw new Error(`menu_item_id "${itemId}" not found in menuItemLookup`);
	}

	validateExtrasAndSides(itemId, menuItemLookup, orderItem.extras, orderItem.sides);

	let enrichedReplacedItem = null;
	if (orderItem.replaced_item && !orderItem.replaced_item.removed) {
		enrichedReplacedItem = enrichItem(orderItem.replaced_item, menuItemLookup);
	}

	return {
		...orderItem,
		...menuItemLookup[itemId],
		sides: orderItem.sides,
		extras: orderItem.extras,
		replaced_item: enrichedReplacedItem || undefined,
	};
}

/**
 * Validates and enriches a list of order items using a menu item lookup.
 *
 * For each non-removed order item in the input array, this function:
 * - Validates that the item exists in the `menuItemLookup`
 * - Validates the extras and sides for each item
 * - Enriches the item with its corresponding menu definition
 * - Recursively enriches any valid `replaced_item`
 *
 * Removed items (`removed === true`) are skipped entirely and thus removed from the result.
 *
 * @param {Array<Object>} orderItems - The list of raw order items to validate and enrich.
 * @param {Record<string, any>} menuItemLookup - Lookup table of menu items keyed by `menu_item_id`.
 * @returns {Array<Object>} A list of enriched and validated order items.
 * @throws {Error} If an item is missing from the lookup or includes invalid extras or sides.
 */
function validateAndEnrichOrderItems(orderItems: any[], menuItemLookup: Record<string, any>): any[] {
	const result = [];

	for (const orderItem of orderItems) {
		if (orderItem.removed) continue;

		const enriched = enrichItem(orderItem, menuItemLookup);
		result.push(enriched);
	}

	return result;
}

/**
 * Rounds a number to two decimal places.
 * @param {number} number - The value to round.
 * @returns {number} Rounded value to 2 decimals.
 */
function rounded(number: number): number {
	return Math.round(number * 100) / 100;
}
/**
 * Calculates the total price and total discount for a single enriched order item.
 *
 * This includes base item price (with discount), plus extras and sides.
 * - If the item is weighted and modified, the price is limited with a 120% cap.
 * - If the item is a replacement, the final item total is capped at the replaced item's price,
 *   or 120% of it if weighted.
 *
 * Extras and sides are also calculated based on their respective prices, discounts, and parent quantity.
 *
 * @param {Object} item - The enriched order item to calculate totals for.
 * @param {number} item.quantity - Quantity of the item.
 * @param {number} [item.old_quantity] - The previous quantity (used for modified weighted items).
 * @param {boolean} [item.is_weighted] - Indicates if the item is priced by weight.
 * @param {boolean} [item.is_modified] - Indicates if the item has been modified after ordering.
 * @param {number} [item.price] - Base unit price of the item.
 * @param {number} [item.discount] - Discount percentage (0–1) on the item.
 * @param {Object[]} [item.extras] - Extras with individual prices and discounts.
 * @param {Object[]} [item.sides] - Sides with individual prices and discounts.
 * @param {Object} [item.replaced_item] - Original item (if this item replaces another).
 * @returns {{ line_total: number, line_discount: number }} - The total price and total discount for the item line.
 */
function calculateItemTotal(item: any): { line_total: number; line_discount: number } {
	function getCappedPrice(item: any, replaced = false): number {
		let quantity = Number(item.quantity ?? 0);
		let discount = Number(item.discount ?? 0);
		let unitPrice = Number(item.price ?? 0) * (1 - discount);

		if (item.is_weighted) {
			unitPrice = unitPrice / 1000;
		}

		let basePrice = quantity * unitPrice;

		if (item.is_weighted) {
			let oldQty = null;
			if (item.old_quantity != null && item.old_quantity !== '') {
				const parsed = Number(item.old_quantity);
				if (isNaN(parsed)) {
					throw new Error(`Invalid old_quantity: '${item.old_quantity}' is not a number`);
				}
				oldQty = parsed;
			}

			const capQty = oldQty ?? quantity;
			const capPrice = unitPrice * capQty * WEIGHTED_ITEM_QTY_INCREASE_LIMIT;
			// if replaced should take capprice of replaced item
			if (replaced) {
				return rounded(capPrice);
			}
			basePrice = Math.min(basePrice, capPrice);
			// console.log('capQty', capQty, capPrice, basePrice);
		}

		if (item.replaced_item) {
			const replacedPrice = getCappedPrice(item.replaced_item, true);
			return rounded(Math.min(basePrice, replacedPrice));
		}

		return rounded(basePrice);
	}

	const finalItemTotal = getCappedPrice(item);

	const quantity = Number(item.quantity ?? 0);
	const unitPrice = Number(item.price ?? 0);
	const fullItemPriceBeforeCap = rounded((item.is_weighted ? unitPrice / 1000 : unitPrice) * quantity);
	const baseItemDiscount = rounded(fullItemPriceBeforeCap - finalItemTotal);
	console.log(fullItemPriceBeforeCap);

	// Extras
	let extrasTotal = 0;
	let extrasDiscount = 0;
	for (const extra of item.extras ?? []) {
		const extraPrice = Number(extra.price ?? 0);
		const extraDiscount = Number(extra.discount ?? 0);
		extrasTotal += extraPrice * (1 - extraDiscount) * quantity;
		extrasDiscount += extraPrice * extraDiscount * quantity;
	}

	// Sides
	let sidesTotal = 0;
	let sidesDiscount = 0;
	for (const side of item.sides ?? []) {
		const sidePrice = Number(side.price ?? 0);
		const sideDiscount = Number(side.discount ?? 0);
		sidesTotal += sidePrice * (1 - sideDiscount) * quantity;
		sidesDiscount += sidePrice * sideDiscount * quantity;
	}

	return {
		line_total: rounded(finalItemTotal + extrasTotal + sidesTotal),
		line_discount: rounded(baseItemDiscount + extrasDiscount + sidesDiscount),
	};
}

/**
 * Calculates total price and total discount across all enriched order items.
 *
 * Filters out removed items. For each valid item:
 * - Computes `line_total` and `line_discount` using `calculateItemTotal`.
 * - Flags `is_student` if any item's category has the `student-meals` tag.
 *
 * Adds computed values to each item and accumulates grand totals.
 *
 * @param {Array<Object>} enrichedOrderItems - List of validated and enriched order items.
 * @returns {{
 *   items: Array<Object>,
 *   grand_total: number,
 *   discount_total: number,
 *   is_student: boolean
 * }} - Resulting order breakdown with totals and student meal flag.
 */
function calculateOrderTotals(enrichedOrderItems: any) {
	let orderTotal = 0;
	let discountTotal = 0;
	let is_student = false;
	const resultItems = [];

	for (const item of enrichedOrderItems) {
		if (item.removed) continue;

		const { line_total, line_discount } = calculateItemTotal(item);
		console.log('line totals for item:', item.menu_item_id, line_total, line_discount);

		orderTotal += line_total;
		discountTotal += line_discount;

		if (item?.menu_category?.menu_categories_categories?.some((mcc) => mcc.category?.tag === 'student-meals')) {
			is_student = true;
		}

		resultItems.push({
			...item,
			line_total,
			line_discount,
		});
	}

	return {
		items: resultItems,
		grand_total: rounded(orderTotal),
		discount_total: rounded(discountTotal),
		is_student,
	};
}

/**
 * Validates, enriches, and calculates pricing details for a set of order items.
 *
 * Steps:
 * 1. Retrieves active menus for the given business and builds a lookup of valid menu items.
 * 2. Validates and enriches each order item against the menu definition (including extras/sides).
 * 3. Calculates:
 *    - Grand total (line item totals)
 *    - Discount total
 *    - Delivery cost (based on distance and student meal status)
 *    - Final total price (sum of all above)
 *
 * Throws if menu or item data is missing or invalid.
 *
 * @async
 * @param {Object} order - The order object containing items and business context.
 * @param {string} order.business_id - ID of the business to retrieve menu data for.
 * @param {Object[]} order.items - Array of order items to be validated and priced.
 * @param {Object} [order.business] - The associated business object (with `minimum_order`).
 * @returns {Promise<{
 *   items: Object[],              // Enriched and priced order items
 *   grand_total: number,          // Total cost before discount
 *   discount_total: number,       // Total discount amount
 *   delivery_cost: number,        // Delivery fee for this order
 *   total_price: number,          // Final total including all fees
 *   is_student: boolean           // Whether the order qualifies for student pricing
 * }>}
 * @throws {Error} If no active menus are found, or validation fails.
 */
async function calculateAndVerifyPriceForOrderItems(order: DeliveryOrderDetail) {
	// 2. Create lookup from menu_items
	const active_menus = await MenuDao.getMenuByBusinessId(order.business_id);
	if (!active_menus || active_menus.length === 0) {
		throw new Error('Menu not found');
	}
	const menuItemLookup = buildMenuItemLookupFromMenus(active_menus);
	// 3. Validate and enrich order items
	const enrichedOrderItems = validateAndEnrichOrderItems(order.items, menuItemLookup);
	const { items, grand_total, discount_total, is_student } = calculateOrderTotals(enrichedOrderItems);

	const delivery_cost = calculateOrderDeliveryCost(order, is_student);

	// const minimum_order = order.business?.minimum_order ?? 0;
	// const minimum_order_fee = grand_total < minimum_order ? minimum_order - grand_total : 0;

	const total_price = grand_total + delivery_cost + (order.details?.minimum_order_fee ?? 0);

	return {
		items,
		grand_total,
		discount_total,
		delivery_cost,
		// minimum_order_fee,
		total_price,
		is_student,
	};
}

/**
 * Determines if reserved wallet funds should be released for an order based on status and age.
 * @param {object} order - Order with status and updated_at.
 * @param {string} service_type - 'delivery' | 'taxi'.
 * @param {Date} date_threshold - Funds are eligible if order updated_at is older than this.
 * @returns {boolean} True to release reserved funds; otherwise false.
 */
function shouldReleaseFunds(order: any, service_type: 'delivery' | 'taxi', date_threshold: Date): boolean {
	const updatedAt = new Date(order.updated_at);
	if (updatedAt > date_threshold) return false;
	if (service_type === 'delivery' && order.status === DELIVERY_ORDER_STATUS.ORDER_FINISHED_FAIL) return true;
	if (
		service_type === 'taxi' &&
		[TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED].includes(order.status)
	)
		return true;
	return false;
}

/**
 * Releases reserved wallet funds for failed/canceled orders older than a set threshold.
 * @returns {Promise<void>}
 */
export async function releaseWFForFailedOrders(): Promise<void> {
	const reservedWFs = await WalletFundsDao.getAllReservedWalletFunds();
	const grouped = reservedWFs
		.filter((wf: any) => wf.reserved_order)
		.reduce<Record<string, typeof reservedWFs>>((acc, wf: any) => {
			const id = wf.reserved_order as string; // filtered so defined
			(acc[id] ||= []).push(wf);
			return acc;
		}, {});
	const now = new Date();
	const date_threshold = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
	const releases: Promise<unknown>[] = [];
	for (const orderId of Object.keys(grouped)) {
		let order: any = await DeliveryOrderDao.getOrder(orderId);
		let service_type: 'delivery' | 'taxi' = 'delivery';
		if (!order) {
			order = await TaxiOrderDao.getOrder(orderId);
			service_type = 'taxi';
		}
		if (!order) continue;
		if (shouldReleaseFunds(order, service_type, date_threshold)) {
			for (const wf of grouped[orderId] || []) {
				releases.push(WalletFundsDao.releaseFunds(wf.wallet_funds_id, wf.amount).catch(() => {}));
			}
		}
	}
	await Promise.allSettled(releases);
}

/**
 * Calculates haversine distance in meters between two lat/lng points.
 * @param {LatLng} start - Starting coordinates.
 * @param {LatLng} end - Ending coordinates.
 * @returns {number} Distance in meters.
 */
export function calculateDistanceBetweenTwoPoints(
	start: { lat: number; lng: number },
	end: { lat: number; lng: number }
): number {
	const R = 6371e3; // metres
	const a1 = (start.lat * Math.PI) / 180;
	const a2 = (end.lat * Math.PI) / 180;
	const b1 = ((end.lat - start.lat) * Math.PI) / 180;
	const b2 = ((end.lng - start.lng) * Math.PI) / 180;
	const a = Math.sin(b1 / 2) ** 2 + Math.cos(a1) * Math.cos(a2) * Math.sin(b2 / 2) ** 2;
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return R * c;
}

/**
 * Computes delivery cost based on haversine distance and student-meal eligibility.
 * @param {object} orderData - Order data with delivery and pickup coordinates in details.
 * @param {boolean} is_student - Whether student pricing applies (may waive delivery for student meals).
 * @returns {number} Delivery cost in currency units.
 */
export function calculateOrderDeliveryCost(orderData: any, is_student: boolean): number {
	if (orderData?.details?.type === 'delivery' && !is_student) {
		const distance = haversineDistance(
			orderData.delivery_location?.coordinates,
			orderData.pickup_location?.coordinates
		);
		const pricePer500m = DELIVERY_COST_CALCULATION.COST_PER_500;
		const delivery_cost = Math.round(distance / 0.5) * pricePer500m;
		return Math.max(DELIVERY_COST_CALCULATION.MINIMUM_COST, delivery_cost);
	}
	return 0;
}

/**
 * Verifies that the client-provided order costs match the server-calculated values.
 * Checks delivery cost, minimum order fee, sub-total, discounts, and total price.
 * @param {object} orderData - Order body sent from client including items and details.
 * @returns {Promise<boolean>} True if costs are valid and consistent; otherwise false.
 */
export async function verifyOrderCosts(orderData: any): Promise<boolean> {
	const menu_item_ids = Array.isArray(orderData?.items) ? orderData.items.map((i: any) => i.menu_item_id) : [];
	const merchant_business = (await BusinessDao.getBusinessById(
		orderData.details.business_id
	)) as BusinessByIdResponse | null;
	const minimumOrderFee =
		orderData.module === MODULE.STORES
			? (merchant_business as any)?.stores_module?.minimum_order
			: (merchant_business as any)?.food_drinks_module?.minimum_order;
	const db_items = await MenuItemDao.getMenuItemsByIds(menu_item_ids);
	const order_items = await Promise.all(
		orderData.items.map(async (item: any) => {
			const db_item = db_items.find((i: any) => i.menu_item_id === item.menu_item_id);
			let extras: any[] = [];
			if (Array.isArray(item?.extras) && item.extras.length)
				extras = await MenuItemDao.getMenuItemsByIds(item.extras.map((e: any) => e.menu_item_id));
			let sides: any[] = [];
			if (Array.isArray(item?.sides) && item.sides.length)
				sides = await MenuItemDao.getMenuItemsByIds(item.sides.map((s: any) => s.menu_item_id));
			return { ...db_item, extras, sides, quantity: item.quantity };
		})
	);
	let orderTotal = 0;
	let discountTotal = 0;
	let is_student = false;
	for (const item of order_items) {
		let price = Number((item as any)?.price) || 0;
		const discount = Number((item as any)?.discount) || 0;
		const quantity = Number((item as any)?.quantity) || 0;
		if ((item as any).is_weighted) price = (price / 1000) * WEIGHTED_ITEM_QTY_INCREASE_LIMIT;
		if (
			(item as any)?.menu_category?.menu_categories_categories?.some(
				(mcc: any) => mcc.category.tag === 'student-meals'
			)
		)
			is_student = true;
		const discountedPrice = price - price * discount;
		const roundedDiscountedPrice = Math.round(discountedPrice * quantity * 100) / 100;
		orderTotal += roundedDiscountedPrice;
		discountTotal += discount > 0 ? price * quantity - roundedDiscountedPrice : 0;
		for (const extra of (item as any)?.extras || []) {
			const extraPrice = Number(extra?.price) || 0;
			orderTotal += extraPrice * (1 - (extra.discount || 0)) * quantity;
			discountTotal += extraPrice * (extra.discount || 0) * quantity;
		}
		for (const side of (item as any)?.sides || []) {
			const sidePrice = Number(side?.price) || 0;
			orderTotal += sidePrice * (1 - (side.discount || 0)) * quantity;
			discountTotal += sidePrice * (side.discount || 0) * quantity;
		}
	}
	const delivery_cost = calculateOrderDeliveryCost(orderData, is_student);
	if (delivery_cost.toFixed(2) !== orderData.details.delivery_cost.toFixed(2)) return false;
	const rounded = (n: number) => Math.round(n * 100) / 100;
	orderTotal = rounded(orderTotal);
	const expectedFee = minimumOrderFee - orderTotal;
	const actualFee = orderData.details.minimum_order_fee;
	const checkMinimumFee = orderTotal < minimumOrderFee;
	if (checkMinimumFee && actualFee.toFixed(2) !== expectedFee.toFixed(2)) return false;
	discountTotal = checkMinimumFee ? discountTotal - expectedFee : discountTotal;
	discountTotal = discountTotal > 0 ? discountTotal : 0;
	if (
		orderTotal.toFixed(2) !== orderData.details.sub_total_price.toFixed(2) ||
		orderData.details.discount_savings.toFixed(2) !== discountTotal.toFixed(2)
	)
		return false;
	const expected_total_sum = delivery_cost + orderTotal + (checkMinimumFee ? expectedFee : 0);
	if (orderData.details.total_price.toFixed(2) !== expected_total_sum.toFixed(2)) return false;
	return true;
}

/**
 * Creates a delivery order and initializes payment flow (card/wallet/cash), stock sync, and notifications.
 * Includes validation of provided costs, distance checks, credit reservations, and split payments.
 * @param {object} orderBody - Order payload from client.
 * @param {string} user_id - The id of the ordering user.
 * @param {string} [return_url] - Optional return URL for payment redirection flows.
 * @returns {Promise<{order: object, payment_intent?: object}>} The created order and optional payment intent.
 */
export async function generateOrder(
	orderBody: any,
	user_id: string,
	return_url?: string
): Promise<{ order: object; payment_intent?: object }> {
	console.info('CREATE DELIVERY ORDER: ', orderBody);
	let order;
	try {
		const isValidOrder = await verifyOrderCosts(orderBody);
		if (!isValidOrder) throw new Error('Invalid order data!');
		let orderData = {
			...orderBody,
			status: DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_PENDING,
		};
		let business = await BusinessDao.getBusinessById(orderData.details.business_id);
		if (!business) {
			throw new Error('Business not found!');
		} else if (
			(!business.stores_module?.online && orderData.module === MODULE.STORES) ||
			(!business.food_drinks_module?.online && orderData.module === MODULE.FOOD_DRINKS)
		) {
			throw new Error('Business is currently offline!');
		}
		if (orderData.details.type === 'delivery') {
			const pickup = orderBody.business_local_location_id
				? orderBody.pickup_location?.coordinates
				: {
						latitude: business.delivery_address?.latitude,
						longitude: business.delivery_address?.longitude,
					};
			const distance = haversineDistance(orderData.delivery_location.coordinates, pickup);
			if (distance && distance > MAX_DELIVERY_RADIUS_KM) {
				throw new Error('Distance out of delivery range!');
			}
		}

		let user = await UsersDao.getUserById(user_id);
		const customer_acc = user.stripe_customer_id;
		const available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(user_id);
		if (orderData.payment.type === 'WALLET') {
			const TOTAL_PRICE_CENT = Math.round(orderData.details.total_price * 100);
			if (available_wallet_balances['DELIVERY'] + available_wallet_balances[null] < TOTAL_PRICE_CENT / 100) {
				throw new Error('Insufficient funds');
			}
		}
		if (orderData.payment.type === 'CARD') {
			if (!customer_acc) {
				throw new Error('Missing stripe_customer_id');
			}
		}
		if (orderData.business_local_location_id) {
			const id = orderData.business_local_location_id;
			delete orderData.business_local_location_id;
			orderData.business_local_location = {
				connect: {
					business_local_location_id: id,
				},
			};
		}
		order = await DeliveryOrderDao.createOrder(orderData, user_id);
		// let delivery_business = await BusinessDao.getBusinessById(orderData?.delivery_driver?.business_id);
		orderData.telephone = user.telephone;
		let payment_intent;
		if (order.details.type === 'delivery') {
			let { result } = await gApi.distanceBetweenTwoPoints(
				order.delivery_location.coordinates,
				order.pickup_location.coordinates,
				'driving',
				new Date(),
				'best_guess'
			);
			let distanceM = result.rows[0].elements[0].distance.value;
			let distanceKm = distanceM / 1000;
			order.details.distance = distanceKm;
			order.details.duration = result.rows[0].elements[0].duration.value;
			if (order.scheduled?.time && order.scheduled?.date) {
				const scheduledTime = new Date(order.scheduled.time);
				const durationMs = order.details.duration * 1000;
				const timezoneOffsetMs = scheduledTime.getTimezoneOffset() * 60 * 1000;
				order.details.ready_for_pickup_at = order.business_local_location_id
					? scheduledTime
					: new Date(scheduledTime.getTime() - timezoneOffsetMs - durationMs).toISOString().slice(0, -1);
				order.details.customer_expected_delivery_at = order.business_local_location_id
					? new Date(scheduledTime.getTime() - timezoneOffsetMs + durationMs).toISOString().slice(0, -1)
					: scheduledTime;
			}
			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				details: order.details,
			});
		} else if (order.scheduled_at) {
			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				details: {
					...order.details,
					ready_for_pickup_at: order.scheduled_at,
				},
			});
		}
		console.log('stripeCustomer', user.stripe_customer_id);
		const restaurant_acc = business.stripe_account_id;
		const pm_id = orderData.payment.payment_method_id;
		// Handle credits spending
		const TOTAL_PRICE_CENTS = Math.round(orderData.details.total_price * 100); //already includes delivery cost
		const CREDITS_AMOUNT_RESERVED = orderData?.allow_credits_usage
			? (
					await WalletFundsHelpers.reserveCreditsForOrder(
						user.user_id,
						TOTAL_PRICE_CENTS,
						order.order_id,
						FUNDS_TYPE.CREDITS_DELIVERY
					)
				).reduce((sum, wf) => sum + wf.amount, 0)
			: 0;
		const DISCOUNTED_COMBINED_COST_CENTS = TOTAL_PRICE_CENTS - CREDITS_AMOUNT_RESERVED;
		order.details.credit_discount = CREDITS_AMOUNT_RESERVED;
		order = await DeliveryOrderDao.updateOrder(order.order_id, order);
		console.info(order.details);
		const results = await calculateDeliveryOrderPaymentCuts(order);
		console.info('calculateDeliveryOrderPaymentCuts results: ', JSON.stringify(results, null, 2));
		const { MERCHANT_CUT } = results;
		if (DISCOUNTED_COMBINED_COST_CENTS > 0) {
			if (order.payment.type === 'CARD' || order.payment.type === 'PLATFORM') {
				payment_intent = await stripe.createSplitPayment(
					customer_acc,
					restaurant_acc,
					order.order_id,
					pm_id,
					DISCOUNTED_COMBINED_COST_CENTS,
					MERCHANT_CUT,
					return_url
				);
				orderData.payment_intent_id = payment_intent.id;
				order = await DeliveryOrderDao.updateOrder(order.order_id, {
					payment_intent_id: payment_intent.id,
				});
			} else if (order.payment.type === 'WALLET') {
				// handle wallet payment
				try {
					if (available_wallet_balances[null] < DISCOUNTED_COMBINED_COST_CENTS / 100) {
						throw new Error('Insufficient funds');
					}
					// await UsersDao.removeWalletBalance(user_id, DISCOUNTED_COMBINED_COST_CENTS/100, order.order_id);
					await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
						user_id,
						DISCOUNTED_COMBINED_COST_CENTS,
						order.order_id
					);
					await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.PENDING);
				} catch (err) {
					order = await DeliveryOrderDao.updateOrder(order.order_id, {
						payment: {
							...order.payment,
							status: 'UNPAID',
						},
					});
					order = await DeliveryOrderDao.updateOrderStatus(
						order.order_id,
						DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED
					);
					io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
					order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.FAIL);
					io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
					throw err;
				}
			} else if (order.payment.type === 'CASH') {
				order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.PENDING);
			} else {
				throw new Error('Unsuported payment type.');
			}
		} else if (CREDITS_AMOUNT_RESERVED > 0 && DISCOUNTED_COMBINED_COST_CENTS === 0) {
			// Order fully paid with credits
			await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.PENDING);
		} else {
			throw new Error('Invalid costs calculated!!');
		}
		//TODO: handle business logo
		if (order.stores_id) {
			await handleStockSync(order);
		}
		console.info('order created:', order);
		SocketStore.addUserToRoom(user_id, `order_${order.order_id}`);
		BusinessHelpers.joinAllBusinessUsersToRoom(order.business_id, `order_${order.order_id}`);
		if (order.status === DELIVERY_ORDER_STATUS.PENDING) {
			io.to('orders_' + order.business_id).emit('new_order', order);
		}
		return { order, payment_intent };
	} catch (e) {
		console.error('Error generating order:', e);
		if (order && order?.order_id && order?.user_id) {
			await handlePaymentCleanup(order);
		}
		throw new Error('Error generating order:', e.message);
	}
}

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
	CalculateOrderLobbyOrderDetails,
	generateOrder,
	calculateOrderDeliveryCost,
	calculateAndVerifyPriceForOrderItems,
};
