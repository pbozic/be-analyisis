import { SCORING_POINTS_REASON } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Business } from '../business/Business.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { LateEvent } from './LateEvent.js';
import { UserResponseSchema } from '../users/User';
import { BusinessResponseSchema } from '../business/Business';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { LateEventResponseSchema } from './LateEvent';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type ScoringPoint = {
	scoring_points_id: string;
	business_id: string;
	user_id?: string | null;
	delivery_order_id?: string | null;
	taxi_order_id?: string | null;
	points: number;
	isPenalty: boolean;
	reason: SCORING_POINTS_REASON;
	expiration_date?: Date | null;
	created_at: Date;
	updated_at: Date;
	users?: User | null;
	businesses?: Business | null;
	delivery_orders?: DeliveryOrder | null;
	taxi_orders?: TaxiOrder | null;
	late_events: LateEvent[];
};

export const CreateScoringPointSchema = z
	.object({
		scoring_points_id: z.string().uuid(),
		business_id: z.string().uuid(),
		user_id: z.string().uuid().nullable().optional(),
		delivery_order_id: z.string().uuid().nullable().optional(),
		taxi_order_id: z.string().uuid().nullable().optional(),
		points: z.number(),
		isPenalty: z.boolean(),
		reason: z.nativeEnum(SCORING_POINTS_REASON),
		expiration_date: z.unknown().nullable().optional(),
	})
	.openapi('CreateScoringPoint');

export type CreateScoringPointInput = z.infer<typeof CreateScoringPointSchema>;

export const UpdateScoringPointSchema = CreateScoringPointSchema.partial().openapi('UpdateScoringPoint');
export type UpdateScoringPointInput = z.infer<typeof UpdateScoringPointSchema>;

export const ScoringPointResponseSchema = z
	.object({
		scoring_points_id: z.string(),
		business_id: z.string(),
		user_id: z.string().nullable().optional(),
		delivery_order_id: z.string().nullable().optional(),
		taxi_order_id: z.string().nullable().optional(),
		points: z.number(),
		isPenalty: z.boolean(),
		reason: z.nativeEnum(SCORING_POINTS_REASON),
		expiration_date: z.string().datetime().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		users: UserResponseSchema.nullable().optional(),
		businesses: BusinessResponseSchema.nullable().optional(),
		delivery_orders: DeliveryOrderResponseSchema.nullable().optional(),
		taxi_orders: TaxiOrderResponseSchema.nullable().optional(),
		late_events: z.array(LateEventResponseSchema),
	})
	.openapi('ScoringPointResponse');

export type ScoringPointResponse = z.infer<typeof ScoringPointResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateScoringPoint', CreateScoringPointSchema);
	registry.register('UpdateScoringPoint', UpdateScoringPointSchema);
	registry.register('ScoringPointResponse', ScoringPointResponseSchema);
}
