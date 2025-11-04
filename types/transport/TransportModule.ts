import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Business } from '../business/Business.js';
import type { Reviewable } from '../reviews/Reviewable.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Driver } from '../drivers/Driver.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { BusinessPremise } from '../invoices/BusinessPremise.js';
import { BusinessResponseSchema } from '../business/Business';
import { ReviewableResponseSchema } from '../reviews/Reviewable';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { DriverResponseSchema } from '../drivers/Driver';
import { VehicleResponseSchema } from '../vehicles/Vehicle';
import { BusinessPremiseResponseSchema } from '../invoices/BusinessPremise';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateTransportModuleSchema = z
	.object({
		transport_module_id: z.string().uuid(),
		business_id: z.string().uuid(),
		active: z.boolean(),
		reviewable_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateTransportModule');

export type CreateTransportModuleInput = z.infer<typeof CreateTransportModuleSchema>;

export const UpdateTransportModuleSchema = CreateTransportModuleSchema.partial().openapi('UpdateTransportModule');
export type UpdateTransportModuleInput = z.infer<typeof UpdateTransportModuleSchema>;

export const TransportModuleResponseSchema = z
	.object({
		transport_module_id: z.string(),
		business_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		business: BusinessResponseSchema,
		active: z.boolean(),
		reviewable_id: z.string().nullable().optional(),
		reviewable: ReviewableResponseSchema.nullable().optional(),
		taxi_orders: z.array(TaxiOrderResponseSchema),
		delivery_orders: z.array(DeliveryOrderResponseSchema),
		drivers: z.array(DriverResponseSchema),
		vehicles: z.array(VehicleResponseSchema),
		business_premises: z.array(BusinessPremiseResponseSchema),
	})
	.openapi('TransportModuleResponse');

export type TransportModuleResponse = z.infer<typeof TransportModuleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTransportModule', CreateTransportModuleSchema);
	registry.register('UpdateTransportModule', UpdateTransportModuleSchema);
	registry.register('TransportModuleResponse', TransportModuleResponseSchema);
}

export type TransportModule = {
	transport_module_id: string;
	business_id: string;
	created_at: Date;
	updated_at: Date;
	business?: Business;
	active: boolean;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	taxi_orders?: TaxiOrder[];
	delivery_orders?: DeliveryOrder[];
	drivers?: Driver[];
	vehicles?: Vehicle[];
	business_premises?: BusinessPremise[];
};
