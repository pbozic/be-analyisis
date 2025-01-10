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
                        user: {
                            include: {
                                documents: {
                                    include: {
                                        files: true,
                                    }
                                }
                            }
                        },
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
                        user: {
                            include: {
                                documents: {
                                    include: {
                                        files: true,
                                    }
                                }
                            }
                        },
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
        console.error("Error fetching order by ID:", e);
        throw new Error(e);
    }
}

async function getTaxiOrdersIfNotCompleted(user_id, type) {
    try {
        return await prisma.taxi_orders.findMany({
            where: {
                type: type,
                user_id: user_id,
                status: {
                    notIn: [TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.TAXI_COMPLETED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED, TAXI_ORDER_STATUS.TAXI_REJECTED] // Exclude both completed and pending orders
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
                                    }
                                }
                            }
                        },
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
                    notIn: [TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED, TAXI_ORDER_STATUS.TAXI_COMPLETED, TAXI_ORDER_STATUS.PENDING, TAXI_ORDER_STATUS.TAXI_REJECTED]
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
                                    }
                                }
                            }
                        },
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

async function getOrdersByDriverId(driver_id, args) {
    try {
        const whereClause = {
            driver_id: driver_id,
            ...args
        }

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
                                    }
                                }
                            }
                        },
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
                accepted: false,
                rejected: false,
                order: {
                    status: TAXI_ORDER_STATUS.PENDING, // Replace with your desired status value
                },
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
                        user: {
                            include: {
                                documents: {
                                    include: {
                                        files: true,
                                    }
                                }
                            }
                        },
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
                        user: {
                            include: {
                                documents: {
                                    include: {
                                        files: true,
                                    }
                                }
                            }
                        },
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
                        user: {
                            include: {
                                documents: {
                                    include: {
                                        files: true,
                                    }
                                }
                            }
                        },
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
                        user: {
                            include: {
                                documents: {
                                    include: {
                                        files: true,
                                    }
                                }
                            }
                        },
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

async function cancelVehicleTransferOrder(user_id, status, cancellation_reason) {
    try {
        let taxi_order = await prisma.taxi_orders.findFirst({
            where: {
                user_id: user_id,
                type: ORDER_TYPE.VEHICLE_TRANSFER_COMBO,
                status: {
                    notIn: [TAXI_ORDER_STATUS.TAXI_COMPLETED, TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED]
                }
            }
        });

        if (!taxi_order) {
            console.info(`Vehicle transfer order for user: ${user_id} not found`);
            return null;
        }

        taxi_order = await prisma.taxi_orders.update({
            where: {
                order_id: taxi_order.order_id
            },
            data: {
                status: status,
                cancellation_reason: cancellation_reason
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
                                    }
                                }
                            }
                        },
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
        console.error("Error cancelling vehicle transfer order:", e);
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
                                    }
                                }
                            }
                        },
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

async function updateTaxiOrderTimeline(order_id, newTimelineEntries) {
    try {
        const order = await prisma.taxi_orders.findUnique({
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

        const updatedTimeline = [...order.timeline, ...newTimelineEntries];
        const updated_order = await prisma.taxi_orders.update({
            where: {
                order_id
            },
            data: {
                timeline: updatedTimeline
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
                                    }
                                }
                            }
                        },
                        vehicles: {
                            include: {
                                vehicle_specification: true,
                            }
                        }
                    }
                },
            }
        })
        return updated_order;
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
                grouped_orders: true,
                user: true,
                driver: {
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
                        user: {
                            include: {
                                documents: {
                                    include: {
                                        files: true,
                                    }
                                }
                            }
                        },
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
async function userActiveOrders(user_id) {
    try {
        return prisma.taxi_orders.findMany({
            where: {
                user_id,
                status: {
                    notIn: [TAXI_ORDER_STATUS.TAXI_CANCELED, TAXI_ORDER_STATUS.CUSTOMER_CANCELED, TAXI_ORDER_STATUS.TAXI_COMPLETED, TAXI_ORDER_STATUS.TAXI_REJECTED] // Exclude both completed and pending orders
                }
            },
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
    userActiveOrders
};
