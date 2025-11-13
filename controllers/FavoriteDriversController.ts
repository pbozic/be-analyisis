import { Response } from 'express';

import * as FavoriteDao from '../dao/UserFavoriteDriver.ts';
import { ValidatedRequest } from '../types/validatedRequest.ts';

/**
 * POST /users/me/favorite-drivers
 * @tag FavoriteDrivers
 * @summary Add a driver to the authenticated user's favorites
 * @description Creates or ensures a record in user_favorite_drivers.
 * @operationId addFavoriteDriver
 * @bodyDescription Driver to favorite
 * @prisma_model user_favorite_drivers
 * @response 200 - Favorite driver added
 * @responseContent {FavoriteDriverBase} 200.application/json
 * @prisma_model user_favorite_drivers
 */
export async function addFavoriteDriver(
	req: ValidatedRequest<never, { driver_id: string }>,
	res: Response
): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { driver_id } = req.params;
		const fav = await FavoriteDao.addFavoriteDriver(user_id, driver_id);
		res.json(fav);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * DELETE /users/me/favorite-drivers/:driver_id
 * @tag FavoriteDrivers
 * @summary Remove a driver from the authenticated user's favorites
 * @description Deletes a record in user_favorite_drivers by composite key.
 * @operationId removeFavoriteDriver
 * @pathParam {string} driver_id - ID of the driver to remove from favorites
 * @response 200 - Favorite driver removed
 * @responseContent {
 *   "success": true
 * } 200.application/json
 * @prisma_model user_favorite_drivers
 */
export async function removeFavoriteDriver(
	req: ValidatedRequest<never, { driver_id: string }>,
	res: Response
): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		const { driver_id } = req.params;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		await FavoriteDao.removeFavoriteDriver(user_id, driver_id);
		res.json({ success: true });
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * GET /users/me/favorite-drivers
 * @tag FavoriteDrivers
 * @summary List the authenticated user's favorite drivers
 * @description Lists user_favorite_drivers for the user including driver data.
 * @operationId listFavoriteDrivers
 * @response 200 - Favorites listed
 * @responseContent {FavoriteDriverDetail[]} 200.application/json
 * @response 500 - Error listing favorites
 * @prisma_model user_favorite_drivers
 * @prisma_model users
 */
export async function listFavoriteDrivers(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const favs = await FavoriteDao.listFavoriteDrivers(user_id);
		res.json(favs);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { addFavoriteDriver, removeFavoriteDriver, listFavoriteDrivers };
