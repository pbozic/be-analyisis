import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { BasicUserDataSchema } from '../common/User.dto.ts';
import { BusinessRefSchema } from '../common/Business.dto.ts';
import { OrderRefSchema } from '../common/Order.dto.ts';

extendZodWithOpenApi(z);

// =======================
// Scoring Points DTOs
// =======================

export type ScoringPointsOrderRef = z.infer<typeof OrderRefSchema>;

export const LateEventRefSchema = z
	.object({
		late_events_id: UUID,
	})
	.openapi('LateEventRef');
export type LateEventRef = z.infer<typeof LateEventRefSchema>;

export const ScoringPointsBaseSchema = z
	.object({
		scoring_points_id: UUID,
		business_id: UUID,
		user_id: UUID.nullable().optional(),
		delivery_order_id: UUID.nullable().optional(),
		taxi_order_id: UUID.nullable().optional(),
		points: z.number().int(),
		isPenalty: z.boolean(),
		reason: z.string().nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('ScoringPointsBase');
export type ScoringPointsBase = z.infer<typeof ScoringPointsBaseSchema>;

export const ScoringPointsDetailSchema = ScoringPointsBaseSchema.extend({
	user: BasicUserDataSchema.nullable().optional(),
	business: BusinessRefSchema.optional(),
	delivery_order: OrderRefSchema.nullable().optional(),
	taxi_order: OrderRefSchema.nullable().optional(),
	late_events: z.array(LateEventRefSchema).optional().default([]),
}).openapi('ScoringPointsDetail');
export type ScoringPointsDetail = z.infer<typeof ScoringPointsDetailSchema>;

// =======================
// Mappers
// =======================
type BusinessLike = { business_id: string; name?: string | null };
type OrderLike = { order_id: string };
type LateEventLike = { late_events_id: string };
type PrismaScoringPoints = {
	scoring_points_id: string;
	business_id: string;
	user_id?: string | null;
	delivery_order_id?: string | null;
	taxi_order_id?: string | null;
	points: number;
	isPenalty: boolean;
	reason?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	users?: unknown | null;
	businesses?: BusinessLike | null;
	delivery_orders?: OrderLike | null;
	taxi_orders?: OrderLike | null;
	late_events?: LateEventLike[] | null;
};

export function toScoringPointsDetail(row: unknown): ScoringPointsDetail {
	const r = row as PrismaScoringPoints;
	const business = r.businesses
		? BusinessRefSchema.parse({
				business_id: r.businesses.business_id as string,
				name: r.businesses.name ?? undefined,
			})
		: undefined;
	const delivery_order = r.delivery_orders
		? OrderRefSchema.parse({ order_id: r.delivery_orders.order_id as string })
		: undefined;
	const taxi_order = r.taxi_orders ? OrderRefSchema.parse({ order_id: r.taxi_orders.order_id as string }) : undefined;
	const late_events = Array.isArray(r.late_events)
		? (r.late_events as Array<{ late_events_id: string }>).map((le) =>
				LateEventRefSchema.parse({ late_events_id: le.late_events_id })
			)
		: [];
	return ScoringPointsDetailSchema.parse({
		scoring_points_id: r.scoring_points_id,
		business_id: r.business_id,
		user_id: r.user_id ?? null,
		delivery_order_id: r.delivery_order_id ?? null,
		taxi_order_id: r.taxi_order_id ?? null,
		points: r.points,
		isPenalty: r.isPenalty,
		reason: r.reason ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: (r as { users?: unknown | null }).users ?? null,
		business,
		delivery_order,
		taxi_order,
		late_events,
	});
}

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LateEventRef', LateEventRefSchema);
	registry.register('ScoringPointsBase', ScoringPointsBaseSchema);
	registry.register('ScoringPointsDetail', ScoringPointsDetailSchema);
}
