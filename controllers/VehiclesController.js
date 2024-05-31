require("dotenv").config();
const VehicleDao = require("../dao/Vehicle");

/**
 * POST /vehicles
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
 * PATCH /vehicle
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
	createVehicle,
	updateVehicle,
	deleteVehicle,
};