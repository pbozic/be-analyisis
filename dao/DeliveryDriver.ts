import prisma from '../prisma/prisma.js';
import type { UserRef } from '../schemas/dto/User/index.js';
import type { BusinessRef } from '../schemas/dto/Business/index.js';
import type { VehicleBase } from '../schemas/dto/Vehicles/vehicle.dto.js';

// Use proper DTO interfaces
export interface DeliveryDriverBase {
	delivery_driver_id: string;
	user_id: string;
	online?: boolean;
	on_order?: boolean;
	delivers_daily_meals?: boolean;
	working_hours?: Record<string, unknown> | null;
	business_id?: string | null;
	location?: Record<string, unknown> | null;
	delivery_timeline?: Record<string, unknown> | null;
	last_ping_at?: string | null;
	on_daily_meals?: boolean;
	is_inactive?: boolean;
	scheduled_meals_route?: Record<string, unknown> | null;
	regions?: Record<string, unknown> | null;
	partner_cash_balance?: number;
	daily_meal_business_id?: string | null;
	created_at?: string;
	updated_at?: string;
}

export interface DeliveryDriverDetail extends DeliveryDriverBase {
	user?: UserRef | null;
	vehicles?: VehicleBase[];
	business?: BusinessRef | null;
	daily_meal_business?: BusinessRef | null;
}

// Mapper function
function toDeliveryDriverDetail(row: any): DeliveryDriverDetail {
	return {
		delivery_driver_id: row.delivery_driver_id,
		user_id: row.user_id,
		online: row.online,
		on_order: row.on_order,
		delivers_daily_meals: row.delivers_daily_meals,
		working_hours: row.working_hours,
		business_id: row.business_id,
		location: row.location,
		delivery_timeline: row.delivery_timeline,
		last_ping_at: row.last_ping_at ? new Date(row.last_ping_at).toISOString() : null,
		on_daily_meals: row.on_daily_meals,
		is_inactive: row.is_inactive,
		scheduled_meals_route: row.scheduled_meals_route,
		regions: row.regions,
		partner_cash_balance: row.partner_cash_balance,
		daily_meal_business_id: row.daily_meal_business_id,
		created_at: row.created_at ? new Date(row.created_at).toISOString() : undefined,
		updated_at: row.updated_at ? new Date(row.updated_at).toISOString() : undefined,
		user: row.user || null,
		vehicles: row.vehicles || [],
		business: row.business || null,
		daily_meal_business: row.daily_meal_business || null,
	};
}

// ===============
// List and Get Functions
// ===============

/**
 * Get all delivery drivers
 */
