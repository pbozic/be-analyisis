import prisma from '../prisma/prisma.js';
import type { VehicleCreateInput, VehicleDetail, VehicleUpdateInput } from '../schemas/dto/Vehicles/vehicle.dto.js';
import { VehicleDriver } from '../types/drivers/VehicleDriver.js';

/**
 * Get all vehicles with optional Prisma args and includes.
 *
 * @returns Array of vehicles.
 */
export const getVehicles = async (): Promise<VehicleDetail[]> => {
	try {
		return await prisma.vehicles.findMany({
			include: {
				documents: false,
			},
		});
	} catch (error: unknown) {
		console.error('Error retrieving vehicles:', error);
		throw new Error(String(error));
	}
};

/**
 * Get all vehicles belonging to a business with driver names and documents.
 *
 * @param businessId - Business ID.
 * @returns Array of vehicles.
 */
export const getVehiclesByBusiness = async (businessId: string): Promise<VehicleDetail[]> => {
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
	} catch (error: unknown) {
		console.error('Error retrieving vehicles by business:', error);
		throw new Error(String(error));
	}
};

/**
 * Get a vehicle by ID with includes.
 *
 * @param vehicle_id - Vehicle ID.
 * @returns Vehicle or null.
 */
export const getVehicleById = async (vehicle_id: string): Promise<VehicleDetail | null> => {
	try {
		return await prisma.vehicles.findUnique({
			where: { vehicle_id },
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: true,
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
	} catch (error: unknown) {
		console.error('Error retrieving vehicle by ID:', error);
		throw new Error(String(error));
	}
};

/**
 * Get vehicles by class.
 *
 * @param vehicleClass - Vehicle class.
 * @returns Array of vehicles.
 */
export const getVehiclesByClass = async (vehicleClass: string): Promise<VehicleDetail[]> => {
	try {
		return await prisma.vehicles.findMany({
			where: { vehicle_class: vehicleClass },
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: true,
							},
						},
					},
				},
			},
		});
	} catch (error: unknown) {
		console.error('Error retrieving vehicles by class:', error);
		throw new Error(String(error));
	}
};

/**
 * Get vehicles by category.
 *
 * @param vehicleCategory - Vehicle category.
 * @returns Array of vehicles.
 */
export const getVehiclesByCategory = async (vehicleCategory: string): Promise<VehicleDetail[]> => {
	try {
		return await prisma.vehicles.findMany({
			where: { vehicle_category: vehicleCategory },
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: true,
							},
						},
					},
				},
			},
		});
	} catch (error: unknown) {
		console.error('Error retrieving vehicles by category:', error);
		throw new Error(String(error));
	}
};

/**
 * Get vehicles by class and category.
 *
 * @param vehicleClass - Vehicle class.
 * @param vehicleCategory - Vehicle category.
 * @returns Array of vehicles.
 */
export const getVehiclesByClassAndCategory = async (
	vehicleClass: string,
	vehicleCategory: string
): Promise<VehicleDetail[]> => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				vehicle_class: vehicleClass,
				vehicle_category: vehicleCategory,
			},
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: true,
							},
						},
					},
				},
			},
		});
	} catch (error: unknown) {
		console.error('Error retrieving vehicles by class and category:', error);
		throw new Error(String(error));
	}
};

/**
 * Get vehicles assigned to a specific driver.
 *
 * @param driver_id - Driver ID.
 * @returns Array of vehicles.
 */
export const getVehiclesByDriverId = async (driver_id: string): Promise<VehicleDetail[]> => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				drivers: {
					some: {
						driver_id: driver_id,
					},
				},
			},
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: true,
							},
						},
					},
				},
			},
		});
	} catch (error: unknown) {
		console.error('Error retrieving vehicles by driver ID:', error);
		throw new Error(String(error));
	}
};

/**
 * Create a new vehicle.
 *
 * @param data - Vehicle creation data.
 * @returns Created vehicle.
 */
export const createVehicle = async (data: VehicleCreateInput, tx: any = prisma): Promise<VehicleDetail> => {
	try {
		const vehicleData = {
			vehicle_class: data.class,
			vehicle_category: data.category,
			make: data.make,
			model: data.model,
			color: data.color,
			license_plate: data.license_plate,
			// vin: data.vin,
		};

		return await tx.vehicles.create({
			data: vehicleData,
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: true,
							},
						},
					},
				},
			},
		});
	} catch (error: unknown) {
		console.error('Error creating vehicle:', error);
		throw new Error(String(error));
	}
};

