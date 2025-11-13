import prisma from '../prisma/prisma.js';
import UserDao from './User.js';
import BusinessDao from './Business.ts';
import { createCustomer } from '../lib/stripe.js';
import { SERVICE_TYPE } from '../lib/constants.js';
import type { DriverBase, DriverDetail } from '../schemas/dto/Drivers/index.js';
import { toDriverDetail } from '../schemas/dto/Drivers/index.js';

// Define common query arg types
interface FindManyArgs {
	where?: any;
	include?: any;
	orderBy?: any;
	skip?: number;
	take?: number;
}

interface CreateDriverData {
	business_id?: string | null;
	transport_module_id?: string | null;
	daily_meal_business_id?: string | null;
	[key: string]: any;
}

interface CreateUserData {
	email: string;
	first_name: string;
	last_name: string;
	telephone: string;
	[key: string]: any;
}

/**
 * List drivers with optional filters and included relations.
 *
 * @param {FindManyArgs} args - Additional Prisma findMany args.
 * @returns {Promise<DriverDetail[]>} Array of drivers with user and vehicles.
 */
const getDrivers = async (args?: FindManyArgs): Promise<DriverDetail[]> => {
	try {
		const drivers = await prisma.drivers.findMany({
			...args,
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});

		return drivers.map((driver: any) => toDriverDetail(driver));
	} catch (error) {
		console.error('Error retrieving drivers:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get drivers');
	}
};

/**
 * List a business' drivers with included relations.
 *
 * @param {string} business_id - Business ID.
 * @returns {Promise<DriverDetail[]>} Array of drivers with user and vehicles.
 */
const getDriversByBusinessId = async (business_id: string): Promise<DriverDetail[]> => {
	try {
		const transportBusiness = await prisma.transport_module.findUnique({
			where: { business_id },
		});
		if (!transportBusiness) return [];
		const drivers = await prisma.drivers.findMany({
			where: { transport_module_id: transportBusiness.transport_module_id },
			include: { user: true, vehicles: true, current_vehicle: true },
		});
		return drivers.map((d: any) => toDriverDetail({ ...d, business_id }));
	} catch (error) {
		console.error('Error retrieving drivers by business ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get drivers by business ID');
	}
};

/**
 * List drivers with full nested user documents and vehicle specifications.
 *
 * @param {FindManyArgs} args - Additional Prisma findMany args.
 * @returns {Promise<DriverDetail[]>} Array of drivers with rich relations.
 */
const getDriversFull = async (args?: FindManyArgs): Promise<DriverDetail[]> => {
	try {
		const drivers = await prisma.drivers.findMany({
			...args,
			include: {
				user: true,
				documents: { include: { files: true } },
				profile_picture: true,
				driver_municipalities: true,
				vehicles: true,
				current_vehicle: true,
			},
		});
		return drivers.map((driver: any) => toDriverDetail(driver));
	} catch (error) {
		console.error('Error retrieving drivers:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get drivers full');
	}
};

/**
 * List online drivers with optional extra filters.
 *
 * @param {any} args - Additional where filters.
 * @returns {Promise<DriverDetail[]>} Array of online drivers.
 */
