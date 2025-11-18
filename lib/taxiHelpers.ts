import { randomUUID } from 'crypto';

import moment from 'moment';
import {
	FUNDS_TYPE,
	ORDER_TYPE,
	Prisma,
	TAXI_ORDER_STATUS,
	TRANSACTION_TYPE,
	VEHICLE_CATEGORY,
	VEHICLE_CLASS,
} from '@prisma/client';
import { Socket } from 'socket.io';
import Stripe from 'stripe';

import BusinessUsersDao from '../dao/BusinessUsers.js';
import UsersDao from '../dao/User.js';
import TaxiOrderDao from '../dao/TaxiOrder.js';
import DriverDao from '../dao/Driver.js';
import socket from '../socket.js';
import {
	TAXI_STARTING_FEE,
	COST_PER_KM,
	DRIVE_FEE,
	CARGO_TRANSFER_FEE,
	SERVICE_TYPE,
	VEHICLE_CAPACITY,
} from './constants.js';
import prisma from '../prisma/prisma.js';
import gApi, { LatLng } from './gApis.js';
import { UserSockets as UserSockets$0 } from '../socket.js';
import { sendNotificationToUser } from './oneSignal.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { getPriceSurgeDataForTransferTrip } from './priceSurgeHelpers.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import stripe from './stripe.js';
import WalletFundsHelpers from './WalletFundsHelpers.js';
import type { TaxiOrderDetail } from '../schemas/dto/TaxiOrders/taxiOrder.dto.ts';
import { CandidateDriver } from './deliveryHelpers.ts';
import { TaxiLocation } from '../schemas/dto/Taxi/taxiorder.dto.ts';
import { DriverDetail } from '../schemas/dto/Driver/driver.dto.ts';
import { CreateTaxiOrder } from '../schemas/dto/TaxiOrders/taxiOrder.validators.ts';
import { WalletFundsBase } from '../schemas/dto/WalletFunds/walletFunds.dto.ts';

const { io, SocketStore } = socket;
const NUMBER_OF_DRIVERS_TO_SEND = 3;
const UserSockets = { UserSockets: UserSockets$0 }.UserSockets;
const MAX_PENDING_ORDERS = 1;
/**
 * Send scheduled order notifications 24h and 1h before departure to users and drivers.
 * @returns {Promise<boolean|void>} True on completion.
 */
async function scheduledOrdersNotificationsHandler(): Promise<boolean | void> {
	try {
		const now = new Date();
		const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);
		twentyFourHoursLater.setSeconds(0, 0);
		const twentyFourHoursLaterEnd = new Date(twentyFourHoursLater.getTime() + 60 * 1000 - 1);
		const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
		oneHourLater.setSeconds(0, 0);
		const oneHourLaterEnd = new Date(oneHourLater.getTime() + 60 * 1000 - 1);
		const scheduled = await prisma.taxi_orders.findMany({
			where: {
				is_scheduled: true,
				status: {
					in: [TAXI_ORDER_STATUS.PENDING, TAXI_ORDER_STATUS.TAXI_ACCEPTED],
				},
			},
			include: {
				user: true,
				driver: true,
			},
		});
		console.log('SCHEDULED ORDERS', scheduled?.length);
		let startTimestamp = twentyFourHoursLater.getTime();
		let endTimestamp = twentyFourHoursLaterEnd.getTime();
		const DayOrders = scheduled.filter((o: TaxiOrderDetail) => {
			const departureTime = o.preferences?.departure_time
				? new Date(o.preferences.departure_time).getTime()
				: null;
			return departureTime && departureTime >= startTimestamp && departureTime <= endTimestamp;
		});
		startTimestamp = oneHourLater.getTime();
		endTimestamp = oneHourLaterEnd.getTime();
		const HourOrders = scheduled.filter((o: TaxiOrderDetail) => {
			const departureTime = o.preferences?.departure_time
				? new Date(o.preferences.departure_time).getTime()
				: null;
			return departureTime && departureTime >= startTimestamp && departureTime <= endTimestamp;
		});
		console.log('DayOrders', DayOrders?.length, 'HourOrders', HourOrders?.length);
		for (let order of DayOrders) {
			const l10nText = getLocalisedTexts('USER_NOTIFICATIONS', order.user.language);
			const l10nTextHeading = getLocalisedTexts('HEADING', order.user.language);
			await sendNotificationToUser(
				l10nTextHeading?.scheduled_tomorrow,
				l10nText?.scheduled_tomorrow +
					new Date(order.preferences.departure_time).toLocaleTimeString('sl-SI', {
						timeZone: 'Europe/Ljubljana',
						hour: '2-digit',
						minute: '2-digit',
					}),
				order.user_id
			);
			await sendNotificationToUser(
				l10nTextHeading?.scheduled_tomorrow,
				l10nText?.scheduled_tomorrow +
					new Date(order.preferences.departure_time).toLocaleTimeString('sl-SI', {
						timeZone: 'Europe/Ljubljana',
						hour: '2-digit',
						minute: '2-digit',
					}),
				order.driver?.user_id
			);
		}
		for (let order of HourOrders) {
			const l10nText = getLocalisedTexts('USER_NOTIFICATIONS', order.user.language);
			const l10nTextHeading = getLocalisedTexts('HEADING', order.user.language);
			await sendNotificationToUser(l10nTextHeading?.scheduled_hour, l10nText?.scheduled_hour, order.user_id);
			await sendNotificationToUser(
				l10nTextHeading?.scheduled_hour,
				l10nText?.scheduled_hour,
				order.driver?.user_id
			);
		}
		return true;
	} catch (error) {
		console.error(error);
	}
}
/**
 * Await a number of seconds.
 * @param {number} seconds - Number of seconds to wait.
 * @returns {Promise<void>}
 */
function waitSeconds(seconds: number): Promise<void> {
	return new Promise((resolve) => {
		globalThis.setTimeout(resolve, seconds * 1000);
	});
}
/**
 * Trigger a driver search after 20 seconds.
 * @returns {Promise<void>}
 */
