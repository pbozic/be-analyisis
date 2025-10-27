import { Request, Response } from 'express';

import * as FavoriteDao from '../dao/UserFavoriteDriver.ts';

/**
 *
 * - POST /favorite-drivers
 * - @tag FavoriteDrivers
 * - @summary Add a driver to the authenticated user's favorites
 * - @description Creates or ensures a record in user_favorite_drivers.
 * - @operationId addFavoriteDriver
 * - @bodyDescription Driver to favorite
 * - @bodyContent {
 *   "driver_id": "uuid"
 * } application/json
 * - @bodyRequired
 * - @prisma_model user_favorite_drivers
 * - @response 200 - Favorite driver added
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *   "user_favorite_drivers_id": "uuid",
 *   "user_id": "uuid",
 *   "driver_id": "uuid"
 * }
 */
export async function addFavoriteDriver(req: Request, res: Response): Promise<void> {
	try {
		// @ts-ignore auth middleware attaches user
		const user_id: string = req.user?.user_id;
		const { driver_id } = req.body as { driver_id: string };
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		if (!driver_id) {
			res.status(400).json({ error: 'driver_id is required' });
			return;
		}
		const fav = await FavoriteDao.addFavoriteDriver(user_id, driver_id);
		res.json(fav);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - DELETE /favorite-drivers/{driver_id}
 * - @tag FavoriteDrivers
 * - @summary Remove a driver from the authenticated user's favorites
 * - @description Deletes a record in user_favorite_drivers by composite key.
 * - @operationId removeFavoriteDriver
 * - @prisma_model user_favorite_drivers
 * - @response 200 - Favorite driver removed
 */
export async function removeFavoriteDriver(req: Request, res: Response): Promise<void> {
	try {
		// @ts-ignore
		const user_id: string = req.user?.user_id;
		const { driver_id } = req.params as { driver_id: string };
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const fav = await FavoriteDao.removeFavoriteDriver(user_id, driver_id);
		res.json(fav);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - GET /favorite-drivers
 * - @tag FavoriteDrivers
 * - @summary List the authenticated user's favorite drivers
 * - @description Lists user_favorite_drivers for the user including driver data.
 * - @operationId listFavoriteDrivers
 * - @prisma_model user_favorite_drivers
 * - @response 200 - Favorites listed
 */
export async function listFavoriteDrivers(req: Request, res: Response): Promise<void> {
	try {
		// @ts-ignore
		const user_id: string = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const favs = await FavoriteDao.listFavoriteDrivers(user_id);
		res.json(favs);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { addFavoriteDriver, removeFavoriteDriver, listFavoriteDrivers };
