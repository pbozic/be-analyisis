import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { CASHBACK_TYPE, CASHBACK_SOURCE, CASHBACK_STATUS } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Minimal Refs used in relations
// =======================
export const OrderRefSchema = z
	.object({
		order_id: UUID,
		label: z.string().min(1),
	})
	.openapi('OrderRef');
export type OrderRef = z.infer<typeof OrderRefSchema>;

// =======================
// Cashback DTOs
// =======================
export const CashbackBaseSchema = z
	.object({
		cashback_id: UUID,
		user_id: UUID,
		amount: z.number(),
		type: z.nativeEnum(CASHBACK_TYPE),
		source: z.nativeEnum(CASHBACK_SOURCE),
		status: z.nativeEnum(CASHBACK_STATUS),
		description: z.string().nullable().optional(),
		earned_at: Timestamp,
		expires_at: Timestamp.nullable().optional(),
		converted_at: Timestamp.nullable().optional(),
		taxi_order_id: UUID.nullable().optional(),
		delivery_order_id: UUID.nullable().optional(),
	})
	.openapi('CashbackBase');
export type CashbackBase = z.infer<typeof CashbackBaseSchema>;

export const CashbackRefSchema = z
	.object({
		cashback_id: UUID,
		label: z.string().min(1),
	})
	.openapi('CashbackRef');
export type CashbackRef = z.infer<typeof CashbackRefSchema>;

export const CashbackDetailSchema = CashbackBaseSchema.extend({
	// In DAOs, some queries include orders; embed minimal refs when present
	taxi_order: OrderRefSchema.nullable().optional(),
	delivery_order: OrderRefSchema.nullable().optional(),
}).openapi('CashbackDetail');
export type CashbackDetail = z.infer<typeof CashbackDetailSchema>;

// =======================
// Mappers
// =======================
export function toOrderRef(order: unknown | null | undefined): OrderRef | null {
	if (!order) return null;
	const o = order as { order_id: string; order_number?: number | null };
	const label = o.order_number ? `#${o.order_number}` : o.order_id;
	return OrderRefSchema.parse({ order_id: o.order_id, label });
}

export function toCashbackRef(cashback: unknown): CashbackRef {
	const c = cashback as { cashback_id: string; type?: CASHBACK_TYPE; amount?: number };
	const label = `${c.type ?? 'CASHBACK'} ${c.amount ?? ''}`.trim();
	return CashbackRefSchema.parse({ cashback_id: c.cashback_id, label });
}

type PrismaCashback = {
	cashback_id: string;
	user_id: string;
	amount: number;
	type: CASHBACK_TYPE;
	source: CASHBACK_SOURCE;
	status: CASHBACK_STATUS;
	description?: string | null;
	earned_at: string | Date;
	expires_at?: string | Date | null;
	converted_at?: string | Date | null;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	taxi_order?: { order_id: string; order_number?: number | null } | null;
	delivery_order?: { order_id: string; order_number?: number | null } | null;
};

export function toCashbackDetail(cashback: unknown): CashbackDetail {
	const c = cashback as PrismaCashback;
	return CashbackDetailSchema.parse({
		cashback_id: c.cashback_id,
		user_id: c.user_id,
		amount: c.amount,
		type: c.type,
		source: c.source,
		status: c.status,
		description: c.description ?? null,
		earned_at: new Date(c.earned_at as string | Date).toISOString(),
		expires_at: c.expires_at ? new Date(c.expires_at as string | Date).toISOString() : null,
		converted_at: c.converted_at ? new Date(c.converted_at as string | Date).toISOString() : null,
		taxi_order_id: c.taxi_order_id ?? null,
		delivery_order_id: c.delivery_order_id ?? null,
		taxi_order: toOrderRef(c.taxi_order),
		delivery_order: toOrderRef(c.delivery_order),
	});
}

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('OrderRef', OrderRefSchema);
	registry.register('CashbackBase', CashbackBaseSchema);
	registry.register('CashbackRef', CashbackRefSchema);
	registry.register('CashbackDetail', CashbackDetailSchema);
}