async function searchAfter20Seconds(): Promise<void> {
	await waitSeconds(20);
	checkIfOrdersNeedSending();
}
/**
 * Trigger a driver search after 40 seconds.
 * @returns {Promise<void>}
 */
async function searchAfter40Seconds(): Promise<void> {
	await waitSeconds(40);
	checkIfOrdersNeedSending();
}
/**
 * Revoke accepted orders from drivers repeatedly with pauses to enforce timeouts.
 * @returns {Promise<void>}
 */
async function revokeAcceptedOrdersFromDriverHandler(): Promise<void> {
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
}
/**
 * Revoke all accepted taxi orders from their assigned drivers.
 * @returns {Promise<void>}
 */
async function revokeAcceptedOrdersFromDriver(): Promise<void> {
	const orders = await TaxiOrderDao.getAcceptedOrders();
	for (let order of orders) {
		await revokeTaxiOrderFromDrivers(order.order_id, true);
	}
}
/**
 * Find eligible drivers for a taxi order and send the order to them.
 * @param {object} order - Taxi order entity.
 * @returns {Promise<void>}
 */
async function findTaxiOrderDrivers(order: TaxiOrderDetail): Promise<void> {
	console.log('hi');
	let drivers: Array<CandidateDriver> = [];
	console.log('Finding drivers for order: ', order.order_id);
	if (order?.driver_id) {
		// If a specific driver is selected in the order creation, send the order only to that driver
		// after x minutes, we can send it to other drivers
		const thresholdTime = new Date(Date.now() - 5 * 60 * 1000);
		const expired = new Date(order.created_at as string).getTime() < thresholdTime.getTime();
		console.log('Order created at:', order.created_at, 'Threshold time:', thresholdTime);
		const driver = await DriverDao.getDriverById(order.driver_id);
		if (driver?.on_order) {
			await revokeTaxiOrderFromDriver(order.order_id, order.driver_id, order);
		} else if (driver && !expired) {
			drivers = [driver as CandidateDriver];
		} else if (driver && expired) {
			drivers = (await selectTaxiOrderDrivers(order)) as CandidateDriver[];
		}
	} else {
		drivers = (await selectTaxiOrderDrivers(order)) as CandidateDriver[];
	}
	console.log(
		'Drivers found: ',
		drivers?.map((d: CandidateDriver) => d.driver_id)
	);
	let pushDrivers: Array<Promise<void>> = [];
	if (Array.isArray(drivers)) {
		for (let driver of drivers) {
			pushDrivers.push(sendTaxiOrderToDriver(order, driver as DriverDetail));
		}
	}
	if (pushDrivers.length !== 0) {
		try {
			await Promise.all(pushDrivers);
			await TaxiOrderDao.updateOrderLastSentAt(order.order_id);
		} catch (e) {
			console.error('Find drivers error', e);
			throw e;
		}
	} else {
		console.log('No drivers found for order: ', order.order_id);
	}
}
/**
 * Compare durations (as numbers) for sorting.
 * @param {{duration:string}} a
 * @param {{duration:string}} b
 * @returns {number}
 */
// eslint-disable-next-line no-unused-vars
function compareDurations(a: { duration: string }, b: { duration: string }): number {
	return parseInt(a.duration) - parseInt(b.duration);
}
/**
 * Count pending orders already sent to a driver.
 * @param {string} driver_id
 * @returns {Promise<number>} Number of pending orders.
 */
async function getNumberPendingOrders(driver_id: string): Promise<number> {
	let sent_orders = await TaxiOrderDao.getAlreadySentOrdersByDriverId(driver_id);
	if (!sent_orders) return 0;
	return sent_orders.length;
}
/**
 * Select the best drivers for an order based on proximity, availability, and pending count.
 * @param {TaxiOrderDetail} order - Taxi or transfer order.
 * @returns {Promise<CandidateDriver[]|void>} Array of eligible driver objects.
 */
async function selectTaxiOrderDrivers(order: TaxiOrderDetail): Promise<CandidateDriver[] | void> {
	try {
		let drivers: CandidateDriver[] = [];
		let radius = 200;
		let attempts = order.find_drivers_attempts ?? 0;
		let vehicleClass = order.preferences?.vehicle_class || '';
		let category = order.preferences?.vehicle_category || '';
		let vehicleFilters = {
			class:
				vehicleClass === VEHICLE_CLASS.ANY || vehicleClass === VEHICLE_CLASS.PRIVATE_DRIVER ? '' : vehicleClass,
			category: category === VEHICLE_CLASS.ANY ? '' : category,
		};
		if (attempts > 4) {
			vehicleFilters.category = '';
		}
		if (attempts > 8) {
			// offer transfer
		}
		while (drivers.length === 0 && radius < 30000) {
			let fetchedDrivers = await prisma.drivers.inRadius(
				order.pickup_location?.coordinates,
				radius,
				order.preferences?.ride_requirements,
				vehicleFilters,
				order.estimates?.region_id,
				order.estimates?.region_license
			);
			console.log('in radius', fetchedDrivers?.length);
			const onlineDrivers = (
				await Promise.all(
					fetchedDrivers.map(async (driver: any) => {
						const numPendingOrders = await getNumberPendingOrders(driver.driver_id);
						console.log('numPendingOrders', numPendingOrders, driver.driver_id);
						if (numPendingOrders >= MAX_PENDING_ORDERS) return null;
						const isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver);
						console.log('isSent', isSent, driver.driver_id);
						if (isSent && isSent.rejected === true) return null;
						const hasSocket = !!UserSockets.get(driver.user_id);
						console.log('hasSocket', hasSocket, driver.user_id);
						if (!hasSocket) return null;
						return driver;
					})
				)
			).filter(Boolean) as CandidateDriver[];
			console.log('onlineDrivers', onlineDrivers?.length);
			drivers = onlineDrivers;
			radius += 1000;
		}
		let acceptableDrivers: CandidateDriver[] = [];
		if (drivers.length > 0) {
			for (let driver of drivers) {
				if (order.type === ORDER_TYPE.TAXI && (!driver.handles_taxi_orders || !driver.taxi_orders_toggled)) {
					continue;
				} else if (
					order.type !== ORDER_TYPE.TAXI &&
					(!driver.handles_transfer_orders || !driver.transfer_orders_toggled)
				) {
					continue;
				}
				let numPendingOrders = await getNumberPendingOrders(driver?.driver_id as string);
				let { distanceM, duration } = await gApi.distanceBetweenTwoPoints(
					order.pickup_location?.coordinates,
					driver?.location?.coordinates as LatLng,
					'driving',
					new Date(),
					'best_guess'
				);
				driver.distanceM = distanceM;
				driver.duration = duration;
				driver.numPendingOrders = numPendingOrders;
				acceptableDrivers.push(driver);
			}
		}
		acceptableDrivers.sort((a, b) => {
			if (parseInt(a.duration || '') !== parseInt(b.duration || '')) {
				return parseInt(a.duration || '') - parseInt(b.duration || '');
			}
			return (a.numPendingOrders ?? 0) - (b.numPendingOrders ?? 0);
		});
		acceptableDrivers = acceptableDrivers.slice(0, NUMBER_OF_DRIVERS_TO_SEND);
		const eligibleDrivers: DriverDetail[] = [];
		for (let driver of acceptableDrivers) {
			const detailedDriver = await DriverDao.getDriverById(driver?.driver_id as string);
			if (detailedDriver) {
				eligibleDrivers.push(detailedDriver);
			}
		}
		await TaxiOrderDao.updateOrder(order.order_id, {
			find_drivers_attempts: (order.find_drivers_attempts ?? 0) + 1,
		});
		console.log(
			'Eligible drivers: ',
			eligibleDrivers.map((d: DriverDetail) => d.driver_id)
		);
		return eligibleDrivers;
	} catch (e) {
		console.log('select driver:', e);
	}
}
/**
 * Send a taxi order to a specific driver via socket and push notification.
 * @param {TaxiOrderDetail} order - Taxi order entity.
 * @param {DriverDetail} driver - Driver entity.
 * @param {boolean} [force=false] - Force resending even if rejected.
 * @returns {Promise<void>}
 */
