import { config } from 'dotenv';

import prisma from '../prisma/prisma.js';
import VehicleDao from '../dao/Vehicle.js';
import DocumentDao from '../dao/Document.js';
import FileDao from '../dao/File.js';
import S3Helper from '../lib/s3.js';
import { updateDocumentByDocumentId } from '../dao/Document.js';
import { addFileToDocument } from '../dao/File.js';
config();
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
		console.error('Error listing all vehicles:', error);
		res.status(500).json({ message: 'Error listing all vehicles', error: error.message });
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
			res.status(404).json({ message: 'Vehicle not found' });
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
		console.error('Error retrieving vehicles for driver:', error);
		res.status(400).json({ error: 'Error retrieving vehicles for driver', detail: error.message });
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
		console.error('Error retrieving vehicles by class:', error);
		res.status(500).json({ message: 'Error retrieving vehicles by class', error: error.message });
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
		console.error('Error retrieving vehicles by category:', error);
		res.status(500).json({ message: 'Error retrieving vehicles by category', error: error.message });
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
		console.error('Error retrieving vehicles by class and category:', error);
		res.status(500).json({ message: 'Error retrieving vehicles by class and category', error: error.message });
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
		console.error('Error retrieving vehicles of driver by class:', error);
		res.status(500).json({ message: 'Error retrieving vehicles of driver by class', error: error.message });
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
		console.error('Error retrieving vehicles of driver by category:', error);
		res.status(500).json({ message: 'Error retrieving vehicles of driver by category', error: error.message });
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
		const vehicles = await VehicleDao.getVehiclesOfDriverByClassAndCategory(
			driverId,
			vehicleClass,
			vehicleCategory
		);
		res.status(200).json(vehicles);
	} catch (error) {
		console.error('Error retrieving vehicles of driver by class and category:', error);
		res.status(500).json({
			message: 'Error retrieving vehicles of driver by class and category',
			error: error.message,
		});
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
		const vehicle = await VehicleDao.createNewVehicle(req.body.vehicle_information);
		if (vehicle) {
			if (Array.isArray(req.body.drivers) && req.body.drivers.length) {
				for (const d of req.body.drivers) {
					await VehicleDao.assignVehicleToDriver(vehicle.vehicle_id, d.driver_id);
				}
				// 	TODO: maybe assign to all drivers of business if none selected
				// } else {
				// 	const drivers = await DriverDao.getDrivers({ where: { business_id: vehicle.business_id } });
				// 	for (const d of drivers) {
				// 		await VehicleDao.assignVehicleToDriver(vehicle.vehicle_id, d.driver_id)
				// 	}
			}
			if (req.body.documents) {
				for (const doc of req.body.documents) {
					const document = await DocumentDao.createDocument(doc.documentData);
					for (const file of doc.files) {
						let base64 = file.base64;
						delete file.base64;
						delete file.name;
						delete file.document_type;
						let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
						let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
						S3Helper.SaveObject(
							key,
							base64,
							file.mime_type,
							{
								users: [],
								businesses: [vehicle.business_id],
							},
							fileData,
							document.public
						);
					}
					await DocumentDao.linkDocumentToVehicle(document.document_id, vehicle.vehicle_id);
				}
			}
			res.status(200).json(vehicle);
		} else {
			res.status(400).json({ error: 'Error creating new vehicle' });
		}
	} catch (error) {
		console.error('Error creating new vehicle:', error);
		res.status(400).json({ error: error.message });
	}
}
/**
 * PATCH /vehicles
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
	const vehicle_id = req.body.vehicle_id;
	try {
		const vehicle = await VehicleDao.updateVehicle(vehicle_id, req.body.vehicle_information);
		if (vehicle) {
			if (req.body.documents && req.body.documents.length > 0) {
				for (const doc of req.body.documents) {
					const documentId = doc.document_id;
					const updatedDoc = await updateDocumentByDocumentId(documentId, doc.documentData);
					for (const file of doc.files) {
						if (updatedDoc.document_id !== file.document_id) {
							const base64 = file.base64;
							delete file.base64;
							delete file.document_type;
							delete file.name;
							const newFile = await addFileToDocument(updatedDoc.document_id, file, updatedDoc.public);
							const key = S3Helper.getFileKey(newFile.file_id, file.mime_type);
							await S3Helper.SaveObject(
								key,
								base64,
								file.mime_type,
								{
									users: [],
									businesses: [vehicle.business_id],
								},
								newFile,
								updatedDoc.public
							);
						}
					}
				}
			}
			if (Array.isArray(req.body.drivers) && req.body.drivers.length) {
				const currentDrivers = await VehicleDao.getVehicleDriversByVehicleId(vehicle_id);
				const currentDriverIds = currentDrivers.map((d) => d.driver_id);
				const newDriverIds = req.body.drivers.map((d) => d.driver_id);
				await VehicleDao.unAssignVehicleFromDrivers(vehicle_id, newDriverIds);
				for (const driver of req.body.drivers) {
					if (!currentDriverIds.includes(driver.driver_id)) {
						await VehicleDao.assignVehicleToDriver(vehicle_id, driver.driver_id);
					}
				}
			}
			res.status(200).json(vehicle);
		} else {
			res.status(400).json({ error: 'Error updating vehicle' });
		}
	} catch (error) {
		console.error('Error updating vehicle:', error);
		res.status(400).json({ error: error.message });
	}
}
/**
 * POST /vehicles/driver/assign/
 * @tag Vehicles
 * @summary Assign vehicles to a driver
 * @description Assigns existing vehicles to a driver by creating a vehicle_drivers entry.
 * @bodyContent {array} vehicles - The vehicles to assign
 * @bodyContent {string} driver_id - The ID of the driver to whom the vehicle is being assigned
 * @response 200 - Vehicle assigned successfully
 * @responseContent {Vehicle} 200.application/json
 * @response 400 - Error assigning vehicles to driver
 */
