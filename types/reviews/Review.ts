import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Reviewable } from './Reviewable.js';
import type { User } from '../users/User.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import { ReviewableResponseSchema } from './Reviewable';
import { UserResponseSchema } from '../users/User';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Review = {
	review_id: string;
	reviewable_id: string;
	author_id: string;
	rating?: number | null;
	comment?: string | null;
	feedback?: unknown | null;
	created_at: Date;
	updated_at: Date;
	reviewable: Reviewable;
	author: User;
	delivery_order?: DeliveryOrder | null;
	taxi_order?: TaxiOrder | null;
	vehicle_id?: string | null;
};

export const CreateReviewSchema = z
	.object({
		review_id: z.string().uuid(),
		reviewable_id: z.string().uuid(),
		author_id: z.string().uuid(),
		rating: z.number().nullable().optional(),
		comment: z.string().nullable().optional(),
		feedback: z.unknown().nullable().optional(),
		vehicle_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateReview');

export type CreateReviewInput = z.infer<typeof CreateReviewSchema>;

export const UpdateReviewSchema = CreateReviewSchema.partial().openapi('UpdateReview');
export type UpdateReviewInput = z.infer<typeof UpdateReviewSchema>;

export const ReviewResponseSchema = z
	.object({
		review_id: z.string(),
		reviewable_id: z.string(),
		author_id: z.string(),
		rating: z.number().nullable().optional(),
		comment: z.string().nullable().optional(),
		feedback: z.unknown().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		reviewable: ReviewableResponseSchema,
		author: UserResponseSchema,
		delivery_order: DeliveryOrderResponseSchema.nullable().optional(),
		taxi_order: TaxiOrderResponseSchema.nullable().optional(),
		vehicle_id: z.string().nullable().optional(),
	})
	.openapi('ReviewResponse');

export type ReviewResponse = z.infer<typeof ReviewResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateReview', CreateReviewSchema);
	registry.register('UpdateReview', UpdateReviewSchema);
	registry.register('ReviewResponse', ReviewResponseSchema);
}
