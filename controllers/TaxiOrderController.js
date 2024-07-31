const TaxiOrderDao = require("../dao/TaxiOrder");
const DriverDao = require("../dao/Driver");
const { UserSockets, io } = require('../socket');
const gApi = require('../lib/gApis');
const TaxiHelper = require('../lib/taxiHelpers');
const { TAXI_ORDER_STATUS, VEHICLE_CAPACITY } = require("../lib/constants");
const { User } = require("@onesignal/node-onesignal");
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
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * GET /taxi/orders/active/:user_id
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
	const { user_id } = req.params;

	try {
		const activeOrder = await TaxiOrderDao.getTaxiOrderIfNotCompleted(user_id);

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

			console.log("ROES:", result, result?.rows[0], result?.rows[0]?.elements[0]);
			console.log("ROES DISTANCE:", distance);
			console.log("ROES DURATION:", duration);

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
				console.error('Invalid response structure from distanceBetweenTwoPoints');
				activeOrder.estimates.pickup_time_in_seconds = -1;
				activeOrder.estimates.pickup_time = null;
			}

			await TaxiOrderDao.updateOrder(activeOrder.order_id, {
				estimates: activeOrder.estimates
			});
		}

		res.status(200).json(activeOrder);
	} catch (e) {
		console.log(e);
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
		res.status(200).json(activeOrders);
	} catch (e) {
		console.log(e);
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
			}});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log(e);
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
		const orders = await TaxiOrderDao.getOrders({});
		res.status(200).json(orders);
	} catch (e) {
		console.log(e);
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
			}});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
