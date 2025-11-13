import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, PositiveInt } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Minimum User Type (for cropped user columns)
// =======================
export const MinimumUserSchema = z
	.object({
		user_id: UUID,
		first_name: z.string().nullable(),
		last_name: z.string().nullable(),
	})
	.openapi('MinimumUser');

export type MinimumUser = z.infer<typeof MinimumUserSchema>;

// =======================
// BusinessTeam Base/Ref/Response Schemas
// =======================// BusinessTeam Base Schema - scalars only, no relations
export const BusinessTeamBaseSchema = z.object({
	business_teams_id: UUID,
	team_name: z.string(),
	crm_module_id: UUID,
	limit_per_person: z.number(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});

export type BusinessTeamBase = z.infer<typeof BusinessTeamBaseSchema>;

// BusinessTeam Ref Schema - minimal identity for embedding elsewhere
export const BusinessTeamRefSchema = z.object({
	business_teams_id: UUID,
	team_name: z.string(),
	crm_module_id: UUID,
});

export type BusinessTeamRef = z.infer<typeof BusinessTeamRefSchema>;

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

// BusinessTeam Response Schema - Base with embedded refs
export const BusinessTeamResponseSchema = BusinessTeamBaseSchema;

// BusinessTeam with Users - all DAO functions include users
export const BusinessTeamWithUsersResponseSchema = BusinessTeamResponseSchema.extend({
	users: z.array(MinimumUserSchema),
});

// BusinessTeam List Response - for paginated/bulk endpoints
export const BusinessTeamListResponseSchema = z.object({
	data: z.array(BusinessTeamWithUsersResponseSchema),
	total: z.number().optional(),
	page: z.number().optional(),
	limit: z.number().optional(),
});

// Export types
export type BusinessTeamResponse = z.infer<typeof BusinessTeamResponseSchema>;
export type BusinessTeamWithUsersResponse = z.infer<typeof BusinessTeamWithUsersResponseSchema>;
export type BusinessTeamListResponse = z.infer<typeof BusinessTeamListResponseSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('BusinessTeamBase', BusinessTeamBaseSchema);
	registry.register('BusinessTeamRef', BusinessTeamRefSchema);
	registry.register('MinimumUser', MinimumUserSchema);

	// Register request schemas
	registry.register('CreateBusinessTeamInput', CreateBusinessTeamInputSchema);
	registry.register('UpdateBusinessTeamInput', UpdateBusinessTeamInputSchema);
	registry.register('EditBusinessTeamUsersInput', EditBusinessTeamUsersInputSchema);
	registry.register('UserToTeamInput', UserToTeamInputSchema);

	// Register response schemas
	registry.register('BusinessTeam', BusinessTeamResponseSchema);
	registry.register('BusinessTeamWithUsers', BusinessTeamWithUsersResponseSchema);
	registry.register('BusinessTeamList', BusinessTeamListResponseSchema);

	// Responses
	registry.register('BusinessTeamResponse', BusinessTeamResponseSchema);
}
