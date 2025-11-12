import { Prisma } from '@prisma/client';

// DTO schemas - adjust import path/names if your DTO file uses different exports
import {
	ReviewResponseSchema,
	ReviewItemBaseSchema,
	ReviewResponse,
	ReviewItemResponseSchema,
	ReviewItemResponse,
} from './review.dto';
import { ReviewsWithItemsInclude, ReviewItemsBaseInclude } from '../../../prisma/includes/review';

export function mapReviewItem(
	item: Prisma.review_itemsGetPayload<object> // no include expected for items — use `object` to avoid empty-object lint
): ReviewItemResponse {
	const mapped = {
		item_id: item.item_id,
		review_id: item.review_id,
		subject_type: item.subject_type,
		subject_id: item.subject_id,
		type: item.type,
		rating: item.rating ?? null,
		comment: item.comment ?? null,
		created_at: item.created_at ? new Date(item.created_at).toISOString() : undefined,
		updated_at: item.updated_at ? new Date(item.updated_at).toISOString() : undefined,
	};
	// Validate shape with zod
	return ReviewItemBaseSchema.parse(mapped);
}

// helper to map single review_item payload -> ReviewItemResponse
export function toReviewItemResponse(item: ReviewItemsBaseInclude): ReviewItemResponse {
	const mapped = mapReviewItem(item);
	// ReviewItemResponseSchema currently equals ReviewItemBaseSchema (merge placeholder)
	return ReviewItemResponseSchema.parse(mapped);
}

export function toReviewItemResponseList(
	items: ReviewItemsBaseInclude[] // no include expected
): ReviewItemResponse[] {
	return items.map(toReviewItemResponse);
}

/**
 * Map reviews (with include: { items: true }) -> ReviewResponse
 */
export function toReviewResponse(payload: ReviewsWithItemsInclude): ReviewResponse {
	const mapped = {
		review_id: payload.review_id,
		author_id: payload.author_id,
		reviewer_role: payload.reviewer_role,
		taxi_order_id: payload.taxi_order_id ?? null,
		delivery_order_id: payload.delivery_order_id ?? null,
		comment: payload.comment ?? null,
		created_at: payload.created_at.toISOString(),
		updated_at: payload.updated_at.toISOString(),
		items: (payload.items ?? []).map(mapReviewItem),
	};
	// Validate final response DTO
	return ReviewResponseSchema.parse(mapped);
}

/**
 * Map array of reviews -> ReviewResponse[]
 */
export function toReviewResponseList(payloads: ReviewsWithItemsInclude[]): ReviewResponse[] {
	return payloads.map(toReviewResponse);
}
