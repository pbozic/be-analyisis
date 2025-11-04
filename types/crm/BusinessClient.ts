import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { CrmModule } from './CrmModule.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import { CrmModuleResponseSchema } from './CrmModule';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export const CreateBusinessClientSchema = z
	.object({
		business_clients_id: z.string().uuid(),
		crm_module_id: z.string().uuid(),
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		email: z.string().nullable().optional(),
		telephone: z.string(),
		telephone_code: z.string(),
	})
	.openapi('CreateBusinessClient');

export type CreateBusinessClientInput = z.infer<typeof CreateBusinessClientSchema>;

export const UpdateBusinessClientSchema = CreateBusinessClientSchema.partial().openapi('UpdateBusinessClient');
export type UpdateBusinessClientInput = z.infer<typeof UpdateBusinessClientSchema>;

export const BusinessClientResponseSchema = z
	.object({
		business_clients_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		crm_module_id: z.string(),
		crm_module: CrmModuleResponseSchema,
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		email: z.string().nullable().optional(),
		telephone: z.string(),
		telephone_code: z.string(),
		taxi_orders: z.array(TaxiOrderResponseSchema),
	})
	.openapi('BusinessClientResponse');

export type BusinessClientResponse = z.infer<typeof BusinessClientResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessClient', CreateBusinessClientSchema);
	registry.register('UpdateBusinessClient', UpdateBusinessClientSchema);
	registry.register('BusinessClientResponse', BusinessClientResponseSchema);
}

export type BusinessClient = {
	business_clients_id: string;
	created_at: Date;
	updated_at: Date;
	crm_module_id: string;
	crm_module?: CrmModule;
	first_name?: string | null;
	last_name?: string | null;
	email?: string | null;
	telephone: string;
	telephone_code: string;
	taxi_orders?: TaxiOrder[];
};
