const prisma= require("../prisma/prisma");
const UserDao = require("./User");

const getDeliveryDrivers = async (args) => {
	try {
		return await prisma.delivery_drivers.findMany({
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
		console.error("Error retrieving delivery drivers:", error);
		throw new Error(error);
	}
};

const getOnlineDeliveryDrivers = async () => {
	try {
		return await prisma.delivery_drivers.findMany({
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
		console.error("Error retrieving online delivery drivers:", error);
		throw new Error(error);
	}
};

const getDeliveryDriverById = async (driver_id) => {
	try {
		return await prisma.delivery_drivers.findUnique({
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
		console.error("Error retrieving delivery driver:", error);
		throw new Error(error);
	}
};
const getDeliveryDriverByUserId = async (user_id) => {
	try {
		return await prisma.delivery_drivers.findUnique({
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
		console.error("Error retrieving delivery driver by user ID:", error);
		throw new Error(error);
	}
};

const getDeliveryDriverLocation = async (driver_id) => {
	try {
		const driver = await prisma.delivery_drivers.findUnique({
			where: { driver_id },
			select: {
				location: true, // Select only the location field
			},
		});
		return driver ? driver.location : null;
	} catch (error) {
		console.error("Error retrieving delivery driver's location:", error);
		throw new Error(error);
	}
};

const updateDeliveryDriverOnlineStatus = async (driver_id, isOnline) => {
	try {
		return await prisma.delivery_drivers.update({
			where: { driver_id },
			data: { online: isOnline },
		});
	} catch (error) {
		console.error("Error setting delivery driver's online status:", error);
		throw new Error(error);
	}
};

const updateDeliveryDriverLocation = async (user_id, location) => {
	try {
		const locationData = {
			name: location?.name ?? null,
			address: location?.address ?? null,
			coordinates: {
				latitude: location?.coordinates?.latitude ?? null,
				longitude: location?.coordinates?.longitude ?? null,
			},
		};

		return await prisma.delivery_drivers.update({
			where: { user_id },
			data: { location: locationData },
		});
	} catch (error) {
		console.error("Error updating delivery driver's location:", error);
		throw new Error(error);
	}
};

const updateDeliveryDriver = async (driver_id, updateData) => {
	try {
		delete updateData.location;

		return await prisma.delivery_drivers.update({
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
		console.error("Error updating delivery driver:", error);
		throw new Error(error);
	}
};

const createNewDeliveryDriver = async (deliveryDriverData, userData) => {
	try {
		const newUser = await UserDao.createNewUser(userData);
		if (!newUser) {
			throw new Error("Failed to create user for new delivery driver");
		}

		// Prepare location data for the delivery driver
		const locationData = {
			name: null,
			address: null,
			coordinates: {
				latitude: null,
				longitude: null,
			},
		};

		const newDeliveryDriverData = {
			...deliveryDriverData,
			location: locationData,
			user_id: newUser.user_id,
		};

		return await prisma.delivery_drivers.create({
			data: newDeliveryDriverData,
		});
	} catch (error) {
		console.error("Error creating new delivery driver:", error);
		throw new Error(error.message); // Adjust error handling as needed
	}
};

module.exports = {
	getDeliveryDrivers,
	getOnlineDeliveryDrivers,
	getDeliveryDriverById,
	getDeliveryDriverByUserId,
	getDeliveryDriverLocation,
	updateDeliveryDriverOnlineStatus,
	updateDeliveryDriverLocation,
	updateDeliveryDriver,
	createNewDeliveryDriver
};