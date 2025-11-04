import { CASHBACK_SOURCE, CASHBACK_STATUS, CASHBACK_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import { UserResponseSchema } from '../users/User';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Cashback = {
	cashback_id: string;
	user_id: string;
	amount: number;
	type: CASHBACK_TYPE;
	source: CASHBACK_SOURCE;
	status: CASHBACK_STATUS;
	description?: string | null;
	earned_at: Date;
	expires_at?: Date | null;
	converted_at?: Date | null;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	user: User;
	taxi_order?: TaxiOrder | null;
	delivery_order?: DeliveryOrder | null;
};

export const CreateCashbackSchema = z
	.object({
		cashback_id: z.string().uuid(),
		user_id: z.string().uuid(),
		amount: z.number(),
		type: z.nativeEnum(CASHBACK_TYPE),
		source: z.nativeEnum(CASHBACK_SOURCE),
		status: z.nativeEnum(CASHBACK_STATUS),
		description: z.string().nullable().optional(),
		earned_at: z.unknown(),
		expires_at: z.unknown().nullable().optional(),
		converted_at: z.unknown().nullable().optional(),
		taxi_order_id: z.string().uuid().nullable().optional(),
		delivery_order_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateCashback');

export type CreateCashbackInput = z.infer<typeof CreateCashbackSchema>;

export const UpdateCashbackSchema = CreateCashbackSchema.partial().openapi('UpdateCashback');
export type UpdateCashbackInput = z.infer<typeof UpdateCashbackSchema>;

export const CashbackResponseSchema = z
	.object({
		cashback_id: z.string(),
		user_id: z.string(),
		amount: z.number(),
		type: z.nativeEnum(CASHBACK_TYPE),
		source: z.nativeEnum(CASHBACK_SOURCE),
		status: z.nativeEnum(CASHBACK_STATUS),
		description: z.string().nullable().optional(),
		earned_at: z.string().datetime(),
		expires_at: z.string().datetime().nullable().optional(),
		converted_at: z.string().datetime().nullable().optional(),
		taxi_order_id: z.string().nullable().optional(),
		delivery_order_id: z.string().nullable().optional(),
		user: UserResponseSchema,
		taxi_order: TaxiOrderResponseSchema.nullable().optional(),
		delivery_order: DeliveryOrderResponseSchema.nullable().optional(),
	})
	.openapi('CashbackResponse');

export type CashbackResponse = z.infer<typeof CashbackResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateCashback', CreateCashbackSchema);
	registry.register('UpdateCashback', UpdateCashbackSchema);
	registry.register('CashbackResponse', CashbackResponseSchema);
}
