import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// ===============
// Base Schema (scalars only, no relations)
// ===============
export const TaxiOrderBaseSchema = z
	.object({
		order_id: z.string().uuid(),
		user_id: z.string().uuid(),
		driver_id: z.string().uuid().nullable().optional(),
		vehicle_id: z.string().uuid().nullable().optional(),
		business_id: z.string().uuid().nullable().optional(),
		status: z.string(),
		type: z.string().optional(), // ORDER_TYPE
		subtype: z.string().nullable().optional(), // ORDER_SUBTYPE
		pickup_location: z.record(z.any()).nullable().optional(),
		delivery_location: z.record(z.any()).nullable().optional(),
		route: z.record(z.any()).nullable().optional(),
		complete_route: z.record(z.any()).nullable().optional(),
		distance: z.number().nullable().optional(),
		duration: z.number().nullable().optional(),
		price: z.number().nullable().optional(),
		currency: z.string().nullable().optional(),
		payment_method: z.string().nullable().optional(),
		payment_status: z.string().nullable().optional(),
		special_instructions: z.string().nullable().optional(),
		passenger_count: z.number().nullable().optional(),
		luggage_count: z.number().nullable().optional(),
		scheduled_time: z.string().datetime().nullable().optional(),
		pickup_time: z.string().datetime().nullable().optional(),
		arrival_time: z.string().datetime().nullable().optional(),
		completion_time: z.string().datetime().nullable().optional(),
		cancellation_reason: z.string().nullable().optional(),
		rating: z.number().nullable().optional(),
		feedback: z.string().nullable().optional(),
		tip_amount: z.number().nullable().optional(),
		timeline: z.array(z.record(z.any())).optional().default([]),
		metadata: z.record(z.any()).nullable().optional(),
		last_sent_at: z.string().datetime().nullable().optional(),
		parent_order_id: z.string().uuid().nullable().optional(),
		is_grouped: z.boolean().optional(),
		group_index: z.number().nullable().optional(),
		preferences: z.record(z.any()).nullable().optional(),
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
	})
	.openapi('TaxiOrderBase');

export type TaxiOrderBase = z.infer<typeof TaxiOrderBaseSchema>;

// ===============
// Ref Schema (minimal identity for embedding)
// ===============
export const TaxiOrderRefSchema = z
	.object({
		order_id: z.string().uuid(),
		status: z.string(),
		type: z.string().optional(),
		price: z.number().nullable().optional(),
		pickup_location: z.record(z.any()).nullable().optional(),
		delivery_location: z.record(z.any()).nullable().optional(),
		created_at: z.string().datetime().optional(),
	})
	.openapi('TaxiOrderRef');

export type TaxiOrderRef = z.infer<typeof TaxiOrderRefSchema>;

// ===============
// Detail Schema (extends Base with relations)
// ===============
export const TaxiOrderDetailSchema = TaxiOrderBaseSchema.extend({
	user: z.record(z.any()).nullable().optional(),
	driver: z.record(z.any()).nullable().optional(),
	vehicle: z.record(z.any()).nullable().optional(),
	business: z.record(z.any()).nullable().optional(),
	grouped_orders: z.array(z.record(z.any())).optional().default([]),
}).openapi('TaxiOrderDetail');

export type TaxiOrderDetail = z.infer<typeof TaxiOrderDetailSchema>;

// ===============
// Create/Update Schemas
// ===============
export const CreateTaxiOrderSchema = TaxiOrderBaseSchema.omit({
	order_id: true,
	created_at: true,
	updated_at: true,
}).openapi('CreateTaxiOrder');

export type CreateTaxiOrder = z.infer<typeof CreateTaxiOrderSchema>;

export const UpdateTaxiOrderSchema = TaxiOrderBaseSchema.partial()
	.omit({
		order_id: true,
		created_at: true,
	})
	.openapi('UpdateTaxiOrder');

export type UpdateTaxiOrder = z.infer<typeof UpdateTaxiOrderSchema>;

