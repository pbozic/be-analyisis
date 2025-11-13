import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerBusinessTeamSchemas } from './businessTeam.dto.js';
import { registerSchemas as registerBusinessTeamValidatorSchemas } from './businessTeam.validators.js';

// === BusinessTeam DTOs (Response) ===
export {
	BusinessTeamBaseSchema,
	BusinessTeamRefSchema,
	BusinessTeamResponseSchema,
	BusinessTeamWithUsersResponseSchema,
	BusinessTeamListResponseSchema,
	MinimumUserSchema,
	type BusinessTeamBase,
	type BusinessTeamRef,
	type BusinessTeamResponse,
	type BusinessTeamWithUsersResponse,
	type BusinessTeamListResponse,
	type MinimumUser,
} from './businessTeam.dto.js';

// === BusinessTeam Validators (Request Body, Query, Params) ===
export {
	CreateBusinessTeamSchema,
	EditBusinessTeamUsersSchema,
	UpdateBusinessTeamSchema,
	SetBusinessTeamLimitSchema,
	SetBusinessTeamNameSchema,
	AddUserToTeamSchema,
	RemoveUserFromTeamSchema,
	MoveUserToTeamSchema,
	type CreateBusinessTeamInput,
	type EditBusinessTeamUsersInput,
	type UpdateBusinessTeamInput,
	type SetBusinessTeamLimitInput,
	type SetBusinessTeamNameInput,
	type AddUserToTeamInput,
	type RemoveUserFromTeamInput,
	type MoveUserToTeamInput,
} from './businessTeam.validators.js';

// === BusinessTeam Mappers ===
export * from './businessTeam.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerBusinessTeamSchemas(registry);
	registerBusinessTeamValidatorSchemas(registry);
}
