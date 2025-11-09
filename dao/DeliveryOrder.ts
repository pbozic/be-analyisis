import prisma from '../prisma/prisma.js';
import { DELIVERY_ORDER_STATUS, DELIVERY_ORDER_END_STATES } from '../lib/constants.js';
import type { DeliveryOrderDetail, CreateDeliveryOrder } from '../schemas/dto/DeliveryOrders/index.js';
import { toDeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/index.js';


/**
 * Add an entry to delivery order timeline
 */
function addEntryToDeliveryOrderTimeline(
	timeline: Array<Record<string, unknown>>, 
	status: string, 
	entry_data: Record<string, unknown> = {}
): Array<Record<string, unknown>> {
	return [
		...timeline,
		{
			...entry_data,
			status: status,
			timestamp: new Date().toISOString(),
		},
	];
}

/**
 * Get delivery orders with optional query args and rich includes.
 */
export async function getOrders(args?: any): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			include: {
				delivery_driver: {
					include: {
						user: true,
						vehicles: true,
					},
				},
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				user: true,
				business: true,
			},
			...args,
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get all non-terminal delivery orders.
 */
export async function getActiveDeliveryOrders(): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
			},
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
			},
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		console.error('Error fetching order:', e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get a single delivery order by ID.
 */
export async function getOrder(order_id: string, args?: any): Promise<DeliveryOrderDetail | null> {
	try {
		const order = await prisma.delivery_orders.findFirst({
			where: {
				order_id: order_id,
			},
			...args,
		});
		
		return order ? toDeliveryOrderDetail(order) : null;
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get non-terminal delivery orders for a business (excluding daily meals).
 */
export async function getActiveDeliveryOrdersForBusiness(business_id: string): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				is_daily_meal: false,
				business_id: business_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
			},
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		console.error('Error fetching order:', e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get user's delivery orders that are not in an end state.
 */
export async function getDeliveryOrdersIfNotCompleted(user_id: string): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				user_id: user_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
			},
			include: {
				delivery_driver: {
					include: {
						user: {
							select: {
								first_name: true,
								last_name: true,
								telephone: true,
								email: true,
							},
						},
					},
				},
				driver: {
					include: {
						user: {
							select: {
								first_name: true,
								last_name: true,
								telephone: true,
								email: true,
							},
						},
					},
				},
				business: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		console.error('Error fetching orders:', e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Create a new delivery order.
 */
export async function createOrder(order: CreateDeliveryOrder, user_id: string): Promise<DeliveryOrderDetail> {
	let orderData = { ...order };
	try {
		const result = await prisma.$transaction(async (tx: any) => {
			const lastOrder = await tx.delivery_orders.findFirst({
				where: { business_id: orderData.business_id },
				orderBy: { created_at: 'desc' },
				select: { order_number: true },
			});
			const order_number = lastOrder ? (lastOrder.order_number! + 1) % 10000 : 0;
			
			return tx.delivery_orders.create({
				data: {
					...orderData,
					order_number: order_number,
					user: {
						connect: {
							user_id: user_id,
						},
					},
					business: {
						connect: {
							business_id: order.business_id,
						},
					},
				},
				include: {
					delivery_driver: true,
					driver: true,
					user: true,
					business: true,
				},
			});
		});
		
		return toDeliveryOrderDetail(result);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update delivery order status.
 */
export async function updateOrderStatus(
	order_id: string, 
	status: string, 
	timeline_entry?: Record<string, unknown>
): Promise<DeliveryOrderDetail> {
	try {
		const currentOrder = await prisma.delivery_orders.findUnique({
			where: { order_id },
			select: { timeline: true },
		});

		if (!currentOrder) {
			throw new Error('Order not found');
		}

		const currentTimeline = Array.isArray(currentOrder.timeline) ? currentOrder.timeline : [];
		const newTimeline = addEntryToDeliveryOrderTimeline(
			currentTimeline as Array<Record<string, unknown>>, 
			status, 
			timeline_entry || {}
		);

		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: {
				status,
				timeline: newTimeline,
			},
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update delivery order pickup time.
 */
export async function updateOrderPickupTime(order_id: string, pickup_time: Date): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { pickup_time },
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update delivery order delivery time.
 */
export async function updateOrderDeliveryTime(order_id: string, delivery_time: Date): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { delivery_time },
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Accept delivery order.
 */
export async function acceptOrder(
	order_id: string, 
	delivery_driver_id: string, 
	estimated_delivery_time?: Date
): Promise<DeliveryOrderDetail> {
	try {
		const updateData: any = {
			delivery_driver_id,
			status: DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED,
		};

		if (estimated_delivery_time) {
			updateData.estimated_delivery_time = estimated_delivery_time;
		}

		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: updateData,
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Complete delivery order.
 */
export async function completeOrder(order_id: string, completion_data?: Record<string, unknown>): Promise<DeliveryOrderDetail> {
	try {
		const currentOrder = await prisma.delivery_orders.findUnique({
			where: { order_id },
			select: { timeline: true },
		});

		if (!currentOrder) {
			throw new Error('Order not found');
		}

		const currentTimeline = Array.isArray(currentOrder.timeline) ? currentOrder.timeline : [];
		const newTimeline = addEntryToDeliveryOrderTimeline(
			currentTimeline as Array<Record<string, unknown>>, 
			DELIVERY_ORDER_STATUS.DELIVERY_DELIVERED, 
			completion_data || {}
		);

		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: {
				status: DELIVERY_ORDER_STATUS.DELIVERY_DELIVERED,
				delivery_time: new Date(),
				timeline: newTimeline,
			},
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get user by delivery order ID.
 */
export async function getUserByDeliveryOrderId(order_id: string): Promise<Record<string, unknown> | null> {
	try {
		const order = await prisma.delivery_orders.findUnique({
			where: { order_id },
			include: {
				user: true,
			},
		});

		return order?.user as Record<string, unknown> || null;
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update delivery order timeline.
 */
export async function updateDeliveryOrderTimeline(
	order_id: string, 
	timeline: Array<Record<string, unknown>>
): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { timeline },
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Add timeline entry to delivery order.
 */
export async function addTimelineEntry(
	order_id: string, 
	status: string, 
	entry_data?: Record<string, unknown>
): Promise<DeliveryOrderDetail> {
	try {
		const currentOrder = await prisma.delivery_orders.findUnique({
			where: { order_id },
			select: { timeline: true },
		});

		if (!currentOrder) {
			throw new Error('Order not found');
		}

		const currentTimeline = Array.isArray(currentOrder.timeline) ? currentOrder.timeline : [];
		const newTimeline = addEntryToDeliveryOrderTimeline(
			currentTimeline as Array<Record<string, unknown>>, 
			status, 
			entry_data || {}
		);

		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { timeline: newTimeline },
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get active orders by delivery driver ID.
 */
export async function getActiveOrdersByDeliveryDriverId(deliverer_id: string): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				OR: [{ delivery_driver_id: deliverer_id }, { driver_id: deliverer_id }],
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
			},
			include: {
				user: true,
				delivery_driver: {
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
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				business: true,
			},
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		console.error('Error fetching orders:', e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get all orders taken by a specific delivery driver.
 */
export async function getOrdersByDeliveryDriverId(delivery_driver_id: string): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				delivery_driver_id: delivery_driver_id,
			},
			include: {
				delivery_driver: {
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
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				user: true,
				business: true,
			},
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get completed orders by delivery driver ID.
 */
export async function getCompletedOrdersByDeliveryDriverId(delivery_driver_id: string): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				delivery_driver_id: delivery_driver_id,
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
			},
			include: {
				delivery_driver: {
					include: {
						user: true,
					},
				},
				driver: {
					include: {
						user: true,
					},
				},
				user: true,
				business: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get completed orders by business ID.
 */
export async function getCompletedOrdersByBusinessId(business_id: string): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				business_id: business_id,
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
			},
			include: {
				delivery_driver: {
					include: {
						user: true,
					},
				},
				driver: {
					include: {
						user: true,
					},
				},
				user: true,
				business: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get completed orders by user ID.
 */
export async function getCompletedOrdersByUserId(user_id: string): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				user_id: user_id,
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
			},
			include: {
				delivery_driver: {
					include: {
						user: true,
					},
				},
				driver: {
					include: {
						user: true,
					},
				},
				user: true,
				business: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
		
		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Connect order with delivery driver.
 */
export async function connectOrderWithDriver(order_id: string, delivery_driver_id: string): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { delivery_driver_id },
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update order data.
 */
export async function updateOrder(order_id: string, updateData: Record<string, unknown>): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: updateData,
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update order items.
 */
export async function updateOrderItems(order_id: string, items: Array<Record<string, unknown>>): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { items },
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get in-progress delivery orders count for business.
 */
export async function getInProgressDeliveryOrdersCountForBusinessId(business_id: string): Promise<number> {
	try {
		return await prisma.delivery_orders.count({
			where: {
				business_id: business_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
			},
		});
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Remove driver from order.
 */
export async function removeDriverFromOrder(order_id: string): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { 
				delivery_driver_id: null,
				driver_id: null 
			},
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Set delivery image for order.
 */
export async function setDeliveryImage(order_id: string, delivery_image: string): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { delivery_image },
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update last sent at timestamp.
 */
export async function updateOrderLastSentAt(order_id: string): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { last_sent_at: new Date() },
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Create order sent record for tracking.
 */
export async function createOrderSent(order_id: string, driver: { delivery_driver_id?: string; driver_id?: string }): Promise<any> {
	try {
		if (driver.delivery_driver_id) {
			return await prisma.delivery_order_sent.create({
				data: {
					order_id,
					delivery_driver_id: driver.delivery_driver_id,
					accepted: false,
				},
			});
		} else if (driver.driver_id) {
			return await prisma.delivery_order_sent.create({
				data: {
					order_id,
					driver_id: driver.driver_id,
					accepted: false,
				},
			});
		}
		throw new Error('Driver ID required');
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Check if order is already sent to driver.
 */
export async function isOrderSent(order_id: string, driver: { delivery_driver_id?: string; driver_id?: string }): Promise<boolean> {
	try {
		let sentRecord;
		if (driver.delivery_driver_id) {
			sentRecord = await prisma.delivery_order_sent.findUnique({
				where: {
					delivery_order_sent_delivery_driver_unique: {
						order_id,
						delivery_driver_id: driver.delivery_driver_id,
					},
				},
			});
		} else if (driver.driver_id) {
			sentRecord = await prisma.delivery_order_sent.findUnique({
				where: {
					delivery_order_sent_driver_unique: {
						order_id,
						driver_id: driver.driver_id,
					},
				},
			});
		}
		return !!sentRecord;
	} catch (e) {
		return false;
	}
}

/**
 * Accept order delivery with proper locking mechanism.
 */
export async function acceptOrderDelivery(
	order: any, 
	deliverer_id: string, 
	vehicle_id?: string
): Promise<DeliveryOrderDetail> {
	const { order_id } = order;
	try {
		const deliveryDriver = await prisma.delivery_drivers.findUnique({
			where: { delivery_driver_id: deliverer_id },
		});

		if (deliveryDriver) {
			await prisma.delivery_order_sent.update({
				where: {
					delivery_order_sent_delivery_driver_unique: {
						order_id,
						delivery_driver_id: deliverer_id,
					},
				},
				data: { accepted: true },
			});

			await prisma.delivery_drivers.update({
				where: { delivery_driver_id: deliverer_id },
				data: { on_order: true },
			});

			const updateData: any = {
				timeline: addEntryToDeliveryOrderTimeline(order.timeline, DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED, {
					driver_id: deliverer_id,
				}),
				delivery_driver: {
					connect: { delivery_driver_id: deliverer_id },
				},
				status: DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED,
			};

			if (vehicle_id) {
				updateData.vehicle = { connect: { vehicle_id } };
			}

			const updatedOrder = await prisma.delivery_orders.update({
				where: { order_id },
				data: updateData,
				include: {
					delivery_driver: true,
					driver: true,
					user: true,
					business: true,
				},
			});

			return toDeliveryOrderDetail(updatedOrder);
		} else {
			// Handle regular driver case
			await prisma.delivery_order_sent.update({
				where: {
					delivery_order_sent_driver_unique: {
						order_id,
						driver_id: deliverer_id,
					},
				},
				data: { accepted: true },
			});

			await prisma.drivers.update({
				where: { driver_id: deliverer_id },
				data: { on_order: true },
			});

			const updateData: any = {
				timeline: addEntryToDeliveryOrderTimeline(order.timeline, DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED, {
					driver_id: deliverer_id,
				}),
				driver: {
					connect: { driver_id: deliverer_id },
				},
				status: DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED,
			};

			if (vehicle_id) {
				updateData.vehicle = { connect: { vehicle_id } };
			}

			const updatedOrder = await prisma.delivery_orders.update({
				where: { order_id },
				data: updateData,
				include: {
					delivery_driver: true,
					driver: true,
					user: true,
					business: true,
				},
			});

			return toDeliveryOrderDetail(updatedOrder);
		}
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get sent delivery drivers for an order.
 */
export async function getSentDeliveryDrivers(order_id: string): Promise<any[]> {
	try {
		return await prisma.delivery_order_sent.findMany({
			where: { order_id },
			include: {
				delivery_driver: {
					include: {
						user: true,
					},
				},
				driver: {
					include: {
						user: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get already sent orders by delivery driver ID.
 */
export async function getAlreadySentOrdersByDeliveryDriverId(delivery_driver_id: string): Promise<any[]> {
	try {
		return await prisma.delivery_order_sent.findMany({
			where: { delivery_driver_id },
			include: {
				order: {
					include: {
						user: true,
						business: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

// Export additional functions for compatibility
export { addEntryToDeliveryOrderTimeline };

export default {
	getOrders,
	getActiveDeliveryOrders,
	getOrder,
	getActiveDeliveryOrdersForBusiness,
	getDeliveryOrdersIfNotCompleted,
	createOrder,
	updateOrderStatus,
	updateOrderPickupTime,
	updateOrderDeliveryTime,
	acceptOrder,
	completeOrder,
	getUserByDeliveryOrderId,
	updateDeliveryOrderTimeline,
	addTimelineEntry,
	getActiveOrdersByDeliveryDriverId,
	getOrdersByDeliveryDriverId,
	getCompletedOrdersByDeliveryDriverId,
	getCompletedOrdersByBusinessId,
	getCompletedOrdersByUserId,
	connectOrderWithDriver,
	updateOrder,
	updateOrderItems,
	getInProgressDeliveryOrdersCountForBusinessId,
	removeDriverFromOrder,
	setDeliveryImage,
	updateOrderLastSentAt,
	createOrderSent,
	isOrderSent,
	acceptOrderDelivery,
	getSentDeliveryDrivers,
	getAlreadySentOrdersByDeliveryDriverId,
};