const getOnlineDrivers = async (args?: any): Promise<DriverDetail[]> => {
	try {
		const drivers = await prisma.drivers.findMany({
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

		return drivers.map((driver: any) => toDriverDetail(driver));
	} catch (error) {
		console.error('Error retrieving online drivers:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get online drivers');
	}
};

/**
 * List drivers associated with a daily meal business.
 *
 * @param {string} businessId - Business ID.
 * @returns {Promise<DriverDetail[]>} Array of drivers.
 */
const getDriversByDailyMealBusinessId = async (businessId: string): Promise<DriverDetail[]> => {
	try {
		const dailyMealBusiness = await BusinessDao.getBusinessById(businessId);
		if (!dailyMealBusiness?.daily_meals_module_id) return [];
		const driverLinks = await prisma.daily_meals_drivers.findMany({
			where: { daily_meals_module_id: dailyMealBusiness.daily_meals_module_id },
		});
		const drivers = await prisma.drivers.findMany({
			where: { driver_id: { in: driverLinks.map((d: { driver_id: string }) => d.driver_id) } },
			include: { user: true, vehicles: true, current_vehicle: true },
		});
		return drivers.map((driver: any) => toDriverDetail(driver));
	} catch (error) {
		console.error('Error retrieving drivers by daily meal business ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get drivers by daily meal business ID');
	}
};

/**
 * Get a driver by ID with included relations.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<DriverDetail | null>} Driver or null if not found.
 */
const getDriverById = async (driver_id: string): Promise<DriverDetail | null> => {
	try {
		const driver = await prisma.drivers.findUnique({
			where: { driver_id },
			include: {
				user: {
					include: {
						addresses: { include: { address: true } },
						business_users: {
							include: {
								business: {
									include: {
										documents: { include: { files: true } },
									},
								},
							},
						},
					},
				},
				vehicles: true,
				current_vehicle: true,
				documents: { include: { files: true } },
				activity_logs: { orderBy: { started_at: 'desc' } },
				daily_meals: true,
				transport_module: true,
			},
		});
		if (!driver) return null;
		const enriched = { ...driver, business_id: (driver as any)?.transport_module?.business_id || null };
		return toDriverDetail(enriched);
	} catch (error) {
		console.error('Error retrieving driver by ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get driver by ID');
	}
};

/**
 * Get a driver by user ID.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<DriverDetail | null>} Driver or null if not found.
 */
const getDriverByUserId = async (user_id: string): Promise<DriverDetail | null> => {
	try {
		const driver = await prisma.drivers.findFirst({
			where: { user_id },
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
				transport_module: true,
			},
		});
		if (!driver) return null;
		const enriched = { ...driver, business_id: (driver as any)?.transport_module?.business_id || null };
		return toDriverDetail(enriched);
	} catch (error) {
		console.error('Error retrieving driver by user ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get driver by user ID');
	}
};

/**
 * Get driver location by driver ID.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<any | null>} Driver location or null.
 */
const getDriverLocation = async (driver_id: string): Promise<any | null> => {
	try {
		const driver = await prisma.drivers.findUnique({
			where: { driver_id },
			select: {
				location: true,
				last_ping_at: true,
			},
		});

		return driver?.location || null;
	} catch (error) {
		console.error('Error retrieving driver location:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get driver location');
	}
};

/**
 * Update driver online status.
 *
 * @param {string} driver_id - Driver ID.
 * @param {boolean} isOnline - Online status.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const updateDriverOnlineStatus = async (driver_id: string, isOnline: boolean): Promise<DriverDetail> => {
	try {
		const vehicleUpdate = isOnline ? {} : { current_vehicle: { disconnect: true } };
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: { online: isOnline, ...vehicleUpdate },
			include: { user: true, vehicles: true, current_vehicle: true },
		});
		return toDriverDetail(driver);
	} catch (error) {
		console.error('Error updating driver online status:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update driver online status');
	}
};

/**
 * Update driver ride requirements.
 *
 * @param {string} driver_id - Driver ID.
 * @param {any} ride_requirements - Ride requirements object.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const updateDriverRideRequirements = async (driver_id: string, ride_requirements: any): Promise<DriverDetail> => {
	try {
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: { ride_requirements },
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});

		return toDriverDetail(driver);
	} catch (error) {
		console.error('Error updating driver ride requirements:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update driver ride requirements');
	}
};

/**
 * Update driver location and ping time.
 *
 * @param {string} driver_id - Driver ID.
 * @param {any} location - Location object with coordinates.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const updateDriverLocation = async (driver_id: string, location: any): Promise<DriverDetail> => {
	try {
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: {
				location,
				last_ping_at: new Date(),
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});

		return toDriverDetail(driver);
	} catch (error) {
		console.error('Error updating driver location:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update driver location');
	}
};

/**
 * Update driver location history for tracking.
 *
 * @param {string} driver_id - Driver ID.
 * @param {any} location - Location object.
 * @param {string} status - Driver status.
 * @param {string} order_id - Order ID if applicable.
 * @param {string} type - Order type (taxi, delivery, etc.).
 * @returns {Promise<any>} Created location history entry.
 */
const updateDriverLocationHistory = async (
	driver_id: string,
	location: any,
	status: string,
	order_id: string,
	type: string
): Promise<any> => {
	try {
		return await prisma.driver_history_locations.create({
			data: {
				location: location,
				driver: { connect: { driver_id } },
				...(order_id && type ? { order: { connect: { order_id } } } : {}),
				...(order_id && !type ? { delivery_order: { connect: { order_id } } } : {}),
			},
		});
	} catch (error) {
		console.error('Error updating driver location history:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update driver location history');
	}
};

/**
 * Update driver with partial data.
 *
 * @param {string} driver_id - Driver ID.
 * @param {Partial<DriverBase>} updateData - Data to update.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const updateDriver = async (driver_id: string, updateData: Partial<DriverBase>): Promise<DriverDetail> => {
	try {
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: updateData,
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});

		return toDriverDetail(driver);
	} catch (error) {
		console.error('Error updating driver:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update driver');
	}
};

/**
 * Create a new driver with user creation and Stripe customer setup.
 *
 * @param {CreateDriverData} driverData - Driver data.
 * @param {CreateUserData} userData - User data for driver.
 * @returns {Promise<DriverDetail>} Created driver.
 */
const createNewDriver = async (
	driverData: CreateDriverData,
	userData: CreateUserData,
	tx: any = prisma
): Promise<DriverDetail> => {
	try {
		let user;
		const existingUser = await tx.users.findUnique({ where: { telephone: userData.telephone } });
		if (!existingUser) {
			const stripeCustomer = await createCustomer(
				userData.email,
				`${userData.first_name} ${userData.last_name}`,
				userData.telephone
			);
			const createdUser = await UserDao.createNewUser(
				{ ...userData, stripe_customer_id: stripeCustomer.id },
				true,
				tx
			);
			if (!createdUser) throw new Error('Failed to create user for new driver');

			const userRoles = userData.user_roles || [{ role: userData.user_role || 'DRIVER', primary: true }];
			const result = await UserDao.linkRolesToUser(createdUser?.user_id, userRoles, tx);
			console.log('User roles linked:', result);
			user = createdUser;
		} else {
			user = existingUser;
		}
		// Default location scaffold & timestamp
		const locationData = {
			name: null,
			address: null,
			coordinates: { latitude: null, longitude: null },
		};
		const driver = await tx.drivers.create({
			data: {
				...driverData,
				location: locationData,
				last_ping_at: new Date(),
				user: { connect: { user_id: user.user_id } },
				transport_module: driverData.transport_module_id
					? { connect: { transport_module_id: driverData.transport_module_id } }
					: undefined,
			},
			include: { user: true, vehicles: true, current_vehicle: true },
		});
		return toDriverDetail(driver, user);
	} catch (error) {
		console.error('Error creating new driver:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create new driver');
	}
};

/**
 * Get available drivers for a specific service type.
 *
 * @param {string} type - Service type (TAXI, DELIVERY, TRANSFER).
 * @returns {Promise<DriverDetail[]>} Available drivers.
 */
const getAvailableDrivers = async (type: string): Promise<DriverDetail[]> => {
	try {
		const whereClause: any = { online: true, on_order: false };
		if (type === SERVICE_TYPE.TAXI) {
			whereClause.handles_taxi_orders = true;
			whereClause.taxi_orders_toggled = true;
		} else if (type === SERVICE_TYPE.DELIVERY) {
			whereClause.handles_delivery_orders = true;
			whereClause.delivery_orders_toggled = true;
		} else if (type === SERVICE_TYPE.TRANSFER) {
			whereClause.handles_transfer_orders = true;
			whereClause.transfer_orders_toggled = true;
		} else if (type === SERVICE_TYPE.CARGO) {
			whereClause.handles_cargo_orders = true;
			whereClause.cargo_orders_toggled = true;
		}
		const drivers = await prisma.drivers.findMany({
			where: whereClause,
			include: { user: true, vehicles: true, current_vehicle: true },
		});
		return drivers.map((driver: any) => toDriverDetail(driver));
	} catch (error) {
		console.error('Error retrieving available drivers:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get available drivers');
	}
};

/**
 * Get unavailable drivers (offline or on order).
 *
 * @returns {Promise<DriverDetail[]>} Unavailable drivers.
 */
const getUnavailableDrivers = async (): Promise<DriverDetail[]> => {
	try {
		const drivers = await prisma.drivers.findMany({
			where: { online: true, on_order: true },
			include: { user: true, vehicles: true, current_vehicle: true },
		});
		return drivers.map((driver: any) => toDriverDetail(driver));
	} catch (error) {
		console.error('Error retrieving unavailable drivers:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get unavailable drivers');
	}
};
/**
 * Toggle which order types a driver can handle (taxi, transfer, delivery).
 *
 * @param {string} driver_id - Driver ID.
 * @param {string} action - Action: 'enable' or 'disable'.
 * @param {string} type - Order type: 'taxi', 'transfer', or 'delivery'.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const setDriverHandle = async (driver_id: string, action: string, type: string): Promise<DriverDetail> => {
	try {
		const updateData: any = {};
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
			case 'cargo':
				updateData.handles_cargo_orders = isEnableAction;
				break;
			default:
				throw new Error('Invalid type for toggling driver handle field');
		}
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: updateData,
			include: { user: true, vehicles: true, current_vehicle: true },
		});
		return toDriverDetail(driver);
	} catch (error) {
		console.error('Error setting driver handle:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to set driver handle');
	}
};

/**
 * Toggle which order streams are active for the driver.
 *
 * @param {string} driver_id - Driver ID.
 * @param {object} types - Flags: { taxi?: boolean, transfer?: boolean, delivery?: boolean }.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const toggleDriverOrders = async (
	driver_id: string,
	types: { taxi?: boolean; transfer?: boolean; delivery?: boolean; cargo?: boolean }
): Promise<DriverDetail> => {
	try {
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: {
				taxi_orders_toggled: !!types?.taxi,
				transfer_orders_toggled: !!types?.transfer,
				delivery_orders_toggled: !!types?.delivery,
				cargo_orders_toggled: !!types?.cargo,
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});

		return toDriverDetail(driver);
	} catch (error) {
		console.error('Error toggling driver orders:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to toggle driver orders');
	}
};

/**
 * Get driver location history for a time period.
 *
 * @param {string} driverId - Driver ID.
 * @param {string|Date} startTime - Start time inclusive.
 * @param {string|Date} endTime - End time inclusive.
 * @returns {Promise<any[]>} Array of simplified location entries.
 */
const getDriverLocations = async (
	driverId: string,
	startTime: string | Date,
	endTime: string | Date
): Promise<any[]> => {
	try {
		const locations = await prisma.driver_history_locations.findMany({
			where: {
				driver_id: driverId,
				created_at: {
					gte: new Date(startTime),
					lte: new Date(endTime),
				},
			},
			select: { location: true, created_at: true },
			orderBy: { created_at: 'asc' },
		});
		const formattedLocations = locations.map((entry: any) => {
			const loc = entry.location;
			return {
				address: loc?.address || null,
				coordinates: {
					latitude: loc?.coordinates?.latitude || null,
					longitude: loc?.coordinates?.longitude || null,
				},
				timestamp: entry.created_at,
			};
		});
		return formattedLocations;
	} catch (error) {
		console.error('Error fetching driver locations:', error);
		throw new Error(error instanceof Error ? error.message : 'Could not fetch driver locations');
	}
};

/**
 * Get driver location history with performance scoring based on speed.
 *
 * @param {string} driverId - Driver ID.
 * @param {string|Date} startTime - Start time inclusive.
 * @param {string|Date} endTime - End time inclusive.
 * @returns {Promise<{locations: any[], averageScore: number|null}>} Locations with average performance.
 */
const getDriverLocationsWithPerformance = async (
	driverId: string,
	startTime: string | Date,
	endTime: string | Date
): Promise<{ locations: any[]; averageScore: number | null }> => {
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

		// Performance calculation constants
		const TARGET_KMH = 30;
		const MAX_KMH = 150;
		const MIN_METERS = 10;
		const MIN_SECONDS = 3;

		const toRad = (d: number) => (d * Math.PI) / 180;
		const haversineKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
			const R = 6371;
			const dLat = toRad(lat2 - lat1);
			const dLon = toRad(lon2 - lon1);
			const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
			return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		};

		// Extract coordinates from various location formats
		const extractLatLon = (loc: any) => {
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

		let prev: any = null;
		let weightedScoreSum = 0;
		let weightSum = 0;

		const formatted = rows.map((row: any, idx: number) => {
			const { lat, lon } = extractLatLon(row.location) || {};
			const ts = new Date(row.created_at);

			if (idx === 0 || prev == null || lat == null || lon == null || prev.lat == null || prev.lon == null) {
				prev = { lat, lon, ts };
				return {
					latitude: lat,
					longitude: lon,
					timestamp: ts,
					speed_kmh: null,
					performance_score: null,
				};
			}

			// Calculate distance and time
			const distKm = haversineKm(prev.lat, prev.lon, lat, lon);
			const timeDiffMs = ts.getTime() - prev.ts.getTime();
			const timeDiffHours = timeDiffMs / (1000 * 60 * 60);

			prev = { lat, lon, ts };

			// Skip if movement is too small or time too short
			if (distKm * 1000 < MIN_METERS || timeDiffMs / 1000 < MIN_SECONDS) {
				return {
					latitude: lat,
					longitude: lon,
					timestamp: ts,
					speed_kmh: null,
					performance_score: null,
				};
			}

			// Calculate speed
			let speedKmh = timeDiffHours > 0 ? distKm / timeDiffHours : 0;
			speedKmh = Math.min(speedKmh, MAX_KMH); // Cap unrealistic speeds

			// Calculate performance score (0-100, where 100 = TARGET_KMH)
			const score = Math.max(0, 100 - Math.abs(speedKmh - TARGET_KMH) * 2);

			// Add to weighted average
			const weight = timeDiffMs / 1000;
			weightedScoreSum += score * weight;
			weightSum += weight;

			return {
				latitude: lat,
				longitude: lon,
				timestamp: ts,
				speed_kmh: Math.round(speedKmh * 10) / 10,
				performance_score: Math.round(score),
			};
		});

		const averageScore = weightSum > 0 ? Math.round(weightedScoreSum / weightSum) : null;

		return {
			locations: formatted,
			averageScore,
		};
	} catch (error) {
		console.error('Error fetching driver locations with performance:', error);
		throw new Error(error instanceof Error ? error.message : 'Could not fetch driver locations with performance');
	}
};

