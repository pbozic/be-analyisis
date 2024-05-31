require("dotenv").config();

const DriverDao = require("../dao/Driver");
const VehicleDao = require("../dao/Vehicle");

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
 * POST /drivers
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
		const newDriver = await DriverDao.createNewDriver(req.body);
		res.status(201).json(newDriver);
	} catch (error) {
		console.error("Error creating new driver:", error);
		res.status(400).json({ error: "Error creating new driver", detail: error.message });
	}
}

/**
 * PATCH /drivers/:driver_id/location
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
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error("Error updating driver's location:", error);
		res.status(400).json({ error: "Error updating driver location", detail: error.message });
	}
}

/**
 * GET /drivers/:driver_id/vehicles
 * @tag Drivers
 * @summary Get all vehicles for a driver
 * @description Retrieves a list of vehicles assigned to a specific driver, including vehicle specifications.
 * @operationId getVehiclesByDriverId
 * @pathParam {string} driver_id - The ID of the driver
 * @response 200 - Successful operation, returns a list of vehicles
 * @responseContent {Vehicle[]} 200.application/json
 * @response 400 - Error retrieving vehicles for the driver
 */
async function getVehiclesByDriverId(req, res) {
	try {
		const vehicles = await VehicleDao.getVehiclesByDriverId(req.params.driver_id);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error retrieving vehicles for driver:", error);
		res.status(400).json({ error: "Error retrieving vehicles for the driver", detail: error.message });
	}
}

/**
 * PATCH /vehicles/assign-driver
 * @tag Vehicles
 * @summary Assign a vehicle to a driver
 * @description Assigns a specific vehicle to a driver by their IDs.
 * @operationId assignVehicleToDriver
 * @pathParam {string} vehicle_id - The ID of the vehicle to be assigned
 * @pathParam {string} driver_id - The ID of the driver to whom the vehicle will be assigned
 * @response 200 - Vehicle assigned successfully
 * @responseContent {Vehicle} 200.application/json
 * @response 400 - Error assigning vehicle to driver
 */
async function assignVehicleToDriver(req, res) {
	try {
		const updatedVehicle = await VehicleDao.assignVehicleToDriver(req.params.vehicle_id, req.params.driver_id);
		res.status(200).json(updatedVehicle);
	} catch (error) {
		console.error("Error assigning vehicle to driver:", error);
		res.status(400).json({ error: "Error assigning vehicle to driver", detail: error.message });
	}
}

/**
 * PATCH /vehicles/unassign-driver
 * @tag Vehicles
 * @summary Unassign a vehicle from any driver
 * @description Unassigns a specific vehicle from any driver it is currently assigned to.
 * @operationId removeVehicleFromDriver
 * @pathParam {string} vehicle_id - The ID of the vehicle to be unassigned
 * @response 200 - Vehicle unassigned successfully
 * @responseContent {Vehicle} 200.application/json
 * @response 400 - Error unassigning vehicle from driver
 */
async function unassignVehicleFromDriver(req, res) {
	try {
		const updatedVehicle = await VehicleDao.removeVehicleFromDriver(req.params.vehicle_id);
		res.status(200).json(updatedVehicle);
	} catch (error) {
		console.error("Error unassigning vehicle from driver:", error);
		res.status(400).json({ error: "Error unassigning vehicle from driver", detail: error.message });
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

//TODO: Implement the following functions
// driverStartWorking - emits a "driver_available" event with driver object and updates driver.is_active to true
// driverStopWorking - emits a "driver_unavailable" event with driver_id and updates driver.is_active to false

module.exports = {
	listDrivers,
	getDriverById,
	getDriverLocation,
	createDriver,
	updateDriverLocation,
	getVehiclesByDriverId,
	assignVehicleToDriver,
	unassignVehicleFromDriver,
};