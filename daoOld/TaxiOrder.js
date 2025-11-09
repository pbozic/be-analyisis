import { validate as isUuid } from 'uuid';

import prisma from '../prisma/prisma.js';
import { TIME_LIMIT, TAXI_ORDER_STATUS, ORDER_TYPE, ORDER_SUBTYPE } from '../lib/constants.js';
/**
 * List taxi orders with provided Prisma args and standard includes.
 *
 * @param {object} args - Prisma findMany args (where/orderBy/etc.).
 * @returns {Promise<object[]>} Array of orders.
 */
async function getOrders(args) {
	try {
		const mergedArgs = {
			...args,
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						current_vehicle: true,
					},
				},
				vehicle: true,
			},
		};
		return await prisma.taxi_orders.findMany(mergedArgs);
	} catch (e) {
		console.error('Error fetching orders:', e);
		throw new Error(e);
	}
}
/**
 * Get a taxi order by ID with nested user, driver, and grouped_orders.
 *
 * @param {string} order_id - Order ID.
 * @returns {Promise<object|null>} The order or null.
 */
async function getOrder(order_id) {
	try {
		return await prisma.taxi_orders.findFirst({
			where: { order_id },
			include: {
				user: {
					include: {
						documents: {
							include: {
								files: true,
							},
						},
					},
				},
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
				grouped_orders: true,
			},
		});
	} catch (e) {
		console.error('Error fetching order by ID:', e);
		throw new Error(e);
	}
}
/**
 * Get non-completed taxi orders for a user (optionally business-user aware) and optional type.
 *
 * @param {string} user_id - User ID.
 * @param {string|undefined} type - Optional order type filter.
 * @param {boolean} [isBusinessUser=false] - If true, include orders created by the user for a business.
 * @returns {Promise<object[]>} Matching orders.
 */
async function getTaxiOrdersIfNotCompleted(user_id, type, isBusinessUser = false) {
	try {
		const whereClause = {
			...(type && { type: type }),
			status: {
				notIn: [
					TAXI_ORDER_STATUS.TAXI_CANCELED,
					TAXI_ORDER_STATUS.TAXI_COMPLETED,
					TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
					TAXI_ORDER_STATUS.TAXI_REJECTED,
					//TODO: Should exclude status AWAITING_PAYMENT or not?
					TAXI_ORDER_STATUS.AWAITING_PAYMENT,
				],
			},
		};
		return await prisma.taxi_orders.findMany({
			where: {
				...whereClause,
				...(isBusinessUser
					? {
							OR: [{ user_id: user_id }, { creating_user_id: user_id }],
						}
					: {
							user_id: user_id,
							subtype: ORDER_SUBTYPE.CREATED_BY_USER,
							OR: [{ creating_user_id: null }, { creating_user_id: { not: user_id } }],
						}),
			},
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
				grouped_orders: true,
			},
		});
	} catch (e) {
		console.error('Error fetching taxi order:', e);
		throw new Error(e.message);
	}
}
/**
 * Get currently active (non-pending/completed/canceled) orders for a driver; includes scheduled cutoff logic.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object[]>} Active orders for the driver.
 */
async function getActiveOrdersByDriverId(driver_id) {
	const thirtyMinutesInMs = TIME_LIMIT.START_DRIVE * 60000;
	const currentTime = new Date();
	const timezoneOffset = currentTime.getTimezoneOffset() * 60000;
	const comparisonTime = new Date(currentTime.getTime() - timezoneOffset + thirtyMinutesInMs)
		.toISOString()
		.slice(0, -1);
	try {
		return await prisma.taxi_orders.findMany({
			where: {
				driver_id: driver_id,
				status: {
					notIn: [
						TAXI_ORDER_STATUS.TAXI_CANCELED,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
						TAXI_ORDER_STATUS.TAXI_COMPLETED,
						TAXI_ORDER_STATUS.PENDING,
						TAXI_ORDER_STATUS.TAXI_REJECTED,
						TAXI_ORDER_STATUS.AWAITING_PAYMENT,
					],
				},
				OR: [
					{ is_scheduled: false },
					{
						AND: [
							{ is_scheduled: true },
							{
								preferences: {
									path: ['departure_time'],
									lte: comparisonTime,
								},
							},
						],
					},
				],
			},
			include: {
				user: {
					include: {
						documents: {
							include: {
								files: true,
							},
						},
					},
				},
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
				grouped_orders: true,
			},
		});
	} catch (e) {
		console.error('Error fetching taxi order:', e);
		throw new Error(e.message);
	}
}
/**
 * Get delivery orders (non-taxi) for a driver with optional filters.
 *
 * @param {string} driver_id - Driver ID.
 * @param {object} args - Additional where filters.
 * @returns {Promise<object[]>} Delivery orders.
 */
