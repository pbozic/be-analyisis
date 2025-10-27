import prisma from '../prisma/prisma.js';

// Add driver to user's favorites
export async function addFavoriteDriver(user_id: string, driver_id: string) {
	try {
		return await prisma.user_favorite_drivers.upsert({
			where: { user_typed_favorite: { user_id, driver_id } },
			create: { user_id, driver_id },
			update: {},
		});
	} catch (error: unknown) {
		console.error('Error adding favorite driver:', error);
		throw new Error(String(error));
	}
}

// Remove driver from user's favorites
export async function removeFavoriteDriver(user_id: string, driver_id: string) {
	try {
		return await prisma.user_favorite_drivers.delete({
			where: { user_typed_favorite: { user_id, driver_id } },
		});
	} catch (error: unknown) {
		console.error('Error removing favorite driver:', error);
		throw new Error(String(error));
	}
}

// List user's favorite drivers
export async function listFavoriteDrivers(user_id: string) {
	try {
		return await prisma.user_favorite_drivers.findMany({
			where: { user_id },
			include: { drivers: true },
			orderBy: { created_at: 'desc' },
		});
	} catch (error: unknown) {
		console.error('Error listing favorite drivers:', error);
		throw new Error(String(error));
	}
}

export default {
	addFavoriteDriver,
	removeFavoriteDriver,
	listFavoriteDrivers,
};