// ===============
// Mappers
// ===============
type PrismaTaxiOrder = {
	order_id: string;
	user_id: string;
	driver_id?: string | null;
	vehicle_id?: string | null;
	business_id?: string | null;
	status: string;
	type?: string;
	subtype?: string | null;
	pickup_location?: Record<string, unknown> | null;
	delivery_location?: Record<string, unknown> | null;
	route?: Record<string, unknown> | null;
	complete_route?: Record<string, unknown> | null;
	distance?: number | null;
	duration?: number | null;
	price?: number | null;
	currency?: string | null;
	payment_method?: string | null;
	payment_status?: string | null;
	special_instructions?: string | null;
	passenger_count?: number | null;
	luggage_count?: number | null;
	scheduled_time?: string | Date | null;
	pickup_time?: string | Date | null;
	arrival_time?: string | Date | null;
	completion_time?: string | Date | null;
	cancellation_reason?: string | null;
	rating?: number | null;
	feedback?: string | null;
	tip_amount?: number | null;
	timeline?: Array<Record<string, unknown>>;
	metadata?: Record<string, unknown> | null;
	last_sent_at?: string | Date | null;
	parent_order_id?: string | null;
	is_grouped?: boolean;
	group_index?: number | null;
	preferences?: Record<string, unknown> | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: unknown;
	driver?: unknown;
	vehicle?: unknown;
	business?: unknown;
	grouped_orders?: Array<unknown>;
};

export function toTaxiOrderDetail(row: unknown): TaxiOrderDetail {
	const r = row as PrismaTaxiOrder;

	return TaxiOrderDetailSchema.parse({
		order_id: r.order_id,
		user_id: r.user_id,
		driver_id: r.driver_id ?? null,
		vehicle_id: r.vehicle_id ?? null,
		business_id: r.business_id ?? null,
		status: r.status,
		type: r.type ?? undefined,
		subtype: r.subtype ?? null,
		pickup_location: r.pickup_location ?? null,
		delivery_location: r.delivery_location ?? null,
		route: r.route ?? null,
		complete_route: r.complete_route ?? null,
		distance: r.distance ?? null,
		duration: r.duration ?? null,
		price: r.price ?? null,
		currency: r.currency ?? null,
		payment_method: r.payment_method ?? null,
		payment_status: r.payment_status ?? null,
		special_instructions: r.special_instructions ?? null,
		passenger_count: r.passenger_count ?? null,
		luggage_count: r.luggage_count ?? null,
		scheduled_time: r.scheduled_time ? new Date(r.scheduled_time as string | Date).toISOString() : null,
		pickup_time: r.pickup_time ? new Date(r.pickup_time as string | Date).toISOString() : null,
		arrival_time: r.arrival_time ? new Date(r.arrival_time as string | Date).toISOString() : null,
		completion_time: r.completion_time ? new Date(r.completion_time as string | Date).toISOString() : null,
		cancellation_reason: r.cancellation_reason ?? null,
		rating: r.rating ?? null,
		feedback: r.feedback ?? null,
		tip_amount: r.tip_amount ?? null,
		timeline: r.timeline ?? [],
		metadata: r.metadata ?? null,
		last_sent_at: r.last_sent_at ? new Date(r.last_sent_at as string | Date).toISOString() : null,
		parent_order_id: r.parent_order_id ?? null,
		is_grouped: r.is_grouped ?? undefined,
		group_index: r.group_index ?? null,
		preferences: r.preferences ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: r.user ? (r.user as Record<string, unknown>) : null,
		driver: r.driver ? (r.driver as Record<string, unknown>) : null,
		vehicle: r.vehicle ? (r.vehicle as Record<string, unknown>) : null,
		business: r.business ? (r.business as Record<string, unknown>) : null,
		grouped_orders: r.grouped_orders ? (r.grouped_orders as Array<Record<string, unknown>>) : [],
	});
}

export function toTaxiOrderRef(row: unknown): TaxiOrderRef {
	const r = row as PrismaTaxiOrder;
	return TaxiOrderRefSchema.parse({
		order_id: r.order_id,
		status: r.status,
		type: r.type ?? undefined,
		price: r.price ?? null,
		pickup_location: r.pickup_location ?? null,
		delivery_location: r.delivery_location ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TaxiOrderBase', TaxiOrderBaseSchema);
	registry.register('TaxiOrderRef', TaxiOrderRefSchema);
	registry.register('TaxiOrderDetail', TaxiOrderDetailSchema);
	registry.register('CreateTaxiOrder', CreateTaxiOrderSchema);
	registry.register('UpdateTaxiOrder', UpdateTaxiOrderSchema);
}
