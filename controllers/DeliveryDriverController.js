require("dotenv").config();

const DeliveryDriverDao = require("../dao/DeliveryDriver");
const UserDao = require("../dao/User");
const { UserSockets, io } = require('../socket');
const DeliveryOrderDao = require("../dao/DeliveryOrder");
const taxiHelpers = require("../lib/taxiHelpers");
const { resendPendingOrdersToDeliveryDriver } = require("../lib/deliveryHelpers");

/**
 * GET /delivery
 * @tag DeliveryDrivers
 * @summary Get a list of delivery drivers
 * @description Returns a list of delivery drivers along with their user and vehicle information.
 * @operationId getDeliveryDrivers
 * @response 200 - Successful operation, returns a list of delivery drivers
 * @responseContent {DeliveryDriver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the delivery driver list
 */
async function listDeliveryDrivers(req, res) {
	try {
		const deliveryDrivers = await DeliveryDriverDao.getDeliveryDrivers({});
		res.status(200).json(deliveryDrivers);
	} catch (error) {
		console.error("Error listing delivery drivers:", error);
		res.status(400).json({ error: "Error listing delivery drivers", detail: error.message });
	}
}

/**
 * GET /delivery/online
 * @tag DeliveryDrivers
 * @summary Get all online delivery drivers
 * @description Returns a list of all delivery drivers who are currently online.
 * @operationId getOnlineDeliveryDrivers
 * @response 200 - Successful operation, returns a list of online delivery drivers
 * @responseContent {DeliveryDriver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the online delivery driver list
 */
async function listOnlineDeliveryDrivers(req, res) {
	try {
		const onlineDeliveryDrivers = await DeliveryDriverDao.getOnlineDeliveryDrivers();
		res.status(200).json(onlineDeliveryDrivers);
	} catch (error) {
		console.error("Error listing online delivery drivers:", error);
		res.status(400).json({ error: "Error listing online delivery drivers", detail: error.message });
	}
}

/**
 * GET /delivery/available
 * @tag DeliveryDrivers
 * @summary Get all available delivery drivers
 * @description Returns a list of all delivery drivers who are currently available.
 * @operationId getAvailableDeliveryDrivers
 * @response 200 - Successful operation, returns a list of available delivery drivers
 * @responseContent {DeliveryDriver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the available delivery driver list
 */
async function getAvailableDeliveryDrivers(req, res) {
	try {
		const deliveryDrivers = await DeliveryDriverDao.getAvailableDeliveryDrivers();
		res.status(200).json(deliveryDrivers);
	} catch (error) {
		console.error("Error getting available delivery drivers:", error);
		res.status(400).json({ error: "Error getting available delivery drivers", detail: error.message });
	}
}

/**
 * GET /delivery/drivers/daily-meals
 * @tag DeliveryDrivers
 * @summary List all delivery drivers offering daily meals
 * @description Retrieves a list of all delivery drivers that offer daily meals.
 * @operationId listDeliveryDriversWithDailyMeals
 * @response 200 - Successful operation, returns a list of delivery drivers offering daily meals
 * @responseContent {DeliveryDriver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the delivery driver list
 */
async function listDeliveryDriversWithDailyMeals(req, res) {
    try {
        const deliveryDrivers = await DeliveryDriverDao.getDeliveryDrivers({
            where: { delivers_daily_meals: true }
        });
        res.status(200).json(deliveryDrivers);
    } catch (e) {
        console.error("Error listing delivery drivers with daily meals:", e);
        res.status(400).json({ error: "Error listing delivery drivers with daily meals", e });
    }
}

/**
 * GET /delivery/:delivery_driver_id
 * @tag DeliveryDrivers
 * @summary Get a delivery driver by ID
 * @description Retrieves detailed information about a specific delivery driver by their ID.
 * @operationId getDeliveryDriverById
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to retrieve
 * @response 200 - Successful operation, returns detailed delivery driver information
 * @responseContent {DeliveryDriver} 200.application/json
 * @response 404 - Delivery driver not found
 * @response 400 - Error retrieving delivery driver information
 */
