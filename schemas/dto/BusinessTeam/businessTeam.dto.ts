import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, PositiveInt } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Minimum User Type
// =======================
export const MinimumUserSchema = z
	.object({
		user_id: UUID,
		first_name: z.string().openapi({ example: 'John' }),
		last_name: z.string().openapi({ example: 'Doe' }),
	})
	.openapi('MinimumUser');

export type MinimumUser = z.infer<typeof MinimumUserSchema>;

// =======================
// Business Team Schemas
// =======================

// Create Business Team Input
export const CreateBusinessTeamInputSchema = z
	.object({
		crm_module_id: UUID,
		team_name: z.string().min(1).openapi({ example: 'Sales Team' }),
		// limit_per_person: PositiveInt.nullable().optional().openapi({ example: 100 }),
		users: z.array(UUID).optional().openapi({ description: 'List of user IDs to assign to the team' }),
	})
	.openapi('CreateBusinessTeamInput');

// Update Business Team Input
export const UpdateBusinessTeamInputSchema = z
	.object({
		team_name: z.string().min(1).optional().openapi({ example: 'Updated Team Name' }),
		limit_per_person: PositiveInt.nullable().optional().openapi({ example: 150 }),
	})
	.openapi('UpdateBusinessTeamInput');

// Edit Business Team Users Input
export const EditBusinessTeamUsersInputSchema = z
	.object({
		users_to_add: z.array(UUID).optional().openapi({ description: 'List of user IDs to add to the team' }),
		users_to_delete: z.array(UUID).optional().openapi({ description: 'List of user IDs to remove from the team' }),
	})
	.openapi('EditBusinessTeamUsersInput');

// Add User to Team Input
export const UserToTeamInputSchema = z
	.object({
		user_id: UUID,
		business_teams_id: UUID,
	})
	.openapi('UserToTeamInput');

// =======================
// Business Team Response
// =======================

// Business Team Response Schema
export const BusinessTeamResponseSchema = z
	.object({
		business_teams_id: UUID,
		crm_module_id: UUID,
		team_name: z.string().openapi({ example: 'Sales Team' }),
		limit_per_person: PositiveInt.nullable().openapi({ example: 100 }),
		users: z.array(MinimumUserSchema).optional(),
	})
	.openapi('BusinessTeamResponse');
// Business Team Response Schema
export const BusinessTeamListResponseSchema = z.array(BusinessTeamResponseSchema).openapi('BusinessTeamListResponse');

export type BusinessTeamResponse = z.infer<typeof BusinessTeamResponseSchema>;
export type BusinessTeamListResponse = z.infer<typeof BusinessTeamListResponseSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerBusinessTeamSchemas(registry: OpenAPIRegistry) {
	registry.register('MinimumUser', MinimumUserSchema);

	registry.register('CreateBusinessTeamInput', CreateBusinessTeamInputSchema);
	registry.register('UpdateBusinessTeamInput', UpdateBusinessTeamInputSchema);
	registry.register('EditBusinessTeamUsersInput', EditBusinessTeamUsersInputSchema);
	registry.register('UserToTeamInput', UserToTeamInputSchema);

	registry.register('BusinessTeamResponse', BusinessTeamResponseSchema);
	registry.register('BusinessTeamListResponse', BusinessTeamListResponseSchema);
}
