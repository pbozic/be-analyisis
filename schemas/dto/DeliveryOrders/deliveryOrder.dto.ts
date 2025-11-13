import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE } from '@prisma/client';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// ===============
// Base Schema (scalars only, no relations)
// ===============
export const DeliveryOrderBaseSchema = z
	.object({
		order_id: UUID,
		user_id: UUID,
		// business_id: UUID,
		module_id: UUID.optional(),
		module_type: z.union([z.literal(MODULE.STORES), z.literal(MODULE.FOOD_DRINKS)]).optional(),
		delivery_driver_id: UUID.nullable().optional(),
		driver_id: UUID.nullable().optional(),
		order_number: z.number().optional(),
		status: z.string(),
		details: z.record(z.any()).nullable().optional(),
		timeline: z.array(z.record(z.any())).optional().default([]),
		delivery_address: z.record(z.any()).nullable().optional(),
		pickup_address: z.record(z.any()).nullable().optional(),
		pickup_time: z.string().datetime().nullable().optional(),
		delivery_time: z.string().datetime().nullable().optional(),
		estimated_delivery_time: z.string().datetime().nullable().optional(),
		total_amount: z.number().nullable().optional(),
		delivery_fee: z.number().nullable().optional(),
		tip_amount: z.number().nullable().optional(),
		payment: z.record(z.any()).nullable().optional(),
		payment_method: z.string().nullable().optional(),
		is_daily_meal: z.boolean().optional(),
		special_instructions: z.string().nullable().optional(),
		items: z.array(z.record(z.any())).optional().default([]),
		last_sent_at: z.string().datetime().nullable().optional(),
		delivery_image: z.string().nullable().optional(),
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
	})
	.openapi('DeliveryOrderBase');

export type DeliveryOrderBase = z.infer<typeof DeliveryOrderBaseSchema>;

// ===============
// Ref Schema (minimal identity for embedding)
// ===============
export const DeliveryOrderRefSchema = z
	.object({
		order_id: UUID,
		order_number: z.number().optional(),
		status: z.string(),
		total_amount: z.number().nullable().optional(),
		created_at: z.string().datetime().optional(),
	})
	.openapi('DeliveryOrderRef');

export type DeliveryOrderRef = z.infer<typeof DeliveryOrderRefSchema>;

// ===============
// Detail Schema (extends Base with relations)
// ===============
export const DeliveryOrderDetailSchema = DeliveryOrderBaseSchema.extend({
	user: z.record(z.any()).nullable().optional(),
	business: z.record(z.any()).nullable().optional(),
	delivery_driver: z.record(z.any()).nullable().optional(),
	driver: z.record(z.any()).nullable().optional(),
}).openapi('DeliveryOrderDetail');

export type DeliveryOrderDetail = z.infer<typeof DeliveryOrderDetailSchema>;

// ===============
// Create/Update Schemas
// ===============
export const CreateDeliveryOrderSchema = DeliveryOrderBaseSchema.omit({
	order_id: true,
	created_at: true,
	updated_at: true,
}).openapi('CreateDeliveryOrder');

export type CreateDeliveryOrder = z.infer<typeof CreateDeliveryOrderSchema>;

export const UpdateDeliveryOrderSchema = DeliveryOrderBaseSchema.partial()
	.omit({
		order_id: true,
		created_at: true,
	})
	.openapi('UpdateDeliveryOrder');

export type UpdateDeliveryOrder = z.infer<typeof UpdateDeliveryOrderSchema>;

// ===============
// Mappers
// ===============
type PrismaDeliveryOrder = {
	order_id: string;
	user_id: string;
	business_id: string;
	delivery_driver_id?: string | null;
	driver_id?: string | null;
	order_number?: number;
	status: string;
	details?: Record<string, unknown> | null;
	timeline?: Array<Record<string, unknown>>;
	delivery_address?: Record<string, unknown> | null;
	pickup_address?: Record<string, unknown> | null;
	pickup_time?: string | Date | null;
	delivery_time?: string | Date | null;
	estimated_delivery_time?: string | Date | null;
	total_amount?: number | null;
	delivery_fee?: number | null;
	tip_amount?: number | null;
	payment_method?: string | null;
	is_daily_meal?: boolean;
	special_instructions?: string | null;
	items?: Array<Record<string, unknown>>;
	last_sent_at?: string | Date | null;
	delivery_image?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: unknown;
	business?: unknown;
	delivery_driver?: unknown;
	driver?: unknown;
};

export function toDeliveryOrderDetail(row: unknown): DeliveryOrderDetail {
	const r = row as PrismaDeliveryOrder;

	return DeliveryOrderDetailSchema.parse({
		order_id: r.order_id,
		user_id: r.user_id,
		business_id: r.business_id,
		delivery_driver_id: r.delivery_driver_id ?? null,
		driver_id: r.driver_id ?? null,
		order_number: r.order_number ?? undefined,
		status: r.status,
		details: r.details ?? null,
		timeline: r.timeline ?? [],
		delivery_address: r.delivery_address ?? null,
		pickup_address: r.pickup_address ?? null,
		pickup_time: r.pickup_time ? new Date(r.pickup_time as string | Date).toISOString() : null,
		delivery_time: r.delivery_time ? new Date(r.delivery_time as string | Date).toISOString() : null,
		estimated_delivery_time: r.estimated_delivery_time
			? new Date(r.estimated_delivery_time as string | Date).toISOString()
			: null,
		total_amount: r.total_amount ?? null,
		delivery_fee: r.delivery_fee ?? null,
		tip_amount: r.tip_amount ?? null,
		payment_method: r.payment_method ?? null,
		is_daily_meal: r.is_daily_meal ?? undefined,
		special_instructions: r.special_instructions ?? null,
		items: r.items ?? [],
		last_sent_at: r.last_sent_at ? new Date(r.last_sent_at as string | Date).toISOString() : null,
		delivery_image: r.delivery_image ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: r.user ? (r.user as Record<string, unknown>) : null,
		business: r.business ? (r.business as Record<string, unknown>) : null,
		delivery_driver: r.delivery_driver ? (r.delivery_driver as Record<string, unknown>) : null,
		driver: r.driver ? (r.driver as Record<string, unknown>) : null,
	});
}

export function toDeliveryOrderRef(row: unknown): DeliveryOrderRef {
	const r = row as PrismaDeliveryOrder;
	return DeliveryOrderRefSchema.parse({
		order_id: r.order_id,
		order_number: r.order_number ?? undefined,
		status: r.status,
		total_amount: r.total_amount ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DeliveryOrderBase', DeliveryOrderBaseSchema);
	registry.register('DeliveryOrderRef', DeliveryOrderRefSchema);
	registry.register('DeliveryOrderDetail', DeliveryOrderDetailSchema);
	registry.register('CreateDeliveryOrder', CreateDeliveryOrderSchema);
	registry.register('UpdateDeliveryOrder', UpdateDeliveryOrderSchema);
}
