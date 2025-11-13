import prisma from '../prisma/prisma.js';
import { TAXI_ORDER_STATUS } from '../lib/constants.js';
import type { TaxiOrderBase, TaxiOrderDetail } from '../schemas/dto/TaxiOrders/taxiOrder.dto.js';
import { CreateTaxiOrder } from '../schemas/dto/TaxiOrders/taxiOrder.validators.js';
import { toTaxiOrderDetail } from '../schemas/dto/TaxiOrders/taxiOrder.mappers.js';

/**
 * List taxi orders with provided Prisma args and standard includes.
 *
 * @param args - Prisma findMany args (where/orderBy/etc.).
 * @returns Array of orders.
 */
export async function getOrders(args: any): Promise<TaxiOrderDetail[]> {
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
		const results = await prisma.taxi_orders.findMany(mergedArgs);
		return results.map((result: any) => toTaxiOrderDetail(result));
	} catch (e) {
		console.error('Error fetching orders:', e);
		throw new Error(String(e));
	}
}

/**
 * Get a taxi order by ID with nested user, driver, and grouped_orders.
 *
 * @param order_id - Order ID.
 * @returns The order or null.
 */
export async function getOrder(order_id: string): Promise<TaxiOrderDetail | null> {
	try {
		const result = await prisma.taxi_orders.findFirst({
			where: { order_id },
			include: {
				user: {
					include: {
						addresses: true,
						group_user: true,
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
						current_vehicle: true,
					},
				},
				vehicle: true,
				grouped_orders: {
					include: {
						user: true,
						driver: {
							include: {
								user: true,
								current_vehicle: true,
							},
						},
					},
				},
			},
		});

		return result ? toTaxiOrderDetail(result) : null;
	} catch (e) {
		console.error('Error fetching order:', e);
		throw new Error(String(e));
	}
}

/**
 * Create a new taxi order.
 *
 * @param data - Order creation data.
 * @returns The created order.
 */
