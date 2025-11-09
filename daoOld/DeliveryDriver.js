import prisma from '../prisma/prisma.js';
import UserDao from './User.js';
/**
 * List delivery drivers with optional filters and included relations.
 *
 * @param {object} args - Additional Prisma findMany args (where, orderBy, etc.).
 * @returns {Promise<object[]>} Array of delivery drivers with user and vehicles.
 */
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
		console.error('Error retrieving delivery drivers:', error);
		throw new Error(error);
	}
};
/**
 * List online delivery drivers with optional extra filters.
 *
 * @param {object} args - Additional where filters to merge.
 * @returns {Promise<object[]>} Array of online delivery drivers.
 */
const getOnlineDeliveryDrivers = async (args) => {
	try {
		return await prisma.delivery_drivers.findMany({
			where: {
				online: true,
				...args,
			},
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
		console.error('Error retrieving online delivery drivers:', error);
		throw new Error(error);
	}
};
/**
 * Update a delivery driver (excluding location field which is handled separately).
 *
 * @param {string} delivery_driver_id - Driver ID.
 * @param {object} updateData - Partial fields to update.
 * @returns {Promise<object>} The updated driver with relations.
 */
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
						vehicle_specification: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error updating driver:', error);
		throw new Error(error);
	}
};
/**
 * Get a delivery driver by ID with customizable include.
 *
 * @param {string} delivery_driver_id - Driver ID.
 * @param {object} includeParams - Optional Prisma include object.
 * @returns {Promise<object|null>} The driver record or null.
 */
const getDeliveryDriverById = async (delivery_driver_id, includeParams) => {
	const defaultInclude = {
		user: true,
		vehicles: {
			include: {
				vehicle_specification: true,
			},
		},
		documents: false,
	};
	const include = includeParams || defaultInclude;
	console.log('include:', include);
	try {
		return await prisma.delivery_drivers.findUnique({
			where: {
				delivery_driver_id: delivery_driver_id,
			},
			include: include,
		});
	} catch (error) {
		console.error('Error retrieving delivery driver:', error);
		throw new Error(error);
	}
};
/**
 * Get a delivery driver by its user ID.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<object|null>} The driver record or null.
 */
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
		console.error('Error retrieving delivery driver by user ID:', error);
		throw new Error(error);
	}
};
/**
 * List delivery drivers associated with a daily meal business.
 *
 * @param {string} businessId - Business ID.
 * @returns {Promise<object[]>} Array of delivery drivers.
 */
