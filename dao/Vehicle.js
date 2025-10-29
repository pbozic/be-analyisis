import prisma from '../prisma/prisma.js';
/**
 * Get all vehicles with optional Prisma args and includes.
 *
 * @param {object} args - Additional Prisma findMany args.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehicles = async (args) => {
	try {
		return await prisma.vehicles.findMany({
			...args,
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles:', error);
		throw new Error(error);
	}
};
/**
 * Get all vehicles belonging to a business with driver names and documents.
 *
 * @param {string} businessId - Business ID.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehiclesByBusiness = async (businessId) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				business_id: businessId,
			},
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: {
									select: {
										first_name: true,
										last_name: true,
									},
								},
							},
						},
					},
				},
				documents: {
					include: {
						files: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles by business:', error);
		throw new Error(error);
	}
};
/**
 * Get a vehicle by ID with drivers, current_driver, and documents; allows extra args to override includes.
 *
 * @param {string} vehicle_id - Vehicle ID.
 * @param {object} args - Optional Prisma args to merge.
 * @returns {Promise<object|null>} Vehicle or null.
 */
const getVehicleById = async (vehicle_id, args) => {
	try {
		return await prisma.vehicles.findUnique({
			where: {
				vehicle_id: vehicle_id,
			},
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: {
									select: {
										first_name: true,
										last_name: true,
									},
								},
							},
						},
					},
				},
				current_driver: true,
				documents: {
					include: {
						files: true,
					},
				},
			},
			...args,
		});
	} catch (error) {
		console.error('Error retrieving vehicle:', error);
		throw new Error(error);
	}
};
/**
 * Create a new vehicle.
 *
 * @param {object} vehicle - Vehicle payload to create.
 * @returns {Promise<object>} Created vehicle.
 */
const createNewVehicle = async (vehicle) => {
	try {
		return await prisma.vehicles.create({
			data: vehicle,
		});
	} catch (error) {
		console.error('Error creating new vehicle:', error);
		throw new Error(error);
	}
};
/**
 * Update a vehicle by ID.
 *
 * @param {string} vehicle_id - Vehicle ID.
 * @param {object} vehicleData - Fields to update.
 * @returns {Promise<object>} Updated vehicle.
 */
const updateVehicle = async (vehicle_id, vehicleData) => {
	try {
		return await prisma.vehicles.update({
			where: { vehicle_id },
			data: vehicleData,
		});
	} catch (error) {
		console.error('Error updating vehicle:', error);
		throw new Error(error);
	}
};
/**
 * Get the driver IDs linked to a vehicle.
 *
 * @param {string} vehicle_id - Vehicle ID.
 * @returns {Promise<{driver_id:string}[]>} Array of driver_id objects.
 */
const getVehicleDriversByVehicleId = async (vehicle_id) => {
	return await prisma.vehicle_drivers.findMany({
		where: {
			vehicle_id: vehicle_id,
		},
		select: {
			driver_id: true,
		},
	});
};
/**
 * Remove driver links for a vehicle that are not present in the newDriverIds list.
 *
 * @param {string} vehicle_id - Vehicle ID.
 * @param {string[]} newDriverIds - Driver IDs to keep.
 * @returns {Promise<void>} Resolves when done.
 */
const unAssignVehicleFromDrivers = async (vehicle_id, newDriverIds) => {
	await prisma.vehicle_drivers.deleteMany({
		where: {
			vehicle_id: vehicle_id,
			driver_id: {
				notIn: newDriverIds,
			},
		},
	});
};
/**
 * Upsert the relation linking a vehicle and a driver with can_drive=true.
 *
 * @param {string} vehicleId - Vehicle ID.
 * @param {string} driverId - Driver ID.
 * @returns {Promise<object>} Upserted vehicle_drivers record.
 */
const assignVehicleToDriver = async (vehicleId, driverId) => {
	try {
		return await prisma.vehicle_drivers.upsert({
			where: {
				vehicle_id_driver_id: {
					vehicle_id: vehicleId,
					driver_id: driverId,
				},
			},
			update: {
				can_drive: true,
			},
			create: {
				driver: {
					connect: {
						driver_id: driverId,
					},
				},
				vehicle: {
					connect: {
						vehicle_id: vehicleId,
					},
				},
				can_drive: true,
			},
		});
	} catch (error) {
		console.error('Error assigning vehicle to driver:', error);
		throw new Error(error);
	}
};
/**
 * Connect a vehicle to a delivery driver (delivery_driver_id).
 *
 * @param {string} vehicleId - Vehicle ID.
 * @param {string} driverId - Delivery driver ID.
 * @returns {Promise<object>} Updated vehicle.
 */