async function getDeliveryDriverById(req, res) {
	try {
		const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverById(req.params.delivery_driver_id);
		if (deliveryDriver) {
			res.status(200).json(deliveryDriver);
		} else {
			res.status(404).json({ error: "Delivery driver not found by id" });
		}
	} catch (error) {
		console.error("Error retrieving delivery driver:", error);
		res.status(400).json({ error: "Error retrieving delivery driver information", detail: error.message });
	}
}

/**
 * GET /delivery_drivers/user/:user_id
 * @tag DeliveryDrivers
 * @summary Get a delivery driver by user ID
 * @description Retrieves detailed information about a specific delivery driver by their user ID.
 * @operationId getDeliveryDriverByUserId
 * @pathParam {string} user_id - The ID of the delivery driver to retrieve
 * @response 200 - Successful operation, returns detailed delivery driver information
 * @responseContent {DeliveryDriver} 200.application/json
 * @response 404 - Delivery driver not found
 * @response 400 - Error retrieving delivery driver information
 */
async function getDeliveryDriverByUserId(req, res) {
	try {
		const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverByUserId(req.params.user_id);
		if (deliveryDriver) {
			res.status(200).json(deliveryDriver);
		} else {
			res.status(404).json({ error: "Delivery driver not found by user_id" }, deliveryDriver);
		}
	} catch (error) {
		console.error("Error retrieving delivery driver:", error);
		res.status(400).json({ error: "Error retrieving delivery driver information", detail: error.message });
	}
}

/**
 * GET /delivery/:delivery_driver_id/location
 * @tag DeliveryDrivers
 * @summary Get delivery driver location
 * @description Retrieves the current location of a specific delivery driver.
 * @operationId getDeliveryDriverLocation
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver whose location is being retrieved
 * @response 200 - Successful operation, returns delivery driver's location
 * @responseContent {Location} 200.application/json
 * @response 404 - Delivery driver not found
 * @response 400 - Error retrieving delivery driver's location
 */
async function getDeliveryDriverLocation(req, res) {
	try {
		const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverLocation(req.params.delivery_driver_id);
		if (deliveryDriver) {
			if (deliveryDriver.location) {
				res.status(200).json(deliveryDriver.location);
			} else {
				res.status(404).json({ error: "Location for the specified delivery driver not found" });
			}
		} else {
			res.status(404).json({ error: "Delivery driver not found" });
		}
	} catch (error) {
		console.error("Error retrieving delivery driver's location:", error);
		res.status(400).json({ error: "Error retrieving delivery driver's location", detail: error.message });
	}
}

/**
 * PATCH /delivery/
 * @tag DeliveryDrivers
 * @summary Update a delivery driver
 * @description Updates information about a specific delivery driver, excluding location.
 * @operationId updateDeliveryDriver
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to update
 * @bodyContent {DeliveryDriverUpdate} application/json
 * @bodyRequired
 * @response 200 - Delivery driver updated successfully
 * @responseContent {DeliveryDriver} 200.application/json
 * @response 400 - Error updating delivery driver
 */
async function updateDeliveryDriver(req, res) {
	const { delivery_driver_id } = req.params;
	const updateData = req.body;
	console.log('update delivery timeline', updateData)

	try {
		const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriver(delivery_driver_id, updateData);
		res.status(200).json(updatedDeliveryDriver);
	} catch (error) {
		console.error("Error updating delivery driver:", error);
		res.status(400).json({ error: "Error updating delivery driver", detail: error.message });
	}
}

/**
 * PATCH /delivery/location
 * @tag DeliveryDrivers
 * @summary Update delivery driver location
 * @description Updates the location of a specific delivery driver.
 * @operationId updateDeliveryDriverLocation
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to update location for
 * @bodyContent {Location} application/json
 * @bodyRequired
 * @response 200 - Location updated successfully
 * @responseContent {DeliveryDriver} 200.application/json
 * @response 400 - Error updating delivery driver location
 */
