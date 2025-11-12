import prisma from '../prisma/prisma.js';
import { FavoriteDriverBase, FavoriteDriverDetail } from '../schemas/dto/FavoriteDrivers/favorite-drivers.dto.js';
import {
	toUserFavoriteDriverResponse,
	toUserFavoriteDriversList,
} from '../schemas/dto/UserFavoriteDriver/userFavoriteDriver.mappers.js';

/**
 * Add driver to user's favorites
 *
 * @param {string} user_id - The ID of the user.
 * @param {string} driver_id - The ID of the driver.
 * @returns {Promise<FavoriteDriverBase>} The created or updated favorite driver entry.
 */
export async function addFavoriteDriver(user_id: string, driver_id: string): Promise<FavoriteDriverBase> {
	try {
		const res = await prisma.user_favorite_drivers.upsert({
			where: { user_typed_favorite: { user_id, driver_id } },
			create: { user_id, driver_id },
			update: {},
		});

		return toUserFavoriteDriverResponse(res);
	} catch (error: unknown) {
		console.error('Error adding favorite driver:', error);
		throw new Error(String(error));
	}
}

/**
 * Remove driver from user's favorites
 *
 * @param {string} user_id - The ID of the user.
 * @param {string} driver_id - The ID of the driver.
 * @returns {Promise<void>}
 */
export async function removeFavoriteDriver(user_id: string, driver_id: string): Promise<void> {
	try {
		await prisma.user_favorite_drivers.delete({
			where: { user_typed_favorite: { user_id, driver_id } },
		});
	} catch (error: unknown) {
		console.error('Error removing favorite driver:', error);
		throw new Error(String(error));
	}
}

/**
 * List all favorite drivers for a user
 *
 * @param {string} user_id - The ID of the user.
 * @returns {Promise<object[]>} The user's favorite drivers.
 */
export async function listFavoriteDrivers(user_id: string): Promise<FavoriteDriverDetail[]> {
	try {
		const rows = await prisma.user_favorite_drivers.findMany({
			where: { user_id },
			include: { drivers: true },
			orderBy: { created_at: 'desc' },
		});

		return toUserFavoriteDriversList(rows);
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