async function createOrderHelper(req, res, orderData) {
	try {
		let prefs = orderData.preferences
		let is_scheduled = prefs.departure_date != null;
		let is_repeat = false;
		console.log("body repeat", prefs)
		if (prefs.repeat_ride && prefs.repeat_ride.some(item => item.value === "do_not_repeat")) {
			is_repeat = false;
		} else if (prefs.repeat_ride){
			is_repeat = true;
		}
		orderData.is_scheduled = is_scheduled;
		let order;
		console.log("is_repeat", is_repeat);
		let ordersData = [];
		if (is_repeat) {
			ordersData = await generateOrdersForRepeatOrder(orderData, prefs.repeat_ride, prefs.repeat_duration.length > 0 ? prefs.repeat_duration[0].value : 0 );
		} else {
			ordersData.push(orderData);
		}
		
		for (let orderData of ordersData) {
			console.log("od", orderData);
			let num_orders = Math.ceil((prefs.adults + prefs.children_above_140 + prefs.children_under_140) / VEHICLE_CAPACITY[prefs.vehicle_class])
			let start_num_orders = num_orders;
			let parentOrderId = null;
			delete orderData.user_id;
			while (num_orders > 0) {
			
				if (parentOrderId) {
					if (orderData.driver) {
						order = await TaxiOrderDao.createOrder({
							...orderData,
							user: {
								connect: {
									user_id: req.user.user_id
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
									user_id: req.user.user_id
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
									user_id: req.user.user_id
								}
							},
							driver:	{
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
									user_id: req.user.user_id
								}
							}
						});
					}

				}
				
				if (num_orders == start_num_orders) {
					parentOrderId = order.order_id;
				}
				
				num_orders -= 1;
			}
			if (parentOrderId) {
				order = await TaxiOrderDao.getOrder(parentOrderId, {
					include: {
						grouped_orders: true
					}
				});
			}
		}
		//TaxiHelper.findTaxiOrderDrivers(order);
		return order
	} catch (error) {
		console.log(error);
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
			user_id: req.user.user_id,
			telephone: req.user.telephone
		};
		
		let order = await createOrderHelper(req, res, orderData);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
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
		console.log(repeatDuration)
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
			const dayIndex = getDayIndex(day.value); // Get day index from day name
			const daysUntilNextOccurrence = (dayIndex - currentDay + 7) % 7 + (week * 7); // Calculate days until the next occurrence of this weekday
			const orderDate = new Date(currentDate); // Create a copy of the current date
			orderDate.setDate(orderDate.getDate() + daysUntilNextOccurrence); // Add the days to reach the next occurrence of this day
			console.log(orderDate)
			console.log(daysUntilNextOccurrence)
			// Set the time for the order
			orderDate.setHours(departureHours);
			orderDate.setMinutes(departureMinutes);
			orderDate.setSeconds(0);
			orderDate.setMilliseconds(0);
			console.log(orderDate)
			// Format the date and time
			const formattedDepartureDate = new Intl.DateTimeFormat('en-US', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
			}).format(orderDate);
	
			const formattedDepartureTime = orderDate.toISOString();
	
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
		console.log(error);
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
	}
	catch (e) {
		console.log(e);
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
		//TODO: check if driver is online
		//TODO: check if order is still pending
		await TaxiOrderDao.acceptOrder(order_id, user);
		let order = await TaxiOrderDao.getOrder(order_id);
		let driver = await DriverDao.getDriverById(user.driver.driver_id);
		//TODO: how to handle multiple vehicles on driver -> only one is active at a time of driving by the driver
		driver.vehicle = driver.vehicles[0];
		order.driver = driver;

		const { result, distance, duration } = await gApi.distanceBetweenTwoPoints(order.pickup_location.coordinates, driver.location.coordinates, "driving", new Date());

		console.log("ROES:", result, result?.rows[0], result?.rows[0]?.elements[0]);
		console.log("ROES DISTANCE:", distance);
		console.log("ROES DURATION:", duration);


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
			console.error('Invalid response structure from distanceBetweenTwoPoints');
			order.estimates.pickup_time_in_seconds = -1;
			order.estimates.pickup_time = null;
		}

		order = await TaxiOrderDao.updateOrder(order.order_id, {
			estimates: order.estimates
		});
		order.driver = driver;

		let userSocket = UserSockets.get(order.user_id);
		console.log("order accepted", order);
		if (userSocket) {
			io.to("order_" + order.order_id).emit('order_accepted__taxi', order);
			io.emit('driver_unavailable', order.driver_id);
		}
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
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
		let driver = await DriverDao.getDriverById(order.driver_id);
		io.emit('driver_available', driver)

		// io.to("order_" + order.order_id).emit('order_status_change__taxi', order);
		io.to("order_" + order.order_id).emit('order_completed__taxi', order);

		console.log("order_completed__taxi ", req.body.order_id)
		io.emit('driver_available', driver);

		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
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
		io.to("order_" + order.order_id).emit('order_status_change__taxi', order);

		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /taxi/order/update/preferences
 * @tag Taxi
 * @summary Update a taxi order's vehicle preferences.
 * @description Updates the vehicle preferences of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateOrderVehiclePreferences
 * @bodyDescription Request body must include 'order_id' to identify the order and 'vehicle_category' and 'vehicle_class' to specify the new vehicle preferences.
 * @bodyContent {UpdateOrderVehiclePreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderVehiclePreferences(req, res) {
	try {
		const { order_id, vehicle_category, vehicle_class } = req.body;

		// Fetch the current order details
		let order = await TaxiOrderDao.getOrder(order_id);

		if (!order) {
			return res.status(404).json({ message: "Order not found" });
		}

		// Update only the vehicle category and vehicle class in the order's preferences
		const updatedPreferences = {
			...order.preferences,
			vehicle_category: vehicle_category,
			vehicle_class: vehicle_class
		};

		order = await TaxiOrderDao.updateOrder(order.order_id, {
			preferences: updatedPreferences
		});

		io.to("order_" + order.order_id).emit('order_preferences_change__taxi', order);

		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: "Server error", error: e });
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
	console.log('REJECT ORDER', req.body)

	try {
		let order = await TaxiOrderDao.cancelOrder(order_id, status, cancellation_reason[0].value);
		if (order.driver_id) {
			let driver = await DriverDao.getDriverById(order.driver_id);
			io.emit('driver_available', driver);
		}
		io.to("order_" + order.order_id).emit('order_status_change__taxi', order);
		io.to("order_" + order.order_id).emit('order_rejected__taxi', order);

		console.log("order_status_change__taxi", "order_rejected__taxi");
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
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
	console.log("CANCEL ORDER", req.body)
    try {
		let order = await TaxiOrderDao.getOrder(order_id);

		if (order.driver) {
			if (req.user.user_id === order.driver?.user_id) {
				if (status === TAXI_ORDER_STATUS.TAXI_CANCELED) {
					if(UserSockets.get(order.user_id)) {
						UserSockets.get(order.user_id).emit('order_restart_search', order_id);
					}
					await TaxiOrderDao.updateOrder(order_id, {
						status: TAXI_ORDER_STATUS.PENDING,
						last_sent_at: null
					})
				}
			}
		}

		await TaxiHelper.revokeTaxiOrderFromDrivers(order.order_id);

        if (order.driver_id) {
            let driver = await DriverDao.getDriverById(order.driver_id);
            io.emit('driver_available', driver);
        }
		order = await TaxiOrderDao.cancelOrder(order_id, status, cancellation_reason[0].value);

        io.to("order_" + order.order_id).emit('order_status_change__taxi', order);
        io.to("order_" + order.order_id).emit('order_cancelled__taxi', order);

        console.log("order_status_change__taxi", "order_cancelled__taxi");
        res.status(200).json(order);
    } catch (e) {
        console.log(e);
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
		io.to("order_" + order.order_id).emit('order_route_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
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
		io.to("order_" + order.order_id).emit('order_pickup_location_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
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
		io.to("order_" + order.order_id).emit('order_delivery_location_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
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
	const { order_id, route} = req.body

	try {
		let order = await TaxiOrderDao.updateCompleteTaxiRoute(order_id, route);
		io.to("order_" + order.order_id).emit('order_complete_route_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
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
	const { order_id, timeline} = req.body

	try {
		let order = await TaxiOrderDao.updateTaxiOrderTimeline(order_id, timeline);
		io.to("order_" + order.order_id).emit('order_timeline_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
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
	const { order_id, payment} = req.body

	try {
		let order = await TaxiOrderDao.updateTaxiOrderPayment(order_id, payment);
		io.to("order_" + order.order_id).emit('order_payment_change__taxi', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}


module.exports = {
	getTaxiOrders,
	getOrder,
	getCompletedTaxiOrders,
	createOrder,
	acceptOrder,
	completeOrder,
	cancelOrder,
	rejectOrder,
	updateOrderStatus,
	updateTaxiOrderRoute,
	updateTaxiOrderPickupLocation,
	updateTaxiOrderDeliveryLocation,
	updateOrderVehiclePreferences,
	updateCompleteTaxiRoute,
	updateTaxiOrderPayment,
	updateTaxiOrderTimeline,
	getActiveTaxiOrders,
	getCompletedTaxiOrdersByUserId,
	getActiveTaxiOrdersByDriverId,
	createDispatchOrder
};
