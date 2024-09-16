const { file } = require("googleapis/build/src/apis/file");
const prisma= require("../prisma/prisma");
const UserDao = require("./User");
const { calculateDistance, calculateTimeDifference } = require("../lib/helpersLib");

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
				user: {
					include: {
						documents: {
							include: {
								files: true,
							}
						},
						business_users: {
							include: {
								business: {
									include: {
										documents: {
											include: {
												files: true,
											}
										},
									}
								
								}
							}
						},	
					}
				},
				
				vehicles: {
					include: {
						vehicle_specification: true,
						documents: {
							include: {
								files: true,
							}
						},
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

const updateDriverLocationHistory = async (driver_id, location, status) => {
	try {
		const locationData = {
			name: location?.name ?? null,
			address: location?.address ?? null,
			coordinates: {
				latitude: location?.coordinates?.latitude ?? null,
				longitude: location?.coordinates?.longitude ?? null,
			},
		};

		const data = {
			location: locationData,
			driver: {
				connect: {
					driver_id: driver_id
				}
			}
		};

		if (status !== null && status !== undefined) {
			data.status = status;
		}

		return await prisma.driver_history_locations.create({ data });
	} catch (error) {
		console.error("Error updating driver's location history:", error);
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

const getUnavailableDrivers = async () => {
	try {
		return await prisma.drivers.findMany({
			where: { online: true, on_order: true },
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
async function getDriverLocations(driverId, startTime, endTime) {
	try {
		const locations = await prisma.driver_history_locations.findMany({
			where: {
				driver_id: driverId,
				created_at: {
					gte: new Date(startTime),
					lte: new Date(endTime),
				},
			},
			select: {
				location: true,
				created_at: true,
			},
			orderBy: {
				created_at: 'asc',
			},
		});

		// Format the results
		const formattedLocations = locations.map((entry) => {
			const location = entry.location;
			return {
				address: location?.address || null,
				coordinates: {
					latitude: location?.coordinates?.latitude || null,
					longitude: location?.coordinates?.longitude || null,
				},
				timestamp: entry.created_at,
			};
		});

		return formattedLocations;
	} catch (error) {
		console.error('Error fetching driver locations:', error);
		throw new Error('Could not fetch driver locations');
	}
}

async function getDriverLocationsWithPerformance(driverId, startTime, endTime) {
	try {
		const locations = await prisma.driver_history_locations.findMany({
			where: {
				driver_id: driverId,
				created_at: {
					gte: new Date(startTime),
					lte: new Date(endTime),
				},
			},
			select: {
				location: true,
				created_at: true,
			},
			orderBy: {
				created_at: 'asc',
			},
		});

		// Initialize previous location for distance calculation
		let previousLocation = null;
		let totalScore = 0;

		const formattedLocations = locations.map((entry, index) => {
			const location = entry.location;
			const currentCoordinates = {
				latitude: location?.coordinates?.latitude || null,
				longitude: location?.coordinates?.longitude || null,
			};

			// First location has no distance or time
			if (index === 0) {
				previousLocation = { ...currentCoordinates, timestamp: entry.created_at };
				return {
					...currentCoordinates,
					timestamp: entry.created_at,
					distance: 0, // First location has 0 distance
					time_taken: 0, // First location has no time taken
					performance_score: 0, // First location has 0 score
				};
			}

			// Calculate distance between the previous and current location
			const distance = calculateDistance(
				previousLocation.latitude, previousLocation.longitude,
				currentCoordinates.latitude, currentCoordinates.longitude
			);

			// Calculate time taken between the previous and current location
			const time_taken = calculateTimeDifference(previousLocation.timestamp, entry.created_at);

			// Calculate the speed (distance per minute)
			const speed = distance / time_taken;

			// Assume a threshold speed, e.g., normal speed = 50 km/h (0.83 km/min)
			const normalSpeed = 0.83; // 50 km/h in km/min
			const performance_score =  normalSpeed / speed

			totalScore += performance_score;

			// Update previous location
			previousLocation = { ...currentCoordinates, timestamp: entry.created_at };

			return {
				...currentCoordinates,
				timestamp: entry.created_at,
				distance: distance, // Distance between this and the previous location
				time_taken: time_taken, // Time taken in minutes
				performance_score: performance_score, // Performance score based on speed
			};
		});

		// Calculate the average score for the whole trip
		const averageScore = totalScore / (locations.length - 1);

		return { locations: formattedLocations, averageScore };
	} catch (error) {
		console.error('Error fetching driver locations:', error);
		throw new Error('Could not fetch driver locations');
	}
}




module.exports = {
	getDrivers,
	getOnlineDrivers,
	getDriverById,
	getDriverByUserId,
	getDriverLocation,
	getBusinessByDriverId,
	updateDriver,
	updateDriverLocation,
	updateDriverLocationHistory,
	updateDriverOnlineStatus,
	createNewDriver,
	getAvailableDrivers,
	updateDriverRideRequirements,
	getDriversFull,
	getUnavailableDrivers,
	getDriverLocations,
	getDriverLocationsWithPerformance
};