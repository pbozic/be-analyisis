import { Response } from 'express';

import * as ReviewsDao from '../dao/Review.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import { ReviewBody } from '../schemas/dto/Reviews/review.validators.ts';
import { REVIEW_SUBJECT } from '../prisma/schemas/interfaces.ts';

/**
- GET /reviews/:review_id
- @tag Reviews
- @summary Get a review by ID
- @description Retrieves a review by its ID. Response includes review items and author reference.
- @operationId getReviewById
- @pathParam {string} review_id - The ID of the review to retrieve.
- @response 200 - Review retrieved successfully
- @responseContent {ReviewResponse} 200.application/json
- @response 404 - Review not found
- @responseContent {object} 404.application/json
- @response 500 - Error retrieving review
- @responseContent {object} 500.application/json
- @prisma_model reviews
- @prisma_model review_items
- @schema ./prisma/schema.prisma
*/
export async function getReviewById(req: ValidatedRequest<never, { review_id: string }>, res: Response): Promise<void> {
	try {
		const { review_id } = req.params;
		const review = await ReviewsDao.getReviewById(review_id);
		if (!review) {
			res.status(404).json({ error: 'Review not found' });
			return;
		}
		res.json(review);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
- GET /reviews/subject/:subject_id/:review_subject
- @tag Reviews
- @summary List review items for a subject
- @description Retrieves review items that target a specific subject (user/driver/business/order).
- @operationId getReviewsForSubject
- @pathParam {string} subject_id - The ID of the subject (user/driver/business/order).
- @pathParam {string} review_subject - The subject type (USER|DRIVER|BUSINESS|TAXI_ORDER|DELIVERY_ORDER).
- @response 200 - Review items retrieved successfully
- @responseContent {ReviewResponse[]} 200.application/json
- @response 404 - Reviews not found
- @responseContent {object} 404.application/json
- @response 500 - Error retrieving review items
- @responseContent {object} 500.application/json
- @prisma_model review_items
- @schema ./prisma/schema.prisma
*/
export async function getReviewsForSubject(
	req: ValidatedRequest<never, { subject_id: string; review_subject: REVIEW_SUBJECT }>,
	res: Response
): Promise<void> {
	try {
		const { subject_id, review_subject } = req.params;
		const reviews = await ReviewsDao.getReviewsForSubject(subject_id, review_subject);
		if (!reviews || reviews.length === 0) {
			res.status(404).json({ error: 'Reviews not found' });
			return;
		}
		res.json(reviews);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
- GET /reviews/taxi/:taxi_order_id
- @tag Reviews
- @summary List reviews for a taxi order
- @description Retrieves reviews associated with a taxi order. Includes review items and author reference.
- @operationId getReviewsForTaxiOrder
- @pathParam {string} taxi_order_id - The taxi order ID.
- @response 200 - Reviews retrieved successfully
- @responseContent {ReviewResponse[]} 200.application/json
- @response 404 - Reviews not found
- @responseContent {object} 404.application/json
- @response 500 - Error retrieving reviews
- @responseContent {object} 500.application/json
- @prisma_model reviews
- @prisma_model review_items
- @schema ./prisma/schema.prisma
*/
export async function getReviewsForTaxiOrder(
	req: ValidatedRequest<never, { taxi_order_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { taxi_order_id } = req.params;
		const reviews = await ReviewsDao.getReviewsForTaxiOrder(taxi_order_id);
		if (!reviews || reviews.length === 0) {
			res.status(404).json({ error: 'Reviews not found' });
			return;
		}
		res.json(reviews);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
- GET /reviews/delivery/:delivery_order_id
- @tag Reviews
- @summary List reviews for a delivery order
- @description Retrieves reviews associated with a delivery order. Includes review items and author reference.
- @operationId getReviewsForDeliveryOrder
- @pathParam {string} delivery_order_id - The delivery order ID.
- @response 200 - Reviews retrieved successfully
- @responseContent {ReviewResponse[]} 200.application/json
- @response 404 - Reviews not found
- @responseContent {object} 404.application/json
- @response 500 - Error retrieving reviews
- @responseContent {object} 500.application/json
- @prisma_model reviews
- @prisma_model review_items
- @schema ./prisma/schema.prisma
*/
export async function getReviewsForDeliveryOrder(
	req: ValidatedRequest<never, { delivery_order_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { delivery_order_id } = req.params;
		const reviews = await ReviewsDao.getReviewsForDeliveryOrder(delivery_order_id);
		if (!reviews || reviews.length === 0) {
			res.status(404).json({ error: 'Reviews not found' });
			return;
		}
		res.json(reviews);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
- POST /reviews/taxi
- @tag Reviews
- @summary Create a review for a taxi order
- @description Creates a review (reviews + review_items). Request body must include author_id, reviewer_role and reviewItems. created_at/updated_at are set by the DB.
- @operationId createReviewForTaxiOrder
- @bodyDescription Review create payload
- @bodyContent {ReviewBody} application/json
- @bodyRequired
- @response 200 - Review created successfully
- @responseContent {ReviewResponse} 200.application/json
- @response 400 - Bad request / Review could not be created
- @responseContent {object} 400.application/json
- @response 500 - Error creating review
- @responseContent {object} 500.application/json
- @prisma_model reviews
- @prisma_model review_items
- @schema ./prisma/schema.prisma
*/
export async function createReviewForTaxiOrder(req: ValidatedRequest<ReviewBody>, res: Response): Promise<void> {
	try {
		const { author_id, taxi_order_id, reviewer_role, reviewItems, comment } = req.body;
		if (!taxi_order_id) {
			res.status(400).json({ error: 'taxi_order_id is required' });
			return;
		}
		const created = await ReviewsDao.createReviewForTaxiOrder(
			author_id,
			taxi_order_id,
			reviewer_role,
			reviewItems,
			comment
		);
		if (!created) {
			res.status(400).json({ error: 'Review could not be created' });
			return;
		}
		res.json(created);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
- POST /reviews/delivery
- @tag Reviews
- @summary Create a review for a delivery order
- @description Creates a review (reviews + review_items). Request body must include author_id, reviewer_role and reviewItems. created_at/updated_at are set by the DB.
- @operationId createReviewForDeliveryOrder
- @bodyDescription Review create payload
- @bodyContent {ReviewBody} application/json
- @bodyRequired
- @response 200 - Review created successfully
- @responseContent {ReviewResponse} 200.application/json
- @response 400 - Bad request / Review could not be created
- @responseContent {object} 400.application/json
- @response 500 - Error creating review
- @responseContent {object} 500.application/json
- @prisma_model reviews
- @prisma_model review_items
- @schema ./prisma/schema.prisma
*/
export async function createReviewForDeliveryOrder(req: ValidatedRequest<ReviewBody>, res: Response): Promise<void> {
	try {
		const { author_id, delivery_order_id, reviewer_role, reviewItems, comment } = req.body;
		if (!delivery_order_id) {
			res.status(400).json({ error: 'delivery_order_id is required' });
			return;
		}
		const created = await ReviewsDao.createReviewForDeliveryOrder(
			author_id,
			delivery_order_id,
			reviewer_role,
			reviewItems,
			comment
		);
		if (!created) {
			res.status(400).json({ error: 'Review could not be created' });
			return;
		}
		res.json(created);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
- DELETE /reviews/:review_id
- @tag Reviews
- @summary Delete a review by ID
- @description Deletes a review and its associated review_items in a transaction.
- @operationId deleteReview
- @pathParam {string} review_id - The ID of the review to delete.
- @response 200 - Review deleted successfully (returns deleted review)
- @responseContent {ReviewResponse} 200.application/json
- @response 404 - Review not found
- @responseContent {object} 404.application/json
- @response 500 - Error deleting review
- @responseContent {object} 500.application/json
- @prisma_model reviews
- @prisma_model review_items
- @schema ./prisma/schema.prisma
*/
export async function deleteReview(req: ValidatedRequest<never, { review_id: string }>, res: Response): Promise<void> {
	try {
		const { review_id } = req.params;
		const deleted = await ReviewsDao.deleteReview(review_id);
		if (!deleted) {
			res.status(404).json({ error: 'Review not found' });
			return;
		}
		res.json(deleted);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
- DELETE /reviews/subject/:subject_id/:review_subject
- @tag Reviews
- @summary Delete all reviews for a subject
- @description Deletes review_items for a given subject (and deletes related reviews if orphaned) in a transaction.
- @operationId deleteReviewsForSubject
- @pathParam {string} subject_id - The ID of the subject whose reviews should be removed.
- @pathParam {string} review_subject - The subject type (USER|DRIVER|BUSINESS|TAXI_ORDER|DELIVERY_ORDER).
- @response 204 - Reviews deleted successfully (no content)
- @response 500 - Error deleting reviews
- @responseContent {object} 500.application/json
- @prisma_model review_items
- @prisma_model reviews
- @schema ./prisma/schema.prisma
*/
export async function deleteReviewsForSubject(
	req: ValidatedRequest<never, { subject_id: string; review_subject: REVIEW_SUBJECT }>,
	res: Response
): Promise<void> {
	try {
		const { subject_id, review_subject } = req.params;
		await ReviewsDao.deleteReviewsForSubject(subject_id, review_subject);
		res.status(204).send();
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default {
	getReviewById,
	getReviewsForTaxiOrder,
	getReviewsForDeliveryOrder,
	getReviewsForSubject,
	deleteReviewsForSubject,
	deleteReview,
};