export async function createOrder(data: CreateTaxiOrder): Promise<TaxiOrderDetail> {
	try {
		const orderData = {
			user_id: data.user_id,
			status: TAXI_ORDER_STATUS.PENDING,
			type: data.type,
			subtype: data.subtype,
			pickup_location: data.pickup_location,
			delivery_location: data.delivery_location,
			preferences: data.preferences,
			special_instructions: data.special_instructions,
			scheduled_time: data.scheduled_time,
			payment_method: data.payment_method,
			price: data.price,
			business_id: data.business_id,
			timeline: [],
		};

		const result = await prisma.taxi_orders.create({
			data: orderData,
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

		return toTaxiOrderDetail(result);
	} catch (e) {
		console.error('Error creating order:', e);
		throw new Error(String(e));
	}
}

/**
 * Update taxi order status.
 *
 * @param order_id - Order ID.
 * @param status - New status.
 * @param additional_data - Additional data to update.
 * @returns Updated order.
 */
export async function updateOrderStatus(
	order_id: string,
	status: string,
	additional_data?: Partial<TaxiOrderBase>
): Promise<TaxiOrderDetail | null> {
	try {
		const updateData = {
			status,
			...additional_data,
			updated_at: new Date(),
		};

		const result = await prisma.taxi_orders.update({
			where: { order_id },
			data: updateData,
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

		return toTaxiOrderDetail(result);
	} catch (e) {
		console.error('Error updating order status:', e);
		throw new Error(String(e));
	}
}

/**
 * Accept a taxi order by driver.
 *
 * @param order_id - Order ID.
 * @param driver_id - Driver ID.
 * @param vehicle_id - Vehicle ID.
 * @returns Updated order.
 */
export async function acceptOrder(
	order_id: string,
	driver_id: string,
	vehicle_id: string
): Promise<TaxiOrderDetail | null> {
	try {
		const timeline_entry = {
			action: 'accepted',
			driver_id,
			timestamp: new Date().toISOString(),
		};

		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				status: TAXI_ORDER_STATUS.TAXI_ACCEPTED,
				driver_id,
				vehicle_id,
				timeline: {
					push: timeline_entry,
				},
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error accepting order:', e);
		throw new Error(String(e));
	}
}

/**
 * Complete a taxi order.
 *
 * @param order_id - Order ID.
 * @param completion_data - Completion data (price, duration, etc.).
 * @returns Updated order.
 */
export async function completeOrder(
	order_id: string,
	completion_data: {
		price?: number;
		actual_duration?: number;
		actual_distance?: number;
		drop_off_time?: string;
	}
): Promise<TaxiOrderDetail | null> {
	try {
		const timeline_entry = {
			action: 'completed',
			timestamp: new Date().toISOString(),
			...completion_data,
		};

		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
				price: completion_data.price,
				actual_duration: completion_data.actual_duration,
				actual_distance: completion_data.actual_distance,
				drop_off_time: completion_data.drop_off_time,
				timeline: {
					push: timeline_entry,
				},
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error completing order:', e);
		throw new Error(String(e));
	}
}

/**
 * Cancel a taxi order.
 *
 * @param order_id - Order ID.
 * @param cancellation_reason - Reason for cancellation.
 * @param cancelled_by - Who cancelled the order (user/driver/admin).
 * @returns Updated order.
 */
export async function cancelOrder(
	order_id: string,
	cancellation_reason?: string,
	cancelled_by?: string
): Promise<TaxiOrderDetail | null> {
	try {
		const timeline_entry = {
			action: 'cancelled',
			timestamp: new Date().toISOString(),
			reason: cancellation_reason,
			cancelled_by,
		};

		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				status: TAXI_ORDER_STATUS.TAXI_CANCELED,
				timeline: {
					push: timeline_entry,
				},
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error cancelling order:', e);
		throw new Error(String(e));
	}
}

/**
 * Get active taxi orders for a user.
 *
 * @param user_id - User ID.
 * @param type - Order type filter.
 * @returns Array of active orders.
 */
export async function getActiveOrdersByUserId(user_id: string, type?: string): Promise<TaxiOrderDetail[]> {
	try {
		const where: any = {
			user_id,
			status: {
				in: [TAXI_ORDER_STATUS.PENDING, TAXI_ORDER_STATUS.TAXI_ACCEPTED, TAXI_ORDER_STATUS.TAXI_DRIVING],
			},
		};

		if (type) {
			where.type = type;
		}

		return await getOrders({ where });
	} catch (e) {
		console.error('Error fetching active orders:', e);
		throw new Error(String(e));
	}
}

/**
 * Get active taxi orders for a driver.
 *
 * @param driver_id - Driver ID.
 * @returns Array of active orders.
 */
export async function getActiveOrdersByDriverId(driver_id: string): Promise<TaxiOrderDetail[]> {
	try {
		const where = {
			driver_id,
			status: {
				in: [TAXI_ORDER_STATUS.TAXI_ACCEPTED, TAXI_ORDER_STATUS.TAXI_DRIVING],
			},
		};

		return await getOrders({ where });
	} catch (e) {
		console.error('Error fetching driver active orders:', e);
		throw new Error(String(e));
	}
}

/**
 * Get completed taxi orders for a user.
 *
 * @param user_id - User ID.
 * @param limit - Number of orders to return.
 * @returns Array of completed orders.
 */
export async function getCompletedOrdersByUserId(user_id: string, limit: number = 50): Promise<TaxiOrderDetail[]> {
	try {
		const where = {
			user_id,
			status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
		};

		return await getOrders({
			where,
			orderBy: { created_at: 'desc' },
			take: limit,
		});
	} catch (e) {
		console.error('Error fetching completed orders:', e);
		throw new Error(String(e));
	}
}

/**
 * Update taxi order route information.
 *
 * @param order_id - Order ID.
 * @param route_data - Route data to update.
 * @returns Updated order.
 */
export async function updateOrderRoute(
	order_id: string,
	route_data: {
		route?: Record<string, unknown>;
		estimated_duration?: number;
		estimated_distance?: number;
		pickup_time?: string;
	}
): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				...route_data,
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating order route:', e);
		throw new Error(String(e));
	}
}

/**
 * Get taxi orders if not completed for a user.
 *
 * @param user_id - User ID.
 * @param type - Order type filter.
 * @param isBusinessUser - Whether user is a business user.
 * @returns Array of taxi orders.
 */
export async function getTaxiOrdersIfNotCompleted(
	user_id: string,
	type?: string,
	isBusinessUser: boolean = false
): Promise<TaxiOrderDetail[]> {
	try {
		const whereCondition: any = {
			user_id,
			status: {
				notIn: [
					TAXI_ORDER_STATUS.TAXI_COMPLETED,
					TAXI_ORDER_STATUS.TAXI_CANCELED,
					TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
				],
			},
		};

		if (type) {
			whereCondition.type = type;
		}

		if (isBusinessUser) {
			whereCondition.business_id = { not: null };
		}

		return await prisma.taxi_orders.findMany({
			where: whereCondition,
			include: {
				user: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				vehicle: true,
				business: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
	} catch (e) {
		console.error('Error getting taxi orders if not completed:', e);
		throw new Error(String(e));
	}
}

/**
 * Get delivery orders by driver ID.
 *
 * @param driver_id - Driver ID.
 * @param args - Additional query arguments.
 * @returns Array of delivery orders.
 */
export async function getDeliveryOrdersByDriverId(driver_id: string, args: any = {}): Promise<TaxiOrderDetail[]> {
	try {
		const whereCondition = {
			driver_id,
			type: 'DELIVERY',
			...args.where,
		};

		return await prisma.taxi_orders.findMany({
			...args,
			where: whereCondition,
			include: {
				user: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				vehicle: true,
				business: true,
			},
		});
	} catch (e) {
		console.error('Error getting delivery orders by driver ID:', e);
		throw new Error(String(e));
	}
}

/**
 * Get orders by driver ID with additional arguments.
 *
 * @param driver_id - Driver ID.
 * @param args - Additional query arguments.
 * @returns Array of taxi orders.
 */
export async function getOrdersByDriverId(driver_id: string, args: any = {}): Promise<TaxiOrderDetail[]> {
	try {
		const whereCondition = {
			driver_id,
			...args.where,
		};

		return await prisma.taxi_orders.findMany({
			...args,
			where: whereCondition,
			include: {
				user: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				vehicle: true,
				business: true,
			},
		});
	} catch (e) {
		console.error('Error getting orders by driver ID:', e);
		throw new Error(String(e));
	}
}

/**
 * Create an order sent record.
 *
 * @param order_id - Order ID.
 * @param driver - Driver object with user_id.
 * @returns Created order sent record.
 */
export async function createOrderSent(order_id: string, driver: { user_id: string; driver_id?: string }): Promise<any> {
	try {
		return await prisma.taxi_order_sent.create({
			data: {
				order_id,
				driver_id: driver.driver_id || driver.user_id,
				sent_at: new Date(),
			},
		});
	} catch (e) {
		console.error('Error creating order sent:', e);
		throw new Error(String(e));
	}
}

/**
 * Check if order is sent to a driver.
 *
 * @param order_id - Order ID.
 * @param driver - Driver object with user_id.
 * @returns Order sent record or null.
 */
export async function isOrderSent(order_id: string, driver: { user_id: string; driver_id?: string }): Promise<any> {
	try {
		return await prisma.taxi_order_sent.findFirst({
			where: {
				order_id,
				driver_id: driver.driver_id || driver.user_id,
			},
		});
	} catch (e) {
		console.error('Error checking if order is sent:', e);
		throw new Error(String(e));
	}
}

/**
 * Get already sent orders by driver ID.
 *
 * @param driver_id - Driver ID.
 * @returns Array of order IDs.
 */
export async function getAlreadySentOrdersByDriverId(driver_id: string): Promise<string[]> {
	try {
		const sentOrders = await prisma.taxi_order_sent.findMany({
			where: {
				driver_id,
			},
			select: {
				order_id: true,
			},
		});

		return sentOrders.map((order: { order_id: string }) => order.order_id);
	} catch (e) {
		console.error('Error getting already sent orders by driver ID:', e);
		throw new Error(String(e));
	}
}

/**
 * Cancel vehicle transfer order.
 *
 * @param user_id - User ID.
 * @param status - Cancellation status.
 * @param cancellation_reason - Cancellation reason.
 * @returns Updated order.
 */
export async function cancelVehicleTransferOrder(
	user_id: string,
	status: string,
	cancellation_reason?: string
): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.updateMany({
			where: {
				user_id,
				type: 'VEHICLE_TRANSFER',
				status: {
					notIn: [
						TAXI_ORDER_STATUS.TAXI_COMPLETED,
						TAXI_ORDER_STATUS.TAXI_CANCELED,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
					],
				},
			},
			data: {
				status,
				notes: cancellation_reason,
				updated_at: new Date(),
			},
		});
	} catch (e) {
		console.error('Error canceling vehicle transfer order:', e);
		throw new Error(String(e));
	}
}

/**
 * Accept order sent (mark as accepted).
 *
 * @param order_id - Order ID.
 * @param driver_id - Driver ID.
 * @returns Updated order sent record.
 */
export async function acceptOrderSent(order_id: string, driver_id: string): Promise<any> {
	try {
		return await prisma.taxi_order_sent.updateMany({
			where: {
				order_id,
				driver_id,
			},
			data: {
				accepted_at: new Date(),
			},
		});
	} catch (e) {
		console.error('Error accepting order sent:', e);
		throw new Error(String(e));
	}
}

/**
 * Get sent drivers for an order.
 *
 * @param order_id - Order ID.
 * @returns Array of drivers the order was sent to.
 */
export async function getSentDrivers(order_id: string): Promise<any[]> {
	try {
		return await prisma.taxi_order_sent.findMany({
			where: {
				order_id,
			},
			include: {
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		console.error('Error getting sent drivers:', e);
		throw new Error(String(e));
	}
}

/**
 * Update order last sent at timestamp.
 *
 * @param order_id - Order ID.
 * @returns Updated order.
 */
export async function updateOrderLastSentAt(order_id: string): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				last_sent_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating order last sent at:', e);
		throw new Error(String(e));
	}
}

/**
 * Update taxi order route.
 *
 * @param order_id - Order ID.
 * @param route - Route data.
 * @returns Updated order.
 */
export async function updateTaxiOderRoute(
	order_id: string,
	route: Record<string, unknown>
): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				route,
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating taxi order route:', e);
		throw new Error(String(e));
	}
}

/**
 * Update taxi order pickup location.
 *
 * @param order_id - Order ID.
 * @param pickupLocation - Pickup location data.
 * @returns Updated order.
 */
export async function updateTaxiOrderPickupLocation(
	order_id: string,
	pickupLocation: Record<string, unknown>
): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				pickup_location: pickupLocation,
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating taxi order pickup location:', e);
		throw new Error(String(e));
	}
}

