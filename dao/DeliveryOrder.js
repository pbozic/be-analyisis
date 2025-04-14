const prisma = require("../prisma/prisma");
const { DOCUMENT_TYPE, DELIVERY_ORDER_STATUS,DELIVERY_ORDER_END_STATES } = require("../lib/constants");
const gApi = require("../lib/gApis");
/**
 *
 * @param {Object} timeline - the order timeline object with entries which must have status and timestamp and can have additional fields
 * @param {String} status - the order status string to add to the timeline.
 * @param {Object} entry_data - an object with additional fields to be put into the timeline entry. If these include status and timestamp, they will be overwritten.
 */
function addEntryToDeliveryOrderTimeline(timeline,status,entry_data) {
	return [...timeline,{
		...entry_data,
		status: status,
		timestamp: new Date().toISOString(),
	}];
}

async function getOrders(args) {
	try {
		return await prisma.delivery_orders.findMany({
			include: {
				delivery_driver: {
					include: {
						user: true,
						vehicles: {
							include: {
								vehicle_specification: true
							}
						},
					}
				},
				driver: {
					include: {
						user: true,
						vehicles: {
							include: {
								vehicle: {
									include: {
										vehicle_specification: true,
									},
								}
							}
						},
					}
				},
				user: true,
			},
			...args,
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function getActiveDeliveryOrders() {
	try {
		return await prisma.delivery_orders.findMany({
			where: {
				status: {
					notIn: DELIVERY_ORDER_END_STATES
					// notIn: [
					// 	DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
					// 	DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_CANCELED,
					// 	DELIVERY_ORDER_STATUS.CUSTOMER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_REJECTED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
					// ]
				},
			},
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
			}
		});
	} catch (e) {
		console.error("Error fetching order:", e);
		throw new Error(e.message);
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

async function getActiveDeliveryOrdersForBusiness(business_id) {
	try {
		return await prisma.delivery_orders.findMany({
			where: {
				business_id: business_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES
					// notIn: [
					// 	DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
					// 	DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_CANCELED,
					// 	DELIVERY_ORDER_STATUS.CUSTOMER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_REJECTED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
					// ]
				},
			},
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
			}
		});
	} catch (e) {
		console.error("Error fetching order:", e);
		throw new Error(e.message);
	}
}

async function getDeliveryOrdersIfNotCompleted(user_id) {
	try {
		let orders = await prisma.delivery_orders.findMany({
			where: {
				user_id: user_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES
					// notIn: [
					// 	DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
					// 	DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_CANCELED,
					// 	DELIVERY_ORDER_STATUS.CUSTOMER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_REJECTED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
					// ]
				},
			},
			include: {
				delivery_driver: true,
				driver: true,
				user: true,
				business: {
					select: {
						name: true,
						email: true,
						telephone: true,
						documents: {
							where: {
								document_type: { in: [DOCUMENT_TYPE.LOGO, DOCUMENT_TYPE.BANNER] }
							},
							include: {
								files: true
							}
						}
					}
				}
			}
		});

		for(let order of orders){
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
		return orders
	} catch (e) {
		console.error("Error fetching order:", e);
		throw new Error(e.message);
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


async function getActiveOrdersByDeliveryDriverId(deliverer_id) {
	try {
		return await prisma.delivery_orders.findMany({
			where: {
				OR: [
					{ delivery_driver_id: deliverer_id },
					{ driver_id: deliverer_id }
				],
				status: {
					notIn: DELIVERY_ORDER_END_STATES
					// notIn: [
					// 	DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
					// 	DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_CANCELED,
					// 	DELIVERY_ORDER_STATUS.CUSTOMER_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_CANCELED,
					// 	DELIVERY_ORDER_STATUS.DELIVERY_REJECTED,
					// 	DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
					// ]
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
									}
								}
							}
						}
					}
				},
			}
		});
	} catch (e) {
		console.error("Error fetching taxi order:", e);
		throw new Error(e.message);
	}
}

