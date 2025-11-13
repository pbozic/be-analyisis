import { z } from 'zod';
import { REVIEW_SUBJECT, REVIEW_TYPE, REVIEWER_ROLE } from '@prisma/client';

import { UserRefSchema } from '../User/index';
import { UUID } from '../../primitives';

// ReviewItem (Base / Ref / Response)
// Scalars only
export const ReviewItemBaseSchema = z.object({
	item_id: UUID,
	review_id: UUID,
	subject_type: z.nativeEnum(REVIEW_SUBJECT).openapi({ example: 'BUSINESS' }), // changed to use Prisma enum
	subject_id: UUID,
	type: z.nativeEnum(REVIEW_TYPE).openapi({ example: 'OVERALL' }), // changed to use Prisma enum
	rating: z.number().nullable().openapi({ example: 4 }),
	comment: z.string().nullable().openapi({ example: 'Good packaging and delivery' }),
	created_at: z.string().datetime().openapi({ example: '2025-11-11T12:00:00.000Z' }),
	updated_at: z.string().datetime().openapi({ example: '2025-11-11T12:00:00.000Z' }),
});
export type ReviewItemBase = z.infer<typeof ReviewItemBaseSchema>;

// Minimal identity for embedding elsewhere
export const ReviewItemRefSchema = z.object({
	item_id: UUID,
	// label - choose rating as small helpful label (can be null)
	rating: z.number().nullable().openapi({ example: 4 }),
});
export type ReviewItemRef = z.infer<typeof ReviewItemRefSchema>;

// Response / Detail (no relations other than Refs)
export const ReviewItemResponseSchema = ReviewItemBaseSchema.merge(
	z.object({
		// embed only refs of other models if needed (none here)
	})
);
export type ReviewItemResponse = z.infer<typeof ReviewItemResponseSchema>;

// Review (Base / Ref / Response)
export const ReviewBaseSchema = z.object({
	event_id: UUID,
	author_id: UUID,
	reviewer_role: z.nativeEnum(REVIEWER_ROLE).openapi({ example: 'CUSTOMER' }), // changed to use Prisma enum
	taxi_order_id: UUID.nullable(),
	delivery_order_id: UUID.nullable(),
	comment: z.string().nullable().openapi({ example: 'Overall very satisfied' }),
	created_at: z.string().datetime().openapi({ example: '2025-11-11T12:00:00.000Z' }),
	updated_at: z.string().datetime().openapi({ example: '2025-11-11T12:00:00.000Z' }),
});
export type ReviewBase = z.infer<typeof ReviewBaseSchema>;

export const ReviewRefSchema = z.object({
	event_id: UUID,
	// label - short preview of comment or role
	comment: z.string().nullable().openapi({ example: 'Overall very satisfied' }),
});
export type ReviewRef = z.infer<typeof ReviewRefSchema>;

// Response includes author as UserRef and items as array of ReviewItemResponse
export const ReviewResponseSchema = ReviewBaseSchema.merge(
	z.object({
		author: UserRefSchema.optional(),
		items: z.array(ReviewItemResponseSchema).optional(),
	})
);
export type ReviewResponse = z.infer<typeof ReviewResponseSchema>;

export const ReviewBodySchema = z.object({
	author_id: UUID,
	taxi_order_id: UUID.optional(),
	delivery_order_id: UUID.optional(),
	reviewer_role: z.nativeEnum(REVIEWER_ROLE).openapi({ example: 'CUSTOMER' }), // changed to use Prisma enum
	reviewItems: z
		.array(
			z.object({
				rating: z.number(),
				subject_type: z.nativeEnum(REVIEW_SUBJECT).openapi({ example: 'BUSINESS' }), // changed to use Prisma enum
				subject_id: UUID,
				type: z.nativeEnum(REVIEW_TYPE).openapi({ example: 'OVERALL' }), // changed to use Prisma enum
			})
		)
		.openapi({ example: [{ rating: 5, subject_type: 'BUSINESS', subject_id: 'uuid', type: 'OVERALL' }] }),
	comment: z.string().optional(),
});
export type ReviewBody = z.infer<typeof ReviewBodySchema>;
// Register schemas with OpenAPI registry
// export names as required by the project's registry pattern
export function registerSchemas(registry: any /* OpenAPIRegistry */) {
	// Request/response schemas
	registry.register('ReviewItemBase', ReviewItemBaseSchema);
	registry.register('ReviewItemRef', ReviewItemRefSchema);
	registry.register('ReviewItemResponse', ReviewItemResponseSchema);
	registry.register('ReviewBody', ReviewBodySchema);
	registry.register('ReviewBase', ReviewBaseSchema);
	registry.register('ReviewRef', ReviewRefSchema);
	registry.register('ReviewResponse', ReviewResponseSchema);
}