/**
 * Set the driver's current vehicle.
 *
 * @param {string} driver_id - Driver ID.
 * @param {string} vehicle_id - Vehicle ID to set as current.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const setDriverCurrentVehicle = async (driver_id: string, vehicle_id: string): Promise<DriverDetail> => {
	try {
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: {
				last_used_vehicle_id: vehicle_id,
				current_vehicle: {
					disconnect: true,
					connect: { vehicle_id },
				},
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});

		return toDriverDetail(driver);
	} catch (error) {
		console.error("Error setting driver's current vehicle:", error);
		throw new Error(error instanceof Error ? error.message : "Failed to set driver's current vehicle");
	}
};

/**
 * Clear the driver's current vehicle relation.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const clearDriverCurrentVehicle = async (driver_id: string): Promise<DriverDetail> => {
	try {
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: {
				current_vehicle: {
					disconnect: true,
				},
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});

		return toDriverDetail(driver);
	} catch (error) {
		console.error("Error clearing driver's current vehicle:", error);
		throw new Error(error instanceof Error ? error.message : "Failed to clear driver's current vehicle");
	}
};

/**
 * Add municipalities to a driver's coverage area.
 *
 * @param {string} driver_id - Driver ID.
 * @param {string[]} newMunicipalityIds - New municipality IDs to set.
 * @returns {Promise<void>} Resolves when update is complete.
 */
