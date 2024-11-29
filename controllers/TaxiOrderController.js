const TaxiOrderDao = require("../dao/TaxiOrder");
const DriverDao = require("../dao/Driver");
const UsersDao = require("../dao/User");
const FlagDao = require("../dao/Flags");
const BusinessUsersDao = require("../dao/BusinessUsers");
const { UserSockets, io } = require("../socket");
const gApi = require("../lib/gApis");
const TaxiHelper = require("../lib/taxiHelpers");
const { TAXI_ORDER_STATUS, VEHICLE_CAPACITY, ORDER_TYPE } = require("../lib/constants");
const { User } = require("@onesignal/node-onesignal");
const { sendNotificationToUser } = require("../lib/oneSignal");
const { sendOrderNotifications } = require("../lib/notifications");
const { sleep, range, buildWhereObject } = require("../lib/helpersLib");
const prisma = require("../prisma/prisma");

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
		console.errorTag("TaxiOrderController", e);
		res.status(500).json(e);
	}
}

/**
 * GET /taxi/orders/active/:user_id/:type
 * @tag Taxi
 * @summary Get active taxi orders.
 * @description This fetches all completed orders for a specific user.
 * @operationId getCompletedDeliveryOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
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

					// Assuming only one vehicle is active at a time
					driver.vehicle = driver.vehicles[0];

					const { result, distance, duration } = await gApi.distanceBetweenTwoPoints(
						activeOrder.pickup_location.coordinates,
						driver.location.coordinates,
						"driving",
						new Date()
					);

					console.tag("TaxiOrderController", "ROES:", result, result?.rows[0], result?.rows[0]?.elements[0]);
					console.tag("TaxiOrderController", "ROES DISTANCE:", distance);
					console.tag("TaxiOrderController", "ROES DURATION:", duration);

					if (result && result.rows && result.rows[0] && result.rows[0].elements && result.rows[0].elements[0]) {
						activeOrder.estimates.pickup_time_in_seconds = result.rows[0].elements[0].duration.value;
						const estimatedPickupTime = new Date();
						estimatedPickupTime.setSeconds(estimatedPickupTime.getSeconds() + result.rows[0].elements[0].duration.value);
						activeOrder.estimates.pickup_time = estimatedPickupTime;
					} else {
						if (duration && distance) {
							const estimatedPickupTime = new Date();
							estimatedPickupTime.setSeconds(estimatedPickupTime.getSeconds() + duration);
							activeOrder.estimates.pickup_time = estimatedPickupTime;
						}
						console.errorTag("Invalid response structure from distanceBetweenTwoPoints");
						activeOrder.estimates.pickup_time_in_seconds = -1;
						activeOrder.estimates.pickup_time = null;
					}

					// Update the order with the new estimates
					await TaxiOrderDao.updateOrder(activeOrder.order_id, {
						estimates: activeOrder.estimates
					});
				}
			}
		}

		res.status(200).json(activeOrders);
	} catch (e) {
		console.error("TaxiOrderController", e);
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
			console.info("Re-sending pending order: ", order.order_id, " to driver: ", driver_id);


			pendingOrders.push(order);
		}

		res.status(200).json({
			active: activeOrders,
			pending: pendingOrders
		});

	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json({ message: "Error something went wrong..." });
	}
}

/**
 * GET /taxi/orders/completed
 * @tag Taxi
 * @summary Get completed taxi orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedTaxiOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
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
				driver_id: driver_id
			}
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json(e);
	}
}

/**
 * GET /taxi/orders/canceled/:driver_id
 * @tag Taxi
 * @summary Get canceled taxi orders.
 * @description This fetches all canceled orders for a specific driver.
 * @operationId getCanceledTaxiOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve canceled orders for
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
				driver_id: driver_id
			}
		});
		res.status(200).json(canceledOrders);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json(e);
	}
}

/**
 * GET /taxi/orders/rejected/:driver_id
 * @tag Taxi
 * @summary Get rejected taxi orders.
 * @description This fetches all rejected orders for a specific driver.
 * @operationId getRejectedTaxiOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve rejected orders for
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
				driver_id: driver_id
			}
		});
		res.status(200).json(rejectedOrders);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
						vehicles: {
							include: {
								vehicle_specification: true,
							}
						}
					}
				}
			}
		});
		// console.tag("TaxiOrderController","taxi orders", orders);
		res.status(200).json(orders);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json(e);
	}
}

/**
 * GET /taxi/orders/completed/user/:user_id
 * @tag Taxi
 * @summary Get completed taxi orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedTaxiOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
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
				user_id: user_id
			}
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json(e);
	}
}

/**
 * GET /taxi/orders/canceled/user/:user_id
 * @tag Taxi
 * @summary Get canceled taxi orders.
 * @description This fetches all canceled orders for a specific driver.
 * @operationId getCanceledTaxiOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve canceled orders for
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
				user_id: user_id
			}
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json(e);
	}
}

async function createOrderHelper(req, res, orderData) {
	try {
		let prefs = orderData.preferences;

		let is_scheduled = prefs.departure_date != null;
		let is_repeat = false;
		if (prefs.repeat_ride && prefs.repeat_ride.some(item => item.value === "do_not_repeat")) {
			is_repeat = false;
		} else if (prefs.repeat_ride) {
			is_repeat = true;
		}
		orderData.is_scheduled = is_scheduled;
		let order;
		let ordersData = [];
		if (is_repeat) {
			ordersData = await generateOrdersForRepeatOrder(orderData, prefs.repeat_ride, prefs.repeat_duration.length > 0 ? prefs.repeat_duration[0].value : 0);
		} else {
			ordersData.push(orderData);
		}
		let parentOrderId = null;
		for (let orderData of ordersData) {
			let seats_Adults = prefs.adults;
			let seats_ChildrenUnder140 = prefs.children_under_140;
			let total_seats = seats_Adults + seats_ChildrenUnder140;
			let num_orders = Math.ceil((total_seats) / VEHICLE_CAPACITY[prefs.vehicle_class]);
			console.log("num_orders", num_orders);
			let start_num_orders = num_orders;
			const user_id = orderData.user_id;
			delete orderData.user_id;
			while (num_orders > 0) {
				let availableSeats = VEHICLE_CAPACITY[prefs.vehicle_class];
				let adults = 0;
				let children_under_140 = 0;

				for (let i of range(availableSeats)) {
					if (availableSeats === 0) {
						break;
					}
					if (seats_Adults > 0) {
						adults += 1;
						seats_Adults -= 1;
						availableSeats -= 1;
					} else if (seats_ChildrenUnder140 > 0) {
						children_under_140 += 1;
						seats_ChildrenUnder140 -= 1;
						availableSeats -= 1;
					} else {
						break;
					}
				}

				orderData.preferences.adults = adults;
				orderData.preferences.children_under_140 = children_under_140;

				if (parentOrderId) {
					if (orderData.driver) {
						order = await TaxiOrderDao.createOrder({
							...orderData,
							user: {
								connect: {
									user_id: !user_id ? req.user.user_id : user_id
								}
							},
							parent_order: {
								connect: {
									order_id: parentOrderId
								}
							},
							driver: {
								connect: {
									driver_id: orderData.driver.driver_id
								}
							}
						});
					} else {
						order = await TaxiOrderDao.createOrder({
							...orderData,
							user: {
								connect: {
									user_id: !user_id ? req.user.user_id : user_id
								}
							},
							parent_order: {
								connect: {
									order_id: parentOrderId
								}
							}
						});
					}
				} else {
					if (orderData.driver) {
						order = await TaxiOrderDao.createOrder({
							...orderData,
							user: {
								connect: {
									user_id: !user_id ? req.user.user_id : user_id
								}
							},
							driver: {
								connect: {
									driver_id: orderData.driver.driver_id
								}
							}
						});
					} else {
						order = await TaxiOrderDao.createOrder({
							...orderData,
							user: {
								connect: {
									user_id: !user_id ? req.user.user_id : user_id
								}
							}
						});
					}
				}

				if (num_orders === start_num_orders) {
					parentOrderId = order.order_id;
				}

				num_orders -= 1;
			}
		}
		console.log("parentOrderId", parentOrderId);
		if (parentOrderId) {
			order = await TaxiOrderDao.getOrder(parentOrderId, {
				include: {
					grouped_orders: true
				}
			});
			console.log("fetching grouped_orders", order.grouped_orders);
		}
		if (!order) {
			console.info("Final order is empty!");
			delete orderData.user_id;
			order = await TaxiOrderDao.createOrder({
				...orderData,
				user: {
					connect: {
						user_id: !user_id ? req.user.user_id : user_id
					}
				}
			});
			console.info("Final order created", order);
		}
		if (!is_scheduled) {
			await TaxiHelper.findTaxiOrderDrivers(order);
			if (order.grouped_orders && order.grouped_orders.length > 0) {
				for (let or of order.grouped_orders) {
					console.log("Sending Grouped Order: " + or.order_id);
					await TaxiHelper.findTaxiOrderDrivers(or);
				}
			}
		}
		return order;
	} catch (error) {
		console.errorTag("TaxiOrderController", error);
		res.status(500).json(error);
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
		let orderData = {
			...req.body,
			status: "PENDING",
			user_id: !req.body?.user_id ? req.user.user_id : req.body?.user_id,
			telephone: !req.body?.telephone ? req.user.telephone : req.body?.telephone,
			is_scheduled: req.body.preferences?.departure_date
		};

		console.info("USER TELEPHONE", orderData.telephone);

		console.info("dep date", req.body.preferences?.departure_date);
		let flags = await FlagDao.getFlags();
		let flagsObj = {};
		flags.map(flag => {
			flagsObj[flag.name] = flag.status;
		});
		orderData.flags = flagsObj;


		let order = await createOrderHelper(req, res, orderData);
		//console.tag("TaxiOrderController","create taxi order", order)

		const userSocket = UserSockets.get(order.user_id);
		console.log("userSocket: ", userSocket);
		if (userSocket) {
			console.log("userSocket exists!");
			io.emit('child_order_created__taxi', {
				...order
			});
		}
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json(e);
	}
}

function getDayIndex(dayName) {
	// Map day names to their corresponding indices
	const daysOfWeek = {
		"Sunday": 0,
		"Monday": 1,
		"Tuesday": 2,
		"Wednesday": 3,
		"Thursday": 4,
		"Friday": 5,
		"Saturday": 6
	};

	return daysOfWeek[dayName]; // Return the index of the day
}

async function generateOrdersForRepeatOrder(orderData, repeatData, repeatDuration) {
	try {
		console.tag("TaxiOrderController", "rd", repeatDuration);
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
				console.log("day", day);
				const dayIndex = getDayIndex(day.value); // Get day index from day name
				console.log("dayIndex", dayIndex);
				const daysUntilNextOccurrence = (dayIndex - currentDay + 7) % 7 + (week * 7); // Calculate days until the next occurrence of this weekday
				console.log("daysUntilNextOccurrence", dayIndex);
				const orderDate = new Date(currentDate); // Create a copy of the current date
				console.log("orderDate", orderDate);
				orderDate.setDate(orderDate.getDate() + daysUntilNextOccurrence); // Add the days to reach the next occurrence of this day
				// Set the time for the order
				console.log("orderDate added", orderDate);
				orderDate.setHours(departureHours);
				orderDate.setMinutes(departureMinutes);
				orderDate.setSeconds(0);
				orderDate.setMilliseconds(0);
				// Format the date and time
				const formattedDepartureDate = new Intl.DateTimeFormat("en-US", {
					day: "2-digit",
					month: "long",
					year: "numeric"
				}).format(orderDate);

				const formattedDepartureTime = orderDate.toISOString();

				// Generate an order for this day
				let order = {
					...orderData,
					preferences: {
						...orderData.preferences,
						departure_date: formattedDepartureDate, // Format as "DD MMMM YYYY"
						departure_time: formattedDepartureTime // Format as "YYYY-MM-DDTHH:mm:ss.sss"
					}
				};
				orders.push(order); // Add to orders list
			}
		}

		return orders; // Return generated orders
	} catch (error) {
		console.errorTag("TaxiOrderController", error);
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
			status: "PENDING",
			user_id: req.user.user_id,
			telephone: req.body.telephone
		};
		let order = await createOrderHelper(req, res, orderData);
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
		let order = await TaxiOrderDao.getOrder(order_id);
		//TODO: check if driver is online
		//TODO: check if order is still pending
		if (order.status !== TAXI_ORDER_STATUS.PENDING) {
			return res.status(400).json({ message: "Order is already accepted." });
		}

		if (order.is_scheduled) {
			let isSent = await TaxiOrderDao.isOrderSent(order.order_id, user.driver);
			if (!isSent) {
				await TaxiOrderDao.createOrderSent(order.order_id, user.driver);
			}
		}
		await TaxiOrderDao.acceptOrder(order_id, user);


		let driver = await DriverDao.getDriverById(user.driver.driver_id);
		//TODO: how to handle multiple vehicles on driver -> only one is active at a time of driving by the driver
		driver.vehicle = driver.vehicles[0];
		order.driver = driver;

		const {
			result,
			distance,
			duration
		} = await gApi.distanceBetweenTwoPoints(order.pickup_location.coordinates, driver.location.coordinates, "driving", new Date());

		console.tag("TaxiOrderController", "ROES:", result, result?.rows[0], result?.rows[0]?.elements[0]);
		console.tag("TaxiOrderController", "ROES DISTANCE:", distance);
		console.tag("TaxiOrderController", "ROES DURATION:", duration);

		if (!order.estimates)
			order.estimates = {};

		if (result && result.rows && result.rows[0] && result.rows[0].elements && result.rows[0].elements[0]) {
			order.estimates.pickup_time_in_seconds = result.rows[0].elements[0].duration.value;
			const estimatedPickupTime = new Date();
			estimatedPickupTime.setSeconds(estimatedPickupTime.getSeconds() + result.rows[0].elements[0].duration.value);
			order.estimates.pickup_time = estimatedPickupTime;
		} else {
			if (duration && distance) {
				const estimatedPickupTime = new Date();
				estimatedPickupTime.setSeconds(estimatedPickupTime.getSeconds() + duration);
				order.estimates.pickup_time = estimatedPickupTime;
			}
			console.errorTag("Invalid response structure from distanceBetweenTwoPoints");
			order.estimates.pickup_time_in_seconds = -1;
			order.estimates.pickup_time = null;
		}

		order = await TaxiOrderDao.updateOrder(order.order_id, {
			estimates: order.estimates
		});
		order.driver = driver;

		let userSocket = UserSockets.get(order.user_id);
		console.log("LALA, user_id", order.user_id);
		console.tag("TaxiOrderController", "order accepted", order);
		if (userSocket) {
			io.to("order_" + order.order_id).emit("order_accepted__taxi", order);
			io.emit("driver_unavailable", order.driver_id);

			console.log("userSocket", userSocket);
		}
		sendNotificationToUser("Taxi order accepted", "Your taxi order has been accepted", order.user_id);
		await TaxiHelper.revokeTaxiOrderFromDrivers(order.order_id);
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
		let order = await TaxiOrderDao.completeOrder(req.body.order_id);
		console.log("COMPLLETED", order);
		let driver = await DriverDao.getDriverById(order.driver_id);
		io.emit("driver_available", driver);
		let user = await UsersDao.getUserById(order.user_id, {
			include: {
				parent_user: { include: { parent_user: true } }
			}
		});
		if (order.payment.type === "WALLET") {
			// handle wallet payment

			if (user.wallet_balance < order.payment.price) {
				throw new Error("Insufficient funds");
			}
			await UsersDao.removeWalletBalance(order.user_id, parseFloat(order.payment.price), order.order_id, "taxi");

			order = await TaxiOrderDao.updateOrder(order.order_id, {
				payment: {
					...order.payment,
					status: "PAID"
				}
			});
		}
		if (order.payment.type === "FAMILY_WALLET") {
			// handle wallet payment
			let has_parent_user = user.parent_user;
			if (!has_parent_user) {
				throw new Error("User has no family wallet");
			}
			let parent_user = user.parent_user.parent_user;
			let is_businessUser = await BusinessUsersDao.getBusinessUserByUserId(parent_user.user_id);
			let allowance = user.parent_user.allowance;
			if (is_businessUser) {
				allowance = allowance * 2;
			}
			// todo is parent business user?

			if (allowance < order.payment.price) {
				throw new Error("Insufficient allowance");
			}
			if (parent_user.wallet_balance < order.payment.price) {
				throw new Error("Insufficient funds");
			}

			await UsersDao.removeWalletBalance(parent_user.user_id, parseFloat(order.payment.price), order.order_id, "taxi");
			await prisma.group_users.update({
				where: {
					group_user_id: user.parent_user.group_user_id
				},
				data: {
					allowance: user.parent_user.allowance - order.payment.price
				}
			});
			order = await TaxiOrderDao.updateOrder(order.order_id, {
				payment: {
					...order.payment,
					status: "PAID"
				}
			});
		}
		// io.to("order_" + order.order_id).emit('order_status_change__taxi', order);
		io.to("order_" + order.order_id).emit("order_completed__taxi", order);

		console.tag("TaxiOrderController", "order_completed__taxi ", req.body.order_id);
		io.emit("driver_available", driver);

		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
		io.to("order_" + order.order_id).emit("order_status_change__taxi", order);

		let user_id = order?.user_id;
		let driver_id = order?.driver?.driver_id;
		let user = await UsersDao.getUserById(user_id);
		let driver = await DriverDao.getDriverById(driver_id);
		sendOrderNotifications(user, driver, user_id, driver_id, req.body.status);

		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
			return res.status(404).json({ message: "Order not found" });
		}

		// Update only the vehicle category and vehicle class in the order's preferences
		const updatedPreferences = {
			...order.preferences,
			vehicle_category: vehicle_category,
			vehicle_class: vehicle_class,
			ride_requirements: ride_requirements
		};

		order = await TaxiOrderDao.updateOrder(order.order_id, {
			preferences: updatedPreferences
		});

		io.to("order_" + order.order_id).emit("order_preferences_change__taxi", order);

		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json({ message: "Server error", error: e });
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
	console.info("TaxiOrderController", "CANCEL ORDER", req.body);

	try {
		let order = await TaxiOrderDao.getOrder(order_id);
		let user_id = order?.user_id;
		let driver_id = order?.driver_id;
		let user = await UsersDao.getUserById(user_id);
		let driver = await DriverDao.getDriverById(driver_id);
		sendOrderNotifications(user, driver, user_id, driver_id, status);

		await TaxiHelper.revokeTaxiOrderFromDrivers(order.order_id);

		// Determine the cancellation reason
		let reason = "";
		if (Array.isArray(cancellation_reason) && cancellation_reason.length > 0) {
			reason = cancellation_reason[0].value;
		} else if (typeof cancellation_reason === "string" && cancellation_reason.trim() !== "") {
			reason = cancellation_reason; // Use the raw cancellation reason if it's a non-empty string
		}
		if (order.parent_order_id) {
			let parentOrder = await TaxiOrderDao.getOrder(order.parent_order_id);
			if (parentOrder.grouped_orders.length > 0) {
				for (let or of parentOrder.grouped_orders) {
					await TaxiHelper.revokeTaxiOrderFromDrivers(or.order_id);
					await TaxiOrderDao.cancelOrder(or.order_id, status, reason);
					io.to("order_" + or.order_id).emit("order_status_change__taxi", or);
					io.to("order_" + or.order_id).emit("order_cancelled__taxi", or);
				}
			}
		}
		if (order.grouped_orders.length > 0) {
			for (let or of order.grouped_orders) {
				await TaxiHelper.revokeTaxiOrderFromDrivers(or.order_id);
				await TaxiOrderDao.cancelOrder(or.order_id, status, reason);
				io.to("order_" + or.order_id).emit("order_status_change__taxi", or);
				io.to("order_" + or.order_id).emit("order_cancelled__taxi", or);
			}
		}
		order = await TaxiOrderDao.cancelOrder(order_id, status, reason);

		if (order.driver_id) {
			let driver = await DriverDao.getDriverById(order.driver_id);
			await TaxiOrderDao.updateOrder(order_id, {
				driver: {
					disconnect: true
				}
			});

			io.emit("driver_available", driver);
		}
		io.to("order_" + order.order_id).emit("order_status_change__taxi", order);
		io.to("order_" + order.order_id).emit("order_cancelled__taxi", order);

		console.info("TaxiOrderController", "order_status_change__taxi", "order_cancelled__taxi");
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
	console.info("TaxiOrderController", "REJECT ORDER", req.body);
	let new_status = status;
	try {
		let order = await TaxiOrderDao.getOrder(order_id);
		let user_id = order?.user_id;
		let driver_id = order?.driver_id;
		let user = await UsersDao.getUserById(user_id);
		let driver = await DriverDao.getDriverById(driver_id);
		sendOrderNotifications(user, driver, user_id, driver_id, status);

		if (status === TAXI_ORDER_STATUS.TAXI_REJECTED) {
			new_status = TAXI_ORDER_STATUS.PENDING;
			await TaxiOrderDao.updateOrder(order_id, {
				status: TAXI_ORDER_STATUS.PENDING,
				last_sent_at: null
			});
		}


		if (req.user.driver && req.user.driver.driver_id) {
			await TaxiHelper.revokeTaxiOrderFromDriver(order.order_id, req.user.driver.driver_id);
			let order_sent = await prisma.taxi_order_sent.findUnique({
				where: {
					taxi_order_sent_driver_unique: {
						order_id,
						driver_id: req.user.driver.driver_id
					}
				}
			});

			console.log("REJECT " + order_sent.taxi_order_sent_id);
			if (order_sent.taxi_order_sent_id) {
				await prisma.taxi_order_sent.update({
					where: {
						taxi_order_sent_id: order_sent.taxi_order_sent_id
					},
					data: {
						rejected: true
					}
				});
			}

		}

		// Determine the cancellation reason
		let reason = "";
		if (Array.isArray(cancellation_reason) && cancellation_reason.length > 0) {
			reason = cancellation_reason[0].value;
		} else if (typeof cancellation_reason === "string" && cancellation_reason.trim() !== "") {
			reason = cancellation_reason;
		}

		// Cancel the order with the determined reason
		order = await TaxiOrderDao.cancelOrder(order_id, new_status, reason);

		if (order.driver_id) {
			let driver = await DriverDao.getDriverById(order.driver_id);
			await TaxiOrderDao.updateOrder(order_id, {
				driver: {
					disconnect: true
				}
			});
			io.emit("driver_available", driver);

		}
		io.to("order_" + order.order_id).emit("order_rejected__taxi", order);
		io.to("order_" + order.order_id).emit("order_status_change__taxi", order);

		let userActiveOrders = await TaxiOrderDao.userActiveOrders(order.user_id);
		let pending = true;
		for (let or of userActiveOrders) {
			if (or.status !== TAXI_ORDER_STATUS.PENDING) {
				pending = false;
			}
		}
		console.log("pending", pending);
		if (pending) {
			if (UserSockets.get(order.user_id)) {
				console.log("EMITTING order_restart_search");
				UserSockets.get(order.user_id).emit("order_restart_search", order);
			}
		}

		console.tag("TaxiOrderController", "order_status_change__taxi", "order_rejected__taxi");
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
		io.to("order_" + order.order_id).emit("order_route_change", order);
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
		io.to("order_" + order.order_id).emit("order_pickup_location_change", order);
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
		io.to("order_" + order.order_id).emit("order_delivery_location_change", order);
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
		io.to("order_" + order.order_id).emit("order_complete_route_change", order);
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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

	try {
		let order = await TaxiOrderDao.updateTaxiOrderTimeline(order_id, timeline);
		io.to("order_" + order.order_id).emit("order_timeline_change", order);
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
		let order = await TaxiOrderDao.updateTaxiOrderPayment(order_id, payment);
		io.to("order_" + order.order_id).emit("order_payment_change__taxi", order);
		res.status(200).json(order);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
		res.status(500).json(e);
	}
}

/**
 * POST /taxi/driver
 * @tag Taxi
 * @summary
 * @description
 * @operationId
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
					driver_id: driver_id
				}
			}
		});
		await TaxiHelper.revokeTaxiOrderFromOtherDrivers(order_id, driver_id);
		const driver = await DriverDao.getDriverById(driver_id);
		await TaxiHelper.sendTaxiOrderToDriver(order, driver, true);
		res.status(200).json({ "message": "driver selected" });
	} catch (e) {
		console.info("appendTaxiDriver", e);
		res.status(500).json(e);
	}
}

async function getScheduledOrders(req, res) {
	try {
		const orders = await TaxiOrderDao.getOrders({
			where: {
				is_scheduled: true,
				status: TAXI_ORDER_STATUS.PENDING
			}
		});

		console.info(orders.length, "scheduled orders");
		res.status(200).json(orders);
	} catch (e) {
		console.errorTag("TaxiOrderController", e);
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
				status: TAXI_ORDER_STATUS.PENDING
			}
		});

		console.info(orders.length, "scheduled orders");
		res.status(200).json(orders);
	} catch (e) {
		console.error("Error getting scheduled orders by user_id.", e);
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
 * @requestBody {Object} where - Optional filters for the query.
 * @requestBody {Object} cursor - Cursor for pagination.
 * @requestBody {number} take - Number of records to fetch.
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getTaxiOrdersWithPagination(req, res) {
	const { cursor, take, where } = req.query;

	try {
		const whereObject = buildWhereObject(where);
		console.log("whereObject: ", whereObject);
		const [data, total] = await Promise.all([
			prisma.taxi_orders.findMany({
				take: parseInt(take),
				skip: cursor ? 1 : 0,
				cursor: cursor ? {
					order_id: cursor.order_id,
					created_at: cursor.created_at,
				} : undefined,
				where: whereObject,
				orderBy: { created_at: 'desc' },
				include: { user: true, driver: { include: {	user: true, vehicles: true } } },
			}),
			prisma.taxi_orders.count({
				where: whereObject // Ensure the count matches the filtered results
			}),
		]);

		res.status(200).json({ data, total });
	} catch (error) {
		console.error("TaxiOrderController", error);
		res.status(500).json({ message: "Error something went wrong..." });
	}
}

module.exports = {
	getTaxiOrders,
	getOrder,
	getCompletedTaxiOrders,
	getCanceledTaxiOrders,
	getRejectedTaxiOrders,
	createOrder,
	acceptOrder,
	completeOrder,
	cancelOrder,
	rejectOrder,
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
	getCanceledTaxiOrdersByUserId,
	getActiveTaxiOrdersByDriverId,
	createDispatchOrder,
	appendTaxiDriver,
	getScheduledOrders,
	getDriversForOrder,
	getScheduledOrdersByUserId,
	getTaxiOrdersWithPagination
};