const assignVehicleToDeliveryDriver = async (vehicleId, driverId) => {
	try {
		return await prisma.vehicles.update({
			where: { vehicle_id: vehicleId },
			data: {
				delivery_driver: {
					connect: {
						delivery_driver_id: driverId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error assigning vehicle to delivery driver:', error);
		throw new Error(error);
	}
};
/**
 * Mark a vehicle-driver relation as cannot drive (can_drive=false).
 *
 * @param {string} vehicleId - Vehicle ID.
 * @param {string} driverId - Driver ID.
 * @returns {Promise<object>} Updated vehicle_drivers record.
 */
const removeVehicleFromDriver = async (vehicleId, driverId) => {
	try {
		return await prisma.vehicle_drivers.update({
			where: {
				vehicle_id_driver_id: {
					vehicle_id: vehicleId,
					driver_id: driverId,
				},
			},
			data: {
				can_drive: false,
			},
		});
	} catch (error) {
		console.error('Error removing vehicle from driver:', error);
		throw new Error(error);
	}
};
/**
 * Get vehicles by driver ID.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehiclesByDriverId = async (driver_id) => {
	try {
		return await prisma.vehicles.findMany({
			where: { driver_id },
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles for driver:', error);
		throw new Error(error);
	}
};
/**
 * Delete a vehicle by ID.
 *
 * @param {string} vehicle_id - Vehicle ID.
 * @returns {Promise<object>} Deleted vehicle.
 */
const deleteVehicle = async (vehicle_id) => {
	try {
		return await prisma.vehicles.delete({
			where: { vehicle_id },
		});
	} catch (error) {
		console.error('Error deleting vehicle:', error);
		throw new Error(error);
	}
};
/**
 * Get all vehicles of a certain class.
 *
 * @param {string} vehicleClass - Vehicle class.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehiclesByClass = async (vehicleClass) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				vehicle_specification: {
					class: vehicleClass,
				},
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles by class:', error);
		throw new Error(error);
	}
};
/**
 * Get all vehicles of a certain category.
 *
 * @param {string} vehicleCategory - Vehicle category.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehiclesByCategory = async (vehicleCategory) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				vehicle_specification: {
					category: vehicleCategory,
				},
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles by category:', error);
		throw new Error(error);
	}
};
/**
 * Get all vehicles of a certain class and category.
 *
 * @param {string} vehicleClass - Vehicle class.
 * @param {string} vehicleCategory - Vehicle category.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehiclesByClassAndCategory = async (vehicleClass, vehicleCategory) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				vehicle_specification: {
					AND: [{ class: vehicleClass }, { category: vehicleCategory }],
				},
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles by class and category:', error);
		throw new Error(error);
	}
};
/**
 * Get all vehicles for a driver of a certain class.
 *
 * @param {string} driverId - Driver ID.
 * @param {string} vehicleClass - Vehicle class.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehiclesOfDriverByClass = async (driverId, vehicleClass) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				driver_id: driverId,
				vehicle_specification: {
					class: vehicleClass,
				},
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles of driver by class:', error);
		throw new Error(error);
	}
};
/**
 * Get all vehicles for a driver of a certain category.
 *
 * @param {string} driverId - Driver ID.
 * @param {string} vehicleCategory - Vehicle category.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehiclesOfDriverByCategory = async (driverId, vehicleCategory) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				driver_id: driverId,
				vehicle_specification: {
					category: vehicleCategory,
				},
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles of driver by category:', error);
		throw new Error(error);
	}
};
/**
 * Get all vehicles for a driver of a specific class and category.
 *
 * @param {string} driverId - Driver ID.
 * @param {string} vehicleClass - Vehicle class.
 * @param {string} vehicleCategory - Vehicle category.
 * @returns {Promise<object[]>} Array of vehicles.
 */
const getVehiclesOfDriverByClassAndCategory = async (driverId, vehicleClass, vehicleCategory) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				driver_id: driverId,
				vehicle_specification: {
					AND: [{ class: vehicleClass }, { category: vehicleCategory }],
				},
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving vehicles of driver by class and category:', error);
		throw new Error(error);
	}
};
export { getVehicles };
export { getVehicleById };
export { getVehiclesByBusiness };
export { createNewVehicle };
export { updateVehicle };
export { assignVehicleToDriver };
export { removeVehicleFromDriver };
export { getVehiclesByDriverId };
export { deleteVehicle };
export { getVehiclesByClass };
export { getVehiclesByCategory };
export { getVehiclesByClassAndCategory };
export { getVehiclesOfDriverByClass };
export { getVehiclesOfDriverByCategory };
export { getVehiclesOfDriverByClassAndCategory };
export { getVehicleDriversByVehicleId };
export { unAssignVehicleFromDrivers };
export { assignVehicleToDeliveryDriver };
export default {
	getVehicles,
	getVehicleById,
	getVehiclesByBusiness,
	createNewVehicle,
	updateVehicle,
	assignVehicleToDriver,
	removeVehicleFromDriver,
	getVehiclesByDriverId,
	deleteVehicle,
	getVehiclesByClass,
	getVehiclesByCategory,
	getVehiclesByClassAndCategory,
	getVehiclesOfDriverByClass,
	getVehiclesOfDriverByCategory,
	getVehiclesOfDriverByClassAndCategory,
	getVehicleDriversByVehicleId,
	unAssignVehicleFromDrivers,
	assignVehicleToDeliveryDriver,
};
