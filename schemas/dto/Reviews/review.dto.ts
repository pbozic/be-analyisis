import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Review Controller Input Schemas
// =======================

export const ReviewBodySchema = z
	.object({
		rating: z.number().int().min(1).max(5),
		comment: z.string().max(2000).optional(),
		// feedback can be any JSON-like object; keep it flexible but typed
		feedback: z.record(z.unknown()).optional(),
	})
	.openapi('ReviewBody');
export type ReviewBody = z.infer<typeof ReviewBodySchema>;

// =======================
// Review DTOs (DAO responses)
// =======================

export const ReviewBaseSchema = z
	.object({
		review_id: UUID,
		reviewable_id: UUID,
		author_id: UUID,
		rating: z.number().nullable().optional(),
		comment: z.string().nullable().optional(),
		// feedback is arbitrary JSON
		feedback: z.unknown().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('ReviewBase');
export type ReviewBase = z.infer<typeof ReviewBaseSchema>;

export const ReviewDetailSchema = ReviewBaseSchema.openapi('ReviewDetail');
export type ReviewDetail = z.infer<typeof ReviewDetailSchema>;

// ===============
// Mappers
// ===============
type PrismaReview = {
	review_id: string;
	reviewable_id: string;
	author_id: string;
	rating?: number | null;
	comment?: string | null;
	feedback?: unknown | null;
	created_at: string | Date;
	updated_at: string | Date;
};

export function toReviewDetail(row: unknown): ReviewDetail {
	const r = row as PrismaReview;
	return ReviewDetailSchema.parse({
		review_id: r.review_id,
		reviewable_id: r.reviewable_id,
		author_id: r.author_id,
		rating: r.rating ?? null,
		comment: r.comment ?? null,
		feedback: r.feedback ?? null,
		created_at: new Date(r.created_at).toISOString(),
		updated_at: new Date(r.updated_at).toISOString(),
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ReviewBody', ReviewBodySchema);

	registry.register('ReviewBase', ReviewBaseSchema);
	registry.register('ReviewDetail', ReviewDetailSchema);
}