/**
 * Update taxi order delivery location.
 *
 * @param order_id - Order ID.
 * @param deliveryLocation - Delivery location data.
 * @returns Updated order.
 */
export async function updateTaxiOrderDeliveryLocation(
	order_id: string,
	deliveryLocation: Record<string, unknown>
): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				drop_off_location: deliveryLocation,
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating taxi order delivery location:', e);
		throw new Error(String(e));
	}
}

/**
 * Update complete taxi route.
 *
 * @param order_id - Order ID.
 * @param route - Complete route data array.
 * @returns Updated order.
 */
export async function updateCompleteTaxiRoute(
	order_id: string,
	route: Array<Record<string, unknown>>
): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				complete_route: route,
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating complete taxi route:', e);
		throw new Error(String(e));
	}
}

/**
 * Update taxi order timeline.
 *
 * @param order_id - Order ID.
 * @param newTimelineEntries - New timeline entries to add.
 * @returns Updated order.
 */
export async function updateTaxiOrderTimeline(
	order_id: string,
	newTimelineEntries: Array<Record<string, unknown>>
): Promise<TaxiOrderDetail | null> {
	try {
		const order = await prisma.taxi_orders.findUnique({
			where: { order_id },
		});

		if (!order) {
			throw new Error('Order not found');
		}

		const currentTimeline = (order.timeline as Array<Record<string, unknown>>) || [];
		const updatedTimeline = [...currentTimeline, ...newTimelineEntries];

		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				timeline: updatedTimeline,
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating taxi order timeline:', e);
		throw new Error(String(e));
	}
}