async function updateDeliveryDriverLocation(req, res) {
	try {
		console.log(req.body, 'location, body')
		try {
			const userId = req.user.user_id;
			const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverByUserId(userId);
			const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriverLocation(deliveryDriver.delivery_driver_id, req.body.location);

			// Emit the delivery driver's updated location to each order's specific channel
			const orders = await DeliveryOrderDao.getOrdersByDeliveryDriverId(deliveryDriver.delivery_driver_id);
			for (let order of orders) {
				try {
					io.to(`order_${order.order_id}`).emit("driver_location_delivery", {
						...deliveryDriver,
						delivery_driver_id: deliveryDriver.delivery_driver_id,
						location: req.body.location
					});
				} catch (error) {
					console.error("Error emitting delivery driver's location to connected users:", error);
				}
			}
			if (orders.length === 0) {
				io.emit("driver_location_delivery", {
					...deliveryDriver,
					delivery_driver_id: deliveryDriver.delivery_driver_id,
					location: req.body.location
				});
			}

			res.status(200).json(updatedDeliveryDriver);
		} catch (error) {
			console.error("Error updating delivery driver's location:", error);
		}

	} catch (error) {
		console.error("Error updating delivery driver's location:", error);
		res.status(400).json({ error: "Error updating delivery driver location", detail: error.message });
	}
}

/**
 * PATCH /delivery/online
 * @tag DeliveryDrivers
 * @summary Set delivery driver online status
 * @description Sets the online status of a specific delivery driver and emits appropriate socket events.
 * @operationId setDeliveryDriverOnlineStatus
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to update the online status for
 * @bodyContent {DeliveryDriverOnlineStatus} application/json
 * @bodyRequired
 * @response 200 - Online status updated successfully
 * @responseContent {DeliveryDriver} 200.application/json
 * @response 400 - Error updating online status
 *
 * Emits:
 * - "driver_available" event with delivery driver object if online is true
 * - "driver_unavailable" event with delivery_driver_id if online is false
 */
async function updateDeliveryDriverOnlineStatus(req, res) {
	const { delivery_driver_id, online } = req.body;

	try {
		const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriverOnlineStatus(delivery_driver_id, online);
		console.info('updatedDeliveryDriver', updatedDeliveryDriver.online)

		if (online) {
			io.emit("driver_available", updatedDeliveryDriver);
			await resendPendingOrdersToDeliveryDriver(updatedDeliveryDriver);
		} else {
			io.emit("driver_unavailable", delivery_driver_id);
		}
		res.status(200).json(updatedDeliveryDriver);
	} catch (error) {
		console.error("Error setting online status for delivery driver:", error);
		res.status(400).json({ error: "Error setting online status for delivery driver", detail: error.message });
	}
}

/**
 * POST /delivery/create
 * @tag DeliveryDrivers
 * @summary Create a new delivery driver
 * @description Adds a new delivery driver to the database.
 * @operationId createNewDeliveryDriver
 * @bodyContent {DeliveryDriver} application/json
 * @bodyRequired
 * @response 201 - Delivery driver created successfully
 * @responseContent {DeliveryDriver} 201.application/json
 * @response 400 - Error creating delivery driver
 */
async function createDeliveryDriver(req, res) {
	try {
		const userData = req.body.user;
		const driverData = req.body.driver;

		const driverCreated = await DeliveryDriverDao.createDeliveryDriver(driverData, userData);
		if (!driverCreated) {
			return res.status(400).json({ error: "Failed to create new delivery driver" });
		}

		res.status(201).json(driverCreated);
	} catch (error) {
		console.error("Error creating new delivery driver:", error);
		res.status(400).json({ error: "Error creating new delivery driver", detail: error.message });
	}
}

module.exports = {
	createDeliveryDriver
};


module.exports = {
	listDeliveryDrivers,
	listOnlineDeliveryDrivers,
	listDeliveryDriversWithDailyMeals,
	getDeliveryDriverById,
	getDeliveryDriverLocation,
	updateDeliveryDriver,
	updateDeliveryDriverLocation,
	updateDeliveryDriverOnlineStatus,
	createDeliveryDriver,
	getAvailableDeliveryDrivers,
	getDeliveryDriverByUserId
};