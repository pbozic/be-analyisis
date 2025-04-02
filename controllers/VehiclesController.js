require("dotenv").config();
const VehicleDao = require("../dao/Vehicle");

// List all vehicles
/**
 * GET /vehicles
 * @tag Vehicles
 * @summary List all vehicles
 * @description Retrieves a list of all vehicles in the database.
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 500 - Error fetching vehicles
 */
async function listVehicles(req, res) {
	try {
		const vehicles = await VehicleDao.getVehicles({});
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error listing all vehicles:", error);
		res.status(500).json({ message: "Error listing all vehicles", error: error.message });
	}
}

/**
 * GET /vehicles/business/:businessId
 * @tag Vehicles
 * @summary Get vehicles by business ID
 * @description Retrieves vehicles associated with a specific business ID.
 * @pathParam {string} businessId - The ID of the business
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 500 - Error fetching vehicles
 */
async function listVehiclesByBusiness(req, res) {
	const { businessId } = req.params;
	try {
		const vehicles = await VehicleDao.getVehiclesByBusiness(businessId);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error(`Error listing vehicles for business ${businessId}:`, error);
		res.status(500).json({ message: `Error listing vehicles for business ${businessId}`, error: error.message });
	}
}

/**
 * GET /vehicles/:vehicle_id
 * @tag Vehicles
 * @summary Get a vehicle by ID
 * @description Retrieves a single vehicle by its ID from the database.
 * @pathParam {string} vehicle_id - The ID of the vehicle to retrieve
 * @response 200 - Success
 * @responseContent {Vehicle} 200.application/json
 * @response 404 - Vehicle not found
 * @response 500 - Error fetching vehicle
 */
async function getVehicleById(req, res) {
	const { vehicle_id } = req.params;
	try {
		const vehicle = await VehicleDao.getVehicleById(vehicle_id, {});
		if (vehicle) {
			res.status(200).json(vehicle);
		} else {
			res.status(404).json({ message: "Vehicle not found" });
		}
	} catch (error) {
		console.error(`Error retrieving vehicle ${vehicle_id}:`, error);
		res.status(500).json({ message: `Error retrieving vehicle ${vehicle_id}`, error: error.message });
	}
}


/**
 * GET /vehicles/driver/:driver_id
 * @tag Vehicles
 * @summary Get vehicles by driver ID
 * @description Retrieves a list of vehicles assigned to a specific driver.
 * @pathParam {string} driver_id - The ID of the driver
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 400 - Error fetching vehicles for driver
 */
async function getVehiclesByDriverId(req, res) {
	const { driver_id } = req.params;
	try {
		const vehicles = await VehicleDao.getVehiclesByDriverId(driver_id);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error retrieving vehicles for driver:", error);
		res.status(400).json({ error: "Error retrieving vehicles for driver", detail: error.message });
	}
}

/**
 * GET /vehicles/class/:vehicleClass
 * @tag Vehicles
 * @summary Get vehicles by class
 * @description Retrieves a list of vehicles of a specific class.
 * @pathParam {string} vehicleClass - The class of the vehicles to retrieve
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 500 - Error fetching vehicles
 */
async function getVehiclesByClass(req, res) {
	const { vehicleClass } = req.params;
	try {
		const vehicles = await VehicleDao.getVehiclesByClass(vehicleClass);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error retrieving vehicles by class:", error);
		res.status(500).json({ message: "Error retrieving vehicles by class", error: error.message });
	}
}

/**
 * GET /vehicles/category/:vehicleCategory
 * @tag Vehicles
 * @summary Get vehicles by category
 * @description Retrieves a list of vehicles of a specific category.
 * @pathParam {string} vehicleCategory - The category of the vehicles to retrieve
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 500 - Error fetching vehicles
 */
async function getVehiclesByCategory(req, res) {
	const { vehicleCategory } = req.params;
	try {
		const vehicles = await VehicleDao.getVehiclesByCategory(vehicleCategory);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error retrieving vehicles by category:", error);
		res.status(500).json({ message: "Error retrieving vehicles by category", error: error.message });
	}
}

