const prisma = require("../prisma/prisma");

const getVehicleSpecifications = async (args) => {
	try {
		return await prisma.vehicle_specifications.findMany({
			...args,
		});
	} catch (error) {
		console.error("Error retrieving vehicle specifications:", error);
		throw new Error(error);
	}
};

const getVehicleSpecificationById = async (vehicle_specification_id, args) => {
	try {
		return await prisma.vehicle_specifications.findUnique({
			where: {
				vehicle_specification_id: vehicle_specification_id,
			},
			...args,
		});
	} catch (error) {
		console.error("Error retrieving vehicle specification:", error);
		throw new Error(error);
	}
};

const createNewVehicleSpecification = async (specification) => {
	try {
		return await prisma.vehicle_specifications.create({
			data: specification,
		});
	} catch (error) {
		console.error("Error creating new vehicle specification:", error);
		throw new Error(error);
	}
};

const updateVehicleSpecification = async (vehicle_specification_id, specificationData) => {
	try {
		return await prisma.vehicle_specifications.update({
			where: { vehicle_specification_id },
			data: specificationData,
		});
	} catch (error) {
		console.error("Error updating vehicle specification:", error);
		throw new Error(error);
	}
};

const deleteVehicleSpecification = async (vehicle_specification_id) => {
	try {
		return await prisma.vehicle_specifications.delete({
			where: { vehicle_specification_id },
		});
	} catch (error) {
		console.error("Error deleting vehicle specification:", error);
		throw new Error(error);
	}
};


module.exports = {
	getVehicleSpecifications,
	getVehicleSpecificationById,
	createNewVehicleSpecification,
	updateVehicleSpecification,
	deleteVehicleSpecification
};