async function sendTaxiOrderToDriver(order: TaxiOrderDetail, driver: DriverDetail, force = false): Promise<void> {
	let isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver.driver_id);
	if (isSent && !force && isSent.rejected === true) {
		return;
	}
	if (!UserSockets.get(driver.user_id)) {
		return;
	}
	let order_sent = await prisma.taxi_order_sent.findUnique({
		where: {
			taxi_order_sent_driver_unique: {
				order_id: order.order_id,
				driver_id: driver.driver_id,
			},
		},
	});

	console.log('Sending order: ', order.order_id, ' to driver: ', driver.user_id);
	if (!order_sent) {
		await TaxiOrderDao.createOrderSent(order.order_id, driver);
		const l10nText = getLocalisedTexts('DRIVER_NOTIFICATIONS', driver.user?.language);
		const l10nTextHeading = getLocalisedTexts('HEADING', driver.user?.language);
		await sendNotificationToUser(l10nTextHeading?.pending, l10nText?.pending, driver.user_id);
	} else {
		if (order_sent.taxi_order_sent_id) {
			await prisma.taxi_order_sent.update({
				where: {
					taxi_order_sent_id: order_sent.taxi_order_sent_id,
				},
				data: {
					rejected: false,
				},
			});
		}
	}
	UserSockets.get(driver.user_id).emit('new_order__taxi', order);
}
/**
 * Resend any pending (not accepted) orders to a driver after reconnect.
 * @param {DriverDetail} driver - Driver entity.
 * @returns {Promise<void>}
 */
async function resendPendingOrdersToDriver(driver: DriverDetail): Promise<void> {
	try {
		const sentOrderIds = await TaxiOrderDao.getAlreadySentOrdersByDriverId(driver.driver_id);
		for (let sentOrderId of sentOrderIds) {
			const order = await TaxiOrderDao.getOrder(sentOrderId);
			if (order?.status !== TAXI_ORDER_STATUS.PENDING) {
				continue;
			}
			console.info('resendPendingOrdersToDriver', driver.user_id);
			if (UserSockets.get(driver.user_id)) {
				console.log('Re-sending order: ', order.order_id, ' to driver: ', driver.user_id);
				UserSockets.get(driver.user_id).emit('new_order__taxi', order);
			}
		}
	} catch (error) {
		console.error('Error re-sending pending orders to driver:', error);
	}
}
/**
 * Send active (accepted) orders to a driver upon reconnect.
 * @param {DriverDetail} driver - Driver entity.
 * @returns {Promise<void>}
 */
async function sendActiveOrdersToDriver(driver: DriverDetail): Promise<void> {
	try {
		const activeOrders = await TaxiOrderDao.getActiveOrdersByDriverId(driver.driver_id);
		console.info('sendActiveOrdersToDriver', driver.user_id);
		if (UserSockets.get(driver.user_id)) {
			console.log('Sending [active] orders to driver: ', driver.user_id);
			UserSockets.get(driver.user_id).emit('load_active_orders__taxi', activeOrders);
		}
	} catch (error) {
		console.error('Error sending active orders to driver:', error);
	}
}
/**
 * Revoke an order from all drivers to whom it was sent (optionally skip accepted when cron).
 * @param {string} order_id - Order ID.
 * @param {boolean} [cron=false] - Skip accepted orders when invoked from cron.
 * @returns {Promise<void>}
 */
async function revokeTaxiOrderFromDrivers(order_id: string, cron = false): Promise<void> {
	let taxiOrderSent = await TaxiOrderDao.getSentDrivers(order_id);
	for (let sent of taxiOrderSent) {
		if (sent.accepted && cron) {
			continue;
		}
		SocketStore.removeUserFromRoom(sent.driver?.user_id, `order_${order_id}`);
		console.log('Revoking order: ', order_id, ' from driver: ', sent.driver?.user_id);
		if (!UserSockets.get(sent.driver?.user_id)) {
			return;
		}
		UserSockets.get(sent.driver?.user_id).emit('order_revoked__taxi', order_id);
	}
}
/**
 * Revoke an order from a specific driver and notify the user if the order has a user.
 * @param {string} order_id - Order ID.
 * @param {string} driver_id - Driver ID.
 * @param {TaxiOrderDetail|null} [order=null] - Optional order object to localize messages.
 * @returns {Promise<void>}
 */
