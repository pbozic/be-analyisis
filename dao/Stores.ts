import prisma from '../prisma/prisma.js';

export async function setStoreOnline(stores_id: string, online: boolean) {
	try {
		return await prisma.stores.update({ where: { stores_id }, data: { online } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting store online:', message);
		throw new Error(message);
	}
}

export async function setStoreOverwhelmed(stores_id: string, overwhelmed: boolean) {
	try {
		return await prisma.stores.update({ where: { stores_id }, data: { overwhelmed } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting store overwhelmed:', message);
		throw new Error(message);
	}
}

export async function disableStore(stores_id: string) {
	try {
		return await prisma.stores.update({ where: { stores_id }, data: { enabled: false, online: false } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error disabling store:', message);
		throw new Error(message);
	}
}

export async function enableStore(stores_id: string) {
	try {
		return await prisma.stores.update({ where: { stores_id }, data: { enabled: true } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error enabling store:', message);
		throw new Error(message);
	}
}

export default { setStoreOnline, setStoreOverwhelmed, disableStore, enableStore };