export async function getDeliveryDrivers(): Promise<DeliveryDriverDetail[]> {
	const drivers = await prisma.delivery_drivers.findMany({
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return drivers.map(toDeliveryDriverDetail);
}

/**
 * Get online delivery drivers
 */
export async function getOnlineDeliveryDrivers(): Promise<DeliveryDriverDetail[]> {
	const drivers = await prisma.delivery_drivers.findMany({
		where: { online: true },
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return drivers.map(toDeliveryDriverDetail);
}

/**
 * Get available delivery drivers (online and not on order)
 */
export async function getAvailableDeliveryDrivers(): Promise<DeliveryDriverDetail[]> {
	const drivers = await prisma.delivery_drivers.findMany({
		where: {
			online: true,
			on_order: false,
		},
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return drivers.map(toDeliveryDriverDetail);
}

/**
 * Get delivery drivers with daily meals
 */
export async function getDeliveryDriversWithDailyMeals(): Promise<DeliveryDriverDetail[]> {
	const drivers = await prisma.delivery_drivers.findMany({
		where: { delivers_daily_meals: true },
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return drivers.map(toDeliveryDriverDetail);
}

/**
 * Get delivery driver by ID
 */
export async function getDeliveryDriverById(delivery_driver_id: string): Promise<DeliveryDriverDetail | null> {
	const driver = await prisma.delivery_drivers.findUnique({
		where: { delivery_driver_id },
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return driver ? toDeliveryDriverDetail(driver) : null;
}

/**
 * Get delivery driver by user ID
 */
export async function getDeliveryDriverByUserId(user_id: string): Promise<DeliveryDriverDetail | null> {
	const driver = await prisma.delivery_drivers.findFirst({
		where: { user_id },
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return driver ? toDeliveryDriverDetail(driver) : null;
}

/**
 * Get delivery driver location
 */
export async function getDeliveryDriverLocation(delivery_driver_id: string): Promise<Record<string, unknown> | null> {
	const driver = await prisma.delivery_drivers.findUnique({
		where: { delivery_driver_id },
		select: { location: true },
	});

	return driver?.location as Record<string, unknown> | null;
}

// ===============
// Update Functions
// ===============

/**
 * Update delivery driver data
 */
export async function updateDeliveryDriver(
	delivery_driver_id: string,
	data: Partial<DeliveryDriverBase>
): Promise<DeliveryDriverDetail> {
	// Convert timestamps if they exist
	const updateData: any = { ...data };
	if (updateData.last_ping_at && typeof updateData.last_ping_at === 'string') {
		updateData.last_ping_at = new Date(updateData.last_ping_at);
	}
	if (updateData.created_at && typeof updateData.created_at === 'string') {
		updateData.created_at = new Date(updateData.created_at);
	}
	if (updateData.updated_at && typeof updateData.updated_at === 'string') {
		updateData.updated_at = new Date(updateData.updated_at);
	}

	const driver = await prisma.delivery_drivers.update({
		where: { delivery_driver_id },
		data: updateData,
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return toDeliveryDriverDetail(driver);
}

/**
 * Update delivery driver location
 */
export async function updateDeliveryDriverLocation(
	delivery_driver_id: string,
	location: Record<string, unknown>
): Promise<DeliveryDriverDetail> {
	const driver = await prisma.delivery_drivers.update({
		where: { delivery_driver_id },
		data: {
			location,
			last_ping_at: new Date(),
		},
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return toDeliveryDriverDetail(driver);
}

/**
 * Update delivery driver online status
 */
export async function updateDeliveryDriverOnlineStatus(
	delivery_driver_id: string,
	online: boolean
): Promise<DeliveryDriverDetail> {
	const driver = await prisma.delivery_drivers.update({
		where: { delivery_driver_id },
		data: {
			online,
			last_ping_at: new Date(),
		},
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return toDeliveryDriverDetail(driver);
}

// ===============
// Create and Delete Functions
// ===============

/**
 * Create new delivery driver
 */
export async function createDeliveryDriver(data: {
	user_id: string;
	online?: boolean;
	delivers_daily_meals?: boolean;
	working_hours?: Record<string, unknown>;
	business_id?: string;
	daily_meal_business_id?: string;
}): Promise<DeliveryDriverDetail> {
	const driver = await prisma.delivery_drivers.create({
		data: {
			...data,
			delivery_driver_id: crypto.randomUUID(),
		},
		include: {
			user: true,
			vehicles: true,
			business: true,
			daily_meal_business: true,
		},
	});

	return toDeliveryDriverDetail(driver);
}

// ===============
// Earnings Functions
// ===============

/**
 * Get delivery driver earnings
 */
export async function getDeliveryDriverEarnings(
	delivery_driver_id: string,
	startDate?: Date,
	endDate?: Date
): Promise<Array<Record<string, unknown>>> {
	const whereClause: any = { delivery_driver_id };

	if (startDate || endDate) {
		whereClause.created_at = {};
		if (startDate) whereClause.created_at.gte = startDate;
		if (endDate) whereClause.created_at.lte = endDate;
	}

	// Note: Assuming there's an earnings/orders table that tracks driver earnings
	// This would need to be adjusted based on actual schema
	const earnings = await prisma.$queryRaw`
		SELECT 
			DATE(do.created_at) as date,
			COUNT(*) as total_orders,
			SUM(do.delivery_price) as total_earnings
		FROM delivery_orders do
		WHERE do.delivery_driver_id = ${delivery_driver_id}
		${startDate ? `AND do.created_at >= ${startDate}` : ''}
		${endDate ? `AND do.created_at <= ${endDate}` : ''}
		GROUP BY DATE(do.created_at)
		ORDER BY DATE(do.created_at) DESC
	`;

	return earnings as Array<Record<string, unknown>>;
}

/**
 * Get all delivery drivers earnings
 */
export async function getAllDeliveryDriversEarnings(
	startDate?: Date,
	endDate?: Date
): Promise<Array<Record<string, unknown>>> {
	const whereClause: any = {};

	if (startDate || endDate) {
		whereClause.created_at = {};
		if (startDate) whereClause.created_at.gte = startDate;
		if (endDate) whereClause.created_at.lte = endDate;
	}

	const earnings = await prisma.$queryRaw`
		SELECT 
			dd.delivery_driver_id,
			u.first_name,
			u.last_name,
			COUNT(do.order_id) as total_orders,
			SUM(do.delivery_price) as total_earnings
		FROM delivery_drivers dd
		JOIN users u ON dd.user_id = u.user_id
		LEFT JOIN delivery_orders do ON dd.delivery_driver_id = do.delivery_driver_id
		${startDate || endDate ? 'WHERE' : ''}
		${startDate ? `do.created_at >= ${startDate}` : ''}
		${startDate && endDate ? 'AND' : ''}
		${endDate ? `do.created_at <= ${endDate}` : ''}
		GROUP BY dd.delivery_driver_id, u.first_name, u.last_name
		ORDER BY total_earnings DESC
	`;

	return earnings as Array<Record<string, unknown>>;
}

/**
 * Get delivery driver total earnings
 */
export async function getDeliveryDriverTotalEarnings(delivery_driver_id: string): Promise<number> {
	const result = await prisma.$queryRaw`
		SELECT SUM(delivery_price) as total_earnings
		FROM delivery_orders
		WHERE delivery_driver_id = ${delivery_driver_id}
		AND status = 'completed'
	`;

	const earnings = result as Array<{ total_earnings: number | null }>;
	return earnings[0]?.total_earnings ?? 0;
}

/**
 * Get total earnings across all delivery drivers
 */
export async function getTotalDeliveryDriversEarnings(): Promise<number> {
	const result = await prisma.$queryRaw`
		SELECT SUM(delivery_price) as total_earnings
		FROM delivery_orders
		WHERE status = 'completed'
	`;

	const earnings = result as Array<{ total_earnings: number | null }>;
	return earnings[0]?.total_earnings ?? 0;
}

/**
 * Get delivery drivers by daily meal business ID.
 *
 * @param businessId - Business ID for daily meals.
 * @returns Array of delivery drivers with user and vehicle details.
 */
export async function getDeliveryDriversByDailyMealBusinessId(businessId: string): Promise<DeliveryDriverDetail[]> {
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
		console.error('Error getting delivery drivers by daily meal business ID:', error);
		throw new Error(String(error));
	}
}

/**
 * Update delivery driver location history.
 *
 * @param delivery_driver_id - Delivery driver ID.
 * @param location - Location data.
 * @param status - Status for the location entry.
 * @param order_id - Optional order ID.
 * @returns Created location history record.
 */
export async function updateDeliveryDriverLocationHistory(
	delivery_driver_id: string,
	location: {
		name?: string | null;
		address?: string | null;
		coordinates?: {
			latitude?: number | null;
			longitude?: number | null;
		} | null;
	},
	status?: string,
	order_id?: string
): Promise<any> {
	try {
		const locationData = {
			name: location?.name ?? null,
			address: location?.address ?? null,
			coordinates: {
				latitude: location?.coordinates?.latitude ?? null,
				longitude: location?.coordinates?.longitude ?? null,
			},
		};
		const data: any = {
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
		throw new Error(String(error));
	}
}

/**
 * Update delivery driver location (alias for updateDeliveryDriverLocation).
 *
 * @param delivery_driver_id - Delivery driver ID.
 * @param location - Location data.
 * @returns Updated delivery driver.
 */
export async function updateDriverLocation(
	delivery_driver_id: string,
	location: {
		name?: string | null;
		address?: string | null;
		coordinates?: {
			latitude?: number | null;
			longitude?: number | null;
		} | null;
	}
): Promise<DeliveryDriverDetail> {
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
		throw new Error(String(error));
	}
}

/**
 * Get the business associated with a delivery driver.
 *
 * @param delivery_driver_id - Delivery driver ID.
 * @returns Business data.
 */
export async function getBusinessByDeliveryDriverId(delivery_driver_id: string): Promise<BusinessRef> {
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
		return business as BusinessRef;
	} catch (error) {
		console.error('Error retrieving business by driver ID:', error);
		throw error;
	}
}
