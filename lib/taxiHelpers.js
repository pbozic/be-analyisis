import moment from 'moment';
import joi from 'joi';

import TaxiOrderDao from '../dao/TaxiOrder.js';
import DriverDao from '../dao/Driver.js';
import socket from '../socket.js';
import {
	TAXI_ORDER_STATUS,
	VEHICLE_CLASS,
	ORDER_TYPE,
	TAXI_STARTING_FEE,
	COST_PER_KM,
	VEHICLE_CATEGORY,
	DRIVE_FEE,
	CARGO_TRANSFER_FEE,
	FUNDS_TYPE,
	SERVICE_TYPE,
} from './constants.js';
import prisma from '../prisma/prisma.js';
import gApi from './gApis.js';
import { UserSockets as UserSockets$0 } from '../socket.js';
import { sendNotificationToUser } from './oneSignal.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { getPriceSurgeDataForTransferTrip } from './priceSurgeHelpers.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import stripe from './stripe.js';
import WalletFundsHelpers from './WalletFundsHelpers.js';
const { io, SocketStore } = socket;
const NUMBER_OF_DRIVERS_TO_SEND = 3;
const UserSockets = { UserSockets: UserSockets$0 }.UserSockets;
const { preferences } = joi;
const MAX_PENDING_ORDERS = 1;
async function scheduledOrdersNotificationsHandler() {
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
		const DayOrders = scheduled.filter((o) => {
			const departureTime = o.preferences?.departure_time
				? new Date(o.preferences.departure_time).getTime()
				: null;
			return departureTime && departureTime >= startTimestamp && departureTime <= endTimestamp;
		});
		startTimestamp = oneHourLater.getTime();
		endTimestamp = oneHourLaterEnd.getTime();
		const HourOrders = scheduled.filter((o) => {
			const departureTime = o.preferences?.departure_time
				? new Date(o.preferences.departure_time).getTime()
				: null;
			return departureTime && departureTime >= startTimestamp && departureTime <= endTimestamp;
		});
		console.log('DayOrders', DayOrders?.length, 'HourOrders', HourOrders?.length);
		for (let order of DayOrders) {
			const l10nText = getLocalisedTexts('USER_NOTIFICATIONS', order.user);
			const l10nTextHeading = getLocalisedTexts('HEADING', order.user);
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
			const l10nText = getLocalisedTexts('USER_NOTIFICATIONS', order.user);
			const l10nTextHeading = getLocalisedTexts('HEADING', order.user);
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
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
	await waitSeconds(10);
	await revokeAcceptedOrdersFromDriver();
}
async function revokeAcceptedOrdersFromDriver() {
	const orders = await TaxiOrderDao.getAcceptedOrders();
	for (let order of orders) {
		await revokeTaxiOrderFromDrivers(order.order_id, true);
	}
}
async function findTaxiOrderDrivers(order) {
	console.log('hi');
	return new Promise(async (resolve, reject) => {
		let drivers = [];
		console.log('Finding drivers for order: ', order.order_id);
		if (order?.driver_id) {
			// If a specific driver is selected in the order creation, send the order only to that driver
			// after x minutes, we can send it to other drivers
			const thresholdTime = new Date(Date.now() - 5 * 60 * 1000); // 5 minutes
			const expired = order.created_at < thresholdTime;
			console.log('Order created at:', order.created_at, 'Threshold time:', thresholdTime);
			const driver = await DriverDao.getDriverById(order.driver_id);
			if (driver?.on_order) {
				await revokeTaxiOrderFromDriver(order.order_id, order.driver_id, order);
			} else if (driver && !expired) {
				drivers = [driver];
			} else if (driver && expired) {
				drivers = await selectTaxiOrderDrivers(order);
			}
		} else {
			drivers = await selectTaxiOrderDrivers(order);
		}
		console.log(
			'Drivers found: ',
			drivers?.map((d) => d.driver_id)
		);
		let pushDrivers = [];
		if (Array.isArray(drivers)) {
			for (let driver of drivers) {
				pushDrivers.push(sendTaxiOrderToDriver(order, driver));
			}
		}
		if (pushDrivers.length !== 0) {
			Promise.all(pushDrivers)
				.then(() => {
					TaxiOrderDao.updateOrderLastSentAt(order.order_id);
					resolve();
				})
				.catch((e) => {
					console.error('Find drivers error', e);
					reject(e);
				});
		} else {
			console.log('No drivers found for order: ', order.order_id);
			resolve();
		}
	});
}
function compareDurations(a, b) {
	return parseInt(a.duration) - parseInt(b.duration);
}
async function getNumberPendingOrders(driver_id) {
	let sent_orders = await TaxiOrderDao.getAlreadySentOrdersByDriverId(driver_id);
	if (!sent_orders) return 0;
	return sent_orders.length;
}
async function selectTaxiOrderDrivers(order) {
	try {
		let drivers = [];
		let radius = 200;
		let attempts = order.find_driver_attempts;
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
		//console.log(vehicleFilters, "FILTERS")
		// if (order.find_driver_attempts === 4) {
		// 	//TODO emit event to notify user that no drivers are available
		// 	if (!UserSockets.get(order.user_id)) {
		// 		return;
		// 	}
		// 	UserSockets.get(order.user_id).emit("no_drivers_found_taxi", order);
		// }
		//console.info(order.preferences.ride_requirements, "ride_Req");
		while (drivers.length === 0 && radius < 30000) {
			let fetchedDrivers = await prisma.drivers.inRadius(
				order.pickup_location.coordinates,
				radius,
				order.preferences.ride_requirements,
				vehicleFilters,
				order.estimates.region_id,
				order.estimates.region_license
			);
			console.log('in radius', fetchedDrivers?.length);
			const onlineDrivers = (
				await Promise.all(
					fetchedDrivers.map(async (driver) => {
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
			).filter(Boolean); // remove nulls
			console.log('onlineDrivers', onlineDrivers?.length);
			drivers = onlineDrivers;
			radius += 1000;
		}
		let acceptableDrivers = [];
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
				let numPendingOrders = await getNumberPendingOrders(driver.driver_id);
				let { distance, duration, result } = await gApi.distanceBetweenTwoPoints(
					order.pickup_location.coordinates,
					driver.location.coordinates,
					'driving',
					new Date(),
					'best_guess'
				);
				driver.distance = distance;
				driver.duration = duration;
				driver.numPendingOrders = numPendingOrders;
				acceptableDrivers.push(driver);
			}
		}
		acceptableDrivers.sort((a, b) => {
			// Compare by duration first
			if (parseInt(a.duration) !== parseInt(b.duration)) {
				return parseInt(a.duration) - parseInt(b.duration); // Sort by ascending duration
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
				//console.log("Eligible driver: ", detailedDriver.user_id)
				eligibleDrivers.push(detailedDriver);
			}
		}
		await TaxiOrderDao.updateOrder(order.order_id, {
			find_drivers_attempts: order.find_drivers_attempts + 1,
		});
		console.log(
			'Eligible drivers: ',
			eligibleDrivers.map((d) => d.driver_id)
		);
		return eligibleDrivers;
	} catch (e) {
		console.log('select driver:', e);
	}
}
async function sendTaxiOrderToDriver(order, driver, force = false) {
	let isSent = await TaxiOrderDao.isOrderSent(order.order_id, driver);
	if (isSent && !force && isSent.rejected === true) {
		//console.log("Order: ", order.order_id, "was already sent to driver: ", driver.user_id);
		return;
	}
	if (!UserSockets.get(driver.user_id)) {
		return;
	}
	//TODO: zakaj smo že prestavili order na sent, če ga še nismo poslali driverju?
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
		const l10nText = getLocalisedTexts('DRIVER_NOTIFICATIONS', driver.user);
		const l10nTextHeading = getLocalisedTexts('HEADING', driver.user);
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
async function resendPendingOrdersToDriver(driver) {
	try {
		const sentOrders = await TaxiOrderDao.getAlreadySentOrdersByDriverId(driver.driver_id);
		for (let sentOrder of sentOrders) {
			const order = await TaxiOrderDao.getOrder(sentOrder.order.order_id);
			if (order.status !== TAXI_ORDER_STATUS.PENDING) {
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
async function sendActiveOrdersToDriver(driver) {
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
async function revokeTaxiOrderFromDrivers(order_id, cron = false) {
	let taxiOrderSent = await TaxiOrderDao.getSentDrivers(order_id);
	for (let sent of taxiOrderSent) {
		if (sent.accepted && cron) {
			continue;
		}
		SocketStore.removeUserFromRoom(sent.driver.user_id, `order_${order_id}`);
		console.log('Revoking order: ', order_id, ' from driver: ', sent.driver.user_id);
		if (!UserSockets.get(sent.driver.user_id)) {
			return;
		}
		UserSockets.get(sent.driver.user_id).emit('order_revoked__taxi', order_id);
	}
}
async function revokeTaxiOrderFromDriver(order_id, driver_id, order = null) {
	let driver = await DriverDao.getDriverById(driver_id);
	console.log('Revoking order: ', order_id, ' from driver: ', driver.user_id);
	SocketStore.removeUserFromRoom(driver?.user_id, `order_${order_id}`);
	if (!UserSockets.get(driver.user_id)) {
		return;
	}
	UserSockets.get(driver.user_id).emit('order_revoked__taxi', order_id);
	if (order?.user) {
		const order = await TaxiOrderDao.getOrder(order_id);
		const l10nText = getLocalisedTexts('USER_NOTIFICATIONS', order.user);
		const l10nTextHeading = getLocalisedTexts('HEADING', order.user);
		await sendNotificationToUser(l10nTextHeading?.taxi, l10nText?.revoked, order.user_id);
	}
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
		SocketStore.removeUserFromRoom(sent.driver.user_id, `order_${order_id}`);
		console.log('Revoking order: ', order_id, ' from driver: ', sent.driver.user_id);
		await TaxiOrderDao.deleteOrderSent(order_id, sent.taxi_order_sent_id);
		if (!UserSockets.get(sent.driver.user_id)) {
			return;
		}
		UserSockets.get(sent.driver.user_id).emit('order_revoked__taxi', order_id);
	}
}
function calculateScoreForOrder(order) {
	const now = new Date();
	const createdAt = new Date(order.created_at);
	const waitingMinutes = Math.floor((now - createdAt) / 60000); // milliseconds to minutes
	let basePriority = order.type === 'TRANSFER_PRIVATE' ? 5 : 0;
	let premiumBonus = order.preferences?.vehicle_category === VEHICLE_CLASS.PREMIUM ? 5 : 0;
	const waitingWeight = 1; // can tweak this
	return basePriority + premiumBonus + waitingWeight * waitingMinutes;
}
async function checkIfOrdersNeedSending() {
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
			where: {
				status: TAXI_ORDER_STATUS.PENDING,
				is_scheduled: true,
			},
		});
		console.log('Open taxi orders scheduled:', scheduledOrders.length);
		let all_orders = [...orders, ...scheduledOrders];
		all_orders.sort((a, b) => calculateScoreForOrder(b) - calculateScoreForOrder(a));
		for (let order of all_orders) {
			console.log('Order last_sent_at:', order.last_sent_at);
			await findTaxiOrderDrivers(order);
		}
	} catch (error) {
		console.log(error);
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
async function calculateTransferRidePrice(route, vehicleCategory) {
	if (vehicleCategory !== VEHICLE_CATEGORY.STANDARD && vehicleCategory !== VEHICLE_CATEGORY.PREMIUM) {
		throw new Error(`Invalid vehicle category, got ${vehicleCategory}. Only STANDARD and PREMIUM are allowed.`);
	}
	const { totalDistanceM, totalDurationS, totalDurationM } = await gApi.getDistanceForRoute(
		route.map((loc) => loc.coordinates),
		'driving'
	);
	if (!totalDistanceM) {
		throw new Error('Unable to calculate distance between the two locations.');
	}
	const distanceInKm = totalDistanceM / 1000;
	const pricePerKm = COST_PER_KM[vehicleCategory] * COST_PER_KM.TRANSFER_BONUS; // Example price per km
	const basePrice = TAXI_STARTING_FEE[vehicleCategory]; // Example base price
	const totalPrice = basePrice + pricePerKm * distanceInKm;
	let priceSurge = await getPriceSurgeDataForTransferTrip(route, new Date(), null, null);
	const finalPrice = Math.round(totalPrice * priceSurge.multiplier * 100) / 100;
	return {
		price: finalPrice,
		reasons: priceSurge.reasons,
		distance: distanceInKm,
		durationS: totalDurationS,
		duration: totalDurationM,
	};
}
async function calculateTransferOrderPaymentCuts(order, orderType = 'order') {
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
	const reservedCredits = (await WalletFundsDao.getReservedCredits(order.user_id, order.order_id, orderType)) || [];
	const CREDITS_AMOUNT_RESERVED = reservedCredits.reduce((sum, wf) => sum + (wf.amount || 0), 0);
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
async function handlePaymentRefund(order_id, user_id, payment, additional_workers, vehicle_class, skip_fee = false) {
	//get payment details:
	const WF_reserved = await WalletFundsDao.getReservedWalletFunds(user_id, order_id);
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
	const credit_discount_used = payment.credit_discount || 0;
	const extras_cost = parseFloat(
		[VEHICLE_CLASS.PRIVATE_DRIVER, VEHICLE_CLASS.CARGO_VAN].includes(vehicle_class)
			? payment.extras?.price ||
					additional_workers * CARGO_TRANSFER_FEE.ADDITIONAL_WORKER_FEE + CARGO_TRANSFER_FEE.CARGO_FEE
			: 0
	);
	const total_price_cents = Math.round((payment.price + extras_cost) * 100);
	const PAYMENT_TYPE = payment.type;
	// const transfer_amount = Math.round(total_price_cents * (skip_fee ? 0 : 0.1))//TODO: Make cancellation fee a constant
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
	//calculate transfered credits and if needed, create new ones with fresh expiry dates
	const total_credits_to_refund = credit_discount_used - transfer_amount_credits;
	const reserved_credits_to_refund = credits_wf_amount_reserved - transfer_amount_credits;
	const credits_discrepancy = total_credits_to_refund - reserved_credits_to_refund;
	if (credits_discrepancy > 0) {
		await WalletFundsDao.createCredit({
			user: { connect: { user_id: user_id } },
			amount: credits_discrepancy,
			type: FUNDS_TYPE.CREDITS_TAXI,
		});
	}
	const refund_amount_regular = total_price_cents - credit_discount_used - transfer_amount_regular;
	if (PAYMENT_TYPE === 'WALLET') {
		const total_wf_to_refund = refund_amount_regular;
		const reserved_wf_to_refund = regular_wf_amount_reserved - transfer_amount_regular;
		const wf_discrepancy = total_wf_to_refund - reserved_wf_to_refund;
		console.log(`got into wallet if`);
		//calculate transfered WF and if to_be_retuned amount is larger than the released amount, create new ones for the difference.
		if (payment.status === 'PAID' && wf_discrepancy > 0) {
			await WalletFundsDao.createWalletFunds(user_id, wf_discrepancy, null);
		}
	}
	if (PAYMENT_TYPE === 'CARD' || PAYMENT_TYPE === 'PLATFORM') {
		//cancel or refund paymentIntent if any exists.
		if (payment.payment_intent_id) {
			console.log(`got into card if`);
			const payment_intent = await stripe.client.paymentIntents.retrieve(payment.payment_intent_id);
			if (!['succeeded', 'canceled', 'processing'].includes(payment_intent.status)) {
				const canceled_PI = await stripe.client.paymentIntents.cancel(payment.payment_intent_id);
			} else {
				const refund_obj = await stripe.client.refunds.create({
					amount: refund_amount_regular,
					payment_intent: payment.payment_intent_id,
				});
			}
		}
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
};
