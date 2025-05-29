import prisma from '../prisma/prisma.js';
import { TIME_LIMIT, TAXI_ORDER_STATUS, ORDER_TYPE, ORDER_SUBTYPE } from '../lib/constants.js';
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
async function getTaxiOrdersIfNotCompleted(user_id, type) {
	try {
		return await prisma.taxi_orders.findMany({
			where: {
				type: type,
				user_id: user_id,
				subtype: ORDER_SUBTYPE.CREATED_BY_USER,
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
				OR: [{ creating_user_id: null }, { creating_user_id: { not: user_id } }],
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
async function acceptOrder(order, user, driver) {
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
						vehicle_id: user.driver.current_vehicle.vehicle_id,
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
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
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								},
							},
						},
						current_vehicle: true,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
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
async function getActiveOrderIdsForUser(user_id, scheduled = true) {
	try {
		const orders = await prisma.taxi_orders.findMany({
			where: {
				user_id: user_id,
				status: {
					notIn: [
						TAXI_ORDER_STATUS.TAXI_CANCELED,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED,
						TAXI_ORDER_STATUS.TAXI_COMPLETED,
						TAXI_ORDER_STATUS.TAXI_REJECTED,
						TAXI_ORDER_STATUS.AWAITING_PAYMENT, //TODO: Should we consider AWAIITING_PAYMENT as active order in the user's eyes?
					],
				},
				is_scheduled: scheduled,
				OR: [{ creating_user_id: null }, { creating_user_id: { not: user_id } }],
			},
			select: {
				order_id: true,
			},
		});
		// console.info("got order ids:", orders);
		return orders.map((order) => order.order_id);
	} catch (e) {
		console.error('Error fetching orders:', e);
		throw new Error(e.message);
	}
}
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
export { getActiveOrderIdsForUser };
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
	getActiveOrderIdsForUser,
	getDeliveryOrdersByDriverId,
	deleteOrderSent,
};
