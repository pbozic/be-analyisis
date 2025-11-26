import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { CASHBACK_TYPE, CASHBACK_SOURCE, CASHBACK_STATUS } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';
import { DeliveryOrderRefSchema } from '../DeliveryOrders/deliveryOrder.dto.js';
import { TaxiOrderRefSchema } from '../TaxiOrders/taxiOrder.dto.js';

extendZodWithOpenApi(z);

// Using shared common OrderRefSchema

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
	})
	.openapi('CashbackRef');
export type CashbackRef = z.infer<typeof CashbackRefSchema>;

export const CashbackDetailSchema = CashbackBaseSchema.extend({
	// In DAOs, some queries include orders; embed minimal refs when present
	taxi_order: z
		.lazy(() => TaxiOrderRefSchema)
		.nullable()
		.optional(),
	delivery_order: z
		.lazy(() => DeliveryOrderRefSchema)
		.nullable()
		.optional(),
}).openapi('CashbackDetail');
export type CashbackDetail = z.infer<typeof CashbackDetailSchema>;

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

export function toCashbackDetail(cashback: PrismaCashback): CashbackDetail {
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
		taxi_order: { order_id: c.taxi_order?.order_id ?? null },
		delivery_order: { order_id: c.delivery_order?.order_id ?? null },
	});
}

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CashbackBase', CashbackBaseSchema);
	registry.register('CashbackRef', CashbackRefSchema);
	registry.register('CashbackDetail', CashbackDetailSchema);
}
