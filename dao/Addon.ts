import type { business, MODULE_TYPE } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { CreateAddonSchema, UpdateAddonSchema } from '../types/subscriptions/Subscription.js';

/**
 * Create a new addon
 *
 * @param {CreateAddonSchema} data
 * @returns {Promise<business>}
 */
export async function createAddon(data: CreateAddonSchema): Promise<business> {
	try {
		return await prisma.addon.create({
			data: {
				module: data.module,
				name: data.name,
				price_cents: data.price_cents,
				stripe_price_id: data.stripe_price_id,
			},
		});
	} catch (error) {
		console.error('Error creating addon:', error);
		throw new Error('Failed to create addon');
	}
}
/**
 * Update an existing addon
 *
 * @param {string} addonId
 * @param {UpdateAddonSchema} data
 * @returns {Promise<business>}
 */
export async function updateAddon(addonId: string, data: UpdateAddonSchema): Promise<business> {
	try {
		return await prisma.addon.update({
			where: { addon_id: addonId },
			data: {
				module: data.module,
				name: data.name,
				price_cents: data.price_cents,
				stripe_price_id: data.stripe_price_id,
			},
		});
	} catch (error) {
		console.error('Error updating addon:', error);
		throw new Error('Failed to update addon');
	}
}
/**
 * Delete an addon
 *
 * @param {string} addonId
 * @returns {Promise<void>}
 */
export async function deleteAddon(addonId: string): Promise<void> {
	try {
		await prisma.addon.delete({
			where: { addon_id: addonId },
		});
	} catch (error) {
		console.error('Error deleting addon:', error);
		throw new Error('Failed to delete addon');
	}
}
/**
 * Get all addons
 *
 * @returns {Promise<business[]>}
 */
export async function getAllAddons(): Promise<business[]> {
	try {
		return await prisma.addon.findMany();
	} catch (error) {
		console.error('Error fetching addons:', error);
		throw new Error('Failed to fetch addons');
	}
}
/**
 * Get an addon by ID
 *
 * @param {string} addonId
 * @returns {Promise<business | null>}
 */
export async function getAddonById(addonId: string): Promise<business | null> {
	try {
		return await prisma.addon.findUnique({
			where: { addon_id: addonId },
		});
	} catch (error) {
		console.error('Error fetching addon:', error);
		throw new Error('Failed to fetch addon');
	}
}
/**
 * Get addons by module type
 *
 * @param {MODULE_TYPE} module
 * @returns {Promise<business[]>}
 */
export async function getAddonsByModule(module: MODULE_TYPE): Promise<business[]> {
	try {
		return await prisma.addon.findMany({
			where: { module },
		});
	} catch (error) {
		console.error('Error fetching addons by module:', error);
		throw new Error('Failed to fetch addons by module');
	}
}
/**
 * Get addons by business ID
 *
 * @param {string} businessId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByBusinessId(businessId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: { addon: true },
		});
	} catch (error) {
		console.error('Error fetching addons by business ID:', error);
		throw new Error('Failed to fetch addons by business ID');
	}
}
/**
 * Get addons by reservation module ID
 *
 * @param {string} reservationModuleId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByReservationModuleId(reservationModuleId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: { addon: true },
		});
	} catch (error) {
		console.error('Error fetching addons by reservation module ID:', error);
		throw new Error('Failed to fetch addons by reservation module ID');
	}
}
/**
 * Get all addons with their actions
 *
 * @returns {Promise<business[]>}
 */
