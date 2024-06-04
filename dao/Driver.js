const prisma= require("../prisma/prisma");

const getDrivers = async (args) => {
	try {
		return await prisma.drivers.findMany({
			...args,
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true,
					},
				},
				documents: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving drivers:", error);
		throw new Error(error);
	}
};

const getOnlineDrivers = async () => {
	try {
		return await prisma.drivers.findMany({
			where: { online: true },
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true,
					},
				},
			},
		});
	} catch (error) {
		console.error("Error retrieving online drivers:", error);
		throw new Error(error);
	}
};

const getDriverById = async (driver_id) => {
	try {
		return await prisma.drivers.findUnique({
			where: {
				driver_id: driver_id,
			},
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true,
					},
				},
				documents: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving driver:", error);
		throw new Error(error);
	}
};
const getDriverByUserId = async (user_id) => {
	try {
		return await prisma.drivers.findUnique({
			where: {
				user_id: user_id,
			},
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true,
					},
				},
				documents: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving driver by user ID:", error);
		throw new Error(error);
	}
};

const getDriverLocation = async (driver_id) => {
	try {
		const driver = await prisma.drivers.findUnique({
			where: { driver_id },
			select: {
				location: true, // Select only the location field
			},
		});
		return driver ? driver.location : null;
	} catch (error) {
		console.error("Error retrieving driver's location:", error);
		throw new Error(error);
	}
};

const updateDriverOnlineStatus = async (driver_id, isOnline) => {
	try {
		return await prisma.drivers.update({
			where: { driver_id },
			data: { online: isOnline },
		});
	} catch (error) {
		console.error("Error setting driver's online status:", error);
		throw new Error(error);
	}
};

const updateDriverLocation = async (user_id, location) => {
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
			where: { user_id },
			data: { location: locationData },
		});
	} catch (error) {
		console.error("Error updating driver's location:", error);
		throw new Error(error);
	}
};

const updateDriver = async (driver_id, updateData) => {
	try {
		delete updateData.location;

		return await prisma.drivers.update({
			where: { driver_id },
			data: { ...updateData },
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true,
					},
				},
			},
		});
	} catch (error) {
		console.error("Error updating driver:", error);
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

module.exports = {
	getDrivers,
	getOnlineDrivers,
	getDriverById,
	getDriverByUserId,
	getDriverLocation,
	updateDriver,
	updateDriverLocation,
	updateDriverOnlineStatus,
	createNewDriver,
};