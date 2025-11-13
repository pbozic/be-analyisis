import z from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);
// =======================
// Create Business Team - POST /create
// =======================
export const CreateBusinessTeamSchema = z
	.object({
		business_id: UUID,
		team_name: z.string().min(1).openapi({ example: 'Team Alpha' }),
		limit_per_person: z.number().min(0).optional().openapi({ example: 100 }),
		users: z.array(UUID).optional(),
	})
	.openapi('CreateBusinessTeam');
export type CreateBusinessTeamInput = z.infer<typeof CreateBusinessTeamSchema>;

// =======================
// Edit Business Team Users - POST /users/:business_teams_id
// =======================
export const EditBusinessTeamUsersSchema = z
	.object({
		users_to_add: z.array(UUID).optional(),
		users_to_delete: z.array(UUID).optional(),
	})
	.openapi('EditBusinessTeamUsers');
export type EditBusinessTeamUsersInput = z.infer<typeof EditBusinessTeamUsersSchema>;

// =======================
// Update Business Team - PATCH /:business_teams_id
// =======================
export const UpdateBusinessTeamSchema = z
	.object({
		team_name: z.string().min(1).optional().openapi({ example: 'Updated Team Name' }),
		limit_per_person: z.number().min(0).optional().openapi({ example: 150 }),
	})
	.openapi('UpdateBusinessTeam');
export type UpdateBusinessTeamInput = z.infer<typeof UpdateBusinessTeamSchema>;

// =======================
// Set Business Team Limit - PATCH /:business_teams_id/limit
// =======================
export const SetBusinessTeamLimitSchema = z
	.object({
		limit_per_person: z.number().min(0).openapi({ example: 200 }),
	})
	.openapi('SetBusinessTeamLimit');
export type SetBusinessTeamLimitInput = z.infer<typeof SetBusinessTeamLimitSchema>;

// =======================
// Set Business Team Name - PATCH /:business_teams_id/name
// =======================
export const SetBusinessTeamNameSchema = z
	.object({
		team_name: z.string().min(1).openapi({ example: 'New Team Name' }),
	})
	.openapi('SetBusinessTeamName');
export type SetBusinessTeamNameInput = z.infer<typeof SetBusinessTeamNameSchema>;

// =======================
// Add User to Team - PATCH /add_user
// =======================
export const AddUserToTeamSchema = z
	.object({
		user_id: UUID,
		business_teams_id: UUID,
	})
	.openapi('AddUserToTeam');
export type AddUserToTeamInput = z.infer<typeof AddUserToTeamSchema>;

// =======================
// Remove User from Team - PATCH /remove_user
// =======================
export const RemoveUserFromTeamSchema = z
	.object({
		user_id: UUID,
	})
	.openapi('RemoveUserFromTeam');
export type RemoveUserFromTeamInput = z.infer<typeof RemoveUserFromTeamSchema>;

// =======================
// Move User to Team - PATCH /move_user
// =======================
export const MoveUserToTeamSchema = z
	.object({
		user_id: UUID,
		business_teams_id: UUID,
	})
	.openapi('MoveUserToTeam');
export type MoveUserToTeamInput = z.infer<typeof MoveUserToTeamSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('CreateBusinessTeam', CreateBusinessTeamSchema);
	registry.register('SetBusinessTeamLimit', SetBusinessTeamLimitSchema);
	registry.register('SetBusinessTeamName', SetBusinessTeamNameSchema);
	registry.register('AddUserToTeam', AddUserToTeamSchema);
	registry.register('MoveUserToTeam', MoveUserToTeamSchema);
}