/**
 * GET /vehicles/class/:vehicleClass/category/:vehicleCategory
 * @tag Vehicles
 * @summary Get vehicles by class and category
 * @description Retrieves a list of vehicles of a specific class and category.
 * @pathParam {string} vehicleClass - The class of the vehicles
 * @pathParam {string} vehicleCategory - The category of the vehicles
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 500 - Error fetching vehicles
 */
async function getVehiclesByClassAndCategory(req, res) {
	const { vehicleClass, vehicleCategory } = req.params;
	try {
		const vehicles = await VehicleDao.getVehiclesByClassAndCategory(vehicleClass, vehicleCategory);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error retrieving vehicles by class and category:", error);
		res.status(500).json({ message: "Error retrieving vehicles by class and category", error: error.message });
	}
}

/**
 * GET /vehicles/driver/:driver_id/class/:vehicleClass
 * @tag Vehicles
 * @summary Get vehicles of a certain driver by class
 * @description Retrieves a list of vehicles of a specific class assigned to a specific driver.
 * @pathParam {string} driverId - The ID of the driver
 * @pathParam {string} vehicleClass - The class of the vehicles to retrieve
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 500 - Error fetching vehicles
 */
async function getVehiclesOfDriverByClass(req, res) {
	const { driverId, vehicleClass } = req.params;
	try {
		const vehicles = await VehicleDao.getVehiclesOfDriverByClass(driverId, vehicleClass);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error retrieving vehicles of driver by class:", error);
		res.status(500).json({ message: "Error retrieving vehicles of driver by class", error: error.message });
	}
}

/**
 * GET /vehicles/driver/:driver_id/category/:vehicleCategory
 * @tag Vehicles
 * @summary Get vehicles of a certain driver by category
 * @description Retrieves a list of vehicles of a specific category assigned to a specific driver.
 * @pathParam {string} driverId - The ID of the driver
 * @pathParam {string} vehicleCategory - The category of the vehicles to retrieve
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 500 - Error fetching vehicles
 */
async function getVehiclesOfDriverByCategory(req, res) {
	const { driverId, vehicleCategory } = req.params;
	try {
		const vehicles = await VehicleDao.getVehiclesOfDriverByCategory(driverId, vehicleCategory);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error retrieving vehicles of driver by category:", error);
		res.status(500).json({ message: "Error retrieving vehicles of driver by category", error: error.message });
	}
}

/**
 * GET /vehicles/driver/:driver_id/class/:vehicleClass/category/:vehicleCategory
 * @tag Vehicles
 * @summary Get vehicles of a certain driver by class and category
 * @description Retrieves a list of vehicles of a specific class and category assigned to a specific driver.
 * @pathParam {string} driverId - The ID of the driver
 * @pathParam {string} vehicleClass - The class of the vehicles
 * @pathParam {string} vehicleCategory - The category of the vehicles
 * @response 200 - Success
 * @responseContent {Vehicle[]} 200.application/json
 * @response 500 - Error fetching vehicles
 */
async function getVehiclesOfDriverByClassAndCategory(req, res) {
	const { driverId, vehicleClass, vehicleCategory } = req.params;
	try {
		const vehicles = await VehicleDao.getVehiclesOfDriverByClassAndCategory(driverId, vehicleClass, vehicleCategory);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error("Error retrieving vehicles of driver by class and category:", error);
		res.status(500).json({ message: "Error retrieving vehicles of driver by class and category", error: error.message });
	}
}

/**
 * POST /vehicles/create
 * @tag Vehicles
 * @summary Create a new vehicle
 * @description Adds a new vehicle to the database, including its specifications.
 * @operationId createNewVehicle
 * @bodyContent {Vehicle} application/json
 * @bodyRequired
 * @response 201 - Vehicle created successfully
 * @responseContent {Vehicle} 201.application/json
 * @response 400 - Error creating vehicle
 */
async function createVehicle(req, res) {
	try {
		const newVehicle = await VehicleDao.createNewVehicle(req.body);
		res.status(201).json(newVehicle);
	} catch (error) {
		console.error("Error creating new vehicle:", error);
		res.status(400).json({ error: "Error creating new vehicle", detail: error.message });
	}
}

