require("dotenv").config();

const DeliveryDriverDao = require("../dao/DeliveryDriver");
const VehicleDao = require("../dao/Vehicle");
const UserDao = require("../dao/User");

/**
 * GET /delivery
 * @tag DeliveryDrivers
 * @summary Get a list of delivery driver
 * @description Returns a list of delivery driver along with their user and vehicle information.
 * @operationId getDeliveryDrivers
 * @response 200 - Successful operation, returns a list of delivery driver
 * @responseContent {DeliveryDriver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the delivery driver list
 */
async function listDeliveryDrivers(req, res) {
	try {
		const deliveryDrivers = await DeliveryDriverDao.getDeliveryDrivers({});
		res.status(200).json(deliveryDrivers);
	} catch (error) {
		console.error("Error listing delivery driver:", error);
		res.status(400).json({ error: "Error listing delivery driver", detail: error.message });
	}
}

/**
 * GET /delivery/online
 * @tag DeliveryDrivers
 * @summary Get all online delivery driver
 * @description Returns a list of all delivery driver who are currently online.
 * @operationId getOnlineDeliveryDrivers
 * @response 200 - Successful operation, returns a list of online delivery driver
 * @responseContent {DeliveryDriver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the online delivery driver list
 */
async function listOnlineDeliveryDrivers(req, res) {
	try {
		const onlineDeliveryDrivers = await DeliveryDriverDao.getOnlineDeliveryDrivers();
		res.status(200).json(onlineDeliveryDrivers);
	} catch (error) {
		console.error("Error listing online delivery driver:", error);
		res.status(400).json({ error: "Error listing online delivery driver", detail: error.message });
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
			res.status(404).json({ error: "Delivery driver not found" });
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
* POST /delivery/:delivery_driver_id
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

	try {
		const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriver(delivery_driver_id, updateData);
		res.status(200).json(updatedDeliveryDriver);
	} catch (error) {
		console.error("Error updating delivery driver:", error);
		res.status(400).json({ error: "Error updating delivery driver", detail: error.message });
	}
}

/**
 * PATCH /delivery/:delivery_driver_id/location
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
		const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriverLocation(req.params.delivery_driver_id, req.body);
		res.status(200).json(updatedDeliveryDriver);
	} catch (error) {
		console.error("Error updating delivery driver's location:", error);
		res.status(400).json({ error: "Error updating delivery driver location", detail: error.message });
	}
}

/**
 * PATCH /delivery/:delivery_driver_id/online
 * @tag DeliveryDrivers
 * @summary Set delivery driver online status
 * @description Sets the online status of a specific delivery driver.
 * @operationId setDeliveryDriverOnlineStatus
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to update the online status for
 * @bodyContent {DeliveryDriverOnlineStatus} application/json
 * @bodyRequired
 * @response 200 - Online status updated successfully
 * @responseContent {DeliveryDriver} 200.application/json
 * @response 400 - Error updating online status
 */
async function updateDeliveryDriverOnlineStatus(req, res) {
	const { delivery_driver_id } = req.params;
	const { online } = req.body; // Assuming `online` is a boolean

	try {
		const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriverOnlineStatus(delivery_driver_id, online);
		res.status(200).json(updatedDeliveryDriver);
	} catch (error) {
		console.error("Error setting online status for delivery driver:", error);
		res.status(400).json({ error: "Error setting online status for delivery driver", detail: error.message });
	}
}

/**
 * POST /delivery
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
		const { user: userData, driver: driverData } = req.body;

		const newDeliveryDriver = await DeliveryDriverDao.createNewDeliveryDriver(driverData, userData);
		if (!newDeliveryDriver) {
			return res.status(400).json({ error: "Failed to create new delivery driver" });
		}
		res.status(201).json(newDeliveryDriver);
	} catch (error) {
		console.error("Error creating new delivery driver:", error);
		res.status(400).json({ error: "Error creating new delivery driver", detail: error.message });
	}
}

module.exports = {
	listDeliveryDrivers,
	listOnlineDeliveryDrivers,
	getDeliveryDriverById,
	getDeliveryDriverLocation,
	updateDeliveryDriver,
	updateDeliveryDriverLocation,
	updateDeliveryDriverOnlineStatus,
	createDeliveryDriver,
};