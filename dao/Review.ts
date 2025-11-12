import { Prisma } from '@prisma/client';

import { REVIEW_TYPE, REVIEWER_ROLE, REVIEW_SUBJECT } from '../prisma/schemas/interfaces.js';
import prisma from '../prisma/prisma.js';
import { reviewsWithItemsInclude, ReviewsWithItemsInclude, ReviewItemsBaseInclude } from '../prisma/includes/review.js';
import {
	toReviewResponse,
	toReviewResponseList,
	toReviewItemResponseList,
} from '../schemas/dto/Reviews/review.mapper.js';
import { ReviewResponse, ReviewItemResponse } from '../schemas/dto/Reviews/review.dto.js';

export async function getReviewsForSubject(
	subject_id: string,
	review_subject: REVIEW_SUBJECT
): Promise<ReviewItemResponse[]> {
	const items = await prisma.review_items.findMany({
		where: {
			subject_id,
			subject_type: review_subject,
		},
	});
	// map DB payload -> DTO
	return toReviewItemResponseList(items as ReviewItemsBaseInclude[]);
}

export async function createReviewForTaxiOrder(
	author_id: string,
	taxi_order_id: string,
	reviewer_role: REVIEWER_ROLE,
	reviewItems: { rating: number; subject_type: REVIEW_SUBJECT; subject_id: string; type: REVIEW_TYPE }[],
	comment?: string
): Promise<ReviewResponse> {
	const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		const ev = await tx.reviews.create({
			data: {
				author_id: author_id, // driver is the author
				reviewer_role: reviewer_role,
				comment: comment ?? null,
				taxi_order_id: taxi_order_id,
			},
			select: { review_id: true },
		});

		await tx.review_items.createMany({
			data: reviewItems.map((item) => ({
				...item,
				review_id: ev.review_id,
			})),
			skipDuplicates: true,
		});
		const createdReview = (await tx.reviews.findUnique({
			where: { review_id: ev.review_id },
			include: reviewsWithItemsInclude,
		})) as ReviewsWithItemsInclude | null;
		if (!createdReview) throw new Error('Created review missing');
		return toReviewResponse(createdReview);
	});
	return result;
}

export async function createReviewForDeliveryOrder(
	author_id: string,
	delivery_order_id: string,
	reviewer_role: REVIEWER_ROLE,
	reviewItems: { rating: number; subject_type: REVIEW_SUBJECT; subject_id: string; type: REVIEW_TYPE }[],
	comment?: string
): Promise<ReviewResponse> {
	const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		const ev = await tx.reviews.create({
			data: {
				author_id: author_id, // customer is the author
				reviewer_role: reviewer_role,
				comment: comment ?? null,
				delivery_order_id: delivery_order_id,
			},
			select: { review_id: true },
		});

		await tx.review_items.createMany({
			data: reviewItems.map((item) => ({
				...item,
				review_id: ev.review_id,
			})),
			skipDuplicates: true,
		});
		const createdReview = (await tx.reviews.findUnique({
			where: { review_id: ev.review_id },
			include: reviewsWithItemsInclude,
		})) as ReviewsWithItemsInclude | null;
		if (!createdReview) throw new Error('Created review missing');
		return toReviewResponse(createdReview);
	});
	return result;
}

export async function getReviewsForTaxiOrder(taxi_order_id: string): Promise<ReviewResponse[]> {
	const reviews = (await prisma.reviews.findMany({
		where: { taxi_order_id },
		include: reviewsWithItemsInclude,
	})) as ReviewsWithItemsInclude[];
	return toReviewResponseList(reviews);
}

export async function getReviewsForDeliveryOrder(delivery_order_id: string): Promise<ReviewResponse[]> {
	const reviews = (await prisma.reviews.findMany({
		where: { delivery_order_id },
		include: reviewsWithItemsInclude,
	})) as ReviewsWithItemsInclude[];
	return toReviewResponseList(reviews);
}

export async function deleteReview(review_id: string): Promise<ReviewResponse> {
	const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		// Delete review items first
		await tx.review_items.deleteMany({
			where: { review_id },
		});
		// Then delete the review and include items (should be empty)
		const deleted = (await tx.reviews.delete({
			where: { review_id },
			include: reviewsWithItemsInclude,
		})) as ReviewsWithItemsInclude;
		return toReviewResponse(deleted);
	});
	return result;
}

export async function deleteReviewsForSubject(subject_id: string, subject_type: REVIEW_SUBJECT): Promise<void> {
	await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		const items = await tx.review_items.findMany({
			where: {
				subject_id,
				subject_type: subject_type,
			},
			select: { review_id: true },
		});
		const reviewIds = items.map((item) => item.review_id);

		await tx.review_items.deleteMany({
			where: {
				subject_id,
				subject_type: subject_type,
			},
		});

		await tx.reviews.deleteMany({
			where: {
				review_id: { in: reviewIds },
			},
		});
	});
	// successful -> void
}

export async function getReviewById(review_id: string): Promise<ReviewResponse | null> {
	const review = (await prisma.reviews.findUnique({
		where: { review_id },
		include: reviewsWithItemsInclude,
	})) as ReviewsWithItemsInclude | null;
	return review ? toReviewResponse(review) : null;
}

export default {
	getReviewsForSubject,
	getReviewsForTaxiOrder,
	getReviewsForDeliveryOrder,
	getReviewById,
	createReviewForTaxiOrder,
	createReviewForDeliveryOrder,
	deleteReview,
	deleteReviewsForSubject,
};
