import { Request, Response } from 'express';

import * as FavoriteServicesDao from '../dao/UserFavoriteServiceLinks.ts';

/**
 * PATCH /users/me/favorite-services
 * @tag FavoriteServices
 * @summary Update the authenticated user's favorite service links
 * @description Updates user_favorite_service_links for the user.
 * @operationId updateFavoriteServices
 * @prisma_model user_favorite_service_links
 * @bodyContent {object} application/json
 * @response 200 - Favorites updated
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid input data
 * @responseContent {object} 400.application/json
 * @response 500 - Error updating favorites
 * @prisma_model users
 * @prisma_model user_favorite_service_links
 */
export async function updateFavoriteServices(req: Request, res: Response): Promise<void> {
	try {
		// @ts-ignore
		const user_id: string = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { service_ids } = req.body as { service_ids: string[] };
		if (!Array.isArray(service_ids)) {
			res.status(400).json({ error: 'service_ids must be an array of strings' });
			return;
		}
		const updatedFavs = await FavoriteServicesDao.updateFavoriteServices(user_id, service_ids);
		res.json(updatedFavs);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * GET /users/me/favorite-services
 * @tag FavoriteServices
 * @summary List the authenticated user's favorite service links
 * @description Lists user_favorite_service_links for the user including service link data.
 * @operationId listFavoriteServices
 * @prisma_model user_favorite_service_links
 * @response 200 - Favorites listed
 * @responseContent {object} 200.application/json
 * @response 500 - Error listing favorites
 * @prisma_model users
 * @prisma_model user_favorite_service_links
 */
export async function listFavoriteServices(req: Request, res: Response): Promise<void> {
	try {
		// @ts-ignore
		const user_id: string = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const favs = await FavoriteServicesDao.listFavoriteServices(user_id);
		res.json(favs);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { updateFavoriteServices, listFavoriteServices };