async function assignVehiclesToDriver(req, res) {
	const { vehicles, driver_id } = req.body;
	try {
		if (Array.isArray(vehicles) && vehicles.length > 0) {
			for (const vehicle of vehicles) {
				const existingAssignment = await prisma.vehicle_drivers.findFirst({
					where: {
						vehicle_id: vehicle.vehicle_id,
						driver_id: driver_id,
						can_drive: true,
					},
				});
				if (!existingAssignment) {
					const updatedVehicle = await VehicleDao.assignVehicleToDriver(vehicle.vehicle_id, driver_id);
					if (!updatedVehicle) {
						console.error(`Error assigning vehicle ${vehicle.vehicle_id} to driver ${driver_id}`);
					}
				}
			}
		} else {
			return res.status(400).json({ error: 'Vehicles should be a non-empty array' });
		}
		res.status(200).json({ message: 'Vehicles assigned successfully' });
	} catch (err) {
		console.error('Error assigning vehicles to driver:', err);
		res.status(500).json({ error: 'Error assigning vehicles to driver', err });
	}
}
/**
 * PATCH /vehicles/driver/unassign/
 * @tag Vehicles
 * @summary Remove vehicles from a driver
 * @description Disassociates vehicles from its assigned driver by setting the vehicle's can_drive to false.
 * @bodyContent {array} vehicles - The vehicles to unassign
 * @bodyContent {string} driver_id - The ID of the driver to unassign
 * @response 200 - Vehicle disassociated successfully
 * @responseContent {Vehicle} 200.application/json
 * @response 400 - Error removing vehicle from driver
 */
async function removeVehiclesFromDriver(req, res) {
	const { vehicles, driver_id } = req.body;
	try {
		if (Array.isArray(vehicles) && vehicles.length > 0) {
			for (const vehicle of vehicles) {
				const updatedVehicle = await VehicleDao.removeVehicleFromDriver(vehicle.vehicle_id, driver_id);
				if (!updatedVehicle) {
					console.error(`Error removing vehicle ${vehicle.vehicle_id} from driver ${driver_id}`);
				}
			}
		} else {
			return res.status(400).json({ error: 'Vehicles should be a non-empty array' });
		}
		res.status(200).json({ message: 'Vehicles removed successfully' });
	} catch (err) {
		console.error('Error removing vehicle from driver:', err);
		res.status(500).json({ error: 'Error removing vehicle from driver', err });
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
		res.status(200).json({ message: 'Vehicle deleted successfully' });
	} catch (error) {
		console.error('Error deleting vehicle:', error);
		res.status(400).json({ error: 'Error deleting vehicle', detail: error.message });
	}
}
export { listVehicles };
export { listVehiclesByBusiness };
export { getVehicleById };
export { getVehiclesByDriverId };
export { getVehiclesOfDriverByClass };
export { getVehiclesOfDriverByCategory };
export { getVehiclesOfDriverByClassAndCategory };
export { getVehiclesByClass };
export { getVehiclesByCategory };
export { getVehiclesByClassAndCategory };
export { createVehicle };
export { updateVehicle };
export { assignVehiclesToDriver };
export { removeVehiclesFromDriver };
export { deleteVehicle };
export default {
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
	assignVehiclesToDriver,
	removeVehiclesFromDriver,
	deleteVehicle,
};