async function revokeTaxiOrderFromDriver(order_id: string, driver_id: string, order: TaxiOrderDetail | null = null) {
	let driver = await DriverDao.getDriverById(driver_id);
	if (!driver) return;
	console.log('Revoking order: ', order_id, ' from driver: ', driver.user_id);
	SocketStore.removeUserFromRoom(driver?.user_id, `order_${order_id}`);
	if (!UserSockets.get(driver.user_id)) {
		return;
	}
	UserSockets.get(driver.user_id).emit('order_revoked__taxi', order_id);
	if (order?.user) {
		const freshOrder = await TaxiOrderDao.getOrder(order_id);
		const l10nText = getLocalisedTexts('USER_NOTIFICATIONS', freshOrder?.user?.language);
		const l10nTextHeading = getLocalisedTexts('HEADING', freshOrder?.user?.language);
		await sendNotificationToUser(l10nTextHeading?.taxi, l10nText?.revoked, freshOrder?.user_id);
	}
}
/**
 * Revoke an order from all drivers except the accepted one.
 * @param {string} order_id - Order ID.
 * @param {string} driver_id - Accepted driver ID to keep.
 * @returns {Promise<void>}
 */
async function revokeTaxiOrderFromOtherDrivers(order_id: string, driver_id: string) {
	let taxiOrderSent = await TaxiOrderDao.getSentDrivers(order_id);
	for (let sent of taxiOrderSent) {
		if (sent.accepted) {
			continue;
		}
		if (sent.driver?.driver_id === driver_id) {
			continue;
		}
		SocketStore.removeUserFromRoom(sent.driver?.user_id, `order_${order_id}`);
		console.log('Revoking order: ', order_id, ' from driver: ', sent.driver?.user_id);
		await TaxiOrderDao.deleteOrderSent(order_id, sent.taxi_order_sent_id);
		if (!UserSockets.get(sent.driver?.user_id)) {
			return;
		}
		UserSockets.get(sent.driver?.user_id).emit('order_revoked__taxi', order_id);
	}
}
/**
 * Compute a priority score for an order based on type, category and waiting time.
 * @param {TaxiOrderDetail} order - Order entity.
 * @returns {number}
 */
function calculateScoreForOrder(order: TaxiOrderDetail): number {
	const now = new Date();
	const createdAt = new Date(order.created_at);
	const waitingMinutes = Math.floor((now.getTime() - createdAt.getTime()) / 60000);
	let basePriority = order.type === 'TRANSFER_PRIVATE' ? 5 : 0;
	let premiumBonus = order.preferences?.vehicle_category === VEHICLE_CATEGORY.PREMIUM ? 5 : 0;
	const waitingWeight = 1;
	return basePriority + premiumBonus + waitingWeight * waitingMinutes;
}
/**
 * Check for pending taxi orders and dispatch them to drivers.
 * @returns {Promise<void>}
 */
async function checkIfOrdersNeedSending(): Promise<void> {
	try {
		console.log('Checking for taxi orders to send...');
		let orders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.PENDING,
				is_scheduled: false,
			},
		});
		console.log('Open taxi orders not scheduled:', orders.length);
		let scheduledOrders = await TaxiOrderDao.getOrders({
			//TODO: check time to scheduled departure and only send those within a certain window
			where: {
				status: TAXI_ORDER_STATUS.PENDING,
				is_scheduled: true,
			},
		});
		console.log('Open taxi orders scheduled:', scheduledOrders.length);
		let all_orders = [...orders, ...scheduledOrders] as TaxiOrderDetail[];
		all_orders.sort((a, b) => calculateScoreForOrder(b) - calculateScoreForOrder(a));
		for (let order of all_orders) {
			console.log('Order last_sent_at:', order.last_sent_at);
			await findTaxiOrderDrivers(order);
		}
	} catch (error) {
		console.log(error);
	}
}
/**
 * Cancel scheduled orders that are still pending 2 hours past the scheduled time.
 * @returns {Promise<void>}
 */
async function closeScheduledOrders(): Promise<void> {
	const twoHoursBeforeNow = new Date();
	twoHoursBeforeNow.setHours(twoHoursBeforeNow.getHours() - 2);
	let localDate = moment.parseZone(twoHoursBeforeNow).utc(true).format();
	let scheduledOrders = await TaxiOrderDao.getOrders({
		where: {
			status: TAXI_ORDER_STATUS.PENDING,
			is_scheduled: true,
			preferences: {
				path: ['departure_time'],
				lte: localDate,
			},
		},
	});
	for (let order of scheduledOrders) {
		await TaxiOrderDao.cancelOrder(
			order.order_id,
			TAXI_ORDER_STATUS.TAXI_CANCELED,
			'System cleanup - order was scheduled but not accepted after 2hours'
		);
	}
}
/**
 * Calculate transfer ride price and metadata for a route and vehicle category.
 * @param {TaxiLocation[]} route - Route points.
 * @param {VEHICLE_CATEGORY} vehicleCategory - One of VEHICLE_CATEGORY.STANDARD|PREMIUM.
 * @returns {Promise<{price:number,reasons:string[]|null,distance:number,durationS:number,duration:number}>}
 */
