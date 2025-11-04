import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { CrmModule } from './CrmModule.js';
import { UserResponseSchema } from '../users/User';
import { CrmModuleResponseSchema } from './CrmModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export const CreateBusinessTeamSchema = z
	.object({
		business_teams_id: z.string().uuid(),
		team_name: z.string(),
		crm_module_id: z.string().uuid(),
		limit_per_person: z.number(),
	})
	.openapi('CreateBusinessTeam');

export type CreateBusinessTeamInput = z.infer<typeof CreateBusinessTeamSchema>;

export const UpdateBusinessTeamSchema = CreateBusinessTeamSchema.partial().openapi('UpdateBusinessTeam');
export type UpdateBusinessTeamInput = z.infer<typeof UpdateBusinessTeamSchema>;

export const BusinessTeamResponseSchema = z
	.object({
		business_teams_id: z.string(),
		team_name: z.string(),
		crm_module_id: z.string(),
		limit_per_person: z.number(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		users: z.array(UserResponseSchema),
		crm_module: CrmModuleResponseSchema,
	})
	.openapi('BusinessTeamResponse');

export type BusinessTeamResponse = z.infer<typeof BusinessTeamResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessTeam', CreateBusinessTeamSchema);
	registry.register('UpdateBusinessTeam', UpdateBusinessTeamSchema);
	registry.register('BusinessTeamResponse', BusinessTeamResponseSchema);
}

export type BusinessTeam = {
	business_teams_id: string;
	team_name: string;
	crm_module_id: string;
	limit_per_person: number;
	created_at: Date;
	updated_at: Date;
	users?: User[];
	crm_module?: CrmModule;
};
