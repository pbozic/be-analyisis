import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { TaxiOrder } from './TaxiOrder.js';
import type { Driver } from '../drivers/Driver.js';
import { TaxiOrderResponseSchema } from './TaxiOrder';
import { DriverResponseSchema } from '../drivers/Driver';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateTaxiOrderSentSchema = z
	.object({
		taxi_order_sent_id: z.string().uuid(),
		order_id: z.string().uuid(),
		driver_id: z.string().uuid(),
		accepted: z.boolean(),
		location: z.unknown().nullable().optional(),
		timeline: z.unknown(),
		rejected: z.boolean(),
	})
	.openapi('CreateTaxiOrderSent');

export type CreateTaxiOrderSentInput = z.infer<typeof CreateTaxiOrderSentSchema>;

export const UpdateTaxiOrderSentSchema = CreateTaxiOrderSentSchema.partial().openapi('UpdateTaxiOrderSent');
export type UpdateTaxiOrderSentInput = z.infer<typeof UpdateTaxiOrderSentSchema>;

export const TaxiOrderSentResponseSchema = z
	.object({
		taxi_order_sent_id: z.string(),
		order_id: z.string(),
		driver_id: z.string(),
		accepted: z.boolean(),
		location: z.unknown().nullable().optional(),
		timeline: z.unknown(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		order: TaxiOrderResponseSchema.nullable().optional(),
		driver: DriverResponseSchema.nullable().optional(),
		rejected: z.boolean(),
	})
	.openapi('TaxiOrderSentResponse');

export type TaxiOrderSentResponse = z.infer<typeof TaxiOrderSentResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTaxiOrderSent', CreateTaxiOrderSentSchema);
	registry.register('UpdateTaxiOrderSent', UpdateTaxiOrderSentSchema);
	registry.register('TaxiOrderSentResponse', TaxiOrderSentResponseSchema);
}

export type TaxiOrderSent = {
	taxi_order_sent_id: string;
	order_id: string;
	driver_id: string;
	accepted: boolean;
	location?: unknown | null;
	timeline: unknown;
	created_at: Date;
	updated_at: Date;
	order?: TaxiOrder | null;
	driver?: Driver | null;
	rejected: boolean;
};