async function calculateTransferRidePrice(
	route: TaxiLocation[],
	vehicleCategory: VEHICLE_CATEGORY
): Promise<{
	price: number;
	reasons: string[] | null;
	distance: number;
	durationS: number;
	duration: number;
}> {
	if (vehicleCategory !== VEHICLE_CATEGORY.STANDARD && vehicleCategory !== VEHICLE_CATEGORY.PREMIUM) {
		throw new Error(`Invalid vehicle category, got ${vehicleCategory}. Only STANDARD and PREMIUM are allowed.`);
	}
	const { totalDistanceM, totalDurationS, totalDurationM } = await gApi.getDistanceForRoute(
		route.map((loc) => loc.coordinates as LatLng),
		'driving'
	);
	if (!totalDistanceM) {
		throw new Error('Unable to calculate distance between the two locations.');
	}
	const distanceInKm = totalDistanceM / 1000;
	const pricePerKm = COST_PER_KM[vehicleCategory] * COST_PER_KM.TRANSFER_BONUS;
	const basePrice = TAXI_STARTING_FEE[vehicleCategory];
	const totalPrice = basePrice + pricePerKm * distanceInKm;
	let priceSurge = await getPriceSurgeDataForTransferTrip(route, new Date());
	const finalPrice = Math.round(totalPrice * priceSurge.multiplier * 100) / 100;
	return {
		price: finalPrice,
		reasons: priceSurge.reasons,
		distance: distanceInKm,
		durationS: totalDurationS,
		duration: totalDurationM,
	};
}
/**
 * Calculate platform/driver cuts (in cents) for a transfer order considering extras and credits.
 * @param {TaxiOrderDetail} order - Order with payment, preferences and user fields.
 * @param {string} [orderType='order'] - Reserve type used in wallet funds.
 * @returns {Promise<{DRIVER_CREDIT_CUT:number,PLATFORM_CREDIT_CUT:number,DRIVER_CUT:number,PLATFORM_CUT:number}>}
 */
async function calculateTransferOrderPaymentCuts(
	order: TaxiOrderDetail,
	orderType = 'order'
): Promise<{
	DRIVER_CREDIT_CUT: number;
	PLATFORM_CREDIT_CUT: number;
	DRIVER_CUT: number;
	PLATFORM_CUT: number;
}> {
	const PRICE_CENTS = Math.round(parseFloat(order.payment?.price) * 100);
	const EXTRAS_COST_CENTS = Math.round(
		parseFloat(
			[VEHICLE_CLASS.PRIVATE_DRIVER, VEHICLE_CLASS.CARGO_VAN].includes(order.preferences?.vehicle_class)
				? order.payment?.extras?.price ||
						order.cargo_preferences?.additional_workers * CARGO_TRANSFER_FEE.ADDITIONAL_WORKER_FEE +
							CARGO_TRANSFER_FEE.CARGO_FEE
				: 0
		) * 100
	);
	const reservedCredits =
		(await WalletFundsDao.getReservedCredits(
			order.user_id,
			order.order_id,
			orderType as 'order' | 'daily_meals_subscription_payment'
		)) || [];
	const CREDITS_AMOUNT_RESERVED = reservedCredits.reduce(
		(sum: number, wf: WalletFundsBase) => sum + (wf.amount || 0),
		0
	);
	const INITIAL_PLATFORM_CUT = Math.round(PRICE_CENTS * DRIVE_FEE) + EXTRAS_COST_CENTS;
	const TOTAL_COST_CENTS = PRICE_CENTS + EXTRAS_COST_CENTS;
	const INITIAL_DRIVER_CUT = TOTAL_COST_CENTS - INITIAL_PLATFORM_CUT;
	const PLATFORM_CREDIT_CUT_CENTS = Math.min(INITIAL_PLATFORM_CUT, CREDITS_AMOUNT_RESERVED);
	const DRIVER_CREDIT_CUT_CENTS =
		CREDITS_AMOUNT_RESERVED > PLATFORM_CREDIT_CUT_CENTS ? CREDITS_AMOUNT_RESERVED - PLATFORM_CREDIT_CUT_CENTS : 0;
	const PLATFORM_CUT_CENTS = INITIAL_PLATFORM_CUT - PLATFORM_CREDIT_CUT_CENTS;
	const DRIVER_CUT_CENTS = INITIAL_DRIVER_CUT - DRIVER_CREDIT_CUT_CENTS;
	console.log('Final Calculated Values:', {
		DRIVER_CREDIT_CUT_CENTS,
		PLATFORM_CREDIT_CUT_CENTS,
		DRIVER_CUT_CENTS,
		PLATFORM_CUT_CENTS,
	});
	return {
		DRIVER_CREDIT_CUT: DRIVER_CREDIT_CUT_CENTS,
		PLATFORM_CREDIT_CUT: PLATFORM_CREDIT_CUT_CENTS,
		DRIVER_CUT: DRIVER_CUT_CENTS,
		PLATFORM_CUT: PLATFORM_CUT_CENTS,
	};
}
/**
 * Handle refund logic: release/transfer reserved wallet funds and refund/cancel Stripe PaymentIntent.
 * @param {string} order_id - Order ID.
 * @param {string} user_id - User ID.
 * @param {object} payment - Payment object with type, status, amount fields.
 * @param {number} additional_workers - Additional cargo workers.
 * @param {string} vehicle_class - Vehicle class for pricing.
 * @param {boolean} [skip_fee=false] - Skip cancellation fee.
 * @returns {Promise<void>}
 */