const addDriverMunicipalities = async (
	driver_id: string,
	newMunicipalityIds: string[],
	tx: any = prisma
): Promise<void> => {
	try {
		const existingMunicipalities = await tx.driver_municipalities.findMany({
			where: {
				driver_id: driver_id,
			},
			select: {
				municipalities_id: true,
			},
		});

		const existingMunicipalityIds = existingMunicipalities.map((m: any) => m.municipalities_id);

		// Find municipalities to remove
		const municipalitiesToRemove = existingMunicipalityIds.filter((id: string) => !newMunicipalityIds.includes(id));

		// Find municipalities to add
		const municipalitiesToAdd = newMunicipalityIds.filter((id: string) => !existingMunicipalityIds.includes(id));

		if (municipalitiesToRemove.length > 0) {
			await tx.driver_municipalities.deleteMany({
				where: {
					AND: [{ driver_id: driver_id }, { municipalities_id: { in: municipalitiesToRemove } }],
				},
			});
		}

		const createPromises = municipalitiesToAdd.map((municipality: string) => {
			return tx.driver_municipalities.create({
				data: {
					driver_id: driver_id,
					municipalities_id: municipality,
				},
			});
		});

		await Promise.all(createPromises);
	} catch (error) {
		console.error('Error updating driver municipalities:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update driver municipalities');
	}
};

