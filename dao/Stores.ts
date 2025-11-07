import prisma from '../prisma/prisma.js';
import { StoreDetail } from '../schemas/dto/Stores/store.dto.js';
/**
 * Set store online or offline
 *
 * @param {string} stores_id - The ID of the store.
 * @param {boolean} online - Whether the store is online or offline.
 * @returns {Promise<StoreDetail>} The updated store.
 */
export async function setStoreOnline(stores_id: string, online: boolean): Promise<StoreDetail> {
	try {
		return await prisma.stores.update({ where: { stores_id }, data: { online } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting store online:', message);
		throw new Error(message);
	}
}
/**
 * Set store overwhelmed status
 *
 * @param {string} stores_id - The ID of the store.
 * @param {boolean} overwhelmed - Whether the store is overwhelmed or not.
 * @returns {Promise<StoreDetail>} The updated store.
 */
export async function setStoreOverwhelmed(stores_id: string, overwhelmed: boolean): Promise<StoreDetail> {
	try {
		return await prisma.stores.update({ where: { stores_id }, data: { overwhelmed } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting store overwhelmed:', message);
		throw new Error(message);
	}
}
/**
 * Disable a store.
 *
 * @param {string} stores_id - The ID of the store.
 * @returns {Promise<StoreDetail>} The updated store.
 */
export async function disableStore(stores_id: string): Promise<StoreDetail> {
	try {
		return await prisma.stores.update({ where: { stores_id }, data: { enabled: false, online: false } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error disabling store:', message);
		throw new Error(message);
	}
}
/**
 * Enable a store.
 *
 * @param {string} stores_id - The ID of the store.
 * @returns {Promise<StoreDetail>} The updated store.
 */
export async function enableStore(stores_id: string): Promise<StoreDetail> {
	try {
		return await prisma.stores.update({ where: { stores_id }, data: { enabled: true } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error enabling store:', message);
		throw new Error(message);
	}
}

/**
 * Get stores_id for a given business_id.
 *
 * @param {string} businessId
 * @returns {Promise<string | null>} stores_id or null if not found
 * @throws {Error} on DB error
 */
export async function getStoresIdByBusinessId(businessId: string): Promise<string | null> {
	try {
		const row = await prisma.stores_module.findUnique({
			where: { business_id: businessId },
			select: { stores_id: true },
		});
		return row?.stores_id ?? null;
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error fetching stores_id by business_id:', message);
		throw new Error(message);
	}
}

export default { setStoreOnline, setStoreOverwhelmed, disableStore, enableStore, getStoresIdByBusinessId };
