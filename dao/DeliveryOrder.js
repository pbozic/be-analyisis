const prisma = require("../prisma/prisma");

async function getOrders(args) {
	try {
		return prisma.delivery_orders.findMany({
			...args
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function getOrder(order_id, args) {
	try {
		return prisma.delivery_orders.findFirst({
			where: {
				order_id: order_id,
			},
			...args
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function getUserByDeliveryOrderId(order_id) {
	try {
		const order = await prisma.delivery_orders.findUnique({
			where: {
				order_id: order_id
			},
			include: {
				user: true
			}
		});

		if (order && order.user) {
			return order.user;
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error fetching user data from delivery order:", error);
		throw error;
	}
}

async function getOrdersByDeliveryDriverId(delivery_driver_id) {
	try {
		return await prisma.delivery_orders.findMany({
			where: {
				delivery_driver_id: delivery_driver_id,
			},
			include: {
				delivery_driver: true,
			}
		});
	} catch (e) {
		console.error("Error getting delivery orders by driver ID:", e);
		throw new Error(e);
	}
}

async function createOrder(order, user_id) {
	try {
		return prisma.delivery_orders.create({
			data: {
				...order,
				user: {
					connect: {
						user_id: user_id,
					},
				},
				business: {
					connect: {
						business_id: order.details.business_id
					}
				}
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function createOrderSent(order_id, driver) {
	try {
		return prisma.delivery_order_sent.create({
			data: {
				order: {
					connect: {
						order_id
					}
				},
				delivery_driver: {
					connect: {
						delivery_driver_id: driver.delivery_driver_id
					}
				},
				location: driver.location,
				accepted: false
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function isOrderSent(order_id, driver) {
	try {
		return prisma.delivery_order_sent.findFirst({
			where: {
				order_id,
				delivery_driver_id: driver.delivery_driver_id
			}
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function acceptOrder(order_id, user) {
	console.log("accept (delivery) order", order_id)
	try {
		let delivery_order_sent = await prisma.delivery_order_sent.update({
			where: {
				delivery_order_sent_driver_unique: {
					order_id,
					delivery_driver_id: user.driver.delivery_driver_id
				}
			},
			data: {
				accepted: true
			},
		});
		console.log("delivery_order_sent", delivery_order_sent)
		prisma.delivery_drivers.update({
			where: {
				delivery_driver_id: user.driver.delivery_driver_id
			},
			data: {
				on_order: true
			}
		});
		return prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				status: "DELIVERY_ACCEPTED",
				delivery_driver: {
					connect: {
						delivery_driver_id: user.driver.delivery_driver_id
					}
				}
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function updateOrderStatus(order_id, status) {
	try {
		return prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				status
			}
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function updateOrderPickupTime(order_id, pickup_time) {
	try {
		// Retrieve the current details
		const order = await prisma.delivery_orders.findUnique({
			where: {
				order_id
			},
			select: {
				details: true
			}
		});

		if (!order) {
			throw new Error('Order not found');
		}
		// Merge new pickup_time with existing details
		const updatedDetails = {
			...order.details,
			ready_for_pickup_at: pickup_time,
		};

		// Update the order with merged details and new pickup_time for ready_for_pickup_at
		return await prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				details: updatedDetails,
			}
		});
	} catch (e) {
		throw new Error(e.message);
	}
}

async function updateOrderDeliveryTime(order_id, delivery_time) {
	try {
		// Retrieve the current details
		const order = await prisma.delivery_orders.findUnique({
			where: {
				order_id
			},
			select: {
				details: true
			}
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
		return await prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				details: updatedDetails,
			}
		});
	} catch (e) {
		throw new Error(e.message);
	}
}

async function completeOrder(order_id) {
	try {
		let delivery_order = await prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				status: "DELIVERY_COMPLETED"
			}
		});
		await prisma.delivery_drivers.update({
			where: {
				delivery_driver_id: delivery_order.delivery_driver_id
			},
			data: {
				on_order: false
			}
		});
		return delivery_order;
	} catch (e) {
		throw new Error(e);
	}
}

async function acceptOrderSent(order_id, driver_id) {
	console.log("delivery order sent accept", order_id, driver_id)
	try {
		return prisma.delivery_order_sent.update({
			where: {
				order_id,
				delivery_driver_id: driver_id
			},
			data: {
				accepted: true
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function getSentDeliveryDrivers(order_id) {
	try {
		return prisma.delivery_order_sent.findMany({
			where: {
				order_id,
			},
			include: {
				delivery_driver: {
					include: {
						user: true
					}
				}
			}
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function updateOrderLastSentAt(order_id) {
	try {
		return prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				last_sent_at: new Date()
			}
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function updateDeliveryOrderTimeline(order_id, timeline) {
	try {
		return prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				timeline: timeline
			}
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function updateOrder(order_id, order) {
	try {
		return prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: order
		});
	} catch (e) {
		throw new Error(e);
	}
}
module.exports = {
	getOrders,
	getOrder,
	getOrdersByDeliveryDriverId,
	createOrder,
	createOrderSent,
	isOrderSent,
	acceptOrder,
	acceptOrderSent,
	getSentDeliveryDrivers,
	updateOrderLastSentAt,
	updateOrderStatus,
	completeOrder,
	updateDeliveryOrderTimeline,
	getUserByDeliveryOrderId,
	updateOrder,
	updateOrderPickupTime,
	updateOrderDeliveryTime
};