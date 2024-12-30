const DeliveryOrderDao = require("../dao/DeliveryOrder");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const DeliveryHelper = require("../lib/deliveryHelpers");
const FlagDao = require("../dao/Flags");
const BusinessDao = require("../dao/Business");
const UsersDao = require("../dao/User");
const gApi = require("../lib/gApis");
const { UserSockets, io } = require("../socket");
const stripe = require("../lib/stripe");
const { DELIVERY_ORDER_STATUS, DOCUMENT_TYPE } = require("../lib/constants");
const fs = require("fs");
const Constants = require("../lib/constants");
const { getUsers } = require("../dao/User");
const { delivery_orders } = require("@prisma/client");
const { generateItemsFromPreferences, resendPendingOrdersToDeliveryDriver, sendActiveOrdersToDeliveryDriver } = require("../lib/deliveryHelpers");
const { sortLocationsByNearestNeighbor, todaysEarnings } = require("../lib/helpersLib");
const { connect } = require("http2");
const {RESTAURANT_FEE} = require('../lib/constants');
const prisma = require("../prisma/prisma");

/**
 * GET /delivery/orders
 * @tag Delivery
 * @summary Get all delivery orders.
 * @description This fetches all delivery orders.
 * @operationId getAllDeliveryOrders
 * @response 200 - Successful operation. Returns a list of all orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getDeliveryOrders(req, res) {
	try {
		const orders = await DeliveryOrderDao.getOrders({});
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
			res.status(404).send("User not found for this order");
		}
	} catch (error) {
		res.status(500).send("Failed to fetch user data");
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
	const { orderBody, user_id, return_url } = req.body;
	console.info("CREATE DELIVERY ORDER: ", req.body );
	try {
		let orderData = {
			...orderBody,
			status: DELIVERY_ORDER_STATUS.PENDING
		};
		let user_id = req.user.user_id;
		let flags = await FlagDao.getFlags();
		let falgsObj = {}; 
		flags.map(flag => {
			falgsObj[flag.name] = flag.status;
		});
		orderData.flags = falgsObj;
		let order = await DeliveryOrderDao.createOrder(orderData, user_id);

		let business = await BusinessDao.getBusinessById(orderData.details.business_id);
		// let delivery_business = await BusinessDao.getBusinessById(orderData?.delivery_driver?.business_id);
		let user = await UsersDao.getUserById(user_id);
		orderData.telephone = user.telephone;
		let payment_intent;
		if (order.details.type === "delivery") {
			let { result } = await gApi.distanceBetweenTwoPoints(order.delivery_location.coordinates, order.pickup_location.coordinates, "driving", new Date());
			let distanceM = result.rows[0].elements[0].distance.value;
			let distanceKm = distanceM / 1000;
			order.details.distance = distanceKm;
			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				details: order.details
			});
		}
		console.log("stripeCustomer", user.stripe_customer_id);

		const customer_acc = user.stripe_customer_id
		const restaurant_acc = business.stripe_account_id
		const pm_id = orderData.payment.payment_method_id
		const TOTAL_PRICE = orderData.details.total_price
		const DELIVERY_COST = orderData.details.delivery_cost

		if (order.payment.type === "CARD") {
			payment_intent = await stripe.createSplitPayment(
				customer_acc,
				restaurant_acc,
				order.order_id,
				pm_id,
				TOTAL_PRICE,
				DELIVERY_COST,
				return_url
			)

			// payment_intent = await stripe.createPaymentIntentOnBehalf(
			// 	orderData.details.total_price,
			// 	orderData.details.delivery_earnings,
			// 	orderData.payment.payment_method_id,
			// 	user.stripe_customer_id,
			// 	business.stripe_account_id,
			// 	delivery_business.stripe_account_id,
			// 	order.order_id,
			// 	return_url
			// );
			orderData.payment_intent_id = payment_intent.id;
			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				payment_intent_id: payment_intent.id
			});
		} else if (order.payment.type === "WALLET") {
			// handle wallet payment
			if (user.wallet_balance < orderData.details.total_price) {
				throw new Error("Insufficient funds");
			}

			await UsersDao.removeWalletBalance(user_id, orderData.details.total_price, order.order_id);

			const DELIVERY_EARNINGS_AMOUNT = Math.round(orderData.details.delivery_earnings * 100);
			let MERCHANT_AMOUNT = (orderData.details.total_price - orderData.details.delivery_earnings) * (1 - RESTAURANT_FEE);
			MERCHANT_AMOUNT = Math.round(MERCHANT_AMOUNT * 100);
			console.log("MERCHANT_AMOUNT", MERCHANT_AMOUNT);

			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				payment: {
					...order.payment,
					status: "PAID"
				},
				status: "CUSTOMER_PAYMENT_SUCCESSFUL"
			});
			let balance = await stripe.getBalance();
			console.log("balance", balance);

			let transfer = await stripe.transferToConnectedAccount(MERCHANT_AMOUNT, business.stripe_account_id);
			let walletTransfer = await prisma.wallet_transfers.create(
				{
					data: {
						amount: MERCHANT_AMOUNT,
						order: {
							connect: {
								order_id: order.order_id
							}
						},
						success: transfer.id ? true : false

					}
				}
			);

			/*
			let transfer_delivery = await stripe.transferToConnectedAccount(DELIVERY_EARNINGS_AMOUNT, delivery_business.stripe_account_id);
			await prisma.wallet_transfers.create(
				{
					data: {
						amount: DELIVERY_EARNINGS_AMOUNT,
						order: {
							connect: {
								order_id: order.order_id
							}
						},
						success: transfer_delivery.id ? true : false

					}
				}
			);
			*/

			
		} else if (order.payment.type === "CASH") {
			// io.to("orders_" + order.business_id).emit('new_order', order);
		}
		io.to("orders_" + order.business_id).emit("new_order", order);
		//DeliveryHelper.findDeliveryOrderDrivers(order); here we do not need to notify delivery drivers yet, because of the merchant order preparation time

		res.status(200).json({
			...order,
			payment_intent
		});
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/orders/daily_meals
 * @tag Delivery
 * @summary Create daily meals.
 * @description This creates the daily meals for the subscribed users. Returns list of orders if successful.
 * @operationId createDailyMeals
 * @response 200 - Successful operation. Returns the newly created daily meals in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function createDailyMeals(req, res) {
	const { user_id, delivery_driver } = req.body;

	console.info('DELIVERY DRIVER', user_id, delivery_driver);

	const userSocket = UserSockets.get(user_id);
	if (!userSocket) {
		console.info('User is not connected to the socket');
		return res.status(400).json({ message: "User is not connected to the socket." });
	}

	try {
		const subscribedUsers = await getUsers({
			where: {
				subscribed_to_daily_meals: true,
			},
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
			},
		});

		const todayDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' }); // Get today's day name
		const today = new Date();
		const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
		const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toISOString();

		const existingOrders = await DeliveryOrderDao.getOrders({
			where: {
				created_at: {
					gte: startOfDay,
					lt: endOfDay,
				},
			},
		});

		if (!subscribedUsers.length) {
			console.info("No users subscribed to daily meals.");
			return res.status(200).json({ message: "No users subscribed to daily meals." });
		}

		const usersWithOrdersToday = new Set(existingOrders.map(order => order.user_id));
		const usersToCreateOrdersFor = subscribedUsers
			.filter(user =>
				user.addresses.length > 0 &&
				!usersWithOrdersToday.has(user.user_id)
				&&
				(
					user.daily_meal_day_preferences.length === 0 ||
					user.daily_meal_day_preferences.includes(todayDayName)
				)
			);

		if (!usersToCreateOrdersFor.length) {
			console.info("Daily meal already prepared for all subscribed users.");
			return res.status(200).json({ message: "Daily meal already prepared for all subscribed users." });
		}

		const merchantBusinesses = await BusinessDao.getBusinessesByType(Constants.BUSINESS_TYPE.MERCHANT, { offers_daily_meals: true });

		if (!merchantBusinesses.length) {
			return res.status(404).json({ message: "No provider offers daily meals." });
		}

		const provider = merchantBusinesses[0];
		const providerAddress = {
			address: provider.address.address,
			coordinates: {
				latitude: parseFloat(provider.address.latitude),
				longitude: parseFloat(provider.address.longitude),
			},
		};

		const validUsersToCreateOrdersFor = usersToCreateOrdersFor
			.filter(user => {
				const address = user.addresses[0];
				return address &&
					address.latitude &&
					address.longitude &&
					!isNaN(parseFloat(address.latitude)) &&
					!isNaN(parseFloat(address.longitude));
			})
			.map(user => ({
				...user,
				address: {
					address: user.addresses[0].address,
					coordinates: {
						latitude: parseFloat(user.addresses[0].latitude),
						longitude: parseFloat(user.addresses[0].longitude),
					},
				},
			}));

		let sortedUserAddresses;

		if (provider.daily_users_sorting_type === 'MANUAL') {
			// Manual sorting based on provider.daily_users_sorted
			const userMap = new Map(validUsersToCreateOrdersFor.map(user => [user.user_id, user]));
			sortedUserAddresses = provider.daily_users_sorted
				.map(userId => userMap.get(userId))
				.filter(user => user !== undefined)
				.map(user => user.address);

			console.info('sortedUserAddresses MANUAL', sortedUserAddresses);
			console.info('sortedUserAddresses MANUAL', sortedUserAddresses[0].address);
		} else {
			// Automatic sorting by nearest neighbor
			sortedUserAddresses = sortLocationsByNearestNeighbor([providerAddress, ...validUsersToCreateOrdersFor.map(user => user.address)]).slice(1);
			console.info('sortedUserAddresses AUTOMATIC', sortedUserAddresses);
			console.info('sortedUserAddresses AUTOMATIC', sortedUserAddresses[0].address);
		}

		const orders = [];
		let cumulativeTime = 0; // Track the total elapsed time
		let scheduledMealsRoute = [providerAddress]
		for (let i = 0; i < sortedUserAddresses.length; i++) {
			const userAddress = sortedUserAddresses[i];
			const user = validUsersToCreateOrdersFor.find(u => u.address.address === userAddress.address);

			if (!user) continue;

			const dailyMealItems = user.daily_meal_preferences
				? generateItemsFromPreferences(user.daily_meal_preferences, { price: 0, discount: 0 })
				: generateItemsFromPreferences({ normal: { amount: 1 }, substitution: { amount: 0 } }, { price: 0, discount: 0 });

			let { result } = await gApi.distanceBetweenTwoPoints(delivery_driver.location.coordinates, userAddress.coordinates, "driving", new Date());
			const durationValue = result.rows[0].elements[0].duration.value;

			// Calculate expected delivery time based on cumulative time
			const customerExpectedDeliveryAt = new Date(
				new Date().getTime() + cumulativeTime * 1000 + durationValue * 1000 + (5 * 60 * 1000)
			);
			cumulativeTime += durationValue;
			const readyForPickupAt = new Date().toISOString();

			const orderData = {
				is_daily_meal: true,
				items: dailyMealItems,
				details: {
					type: "delivery",
					sub_total_price: 0,
					total_price: 0,
					discount_savings: 0,
					provider_address: provider.address,
					business_id: provider.business_id,
					delivery_cost: 2.4,
					delivery_earnings: 0,
					provider_delivery_cost: 2.4,
					ready_for_pickup_at: readyForPickupAt,
					customer_expected_delivery_at: customerExpectedDeliveryAt.toISOString(),
					floor_number: user.details?.floor_number,
					door_number: user.details?.door_number,
					daily_meal_delivery_order: i + 1, // Add sorted order number (1-based index)
				},
				payment: {
					status: "SUCCESSFUL",
					type: "ALREADY PAID",
					cash: {
						type: "CHANGE_NOT_NEEDED",
						amount: 0,
					},
					date: new Date().toISOString(),
				},
				courier_instructions: {
					text: user.details?.note,
				},
				restaurant_message: {
					text: null,
				},
				delivery_location: userAddress,
				pickup_location: providerAddress,
				scheduled: {
					date: null,
					time: null,
				},
				route: [
					providerAddress,
					userAddress,
				],
			};

			const order = await DeliveryOrderDao.createOrder({
				...orderData,
				status: DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP,
			}, user.user_id);

			await DeliveryOrderDao.createOrderSent(order.order_id, delivery_driver);
			await DeliveryOrderDao.connectOrderWithDriver(order.order_id, delivery_driver.delivery_driver_id);
			orders.push(order);
			scheduledMealsRoute.push(userAddress)
		}

		scheduledMealsRoute.push(providerAddress)
		await DeliveryDriverDao.updateDeliveryDriver(delivery_driver?.delivery_driver_id, {
			scheduled_meals_route: scheduledMealsRoute,
			delivery_timeline: []
		});

		userSocket.emit("daily_meals", {
			orders: orders,
			scheduled_meals_route: scheduledMealsRoute
		});

		res.status(200).json(orders);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Something went wrong with creating daily meals..." });
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
async function acceptOrder(req, res) {
	console.log("accept order function",req.body);
	const { order_id, user } = req.body;
	const delivery_driver_id = user?.delivery_driver?.delivery_driver_id || user?.driver?.delivery_driver_id
	try {
		//TODO: check if driver is online
		//TODO: check if order is still pending
		await DeliveryOrderDao.acceptOrder(order_id, delivery_driver_id);
		let order = await DeliveryOrderDao.getOrder(order_id, {
			include: {
				delivery_driver: true
			}
		});
		let driver = await DeliveryDriverDao.getDeliveryDriverById(delivery_driver_id, {
			vehicles: {
				include: {
					vehicle_specification: true,
				}
			}
		});
		//TODO: how to handle multiple vehicles on driver -> check which vehicle has its field active, that's it, one active vehicle per delivery driver
		driver.vehicle = driver.vehicles[0];
		order.driver = driver;
		let { result } = await gApi.distanceBetweenTwoPoints(order.pickup_location.coordinates, order.delivery_location.coordinates, "driving", new Date());
		order.details.distance = result.rows[0].elements[0].distance.text;
		order.details.duration = result.rows[0].elements[0].duration.text;
		if (!order?.is_daily_meal) {
			order.details.customer_expected_delivery_at = new Date(new Date().getTime() + result.rows[0].elements[0].duration.value * 60 * 1000);
			console.log(order.details.customer_expected_delivery_at, "expected delivery ...");
		}
		order = await DeliveryOrderDao.updateOrder(order.order_id, {
			details: order.details
		});
		console.log("order accepted", order);

		io.to("order_" + order.order_id).emit("order_accepted__delivery", order);
		io.emit("driver_unavailable", order.delivery_driver_id);

		res.status(200).json(order);
	} catch (e) {
		console.log(e);
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
		let driver = await DeliveryDriverDao.getDeliveryDriverById(order.delivery_driver_id);
		let delivery_business = await BusinessDao.getBusinessById(driver.business_id);
		const paymentIntent = stripe.client.paymentIntents.retrieve(order.payment_intent_id);
		const transferDelivery = stripe.splitCutFromPaymentIntent(
			paymentIntent,
			delivery_business.stripe_account_id,
			order.details.delivery_cost
		);

		io.to("order_" + order.order_id).emit("order_completed__delivery", order);
		io.emit("driver_available", driver);

		res.status(200).json(order);
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
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getCompletedDeliveryOrdersByDriverId(req, res) {
	console.log("get completed orders");
	const { driver_id } = req.params;

	try {
		const completedOrders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
				delivery_driver_id: driver_id
			},
			include: {
				business: true
			}
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
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve active orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getActiveDeliveryOrdersByDriverId(req, res) {
	const { driver_id } = req.params;

	try {
		const completedOrders = await DeliveryOrderDao.getOrders({
			where: {
				status: {
					notIn: [
						DELIVERY_ORDER_STATUS.PENDING,
						DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
						DELIVERY_ORDER_STATUS.CUSTOMER_CANCELED,
						DELIVERY_ORDER_STATUS.DELIVERY_REJECTED,
						DELIVERY_ORDER_STATUS.MERCHANT_REFUNDED,
						DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED
					]
				},
				delivery_driver_id: driver_id
			}
		});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * GET /delivery/orders/completed/user/:user_id
 * @tag Delivery
 * @summary Get completed delivery orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedDeliveryOrdersByDriverId
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getCompletedDeliveryOrdersByUserId(req, res) {
	const { user_id } = req.params;

	try {
		const completedOrders = await DeliveryOrderDao.getOrders({
			where: {
				OR: [
					{ status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED },
					{ status: DELIVERY_ORDER_STATUS.DELIVERY_PICKED_UP }
				],
				user_id: user_id
			},
			include: {
				business: {
					include: {
						address: true,
						documents: {
							where: {
								document_type: DOCUMENT_TYPE.LOGO
							},
							include: {
								files: true
							}
						}
					}
				},
				delivery_driver: true
			}
		});

		const result = completedOrders.map(order => {
			const business = order.business;
			const logoDocument = business.documents.find(doc => doc.document_type === DOCUMENT_TYPE.LOGO);
			const logo = logoDocument ? {
				...logoDocument,
				files: logoDocument.files
			} : null;

			return {
				...order,
				business: {
					...business,
					logo: logo
				}
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
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getActiveDeliveryOrdersByUserId(req, res) {
	const { user_id } = req.params;

	try {
		const activeOrder = await DeliveryOrderDao.getDeliveryOrderIfNotCompleted(user_id);
		res.status(200).json(activeOrder);
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
 * @requestBody {business_id} business_id - The ID of the business to retrieve orders for
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getDeliveryOrdersByBusinessId(req, res) {
	const { business_id } = req.params;

	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				business_id: business_id
			}
		});
		console.log('business orders', orders)
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
 * @requestBody {business_id} business_id - The ID of the business to retrieve orders for
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
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED
			}
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
		let order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, req.body.status);

		if (req.body.status === DELIVERY_ORDER_STATUS.MERCHANT_ACCEPTED) {
			if (order.payment.type === "CARD") {
				const paymentIntent = await stripe.client.paymentIntents.capture(order.payment_intent_id);
				io.to("orders_" + order.business_id).emit("order_status_change__delivery", order);
			}
		}
		io.to("order_" + order.order_id).emit("order_status_change__delivery", order);

		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
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
		let order = await DeliveryOrderDao.updateOrderPickupTime(order_id, pickup_time);
		io.to("order_" + order.order_id).emit("order_pickup_time", order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
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
		io.to("order_" + order.order_id).emit("order_delivery_time", order);

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
		io.to("order_" + order.order_id).emit("order_timeline_change", order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/order/update
 * @tag Taxi
 * @summary Update a delivery order.
 * @description Updates a delivery order.
 * @operationId updateDeliveryOrderTimeline
 * @bodyDescription Request body must include 'order_id', and the new 'timeline' details.
 * @bodyContent {updateDeliveryOrderTimelineRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateDeliveryOrder(req, res) {
	const { order } = req.body;
	const { order_id, ...data } = order;

	try {
		let order = await DeliveryOrderDao.updateOrder(order_id, data);
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
			where: { status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED, created_at: { gte: new Date(new Date().setHours(0,0,0,0)) } }
		});
		if (orders) {
			return res.status(200).json({orders: orders.length, amount: todaysEarnings(orders, DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED) });
		}
	} catch (e) {
		console.error("DeliveryOrderController", e);
		res.status(500).json(e);
	}
}

module.exports = {
	getDeliveryOrders,
	getDeliveryOrdersToday,
	getActiveDeliveryOrders,
	getOrder,
	createOrder,
	acceptOrder,
	completeOrder,
	updateOrderStatus,
	getCompletedDeliveryOrdersByDriverId,
	updateDeliveryOrderTimeline,
	getUserByDeliveryOrderId,
	updateOrderPickupTime,
	getDeliveryOrdersByBusinessId,
	updateOrderDeliveryTime,
	getActiveDeliveryOrdersByUserId,
	getCompletedDeliveryOrdersByUserId,
	getActiveDeliveryOrdersByDriverId,
	updateDeliveryOrder,
	createDailyMeals,
	getCompletedDeliveryOrdersByBusinessId
};