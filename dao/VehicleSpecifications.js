const prisma = require('../prisma/prisma');

/**
 * List vehicle specifications with optional Prisma args.
 *
 * @param {object} args - Additional findMany args.
 * @returns {Promise<object[]>} Array of vehicle_specifications.
 */
const getVehicleSpecifications = async (args) => {
	try {
		return await prisma.vehicle_specifications.findMany({
			...args,
		});
	} catch (error) {
		console.error('Error retrieving vehicle specifications:', error);
		throw new Error(error);
	}
};

/**
 * Get a vehicle specification by ID.
 *
 * @param {string} vehicle_specification_id - Specification ID.
 * @param {object} args - Optional Prisma args to merge.
 * @returns {Promise<object|null>} Record or null.
 */
const getVehicleSpecificationById = async (vehicle_specification_id, args) => {
	try {
		return await prisma.vehicle_specifications.findUnique({
			where: {
				vehicle_specification_id: vehicle_specification_id,
			},
			...args,
		});
	} catch (error) {
		console.error('Error retrieving vehicle specification:', error);
		throw new Error(error);
	}
};

/**
 * Create a new vehicle specification.
 *
 * @param {object} specification - Fields for the specification.
 * @returns {Promise<object>} Created record.
 */
const createNewVehicleSpecification = async (specification) => {
	try {
		return await prisma.vehicle_specifications.create({
			data: specification,
		});
	} catch (error) {
		console.error('Error creating new vehicle specification:', error);
		throw new Error(error);
	}
};

/**
 * Update a vehicle specification by ID.
 *
 * @param {string} vehicle_specification_id - Specification ID.
 * @param {object} specificationData - Fields to update.
 * @returns {Promise<object>} Updated record.
 */
const updateVehicleSpecification = async (vehicle_specification_id, specificationData) => {
	try {
		return await prisma.vehicle_specifications.update({
			where: { vehicle_specification_id },
			data: specificationData,
		});
	} catch (error) {
		console.error('Error updating vehicle specification:', error);
		throw new Error(error);
	}
};

/**
 * Delete a vehicle specification by ID.
 *
 * @param {string} vehicle_specification_id - Specification ID.
 * @returns {Promise<object>} Deleted record.
 */
const deleteVehicleSpecification = async (vehicle_specification_id) => {
	try {
		return await prisma.vehicle_specifications.delete({
			where: { vehicle_specification_id },
		});
	} catch (error) {
		console.error('Error deleting vehicle specification:', error);
		throw new Error(error);
	}
};

module.exports = {
	getVehicleSpecifications,
	getVehicleSpecificationById,
	createNewVehicleSpecification,
	updateVehicleSpecification,
	deleteVehicleSpecification,
};
