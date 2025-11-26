import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';
import { AddressResponseSchema } from '../Address';
import { DeliveryOrderRefSchema } from '../DeliveryOrders';

extendZodWithOpenApi(z);

// LocalLocation DTOs
export const LocalLocationBaseSchema = z
	.object({
		local_location_id: UUID,
		address_id: UUID,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('LocalLocationBase');
export type LocalLocationBase = z.infer<typeof LocalLocationBaseSchema>;

export const LocalLocationDetailSchema = LocalLocationBaseSchema.extend({
	address: AddressResponseSchema,
}).openapi('LocalLocationDetail');
export type LocalLocationDetail = z.infer<typeof LocalLocationDetailSchema>;

// BusinessLocalLocation DTOs
export const BusinessLocalLocationBaseSchema = z
	.object({
		business_local_location_id: UUID,
		stores_id: UUID,
		local_location_id: UUID,
		time: Timestamp,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('BusinessLocalLocationBase');
export type BusinessLocalLocationBase = z.infer<typeof BusinessLocalLocationBaseSchema>;

export const BusinessLocalLocationDetailSchema = BusinessLocalLocationBaseSchema.extend({
	local_location: LocalLocationDetailSchema,
	orders: z.array(z.lazy(() => DeliveryOrderRefSchema)).default([]),
}).openapi('BusinessLocalLocationDetail');
export type BusinessLocalLocationDetail = z.infer<typeof BusinessLocalLocationDetailSchema>;

// Mappers moved to localLocation.mappers.ts

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LocalLocationBase', LocalLocationBaseSchema);
	registry.register('LocalLocationDetail', LocalLocationDetailSchema);
	registry.register('BusinessLocalLocationBase', BusinessLocalLocationBaseSchema);
	registry.register('BusinessLocalLocationDetail', BusinessLocalLocationDetailSchema);
}