async function handlePaymentRefund(
	order_id: string,
	user_id: string,
	payment: any,
	additional_workers: number,
	vehicle_class: VEHICLE_CLASS,
	skip_fee = false
) {
	const WF_reserved = await WalletFundsDao.getReservedWalletFunds(user_id, order_id);
	const { credits_wf_amount_reserved, regular_wf_amount_reserved } = WF_reserved.reduce(
		(acc: any, wf: WalletFundsBase) => {
			if (wf.type !== FUNDS_TYPE.FUNDS) {
				acc.credits_wf_amount_reserved += wf.amount || 0;
			} else {
				acc.regular_wf_amount_reserved += wf.amount || 0;
			}
			return acc;
		},
		{ credits_wf_amount_reserved: 0, regular_wf_amount_reserved: 0 }
	);
	const credit_discount_used = payment.credit_discount || 0;
	const extras_cost = parseFloat(
		vehicle_class === VEHICLE_CLASS.PRIVATE_DRIVER
			? payment.extras?.price
			: vehicle_class === VEHICLE_CLASS.CARGO_VAN
				? additional_workers * CARGO_TRANSFER_FEE.ADDITIONAL_WORKER_FEE + CARGO_TRANSFER_FEE.CARGO_FEE
				: 0
	);
	const total_price_cents = Math.round((payment.price + extras_cost) * 100);
	const PAYMENT_TYPE = payment.type;
	const transfer_amount_credits = Math.round(credit_discount_used * (skip_fee ? 0 : 0.1));
	const transfer_amount_regular = Math.round((total_price_cents - credit_discount_used) * (skip_fee ? 0 : 0.1));
	if (transfer_amount_credits > 0) {
		await WalletFundsHelpers.transferReservedCreditsForOrder(
			user_id,
			'platform',
			transfer_amount_credits,
			order_id,
			SERVICE_TYPE.TAXI
		);
	}
	if (payment.type === 'WALLET' && transfer_amount_regular > 0) {
		await WalletFundsHelpers.transferReservedWalletFundsForOrder(
			user_id,
			'platform',
			transfer_amount_regular,
			order_id,
			SERVICE_TYPE.TAXI
		);
	}
	await WalletFundsHelpers.releaseReservedWalletFundsForOrder(user_id, order_id);
	const total_credits_to_refund = credit_discount_used - transfer_amount_credits;
	const reserved_credits_to_refund = credits_wf_amount_reserved - transfer_amount_credits;
	const credits_discrepancy = total_credits_to_refund - reserved_credits_to_refund;
	if (credits_discrepancy > 0) {
		await WalletFundsDao.createCredit({
			user_id,
			amount: credits_discrepancy,
			type: FUNDS_TYPE.CREDITS_TAXI,
			transaction_type: TRANSACTION_TYPE.CREDIT,
		});
	}
	const refund_amount_regular = total_price_cents - credit_discount_used - transfer_amount_regular;
	if (PAYMENT_TYPE === 'WALLET') {
		const total_wf_to_refund = refund_amount_regular;
		const reserved_wf_to_refund = regular_wf_amount_reserved - transfer_amount_regular;
		const wf_discrepancy = total_wf_to_refund - reserved_wf_to_refund;
		console.log(`got into wallet if`);
		if (payment.status === 'PAID' && wf_discrepancy > 0) {
			await WalletFundsDao.createWalletFunds(user_id, wf_discrepancy, null);
		}
	}
	if (PAYMENT_TYPE === 'CARD' || PAYMENT_TYPE === 'PLATFORM') {
		if (payment.payment_intent_id) {
			console.log(`got into card if`);
			const payment_intent = await stripe.client.paymentIntents.retrieve(payment.payment_intent_id);
			if (!['succeeded', 'canceled', 'processing'].includes(payment_intent.status)) {
				await stripe.client.paymentIntents.cancel(payment.payment_intent_id);
			} else {
				await stripe.client.refunds.create({
					amount: refund_amount_regular,
					payment_intent: payment.payment_intent_id,
				});
			}
		}
	}
}

export async function getActiveOrdersHelper(
	user_id: string,
	type?: string,
	isBusinessUser: boolean = false
): Promise<TaxiOrderDetail[]> {
	try {
		const activeOrders = await TaxiOrderDao.getTaxiOrdersIfNotCompleted(user_id, type, isBusinessUser);
		if (activeOrders) {
			for (const activeOrder of activeOrders) {
				if (activeOrder && activeOrder.status === TAXI_ORDER_STATUS.TAXI_ACCEPTED) {
					const driver = activeOrder.driver;
					const { result, distance, duration } = await gApi.distanceBetweenTwoPoints(
						activeOrder.pickup_location?.coordinates,
						driver?.location?.coordinates as LatLng,
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
						activeOrder.estimates!.pickup_time_in_seconds = result.rows[0].elements[0].duration.value;
						const estimatedPickupTime = new Date();
						estimatedPickupTime.setSeconds(
							estimatedPickupTime.getSeconds() + result.rows[0].elements[0].duration.value
						);
						activeOrder.estimates!.pickup_time = estimatedPickupTime;
					} else {
						if (duration && distance) {
							const estimatedPickupTime = new Date();
							estimatedPickupTime.setSeconds(estimatedPickupTime.getSeconds() + parseInt(duration));
							activeOrder.estimates!.pickup_time = estimatedPickupTime;
						}
						console.log('Invalid response structure from distanceBetweenTwoPoints');
						activeOrder.estimates!.pickup_time_in_seconds = -1;
						activeOrder.estimates!.pickup_time = null;
					}
					// Update the order with the new estimates
					await TaxiOrderDao.updateOrder(activeOrder.order_id, {
						estimates: activeOrder.estimates!,
					});
					const userSocket = UserSockets.get(activeOrder.user_id);
					console.log('userSocket: ', !!userSocket);
					if (userSocket) {
						(io as Socket).emit('active_order_updated__taxi', {
							...activeOrder,
						});
					}
				}
			}
		}
		return activeOrders;
		//res.status(200).json(activeOrders);
	} catch {
		throw new Error('Error fetching active orders');
	}
}

