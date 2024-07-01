require("dotenv").config();

const DriverDao = require("../dao/Driver");
const VehicleDao = require("../dao/Vehicle");
const UserDao = require("../dao/User");
const { UserSockets, io } = require('../socket');
const TaxiOrderDao = require("../dao/TaxiOrder");

/**
 * GET /drivers
 * @tag Drivers
 * @summary Get a list of drivers
 * @description Returns a list of drivers along with their user and vehicle information.
 * @operationId getDrivers
 * @response 200 - Successful operation, returns a list of drivers
 * @responseContent {Driver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the driver list
 */
async function listDrivers(req, res) {
	try {
		const drivers = await DriverDao.getDrivers({});
		res.status(200).json(drivers);
	} catch (error) {
		console.error("Error listing drivers:", error);
		res.status(400).json({ error: "Error listing drivers", detail: error.message });
	}
}

/**
 * GET /drivers/online
 * @tag Drivers
 * @summary Get all online drivers
 * @description Returns a list of all drivers who are currently online.
 * @operationId getOnlineDrivers
 * @response 200 - Successful operation, returns a list of online drivers
 * @responseContent {Driver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the online driver list
 */
async function listOnlineDrivers(req, res) {
	try {
		const onlineDrivers = await DriverDao.getOnlineDrivers();
		res.status(200).json(onlineDrivers);
	} catch (error) {
		console.error("Error listing online drivers:", error);
		res.status(400).json({ error: "Error listing online drivers", detail: error.message });
	}
}

async function getAvailableDrivers(req, res) {
	try {
		const drivers = await DriverDao.getAvailableDrivers();
		res.status(200).json(drivers);
	} catch (error) {
		console.error("Error getting available drivers:", error);
		res.status(400).json({ error: "Error getting available drivers", detail: error.message });
	}
}

/**
 * GET /drivers/:driver_id
 * @tag Drivers
 * @summary Get a driver by ID
 * @description Retrieves detailed information about a specific driver by their ID.
 * @operationId getDriverById
 * @pathParam {string} driver_id - The ID of the driver to retrieve
 * @response 200 - Successful operation, returns detailed driver information
 * @responseContent {Driver} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving driver information
 */
async function getDriverById(req, res) {
	try {
		const driver = await DriverDao.getDriverById(req.params.driver_id);
		if (driver) {
			res.status(200).json(driver);
		} else {
			res.status(404).json({ error: "Driver not found" });
		}
	} catch (error) {
		console.error("Error retrieving driver:", error);
		res.status(400).json({ error: "Error retrieving driver information", detail: error.message });
	}
}

/**
 * GET /drivers/:driver_id/location
 * @tag Drivers
 * @summary Get driver location
 * @description Retrieves the current location of a specific driver.
 * @operationId getDriverLocation
 * @pathParam {string} driver_id - The ID of the driver whose location is being retrieved
 * @response 200 - Successful operation, returns driver's location
 * @responseContent {Location} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving driver's location
 */
async function getDriverLocation(req, res) {
	try {
		const driver = await DriverDao.getDriverLocation(req.params.driver_id);
		if (driver) {
			if (driver.location) {
				res.status(200).json(driver.location);
			} else {
				res.status(404).json({ error: "Location for the specified driver not found" });
			}
		} else {
			res.status(404).json({ error: "Driver not found" });
		}
	} catch (error) {
		console.error("Error retrieving driver's location:", error);
		res.status(400).json({ error: "Error retrieving driver's location", detail: error.message });
	}
}

/**
 * PATCH /drivers/
 * @tag Drivers
 * @summary Update a driver
 * @description Updates information about a specific driver, excluding location.
 * @operationId updateDriver
 * @pathParam {string} driver_id - The ID of the driver to update
 * @bodyContent {DriverUpdate} application/json
 * @bodyRequired
 * @response 200 - Driver updated successfully
 * @responseContent {Driver} 200.application/json
 * @response 400 - Error updating driver
 */
async function updateDriver(req, res) {
	const { driver_id } = req.params;
	const updateData = req.body;

	try {
		const updatedDriver = await DriverDao.updateDriver(driver_id, updateData);
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error("Error updating driver:", error);
		res.status(400).json({ error: "Error updating driver", detail: error.message });
	}
}