/**
 * Soft-remove a driver from transport module by nulling transport_module_id.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<DriverDetail>} Updated driver.
 */
const removeDriver = async (driver_id: string): Promise<DriverDetail> => {
	try {
		const driver = await prisma.drivers.update({
			where: { driver_id },
			data: {
				transport_module_id: null,
			},
			include: {
				user: true,
				vehicles: true,
				current_vehicle: true,
			},
		});

		return toDriverDetail(driver);
	} catch (error) {
		console.error('Error removing driver:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to remove driver');
	}
};

export { getDrivers };
export { getDriversByBusinessId };
export { getDriversFull };
export { getOnlineDrivers };
export { getDriversByDailyMealBusinessId };
export { getDriverById };
export { getDriverByUserId };
export { getDriverLocation };
export { updateDriverOnlineStatus };
export { updateDriverRideRequirements };
export { updateDriverLocation };
export { updateDriverLocationHistory };
export { updateDriver };
export { createNewDriver };
export { getAvailableDrivers };
export { getUnavailableDrivers };
export { setDriverHandle };
export { toggleDriverOrders };
export { getDriverLocations };
export { getDriverLocationsWithPerformance };
export { setDriverCurrentVehicle };
export { clearDriverCurrentVehicle };
export { addDriverMunicipalities };
export { removeDriver };

export default {
	getDrivers,
	getDriversByBusinessId,
	getDriversFull,
	getOnlineDrivers,
	getDriversByDailyMealBusinessId,
	getDriverById,
	getDriverByUserId,
	getDriverLocation,
	updateDriverOnlineStatus,
	updateDriverRideRequirements,
	updateDriverLocation,
	updateDriverLocationHistory,
	updateDriver,
	createNewDriver,
	getAvailableDrivers,
	getUnavailableDrivers,
	setDriverHandle,
	toggleDriverOrders,
	getDriverLocations,
	getDriverLocationsWithPerformance,
	setDriverCurrentVehicle,
	clearDriverCurrentVehicle,
	addDriverMunicipalities,
	removeDriver,
};
