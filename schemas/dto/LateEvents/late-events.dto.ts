import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';
import { BasicUserDataSchema } from '../common/User.dto.ts';
import { BusinessRefSchema } from '../common/Business.dto.ts';

extendZodWithOpenApi(z);

// =======================
// Late Events DTOs
// =======================

export const OrderRefSchema = z
	.object({
		order_id: UUID,
		label: z.string().default('order'),
	})
	.openapi('OrderRef');
export type OrderRef = z.infer<typeof OrderRefSchema>;

export const LateEventBaseSchema = z
	.object({
		late_events_id: UUID,
		business_id: UUID,
		user_id: UUID,
		delivery_order_id: UUID.nullable().optional(),
		taxi_order_id: UUID.nullable().optional(),
		seconds: z.number().int(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('LateEventBase');
export type LateEventBase = z.infer<typeof LateEventBaseSchema>;

export const LateEventDetailSchema = LateEventBaseSchema.extend({
	user: BasicUserDataSchema.optional(),
	business: BusinessRefSchema.optional(),
	delivery_order: OrderRefSchema.nullable().optional(),
	taxi_order: OrderRefSchema.nullable().optional(),
	// scoring points can be large; keep as count to avoid cycles
	scoring_points_count: z.number().int().optional(),
}).openapi('LateEventDetail');
export type LateEventDetail = z.infer<typeof LateEventDetailSchema>;

// =======================
// Mappers
// =======================
type BusinessLike = { business_id: string; name?: string | null; email?: string | null; telephone?: string | null };
type OrderLike = { order_id: string };
type PrismaLateEvent = {
	late_events_id: string;
	business_id: string;
	user_id: string;
	delivery_order_id?: string | null;
	taxi_order_id?: string | null;
	seconds: number;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	users?: unknown;
	businesses?: BusinessLike | null;
	delivery_orders?: OrderLike | null;
	taxi_orders?: OrderLike | null;
	scoring_points?: unknown[];
};

export function toLateEventDetail(row: unknown): LateEventDetail {
	const r = row as PrismaLateEvent;
	const business = r.businesses
		? BusinessRefSchema.parse({
				business_id: r.businesses.business_id as string,
				name: r.businesses.name ?? undefined,
				email: r.businesses.email ?? undefined,
				telephone: r.businesses.telephone ?? undefined,
			})
		: undefined;
	const delivery_order = r.delivery_orders
		? OrderRefSchema.parse({ order_id: r.delivery_orders.order_id as string, label: 'delivery_order' })
		: undefined;
	const taxi_order = r.taxi_orders
		? OrderRefSchema.parse({ order_id: r.taxi_orders.order_id as string, label: 'taxi_order' })
		: undefined;
	const scoring_points_count = Array.isArray(r.scoring_points) ? r.scoring_points.length : undefined;
	return LateEventDetailSchema.parse({
		late_events_id: r.late_events_id,
		business_id: r.business_id,
		user_id: r.user_id,
		delivery_order_id: r.delivery_order_id ?? null,
		taxi_order_id: r.taxi_order_id ?? null,
		seconds: r.seconds,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: (r as { users?: unknown }).users,
		business,
		delivery_order,
		taxi_order,
		scoring_points_count,
	});
}

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('OrderRef', OrderRefSchema);
	registry.register('LateEventBase', LateEventBaseSchema);
	registry.register('LateEventDetail', LateEventDetailSchema);
}