/**
 * PATCH /drivers/location
 * @tag Drivers
 * @summary Update driver location
 * @description Updates the location of a specific driver.
 * @operationId updateDriverLocation
 * @pathParam {string} driver_id - The ID of the driver to update location for
 * @bodyContent {Location} application/json
 * @bodyRequired
 * @response 200 - Location updated successfully
 * @responseContent {Driver} 200.application/json
 * @response 400 - Error updating driver location
 */
async function updateDriverLocation(req, res) {
	try {
		const updatedDriver = await DriverDao.updateDriverLocation(req.params.driver_id, req.body);

		try {
			const userId = req.user.user_id;
			const driver = await DriverDao.getDriverByUserId(userId);
			await DriverDao.updateDriverLocation(driver.driver_id, req.body);

			// Emit the driver's updated location to each order's specific channel
			const orders = await TaxiOrderDao.getOrdersByDriverId(driver.driver_id);
			for (let order of orders) {
				try {
					io.to(`order_${order.order_id}`).emit("driver_location", {
						driver_id: driver.driver_id,
						location: location
					});
				} catch (error) {
					console.error("Error emiting driver's location to connected users:", error);
				}
			}
			if (orders.length === 0) {
				io.emit("driver_location", {
					driver_id: driver.driver_id,
					location: location
				});
			}
		} catch (error) {
			console.error("Error updating driver's location:", error);
		}

		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error("Error updating driver's location:", error);
		res.status(400).json({ error: "Error updating driver location", detail: error.message });
	}
}

/**
 * PATCH /drivers/ride_requirements
 * @tag Drivers
 * @summary Updates the driver's ride requirements
 * @description This endpoint is used to update the current user's ride requirements.
 * @operationId updateDriverRideRequirements
 * @bodyDescription The new ride requirements of the driver.
 * @bodyContent {updateDriverRideRequirementsRequest} application/json
 * @bodyRequired
 * @response 200 - Ride requirements updated successfully. Returns the updated driver's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateDriverRideRequirements(req, res) {
	try {
		let driver = await DriverDao.updateDriverRideRequirements(req.body.driver_id, req.body.ride_requirements);
		if (driver) return res.status(200).json(driver);
		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /drivers/online
 * @tag Drivers
 * @summary Set driver online status
 * @description Sets the online status of a specific driver and emits appropriate socket events.
 * @operationId setDriverOnlineStatus
 * @pathParam {string} driver_id - The ID of the driver to update the online status for
 * @bodyContent {DriverOnlineStatus} application/json
 * @bodyRequired
 * @response 200 - Online status updated successfully
 * @responseContent {Driver} 200.application/json
 * @response 400 - Error updating online status
 *
 * Emits:
 * - "driver_available" event with driver object if online is true
 * - "driver_unavailable" event with driver_id if online is false
 */
async function updateDriverOnlineStatus(req, res) {
	const { driver_id, online } = req.body;

	try {
		const updatedDriver = await DriverDao.updateDriverOnlineStatus(driver_id, online);

		if (online) {
			io.emit("driver_available", updatedDriver);
		} else {
			io.emit("driver_unavailable", driver_id);
		}
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error("Error setting online status for driver:", error);
		res.status(400).json({ error: "Error setting online status for driver", detail: error.message });
	}
}


/**
 * POST /drivers/create
 * @tag Drivers
 * @summary Create a new driver
 * @description Adds a new driver to the database.
 * @operationId createNewDriver
 * @bodyContent {Driver} application/json
 * @bodyRequired
 * @response 201 - Driver created successfully
 * @responseContent {Driver} 201.application/json
 * @response 400 - Error creating driver
 */
async function createDriver(req, res) {
	try {
		const userData = req.body.user;
		const driverData = req.body.driver;

		const driverCreated = await DriverDao.createNewDriver(driverData, userData);
		if (!driverCreated) {
			return res.status(400).json({ error: "Failed to create new driver" });
		}

		res.status(201).json(driverCreated);
	} catch (error) {
		console.error("Error creating new driver:", error);
		res.status(400).json({ error: "Error creating new driver", detail: error.message });
	}
}

module.exports = {
	listDrivers,
	listOnlineDrivers,
	getDriverById,
	getDriverLocation,
	updateDriver,
	updateDriverLocation,
	updateDriverOnlineStatus,
	createDriver,
	getAvailableDrivers,
	updateDriverRideRequirements
};