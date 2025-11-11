import type { MODULE_TYPE } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import {
	toAddonResponse,
	toAddonsList,
	toAddonWithActionsResponse,
	toAddonsWithActionsList,
	toAddonFromBusinessAddon,
	toAddonWithActionsAndUsagesResponse,
} from '../schemas/dto/Addon/addon.mappers.js';
import type {
	CreateAddonRequest,
	UpdateAddonRequest,
	AddonResponse,
	AddonsListResponse,
} from '../schemas/dto/Addon/index.js';
import type {
	AddonWithActionsPrisma,
	AddonWithActionsAndUsagesPrisma,
	BusinessAddonWithAddonPrisma,
} from '../prisma/includes/addon.js';
import type { AddonDefaultPrisma } from '../prisma/includes/addon.js';

/**
 * Create a new addon
 *
 * @param {CreateAddonRequest} data
 * @returns {Promise<AddonResponse>}
 */
export async function createAddon(data: CreateAddonRequest): Promise<AddonResponse> {
	try {
		const row = await prisma.addon.create({
			data: {
				module: data.module,
				name: data.name,
				price_cents: data.price_cents,
				stripe_price_id: data.stripe_price_id,
			},
		});

		return toAddonResponse(row as AddonDefaultPrisma);
	} catch (error) {
		console.error('Error creating addon:', error);
		throw new Error('Failed to create addon');
	}
}
/**
 * Update an existing addon
 *
 * @param {string} addonId
 * @param {UpdateAddonRequest} data
 * @returns {Promise<AddonResponse>}
 */
export async function updateAddon(addonId: string, data: UpdateAddonRequest): Promise<AddonResponse> {
	try {
		const row = await prisma.addon.update({
			where: { addon_id: addonId },
			data: {
				module: data.module,
				name: data.name,
				price_cents: data.price_cents,
				stripe_price_id: data.stripe_price_id,
			},
		});

		return toAddonResponse(row as AddonDefaultPrisma);
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
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAllAddons(): Promise<AddonsListResponse> {
	try {
		const rows: AddonDefaultPrisma[] = await prisma.addon.findMany();
		return toAddonsList(rows);
	} catch (error) {
		console.error('Error fetching addons:', error);
		throw new Error('Failed to fetch addons');
	}
}
/**
 * Get an addon by ID
 *
 * @param {string} addonId
 * @returns {Promise<AddonResponse | null>}
 */
export async function getAddonById(addonId: string): Promise<AddonResponse | null> {
	try {
		const row = await prisma.addon.findUnique({
			where: { addon_id: addonId },
		});
		return row ? toAddonResponse(row) : null;
	} catch (error) {
		console.error('Error fetching addon:', error);
		throw new Error('Failed to fetch addon');
	}
}
/**
 * Get addons by module type
 *
 * @param {MODULE_TYPE} module
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByModule(module: MODULE_TYPE): Promise<AddonsListResponse> {
	try {
		const rows: AddonDefaultPrisma[] = await prisma.addon.findMany({
			where: { module },
		});

		return toAddonsList(rows);
	} catch (error) {
		console.error('Error fetching addons by module:', error);
		throw new Error('Failed to fetch addons by module');
	}
}
/**
 * Get addons by business ID
 *
 * @param {string} businessId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByBusinessId(businessId: string): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: true,
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by business ID:', error);
		throw new Error('Failed to fetch addons by business ID');
	}
}
/**
 * Get addons by reservation module ID
 *
 * @param {string} reservationModuleId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByReservationModuleId(reservationModuleId: string): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by reservation module ID:', error);
		throw new Error('Failed to fetch addons by reservation module ID');
	}
}
/**
 * Get all addons with their actions
 *
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAllAddonsWithActions(): Promise<AddonsListResponse> {
	try {
		const rows: AddonWithActionsPrisma[] = await prisma.addon.findMany({
			include: {
				actions: { include: { action: true } },
				business_addons: {
					include: {
						reservation_module: true,
					},
				},
			},
		});

		return toAddonsWithActionsList(rows);
	} catch (error) {
		console.error('Error fetching addons with actions:', error);
		throw new Error('Failed to fetch addons with actions');
	}
}
/**
 * Get an addon with its actions by ID
 *
 * @param {string} addonId
 * @returns {Promise<AddonResponse | null>}
 */
export async function getAddonWithActionsById(addonId: string): Promise<AddonResponse | null> {
	try {
		const row = await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				actions: { include: { action: true } },
				business_addons: {
					include: {
						reservation_module: true,
					},
				},
			},
		});

		return row ? toAddonWithActionsResponse(row) : null;
	} catch (error) {
		console.error('Error fetching addon with actions:', error);
		throw new Error('Failed to fetch addon with actions');
	}
}
/**
 * Get addons by business ID with their actions
 *
 * @param {string} businessId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByBusinessIdWithActions(businessId: string): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: true,
			},
		});

		// Map business_addon rows -> Addon DTOs (unwrap nested addon)
		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by business ID with actions:', error);
		throw new Error('Failed to fetch addons by business ID with actions');
	}
}
/**
 * Get addons by reservation module ID with their actions
 *
 * @param {string} reservationModuleId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByReservationModuleIdWithActions(
	reservationModuleId: string
): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by reservation module ID with actions:', error);
		throw new Error('Failed to fetch addons by reservation module ID with actions');
	}
}
/**
 * Get all addons with their business usages
 *
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAllAddonsWithUsages(): Promise<AddonsListResponse> {
	try {
		const rows: AddonWithActionsAndUsagesPrisma[] = await prisma.addon.findMany({
			include: {
				actions: { include: { action: true } },
				business_addons: {
					include: {
						reservation_module: { include: { usages: true } },
					},
				},
			},
		});

		return rows.map((r) => toAddonWithActionsAndUsagesResponse(r));
	} catch (error) {
		console.error('Error fetching addons with usages:', error);
		throw new Error('Failed to fetch addons with usages');
	}
}
/**
 * Get an addon with its business usages by ID
 *
 * @param {string} addonId
 * @returns {Promise<AddonResponse | null>}
 */
