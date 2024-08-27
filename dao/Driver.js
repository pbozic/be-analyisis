const { file } = require("googleapis/build/src/apis/file");
const prisma= require("../prisma/prisma");
const UserDao = require("./User");

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
const getDriversFull = async (args) => {
	try {
		return await prisma.drivers.findMany({
			...args,
			include: {
				user:{ 
					include: {
						documents: {
							include: {
								files: true,
							}
						},
					}
				},
				vehicles: {
					include: {
						vehicle_specification: true,
					},
				},
				
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
				documents: {
					include: {
						files: true,
					}
				},
				
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
		console.error("Error setting driver's online status:", error);
		throw new Error(error);
	}
};

const updateDriverRideRequirements = async (driver_id, ride_requirements) => {
	try {
		return await prisma.drivers.update({
			where: { driver_id },
			data: { ride_requirements: ride_requirements },
		});
	} catch (error) {
		return new Error(error);
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

const createNewDriver = async (driverData, userData) => {
	try {
		let newUser = userData;
		if (!userData?.user_id) {
			newUser = await UserDao.createNewUser(userData);
			if (!newUser) {
				throw new Error("Failed to create user for new driver", userData);
			}
		}

		// Prepare location data for the driver
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
			last_ping_at: new Date()
		};

		const newDriver = await prisma.drivers.create({
			data: newDriverData,
		});

		// Include the user data in the returned driver data
		return {
			...newDriver,
			user: newUser
		};

	} catch (error) {
		console.error("Error creating new driver:", error);
		throw new Error(error.message); // Adjust error handling as needed
	}
};

const getAvailableDrivers = async () => {
	try {
		return await prisma.drivers.findMany({
			where: { online: true, on_order: false },
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
		console.error("Error getting available drivers:", error);
		throw new Error(error);
	}
}

const getBusinessByDriverId = async (driver_id) => {
    try {
        // Step 1: Get the business_id from the drivers model
        const driver = await prisma.drivers.findUnique({
            where: { driver_id },
            select: { business_id: true }
        });

        if (!driver || !driver.business_id) {
            throw new Error("Business not found for the given driver ID");
        }

        // Step 2: Get the business details using the business_id
        const business = await prisma.business.findUnique({
            where: { business_id: driver.business_id }
        });

        if (!business) {
            throw new Error("Business not found for the given business ID");
        }

        return business;
    } catch (error) {
        console.error("Error retrieving business by driver ID:", error);
        throw error;
    }
};



module.exports = {
	getDrivers,
	getOnlineDrivers,
	getDriverById,
	getDriverByUserId,
	getDriverLocation,
	getBusinessByDriverId,
	updateDriver,
	updateDriverLocation,
	updateDriverOnlineStatus,
	createNewDriver,
	getAvailableDrivers,
	updateDriverRideRequirements,
	getDriversFull,
};