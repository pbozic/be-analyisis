import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DeliveryOrder } from './DeliveryOrder.js';
import type { Driver } from '../drivers/Driver.js';
import { DeliveryOrderResponseSchema } from './DeliveryOrder';
import { DriverResponseSchema } from '../drivers/Driver';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DeliveryOrderSent = {
	delivery_order_sent_id: string;
	order_id: string;
	accepted: boolean;
	location: unknown;
	timeline: unknown;
	created_at: Date;
	updated_at: Date;
	order?: DeliveryOrder | null;
	driver_id?: string | null;
	driver?: Driver | null;
};

export const CreateDeliveryOrderSentSchema = z
	.object({
		delivery_order_sent_id: z.string().uuid(),
		order_id: z.string().uuid(),
		accepted: z.boolean(),
		location: z.unknown(),
		timeline: z.unknown(),
		driver_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateDeliveryOrderSent');

export type CreateDeliveryOrderSentInput = z.infer<typeof CreateDeliveryOrderSentSchema>;

export const UpdateDeliveryOrderSentSchema = CreateDeliveryOrderSentSchema.partial().openapi('UpdateDeliveryOrderSent');
export type UpdateDeliveryOrderSentInput = z.infer<typeof UpdateDeliveryOrderSentSchema>;

export const DeliveryOrderSentResponseSchema = z
	.object({
		delivery_order_sent_id: z.string(),
		order_id: z.string(),
		accepted: z.boolean(),
		location: z.unknown(),
		timeline: z.unknown(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		order: DeliveryOrderResponseSchema.nullable().optional(),
		driver_id: z.string().nullable().optional(),
		driver: DriverResponseSchema.nullable().optional(),
	})
	.openapi('DeliveryOrderSentResponse');

export type DeliveryOrderSentResponse = z.infer<typeof DeliveryOrderSentResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDeliveryOrderSent', CreateDeliveryOrderSentSchema);
	registry.register('UpdateDeliveryOrderSent', UpdateDeliveryOrderSentSchema);
	registry.register('DeliveryOrderSentResponse', DeliveryOrderSentResponseSchema);
}
