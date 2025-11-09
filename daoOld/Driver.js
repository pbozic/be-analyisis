import prisma from '../prisma/prisma.js';
import UserDao from './User.js';
/**
 * List drivers with optional filters and included relations.
 *
 * @param {object} args - Additional Prisma findMany args.
 * @returns {Promise<object[]>} Array of drivers with user and vehicles.
 */
const getDrivers = async (args) => {
	try {
		return await prisma.drivers.findMany({
			...args,
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving drivers:', error);
		throw new Error(error);
	}
};
/**
 * List drivers with full nested user documents and vehicle specifications.
 *
 * @param {object} args - Additional Prisma findMany args.
 * @returns {Promise<object[]>} Array of drivers with rich relations.
 */
const getDriversFull = async (args) => {
	try {
		return await prisma.drivers.findMany({
			...args,
			include: {
				user: {
					include: {
						documents: {
							include: {
								files: true,
							},
						},
					},
				},
				vehicles: true,
				current_vehicle: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving drivers:', error);
		throw new Error(error);
	}
};
/**
 * List online drivers with optional extra filters.
 *
 * @param {object} args - Additional where filters.
 * @returns {Promise<object[]>} Array of online drivers.
 */
const getOnlineDrivers = async (args) => {
	try {
		return await prisma.drivers.findMany({
			where: {
				online: true,
				...args,
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving online drivers:', error);
		throw new Error(error);
	}
};
/**
 * List drivers associated with a daily meal business.
 *
 * @param {string} businessId - Business ID.
 * @returns {Promise<object[]>} Array of drivers.
 */
const getDriversByDailyMealBusinessId = async (businessId) => {
	try {
		return await prisma.drivers.findMany({
			where: {
				daily_meal_business_id: businessId,
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving drivers by business ID:', error);
		throw new Error(error);
	}
};
/**
 * Get a driver by ID with nested user, vehicle, documents, and activity logs.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object|null>} The driver record or null.
 */
const getDriverById = async (driver_id) => {
	try {
		return await prisma.drivers.findUnique({
			where: {
				driver_id: driver_id,
			},
			include: {
				user: {
					include: {
						addresses: {
							include: {
								address: true,
							},
						},
						documents: {
							include: {
								files: true,
							},
						},
						business_users: {
							include: {
								business: {
									include: {
										documents: {
											include: {
												files: true,
											},
										},
									},
								},
							},
						},
					},
				},
				vehicles: true,
				current_vehicle: true,
				documents: {
					include: {
						files: true,
					},
				},
				activity_logs: {
					orderBy: {
						started_at: 'desc',
					},
				},
			},
		});
	} catch (error) {
		console.error('Error retrieving driver:', error);
		throw new Error(error);
	}
};
/**
 * Get a driver by user ID with related vehicles.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<object|null>} The driver record or null.
 */
const getDriverByUserId = async (user_id) => {
	try {
		return await prisma.drivers.findUnique({
			where: {
				user_id: user_id,
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
				documents: false,
			},
		});
	} catch (error) {
		console.error('Error retrieving driver by user ID:', error);
		throw new Error(error);
	}
};
/**
 * Get the current stored location for a driver.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object|null>} Location object or null.
 */
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
/**
 * Update a driver's online status, disconnecting current vehicle if going offline.
 *
 * @param {string} driver_id - Driver ID.
 * @param {boolean} isOnline - New online flag.
 * @returns {Promise<object>} The updated driver with relations.
 */
const updateDriverOnlineStatus = async (driver_id, isOnline) => {
	try {
		// Only disconnect current_vehicle if going offline
		const vehicleUpdate = isOnline ? {} : { current_vehicle: { disconnect: true } };
		return await prisma.drivers.update({
			where: { driver_id },
			data: {
				online: isOnline,
				...vehicleUpdate,
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
				activity_logs: {
					orderBy: {
						started_at: 'desc',
					},
				},
			},
		});
	} catch (error) {
		console.error("Error setting driver's online status:", error);
		throw new Error(error);
	}
};
/**
 * Update driver ride requirements JSON.
 *
 * @param {string} driver_id - Driver ID.
 * @param {object} ride_requirements - Requirements payload.
 * @returns {Promise<object>} The updated driver record.
 */
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
/**
 * Update a driver's stored location.
 *
 * @param {string} driver_id - Driver ID.
 * @param {object} location - Location payload.
 * @returns {Promise<object>} The updated driver record with relations.
 */
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
				vehicles: true,
				current_vehicle: true,
			},
		});
	} catch (error) {
		console.error("Error updating driver's location:", error);
		throw new Error(error);
	}
};
/**
 * Append a location entry to a driver's history; links to either taxi/transfer order or delivery order.
 *
 * @param {string} driver_id - Driver ID.
 * @param {object} location - Location payload.
 * @param {string|number|null} status - Optional status value.
 * @param {string|null} order_id - Optional order ID.
 * @param {string|undefined} type - If truthy, links to taxi/transfer order; otherwise to delivery order when order_id provided.
 * @returns {Promise<object>} Created history location record.
 */
const updateDriverLocationHistory = async (driver_id, location, status, order_id, type) => {
	const taxiOrder = !!type;
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
					driver_id: driver_id,
				},
			},
			...(order_id && taxiOrder
				? { order: { connect: { order_id: order_id } } }
				: order_id && !taxiOrder
					? { delivery_order: { connect: { order_id: order_id } } }
					: {}),
		};
		return await prisma.driver_history_locations.create({ data });
	} catch (error) {
		console.error("Error updating driver's location history:", error);
		throw new Error(error);
	}
};
/**
 * Update a driver (excluding location which is handled separately).
 *
 * @param {string} driver_id - Driver ID.
 * @param {object} updateData - Partial fields to update.
 * @returns {Promise<object>} The updated driver.
 */
const updateDriver = async (driver_id, updateData) => {
	try {
		delete updateData.location;
		return await prisma.drivers.update({
			where: { driver_id },
			data: { ...updateData },
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});
	} catch (error) {
		console.error('Error updating driver:', error);
		throw new Error(error);
	}
};
/**
 * Create a new driver; creates the user if not provided.
 *
 * @param {object} driverData - Driver fields.
 * @param {object} userData - User fields or existing user with user_id.
 * @returns {Promise<object>} The created driver with nested user.
 */
const createNewDriver = async (driverData, userData) => {
	try {
		let newUser = userData;
		if (!userData?.user_id) {
			newUser = await UserDao.createNewUser(userData);
			if (!newUser) {
				throw new Error('Failed to create user for new driver', userData);
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
			last_ping_at: new Date(),
		};
		const newDriver = await prisma.drivers.create({
			data: newDriverData,
		});
		// Include the user data in the returned driver data
		return {
			...newDriver,
			user: newUser,
		};
	} catch (error) {
		console.error('Error creating new driver:', error);
		throw new Error(error.message); // Adjust error handling as needed
	}
};
/**
 * List available drivers (online and not on order), optionally filtered by order type.
 *
 * @param {string} [type] - Optional type: 'TAXI' or 'TRANSFER'.
 * @returns {Promise<object[]>} Array of available drivers.
 */
const getAvailableDrivers = async (type) => {
	try {
		const whereObj = {
			online: true,
			on_order: false,
		};
		if (type === 'TAXI') {
			whereObj.handles_taxi_orders = true;
			whereObj.taxi_orders_toggled = true;
		} else if (type === 'TRANSFER') {
			whereObj.handles_transfer_orders = true;
			whereObj.transfer_orders_toggled = true;
		}
		return await prisma.drivers.findMany({
			where: whereObj,
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});
	} catch (error) {
		console.error('Error getting available drivers:', error);
		throw new Error(error);
	}
};
/**
 * List drivers who are online and currently on an order.
 *
 * @returns {Promise<object[]>} Array of unavailable drivers.
 */
const getUnavailableDrivers = async () => {
	try {
		return await prisma.drivers.findMany({
			where: { online: true, on_order: true },
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});
	} catch (error) {
		console.error('Error getting available drivers:', error);
		throw new Error(error);
	}
};
/**
 * Get the business associated with a driver.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object>} The related business.
 */
const getBusinessByDriverId = async (driver_id) => {
	try {
		// Step 1: Get the business_id from the drivers model
		const driver = await prisma.drivers.findUnique({
			where: { driver_id },
			select: { business_id: true },
		});
		if (!driver || !driver.business_id) {
			throw new Error('Business not found for the given driver ID');
		}
		// Step 2: Get the business details using the business_id
		const business = await prisma.business.findUnique({
			where: { business_id: driver.business_id },
		});
		if (!business) {
			throw new Error('Business not found for the given business ID');
		}
		return business;
	} catch (error) {
		console.error('Error retrieving business by driver ID:', error);
		throw error;
	}
};
/**
 * Get a driver's location history between two timestamps as simplified coordinates.
 *
 * @param {string} driverId - Driver ID.
 * @param {string|Date} startTime - Start time inclusive.
 * @param {string|Date} endTime - End time inclusive.
 * @returns {Promise<object[]>} Array of simplified location entries.
 */
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
/**
 * Get a driver's location history with time-weighted performance scoring based on speed.
 *
 * @param {string} driverId - Driver ID.
 * @param {string|Date} startTime - Start time inclusive.
 * @param {string|Date} endTime - End time inclusive.
 * @returns {Promise<{locations: object[], averageScore: number|null}>} Locations with average performance.
 */
async function getDriverLocationsWithPerformance(driverId, startTime, endTime) {
	try {
		const rows = await prisma.driver_history_locations.findMany({
			where: {
				driver_id: driverId,
				created_at: { gte: new Date(startTime), lte: new Date(endTime) },
			},
			select: { location: true, created_at: true },
			orderBy: { created_at: 'asc' },
		});

		if (!rows?.length) return { locations: [], averageScore: null };

		// Tunables
		const TARGET_KMH = 30; // desired “normal” speed
		const MAX_KMH = 150; // clip ridiculous spikes
		const MIN_METERS = 10; // ignore jitter hops
		const MIN_SECONDS = 3; // ignore ultra-short intervals

		const toRad = (d) => (d * Math.PI) / 180;
		const haversineKm = (lat1, lon1, lat2, lon2) => {
			const R = 6371;
			const dLat = toRad(lat2 - lat1);
			const dLon = toRad(lon2 - lon1);
			const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
			return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		};

		// Try to read both GeoJSON and loose shapes
		const extractLatLon = (loc) => {
			if (!loc) return { lat: null, lon: null };
			if (Array.isArray(loc.coordinates) && loc.coordinates.length >= 2) {
				const [lon, lat] = loc.coordinates;
				return { lat, lon };
			}
			return {
				lat: loc.coordinates?.latitude ?? loc.latitude ?? loc.lat ?? null,
				lon: loc.coordinates?.longitude ?? loc.longitude ?? loc.lon ?? null,
			};
		};

		let prev = null;
		let weightedScoreSum = 0;
		let weightSum = 0;

		const formatted = rows.map((row, idx) => {
			const { lat, lon } = extractLatLon(row.location) || {};
			const ts = new Date(row.created_at);

			if (idx === 0 || prev == null || lat == null || lon == null || prev.lat == null || prev.lon == null) {
				prev = { lat, lon, ts };
				return {
					latitude: lat,
					longitude: lon,
					timestamp: ts,
					distance_km: 0,
					time_min: 0,
					speed_kmh: 0,
					performance_score: 0,
				};
			}

			const minutes = (ts - prev.ts) / 60000;
			let km = lat != null && lon != null ? haversineKm(prev.lat, prev.lon, lat, lon) : 0;

			// Ignore jitter and ultra-short intervals
			if (minutes * 60 < MIN_SECONDS || km * 1000 < MIN_METERS) {
				prev = { lat, lon, ts };
				return {
					latitude: lat,
					longitude: lon,
					timestamp: ts,
					distance_km: 0,
					time_min: minutes,
					speed_kmh: 0,
					performance_score: 0,
				};
			}

			// Guard div-by-zero
			const speedKmh = minutes > 0 ? Math.min((km / minutes) * 60, MAX_KMH) : 0;

			// Score in [0,1]: 1 when speed == TARGET_KMH, falls off linearly, clamped.
			// Adjust if you want different sensitivity.
			const rel = TARGET_KMH > 0 ? Math.abs(speedKmh - TARGET_KMH) / TARGET_KMH : 1;
			const score = Math.max(0, 1 - Math.min(rel, 1)); // 1..0

			// Time-weighted average so dense sampling doesn’t bias
			weightedScoreSum += score * minutes;
			weightSum += minutes;

			const out = {
				latitude: lat,
				longitude: lon,
				timestamp: ts,
				distance_km: Number(km.toFixed(4)),
				time_min: Number(minutes.toFixed(3)),
				speed_kmh: Number(speedKmh.toFixed(1)),
				performance_score: Number(score.toFixed(3)),
			};

			prev = { lat, lon, ts };
			return out;
		});

		const averageScore = weightSum > 0 ? Number((weightedScoreSum / weightSum).toFixed(3)) : null;

		return { locations: formatted, averageScore };
	} catch (err) {
		console.error('Error fetching driver locations:', err);
		throw new Error('Could not fetch driver locations');
	}
}

/**
 * Enable or disable which order types a driver handles.
 *
 * @param {string} driver_id - Driver ID.
 * @param {string} action - 'enable' to set true, anything else sets false.
 * @param {string} type - One of 'taxi', 'transfer', 'delivery'.
 * @returns {Promise<object>} The updated driver.
 */
async function setDriverHandle(driver_id, action, type) {
	const updateData = {};
	const isEnableAction = action === 'enable';
	switch (type) {
		case 'taxi':
			updateData.handles_taxi_orders = isEnableAction;
			break;
		case 'transfer':
			updateData.handles_transfer_orders = isEnableAction;
			break;
		case 'delivery':
			updateData.handles_delivery_orders = isEnableAction;
			break;
		default:
			throw new Error('Invalid type for toggling driver handle field');
	}
	return await prisma.drivers.update({
		where: { driver_id },
		data: updateData,
	});
}
/**
 * Toggle which order streams are active for the driver.
 *
 * @param {string} driver_id - Driver ID.
 * @param {object} types - Flags: { taxi?: boolean, transfer?: boolean, delivery?: boolean }.
 * @returns {Promise<object>} The updated driver.
 */
async function toggleDriverOrders(driver_id, types) {
	try {
		return await prisma.drivers.update({
			where: { driver_id: driver_id },
			data: {
				taxi_orders_toggled: !!types?.taxi,
				transfer_orders_toggled: !!types?.transfer,
				delivery_orders_toggled: !!types?.delivery,
			},
		});
	} catch (error) {
		console.error('Error toggling driver orders:', error);
		throw new Error(error);
	}
}
/**
 * Set the driver's current vehicle, recording last used vehicle and connecting the relation.
 *
 * @param {string} driver_id - Driver ID.
 * @param {string} vehicle_id - Vehicle ID to set as current.
 * @returns {Promise<object>} The updated driver.
 */
async function setDriverCurrentVehicle(driver_id, vehicle_id) {
	try {
		return await prisma.drivers.update({
			where: { driver_id: driver_id },
			data: {
				last_used_vehicle_id: vehicle_id,
				current_vehicle: {
					disconnect: true,
					connect: { vehicle_id },
				},
			},
		});
	} catch (error) {
		console.error("Error setting driver's current vehicle:", error);
		throw new Error(error);
	}
}
/**
 * Clear the driver's current vehicle relation.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object>} The updated driver.
 */
async function clearDriverCurrentVehicle(driver_id) {
	try {
		return await prisma.drivers.update({
			where: { driver_id: driver_id },
			data: {
				current_vehicle: {
					disconnect: true,
				},
			},
		});
	} catch (error) {
		console.error("Error clearing driver's current vehicle:", error);
		throw new Error(error);
	}
}
/**
 * Soft-remove a driver from transport module by nulling transport_module_id.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<object>} The updated driver.
 */
async function removeDriver(driver_id) {
	try {
		return await prisma.drivers.update({
			where: { driver_id },
			data: {
				transport_module_id: null,
			},
		});
	} catch (error) {
		console.error('Error deleting driver:', error);
		throw new Error(error);
	}
}
/**
 * Replace the set of municipalities a driver covers with a new list.
 *
 * @param {string} driver_id - Driver ID.
 * @param {string[]} newMunicipalityIds - New municipality IDs to set.
 * @returns {Promise<void>} Resolves when update is complete.
 */
const addDriverMunicipalities = async (driver_id, newMunicipalityIds) => {
	try {
		const existingMunicipalities = await prisma.driver_municipalities.findMany({
			where: {
				driver_id: driver_id,
			},
			select: {
				municipalities_id: true,
			},
		});

		const existingMunicipalityIds = existingMunicipalities.map((m) => m.municipalities_id);

		// Find municipalities to remove (exist in DB but not in new list)
		const municipalitiesToRemove = existingMunicipalityIds.filter((id) => !newMunicipalityIds.includes(id));

		// Find municipalities to add (exist in new list but not in DB)
		const municipalitiesToAdd = newMunicipalityIds.filter((id) => !existingMunicipalityIds.includes(id));

		if (municipalitiesToRemove.length > 0) {
			await prisma.driver_municipalities.deleteMany({
				where: {
					AND: [{ driver_id: driver_id }, { municipalities_id: { in: municipalitiesToRemove } }],
				},
			});
		}

		const createPromises = municipalitiesToAdd.map((municipality) => {
			return prisma.driver_municipalities.create({
				data: {
					drivers: {
						connect: { driver_id: driver_id },
					},
					municipalities: {
						connect: { municipalities_id: municipality },
					},
				},
			});
		});

		await Promise.all(createPromises);
	} catch (error) {
		console.error('Error updating driver municipalities:', error);
		throw new Error(error);
	}
};
export { setDriverHandle };
export { toggleDriverOrders };
export { getDrivers };
export { getOnlineDrivers };
export { getDriversByDailyMealBusinessId };
export { getDriverById };
export { getDriverByUserId };
export { getDriverLocation };
export { getBusinessByDriverId };
export { updateDriver };
export { updateDriverLocation };
export { updateDriverLocationHistory };
export { updateDriverOnlineStatus };
export { createNewDriver };
export { getAvailableDrivers };
export { updateDriverRideRequirements };
export { getDriversFull };
export { getUnavailableDrivers };
export { getDriverLocations };
export { getDriverLocationsWithPerformance };
export { setDriverCurrentVehicle };
export { clearDriverCurrentVehicle };
export { addDriverMunicipalities };
export { removeDriver };
export default {
	setDriverHandle,
	toggleDriverOrders,
	getDrivers,
	getOnlineDrivers,
	getDriversByDailyMealBusinessId,
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
	getDriverLocationsWithPerformance,
	setDriverCurrentVehicle,
	clearDriverCurrentVehicle,
	addDriverMunicipalities,
	removeDriver,
};
