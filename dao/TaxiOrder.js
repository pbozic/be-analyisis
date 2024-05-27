const prisma = require("../prisma/prisma");
async function getOrders(args) {
    try {
        return prisma.taxi_orders.findMany({
            ...args
        });
    } catch (e) {
        return new Error(e);
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
		return new Error(e);
	}
}

async function createOrder(order) {
    try {
        return prisma.taxi_orders.create({
            data: order,
        });
    } catch (e) {
        return new Error(e);
    }
}

async function createOrderSent(taxi_order_id, driver) {
    try {
        return prisma.taxi_orders_sent.create({
            data: {
                taxi_order_id,
                driver_id: driver.driver_id,
                location: driver.location,
                accepted: false
            },
        });
    } catch (e) {
        return new Error(e);
    }
}
async function acceptOrder(taxi_order_id, driver_id, business_id) {
    try {
       
        await acceptOrderSent(taxi_order_id, driver_id);
        return prisma.taxi_orders.update({
            where: {
                taxi_order_id
            },
            data: {
                order_status: "DRIVER_ACCEPTED",
                driver_id,
                business_id
            },
        });
    } catch (e) {
        return new Error(e);
    }
}
async function acceptOrderSent(taxi_order_id, driver_id) {
    try {
        return prisma.taxi_orders_sent.create({
            where: {
                taxi_order_id,
                driver_id
            },
            data: {
                accepted: true
            },
        });
    } catch (e) {
        return new Error(e);
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
        return new Error(e);
    }
}
module.exports = {
    getOrder,
    createOrder,
    acceptOrder,
    createOrderSent,
    getOrders,
    getSentDrivers

};