/**
 * Update taxi order payment information.
 *
 * @param order_id - Order ID.
 * @param payment - Payment data.
 * @returns Updated order.
 */
export async function updateTaxiOrderPayment(
	order_id: string,
	payment: {
		payment_method?: string;
		is_paid?: boolean;
		price?: number;
		tip_amount?: number;
		service_fee?: number;
		tax_fee?: number;
		commission_fee?: number;
		discount?: number;
	}
): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				...payment,
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating taxi order payment:', e);
		throw new Error(String(e));
	}
}

/**
 * Update order with generic data.
 *
 * @param order_id - Order ID.
 * @param order - Order data to update.
 * @returns Updated order.
 */
export async function updateOrder(order_id: string, order: Record<string, unknown>): Promise<TaxiOrderDetail | null> {
	try {
		return await prisma.taxi_orders.update({
			where: { order_id },
			data: {
				...order,
				updated_at: new Date(),
			},
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
	} catch (e) {
		console.error('Error updating order:', e);
		throw new Error(String(e));
	}
}

/**
 * Get accepted orders.
 *
 * @returns Array of accepted orders.
 */
export async function getAcceptedOrders(): Promise<TaxiOrderDetail[]> {
	try {
		return await prisma.taxi_orders.findMany({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_ACCEPTED,
			},
			include: {
				user: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				vehicle: true,
				business: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
	} catch (e) {
		console.error('Error getting accepted orders:', e);
		throw new Error(String(e));
	}
}

/**
 * Get active orders for a user.
 *
 * @param user_id - User ID.
 * @returns Array of active orders.
 */
export async function userActiveOrders(user_id: string): Promise<TaxiOrderDetail[]> {
	try {
		return await prisma.taxi_orders.findMany({
			where: {
				user_id,
				status: {
					notIn: [
						TAXI_ORDER_STATUS.TAXI_COMPLETED,
						TAXI_ORDER_STATUS.TAXI_CANCELED,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
					],
				},
			},
			include: {
				user: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				vehicle: true,
				business: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
	} catch (e) {
		console.error('Error getting user active orders:', e);
		throw new Error(String(e));
	}
}

/**
 * Delete order sent record.
 *
 * @param order_id - Order ID.
 * @param taxi_order_sent_id - Taxi order sent ID.
 * @returns Deleted record.
 */
export async function deleteOrderSent(order_id: string, taxi_order_sent_id: string): Promise<any> {
	try {
		return await prisma.taxi_order_sent.delete({
			where: {
				taxi_order_sent_id,
			},
		});
	} catch (e) {
		console.error('Error deleting order sent:', e);
		throw new Error(String(e));
	}
}

/**
 * Accept taxi order with raw lock to prevent race conditions.
 *
 * @param order - Order object with order_id and is_scheduled.
 * @param driver - Driver object with driver_id and current_vehicle.
 * @returns Updated taxi order.
 */
export async function acceptTaxiOrderWithRawLock(
	order: { order_id: string; is_scheduled?: boolean },
	driver: { driver_id: string; current_vehicle: { vehicle_id: string } }
): Promise<TaxiOrderDetail> {
	const { order_id: orderId, is_scheduled } = order;
	const driverId = driver.driver_id;

	// Basic UUID format validation (simple regex check)
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	if (!uuidRegex.test(orderId)) {
		throw new Error(`Invalid order_id format: ${orderId}`);
	}

	return prisma.$transaction(async (tx: any) => {
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
		return toTaxiOrderDetail(updated);
	});
}

export default {
	getOrders,
	getOrder,
	createOrder,
	updateOrderStatus,
	acceptOrder,
	completeOrder,
	cancelOrder,
	getActiveOrdersByUserId,
	getActiveOrdersByDriverId,
	getCompletedOrdersByUserId,
	updateOrderRoute,
	getTaxiOrdersIfNotCompleted,
	getDeliveryOrdersByDriverId,
	getOrdersByDriverId,
	createOrderSent,
	isOrderSent,
	getAlreadySentOrdersByDriverId,
	cancelVehicleTransferOrder,
	acceptOrderSent,
	getSentDrivers,
	updateOrderLastSentAt,
	updateTaxiOderRoute,
	updateTaxiOrderPickupLocation,
	updateTaxiOrderDeliveryLocation,
	updateCompleteTaxiRoute,
	updateTaxiOrderTimeline,
	updateTaxiOrderPayment,
	updateOrder,
	getAcceptedOrders,
	userActiveOrders,
	deleteOrderSent,
	acceptTaxiOrderWithRawLock,
};