async function getDeliveryOrdersByDriverId(driver_id, args) {
	try {
		const whereClause = {
			driver_id: driver_id,
			...args,
		};
		return await prisma.delivery_orders.findMany({
			where: whereClause,
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		console.error('Error getting orders by driver ID:', e);
		throw new Error(e);
	}
}
/**
 * Get taxi orders for a driver with optional filters.
 *
 * @param {string} driver_id - Driver ID.
 * @param {object} args - Additional where filters.
 * @returns {Promise<object[]>} Taxi orders.
 */
async function getOrdersByDriverId(driver_id, args) {
	try {
		const whereClause = {
			driver_id: driver_id,
			...args,
		};
		return await prisma.taxi_orders.findMany({
			where: whereClause,
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		console.error('Error getting orders by driver ID:', e);
		throw new Error(e);
	}
}
/**
 * Create a taxi order with an auto-incrementing mod-10000 order_number.
 *
 * @param {object} order - Order payload to insert.
 * @returns {Promise<object>} Created order.
 */
async function createOrder(order) {
	try {
		return await prisma.$transaction(async (prisma) => {
			const lastOrder = await prisma.taxi_orders.findFirst({
				orderBy: { created_at: 'desc' },
				select: { order_number: true },
			});
			const order_number = lastOrder ? (lastOrder.order_number + 1) % 10000 : 0;
			return await prisma.taxi_orders.create({
				data: {
					...order,
					order_number: order_number,
				},
			});
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Create a taxi_order_sent record for an order and driver.
 *
 * @param {string} order_id - Order ID.
 * @param {object} driver - Driver object containing driver_id and location.
 * @returns {Promise<object>} Created taxi_order_sent record.
 */
async function createOrderSent(order_id, driver) {
	try {
		return prisma.taxi_order_sent.create({
			data: {
				order: {
					connect: {
						order_id,
					},
				},
				driver: {
					connect: {
						driver_id: driver.driver_id,
					},
				},
				location: driver.location,
				accepted: false,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Check whether a given order has already been sent to a driver.
 *
 * @param {string} order_id - Order ID.
 * @param {object} driver - Driver object containing driver_id.
 * @returns {Promise<object|null>} Sent record or null.
 */
async function isOrderSent(order_id, driver) {
	try {
		return prisma.taxi_order_sent.findFirst({
			where: {
				order_id,
				driver_id: driver.driver_id,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Get pending (not accepted/rejected) sent orders for a driver where order is still pending.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object[]>} Array of taxi_order_sent with order included.
 */
async function getAlreadySentOrdersByDriverId(driver_id) {
	try {
		return await prisma.taxi_order_sent.findMany({
			where: {
				driver_id: driver_id,
				accepted: false,
				rejected: false,
				order: {
					status: TAXI_ORDER_STATUS.PENDING, // Replace with your desired status value
				},
			},
			include: {
				order: true,
			},
		});
	} catch (e) {
		console.error('Error fetching pending orders for driver:', e);
		throw new Error(e);
	}
}
/**
 * Accept a taxi order using a raw row-level lock to prevent race conditions.
 *
 * @param {object} order - Order object containing order_id and is_scheduled.
 * @param {object} driver - Driver with driver_id and current_vehicle.
 * @returns {Promise<object>} Updated taxi order.
 */
export async function acceptTaxiOrderWithRawLock(order, driver) {
	const { order_id: orderId, is_scheduled } = order;
	const driverId = driver.driver_id;

	// Validate UUID format to prevent SQL injection
	if (!isUuid(orderId)) {
		throw new Error(`Invalid order_id format: ${orderId}`);
	}

	return prisma.$transaction(async (tx) => {
		// 1) Acquire a row-level lock on the taxi_orders row
		await tx.$executeRawUnsafe(
			`SELECT 1
         FROM taxi_orders
        WHERE order_id = $1::uuid
          FOR UPDATE NOWAIT`,
			orderId
		);

		// 2) Mark the taxi_order_sent record as accepted
		await tx.taxi_order_sent.update({
			where: {
				taxi_order_sent_driver_unique: {
					order_id: orderId,
					driver_id: driverId,
				},
			},
			data: { accepted: true },
		});

		// 3) Update driver availability
		await tx.drivers.update({
			where: { driver_id: driverId },
			data: { on_order: !is_scheduled },
		});

		// 4) Update the taxi_orders row itself
		const updated = await tx.taxi_orders.update({
			where: { order_id: orderId },
			data: {
				status: 'TAXI_ACCEPTED',
				driver: { connect: { driver_id: driverId } },
				vehicle: { connect: { vehicle_id: driver.current_vehicle.vehicle_id } },
			},
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: { files: true },
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});

		// 5) Committing the transaction releases the lock
		return updated;
	});
}
/**
 * Accept a taxi order (without raw locking); marks sent as accepted, sets driver and vehicle.
 *
 * @param {object} order - Order object containing order_id and is_scheduled.
 * @param {object} driver - Driver with driver_id and current_vehicle.
 * @returns {Promise<object>} Updated taxi order.
 */
async function acceptOrder(order, driver) {
	const order_id = order.order_id;
	try {
		let taxi_order_sent = await prisma.taxi_order_sent.update({
			where: {
				taxi_order_sent_driver_unique: {
					order_id,
					driver_id: driver.driver_id,
				},
			},
			data: {
				accepted: true,
			},
		});
		console.log('taxi_order_sent', taxi_order_sent);
		await prisma.drivers.update({
			where: {
				driver_id: driver.driver_id,
			},
			data: {
				on_order: !order.is_scheduled,
			},
		});
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				status: 'TAXI_ACCEPTED',
				driver: {
					connect: {
						driver_id: driver.driver_id,
					},
				},
				vehicle: {
					connect: {
						vehicle_id: driver.current_vehicle.vehicle_id,
					},
				},
			},
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Update the status of a taxi order by ID, returning nested relations.
 *
 * @param {string} order_id - Order ID.
 * @param {string} status - New status.
 * @returns {Promise<object>} Updated taxi order.
 */
async function updateOrderStatus(order_id, status) {
	try {
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				status,
			},
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Mark an order as completed and set driver.on_order to false.
 *
 * @param {string} order_id - Order ID.
 * @returns {Promise<object>} Updated taxi order.
 */
async function completeOrder(order_id) {
	try {
		let taxi_order = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				status: 'TAXI_COMPLETED',
			},
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
		await prisma.drivers.update({
			where: {
				driver_id: taxi_order.driver_id,
			},
			data: {
				on_order: false,
			},
		});
		return taxi_order;
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Cancel an order with a specific status and reason; sets driver.on_order to false if assigned.
 *
 * @param {string} order_id - Order ID.
 * @param {string} status - Cancellation status.
 * @param {string} cancellation_reason - Reason text.
 * @returns {Promise<object>} Updated taxi order.
 */
async function cancelOrder(order_id, status, cancellation_reason) {
	try {
		let taxi_order = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				status: status,
				cancellation_reason: cancellation_reason,
			},
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
		if (taxi_order.driver_id) {
			await prisma.drivers.update({
				where: {
					driver_id: taxi_order.driver_id,
				},
				data: {
					on_order: false,
				},
			});
		}
		return taxi_order;
	} catch (e) {
		console.error('Error cancelling order:', e);
		throw new Error(e);
	}
}
/**
 * Cancel an active vehicle transfer combo order for a user, if present.
 *
 * @param {string} user_id - User ID.
 * @param {string} status - Cancellation status.
 * @param {string} cancellation_reason - Reason text.
 * @returns {Promise<object|null>} Updated order or null if not found.
 */
async function cancelVehicleTransferOrder(user_id, status, cancellation_reason) {
	try {
		let taxi_order = await prisma.taxi_orders.findFirst({
			where: {
				user_id: user_id,
				type: ORDER_TYPE.VEHICLE_TRANSFER_COMBO,
				status: {
					notIn: [
						TAXI_ORDER_STATUS.TAXI_COMPLETED,
						TAXI_ORDER_STATUS.TAXI_CANCELED,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
					],
				},
			},
		});
		if (!taxi_order) {
			console.info(`Vehicle transfer order for user: ${user_id} not found`);
			return null;
		}
		taxi_order = await prisma.taxi_orders.update({
			where: {
				order_id: taxi_order.order_id,
			},
			data: {
				status: status,
				cancellation_reason: cancellation_reason,
			},
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
		if (taxi_order.driver_id) {
			await prisma.drivers.update({
				where: {
					driver_id: taxi_order.driver_id,
				},
				data: {
					on_order: false,
				},
			});
		}
		return taxi_order;
	} catch (e) {
		console.error('Error cancelling vehicle transfer order:', e);
		throw new Error(e);
	}
}
/**
 * Mark a taxi_order_sent as accepted for a specific order and driver.
 *
 * @param {string} order_id - Order ID.
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object>} Updated taxi_order_sent record.
 */
async function acceptOrderSent(order_id, driver_id) {
	console.log('order sent accept', order_id, driver_id);
	try {
		return prisma.taxi_order_sent.update({
			where: {
				order_id,
				driver_id,
			},
			data: {
				accepted: true,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Get drivers to whom an order has been sent.
 *
 * @param {string} order_id - Order ID.
 * @returns {Promise<object[]>} Sent entries with nested driver and user docs.
 */
async function getSentDrivers(order_id) {
	try {
		return prisma.taxi_order_sent.findMany({
			where: {
				order_id,
			},
			include: {
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Update order's last_sent_at timestamp to now.
 *
 * @param {string} order_id - Order ID.
 * @returns {Promise<object>} Updated order.
 */
async function updateOrderLastSentAt(order_id) {
	try {
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				last_sent_at: new Date(),
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Update a taxi order's route array.
 *
 * @param {string} order_id - Order ID.
 * @param {object[]} route - Array of route waypoints.
 * @returns {Promise<object>} Updated order.
 */
async function updateTaxiOderRoute(order_id, route) {
	try {
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				route: route,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Update pickup_location for a taxi order.
 *
 * @param {string} order_id - Order ID.
 * @param {object} pickupLocation - Location object.
 * @returns {Promise<object>} Updated order.
 */
async function updateTaxiOrderPickupLocation(order_id, pickupLocation) {
	try {
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				pickup_location: pickupLocation,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Update delivery_location for a taxi order.
 *
 * @param {string} order_id - Order ID.
 * @param {object} deliveryLocation - Location object.
 * @returns {Promise<object>} Updated order.
 */
async function updateTaxiOrderDeliveryLocation(order_id, deliveryLocation) {
	try {
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				delivery_location: deliveryLocation,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Update full route array and compute pickup/delivery from endpoints.
 *
 * @param {string} order_id - Order ID.
 * @param {object[]} route - Route waypoints.
 * @returns {Promise<object>} Updated order with relations included.
 */
async function updateCompleteTaxiRoute(order_id, route) {
	try {
		const data = {
			route: route,
			pickup_location: { address: route[0].address, coordinates: route[0].coordinates },
		};
		if (route.length > 1) {
			data.delivery_location = {
				address: route[route.length - 1].address,
				coordinates: route[route.length - 1].coordinates,
			};
		}
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: data,
			include: {
				grouped_orders: true,
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Append entries to the order timeline array.
 *
 * @param {string} order_id - Order ID.
 * @param {object[]} newTimelineEntries - Timeline entries to append.
 * @returns {Promise<object>} Updated order with relations.
 */
async function updateTaxiOrderTimeline(order_id, newTimelineEntries) {
	try {
		const order = await prisma.taxi_orders.findUnique({
			where: {
				order_id,
			},
			select: {
				timeline: true,
			},
		});
		if (!order) {
			throw new Error(`Order with ID ${order_id} not found`);
		}
		const updatedTimeline = [...order.timeline, ...newTimelineEntries];
		const updated_order = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				timeline: updatedTimeline,
			},
			include: {
				grouped_orders: true,
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
		return updated_order;
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Update the payment object for a taxi order and include business_users.
 *
 * @param {string} order_id - Order ID.
 * @param {object} payment - Payment payload.
 * @returns {Promise<object>} Updated order.
 */
async function updateTaxiOrderPayment(order_id, payment) {
	try {
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				payment: payment,
			},
			include: {
				business_users: true,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Update arbitrary fields on a taxi order and return nested relations.
 *
 * @param {string} order_id - Order ID.
 * @param {object} order - Fields to update.
 * @returns {Promise<object>} Updated order.
 */
async function updateOrder(order_id, order) {
	try {
		return prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: order,
			include: {
				grouped_orders: true,
				user: {
					include: {
						documents: {
							include: {
								files: true,
							},
						},
					},
				},
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Get orders in accepted/active states (non-pending/canceled/completed/awaiting payment).
 *
 * @returns {Promise<object[]>} Active accepted orders.
 */
async function getAcceptedOrders() {
	try {
		return prisma.taxi_orders.findMany({
			where: {
				status: {
					notIn: [
						TAXI_ORDER_STATUS.TAXI_CANCELED,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
						TAXI_ORDER_STATUS.TAXI_COMPLETED,
						TAXI_ORDER_STATUS.PENDING,
						TAXI_ORDER_STATUS.TAXI_REJECTED,
						TAXI_ORDER_STATUS.AWAITING_PAYMENT,
					], // Exclude both completed and pending orders
				},
			},
			include: {
				user: true,
				driver: {
					include: {
						user: {
							include: {
								documents: {
									include: {
										files: true,
									},
								},
							},
						},
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Get active orders for a user.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<object[]>} Active orders for the user.
 */
async function userActiveOrders(user_id) {
	try {
		return prisma.taxi_orders.findMany({
			where: {
				user_id,
				status: {
					notIn: [
						TAXI_ORDER_STATUS.TAXI_CANCELED,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
						TAXI_ORDER_STATUS.TAXI_COMPLETED,
						TAXI_ORDER_STATUS.TAXI_REJECTED,
						TAXI_ORDER_STATUS.AWAITING_PAYMENT, //TODO: Should we consider AWAIITING_PAYMENT as active order in the user's eyes?
					], // Exclude both completed and pending orders
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
/**
 * Delete a taxi_order_sent entry by its ID.
 *
 * @param {string} order_id - Order ID (unused, kept for signature consistency).
 * @param {string} taxi_order_sent_id - Sent record ID to delete.
 * @returns {Promise<object>} Deleted record.
 */
async function deleteOrderSent(order_id, taxi_order_sent_id) {
	try {
		return prisma.taxi_order_sent.delete({
			where: {
				taxi_order_sent_id: taxi_order_sent_id,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
export { getOrder };
export { getOrdersByDriverId };
export { createOrder };
export { acceptOrder };
export { createOrderSent };
export { getOrders };
export { getSentDrivers };
export { updateOrder };
export { updateOrderLastSentAt };
export { completeOrder };
export { cancelOrder };
export { cancelVehicleTransferOrder };
export { updateOrderStatus };
export { isOrderSent };
export { updateTaxiOderRoute };
export { updateTaxiOrderPickupLocation };
export { updateTaxiOrderDeliveryLocation };
export { updateCompleteTaxiRoute };
export { updateTaxiOrderPayment };
export { updateTaxiOrderTimeline };
export { getTaxiOrdersIfNotCompleted };
export { getAlreadySentOrdersByDriverId };
export { getActiveOrdersByDriverId };
export { getAcceptedOrders };
export { userActiveOrders };
export { getDeliveryOrdersByDriverId };
export { deleteOrderSent };
export default {
	getOrder,
	getOrdersByDriverId,
	createOrder,
	acceptOrder,
	createOrderSent,
	getOrders,
	getSentDrivers,
	updateOrder,
	updateOrderLastSentAt,
	completeOrder,
	cancelOrder,
	cancelVehicleTransferOrder,
	updateOrderStatus,
	isOrderSent,
	updateTaxiOderRoute,
	updateTaxiOrderPickupLocation,
	updateTaxiOrderDeliveryLocation,
	updateCompleteTaxiRoute,
	updateTaxiOrderPayment,
	updateTaxiOrderTimeline,
	getTaxiOrdersIfNotCompleted,
	getAlreadySentOrdersByDriverId,
	getActiveOrdersByDriverId,
	getAcceptedOrders,
	userActiveOrders,
	getDeliveryOrdersByDriverId,
	deleteOrderSent,
	acceptTaxiOrderWithRawLock,
};