/**
 * PATCH /vehicles/:vehicle_id
 * @tag Vehicles
 * @summary Update a vehicle
 * @description Updates an existing vehicle's details and specifications.
 * @operationId updateVehicle
 * @pathParam {string} vehicle_id - The ID of the vehicle to update
 * @bodyContent {VehicleUpdate} application/json
 * @bodyRequired
 * @response 200 - Vehicle updated successfully
 * @responseContent {Vehicle} 200.application/json
 * @response 400 - Error updating vehicle
 */
async function updateVehicle(req, res) {
	try {
		const updatedVehicle = await VehicleDao.updateVehicle(req.params.vehicle_id, req.body);
		res.status(200).json(updatedVehicle);
	} catch (error) {
		console.error("Error updating vehicle:", error);
		res.status(400).json({ error: "Error updating vehicle", detail: error.message });
	}
}

/**
 * POST /vehicles/driver/assign/
 * @tag Vehicles
 * @summary Assign a vehicle to a driver
 * @description Assigns an existing vehicle to a driver by updating the vehicle's driver_id.
 * @pathParam {string} vehicle_id - The ID of the vehicle to assign
 * @pathParam {string} driver_id - The ID of the driver to whom the vehicle is being assigned
 * @response 200 - Vehicle assigned successfully
 * @responseContent {Vehicle} 200.application/json
 * @response 400 - Error assigning vehicle to driver
 */
async function assignVehicleToDriver(req, res) {
	const { vehicle_id, driver_id } = req.body;
	try {
		const updatedVehicle = await VehicleDao.assignVehicleToDriver(vehicle_id, driver_id);
		res.status(200).json(updatedVehicle);
	} catch (error) {
		console.error("Error assigning vehicle to driver:", error);
		res.status(400).json({ error: "Error assigning vehicle to driver", detail: error.message });
	}
}

/**
 * PATCH /vehicles/driver/unassign/
 * @tag Vehicles
 * @summary Remove a vehicle from a driver
 * @description Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.
 * @pathParam {string} vehicle_id - The ID of the vehicle to disassociate
 * @response 200 - Vehicle disassociated successfully
 * @responseContent {Vehicle} 200.application/json
 * @response 400 - Error removing vehicle from driver
 */
async function removeVehicleFromDriver(req, res) {
	const { vehicle_id } = req.params;
	try {
		const updatedVehicle = await VehicleDao.removeVehicleFromDriver(vehicle_id);
		res.status(200).json(updatedVehicle);
	} catch (error) {
		console.error("Error removing vehicle from driver:", error);
		res.status(400).json({ error: "Error removing vehicle from driver", detail: error.message });
	}
}

/**
 * DELETE /vehicles/:vehicle_id
 * @tag Vehicles
 * @summary Delete a vehicle
 * @description Deletes a vehicle from the database.
 * @operationId deleteVehicle
 * @pathParam {string} vehicle_id - The ID of the vehicle to delete
 * @response 200 - Vehicle deleted successfully
 * @responseContent {object} 200.application/json { message: "Vehicle deleted successfully" }
 * @response 400 - Error deleting vehicle
 */
async function deleteVehicle(req, res) {
	try {
		await VehicleDao.deleteVehicle(req.params.vehicle_id);
		res.status(200).json({ message: "Vehicle deleted successfully" });
	} catch (error) {
		console.error("Error deleting vehicle:", error);
		res.status(400).json({ error: "Error deleting vehicle", detail: error.message });
	}
}



module.exports = {
	listVehicles,
	listVehiclesByBusiness,
	getVehicleById,
	getVehiclesByDriverId,
	getVehiclesOfDriverByClass,
	getVehiclesOfDriverByCategory,
	getVehiclesOfDriverByClassAndCategory,
	getVehiclesByClass,
	getVehiclesByCategory,
	getVehiclesByClassAndCategory,
	createVehicle,
	updateVehicle,
	assignVehicleToDriver,
	removeVehicleFromDriver,
	deleteVehicle,
};