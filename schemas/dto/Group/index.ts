import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Group DTOs (Response) ===
export {
	GroupUserBaseSchema,
	GroupUserRefSchema,
	GroupUserResponseSchema,
	GroupUserWithParentResponseSchema,
	GroupUserWithChildResponseSchema,
	GroupUserWithAllowanceResponseSchema,
	GroupUserDetailResponseSchema,
	GroupUserListResponseSchema,
	type GroupUserBase,
	type GroupUserRef,
	type GroupUserResponse,
	type GroupUserWithParentResponse,
	type GroupUserWithChildResponse,
	type GroupUserWithAllowanceResponse,
	type GroupUserDetailResponse,
	type GroupUserListResponse,
	registerSchemas as registerGroupSchemas,
} from './groupUser.js';

// === Group Validators (Request Body, Query, Params) ===
export {
	CreateGroupUserRequestSchema,
	UpdateGroupUserEnabledRequestSchema,
	UpdateGroupUserAllowanceRequestSchema,
	type CreateGroupUserRequest,
	type UpdateGroupUserEnabledRequest,
	type UpdateGroupUserAllowanceRequest,
	registerSchemas as registerGroupValidatorSchemas,
} from './group.validators.js';

// === Group Mappers ===
export * from './group.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerGroupSchemas(registry);
	registerGroupValidatorSchemas(registry);
}
