import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import { UserRefSchema } from '../User/index.js';
import { AllowanceRefSchema } from '../User/index.js';

extendZodWithOpenApi(z);

// GroupUser Base Schema - scalars only, no relations
export const GroupUserBaseSchema = z.object({
	group_user_id: UUID,
	parent_user_id: UUID,
	child_user_id: UUID,
	enabled: z.boolean(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
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

// GroupUser with Parent User - for getGroupUserByChildId function
export const GroupUserWithParentResponseSchema = GroupUserResponseSchema.extend({
	parent_user: z.lazy(() => UserRefSchema),
});

// GroupUser with Child User - for getGroupUserByParentId function
export const GroupUserWithChildResponseSchema = GroupUserResponseSchema.extend({
	child_user: z.lazy(() => UserRefSchema),
});

// GroupUser with Allowance - for updateGroupUserAllowance function
export const GroupUserWithAllowanceResponseSchema = GroupUserResponseSchema.extend({
	allowance: AllowanceRefSchema.nullable(),
});

// GroupUser with Parent and Allowance - for getGroupUserByChildId with full includes
export const GroupUserDetailResponseSchema = GroupUserResponseSchema.extend({
	parent_user: z.lazy(() => UserRefSchema),
	allowance: AllowanceRefSchema.nullable(),
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