export async function getAddonWithUsagesById(addonId: string): Promise<AddonResponse | null> {
	try {
		const row = await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				business_addons: {
					include: {
						reservation_module: { include: { usages: true } },
					},
				},
			},
		});

		return row ? toAddonWithActionsAndUsagesResponse(row) : null;
	} catch (error) {
		console.error('Error fetching addon with usages:', error);
		throw new Error('Failed to fetch addon with usages');
	}
}
/**
 * Get addons by business ID with their usages
 *
 * @param {string} businessId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByBusinessIdWithUsages(businessId: string): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: { include: { usages: true } },
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by business ID with usages:', error);
		throw new Error('Failed to fetch addons by business ID with usages');
	}
}
/**
 * Get addons by reservation module ID with their usages
 *
 * @param {string} reservationModuleId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByReservationModuleIdWithUsages(
	reservationModuleId: string
): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: { include: { usages: true } },
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by reservation module ID with usages:', error);
		throw new Error('Failed to fetch addons by reservation module ID with usages');
	}
}
/**
 * Get all addons with their actions and usages
 *
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAllAddonsWithActionsAndUsages(): Promise<AddonsListResponse> {
	try {
		const rows: AddonWithActionsAndUsagesPrisma[] = await prisma.addon.findMany({
			include: {
				actions: { include: { action: true } },
				business_addons: {
					include: {
						reservation_module: { include: { usages: true } },
					},
				},
			},
		});

		return rows.map((r) => toAddonWithActionsAndUsagesResponse(r));
	} catch (error) {
		console.error('Error fetching addons with actions and usages:', error);
		throw new Error('Failed to fetch addons with actions and usages');
	}
}
/**
 * Get an addon with its actions and usages by ID
 *
 * @param {string} addonId
 * @returns {Promise<AddonResponse | null>}
 */
export async function getAddonWithActionsAndUsagesById(addonId: string): Promise<AddonResponse | null> {
	try {
		const row = await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				actions: { include: { action: true } },
				business_addons: {
					include: {
						reservation_module: { include: { usages: true } },
					},
				},
			},
		});

		return row ? toAddonWithActionsAndUsagesResponse(row) : null;
	} catch (error) {
		console.error('Error fetching addon with actions and usages:', error);
		throw new Error('Failed to fetch addon with actions and usages');
	}
}
/**
 * Get addons by business ID with their actions and usages
 *
 * @param {string} businessId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByBusinessIdWithActionsAndUsages(businessId: string): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: { include: { usages: true } },
			},
		});

		// Unwrap business_addon rows to addon DTOs
		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by business ID with actions and usages:', error);
		throw new Error('Failed to fetch addons by business ID with actions and usages');
	}
}
/**
 * Get addons by reservation module ID with their actions and usages
 *
 * @param {string} reservationModuleId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByReservationModuleIdWithActionsAndUsages(
	reservationModuleId: string
): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: { include: { usages: true } },
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by reservation module ID with actions and usages:', error);
		throw new Error('Failed to fetch addons by reservation module ID with actions and usages');
	}
}
/**
 * Get all addons with their business usages and actions
 *
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAllAddonsWithUsagesAndActions(): Promise<AddonsListResponse> {
	try {
		const rows: AddonWithActionsAndUsagesPrisma[] = await prisma.addon.findMany({
			include: {
				business_addons: {
					include: {
						reservation_module: { include: { usages: true } },
						actions: { include: { action: true } },
					},
				},
			},
		});

		return rows.map((r) => toAddonWithActionsAndUsagesResponse(r));
	} catch (error) {
		console.error('Error fetching addons with usages and actions:', error);
		throw new Error('Failed to fetch addons with usages and actions');
	}
}
/**
 * Get an addon with its business usages and actions by ID
 *
 * @param {string} addonId
 * @returns {Promise<AddonResponse | null>}
 */
