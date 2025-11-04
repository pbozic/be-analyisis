import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Driver } from './Driver.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import { DriverResponseSchema } from './Driver';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DriverHistoryLocation = {
	driver_history_location_id: string;
	driver_id: string;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	status?: string | null;
	location?: unknown | null;
	driver?: Driver | null;
	order?: TaxiOrder | null;
	delivery_order?: DeliveryOrder | null;
	created_at: Date;
	updated_at: Date;
};

export const CreateDriverHistoryLocationSchema = z
	.object({
		driver_history_location_id: z.string().uuid(),
		driver_id: z.string().uuid(),
		taxi_order_id: z.string().uuid().nullable().optional(),
		delivery_order_id: z.string().uuid().nullable().optional(),
		status: z.string().nullable().optional(),
		location: z.unknown().nullable().optional(),
	})
	.openapi('CreateDriverHistoryLocation');

export type CreateDriverHistoryLocationInput = z.infer<typeof CreateDriverHistoryLocationSchema>;

export const UpdateDriverHistoryLocationSchema =
	CreateDriverHistoryLocationSchema.partial().openapi('UpdateDriverHistoryLocation');
export type UpdateDriverHistoryLocationInput = z.infer<typeof UpdateDriverHistoryLocationSchema>;

export const DriverHistoryLocationResponseSchema = z
	.object({
		driver_history_location_id: z.string(),
		driver_id: z.string(),
		taxi_order_id: z.string().nullable().optional(),
		delivery_order_id: z.string().nullable().optional(),
		status: z.string().nullable().optional(),
		location: z.unknown().nullable().optional(),
		driver: DriverResponseSchema.nullable().optional(),
		order: TaxiOrderResponseSchema.nullable().optional(),
		delivery_order: DeliveryOrderResponseSchema.nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('DriverHistoryLocationResponse');

export type DriverHistoryLocationResponse = z.infer<typeof DriverHistoryLocationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDriverHistoryLocation', CreateDriverHistoryLocationSchema);
	registry.register('UpdateDriverHistoryLocation', UpdateDriverHistoryLocationSchema);
	registry.register('DriverHistoryLocationResponse', DriverHistoryLocationResponseSchema);
}
