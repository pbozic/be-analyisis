import { Response } from 'express';

import * as ReviewsDao from '../dao/Review.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import type { ReviewBody } from '../schemas/dto/Reviews/review.dto.ts';

/**
 * POST /review/passenger/:user_id
 * @tag Reviews
 * @summary Create a review for a passenger
 * @description Ensures reviewable for passenger and creates a reviews row.
 * @operationId reviewPassenger
 * @bodyDescription Review payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Review created
 * @responseContent {object} application/json
 * @prisma_model reviewable
 * @prisma_model reviews
 */
export async function reviewPassenger(
	req: ValidatedRequest<ReviewBody, { user_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { user_id } = req.params;
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { rating, comment, feedback } = req.body;
		const created = await ReviewsDao.reviewUser(author_id, user_id, { rating, comment, feedback });
		res.json(created);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

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
	req: ValidatedRequest<ReviewBody, { driver_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { driver_id } = req.params;
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { rating, comment, feedback } = req.body;
		const created = await ReviewsDao.reviewDriver(author_id, driver_id, { rating, comment, feedback });
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
	req: ValidatedRequest<ReviewBody, { stores_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { stores_id } = req.params;
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { rating, comment, feedback } = req.body;
		const created = await ReviewsDao.reviewStore(author_id, stores_id, { rating, comment, feedback });
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
	req: ValidatedRequest<ReviewBody, { food_drinks_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { food_drinks_id } = req.params;
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { rating, comment, feedback } = req.body;
		const created = await ReviewsDao.reviewFoodDrinks(author_id, food_drinks_id, { rating, comment, feedback });
		res.json(created);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * POST /review/reservation-module/:reservation_module_id
 * @tag Reviews
 * @summary Create a review for a reservation module
 * @description Ensures reviewable for reservation_module and creates a reviews row.
 * @operationId reviewReservationModule
 * @bodyDescription Review payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Review created
 * @responseContent {object} application/json
 * @prisma_model reviewable
 * @prisma_model reviews
 */
export async function reviewReservationModule(
	req: ValidatedRequest<ReviewBody, { reservation_module_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { reservation_module_id } = req.params;
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { rating, comment, feedback } = req.body;
		const created = await ReviewsDao.reviewReservationBusiness(author_id, reservation_module_id, {
			rating,
			comment,
			feedback,
		});
		res.json(created);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * POST /review/transport-module/:transport_module_id
 * @tag Reviews
 * @summary Create a review for a transport module
 * @description Ensures reviewable for transport_module and creates a reviews row.
 * @operationId reviewTransportModule
 * @bodyDescription Review payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Review created
 * @responseContent {object} application/json
 * @prisma_model reviewable
 * @prisma_model reviews
 */
export async function reviewTransportModule(
	req: ValidatedRequest<ReviewBody, { transport_module_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { transport_module_id } = req.params;
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { rating, comment, feedback } = req.body;
		const created = await ReviewsDao.reviewTransportBusiness(author_id, transport_module_id, {
			rating,
			comment,
			feedback,
		});
		res.json(created);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * POST /review/reservation-booking/:booking_id
 * @tag Reviews
 * @summary Create a review for a reservation booking
 * @description Ensures reviewable for reservation_booking and creates a reviews row.
 * @operationId reviewReservationBooking
 * @bodyDescription Review payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Review created
 * @responseContent {object} application/json
 * @prisma_model reviewable
 * @prisma_model reviews
 */
export async function reviewReservationBooking(
	req: ValidatedRequest<ReviewBody, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		// @ts-ignore
		const author_id: string = req.user?.user_id;
		const { booking_id } = req.params;
		if (!author_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { rating, comment, feedback } = req.body;
		const created = await ReviewsDao.reviewBooking(author_id, booking_id, { rating, comment, feedback });
		res.json(created);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default {
	reviewPassenger,
	reviewDriver,
	reviewStore,
	reviewFoodDrinks,
	reviewReservationModule,
	reviewTransportModule,
	reviewReservationBooking,
};
