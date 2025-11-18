import { validate as isUuid } from 'uuid';
import { Prisma, TAXI_ORDER_STATUS, ORDER_TYPE as PrismaOrderType } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { TIME_LIMIT, ORDER_TYPE, ORDER_SUBTYPE } from '../lib/constants.js';
import type { TaxiOrderDetail } from '../schemas/dto/TaxiOrders/taxiOrder.dto.js';
import { toTaxiOrderDetail } from '../schemas/dto/TaxiOrders/taxiOrder.mappers.js';
import { DriverBase } from '../schemas/dto/Driver/driver.dto.js';
import { TaxiLocation } from '../schemas/dto/Taxi/taxiorder.dto.js';

/**
 * List taxi orders with provided Prisma args and standard includes.
 *
 * @param args - Prisma findMany args (where/orderBy/etc.).
 * @returns Array of orders.
 */
async function getOrders(args?: Prisma.taxi_ordersFindManyArgs): Promise<TaxiOrderDetail[]> {
	try {
		const mergedArgs: Prisma.taxi_ordersFindManyArgs = {
			where: args?.where,
			orderBy: args?.orderBy,
			take: args?.take,
			skip: args?.skip,
			include: {
				customer: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				vehicle: true,
			},
		};
		const results = await prisma.taxi_orders.findMany(mergedArgs);
		return results.map((result: unknown) => toTaxiOrderDetail(result));
	} catch (error) {
		console.error('Error fetching orders:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

async function getPendingScheduledOrdersByUserId(user_id: string): Promise<TaxiOrderDetail[]> {
	try {
		const results = await prisma.taxi_orders.findMany({
			where: {
				user_id: user_id,
				is_scheduled: true,
				status: TAXI_ORDER_STATUS.PENDING,
			},
			include: {
				customer: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				vehicle: true,
			},
		});
		return results.map((result: unknown) => toTaxiOrderDetail(result));
	} catch (error) {
		console.error('Error fetching scheduled orders for user:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get a taxi order by ID with nested user, driver, and grouped_orders.
 *
 * @param order_id - Order ID.
 * @returns The order or null.
 */
async function getOrder(order_id: string): Promise<TaxiOrderDetail | null> {
	try {
		const result = await prisma.taxi_orders.findFirst({
			where: { order_id },
			include: {
				customer: true,
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
		return result ? toTaxiOrderDetail(result) : null;
	} catch (error) {
		console.error('Error fetching order by ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get non-completed taxi orders for a user (optionally business-user aware) and optional type.
 *
 * @param user_id - User ID.
 * @param type - Optional order type filter.
 * @param isBusinessUser - If true, include orders created by the user for a business.
 * @returns Matching orders.
 */
async function getTaxiOrdersIfNotCompleted(
	user_id: string,
	type?: string,
	isBusinessUser: boolean = false
): Promise<TaxiOrderDetail[]> {
	try {
		const whereClause: Prisma.taxi_ordersWhereInput = {
			...(type ? { type: type as PrismaOrderType } : {}),
			status: {
				notIn: [
					TAXI_ORDER_STATUS.TAXI_CANCELED as TAXI_ORDER_STATUS,
					TAXI_ORDER_STATUS.TAXI_COMPLETED as TAXI_ORDER_STATUS,
					TAXI_ORDER_STATUS.CUSTOMER_CANCELED as TAXI_ORDER_STATUS,
					TAXI_ORDER_STATUS.TAXI_REJECTED as TAXI_ORDER_STATUS,
					//TODO: Should exclude status AWAITING_PAYMENT or not?
					TAXI_ORDER_STATUS.AWAITING_PAYMENT as TAXI_ORDER_STATUS,
				],
			},
		};
		const results = await prisma.taxi_orders.findMany({
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
				customer: true,
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
		return results.map((result: unknown) => toTaxiOrderDetail(result));
	} catch (error) {
		console.error('Error fetching taxi order:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get currently active (non-pending/completed/canceled) orders for a driver; includes scheduled cutoff logic.
 *
 * @param driver_id - Driver ID.
 * @returns Active orders for the driver.
 */
async function getActiveOrdersByDriverId(driver_id: string): Promise<TaxiOrderDetail[]> {
	const thirtyMinutesInMs = TIME_LIMIT.START_DRIVE * 60000;
	const currentTime = new Date();
	const timezoneOffset = currentTime.getTimezoneOffset() * 60000;
	const comparisonTime = new Date(currentTime.getTime() - timezoneOffset + thirtyMinutesInMs)
		.toISOString()
		.slice(0, -1);
	try {
		const results = await prisma.taxi_orders.findMany({
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
		return results.map((result: unknown) => toTaxiOrderDetail(result));
	} catch (error) {
		console.error('Error fetching taxi order:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get delivery orders (non-taxi) for a driver with optional filters.
 *
 * @param driver_id - Driver ID.
 * @param args - Additional where filters.
 * @returns Delivery orders.
 */
async function getDeliveryOrdersByDriverId(
	driver_id: string,
	args?: Prisma.delivery_ordersFindManyArgs
): Promise<TaxiOrderDetail[]> {
	try {
		const whereClause: Prisma.delivery_ordersWhereInput = {
			driver_id: driver_id,
			...(args?.where || {}),
		};
		const results = await prisma.delivery_orders.findMany({
			...args,
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
		// Note: delivery_orders are mapped to TaxiOrderDetail for compatibility
		return results.map((result: unknown) => toTaxiOrderDetail(result));
	} catch (error) {
		console.error('Error getting orders by driver ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get taxi orders for a driver with optional filters.
 *
 * @param driver_id - Driver ID.
 * @param args - Additional where filters.
 * @returns Taxi orders.
 */
async function getOrdersByDriverId(
	driver_id: string,
	args?: Prisma.taxi_ordersFindManyArgs
): Promise<TaxiOrderDetail[]> {
	try {
		const whereClause: Prisma.taxi_ordersWhereInput = {
			driver_id: driver_id,
			...(args?.where || {}),
		};
		const results = await prisma.taxi_orders.findMany({
			where: whereClause,
			orderBy: args?.orderBy,
			take: args?.take,
			skip: args?.skip,
			include: {
				customer: true,
				driver: {
					include: {
						user: true,
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
		return results.map((result: unknown) => toTaxiOrderDetail(result));
	} catch (error) {
		console.error('Error getting orders by driver ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Create a taxi order with an auto-incrementing mod-10000 order_number.
 *
 * @param order - Order payload to insert.
 * @returns Created order.
 */
async function createOrder(order: Prisma.taxi_ordersCreateInput): Promise<TaxiOrderDetail> {
	try {
		const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			const lastOrder = await tx.taxi_orders.findFirst({
				orderBy: { created_at: 'desc' },
				select: { order_number: true },
			});
			const order_number = lastOrder ? (lastOrder.order_number + 1) % 10000 : 0;
			const created = await tx.taxi_orders.create({
				data: {
					...order,
					order_number: order_number,
				},
			});
			return created;
		});
		return toTaxiOrderDetail(result as unknown);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Create a taxi_order_sent record for an order and driver.
 *
 * @param order_id - Order ID.
 * @param driver - Driver object containing driver_id and location.
 * @returns Created taxi_order_sent record.
 */
async function createOrderSent(
	order_id: string,
	driver: Partial<DriverBase>
): Promise<Prisma.taxi_order_sentGetPayload<{ include: { order: true; driver: true } }>> {
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
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Check whether a given order has already been sent to a driver.
 *
 * @param order_id - Order ID.
 * @param driver - Driver object containing driver_id.
 * @returns Sent record or null.
 */
async function isOrderSent(
	order_id: string,
	driver_id: string
): Promise<Prisma.taxi_order_sentGetPayload<{ include: { order: true; driver: true } }> | null> {
	try {
		return prisma.taxi_order_sent.findFirst({
			where: {
				order_id,
				driver_id,
			},
		});
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get pending (not accepted/rejected) sent orders for a driver where order is still pending.
 *
 * @param driver_id - Driver ID.
 * @returns Array of taxi_order_sent with order included.
 */
async function getAlreadySentOrdersByDriverId(driver_id: string): Promise<string[]> {
	try {
		const results = await prisma.taxi_order_sent.findMany({
			where: {
				driver_id: driver_id,
				accepted: false,
				rejected: false,
				order: {
					status: TAXI_ORDER_STATUS.PENDING,
				},
			},
			include: {
				order: true,
			},
		});
		return results.map((result: { order_id: string }) => result.order_id);
	} catch (error) {
		console.error('Error fetching pending orders for driver:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Accept a taxi order using a raw row-level lock to prevent race conditions.
 *
 * @param order - Order object containing order_id and is_scheduled.
 * @param driver - Driver with driver_id and current_vehicle.
 * @returns Updated taxi order.
 */
export async function acceptTaxiOrderWithRawLock(
	order: TaxiOrderDetail,
	driver_id: string,
	vehicle_id: string
): Promise<TaxiOrderDetail> {
	const { order_id: orderId, is_scheduled } = order;

	// Validate UUID format to prevent SQL injection
	if (!isUuid(orderId)) {
		throw new Error(`Invalid order_id format: ${orderId}`);
	}

	return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
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
					driver_id: driver_id,
				},
			},
			data: { accepted: true },
		});

		// 3) Update driver availability
		await tx.drivers.update({
			where: { driver_id: driver_id },
			data: { on_order: !is_scheduled },
		});

		// 4) Update the taxi_orders row itself
		const updated = await tx.taxi_orders.update({
			where: { order_id: orderId },
			data: {
				status: TAXI_ORDER_STATUS.TAXI_ACCEPTED,
				driver: { connect: { driver_id: driver_id } },
				vehicle: { connect: { vehicle_id: vehicle_id } },
			},
			include: {
				customer: true,
				driver: {
					include: {
						user: true,
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});

		// 5) Committing the transaction releases the lock
		return toTaxiOrderDetail(updated);
	});
}

/**
 * Accept a taxi order (without raw locking); marks sent as accepted, sets driver and vehicle.
 *
 * @param order - Order object containing order_id and is_scheduled.
 * @param driver - Driver with driver_id and current_vehicle.
 * @returns Updated taxi order.
 */
async function acceptOrder(
	order: { order_id: string; is_scheduled?: boolean },
	driver: { driver_id: string; current_vehicle: { vehicle_id: string } }
): Promise<TaxiOrderDetail> {
	const order_id = order.order_id;
	try {
		const taxi_order_sent = await prisma.taxi_order_sent.update({
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
		const result = await prisma.taxi_orders.update({
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
		return toTaxiOrderDetail(result);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Update the status of a taxi order by ID, returning nested relations.
 *
 * @param order_id - Order ID.
 * @param status - New status.
 * @returns Updated taxi order.
 */
async function updateOrderStatus(order_id: string, status: TAXI_ORDER_STATUS): Promise<TaxiOrderDetail> {
	try {
		const result = await prisma.taxi_orders.update({
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
		return toTaxiOrderDetail(result);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Mark an order as completed and set driver.on_order to false.
 *
 * @param order_id - Order ID.
 * @returns Updated taxi order.
 */
async function completeOrder(order_id: string): Promise<TaxiOrderDetail> {
	try {
		const taxi_order = await prisma.taxi_orders.update({
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
				driver_id: taxi_order.driver_id || '',
			},
			data: {
				on_order: false,
			},
		});
		return toTaxiOrderDetail(taxi_order);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Cancel an order with a specific status and reason; sets driver.on_order to false if assigned.
 *
 * @param order_id - Order ID.
 * @param status - Cancellation status.
 * @param cancellation_reason - Reason text.
 * @returns Updated taxi order.
 */
async function cancelOrder(order_id: string, status: string, cancellation_reason: string): Promise<TaxiOrderDetail> {
	try {
		const taxi_order = await prisma.taxi_orders.update({
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
		return toTaxiOrderDetail(taxi_order);
	} catch (error) {
		console.error('Error cancelling order:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Cancel an active vehicle transfer combo order for a user, if present.
 *
 * @param user_id - User ID.
 * @param status - Cancellation status.
 * @param cancellation_reason - Reason text.
 * @returns Updated order or null if not found.
 */
async function cancelVehicleTransferOrder(
	user_id: string,
	status: string,
	cancellation_reason: string
): Promise<TaxiOrderDetail | null> {
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
		return toTaxiOrderDetail(taxi_order);
	} catch (error) {
		console.error('Error cancelling vehicle transfer order:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Mark a taxi_order_sent as accepted for a specific order and driver.
 *
 * @param order_id - Order ID.
 * @param driver_id - Driver ID.
 * @returns Updated taxi_order_sent record.
 */
async function acceptOrderSent(
	order_id: string,
	driver_id: string
): Promise<Prisma.taxi_order_sentGetPayload<{ include: { order: true; driver: true } }>> {
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
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get drivers to whom an order has been sent.
 *
 * @param order_id - Order ID.
 * @returns Sent entries with nested driver and user docs.
 */
async function getSentDrivers(order_id: string): Promise<
	Prisma.taxi_order_sentGetPayload<{
		include: { driver: { include: { user: true } } };
	}>[]
> {
	try {
		return prisma.taxi_order_sent.findMany({
			where: {
				order_id,
			},
			include: {
				driver: {
					include: {
						user: true,
					},
				},
			},
		});
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Update order's last_sent_at timestamp to now.
 *
 * @param order_id - Order ID.
 * @returns Updated order.
 */
async function updateOrderLastSentAt(order_id: string): Promise<TaxiOrderDetail> {
	try {
		const result = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				last_sent_at: new Date(),
			},
		});
		return toTaxiOrderDetail(result);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Update a taxi order's route array.
 *
 * @param order_id - Order ID.
 * @param route - Array of route waypoints.
 * @returns Updated order.
 */
async function updateTaxiOderRoute(order_id: string, route: Prisma.InputJsonValue): Promise<TaxiOrderDetail> {
	try {
		const result = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				route: route,
			},
		});
		return toTaxiOrderDetail(result);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Update pickup_location for a taxi order.
 *
 * @param order_id - Order ID.
 * @param pickupLocation - Location object.
 * @returns Updated order.
 */
async function updateTaxiOrderPickupLocation(
	order_id: string,
	pickupLocation: Prisma.InputJsonValue
): Promise<TaxiOrderDetail> {
	try {
		const result = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				pickup_location: pickupLocation,
			},
		});
		return toTaxiOrderDetail(result);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Update delivery_location for a taxi order.
 *
 * @param order_id - Order ID.
 * @param deliveryLocation - Location object.
 * @returns Updated order.
 */
async function updateTaxiOrderDeliveryLocation(
	order_id: string,
	deliveryLocation: Prisma.InputJsonValue
): Promise<TaxiOrderDetail> {
	try {
		const result = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				delivery_location: deliveryLocation,
			},
		});
		return toTaxiOrderDetail(result);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Update full route array and compute pickup/delivery from endpoints.
 *
 * @param order_id - Order ID.
 * @param route - Route waypoints.
 * @returns Updated order with relations included.
 */
async function updateCompleteTaxiRoute(order_id: string, route: TaxiLocation[]): Promise<TaxiOrderDetail> {
	try {
		if (route.length === 0) {
			throw new Error('Route array cannot be empty');
		}
		const firstRoute = route[0];
		if (!firstRoute) {
			throw new Error('First route point is required');
		}
		const data: Prisma.taxi_ordersUpdateInput = {
			route: route as Prisma.InputJsonValue,
			pickup_location: {
				address: firstRoute.address,
				coordinates: firstRoute.coordinates,
			} as Prisma.InputJsonValue,
		};
		if (route.length > 1) {
			const lastRoute = route[route.length - 1];
			if (lastRoute) {
				data.delivery_location = {
					address: lastRoute.address,
					coordinates: lastRoute.coordinates,
				} as Prisma.InputJsonValue;
			}
		}
		const result = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: data,
			include: {
				grouped_orders: true,
				customer: true,
				driver: {
					include: {
						user: true,
						vehicles: true,
						current_vehicle: true,
					},
				},
			},
		});
		return toTaxiOrderDetail(result);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Append entries to the order timeline array.
 *
 * @param order_id - Order ID.
 * @param newTimelineEntries - Timeline entries to append.
 * @returns Updated order with relations.
 */
async function updateTaxiOrderTimeline(
	order_id: string,
	newTimelineEntries: Array<Record<string, unknown>>
): Promise<TaxiOrderDetail> {
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
		const updatedTimeline = [...(order.timeline as Array<Record<string, unknown>>), ...newTimelineEntries];
		const updated_order = await prisma.taxi_orders.update({
			where: {
				order_id,
			},
			data: {
				timeline: updatedTimeline as Prisma.InputJsonValue,
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
		return toTaxiOrderDetail(updated_order);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Update the payment object for a taxi order and include business_users.
 *
 * @param order_id - Order ID.
 * @param payment - Payment payload.
 * @returns Updated order.
 */
async function updateTaxiOrderPayment(
	order_id: string,
	payment: Record<string, any> | null | undefined
): Promise<TaxiOrderDetail> {
	try {
		const updated_order = await prisma.taxi_orders.update({
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
		return toTaxiOrderDetail(updated_order);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Update arbitrary fields on a taxi order and return nested relations.
 *
 * @param order_id - Order ID.
 * @param order - Fields to update.
 * @returns Updated order.
 */
async function updateOrder(order_id: string, order: Prisma.taxi_ordersUpdateInput): Promise<TaxiOrderDetail> {
	try {
		const result = await prisma.taxi_orders.update({
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
		return toTaxiOrderDetail(result);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get orders in accepted/active states (non-pending/canceled/completed/awaiting payment).
 *
 * @returns Active accepted orders.
 */
async function getAcceptedOrders(): Promise<TaxiOrderDetail[]> {
	try {
		const results = await prisma.taxi_orders.findMany({
			where: {
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
		return results.map((result: unknown) => toTaxiOrderDetail(result));
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Get active orders for a user.
 *
 * @param user_id - User ID.
 * @returns Active orders for the user.
 */
async function userActiveOrders(user_id: string): Promise<TaxiOrderDetail[]> {
	try {
		const results = await prisma.taxi_orders.findMany({
			where: {
				user_id,
				status: {
					notIn: [
						TAXI_ORDER_STATUS.TAXI_CANCELED,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
						TAXI_ORDER_STATUS.TAXI_COMPLETED,
						TAXI_ORDER_STATUS.TAXI_REJECTED,
						TAXI_ORDER_STATUS.AWAITING_PAYMENT, //TODO: Should we consider AWAIITING_PAYMENT as active order in the user's eyes?
					],
				},
			},
		});
		return results.map((result: unknown) => toTaxiOrderDetail(result));
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
	}
}

/**
 * Delete a taxi_order_sent entry by its ID.
 *
 * @param order_id - Order ID (unused, kept for signature consistency).
 * @param taxi_order_sent_id - Sent record ID to delete.
 * @returns Deleted record.
 */
async function deleteOrderSent(
	order_id: string,
	taxi_order_sent_id: string
): Promise<Prisma.taxi_order_sentGetPayload<{ include: { order: true; driver: true } }>> {
	try {
		return prisma.taxi_order_sent.delete({
			where: {
				taxi_order_sent_id: taxi_order_sent_id,
			},
		});
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Unknown error');
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
export { getPendingScheduledOrdersByUserId };
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
	acceptOrderSent,
	getPendingScheduledOrdersByUserId,
};