/**
 * Update a vehicle.
 *
 * @param vehicle_id - Vehicle ID.
 * @param data - Update data.
 * @returns Updated vehicle.
 */
export const updateVehicle = async (vehicle_id: string, data: VehicleUpdateInput): Promise<VehicleDetail | null> => {
	try {
		return await prisma.vehicles.update({
			where: { vehicle_id },
			data: {
				...data,
			},
			include: {
				drivers: {
					include: {
						driver: {
							include: {
								user: true,
							},
						},
					},
				},
			},
		});
	} catch (error: unknown) {
		console.error('Error updating vehicle:', error);
		throw new Error(String(error));
	}
};

/**
 * Assign a vehicle to a driver.
 *
 * @param vehicle_id - Vehicle ID.
 * @param driver_id - Driver ID.
 * @returns Vehicle-driver link.
 */
export const assignVehicleToDriver = async (vehicle_id: string, driver_id: string, tx: any = prisma) => {
	try {
		return await tx.driver_vehicle_link.create({
			data: {
				vehicle_id,
				driver_id,
			},
		});
	} catch (error: unknown) {
		console.error('Error assigning vehicle to driver:', error);
		throw new Error(String(error));
	}
};

/**
 * Remove a vehicle from a driver.
 *
 * @param vehicle_id - Vehicle ID.
 * @param driver_id - Driver ID.
 * @returns Success confirmation.
 */
export const removeVehicleFromDriver = async (vehicle_id: string, driver_id: string) => {
	try {
		return await prisma.driver_vehicle_link.delete({
			where: {
				driver_id_vehicle_id: {
					driver_id,
					vehicle_id,
				},
			},
		});
	} catch (error: unknown) {
		console.error('Error removing vehicle from driver:', error);
		throw new Error(String(error));
	}
};

/**
 * Delete a vehicle.
 *
 * @param vehicle_id - Vehicle ID.
 * @returns Deleted vehicle.
 */
export const deleteVehicle = async (vehicle_id: string): Promise<VehicleDetail> => {
	try {
		// First delete all driver-vehicle links
		await prisma.driver_vehicle_link.deleteMany({
			where: { vehicle_id },
		});

		// Then delete the vehicle
		return await prisma.vehicles.delete({
			where: { vehicle_id },
			include: {
				drivers: true,
			},
		});
	} catch (error: unknown) {
		console.error('Error deleting vehicle:', error);
		throw new Error(String(error));
	}
};

/**
 * Get the driver IDs linked to a vehicle.
 *
 * @param {string} vehicle_id - Vehicle ID.
 * @returns {Promise<VehicleDriver[]>} Array of driver_id objects.
 */
const getVehicleDriversByVehicleId = async (vehicle_id: string): Promise<VehicleDriver[]> => {
	try {
		return await prisma.vehicle_drivers.findMany({
			where: {
				vehicle_id: vehicle_id,
			},
			select: {
				driver_id: true,
			},
		});
	} catch (error: unknown) {
		console.error('Error retrieving vehicle drivers by vehicle ID:', error);
		throw new Error(String(error));
	}
};

/**
 * Remove driver links for a vehicle that are not present in the newDriverIds list.
 *
 * @param {string} vehicle_id - Vehicle ID.
 * @param {string[]} newDriverIds - Driver IDs to keep.
 * @returns {Promise<void>} Resolves when done.
 */
const unAssignVehicleFromDrivers = async (vehicle_id: string, newDriverIds: string[]) => {
	await prisma.vehicle_drivers.deleteMany({
		where: {
			vehicle_id: vehicle_id,
			driver_id: {
				notIn: newDriverIds,
			},
		},
	});
};

export default {
	getVehicles,
	getVehiclesByBusiness,
	getVehicleById,
	getVehiclesByClass,
	getVehiclesByCategory,
	getVehiclesByClassAndCategory,
	getVehiclesByDriverId,
	createVehicle,
	updateVehicle,
	assignVehicleToDriver,
	removeVehicleFromDriver,
	deleteVehicle,
	getVehicleDriversByVehicleId,
	unAssignVehicleFromDrivers,
};
