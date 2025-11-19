import { FILE_TYPE, MODULE, Prisma, DELIVERY_ORDER_STATUS as PrismaDeliveryOrderStatus } from '@prisma/client';
import { JsonArray } from '@prisma/client/runtime/library.js';

import prisma from '../prisma/prisma.js';
import { DELIVERY_ORDER_STATUS, DELIVERY_ORDER_END_STATES } from '../lib/constants.js';
import type {
	CreateDeliveryOrderDaoInput,
	DeliveryOrderDetail,
	UpdateDeliveryOrder,
} from '../schemas/dto/DeliveryOrders/index.js';
import { toDeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/index.js';
import { Timestamp, UUID } from '../schemas/primitives.js';
import { delivery_order_sent } from '../prisma/schemas/interfaces.js';
import { UserBase } from '../schemas/dto/User/index.js';
import type { DriverDetail } from '../schemas/dto/Driver/index.js';
import { DeliveryOrderSentBase } from '../schemas/dto/DeliveryOrders';
import { LineItemCreateInputData } from '../schemas/dto/LineItems/index.js';
/**
 * Add an entry to delivery order timeline
 */
function addEntryToDeliveryOrderTimeline(
	timeline: Array<Record<string, unknown>>,
	status: PrismaDeliveryOrderStatus,
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
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				user: true,
				food_drinks_module: true,
				stores_module: true,
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
export async function getOrder(order_id: UUID, args?: any): Promise<DeliveryOrderDetail | null> {
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
export async function getActiveDeliveryOrdersForModule(
	business_id: UUID,
	module_type: MODULE
): Promise<DeliveryOrderDetail[]> {
	try {
		let module;
		let module_condition;
		if (module_type === MODULE.FOOD_DRINKS) {
			module = await prisma.food_drinks_module.findFirst({
				where: { business_id },
				select: { food_drinks_id: true },
			});
			module_condition = { food_drinks_module_id: module.food_drinks_id };
		} else if (module_type === MODULE.STORES) {
			module = await prisma.stores_module.findFirst({
				where: { business_id },
				select: { stores_id: true },
			});
			module_condition = { stores_module_id: module.stores_id };
		} else {
			throw new Error('Invalid module type');
		}
		const orders = await prisma.delivery_orders.findMany({
			where: {
				...module_condition,
				is_daily_meal: false,
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
			},
			include: {
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
export async function getDeliveryOrdersIfNotCompleted(user_id: UUID): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				user_id: user_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
			},
			include: {
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
				food_drinks_module: true,
				stores_module: true,
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
export async function createOrder(order: CreateDeliveryOrderDaoInput, user_id: UUID): Promise<DeliveryOrderDetail> {
	let orderData = { ...order };
	try {
		const result = await prisma.$transaction(async (tx: any) => {
			// Get the last order for this specific module to generate the next order number
			// TODO: Update to handle race condtitions properly - two orders created at the same time may get the same order number
			let moduleIdConditionObj;
			let moduleConnectObj;
			if (order.module_type === MODULE.FOOD_DRINKS) {
				moduleIdConditionObj = { food_drinks_module_id: order.module_id };
				moduleConnectObj = { food_drinks_module: { connect: moduleIdConditionObj } };
			} else if (order.module_type === MODULE.STORES) {
				moduleIdConditionObj = { stores_module_id: order.module_id };
				moduleConnectObj = { stores_module: { connect: moduleIdConditionObj } };
			} else {
				throw new Error('Invalid module type');
			}
			if (orderData.business_local_location_id) {
				moduleConnectObj = {
					...moduleConnectObj,
					business_local_location: {
						connect: { business_local_location_id: orderData.business_local_location_id },
					},
				};
			}

			const business = await tx.businesses.findUnique({
				where: {
					...moduleIdConditionObj,
				},
				select: {
					food_drinks_module_id: true,
					stores_module_id: true,
				},
			});

			if (!business) {
				throw new Error('Business not found for the given module');
			}

			const foodDrinksCount = business.food_drinks_module_id
				? await tx.delivery_orders.count({
						where: { food_drinks_module_id: business.food_drinks_module_id },
					})
				: 0;

			const storesCount = business.stores_module_id
				? await tx.delivery_orders.count({
						where: { stores_module_id: business.stores_module_id },
					})
				: 0;

			const order_number = (foodDrinksCount + storesCount) % 10000;

			function mapLineItemForCreate(item: LineItemCreateInputData): any {
				return {
					menu_item_version_id: item.menu_item_version_id,
					quantity: item.quantity,
					comment: item.comment ?? null,
					replacement_id: item.replacement_id ?? null,
					replaces_id: item.replaces_id ?? null,
					parent_side_id: item.parent_side_id ?? null,
					parent_extra_id: item.parent_extra_id ?? null,
					removed: item.removed ?? false,
					// Nested sides
					sides: item.sides?.length
						? {
								create: item.sides.map(mapLineItemForCreate),
							}
						: undefined,
					// Nested extras
					extras: item.extras?.length
						? {
								create: item.extras.map(mapLineItemForCreate),
							}
						: undefined,
				};
			}

			// Usage in your order creation:
			const new_order = await tx.delivery_orders.create({
				data: {
					...orderData,
					order_number: order_number,
					user: {
						connect: { user_id },
					},
					...moduleConnectObj,
					items: {
						create: order.items.map(mapLineItemForCreate),
					},
				},
				include: {
					driver: true,
					user: true,
					food_drinks_module: true,
					stores_module: true,
					items: {
						include: {
							sides: {
								include: {
									sides: true,
									extras: true,
									replacement: true,
								},
							},
							extras: {
								include: {
									sides: true,
									extras: true,
									replacement: true,
								},
							},
							replacement: {
								include: {
									sides: true,
									extras: true,
									replacement: true,
								},
							},
						},
					},
				},
			});
			return new_order;
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
	order_id: UUID,
	status: PrismaDeliveryOrderStatus
): Promise<DeliveryOrderDetail> {
	try {
		return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			// Fetch the current timeline
			const order = await tx.delivery_orders.findUnique({
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
			// Update the status and timeline within a transaction
			return await tx.delivery_orders.update({
				where: {
					order_id,
				},
				data: {
					status,
					timeline: addEntryToDeliveryOrderTimeline(
						order.timeline as Array<Record<string, unknown>>,
						status,
						{
							order_id: order_id,
							location: {
								timestamp: new Date().toISOString(),
							},
						}
					) as JsonArray,
				},
				include: {
					customer: true,
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
					food_drinks_module: {
						include: {
							delivery_address: true,
						},
					},
					stores_module: {
						include: {
							delivery_address: true,
						},
					},
				},
			});
		});
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update delivery order pickup time.
 */
export async function updateOrderPickupTime(order_id: UUID, pickup_time: Timestamp): Promise<DeliveryOrderDetail> {
	try {
		// Retrieve the current details
		const order = await prisma.delivery_orders.findUnique({
			where: {
				order_id,
			},
			select: {
				details: true,
			},
		});
		console.log(pickup_time, 'setting pickup time');
		// Merge new pickup_time with existing details
		const updatedDetails = {
			...order.details,
			ready_for_pickup_at: pickup_time,
			customer_expected_delivery_at: order.details.duration
				? new Date(new Date(pickup_time).getTime() + order.details.duration * 1000)
				: pickup_time,
		};
		// Update the order with merged details and new pickup_time for ready_for_pickup_at

		const updatedOrder = await prisma.delivery_orders.update({
			where: {
				order_id,
			},
			data: {
				details: updatedDetails,
			},
			include: {
				user: true,
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
export async function updateOrderDeliveryTime(order_id: UUID, delivery_time: Timestamp): Promise<DeliveryOrderDetail> {
	try {
		// Retrieve the current details
		const order = await prisma.delivery_orders.findUnique({
			where: {
				order_id,
			},
			select: {
				details: true,
			},
		});
		if (!order) {
			throw new Error('Order not found');
		}
		// Merge new pickup_time with existing details
		const updatedDetails = {
			...order.details,
			customer_expected_delivery_at: delivery_time,
		};
		// Update the order with merged details and new pickup_time for ready_for_pickup_at
		const updatedOrder = await prisma.delivery_orders.update({
			where: {
				order_id,
			},
			data: {
				details: updatedDetails,
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
export async function completeOrder(order_id: UUID): Promise<DeliveryOrderDetail> {
	try {
		await updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED as PrismaDeliveryOrderStatus);
		await updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.SUCCESS as PrismaDeliveryOrderStatus);
		let delivery_order = await prisma.delivery_orders.findFirst({
			where: {
				order_id,
			},
			include: {
				store_module: true,
				food_drinks_module: true,
				user: true,
			},
		});
		let orders = await prisma.delivery_orders.findMany({
			where: {
				driver_id: delivery_order.driver_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
				},
			},
		});
		console.log('DELIVERY DRIVER ORDERS', orders.length);
		if (delivery_order.driver_id) {
			await prisma.drivers.update({
				where: {
					driver_id: delivery_order.driver_id,
				},
				data: {
					on_order: orders.length > 0,
				},
			});
		}
		return toDeliveryOrderDetail(delivery_order);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get user by delivery order ID.
 */
export async function getUserByDeliveryOrderId(order_id: UUID): Promise<Record<string, unknown> | null> {
	try {
		const order = await prisma.delivery_orders.findUnique({
			where: { order_id },
			include: {
				user: true,
			},
		});

		return (order?.user as UserBase) || null;
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update delivery order timeline.
 */
export async function updateDeliveryOrderTimeline(
	order_id: UUID,
	newTimelineEntries: Array<Record<string, unknown>>
): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder1 = await prisma.delivery_orders.update({
			where: { order_id },
			data: { timeline: newTimelineEntries },
			include: {
				driver: true,
				user: true,
				business: true,
			},
		});

		// Fetch the current timeline
		const order = await prisma.delivery_orders.findUnique({
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
		const updatedOrder = await prisma.delivery_orders.update({
			where: {
				order_id,
			},
			data: {
				timeline: newTimelineEntries.reduce(
					(previousTimeline, entry) =>
						addEntryToDeliveryOrderTimeline(
							previousTimeline,
							entry.status as PrismaDeliveryOrderStatus,
							entry
						),
					order.timeline
				),
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
	order_id: UUID,
	status: PrismaDeliveryOrderStatus,
	entry_data?: Record<string, unknown>
): Promise<DeliveryOrderDetail> {
	try {
		// Fetch the current timeline
		const currentOrder = await prisma.delivery_orders.findUnique({
			where: {
				order_id,
			},
			select: {
				timeline: true,
			},
		});
		if (!currentOrder) {
			throw new Error(`Order with ID ${order_id} not found`);
		}
		const updatedOrder = await prisma.delivery_orders.update({
			where: {
				order_id,
			},
			data: {
				timeline: addEntryToDeliveryOrderTimeline(currentOrder.timeline, status, entry_data),
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
export async function getActiveOrdersByDeliveryDriverId(deliverer_id: UUID): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				driver_id: deliverer_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES,
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
				food_drinks_module: true,
				stores_module: true,
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
 * @param {string} driver_id - The UUID of the delivery driver.
 * @returns {DeliveryOrderDetail[]} A promise that resolves to an array of DeliveryOrderDetail objects.
 */
export async function getOrdersByDeliveryDriverId(driver_id: UUID): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				driver_id,
			},
			include: {
				user: true,
				driver: {
					include: {
						user: true,
						current_vehicle: true,
					},
				},
				food_drinks_module: true,
				stores_module: true,
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
export async function connectOrderWithDriver(order_id: UUID, driver_id: UUID): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { driver_id },
			include: {
				driver: true,
				user: true,
				food_drinks_module: true,
				stores_module: true,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		console.error(`Error connecting order ${order_id} with driver ${driver_id}:`, e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Update order data.
 */
export async function updateOrder(order_id: UUID, updateData: UpdateDeliveryOrder): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: updateData,
			include: {
				driver: true,
				user: true,
				food_drinks_module: true,
				stores_module: true,
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
//FIXME: change to lineitems
export async function updateOrderItems(
	order_id: UUID,
	items: Array<Record<string, unknown>>
): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { items },
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get in-progress delivery orders count for business.
 */
export async function getInProgressDeliveryOrdersCountForBusinessId(business_id: UUID): Promise<number> {
	try {
		const business = await prisma.businesses.findUniqueOrThrow({
			where: { business_id },
			select: {
				food_drinks_module_id: true,
				stores_module_id: true,
			},
		});

		const whereConditions = [];

		if (business.food_drinks_module_id) {
			whereConditions.push({
				food_drinks_module_id: business.food_drinks_module_id,
				status: {
					in: [DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP, DELIVERY_ORDER_STATUS.MERCHANT_PREPARING],
				},
			});
		}

		if (business.stores_module_id) {
			whereConditions.push({
				stores_module_id: business.stores_module_id,
				status: {
					in: [DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP, DELIVERY_ORDER_STATUS.MERCHANT_PREPARING],
				},
			});
		}

		if (whereConditions.length === 0) {
			return 0;
		}

		return await prisma.delivery_orders.count({
			where: {
				OR: whereConditions,
			},
		});
	} catch (e) {
		console.error('Error fetching orders:', e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Remove driver from order.
 */
export async function removeDriverFromOrder(order_id: UUID): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: {
				driver_id: null,
			},
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		console.error('Error removing driver from order:', e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Set delivery image for order.
 */
export async function setDeliveryImage(
	order_id: UUID,
	url: string,
	mime_type: string,
	isPublic: boolean = false
): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: {
				files: {
					upsert: {
						where: { delivery_order_id: order_id },
						update: {
							url,
							mime_type,
							public: isPublic,
							file_type: FILE_TYPE.IMAGE,
						},
						create: {
							url,
							mime_type,
							public: isPublic,
							file_type: FILE_TYPE.IMAGE,
						},
					},
				},
			},
			include: {
				files: true,
				driver: true,
				user: true,
				food_drinks_module: true,
				stores_module: true,
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
export async function updateOrderLastSentAt(order_id: UUID): Promise<DeliveryOrderDetail> {
	try {
		const updatedOrder = await prisma.delivery_orders.update({
			where: { order_id },
			data: { last_sent_at: new Date() },
		});

		return toDeliveryOrderDetail(updatedOrder);
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Create order sent record for tracking.
 */
export async function createOrderSent(
	order_id: UUID,
	driver: Partial<DriverDetail>
): Promise<Partial<DeliveryOrderSentBase>> {
	try {
		if (!driver.driver_id) {
			throw new Error('Driver ID required');
		}
		const data = {
			order: {
				connect: {
					order_id,
				},
			},
			location: driver.location,
			accepted: false,
			driver: {
				connect: {
					driver_id: driver.driver_id,
				},
			},
		};
		return await prisma.delivery_order_sent.create({
			data,
		});
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Check if order is already sent to driver.
 */
export async function isOrderSent(order_id: UUID, driver_id: UUID): Promise<boolean> {
	try {
		const sentRecord = await prisma.delivery_order_sent.findFirst({
			where: {
				order_id,
				driver_id,
			},
		});
		return !!sentRecord;
	} catch (e) {
		return false;
	}
}

/**
 * Accept order delivery with proper locking mechanism.
 */
//FIXME: shoudlnt be used, so no updates done
export async function acceptOrderDelivery(
	order: any,
	deliverer_id: UUID,
	vehicle_id?: string
): Promise<DeliveryOrderDetail> {
	const { order_id } = order;
	try {
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
			timeline: addEntryToDeliveryOrderTimeline(
				order.timeline,
				DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED as PrismaDeliveryOrderStatus,
				{
					driver_id: deliverer_id,
				}
			),
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
 * Accept a delivery order using a row-level lock to avoid race conditions.
 */
export async function acceptOrderDeliveryWithRawLock(order_id: UUID, delivererId: UUID, vehicleId: UUID) {
	// Validate the UUID format to prevent SQL injection
	if (!UUID.safeParse(order_id).success) {
		throw new Error(`Invalid order_id format: ${order_id}`);
	}

	return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		// 1) Acquire a row-level lock on the delivery_orders row
		await tx.$executeRawUnsafe(
			`SELECT 1
		 FROM delivery_orders
		WHERE order_id = $1::uuid
		  FOR UPDATE NOWAIT`,
			order_id
		);
		let orderOld = (await tx.delivery_orders.findUniqueOrThrow({
			where: { order_id: order_id },
			select: { timeline: true },
		})) as { timeline: Array<Record<string, unknown>> };
		// 2) Update the delivery_order_sent record and mark driver on_order

		await tx.delivery_order_sent.update({
			where: {
				delivery_order_sent_driver_unique: { order_id: order_id, driver_id: delivererId },
			},
			data: { accepted: true },
		});
		await tx.drivers.update({
			where: { driver_id: delivererId },
			data: { on_order: true },
		});

		// 3) Update the delivery_orders row itself, including timeline and associations
		const updated = await tx.delivery_orders.update({
			where: { order_id: order_id },
			data: {
				timeline: addEntryToDeliveryOrderTimeline(
					orderOld.timeline,
					DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED as PrismaDeliveryOrderStatus,
					{
						driver_id: delivererId,
					}
				) as Prisma.JsonArray,
				driver: { connect: { driver_id: delivererId } },
				vehicle: vehicleId ? { connect: { vehicle_id: vehicleId } } : undefined,
			},
			include: {
				driver: true,
				vehicle: true,
			},
		});

		// 4) Commit (implicit) releases the lock
		return updated;
	});
}

/**
 * Get sent delivery drivers for an order.
 */
export async function getSentDeliveryDrivers(order_id: UUID): Promise<any[]> {
	try {
		return await prisma.delivery_order_sent.findMany({
			where: { order_id },
			include: {
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
export async function getAlreadySentOrdersByDeliveryDriverId(driver_id: UUID): Promise<any[]> {
	try {
		return await prisma.delivery_order_sent.findMany({
			where: { driver_id, accepted: false },
			include: {
				order: true,
			},
		});
	} catch (e) {
		console.error('Error fetching pending orders for driver:', e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

// Export additional functions for compatibility
export { addEntryToDeliveryOrderTimeline };

/**
 * Mark a delivery_order_sent as accepted for the given driver.
 */
export async function acceptOrderSent(order_id: UUID, driver_id: UUID): Promise<delivery_order_sent> {
	console.log('delivery order sent accept', order_id, driver_id);
	try {
		return await prisma.delivery_order_sent.update({
			where: {
				delivery_order_sent_driver_unique: {
					order_id,
					driver_id,
				},
			},
			data: { accepted: true },
		});
	} catch (e) {
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

/**
 * Get orders by business local location ID and status.
 */
export async function getOrdersByBusinessLocalLocation(
	business_local_location_id: UUID,
	status: PrismaDeliveryOrderStatus
): Promise<DeliveryOrderDetail[]> {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				business_local_location_id,
				status,
			},
			include: {
				stores_module: true,
				user: true,
			},
		});

		return orders.map(toDeliveryOrderDetail);
	} catch (e) {
		console.error('Error fetching orders by business local location:', e);
		throw new Error(e instanceof Error ? e.message : String(e));
	}
}

export default {
	acceptOrderDelivery,
	acceptOrderDeliveryWithRawLock,
	acceptOrderSent,
	addTimelineEntry,
	completeOrder,
	connectOrderWithDriver,
	createOrder,
	createOrderSent,
	getActiveDeliveryOrders,
	getActiveDeliveryOrdersForBusiness: getActiveDeliveryOrdersForModule,
	getActiveOrdersByDeliveryDriverId,
	getAlreadySentOrdersByDeliveryDriverId,
	// getCompletedOrdersByBusinessId,
	// getCompletedOrdersByDeliveryDriverId,
	// getCompletedOrdersByUserId,
	getDeliveryOrdersIfNotCompleted,
	getInProgressDeliveryOrdersCountForBusinessId,
	getOrder,
	getOrders,
	getOrdersByBusinessLocalLocation,
	getOrdersByDeliveryDriverId,
	getSentDeliveryDrivers,
	getUserByDeliveryOrderId,
	isOrderSent,
	removeDriverFromOrder,
	setDeliveryImage,
	updateDeliveryOrderTimeline,
	updateOrder,
	updateOrderDeliveryTime,
	updateOrderItems,
	updateOrderLastSentAt,
	updateOrderPickupTime,
	updateOrderStatus,
};
