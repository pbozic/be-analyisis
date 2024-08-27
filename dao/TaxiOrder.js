const prisma = require("../prisma/prisma");
const { DELIVERY_ORDER_STATUS, TAXI_ORDER_STATUS, ORDER_TYPE } = require("../lib/constants");
const { not } = require("joi");
async function getOrders(args) {
    try {
        const mergedArgs = {
            ...args,
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                }
            }
        };

        return await prisma.taxi_orders.findMany(mergedArgs);
    } catch (e) {
        console.error("Error fetching orders:", e);
        throw new Error(e);
    }
}

async function getOrder(order_id) {
    try {
        return await prisma.taxi_orders.findFirst({
            where: { order_id },
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
        });
    } catch (e) {
        console.error("Error fetching order by ID:", e);
        throw new Error(e);
    }
}

async function getTaxiOrderIfNotCompleted(user_id, type) {
    try {
        return await prisma.taxi_orders.findFirst({
            where: {
                type: type,
                user_id: user_id,
                status: {
                    notIn: [TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED, TAXI_ORDER_STATUS.TAXI_COMPLETED, TAXI_ORDER_STATUS.TAXI_REJECTED] // Exclude both completed and pending orders
                },
            },
            include: {
                user: true,
                driver: {
                    include: {
						user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
                grouped_orders: true,
            }
        });
    } catch (e) {
        console.error("Error fetching taxi order:", e);
        throw new Error(e.message);
    }
}

async function getActiveOrdersByDriverId(driver_id) {
    try {
        return await prisma.taxi_orders.findMany({
            where: {
                driver_id: driver_id,
                status: {
                    notIn: [TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED, TAXI_ORDER_STATUS.TAXI_COMPLETED, TAXI_ORDER_STATUS.PENDING, TAXI_ORDER_STATUS.TAXI_REJECTED] // Exclude both completed and pending orders
                },
            },
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
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

async function getOrdersByDriverId(driver_id) {
    try {
        return await prisma.taxi_orders.findMany({
            where: {
                driver_id: driver_id
            },
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
        });
    } catch (e) {
        console.error("Error getting orders by driver ID:", e);
        throw new Error(e);
    }
}

async function createOrder(order) {
    try {
        return prisma.taxi_orders.create({
            data: order,
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
                        order_id
                    }
                },
                driver: {
                    connect: {
                        driver_id: driver.driver_id
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
        return prisma.taxi_order_sent.findFirst({
            where: {
                order_id,
                driver_id: driver.driver_id
            }
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

async function acceptOrder(order_id, user) {
    console.log("acceptOrder", order_id)
    try {
        let taxi_order_sent = await prisma.taxi_order_sent.update({
            where: {
                taxi_order_sent_driver_unique: {
                    order_id,
                    driver_id: user.driver.driver_id
                }
            },
            data: {
                accepted: true
            },
        });
        console.log("taxi_order_sent", taxi_order_sent)
        await prisma.drivers.update({
            where: {
                driver_id: user.driver.driver_id
            },
            data: {
                on_order: true
            }
        });
        return prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: {
                status: "TAXI_ACCEPTED",
                driver: {
                    connect: {
                        driver_id: user.driver.driver_id
                    }
                }
            },
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}

async function updateOrderStatus(order_id, status) {
    try {
        return prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: {
                status
            },
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}

async function completeOrder(order_id) {
    try {
        let taxi_order = await prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: {
                status: "TAXI_COMPLETED"
            },
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
        });
        await prisma.drivers.update({
            where: {
                driver_id: taxi_order.driver_id
            },
            data: {
                on_order: false
            }
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
                order_id
            },
            data: {
                status: status,
                cancellation_reason: cancellation_reason
            },
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
        });

        if (taxi_order.driver_id) {
            await prisma.drivers.update({
                where: {
                    driver_id: taxi_order.driver_id
                },
                data: {
                    on_order: false
                }
            });
        }

        return taxi_order;
    } catch (e) {
        console.error("Error cancelling order:", e);
        throw new Error(e);
    }
}

async function acceptOrderSent(order_id, driver_id) {
    console.log("order sent accept",order_id, driver_id)
    try {
        return prisma.taxi_order_sent.update({
            where: {
                order_id,
                driver_id
            },
            data: {
                accepted: true
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
        return prisma.taxi_orders.update({
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

async function updateTaxiOderRoute(order_id, route) {
    try {
        return prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: {
                route: route
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}

async function updateTaxiOrderPickupLocation(order_id, pickupLocation) {
    try {
        return prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: {
                pickup_location: pickupLocation
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}

async function updateTaxiOrderDeliveryLocation(order_id, deliveryLocation) {
    try {
        return prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: {
                delivery_location: deliveryLocation
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}

async function updateCompleteTaxiRoute(order_id, route) {
    try {
        const data = {
            route: route,
            pickup_location: route[0],
        };

        if (route.length > 1) {
            data.delivery_location = route[route.length - 1];
        }

        return prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: data
        });
    } catch (e) {
        throw new Error(e);
    }
}

async function updateTaxiOrderTimeline(order_id, timeline) {
    try {
        return prisma.taxi_orders.update({
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

async function updateTaxiOrderPayment(order_id, payment) {
    try {
        return prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: {
                payment: payment
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}
async function updateOrder(order_id, order) {
    try {
        return prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: order,
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
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
                    notIn: [TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED, TAXI_ORDER_STATUS.TAXI_COMPLETED, TAXI_ORDER_STATUS.PENDING, TAXI_ORDER_STATUS.TAXI_REJECTED] // Exclude both completed and pending orders
                }
            },
            include: {
                user: true,
                driver: {
                    include: {
                        user: true,
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}
module.exports = {
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
    updateOrderStatus,
    isOrderSent,
    updateTaxiOderRoute,
    updateTaxiOrderPickupLocation,
    updateTaxiOrderDeliveryLocation,
    updateCompleteTaxiRoute,
    updateTaxiOrderPayment,
    updateTaxiOrderTimeline,
    getTaxiOrderIfNotCompleted,
    getAlreadySentOrdersByDriverId,
    getActiveOrdersByDriverId,
    getAcceptedOrders,
};
