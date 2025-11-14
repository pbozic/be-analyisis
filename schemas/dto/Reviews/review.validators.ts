import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { REVIEW_SUBJECT, REVIEW_TYPE, REVIEWER_ROLE } from '@prisma/client';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Review Request Schemas
// =======================
export const ReviewBodySchema = z
	.object({
		author_id: UUID,
		taxi_order_id: UUID.optional(),
		delivery_order_id: UUID.optional(),
		reviewer_role: z.nativeEnum(REVIEWER_ROLE).openapi({ example: 'CUSTOMER' }),
		reviewItems: z
			.array(
				z.object({
					rating: z.number(),
					subject_type: z.nativeEnum(REVIEW_SUBJECT).openapi({ example: 'BUSINESS' }),
					subject_id: UUID,
					type: z.nativeEnum(REVIEW_TYPE).openapi({ example: 'OVERALL' }),
				})
			)
			.openapi({ example: [{ rating: 5, subject_type: 'BUSINESS', subject_id: 'uuid', type: 'OVERALL' }] }),
		comment: z.string().optional(),
	})
	.openapi('ReviewBody');

export type ReviewBody = z.infer<typeof ReviewBodySchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ReviewBody', ReviewBodySchema);
}