const getDeliveryDriversByDailyMealBusinessId = async (businessId) => {
	try {
		return await prisma.delivery_drivers.findMany({
			where: {
				daily_meal_business_id: businessId,
			},
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
		console.error('Error retrieving delivery drivers by business ID:', error);
		throw new Error(error);
	}
};
/**
 * Get the current location object for a delivery driver.
 *
 * @param {string} delivery_driver_id - Driver ID.
 * @returns {Promise<object|null>} Location object or null.
 */
const getDeliveryDriverLocation = async (delivery_driver_id) => {
	try {
		const deliveryDriver = await prisma.delivery_drivers.findUnique({
			where: { delivery_driver_id },
			select: {
				location: true, // Select only the location field
			},
		});
		return deliveryDriver ? deliveryDriver.location : null;
	} catch (error) {
		console.error("Error retrieving delivery driver's location:", error);
		throw new Error(error);
	}
};
/**
 * Update the online status of a delivery driver.
 *
 * @param {string} delivery_driver_id - Driver ID.
 * @param {boolean} isOnline - Online flag.
 * @returns {Promise<object>} The updated driver record.
 */
const updateDeliveryDriverOnlineStatus = async (delivery_driver_id, isOnline) => {
	try {
		return await prisma.delivery_drivers.update({
			where: { delivery_driver_id },
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
		console.error("Error setting delivery driver's online status:", error);
		throw new Error(error);
	}
};
/**
 * Update the stored location for a delivery driver.
 *
 * @param {string} delivery_driver_id - Driver ID.
 * @param {object} location - Location payload (name, address, coordinates{latitude, longitude}).
 * @returns {Promise<object>} The updated driver record.
 */
const updateDeliveryDriverLocation = async (delivery_driver_id, location) => {
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
		console.error("Error updating delivery driver's location:", error);
		throw new Error(error);
	}
};
/**
 * Append a location entry to a driver's location history (optionally linked to an order and status).
 *
 * @param {string} delivery_driver_id - Driver ID.
 * @param {object} location - Location payload.
 * @param {string|number|null} status - Optional status value.
 * @param {string|null} order_id - Optional order ID to link.
 * @returns {Promise<object>} The created history location record.
 */
const updateDeliveryDriverLocationHistory = async (delivery_driver_id, location, status, order_id) => {
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
			delivery_driver: {
				connect: {
					delivery_driver_id: delivery_driver_id,
				},
			},
			...(order_id ? { order: { connect: { order_id: order_id } } } : {}),
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
/**
 * Create a delivery driver, optionally creating the user first if not provided.
 *
 * @param {object} driverData - Driver-specific fields.
 * @param {object} userData - User fields or an existing user with user_id.
 * @returns {Promise<object>} The created driver with nested user data.
 */
const createDeliveryDriver = async (driverData, userData) => {
	try {
		let newUser = userData;
		if (!userData?.user_id) {
			newUser = await UserDao.createNewUser(userData);
			if (!newUser) {
				throw new Error('Failed to create user for new delivery driver', userData);
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
			user: newUser,
		};
	} catch (error) {
		console.error('Error creating new delivery driver:', error);
		throw new Error(error.message);
	}
};
/**
 * List delivery drivers who are online and not currently on an order.
 *
 * @returns {Promise<object[]>} Array of available drivers.
 */
const getAvailableDeliveryDrivers = async () => {
	try {
		return await prisma.delivery_drivers.findMany({
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
		console.error('Error getting available delivery drivers:', error);
		throw new Error(error);
	}
};
/**
 * Update a driver's location (alias to updateDeliveryDriverLocation).
 *
 * @param {string} delivery_driver_id - Driver ID.
 * @param {object} location - Location payload.
 * @returns {Promise<object>} The updated driver record.
 */
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
/**
 * Get the business associated with a delivery driver.
 *
 * @param {string} delivery_driver_id - Driver ID.
 * @returns {Promise<object>} The related business.
 */
const getBusinessByDeliveryDriverId = async (delivery_driver_id) => {
	try {
		const driver = await prisma.delivery_drivers.findUnique({
			where: { delivery_driver_id },
			select: { business_id: true },
		});
		if (!driver || !driver.business_id) {
			throw new Error('Business not found for the given driver ID');
		}
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
export { getDeliveryDrivers };
export { getOnlineDeliveryDrivers };
export { getDeliveryDriverById };
export { getDeliveryDriverByUserId };
export { getDeliveryDriversByDailyMealBusinessId };
export { getDeliveryDriverLocation };
export { updateDeliveryDriver };
export { updateDeliveryDriverLocation };
export { updateDeliveryDriverOnlineStatus };
export { createDeliveryDriver };
export { getAvailableDeliveryDrivers };
export { updateDriverLocation };
export { updateDeliveryDriverLocationHistory };
export { getBusinessByDeliveryDriverId };
export default {
	getDeliveryDrivers,
	getOnlineDeliveryDrivers,
	getDeliveryDriverById,
	getDeliveryDriverByUserId,
	getDeliveryDriversByDailyMealBusinessId,
	getDeliveryDriverLocation,
	updateDeliveryDriver,
	updateDeliveryDriverLocation,
	updateDeliveryDriverOnlineStatus,
	createDeliveryDriver,
	getAvailableDeliveryDrivers,
	updateDriverLocation,
	updateDeliveryDriverLocationHistory,
	getBusinessByDeliveryDriverId,
};