export async function getAddonWithUsagesAndActionsById(addonId: string): Promise<AddonResponse | null> {
	try {
		const row = await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				business_addons: {
					include: {
						reservation_module: { include: { usages: true } },
						actions: { include: { action: true } },
					},
				},
			},
		});

		return row ? toAddonWithActionsAndUsagesResponse(row) : null;
	} catch (error) {
		console.error('Error fetching addon with usages and actions:', error);
		throw new Error('Failed to fetch addon with usages and actions');
	}
}
/**
 * Get addons by business ID with their usages and actions
 *
 * @param {string} businessId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByBusinessIdWithUsagesAndActions(businessId: string): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: { include: { usages: true } },
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by business ID with usages and actions:', error);
		throw new Error('Failed to fetch addons by business ID with usages and actions');
	}
}
/**
 * Get addons by reservation module ID with their usages and actions
 *
 * @param {string} reservationModuleId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByReservationModuleIdWithUsagesAndActions(
	reservationModuleId: string
): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { reservation_module_id: reservationModuleId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: { include: { usages: true } },
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by reservation module ID with usages and actions:', error);
		throw new Error('Failed to fetch addons by reservation module ID with usages and actions');
	}
}
/**
 * Get all addons with their actions, usages, and business addons
 *
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAllAddonsWithActionsUsagesAndBusinessAddons(): Promise<AddonsListResponse> {
	try {
		const rows: AddonWithActionsAndUsagesPrisma[] = await prisma.addon.findMany({
			include: {
				actions: { include: { action: true } },
				business_addons: {
					include: {
						reservation_module: { include: { usages: true } },
					},
				},
			},
		});

		return rows.map((r) => toAddonWithActionsAndUsagesResponse(r));
	} catch (error) {
		console.error('Error fetching addons with actions, usages, and business addons:', error);
		throw new Error('Failed to fetch addons with actions, usages, and business addons');
	}
}
/**
 * Get an addon with its actions, usages, and business addons by ID
 *
 * @param {string} addonId
 * @returns {Promise<AddonResponse | null>}
 */
export async function getAddonWithActionsUsagesAndBusinessAddonsById(addonId: string): Promise<AddonResponse | null> {
	try {
		const row = await prisma.addon.findUnique({
			where: { addon_id: addonId },
			include: {
				actions: { include: { action: true } },
				business_addons: {
					include: {
						reservation_module: { include: { usages: true } },
					},
				},
			},
		});

		return row ? toAddonWithActionsAndUsagesResponse(row) : null;
	} catch (error) {
		console.error('Error fetching addon with actions, usages, and business addons:', error);
		throw new Error('Failed to fetch addon with actions, usages, and business addons');
	}
}
/**
 * Get addons by business ID with their actions, usages, and business addons
 *
 * @param {string} businessId
 * @returns {Promise<AddonsListResponse>}
 */
export async function getAddonsByBusinessIdWithActionsUsagesAndBusinessAddons(
	businessId: string
): Promise<AddonsListResponse> {
	try {
		const rows: BusinessAddonWithAddonPrisma[] = await prisma.business_addon.findMany({
			where: { business_id: businessId },
			include: {
				addon: {
					include: {
						actions: { include: { action: true } },
					},
				},
				reservation_module: { include: { usages: true } },
			},
		});

		return rows.map((r) => toAddonFromBusinessAddon(r));
	} catch (error) {
		console.error('Error fetching addons by business ID with actions, usages, and business addons:', error);
		throw new Error('Failed to fetch addons by business ID with actions, usages, and business addons');
	}
}