async function getOrdersByDeliveryDriverId(delivery_driver_id) {
	try {
		return await prisma.delivery_orders.findMany({
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
									}
								}
							}
						},
					}
				},
				user: true,
			}
		});
	} catch (e) {
		console.error("Error getting delivery orders by driver ID:", e);
		throw new Error(e);
	}
}

async function createOrder(order, user_id) {
	let orderData = {...order}
	// delete orderData.user_id;
	// delete orderData.vehicle_id;
	// delete orderData.delivery_driver_id
	// delete orderData.driver_id;
	// delete orderData.business_id;
	// delete orderData.paymentIntent;
	try {
		return prisma.delivery_orders.create({
			data: {
				...orderData,
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
		const data = {
			order: {
				connect: {
					order_id
				}
			},
			location: driver.location,
			accepted: false
		};

		// Check if the driver is a delivery driver or a normal driver
		if (driver.delivery_driver_id) {
			data.delivery_driver = {
				connect: {
					delivery_driver_id: driver.delivery_driver_id
				}
			};
		} else if (driver.driver_id) {
			data.driver = {
				connect: {
					driver_id: driver.driver_id
				}
			};
		}
		return prisma.delivery_order_sent.create({
			data
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
				OR: [
					{ delivery_driver_id: driver.delivery_driver_id },
					{ driver_id: driver.driver_id }
				]
			}
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function acceptOrderDelivery(order, deliverer_id, vehicle_id) {
	const {order_id} = order
	console.log("accept (delivery) order", order_id)
	console.log("accept (delivery_id)", deliverer_id)
	try {
		const deliveryDriver = await prisma.delivery_drivers.findUnique({
			where: {
				delivery_driver_id: deliverer_id
			}
		});
		if (deliveryDriver) {
			let delivery_order_sent = await prisma.delivery_order_sent.update({
				where: {
					delivery_order_sent_delivery_driver_unique: {
						order_id,
						delivery_driver_id: deliverer_id
					}
				},
				data: {
					accepted: true
				},
			});
			console.log("delivery_order_sent", delivery_order_sent)
			await prisma.delivery_drivers.update({
				where: {
					delivery_driver_id: deliverer_id
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
					timeline: addEntryToDeliveryOrderTimeline(order.timeline,DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED,{driver_id: deliverer_id}),
					delivery_driver: {
						connect: {
							delivery_driver_id: deliverer_id
						}
					},
					vehicle: {
						connect: {
							vehicle_id: vehicle_id
						}
					}
				},
			});
		} else {
			let delivery_order_sent = await prisma.delivery_order_sent.update({
				where: {
					delivery_order_sent_driver_unique: {
						order_id,
						driver_id: deliverer_id
					}
				},
				data: {
					accepted: true
				},
			});
			console.log("delivery_order_sent", delivery_order_sent)
			await prisma.drivers.update({
				where: {
					driver_id: deliverer_id
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
					timeline: addEntryToDeliveryOrderTimeline(order.timeline,DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED,{driver_id: deliverer_id}),
					driver: {
						connect: {
							driver_id: deliverer_id
						}
					},
					vehicle: {
						connect: {
							vehicle_id: vehicle_id
						}
					}
				},
			});
		}
	} catch (e) {
		throw new Error(e);
	}
}

async function connectOrderWithDriver(order_id, delivery_driver_id) {
	try {
		return await prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				delivery_driver: {
					connect: {
						delivery_driver_id: delivery_driver_id
					}
				}
			}
		});
	} catch (error) {
		console.error(`Error connecting order ${order_id} with driver ${delivery_driver_id}:`, error);
		throw new Error(`Failed to connect order ${order_id} with driver ${delivery_driver_id}`);
	}
}


async function updateOrderStatus(order_id, status) {
	try {
		return await prisma.$transaction(async (tx) => {
			// Fetch the current timeline
			const order = await tx.delivery_orders.findUnique({
				where: {
					order_id
				},
				select: {
					timeline: true
				}
			});

			if (!order) {
				throw new Error(`Order with ID ${order_id} not found`);
			}

			// Update the status and timeline within a transaction
			return await tx.delivery_orders.update({
				where: {
					order_id
				},
				data: {
					status,
					timeline: addEntryToDeliveryOrderTimeline(
						order.timeline,
						status,
						{
							order_id: order_id,
							location: {
								timestamp: new Date().toISOString()
							}
						}
					)
				}
			});
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
		console.log(pickup_time, 'setting pickup time')
		// Merge new pickup_time with existing details
		const updatedDetails = {
			...order.details,
			ready_for_pickup_at: pickup_time,
			customer_expected_delivery_at: order.details.duration ? new Date(new Date(pickup_time).getTime() + order.details.duration * 1000) : pickup_time
		};

		// Update the order with merged details and new pickup_time for ready_for_pickup_at
		return await prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				details: updatedDetails,
			},
			include: {
				user: true,
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
		await updateOrderStatus(order_id,DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED)
		await updateOrderStatus(order_id,DELIVERY_ORDER_STATUS.SUCCESS)
		let delivery_order = await prisma.delivery_orders.findFirst({
			where: {
				order_id
			},
			include: {
				business: {
					include: {
						documents: {
							include: {
								files: true
							}
						}
					}
				}
			}
		});
		let orders = await prisma.delivery_orders.findMany({
			where: {
				AND: [
					{
						AND: [
							{ delivery_driver_id: delivery_order.delivery_driver_id },
							{ driver_id: delivery_order.driver_id }
						]
					},
					{
						status: {
							notIn: DELIVERY_ORDER_END_STATES
							// notIn: [
							// 	DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
							// 	DELIVERY_ORDER_STATUS.DISPATCHER_CANCELED,
							// 	DELIVERY_ORDER_STATUS.MERCHANT_CANCELED,
							// 	DELIVERY_ORDER_STATUS.CUSTOMER_CANCELED,
							// 	DELIVERY_ORDER_STATUS.DELIVERY_CANCELED,
							// 	DELIVERY_ORDER_STATUS.DELIVERY_REJECTED,
							// 	DELIVERY_ORDER_STATUS.MERCHANT_REJECTED,
							// 	DELIVERY_ORDER_STATUS.MERCHANT_REFUNDED,
							// 	DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED,
							// ]
						}
					}
				]
			}
		})
		console.log("DELIVERY DRIVER ORDERS", orders.length)
		if (delivery_order.delivery_driver_id) {
			await prisma.delivery_drivers.update({
				where: {
					delivery_driver_id: delivery_order.delivery_driver_id
				},
				data: {
					on_order: orders.length > 0
				}
			});
		} else if (delivery_order.driver_id) {
			await prisma.drivers.update({
				where: {
					driver_id: delivery_order.driver_id
				},
				data: {
					on_order: orders.length > 0
				}
			});
		}
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
				OR: [
					{ delivery_driver_id: driver_id },
					{ driver_id: driver_id }
				]
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
				},
				driver: {
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

async function updateDeliveryOrderTimeline(order_id, newTimelineEntries) {
	try {
		// Fetch the current timeline
		const order = await prisma.delivery_orders.findUnique({
			where: {
				order_id
			},
			select: {
				timeline: true
			}
		});

		if (!order) {
			throw new Error(`Order with ID ${order_id} not found`);
		}

		return await prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				timeline: newTimelineEntries.reduce(
					(previousTimeline, entry) => addEntryToDeliveryOrderTimeline(previousTimeline, entry.status, entry),
					order.timeline
				)
			}
		});
	} catch (e) {
		throw new Error(e);
	}
}
async function addTimelineEntry(order_id, status, entry_data={}) {
	try {
		// Fetch the current timeline
		const order = await prisma.delivery_orders.findUnique({
			where: {
				order_id
			},
			select: {
				timeline: true
			}
		});

		if (!order) {
			throw new Error(`Order with ID ${order_id} not found`);
		}

		return await prisma.delivery_orders.update({
			where: {
				order_id
			},
			data: {
				timeline: addEntryToDeliveryOrderTimeline(order.timeline,status,entry_data)
			}
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function updateOrder(order_id, order) {
	let newOrder = {...order}
	delete newOrder.user_id;
	delete newOrder.delivery_driver_id;
	delete newOrder.driver_id;
	delete newOrder.created_at
	delete newOrder.updated_at
	delete newOrder.business_id
	delete newOrder.delivery_driver
	delete newOrder.driver
	delete newOrder.user

	if (newOrder.last_sent_at && Object.keys(newOrder.last_sent_at).length === 0) {
		delete newOrder.last_sent_at
	}

	try {
		return await prisma.delivery_orders.update({
			where: {
				order_id: order_id,
			},
			data: {
				...newOrder,
				updated_at: new Date(),
			},
			include: {
				delivery_driver: true,
				driver: true
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function getAlreadySentOrdersByDeliveryDriverId(deliverer_id) {
	try {
		return await prisma.delivery_order_sent.findMany({
			where: {
				OR: [
					{ delivery_driver_id: deliverer_id },
					{ driver_id: deliverer_id }
				],
				accepted: false
			},
			include: {
				order: true
			}
		});
	} catch (e) {
		console.error("Error fetching pending orders for driver:", e);
		throw new Error(e);
	}
}


async function getInProgressDeliveryOrdersCountForBusinessId(business_id) {
	try {
		const count = await prisma.delivery_orders.count({
			where: {
				business_id: business_id,
				status: {
					in: [
						DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP,
						DELIVERY_ORDER_STATUS.MERCHANT_PREPARING,
					],
				},
			},
		});
		console.info("got count:",count, business_id);
		return count;
	} catch (e) {
		console.error("Error fetching orders:", e);
		throw new Error(e.message);
	}
}

async function getActiveOrderIdsForUser(user_id) {
	try {
		const orders = await prisma.delivery_orders.findMany({
			where: {
				user_id: user_id,
				status: {
					notIn: DELIVERY_ORDER_END_STATES
				},
			},
			select:{
				order_id:true
			}
		});
		// console.info("got order ids:", orders);
		return orders.map(order=>order.order_id);
	} catch (e) {
		console.error("Error fetching orders:", e);
		throw new Error(e.message);
	}
}

async function removeDriverFromOrder(order_id) {
	try {
		const order = await prisma.delivery_orders.update({
			where: {
				order_id: order_id,
			},
			data: {
				delivery_driver_id: null,
				driver_id: null
			}
		});
		return order;
	} catch (e) {
		console.error("Error removing driver from order:", e);
		throw new Error(e.message);
	}
}


module.exports = {
	getOrders,
	getActiveDeliveryOrders,
	getOrder,
	getOrdersByDeliveryDriverId,
	createOrder,
	createOrderSent,
	isOrderSent,
	acceptOrderDelivery,
	acceptOrderSent,
	getSentDeliveryDrivers,
	updateOrderLastSentAt,
	updateOrderStatus,
	completeOrder,
	updateDeliveryOrderTimeline,
	addTimelineEntry,
	getUserByDeliveryOrderId,
	updateOrder,
	updateOrderPickupTime,
	updateOrderDeliveryTime,
	getDeliveryOrdersIfNotCompleted,
	getAlreadySentOrdersByDeliveryDriverId,
	getActiveOrdersByDeliveryDriverId,
	connectOrderWithDriver,
	getActiveDeliveryOrdersForBusiness,
	getInProgressDeliveryOrdersCountForBusinessId,
	getActiveOrderIdsForUser,
	removeDriverFromOrder
};