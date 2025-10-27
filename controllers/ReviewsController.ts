import { Request, Response } from 'express';

import * as ReviewsDao from '../dao/Review.js';

/**
 *
 * - POST /drivers/{driver_id}/reviews
 * - @tag Reviews
 * - @summary Create a review for a driver
 * - @description Ensures reviewable for driver and creates a reviews row.
 * - @operationId reviewDriver
 * - @bodyDescription Review payload
 * - @bodyContent { "rating": 5, "comment": "Great ride" } application/json
 * - @bodyRequired
 * - @prisma_model reviewable
 * - @prisma_model reviews
 * - @response 200 - Review created
 */
export async function reviewDriver(req: Request, res: Response): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { driver_id } = req.params as { driver_id: string };
		const { rating, comment, feedback } = req.body as {
			rating?: number;
			comment?: string;
			feedback?: unknown;
		};
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const payload: any = { rating, comment, feedback };
		const created = await ReviewsDao.reviewDriver(author_id, driver_id, payload);
		res.json(created);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - POST /stores/{stores_id}/reviews
 * - @tag Reviews
 * - @summary Create a review for a store
 * - @description Ensures reviewable for stores and creates a reviews row.
 * - @operationId reviewStore
 * - @bodyDescription Review payload
 * - @bodyContent { "rating": 4, "comment": "Tasty food" } application/json
 * - @bodyRequired
 * - @prisma_model reviewable
 * - @prisma_model reviews
 * - @response 200 - Review created
 */
export async function reviewStore(req: Request, res: Response): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { stores_id } = req.params as { stores_id: string };
		const { rating, comment, feedback } = req.body as {
			rating?: number;
			comment?: string;
			feedback?: unknown;
		};
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const payload: any = { rating, comment, feedback };
		const created = await ReviewsDao.reviewStore(author_id, stores_id, payload);
		res.json(created);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - POST /food-drinks/{food_drinks_id}/reviews
 * - @tag Reviews
 * - @summary Create a review for food_drinks
 * - @description Ensures reviewable for food_drinks and creates a reviews row.
 * - @operationId reviewFoodDrinks
 * - @bodyDescription Review payload
 * - @bodyContent { "rating": 3, "comment": "Okay experience" } application/json
 * - @bodyRequired
 * - @prisma_model reviewable
 * - @prisma_model reviews
 * - @response 200 - Review created
 */
export async function reviewFoodDrinks(req: Request, res: Response): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { food_drinks_id } = req.params as { food_drinks_id: string };
		const { rating, comment, feedback } = req.body as {
			rating?: number;
			comment?: string;
			feedback?: unknown;
		};
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const payload: any = { rating, comment, feedback };
		const created = await ReviewsDao.reviewFoodDrinks(author_id, food_drinks_id, payload);
		res.json(created);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { reviewDriver, reviewStore, reviewFoodDrinks };