function preprocessOrderData(orderData: Partial<CreateTaxiOrder>): Partial<CreateTaxiOrder>[] {
	const cleanedOrderData = {
		// user_id: orderData.user_id,
		// driver_id: orderData.driver.driver_id,
		// driver: orderData.driver,
		// vehicle_id: orderData.vehicle_id,
		allow_credits_usage: orderData.allow_credits_usage,
		cargo_preferences: orderData.cargo_preferences,
		creating_user_id: orderData.creating_user_id,
		// customer_note: orderData.customer_note,
		delivery_location: orderData.delivery_location,
		estimates: orderData.estimates,
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
	} as Partial<CreateTaxiOrder>;
	const prefs = cleanedOrderData.preferences;
	if (prefs) {
		const is_repeat =
			prefs.repeat_ride?.length > 0 && !prefs.repeat_ride.some((item) => item.value === 'do_not_repeat');
		if (prefs.vehicle_class === VEHICLE_CLASS.CARGO_VAN) {
			cleanedOrderData.payment = {
				...cleanedOrderData.payment,
				extras: {
					price:
						CARGO_TRANSFER_FEE.CARGO_FEE +
						cleanedOrderData.cargo_preferences?.additional_workers *
							CARGO_TRANSFER_FEE.ADDITIONAL_WORKER_FEE,
					type: 'CARGO_TRANSFER_FEE',
				},
			};
		}
		cleanedOrderData.is_scheduled = prefs.departure_date != null;
		cleanedOrderData.route = cleanedOrderData.route?.map((r_i) => ({ ...r_i, id: randomUUID(), locked: false }));
		cleanedOrderData.route![0] = { ...cleanedOrderData.route![0], locked: true };
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
	return [cleanedOrderData];
}

async function generateVehicleTransferOrder(
	orderData: Partial<CreateTaxiOrder>,
	userId: string,
	businessUserId?: string,
	businessClientId?: string
): Promise<TaxiOrderDetail> {
	const vehicleTransferOrderData = {
		...orderData,
		type: ORDER_TYPE.VEHICLE_TRANSFER_COMBO,
		preferences: {
			...orderData.preferences,
			adults: 0,
			children_under_140: 0,
			ride_requirements: {
				traveling_with_pet: false,
				air_conditioning: false,
				child_seats: false,
				quiet_ride: false,
				luggage: false,
				wheelchair_accessibility: false,
				language_en: false,
				language_it: false,
				language_de: false,
				language_es: false,
				language_hr: false,
				language_fr: false,
				language_ru: false,
				language_ua: false,
			},
			vehicle_class: VEHICLE_CLASS.ANY,
			vehicle_category: VEHICLE_CATEGORY.ANY,
		},
		payment: {
			...orderData.payment,
			extras: null,
			status: 'PAID',
		},
	};
	const vehicle_transfer_order = await makeOrder(
		vehicleTransferOrderData,
		userId,
		null,
		null,
		businessUserId,
		businessClientId
	);
	return vehicle_transfer_order;
}

function subdivideOrder(
	vehicle_class: string,
	vehicle_category: string,
	n_adults: number,
	n_children: number
): Array<{ adults_seated: number; children_seated: number }> {
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
		num_orders = Math.ceil(total_seats / (VEHICLE_CAPACITY[vehicle_class] ?? 4));
	}
	console.log('num_orders', num_orders);
	for (let i = 0; i < num_orders; i++) {
		let availableSeats = VEHICLE_CAPACITY[vehicle_class] ?? 4;
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

async function makeOrder(
	cleanOrderData: Partial<CreateTaxiOrder>,
	userId: string,
	parentOrderId: string | null,
	driverId: string | null,
	businessUserId?: string,
	businessClientId?: string
): Promise<TaxiOrderDetail> {
	const orderPayload = {
		...cleanOrderData,
		user: {
			connect: {
				user_id: userId,
			},
		},
	} as Prisma.taxi_ordersCreateInput;
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

async function buildOrder(
	cleanOrderData: any,
	userId: string,
	parentOrderId: string | null,
	driverId: string | null,
	businessUserId?: string,
	businessClientId?: string
): Promise<string | null> {
	const { vehicle_class, vehicle_category, adults, children_under_140 } = cleanOrderData.preferences;
	const splits = subdivideOrder(vehicle_class, vehicle_category, adults, children_under_140);
	let firstOrderId = parentOrderId;
	for (let i = 0; i < splits.length; i++) {
		const split = splits[i];
		if (!split) continue;
		const { adults_seated, children_seated } = split;
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

function getDayIndex(dayName: string): number {
	// Map day names to their corresponding indices
	const daysOfWeek: Record<string, number> = {
		Sunday: 0,
		Monday: 1,
		Tuesday: 2,
		Wednesday: 3,
		Thursday: 4,
		Friday: 5,
		Saturday: 6,
	};
	return daysOfWeek[dayName] ?? -1; // Return the index of the day
}

function generateOrdersForRepeatOrder(
	orderData: Partial<CreateTaxiOrder>,
	repeatData: any[],
	repeatDuration: number
): Partial<CreateTaxiOrder>[] {
	try {
		console.log('rd', repeatDuration);
		const orders = [];
		const currentDate = new Date();
		// Get the hours and minutes from the departure time
		const departureTime = new Date(orderData.preferences?.departure_time as string);
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
	} catch (error: unknown) {
		console.log('TaxiOrderController', error);
		throw new Error(error as string);
	}
}

export async function cleanedCreateOrderHelper(orderData: Partial<CreateTaxiOrder>): Promise<{
	order: TaxiOrderDetail | null;
	vehicle_transfer_order?: TaxiOrderDetail;
}> {
	try {
		const user_id = orderData.user_id;
		const driver_id = orderData?.driver_id;
		const businessUserId = orderData?.business_users_id;
		const businessClientId = orderData?.business_clients_id;
		const cleanedOrderDataArray = preprocessOrderData(orderData);
		let firstOrderId = null;
		for (const cleanOrderData of cleanedOrderDataArray) {
			firstOrderId = await buildOrder(
				cleanOrderData,
				user_id as string,
				firstOrderId,
				driver_id as string,
				businessUserId as string,
				businessClientId as string
			);
		}
		let order: TaxiOrderDetail | null = null;
		let vehicle_transfer_order;
		if (firstOrderId) {
			order = await TaxiOrderDao.getOrder(firstOrderId);
			console.log('parentOrderId', firstOrderId);
			console.log('fetched grouped_orders', order?.grouped_orders);
			if (order && order.preferences?.vehicle_class === VEHICLE_CLASS.PRIVATE_DRIVER) {
				vehicle_transfer_order = await generateVehicleTransferOrder(
					cleanedOrderDataArray[0] as Partial<CreateTaxiOrder>,
					user_id as string,
					businessUserId as string,
					businessClientId as string
				);
			}
		}
		return { order, vehicle_transfer_order };
	} catch (error) {
		console.error('TaxiOrderController', error);
		throw new Error('Error in cleanedCreateOrderHelper!');
	}
}

export async function handlePaymentForTransferOrder(
	order: TaxiOrderDetail,
	return_url: string
): Promise<Stripe.PaymentIntent | null> {
	try {
		let user = await UsersDao.getUserById(order.creating_user_id || order.user_id);
		let payment_intent = null;
		//CALCULATE IN CENTS
		const PRICE_CENTS = Math.round(parseFloat(order.payment?.price ?? '0') * 100);
		const EXTRAS_COST_CENTS = Math.round(
			parseFloat(
				[VEHICLE_CLASS.PRIVATE_DRIVER, VEHICLE_CLASS.CARGO_VAN].includes(order.preferences?.vehicle_class)
					? order.payment?.extras?.price ||
							order.cargo_preferences?.additional_workers * CARGO_TRANSFER_FEE.ADDITIONAL_WORKER_FEE +
								CARGO_TRANSFER_FEE.CARGO_FEE
					: 0
			) * 100
		);
		const TOTAL_COST_CENTS = PRICE_CENTS + EXTRAS_COST_CENTS;
		const INITIAL_PLATFORM_CUT = Math.round(PRICE_CENTS * DRIVE_FEE) + EXTRAS_COST_CENTS;
		// const INITIAL_DRIVER_CUT = TOTAL_COST_CENTS - INITIAL_PLATFORM_CUT; // intentionally unused (kept for historical parity)
		//Handle automatic credits spending ~ use credits to pay platform cut first, to keep the driver cut mostly off stripe
		const reservedCredits = order.allow_credits_usage
			? await WalletFundsHelpers.reserveCreditsForOrder(
					user?.user_id as string,
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
		order.payment!.credit_discount = CREDITS_AMOUNT_RESERVED;
		order.payment!.credit_discount_details = {
			taxi_driver: DRIVER_CREDIT_CUT_CENTS,
			platform: PLATFORM_CREDIT_CUT_CENTS,
		};
		order = await TaxiOrderDao.updateTaxiOrderPayment(order.order_id, order.payment);
		// Preserve original noop arithmetic (historical context, previously unused expressions)
		// (INITIAL_PLATFORM_CUT - PLATFORM_CREDIT_CUT_CENTS);
		// (INITIAL_DRIVER_CUT - DRIVER_CREDIT_CUT_CENTS);
		// if(PLATFORM_CREDIT_CUT_CENTS>0) {
		// 	const transferedCreditsPlatform = await WalletFundsHelpers.transferReservedCreditsForOrder(user.user_id, "platform", PLATFORM_CREDIT_CUT_CENTS, order.order_id, SERVICE_TYPE.TAXI);
		// }
		// if(DRIVER_CREDIT_CUT_CENTS>0) {
		// 	const transferedCreditsDriver = await WalletFundsHelpers.transferReservedCreditsForOrder(user.user_id, driver_business.stripe_account_id, DRIVER_CREDIT_CUT_CENTS, order.order_id, SERVICE_TYPE.TAXI);
		// }
		const available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(
			user?.user_id as string
		);
		if (DISCOUNTED_TOTAL_COST > 0) {
			if (order.payment?.type === 'WALLET') {
				// handle wallet payment
				if (
					(available_wallet_balances[SERVICE_TYPE.TAXI] ?? 0) + (available_wallet_balances['none'] ?? 0) <
					DISCOUNTED_TOTAL_COST / 100
				) {
					throw new Error('Insufficient funds');
				}
				// await UsersDao.removeWalletBalance(order.user_id, (DISCOUNTED_TOTAL_COST / 100), order.order_id, "taxi");
				await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
					user?.user_id as string,
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
			if (order.payment?.type === 'FAMILY_WALLET' && user?.parent_user) {
				// handle wallet payment
				let has_parent_user = user.parent_user;
				if (!has_parent_user) {
					throw new Error('User has no family wallet');
				}
				let parent_user = user.parent_user.parent_user;
				const parent_available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(
					parent_user.user_id
				);
				let is_businessUser = await BusinessUsersDao.getBusinessUserByUserId(parent_user.user_id);
				let allowance: number = user.parent_user.allowance?.amount_taxi_wallet ?? 0;
				if (is_businessUser) {
					allowance = allowance * 2;
				}
				// todo is parent business user?
				if (allowance < DISCOUNTED_TOTAL_COST / 100) {
					throw new Error('Insufficient allowance');
				}
				//TODO: Should this allow usage of credits from parent?
				if ((parent_available_wallet_balances['none'] ?? 0) < DISCOUNTED_TOTAL_COST / 100) {
					throw new Error('Insufficient funds');
				}
				// await UsersDao.removeWalletBalance(parent_user.user_id, DISCOUNTED_TOTAL_COST, order.order_id, "taxi");
				await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
					parent_user.user_id,
					DISCOUNTED_TOTAL_COST,
					order.order_id
				);
				const updateData: { [key: string]: { decrement: number } } = {};
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
			if (order.payment?.type === 'CARD' || order.payment?.type === 'PLATFORM') {
				payment_intent = await stripe.createSplittablePayment(
					user?.stripe_customer_id as string,
					order.order_id,
					order.payment?.payment_method_id,
					DISCOUNTED_TOTAL_COST,
					order.type as string,
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
	} catch (e: unknown) {
		await TaxiOrderDao.updateOrderStatus(order.order_id, TAXI_ORDER_STATUS.CUSTOMER_CANCELED);
		await handlePaymentRefund(
			order.order_id,
			order.user_id,
			order.payment,
			order?.cargo_preferences?.additional_workers,
			order?.preferences?.vehicle_class,
			true
		);
		console.error('Error when handling payment for transfer order: ', e);
		throw new Error('Error when handling payment: ');
	}
}

export { checkIfOrdersNeedSending };
export { findTaxiOrderDrivers };
export { resendPendingOrdersToDriver };
export { sendActiveOrdersToDriver };
export { selectTaxiOrderDrivers };
export { sendTaxiOrderToDriver };
export { revokeTaxiOrderFromDrivers };
export { searchAfter20Seconds };
export { searchAfter40Seconds };
export { revokeAcceptedOrdersFromDriverHandler };
export { scheduledOrdersNotificationsHandler };
export { revokeTaxiOrderFromDriver };
export { revokeTaxiOrderFromOtherDrivers };
export { closeScheduledOrders };
export { calculateTransferRidePrice };
export { calculateTransferOrderPaymentCuts };
export { handlePaymentRefund };
export default {
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
	calculateTransferRidePrice,
	calculateTransferOrderPaymentCuts,
	handlePaymentRefund,
	getActiveOrdersHelper,
	cleanedCreateOrderHelper,
	handlePaymentForTransferOrder,
};
