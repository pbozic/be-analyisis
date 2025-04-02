const prisma = require("../prisma/prisma");

// Get all vehicles
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
		console.error("Error retrieving vehicles:", error);
		throw new Error(error);
	}
};

// Get all vehicles of a certain business
const getVehiclesByBusiness = async (businessId) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				business_id: businessId,
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving vehicles by business:", error);
		throw new Error(error);
	}
};

const getVehicleById = async (vehicle_id, args) => {
	try {
		return await prisma.vehicles.findUnique({
			where: {
				vehicle_id: vehicle_id,
			},
			include: {
				vehicle_specification: true,
				documents: true,
			},
			...args,
		});
	} catch (error) {
		console.error("Error retrieving vehicle:", error);
		throw new Error(error);
	}
};

const createNewVehicle = async (vehicle) => {
	try {
		return await prisma.vehicles.create({
			data: vehicle,
		});
	} catch (error) {
		console.error("Error creating new vehicle:", error);
		throw new Error(error);
	}
};

const updateVehicle = async (vehicle_id, vehicleData) => {
	try {
		return await prisma.vehicles.update({
			where: { vehicle_id },
			data: vehicleData,
		});
	} catch (error) {
		console.error("Error updating vehicle:", error);
		throw new Error(error);
	}
};


const assignVehicleToDriver = async (vehicleId, driverId) => {
	try {
		return await prisma.vehicle_drivers.create({
			data: {
				driver: {
					connect: {
						driver_id: driverId
					}
				},
				vehicle: {
					connect: {
						vehicle_id: vehicleId,
					}
				}
			},
		});
	} catch (error) {
		console.error("Error assigning vehicle to driver:", error);
		throw new Error(error);
	}
};

const assignVehicleToDeliveryDriver = async (vehicleId, driverId) => {
	try {
		return await prisma.vehicles.update({
			where: { vehicle_id: vehicleId },
			data: {
				delivery_driver: {
					connect: {
						delivery_driver_id: driverId
					}
				}
			},
		});
	} catch (error) {
		console.error("Error assigning vehicle to delivery driver:", error);
		throw new Error(error);
	}
};

const removeVehicleFromDriver = async (vehicleId) => {
	try {
		return await prisma.vehicles.update({
			where: { vehicle_id: vehicleId },
			data: {
				driver: {
					disconnect: true
				}
			},
		});
	} catch (error) {
		console.error("Error removing vehicle from driver:", error);
		throw new Error(error);
	}
};

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
		console.error("Error retrieving vehicles for driver:", error);
		throw new Error(error);
	}
};

const deleteVehicle = async (vehicle_id) => {
	try {
		return await prisma.vehicles.delete({
			where: { vehicle_id },
		});
	} catch (error) {
		console.error("Error deleting vehicle:", error);
		throw new Error(error);
	}
};

// Get all vehicles of a certain class
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
		console.error("Error retrieving vehicles by class:", error);
		throw new Error(error);
	}
};

// Get all vehicles of a certain category
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
		console.error("Error retrieving vehicles by category:", error);
		throw new Error(error);
	}
};

// Get all vehicles of a certain class and category
const getVehiclesByClassAndCategory = async (vehicleClass, vehicleCategory) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				vehicle_specification: {
					AND: [
						{ class: vehicleClass },
						{ category: vehicleCategory },
					],
				},
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving vehicles by class and category:", error);
		throw new Error(error);
	}
};

// Get all vehicles of a certain driver of class
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
		console.error("Error retrieving vehicles of driver by class:", error);
		throw new Error(error);
	}
};

// Get all vehicles of a certain driver of category
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
		console.error("Error retrieving vehicles of driver by category:", error);
		throw new Error(error);
	}
};

// Get all vehicles of a certain driver of class and category
const getVehiclesOfDriverByClassAndCategory = async (driverId, vehicleClass, vehicleCategory) => {
	try {
		return await prisma.vehicles.findMany({
			where: {
				driver_id: driverId,
				vehicle_specification: {
					AND: [
						{ class: vehicleClass },
						{ category: vehicleCategory },
					],
				},
			},
			include: {
				vehicle_specification: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving vehicles of driver by class and category:", error);
		throw new Error(error);
	}
};

module.exports = {
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
	assignVehicleToDeliveryDriver
};