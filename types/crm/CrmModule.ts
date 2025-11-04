import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Business } from '../business/Business.js';
import type { BusinessClient } from './BusinessClient.js';
import type { BusinessTeam } from './BusinessTeam.js';
import { BusinessResponseSchema } from '../business/Business';
import { BusinessClientResponseSchema } from './BusinessClient';
import { BusinessTeamResponseSchema } from './BusinessTeam';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateCrmModuleSchema = z
	.object({
		crm_module_id: z.string().uuid(),
		business_id: z.string().uuid(),
		purchase_order_limit_amount: z.number().nullable().optional(),
	})
	.openapi('CreateCrmModule');

export type CreateCrmModuleInput = z.infer<typeof CreateCrmModuleSchema>;

export const UpdateCrmModuleSchema = CreateCrmModuleSchema.partial().openapi('UpdateCrmModule');
export type UpdateCrmModuleInput = z.infer<typeof UpdateCrmModuleSchema>;

export const CrmModuleResponseSchema = z
	.object({
		crm_module_id: z.string(),
		business_id: z.string(),
		purchase_order_limit_amount: z.number().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		business: BusinessResponseSchema,
		business_clients: z.array(BusinessClientResponseSchema),
		business_teams: z.array(BusinessTeamResponseSchema),
	})
	.openapi('CrmModuleResponse');

export type CrmModuleResponse = z.infer<typeof CrmModuleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateCrmModule', CreateCrmModuleSchema);
	registry.register('UpdateCrmModule', UpdateCrmModuleSchema);
	registry.register('CrmModuleResponse', CrmModuleResponseSchema);
}

export type CrmModule = {
	crm_module_id: string;
	business_id: string;
	purchase_order_limit_amount?: number | null;
	created_at: Date;
	updated_at: Date;
	business?: Business;
	business_clients?: BusinessClient[];
	business_teams?: BusinessTeam[];
};
