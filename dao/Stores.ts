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

export default { setStoreOnline, setStoreOverwhelmed, disableStore, enableStore };
