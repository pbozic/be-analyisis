import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// GroupUser Base Schema - scalars only, no relations
export const GroupUserBaseSchema = z.object({
	group_user_id: UUID,
	parent_user_id: UUID,
	child_user_id: UUID,
	enabled: z.boolean(),
	created_at: Timestamp,
	updated_at: Timestamp,
});

export type GroupUserBase = z.infer<typeof GroupUserBaseSchema>;

// GroupUser Ref Schema - minimal identity for embedding elsewhere
export const GroupUserRefSchema = z.object({
	group_user_id: UUID,
	parent_user_id: UUID,
	child_user_id: UUID,
	enabled: z.boolean(),
});

export type GroupUserRef = z.infer<typeof GroupUserRefSchema>;

// GroupUser Response Schema - Base with embedded refs
export const GroupUserResponseSchema = GroupUserBaseSchema;

// Lazy getters for User schemas to break circular dependency
// Using a pattern similar to UserLoginResponseSchema but adapted for synchronous z.lazy()
let _UserRefSchema: z.ZodTypeAny | null = null;
let _AllowanceRefSchema: z.ZodTypeAny | null = null;

function getUserRefSchema(): z.ZodTypeAny {
	if (!_UserRefSchema) {
		// Dynamic import resolved synchronously via module cache

		const mod = require('../User/index.js');
		_UserRefSchema = mod.UserRefSchema;
	}
	return _UserRefSchema as z.ZodTypeAny;
}

function getAllowanceRefSchema(): z.ZodTypeAny {
	if (!_AllowanceRefSchema) {
		// Dynamic import resolved synchronously via module cache

		const mod = require('../User/index.js');
		_AllowanceRefSchema = mod.AllowanceRefSchema;
	}
	return _AllowanceRefSchema as z.ZodTypeAny;
}

// GroupUser with Parent User - for getGroupUserByChildId function
export const GroupUserWithParentResponseSchema = GroupUserResponseSchema.extend({
	parent_user: z.lazy(() => getUserRefSchema()),
});

// GroupUser with Child User - for getGroupUserByParentId function
export const GroupUserWithChildResponseSchema = GroupUserResponseSchema.extend({
	child_user: z.lazy(() => getUserRefSchema()),
});

// GroupUser with Allowance - for updateGroupUserAllowance function
export const GroupUserWithAllowanceResponseSchema = GroupUserResponseSchema.extend({
	allowance: z.lazy(() => getAllowanceRefSchema()).nullable(),
});

// GroupUser with Parent and Allowance - for getGroupUserByChildId with full includes
export const GroupUserDetailResponseSchema = GroupUserResponseSchema.extend({
	parent_user: z.lazy(() => getUserRefSchema()),
	allowance: z.lazy(() => getAllowanceRefSchema()).nullable(),
});

// GroupUser List Response - for paginated/bulk endpoints
export const GroupUserListResponseSchema = z.object({
	data: z.array(GroupUserResponseSchema),
	total: z.number().optional(),
	page: z.number().optional(),
	limit: z.number().optional(),
});

export type GroupUserResponse = z.infer<typeof GroupUserResponseSchema>;
export type GroupUserWithParentResponse = z.infer<typeof GroupUserWithParentResponseSchema>;
export type GroupUserWithChildResponse = z.infer<typeof GroupUserWithChildResponseSchema>;
export type GroupUserWithAllowanceResponse = z.infer<typeof GroupUserWithAllowanceResponseSchema>;
export type GroupUserDetailResponse = z.infer<typeof GroupUserDetailResponseSchema>;
export type GroupUserListResponse = z.infer<typeof GroupUserListResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('GroupUserBase', GroupUserBaseSchema);
	registry.register('GroupUserRef', GroupUserRefSchema);

	// Register response schemas
	registry.register('GroupUser', GroupUserResponseSchema);
	registry.register('GroupUserWithParent', GroupUserWithParentResponseSchema);
	registry.register('GroupUserWithAllowance', GroupUserWithAllowanceResponseSchema);
	registry.register('GroupUserDetail', GroupUserDetailResponseSchema);
	registry.register('GroupUserList', GroupUserListResponseSchema);

	// Responses
	registry.register('GroupUserResponse', GroupUserResponseSchema);
}
