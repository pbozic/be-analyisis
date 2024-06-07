const prisma = require("../prisma/prisma");
async function getOrders(args) {
    try {
        return prisma.taxi_orders.findMany({
            ...args
        });
    } catch (e) {
        throw new Error(e);
    }
}
async function getOrder(taxi_order_id, args) {
	try {
		return prisma.taxi_orders.findFirst({
			where: {
				taxi_order_id: taxi_order_id,
            },
            ...args
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function getOrdersByDriverId(driver_id) {
    try {
        return await prisma.taxi_orders.findMany({
            where: {
                driver_id: driver_id,
            },
            include: {
                driver: true,
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

async function createOrderSent(taxi_order_id, driver) {
    try {
        return prisma.taxi_order_sent.create({
            data: {
                order: {
                    connect: {
                        taxi_order_id
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
async function isOrderSent(taxi_order_id, driver) {
    try {
        return prisma.taxi_order_sent.findFirst({
            where: {
                taxi_order_id,
                driver_id: driver.driver_id
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}
async function acceptOrder(taxi_order_id, user) {
    console.log("acceptOrder",taxi_order_id)
    try {
        let taxi_order_sent = await prisma.taxi_order_sent.update({
            where: {
                taxi_order_snet_driver_unique: {
                    taxi_order_id,
                    driver_id: user.driver.driver_id
                }
               
            },
            data: {
                accepted: true
            },
        });
        console.log("taxi_order_sent", taxi_order_sent)
        prisma.drivers.update({
            where: {
                driver_id: user.driver.driver_id
            },
            data: {
                on_order: true
            }
        });
        return prisma.taxi_orders.update({
            where: {
                taxi_order_id
            },
            data: {
                status: "TAXI_ACCEPTED",
                driver: {
                    connect: {
                        driver_id: user.driver.driver_id
                    }
                }
            },
        });
    } catch (e) {
        throw new Error(e);
    }
}
async function updateOrderStatus(taxi_order_id, status) {
    try {
        return prisma.taxi_orders.update({
            where: {
                taxi_order_id
            },
            data: {
                status
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}

async function completeOrder(taxi_order_id) {
    try {
       
        let taxi_order = await prisma.taxi_orders.update({
            where: {
                taxi_order_id
            },
            data: {
                status: "TAXI_COMPLETED"
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

async function acceptOrderSent(taxi_order_id, driver_id) {
    console.log("order sent accept",taxi_order_id, driver_id)
    try {
        return prisma.taxi_order_sent.update({
            where: {
                taxi_order_id,
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
async function getSentDrivers(taxi_order_id) {
    try {
        return prisma.taxi_orders_sent.findMany({
            where: {
                taxi_order_id,
                include: {
                    driver: {
                        include: {
                            user: true
                        }
                    }
                }
            }
        });
    } catch (e) {
        throw new Error(e);
    }
}
async function updateOrderLastSentAt(taxi_order_id) {
    try {
        return prisma.taxi_orders.update({
            where: {
                taxi_order_id
            },
            data: {
                last_sent_at: new Date()
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
    updateOrderLastSentAt,
    completeOrder,
    updateOrderStatus,
    isOrderSent
};
