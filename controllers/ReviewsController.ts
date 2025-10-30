import { Response } from 'express';

import * as ReviewsDao from '../dao/Review.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import { ReviewPayload } from '../types/reviews/ReviewRequests.ts';

/**
 * POST /review/driver/:driver_id
 * @tag Reviews
 * @summary Create a review for a driver
 * @description Ensures reviewable for driver and creates a reviews row.
 * @operationId reviewDriver
 * @bodyDescription Review payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Review created
 * @responseContent {object} application/json
 * @prisma_model reviewable
 * @prisma_model reviews
 */
export async function reviewDriver(
	req: ValidatedRequest<ReviewPayload, { driver_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { driver_id } = req.params;
		const { rating, comment, feedback } = req.body;
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
 * POST /review/stores/:stores_id
 * @tag Reviews
 * @summary Create a review for a store
 * @description Ensures reviewable for stores and creates a reviews row.
 * @operationId reviewStore
 * @bodyDescription Review payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Review created
 * @responseContent {object} application/json
 * @prisma_model reviewable
 * @prisma_model reviews
 */
export async function reviewStore(
	req: ValidatedRequest<ReviewPayload, { stores_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { stores_id } = req.params;
		const { rating, comment, feedback } = req.body;
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
 * POST /review/food-drinks/:food_drinks_id
 * @tag Reviews
 * @summary Create a review for food_drinks
 * @description Ensures reviewable for food_drinks and creates a reviews row.
 * @operationId reviewFoodDrinks
 * @bodyDescription Review payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Review created
 * @responseContent {object} application/json
 * @prisma_model reviewable
 * @prisma_model reviews
 */
export async function reviewFoodDrinks(
	req: ValidatedRequest<ReviewPayload, { food_drinks_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { food_drinks_id } = req.params;
		const { rating, comment, feedback } = req.body;
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
