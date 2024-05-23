const prisma= require("../prisma/prisma");

const getDrivers = async (args) => {
	try {
		return await prisma.drivers.findMany({
			...args,
		});
	} catch (error) {
		console.error("Error retrieving drivers:", error);
		throw new Error(error);
	}
};

const getDriverById = async (driver_id, args) => {
	try {
		return await prisma.drivers.findUnique({
			where: {
				driver_id: driver_id,
			},
			...args,
		});
	} catch (error) {
		console.error("Error retrieving driver:", error);
		throw new Error(error);
	}
};

const getDriverByUserId = async (user_id, args) => {
	try {
		return await prisma.drivers.findUnique({
			where: {
				user_id: user_id,
			},
			...args,
		});
	} catch (error) {
		console.error("Error retrieving driver by user ID:", error);
		throw new Error(error);
	}
};

const createNewDriver = async (driver) => {
	try {
		const locationData = {
			name: null,
			address: null,
			coordinates: {
				latitude: null,
				longitude: null,
			},
		};
		const newDriverData = {
			...driver,
			location: locationData,
		};

		return await prisma.drivers.create({
			data: newDriverData,
		});
	} catch (error) {
		console.error("Error creating new driver:", error);
		throw new Error(error);
	}
};

const updateDriverLocation = async (driver_id, location) => {
	try {
		const locationData = {
			name: location?.name ?? null,
			address: location?.address ?? null,
			coordinates: {
				latitude: location?.coordinates?.latitude ?? null,
				longitude: location?.coordinates?.longitude ?? null,
			},
		};

		return await prisma.drivers.update({
			where: { driver_id },
			data: { location: locationData },
		});
	} catch (error) {
		console.error("Error updating driver's location:", error);
		throw new Error(error);
	}
};

module.exports = {
	createNewDriver,
	getDriverById,
	getDriverByUserId,
	getDrivers,
	updateDriverLocation,
};