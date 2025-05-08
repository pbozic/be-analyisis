const DeliveryOrderDao = require("../dao/DeliveryOrder");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const FlagDao = require("../dao/Flags");
const BusinessDao = require("../dao/Business");
const AddressDao = require("../dao/Address");
const UsersDao = require("../dao/User");
const MenuDao = require("../dao/Menu");
const MenuCategoryDao = require("../dao/MenuCategory");
const gApi = require("../lib/gApis");
const { UserSockets, io, SocketStore } = require("../socket");
const stripe = require("../lib/stripe");
const {
	DELIVERY_ORDER_STATUS,
	DOCUMENT_TYPE,
	TAXI_ORDER_STATUS,
	CREDITS,
	PARENT_USER_TYPE,
	ORDER_TYPE,
	CASHBACK_SOURCE,
	DRIVE_FEE,
	DELIVERY_ORDER_END_STATES,
	SCORING_POINTS_REASON,
	FUNDS_TYPE,
	SERVICE_TYPE,
	USER_ROLE,
} = require("../lib/constants");
const fs = require("fs");
const Constants = require("../lib/constants");
const { getUsers } = require("../dao/User");
const {
	generateItemsFromPreferences,
	revokeDeliveryOrderFromDrivers,
	calculateDeliveryOrderPaymentCuts,
	handlePaymentCleanup,
	handlePaymentRefund,
	verifyOrderCosts,
} = require("../lib/deliveryHelpers");
const { sortLocationsByNearestNeighbor, todaysEarnings } = require("../lib/helpersLib");
const prisma = require("../prisma/prisma");
const WalletFundsHelpers = require("../lib/WalletFundsHelpers");
const DriverDao = require("../dao/Driver");
const { sendDeliveryOrderNotifications } = require("../lib/notifications");
const CashbackDao = require("../dao/Cashback");
const WalletFundsDao = require("../dao/WalletFunds");
const { handleReferral } = require("../lib/referralHelper");
const ScoringPointsDao = require("../dao/ScoringPoints");
const LateEventsDao = require("../dao/LateEvents");
const moment = require("moment");
const BusinessHelpers = require("../lib/businessHelpers");
const uuidv4 = require("uuid").v4;
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
	console.info("CREATE DELIVERY ORDER: ", req.body);
	try {
		const isValidOrder = await verifyOrderCosts(orderBody);
		if (!isValidOrder) throw new Error("Invalid order data!");

		let orderData = {
			...orderBody,
			status: DELIVERY_ORDER_STATUS.PENDING,
		};
		let user_id = req.user.user_id;
		let flags = await FlagDao.getFlags();
		let falgsObj = {};
		flags.map((flag) => {
			falgsObj[flag.name] = flag.status;
		});
		orderData.flags = falgsObj;

		let user = await UsersDao.getUserById(user_id);
		const customer_acc = user.stripe_customer_id;
		const available_wallet_balances = await WalletFundsDao.getAvailableWalletBalanceGroupedByType(user_id);

		if (orderData.payment.type === "WALLET") {
			const TOTAL_PRICE_CENT = Math.round(orderData.details.total_price * 100);
			if (available_wallet_balances["DELIVERY"] + available_wallet_balances[null] < TOTAL_PRICE_CENT / 100) {
				throw new Error("Insufficient funds");
			}
		}
		if (orderData.payment.type === "CARD") {
			if (!customer_acc) {
				throw new Error("Missing stripe_customer_id");
			}
		}
		let business = await BusinessDao.getBusinessById(orderData.details.business_id);
		let order = await DeliveryOrderDao.createOrder(orderData, user_id);
		// let delivery_business = await BusinessDao.getBusinessById(orderData?.delivery_driver?.business_id);
		orderData.telephone = user.telephone;
		let payment_intent;
		if (order.details.type === "delivery") {
			let { result } = await gApi.distanceBetweenTwoPoints(
				order.delivery_location.coordinates,
				order.pickup_location.coordinates,
				"driving",
				new Date(),
				"best_guess",
			);
			let distanceM = result.rows[0].elements[0].distance.value;
			let distanceKm = distanceM / 1000;
			order.details.distance = distanceKm;
			order.details.duration = result.rows[0].elements[0].duration.value;

			if (order.scheduled?.time && order.scheduled?.date) {
				order.details.customer_expected_delivery_at = new Date(order.scheduled.time);
				order.details.ready_for_pickup_at = new Date(
					new Date(order.scheduled.time).getTime() - order.details.duration * 1000,
				)
					.toISOString()
					.slice(0, -1);
			}
			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				details: order.details,
			});
		} else if (order.scheduled?.time && order.scheduled?.date) {
			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				details: {
					...order.details,
					ready_for_pickup_at: order.scheduled?.time,
				},
			});
		}
		console.log("stripeCustomer", user.stripe_customer_id);

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
						FUNDS_TYPE.CREDITS_DELIVERY,
					)
				).reduce((sum, wf) => sum + wf.amount, 0)
			: 0;
		const DISCOUNTED_COMBINED_COST_CENTS = TOTAL_PRICE_CENTS - CREDITS_AMOUNT_RESERVED;
		order.details.credit_discount = CREDITS_AMOUNT_RESERVED;
		order = await DeliveryOrderDao.updateOrder(order.order_id, order);
		console.info(order.details);

		const results = await calculateDeliveryOrderPaymentCuts(order);
		console.info("calculateDeliveryOrderPaymentCuts results: ", JSON.stringify(results, null, 2));
		const { MERCHANT_CUT } = results;

		if (DISCOUNTED_COMBINED_COST_CENTS > 0) {
			if (order.payment.type === "CARD" || order.payment.type === "PLATFORM") {
				payment_intent = await stripe.createSplitPayment(
					customer_acc,
					restaurant_acc,
					order.order_id,
					pm_id,
					DISCOUNTED_COMBINED_COST_CENTS,
					MERCHANT_CUT,
					return_url,
				);

				orderData.payment_intent_id = payment_intent.id;
				order = await DeliveryOrderDao.updateOrder(order.order_id, {
					payment_intent_id: payment_intent.id,
				});
			} else if (order.payment.type === "WALLET") {
				// handle wallet payment
				try {
					if (available_wallet_balances[null] < DISCOUNTED_COMBINED_COST_CENTS / 100) {
						throw new Error("Insufficient funds");
					}

					// await UsersDao.removeWalletBalance(user_id, DISCOUNTED_COMBINED_COST_CENTS/100, order.order_id);
					const reservedFunds = await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
						user_id,
						DISCOUNTED_COMBINED_COST_CENTS,
						order.order_id,
					);
				} catch (err) {
					order = await DeliveryOrderDao.updateOrder(order.order_id, {
						payment: {
							...order.payment,
							status: "UNPAID",
						},
					});
					order = await DeliveryOrderDao.updateOrderStatus(
						order.order_id,
						DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED,
					);
					io.to("order_" + order.order_id).emit("order_status_change__delivery", order);
					order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.FAIL);
					io.to("order_" + order.order_id).emit("order_status_change__delivery", order);
					throw err;
				}
			} else if (order.payment.type === "CASH") {
			}
		} else {
			//commented because the paid status should only happen if the order is accepted by merchant
			// order = await DeliveryOrderDao.updateOrder(order.order_id, {
			// 	payment: {
			// 		...order.payment,
			// 		status: "PAID"
			// 	}
			// });
		}

		order = await DeliveryOrderDao.getOrder(order.order_id, {
			include: {
				business: {
					select: {
						business_id: true,
						name: true,
						email: true,
						telephone: true,
						address: true,
						documents: {
							where: {
								document_type: { in: [DOCUMENT_TYPE.LOGO, DOCUMENT_TYPE.BANNER] },
							},
							include: {
								files: true,
							},
						},
					},
				},
			},
		});
		if (order) {
			let logo = null;
			let banner = null;
			for (let d of order?.business?.documents) {
				if (d.document_type === "LOGO") {
					logo = d.files[0].url;
				} else if (d.document_type === "BANNER") {
					banner = d.files[0].url;
				}
			}
			order.business.logo = logo;
			order.business.banner = banner;
			delete order.business.documents;
		}
		console.info("order created:", order);
		SocketStore.addUserToRoom(user_id, `order_${order.order_id}`);
		BusinessHelpers.joinAllBusinessUsersToRoom(order.business_id, `order_${order.order_id}`);
		io.to("orders_" + order.business_id).emit("new_order", order);

		res.status(200).json({
			...order,
			payment_intent,
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

	console.info("DELIVERY DRIVER", user_id, delivery_driver);

	const userSocket = UserSockets.get(user_id);
	if (!userSocket) {
		console.info("User is not connected to the socket");
		return res.status(400).json({ message: "User is not connected to the socket." });
	}

	try {
		//TODO: check what business the driver is driving for
		// - get all subscriptions for today for that business
		// - generate orders for each subscription
		// - flag subs as order_created (order_created -> datetime, so where null)
		// - send orders to driver

		const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverById(delivery_driver.delivery_driver_id);
		const business = await BusinessDao.getBusinessById(delivery_driver.daily_meals_business_id);
		if (!business) {
			return res.status(404).json({ message: "Business not found." });
		}
		if (!deliveryDriver) {
			return res.status(404).json({ message: "Delivery driver not found." });
		}
		const subscriptions = await DeliveryOrderDao.getDailyMealSubscriptionsByBusinessId(delivery_driver.daily_meals_business_id)

		if (!subscriptions) {
			return res.status(404).json({ message: "No subscriptions found." });
		}

		const providerAddress = {
			address: business.address.address,
			coordinates: {
				latitude: parseFloat(business.address.latitude),
				longitude: parseFloat(business.address.longitude),
			},
		};

		let sortedUserAddresses = [];
		if (provider.daily_users_sorting_type === "MANUAL") {
			// Manual sorting based on provider.daily_users_sorted
			const userMap = new Map(subscriptions.map((sub) => [sub.daily_meals_subscription_id, sub]));
			sortedUserAddresses = provider.daily_users_sorted
				.map((daily_meals_subscription_id) => userMap.get(daily_meals_subscription_id))
				.filter((sub) => sub !== undefined)
				.map((sub) => sub.address);

			console.info("sortedUserAddresses MANUAL", sortedUserAddresses);
			console.info("sortedUserAddresses MANUAL", sortedUserAddresses[0].address);
		} else {
			// Automatic sorting by nearest neighbor
			sortedUserAddresses = sortLocationsByNearestNeighbor([
				providerAddress,
				...subscriptions.map((sub) => sub.address),
			]).slice(1);
			console.info("sortedUserAddresses AUTOMATIC", sortedUserAddresses);
			console.info("sortedUserAddresses AUTOMATIC", sortedUserAddresses[0].address);
		}

		const orders = [];
		let cumulativeTime = 0; // Track the total elapsed time
		let scheduledMealsRoute = [providerAddress];
		for (let i = 0; i < subscriptions.length; i++) {
			const userAddress = subscriptions[i];
			const user = subscriptions.find((u) => u.address.address === userAddress.address);

			if (!user) continue;

			//TODO: generate from subscription
			const dailyMealItems = user.daily_meal_preferences
				? generateItemsFromPreferences(user.daily_meal_preferences, { price: 0, discount: 0 })
				: generateItemsFromPreferences(
						{ normal: { amount: 1 }, substitution: { amount: 0 } },
						{ price: 0, discount: 0 },
					);

			let { result } = await gApi.distanceBetweenTwoPoints(
				delivery_driver.location.coordinates,
				userAddress.coordinates,
				"driving",
				new Date(),
				"best_guess",
			);
			const durationValue = result.rows[0].elements[0].duration.value;

			// Calculate expected delivery time based on cumulative time
			const customerExpectedDeliveryAt = new Date(
				new Date().getTime() + cumulativeTime * 1000 + durationValue * 1000 + 5 * 60 * 1000,
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
				route: [providerAddress, userAddress],
			};

			const order = await DeliveryOrderDao.createOrder(
				{
					...orderData,
					status: DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP,
				},
				user.user_id,
			);

			await DeliveryOrderDao.createOrderSent(order.order_id, delivery_driver);
			await DeliveryOrderDao.connectOrderWithDriver(order.order_id, delivery_driver.delivery_driver_id);

			SocketStore.addUserToRoom(order.user_id, `order_${order.order_id}`);
			SocketStore.addUserToRoom(delivery_driver.user_id, `order_${order.order_id}`);

			orders.push(order);
			scheduledMealsRoute.push(userAddress);
		}

		scheduledMealsRoute.push(providerAddress);
		await DeliveryDriverDao.updateDeliveryDriver(delivery_driver?.delivery_driver_id, {
			scheduled_meals_route: scheduledMealsRoute,
			delivery_timeline: [],
		});

		userSocket.emit("daily_meals", {
			orders: orders,
			scheduled_meals_route: scheduledMealsRoute,
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
async function acceptOrderDelivery(req, res) {
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
			return res.status(400).json({ error: `You are offline!.`, errorType: "ERR_DRIVER_OFFLINE" });
		} else if (
			//TODO: handle dispatcher canceled.
			[].includes(order.status)
		) {
			return res
				.status(400)
				.json({ error: `Order has been canceled: ${order.status}.`, errorType: "ERR_ORDER_ALREADY_CANCELED" });
		} else if (
			![DELIVERY_ORDER_STATUS.MERCHANT_PREPARING, DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP].includes(
				order.status,
			)
		) {
			return res
				.status(400)
				.json({ error: "Order cannot be accepted in this state.", errorType: "ERR_ORDER_UNACCEPTABLE" });
		} else if (
			(order.driver?.driver_id && order.driver?.driver_id !== deliverer_id) ||
			(order.delivery_driver?.delivery_driver_id && order.delivery_driver?.delivery_driver_id !== deliverer_id)
		) {
			return res
				.status(400)
				.json({ error: "Order is already accepted.", errorType: "ERR_ORDER_ALREADY_ACCEPTED" });
		}
		const vehicle = deliverer.current_vehicle || deliverer.vehicles[0];
		order = await DeliveryOrderDao.acceptOrderDelivery(order, deliverer_id, vehicle?.vehicle_id);
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
		console.log("order accepted", order);

		SocketStore.addUserToRoom(deliverer.user_id, `order_${order.order_id}`);
		io.to("order_" + order.order_id).emit("order_accepted__delivery", order);
		io.emit("driver_unavailable", deliverer_id);

		await revokeDeliveryOrderFromDrivers(order.order_id);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
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
	const user = req.user;
	const deliverer_id = user?.delivery_driver?.delivery_driver_id || user?.driver?.driver_id;
	let deliverer = null;

	try {
		// 1. Condition check: Fetch the order and verify the driver and order status
		let order = await DeliveryOrderDao.getOrder(order_id, {
			include: {
				delivery_driver: true,
				driver: true,
			},
		});
		deliverer = order.delivery_driver || order.driver || null;

		if (order.driver?.driver_id !== deliverer_id && order.delivery_driver?.delivery_driver_id !== deliverer_id) {
			return res
				.status(400)
				.json({
					error: "You are not authorized to cancel this order delivery.",
					errorType: "ERR_NOT_AUTHORIZED",
				});
		}
		if (
			![DELIVERY_ORDER_STATUS.MERCHANT_PREPARING, DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP].includes(
				order.status,
			)
		) {
			return res
				.status(400)
				.json({
					error: "Order delivery cannot be canceled in its current state.",
					errorType: "ERR_DELIVERY_CANNOT_BE_CANCELED",
				});
		}

		// 3. Remove driver from order
		order = await DeliveryOrderDao.updateOrder(order_id, {
			driver_id: null,
			delivery_driver_id: null,
		});

		// 4. Add DELIVERY_CANCELED to timeline
		order = await DeliveryOrderDao.addTimelineEntry(
			order.order_id,
			DELIVERY_ORDER_STATUS.DELIVERY_CANCELED,
			user?.delivery_driver
				? { delivery_driver_id: user?.delivery_driver?.delivery_driver_id }
				: { driver_id: user.driver.driver_id },
		);

		// 5. Emit event to sockets with updated order
		io.to("order_" + order.order_id).emit("order_delivery_canceled", order);
		SocketStore.removeUserFromRoom(order.user_id, `order_${order.order_id}`);
		SocketStore.removeUserFromRoom(req.user?.user_id, `order_${order.order_id}`);

		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json({ error: "Something went wrong...", errorType: "ERR_SERVER_ERROR" });
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
		let driver = order.delivery_driver_id
			? await DeliveryDriverDao.getDeliveryDriverById(order.delivery_driver_id)
			: await DriverDao.getDriverById(order.driver_id);

		//assign penalties for being late
		const timeline_delivered_timestamp = order.timeline.findLast(
			(entry) => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_DELIVERED,
		)?.timestamp;

		if (timeline_delivered_timestamp && order.details?.customer_expected_delivery_at) {
			const late_seconds = moment(timeline_delivered_timestamp).diff(
				moment(order.details.customer_expected_delivery_at),
				"seconds",
			);
			console.log(`Order was ${late_seconds} seconds ${late_seconds > 0 ? "late" : "early or on time"}.`);
			let allowed_leeway = 60 * 30;

			if (late_seconds > allowed_leeway) {
				await LateEventsDao.createLateEvent(
					driver.business_id,
					driver.user_id,
					order.order_id,
					null,
					late_seconds - allowed_leeway,
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
				SCORING_POINTS_REASON.INSUFFICIENT_DATA,
			);
		}

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
				SERVICE_TYPE.DELIVERY,
			);
		}

		const DISCOUNTED_DELIVERY_COST_CENTS = INITIAL_DELIVERY_CUT - DELIVERY_CREDIT_CUT_CENTS;
		console.info({
			delivery_credits: DELIVERY_CREDIT_CUT_CENTS,
			remaining_delivery_cost: DISCOUNTED_DELIVERY_COST_CENTS,
		});

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
			const pendingCashbacks = await CashbackDao.getPendingUserCashbackByType(order.user_id, ORDER_TYPE.DELIVERY);
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
							amount: 100,
							type: FUNDS_TYPE.CREDITS_DELIVERY,
						},
						pendingCashbacks,
					);
				}
			}
		}

		await handleReferral(order.user_id);

		if (DISCOUNTED_DELIVERY_COST_CENTS > 0) {
			if (order.payment.type === "CARD") {
				const paymentIntent = await stripe.client.paymentIntents.retrieve(order.payment_intent_id);
				const transferDelivery = stripe.splitCutFromPaymentIntent(
					paymentIntent,
					delivery_business_stripe,
					DISCOUNTED_DELIVERY_COST_CENTS,
				);
			} else if (order.payment.type === "WALLET") {
				console.info(order);
				const transfersForDeliveryDriver = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					delivery_business_stripe,
					DISCOUNTED_DELIVERY_COST_CENTS,
					order.order_id,
					SERVICE_TYPE.DELIVERY,
				);
			}
		}
		sendDeliveryOrderNotifications(order.user, null, order.user_id, null, order.status);
		// order = await DeliveryOrderDao.updateOrderStatus(order.order_id,DELIVERY_ORDER_STATUS.SUCCESS)
		io.to("order_" + order.order_id).emit("order_completed__delivery", order);
		io.emit("driver_available", driver);
		SocketStore.closeRoom(`order_${order.order_id}`);
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
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
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
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve active orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getActiveDeliveryOrdersByDriverId(req, res) {
	const { driver_id } = req.params;

	try {
		const activeOrders = await DeliveryOrderDao.getOrders({
			where: {
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
					// notIn: [
					// 	DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_CANCELED,
					// 	DELIVERY_ORDER_STATUS.CUSTOMER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_REJECTED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_CANCELED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_REFUNDED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED
					// ]
				},
				OR: [{ delivery_driver_id: driver_id }, { driver_id: driver_id }],
			},
		});
		const pendingOrders = [];
		const sentOrders = await DeliveryOrderDao.getAlreadySentOrdersByDeliveryDriverId(driver_id);
		for (let sentOrder of sentOrders) {
			const order = await DeliveryOrderDao.getOrder(sentOrder.order.order_id);
			// if ([
			// 	DELIVERY_ORDER_STATUS.PENDING,
			// 	DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_PENDING,
			// 	DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL,
			// 	DELIVERY_ORDER_STATUS.MERCHANT_ACCEPTED,
			// 	DELIVERY_ORDER_STATUS.MERCHANT_PREPARING,
			// 	DELIVERY_ORDER_STATUS.MERCHANT_DELAYED,
			// 	DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
			// ].includes(order.status)) {

			if (
				!DELIVERY_ORDER_END_STATES.includes(order.status) &&
				!order.timeline.includes(DELIVERY_ORDER_STATUS.DELIVERY_PICKED_UP)
			) {
				pendingOrders.push(order);
				console.info("Re-sending pending order: ", order.order_id, " to driver: ", driver_id);
			}
		}
		res.status(200).json({
			active: activeOrders,
			pending: pendingOrders,
		});
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
				updated_at: "desc",
			},
		});

		const result = completedOrders.map((order) => {
			const business = order.business;
			const logoDocument = business.documents.find((doc) => doc.document_type === DOCUMENT_TYPE.LOGO);
			const logo = logoDocument
				? {
						...logoDocument,
						files: logoDocument.files,
					}
				: null;

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
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getActiveDeliveryOrdersByUserId(req, res) {
	const { user_id } = req.params;

	try {
		const activeOrders = await DeliveryOrderDao.getDeliveryOrdersIfNotCompleted(user_id);
		res.status(200).json(activeOrders);
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
 * @requestBody {BusinessId} businessId - The ID of the business to retrieve completed orders for
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
		// if (req.body.status === DELIVERY_ORDER_STATUS.MERCHANT_ACCEPTED) {
		// 	if (order.payment.type === "CARD") {
		// 		await stripe.client.paymentIntents.capture(order.payment_intent_id);
		// 	}else if(order.payment.type === "WALLET"){
		// 		const restaurant_stripe = await BusinessDao.getBusinessStripeByBusinessId(order.business_id)
		// 		const {PLATFORM_CREDIT_CUT, PLATFORM_CUT, MERCHANT_CREDIT_CUT, MERCHANT_CUT} = calculateDeliveryOrderPaymentCuts(order)
		//
		// 		const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(order.user_id,restaurant_stripe, MERCHANT_CUT+MERCHANT_CREDIT_CUT, order.order_id,"delivery");
		// 		const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(order.user_id,"platform", PLATFORM_CUT + PLATFORM_CREDIT_CUT, order.order_id,"delivery");
		//
		// 		order = await DeliveryOrderDao.updateOrder(order.order_id, {
		// 			payment: {
		// 				...order.payment,
		// 				status: "PAID"
		// 			}
		// 		});
		// 	}
		// }
		if (req.body.status === DELIVERY_ORDER_STATUS.MERCHANT_REJECTED) {
			await handlePaymentCleanup(order);
		}

		order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, req.body.status);
		io.to("order_" + order.order_id).emit("order_status_change__delivery", order);

		if (
			[
				DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
				DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
				DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED,
			].includes(order.status)
		) {
			order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, DELIVERY_ORDER_STATUS.FAIL);
			io.to("order_" + order.order_id).emit("order_status_change__delivery", order);
		} else if (
			[DELIVERY_ORDER_STATUS.CUSTOMER_PICKED_UP, DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED].includes(order.status)
		) {
			order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, DELIVERY_ORDER_STATUS.SUCCESS);
			io.to("order_" + order.order_id).emit("order_status_change__delivery", order);
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
 * POST /delivery/order/merchant_accept
 * @tag Delivery
 * @summary Process a delivery order from PENDING status.
 * @description Processes the order payment capture and moves the order to the next state accordingly.
 * @operationId merchantAcceptOrder
 * @bodyDescription Request body must include 'order_id' to identify the order.
 * @bodyContent {ProcessOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the processed order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function merchantAcceptOrder(req, res) {
	const { order_id, preparation_time } = req.body;
	try {
		let order = await DeliveryOrderDao.getOrder(order_id, { include: { user: true } });
		const user = order?.user;
		console.info("got into merchantAcceptOrder", JSON.stringify(order.payment_intent_id));
		const restaurant_stripe = await BusinessDao.getBusinessStripeByBusinessId(order.business_id);
		const { PLATFORM_CREDIT_CUT, PLATFORM_CUT, MERCHANT_CREDIT_CUT, MERCHANT_CUT } =
			await calculateDeliveryOrderPaymentCuts(order);

		if (order.payment.type === "CARD") {
			if (Math.round(order.details.total_price * 100) === order.details.credit_discount) {
				const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					restaurant_stripe,
					MERCHANT_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY,
				);
				const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
					order.user_id,
					"platform",
					PLATFORM_CREDIT_CUT,
					order.order_id,
					SERVICE_TYPE.DELIVERY,
				);
			} else {
				order = await DeliveryOrderDao.updateOrder(order.order_id, {
					payment: {
						...order.payment,
						status: "IN_PAYMENT_PROCESSING",
					},
				});
				// Status update happens elsewhere for CARD payments
				await stripe.client.paymentIntents.capture(order.payment_intent_id, {
					metadata: {
						preparation_time: preparation_time,
					},
				});
				console.log("Accepted order");
				return res.status(200).json({ message: "Accept successful, awaiting stripe handling." });
			}
		}

		if (order.payment.type === "WALLET") {
			const transfersForMerchant = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
				order.user_id,
				restaurant_stripe,
				MERCHANT_CUT + MERCHANT_CREDIT_CUT,
				order.order_id,
				SERVICE_TYPE.DELIVERY,
			);
			const transfersForPlatform = await WalletFundsHelpers.transferReservedWalletFundsForOrder(
				order.user_id,
				"platform",
				PLATFORM_CUT + PLATFORM_CREDIT_CUT,
				order.order_id,
				SERVICE_TYPE.DELIVERY,
			);
		}

		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.MERCHANT_ACCEPTED);
		sendDeliveryOrderNotifications(user, null, order.user_id, null, order.status);
		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.MERCHANT_PREPARING);
		if (preparation_time) {
			order = await DeliveryOrderDao.updateOrderPickupTime(order.order_id, preparation_time);
			io.to("order_" + order.order_id).emit("order_pickup_time", order);
		}
		// if(order.business_id){
		// 	io.to("orders_" + order.business_id).emit("order_status_change__delivery", order);
		// }
		io.to("order_" + order.order_id).emit("order_status_change__delivery", order);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		await handlePaymentCleanup(order_id);
		let order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED);
		io.to("order_" + order.order_id).emit("order_status_change__delivery", order);

		order = await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.FAIL);
		io.to("order_" + order.order_id).emit("order_status_change__delivery", order);
		SocketStore.closeRoom(`order_${order.order_id}`);
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
				(sp) => sp.delivery_order_id === order.order_id && sp.reason === SCORING_POINTS_REASON.LARGE_DELAY,
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
					SCORING_POINTS_REASON.LARGE_DELAY,
				);
			}
		}
		res.status(200).json(order);
	} catch (e) {
		console.log("Error updating order pickup time", e.message);
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
		io.to("order_" + order.order_id).emit("order_timeline_change_delivery", order);
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
		io.to("order_" + order.order_id).emit("order_timeline_change_delivery", order);
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
			where: {
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				created_at: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
			},
		});
		if (orders) {
			return res
				.status(200)
				.json({ orders: orders.length, amount: todaysEarnings(orders, DELIVERY_ORDER_STATUS.SUCCESS) });
		}
	} catch (e) {
		console.error("DeliveryOrderController", e);
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
			throw new Error("This order is not in a cancelable state.");
		}
		let new_order = await DeliveryOrderDao.updateOrderStatus(
			old_order.order_id,
			DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
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
			new_order.status,
		);
		//TODO: handle extras for socket on FE if needed.
		io.to("order_" + new_order.order_id).emit("order_status_change__delivery", new_order);

		new_order = await DeliveryOrderDao.updateOrderStatus(old_order.order_id, DELIVERY_ORDER_STATUS.FAIL);
		io.to("order_" + new_order.order_id).emit("order_status_change__delivery", new_order);

		await handlePaymentRefund(new_order);
		//TODO: handle on FE if needed.
		io.to("order_" + new_order.order_id).emit("order_canceled", new_order);

		SocketStore.closeRoom(`order_${new_order.order_id}`);
		res.status(200).json(new_order);
	} catch (e) {
		console.error("Error canceling order", e);
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
				old_order.status,
			)
		) {
			await DeliveryOrderDao.removeDriverFromOrder(old_order.order_id);
			await DeliveryOrderDao.addTimelineEntry(old_order.order_id, DELIVERY_ORDER_STATUS.DISPATCHER_REVOKED, {
				dispatcher: dispatcher_user_id,
			});
			updated_order = await DeliveryOrderDao.updateOrderStatus(old_order.order_id, old_order.status);
		} else if (
			[DELIVERY_ORDER_STATUS.DELIVERY_PICKED_UP, DELIVERY_ORDER_STATUS.DELIVERY_IN_DELIVERY].includes(
				old_order.status,
			)
		) {
			let new_location = null;
			if (old_order.driver?.location) {
				new_location = old_order.driver.location;
			} else if (old_order.delivery_driver?.location) {
				new_location = old_order.delivery_driver.location;
			}
			if (!new_location || !(new_location?.coordinates?.latitude && new_location?.coordinates?.longitude)) {
				throw new Error("The current driver does not have a well defined location.");
			}
			const new_address = await gApi.addressFromCoordinates(
				new_location?.coordinates?.latitude,
				new_location?.coordinates?.longitude,
			);
			new_location.address = `Previous Driver Location ${new_address ? "(" + new_address + ")" : "(use navigation)"}`;

			await DeliveryOrderDao.removeDriverFromOrder(old_order.order_id);
			await DeliveryOrderDao.updateOrder(old_order.order_id, { pickup_location: new_location });
			await DeliveryOrderDao.addTimelineEntry(old_order.order_id, DELIVERY_ORDER_STATUS.DISPATCHER_REVOKED, {
				dispatcher: dispatcher_user_id,
			});
			updated_order = await DeliveryOrderDao.updateOrderStatus(
				old_order.order_id,
				DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP,
			);
		} else {
			throw new Error("This order is not in a reassignable state.");
		}

		if (old_order.driver) {
			if (UserSockets.get(old_order.driver.user_id)) {
				UserSockets.get(old_order.driver.user_id).emit("order_revoked__delivery", order_id);
			}
			SocketStore.removeUserFromRoom(old_order.driver.user_id, `order_${old_order.order_id}`);
		}
		if (old_order.delivery_driver) {
			if (UserSockets.get(old_order.delivery_driver.user_id)) {
				UserSockets.get(old_order.delivery_driver.user_id).emit("order_revoked__delivery", order_id);
			}
			SocketStore.removeUserFromRoom(old_order.delivery_driver.user_id, `order_${old_order.order_id}`);
		}

		//TODO: handle extras for socket on FE if needed.
		io.to("order_" + updated_order.order_id).emit("order_status_change__delivery", updated_order);

		res.status(200).json(updated_order);
	} catch (e) {
		console.error("Error canceling order", e);
		res.status(500).json(e);
	}
}
async function dailyMealsSubscriptionPayment(req, res) {
	const { details, payment, return_url, allow_credits_usage } = req.body;
	const { total_price, delivery_cost, sub_total_price, business_id } = details;
	const { payment_type, payment_method_id } = payment;
	try {
		let groupedId = uuidv4();
		let hasUuid = false;
		const TOTAL_PRICE_CENT = Math.round(total_price * 100);

		while (!hasUuid) {
			const sub = await prisma.daily_meals_subscriptions.findFirst({
				where: {
					grouped_id: groupedId,
				},
			});
			if (!sub) {
				hasUuid = true;
			} else {
				groupedId = uuidv4();
			}
		}
		if (payment_type === "WALLET") {
			if (available_wallet_balances["DELIVERY"] + available_wallet_balances[null] < TOTAL_PRICE_CENT / 100) {
				throw new Error("Insufficient funds");
			}
		}
		const business = await BusinessDao.getBusinessById(business_id)
		const restaurant_acc = business.stripe_account_id;
		const pm_id = payment_method_id;
		let user = await UsersDao.getUserById(req.user.user_id);
		const customer_acc = user.stripe_customer_id;
		if (!customer_acc) {
			throw new Error("User does not have a stripe customer account.");
		}
		const TOTAL_PRICE_CENTS = Math.round(total_price * 100); //already includes delivery cost
		const CREDITS_AMOUNT_RESERVED = allow_credits_usage
			? (
					await WalletFundsHelpers.reserveCreditsForOrder(
						user.user_id,
						TOTAL_PRICE_CENTS,
						groupedId,
						FUNDS_TYPE.CREDITS_DELIVERY,
						"daily_meals_subscription",
					)
				).reduce((sum, wf) => sum + wf.amount, 0)
			: 0;
		const DISCOUNTED_COMBINED_COST_CENTS = TOTAL_PRICE_CENTS - CREDITS_AMOUNT_RESERVED;

		const results = await calculateDeliveryOrderPaymentCuts(
			{
				order_id: groupedId,
				details: {
					total_price: total_price,
					delivery_cost: delivery_cost,
					sub_total_price: sub_total_price,

				},
			},
			"daily_meals_subscription",
		);
		console.info("createDailyMealsSubscriptionPaymentIntent calculateDeliveryOrderPaymentCuts results: ", JSON.stringify(results, null, 2));
		const { MERCHANT_CUT } = results;
		if (DISCOUNTED_COMBINED_COST_CENTS === 0) return res.status(200).json({ status: "Success", groupedId: groupedId });
		let payment_intent = null;
		if (payment_type === "CARD" || payment_type === "PLATFORM") {
			payment_intent = await stripe.createSplitPayment(
				customer_acc,
				restaurant_acc, 
				groupedId,
				pm_id,
				DISCOUNTED_COMBINED_COST_CENTS,
				MERCHANT_CUT,
				return_url,
				"daily_meals_subscription_payment",
			);
			if (!payment_intent) {
				throw new Error("Payment intent creation failed.");
			}
			if (payment_intent?.error) {
				throw new Error(payment_intent?.error.message);
			}
			return res.status(200).json({
				status: "Success",
				grouped_id: groupedId,
				payment_intent: payment_intent,
			});
		} 
		if (payment_type === "WALLET") {
			// handle wallet payment
			try {
				if (available_wallet_balances[null] < DISCOUNTED_COMBINED_COST_CENTS / 100) {
					throw new Error("Insufficient funds");
				}

				// await UsersDao.removeWalletBalance(user_id, DISCOUNTED_COMBINED_COST_CENTS/100, order.order_id);
				await WalletFundsHelpers.reserveAvailableWalletFundsForOrder(
					user.user_id,
					DISCOUNTED_COMBINED_COST_CENTS,
					groupedId,
					"daily_meals_subscription",
				);
				return res.status(200).json({
					status: "Success",
					grouped_id: groupedId,
				});
			} catch (err) {
				throw new Error("Insufficient funds");
			}
		}
		if (payment_type === "CASH") {
			throw new Error("CASH payments are not allowed for this order type.");
		}
	
	} catch (e) {
		console.error("Error creating daily meals subscription payment intent", e);
		res.status(500).json(e);
	}
}
async function createDailyMealsSubscription(req, res) {
	const { daysData, details, grouped_id, delivery_location } = req.body;
	try {
		const user_id = req.user.user_id;
		const address = await AddressDao.addAddress({
			address: delivery_location.address,
			latitude: delivery_location.coordinates.latitude,
			longitude: delivery_location.coordinates.longitude,
		});

		for (const day of daysData) {
			let menu = day.menu;
			let date = new Date(day.date);
			date.setHours(10, 0, 0);
			const men_cat = MenuCategoryDao.getMenuCategoryById(menu.menu_category_id);
			const business_id = details.business_id
			for (let menuTag of Object.keys(menu)) {
				const menuData = menu[menuTag];
				
				await DeliveryOrderDao.createDailyMealsSubscription(
					grouped_id,
					user_id,
					business_id,
					men_cat.menu_id,
					address.address_id,
					men_cat.menu_category_id,
					day.commentCourier,
					day.commentRestaurant,
					date,
					menuData.people
				);
			}
		}
		res.status(200).json({
			status: "Success",
		});
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
async function getDailyMealsSubscriptionsByUserId(req, res) {
	const { user_id, start_date } = req.params;
	try {
		const dailyMeals = await DeliveryOrderDao.getDailyMealsSubscriptionByUserId(user_id, start_date);
		res.status(200).json(dailyMeals);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
async function getDailyMealsSubscriptionsByBusinessId(req, res) {
	const { business_id, start_date } = req.params;
	try {
		const dailyMeals = await DeliveryOrderDao.getDailyMealsSubscriptionByBusinessId(business_id, start_date);
		res.status(200).json(dailyMeals);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
module.exports = {
	getDeliveryOrders,
	getDeliveryOrdersToday,
	getActiveDeliveryOrders,
	getOrder,
	createOrder,
	merchantAcceptOrder,
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
	updateDeliveryOrder,
	createDailyMeals,
	getActiveDeliveryOrdersByBusinessId,
	getCompletedDeliveryOrdersByBusinessId,
	dailyMealsSubscriptionPayment,
	createDailyMealsSubscription,
	getDailyMealsSubscriptionsByUserId,
	getDailyMealsSubscriptionsByBusinessId,
};
