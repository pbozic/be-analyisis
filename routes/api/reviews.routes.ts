import { Router } from 'express';

import {
	createReviewForTaxiOrder,
	createReviewForDeliveryOrder,
	getReviewById,
	getReviewsForSubject,
	getReviewsForTaxiOrder,
	getReviewsForDeliveryOrder,
	deleteReview,
	deleteReviewsForSubject,
} from '../../controllers/ReviewsController.js';
import { validate } from '../../middleware/zod.ts';
import { ReviewBodySchema } from '../../schemas/dto/Reviews/review.validators.ts';

const router = Router();

// create
router.post('/delivery', validate(ReviewBodySchema, 'body'), createReviewForDeliveryOrder);
router.post('/taxi', validate(ReviewBodySchema, 'body'), createReviewForTaxiOrder);

// list by order
router.get('/taxi/:taxi_order_id', getReviewsForTaxiOrder);
router.get('/delivery/:delivery_order_id', getReviewsForDeliveryOrder);

// list / delete by subject (subject_id + review_subject)
router.get('/subject/:subject_id/:review_subject', getReviewsForSubject);
router.delete('/subject/:subject_id/:review_subject', deleteReviewsForSubject);

// single review get / delete
router.get('/:review_id', getReviewById);
router.delete('/:review_id', deleteReview);

export default router;
