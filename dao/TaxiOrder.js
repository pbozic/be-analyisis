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
async function getOrder(order_id, args) {
	try {
		return prisma.taxi_orders.findFirst({
			where: {
				order_id: order_id,
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
async function acceptOrder(order_id, user) {
    console.log("acceptOrder",order_id)
    try {
        let taxi_order_sent = await prisma.taxi_order_sent.update({
            where: {
                taxi_order_snet_driver_unique: {
                    order_id,
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
        return prisma.taxi_orders_sent.findMany({
            where: {
                order_id,
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