export async function getAllAddonsWithActions(): Promise<business[]> {
	try {
		return await prisma.addon.findMany({
			include: {
				actions: true,
				business_addons: {
					include: {
						reservation_module: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addons with actions:', error);
		throw new Error('Failed to fetch addons with actions');
	}
}
/**
 * Get an addon with its actions by ID
 *
 * @param {string} addonId
 * @returns {Promise<business | null>}
 */
export async function getAddonWithActionsById(addonId: string): Promise<business | null> {
	try {
		return await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				actions: true,
				business_addons: {
					include: {
						reservation_module: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addon with actions:', error);
		throw new Error('Failed to fetch addon with actions');
	}
}
/**
 * Get addons by business ID with their actions
 *
 * @param {string} businessId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByBusinessIdWithActions(businessId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: true,
					},
				},
				reservation_module: true,
			},
		});
	} catch (error) {
		console.error('Error fetching addons by business ID with actions:', error);
		throw new Error('Failed to fetch addons by business ID with actions');
	}
}
/**
 * Get addons by reservation module ID with their actions
 *
 * @param {string} reservationModuleId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByReservationModuleIdWithActions(reservationModuleId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: {
					include: {
						actions: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addons by reservation module ID with actions:', error);
		throw new Error('Failed to fetch addons by reservation module ID with actions');
	}
}
/**
 * Get all addons with their business usages
 *
 * @returns {Promise<business[]>}
 */
export async function getAllAddonsWithUsages(): Promise<business[]> {
	try {
		return await prisma.addon.findMany({
			include: {
				business_addons: {
					include: {
						usages: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addons with usages:', error);
		throw new Error('Failed to fetch addons with usages');
	}
}
/**
 * Get an addon with its business usages by ID
 *
 * @param {string} addonId
 * @returns {Promise<business | null>}
 */
export async function getAddonWithUsagesById(addonId: string): Promise<business | null> {
	try {
		return await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				business_addons: {
					include: {
						usages: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addon with usages:', error);
		throw new Error('Failed to fetch addon with usages');
	}
}
/**
 * Get addons by business ID with their usages
 *
 * @param {string} businessId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByBusinessIdWithUsages(businessId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: true,
				usages: true,
			},
		});
	} catch (error) {
		console.error('Error fetching addons by business ID with usages:', error);
		throw new Error('Failed to fetch addons by business ID with usages');
	}
}
/**
 * Get addons by reservation module ID with their usages
 *
 * @param {string} reservationModuleId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByReservationModuleIdWithUsages(reservationModuleId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: true,
				usages: true,
			},
		});
	} catch (error) {
		console.error('Error fetching addons by reservation module ID with usages:', error);
		throw new Error('Failed to fetch addons by reservation module ID with usages');
	}
}
/**
 * Get all addons with their actions and usages
 *
 * @returns {Promise<business[]>}
 */
export async function getAllAddonsWithActionsAndUsages(): Promise<business[]> {
	try {
		return await prisma.addon.findMany({
			include: {
				actions: true,
				business_addons: {
					include: {
						usages: true,
						reservation_module: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addons with actions and usages:', error);
		throw new Error('Failed to fetch addons with actions and usages');
	}
}
/**
 * Get an addon with its actions and usages by ID
 *
 * @param {string} addonId
 * @returns {Promise<business | null>}
 */
export async function getAddonWithActionsAndUsagesById(addonId: string): Promise<business | null> {
	try {
		return await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				actions: true,
				business_addons: {
					include: {
						usages: true,
						reservation_module: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addon with actions and usages:', error);
		throw new Error('Failed to fetch addon with actions and usages');
	}
}
/**
 * Get addons by business ID with their actions and usages
 *
 * @param {string} businessId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByBusinessIdWithActionsAndUsages(businessId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: true,
					},
				},
				usages: true,
				reservation_module: true,
			},
		});
	} catch (error) {
		console.error('Error fetching addons by business ID with actions and usages:', error);
		throw new Error('Failed to fetch addons by business ID with actions and usages');
	}
}
/**
 * Get addons by reservation module ID with their actions and usages
 *
 * @param {string} reservationModuleId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByReservationModuleIdWithActionsAndUsages(
	reservationModuleId: string
): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: {
					include: {
						actions: true,
					},
				},
				usages: true,
			},
		});
	} catch (error) {
		console.error('Error fetching addons by reservation module ID with actions and usages:', error);
		throw new Error('Failed to fetch addons by reservation module ID with actions and usages');
	}
}
/**
 * Get all addons with their business usages and actions
 *
 * @returns {Promise<business[]>}
 */
export async function getAllAddonsWithUsagesAndActions(): Promise<business[]> {
	try {
		return await prisma.addon.findMany({
			include: {
				business_addons: {
					include: {
						usages: true,
						actions: true,
						reservation_module: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addons with usages and actions:', error);
		throw new Error('Failed to fetch addons with usages and actions');
	}
}
/**
 * Get an addon with its business usages and actions by ID
 *
 * @param {string} addonId
 * @returns {Promise<business | null>}
 */
export async function getAddonWithUsagesAndActionsById(addonId: string): Promise<business | null> {
	try {
		return await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				business_addons: {
					include: {
						usages: true,
						actions: true,
						reservation_module: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addon with usages and actions:', error);
		throw new Error('Failed to fetch addon with usages and actions');
	}
}
/**
 * Get addons by business ID with their usages and actions
 *
 * @param {string} businessId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByBusinessIdWithUsagesAndActions(businessId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: true,
					},
				},
				usages: true,
				reservation_module: true,
			},
		});
	} catch (error) {
		console.error('Error fetching addons by business ID with usages and actions:', error);
		throw new Error('Failed to fetch addons by business ID with usages and actions');
	}
}
/**
 * Get addons by reservation module ID with their usages and actions
 *
 * @param {string} reservationModuleId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByReservationModuleIdWithUsagesAndActions(
	reservationModuleId: string
): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: {
					include: {
						actions: true,
					},
				},
				usages: true,
			},
		});
	} catch (error) {
		console.error('Error fetching addons by reservation module ID with usages and actions:', error);
		throw new Error('Failed to fetch addons by reservation module ID with usages and actions');
	}
}
/**
 * Get all addons with their actions, usages, and business addons
 *
 * @returns {Promise<business[]>}
 */
export async function getAllAddonsWithActionsUsagesAndBusinessAddons(): Promise<business[]> {
	try {
		return await prisma.addon.findMany({
			include: {
				actions: true,
				business_addons: {
					include: {
						usages: true,
						reservation_module: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addons with actions, usages, and business addons:', error);
		throw new Error('Failed to fetch addons with actions, usages, and business addons');
	}
}
/**
 * Get an addon with its actions, usages, and business addons by ID
 *
 * @param {string} addonId
 * @returns {Promise<business | null>}
 */
export async function getAddonWithActionsUsagesAndBusinessAddonsById(addonId: string): Promise<business | null> {
	try {
		return await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				actions: true,
				business_addons: {
					include: {
						usages: true,
						reservation_module: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching addon with actions, usages, and business addons:', error);
		throw new Error('Failed to fetch addon with actions, usages, and business addons');
	}
}
/**
 * Get addons by business ID with their actions, usages, and business addons
 *
 * @param {string} businessId
 * @returns {Promise<business[]>}
 */
export async function getAddonsByBusinessIdWithActionsUsagesAndBusinessAddons(businessId: string): Promise<business[]> {
	try {
		return await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: true,
					},
				},
				usages: true,
				reservation_module: true,
			},
		});
	} catch (error) {
		console.error('Error fetching addons by business ID with actions, usages, and business addons:', error);
		throw new Error('Failed to fetch addons by business ID with actions, usages, and business addons');
	}
}
