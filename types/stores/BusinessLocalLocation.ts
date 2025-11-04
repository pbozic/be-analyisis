import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { StoresModule } from './StoresModule.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { LocalLocation } from './LocalLocation.js';
import { LocalLocationResponseSchema } from './LocalLocation';
import { StoresModuleResponseSchema } from './StoresModule';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessLocalLocation = {
	business_local_location_id: string;
	stores_id: string;
	local_location_id: string;
	created_at: Date;
	updated_at: Date;
	time: Date;
	local_location: LocalLocation;
	stores_module: StoresModule;
	orders: DeliveryOrder[];
};

export const CreateBusinessLocalLocationSchema = z
	.object({
		business_local_location_id: z.string().uuid(),
		stores_id: z.string().uuid(),
		local_location_id: z.string().uuid(),
		time: z.unknown(),
	})
	.openapi('CreateBusinessLocalLocation');

export type CreateBusinessLocalLocationInput = z.infer<typeof CreateBusinessLocalLocationSchema>;

export const UpdateBusinessLocalLocationSchema =
	CreateBusinessLocalLocationSchema.partial().openapi('UpdateBusinessLocalLocation');
export type UpdateBusinessLocalLocationInput = z.infer<typeof UpdateBusinessLocalLocationSchema>;

export const BusinessLocalLocationResponseSchema = z
	.object({
		business_local_location_id: z.string(),
		stores_id: z.string(),
		local_location_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		time: z.string().datetime(),
		local_location: LocalLocationResponseSchema,
		stores_module: StoresModuleResponseSchema,
		orders: z.array(DeliveryOrderResponseSchema),
	})
	.openapi('BusinessLocalLocationResponse');

export type BusinessLocalLocationResponse = z.infer<typeof BusinessLocalLocationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessLocalLocation', CreateBusinessLocalLocationSchema);
	registry.register('UpdateBusinessLocalLocation', UpdateBusinessLocalLocationSchema);
	registry.register('BusinessLocalLocationResponse', BusinessLocalLocationResponseSchema);
}
