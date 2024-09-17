const prisma = require("../prisma/prisma");
const UserDao = require("./User");

const getDeliveryDrivers = async (args) => {
	try {
		return await prisma.delivery_drivers.findMany({
			...args,
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true
					}
				},
				documents: false
			}
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
						vehicle_specification: true
					}
				}
			}
		});
	} catch (error) {
		console.error("Error retrieving online delivery drivers:", error);
		throw new Error(error);
	}
};

const getDeliveryDriverById = async (delivery_driver_id) => {
	try {
		return await prisma.delivery_drivers.findUnique({
			where: {
				delivery_driver_id: delivery_driver_id
			},
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true
					}
				},
				documents: false
			}
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
				user_id: user_id
			},
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true
					}
				},
				documents: false
			}
		});
	} catch (error) {
		console.error("Error retrieving delivery driver by user ID:", error);
		throw new Error(error);
	}
};

const getDeliveryDriverLocation = async (delivery_driver_id) => {
	try {
		const deliveryDriver = await prisma.delivery_drivers.findUnique({
			where: { delivery_driver_id },
			select: {
				location: true // Select only the location field
			}
		});
		return deliveryDriver ? deliveryDriver.location : null;
	} catch (error) {
		console.error("Error retrieving delivery driver's location:", error);
		throw new Error(error);
	}
};

const updateDeliveryDriverOnlineStatus = async (delivery_driver_id, isOnline) => {
	try {
		return await prisma.delivery_drivers.update({
			where: { delivery_driver_id },
			data: { online: isOnline },
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true
					}
				}
			}
		});
	} catch (error) {
		console.error("Error setting delivery driver's online status:", error);
		throw new Error(error);
	}
};

const updateDeliveryDriverLocation = async (delivery_driver_id, location) => {
	try {
		const locationData = {
			name: location?.name ?? null,
			address: location?.address ?? null,
			coordinates: {
				latitude: location?.coordinates?.latitude ?? null,
				longitude: location?.coordinates?.longitude ?? null
			}
		};

		return await prisma.delivery_drivers.update({
			where: { delivery_driver_id },
			data: { location: locationData }
		});
	} catch (error) {
		console.error("Error updating delivery driver's location:", error);
		throw new Error(error);
	}
};

const updateDeliveryDriverLocationHistory = async (delivery_driver_id, location, status, order_id) => {
	try {
		const locationData = {
			name: location?.name ?? null,
			address: location?.address ?? null,
			coordinates: {
				latitude: location?.coordinates?.latitude ?? null,
				longitude: location?.coordinates?.longitude ?? null
			}
		};

		const data = {
			location: locationData,
			delivery_driver: {
				connect: {
					delivery_driver_id: delivery_driver_id
				}
			},
			order: {
				connect: {
					order_id: order_id
				}
			}
		};

		if (status !== null && status !== undefined) {
			data.status = status;
		}

		return await prisma.delivery_driver_history_locations.create({ data });
	} catch (error) {
		console.error("Error updating driver's location history:", error);
		throw new Error(error);
	}
};

const updateDeliveryDriver = async (delivery_driver_id, updateData) => {
	try {
		delete updateData.location;

		return await prisma.delivery_drivers.update({
			where: { delivery_driver_id },
			data: { ...updateData },
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true
					}
				}
			}
		});
	} catch (error) {
		console.error("Error updating delivery driver:", error);
		throw new Error(error);
	}
};

const createDeliveryDriver = async (driverData, userData) => {
	try {
		let newUser = userData;
		if (!userData?.user_id) {
			newUser = await UserDao.createNewUser(userData);
			if (!newUser) {
				throw new Error("Failed to create user for new delivery driver", userData);
			}
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

		const newDriverData = {
			...driverData,
			location: locationData,
			user_id: newUser.user_id,
		};

		const newDriver = await prisma.delivery_drivers.create({
			data: newDriverData,
		});

		// Include the user data in the returned driver data
		return {
			...newDriver,
			user: newUser
		};

	} catch (error) {
		console.error("Error creating new delivery driver:", error);
		throw new Error(error.message);
	}
};

const getAvailableDeliveryDrivers = async () => {
	try {
		return await prisma.delivery_drivers.findMany({
			where: { online: true, on_order: false },
			include: {
				user: true,
				vehicles: {
					include: {
						vehicle_specification: true
					}
				}
			}
		});
	} catch (error) {
		console.error("Error getting available delivery drivers:", error);
		throw new Error(error);
	}
}


const updateDriverLocation = async (delivery_driver_id, location) => {
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
			where: { delivery_driver_id },
			data: { location: locationData },
		});
	} catch (error) {
		console.error("Error updating driver's location:", error);
		throw new Error(error);
	}
};

module.exports = {
	getDeliveryDrivers,
	getOnlineDeliveryDrivers,
	getDeliveryDriverById,
	getDeliveryDriverByUserId,
	getDeliveryDriverLocation,
	updateDeliveryDriver,
	updateDeliveryDriverLocation,
	updateDeliveryDriverOnlineStatus,
	createDeliveryDriver,
	getAvailableDeliveryDrivers,
	updateDriverLocation,
	updateDeliveryDriverLocationHistory
};