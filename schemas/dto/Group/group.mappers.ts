import {
	GroupUserResponseSchema,
	GroupUserDetailResponseSchema,
	GroupUserWithAllowanceResponseSchema,
	GroupUserResponse,
	GroupUserDetailResponse,
	GroupUserWithAllowanceResponse,
} from './groupUser.js';
import type { GroupUsersWithIncludesPrisma } from '../../../prisma/includes/group.js';
import { toUserRef } from '../User/user.mappers.js';

// Parse single GroupUser (scalars only)
export function toGroupUserResponse(payload: unknown): GroupUserResponse {
	const p = payload as GroupUsersWithIncludesPrisma;
	return GroupUserResponseSchema.parse({
		...p,
		created_at: new Date(p.created_at).toISOString(),
		updated_at: new Date(p.updated_at).toISOString(),
	});
}

// Parse GroupUser with parent_user relation
export function toGroupUserDetailResponse(payload: unknown): GroupUserDetailResponse {
	const p = payload as GroupUsersWithIncludesPrisma;
	return GroupUserDetailResponseSchema.parse({
		...p,
		created_at: new Date(p.created_at).toISOString(),
		updated_at: new Date(p.updated_at).toISOString(),
		parent_user: p.parent_user ? toUserRef(p.parent_user as any) : null,
		allowance: p.allowance
			? {
					...p.allowance,
					created_at: new Date(p.allowance.created_at).toISOString(),
					updated_at: new Date(p.allowance.updated_at).toISOString(),
				}
			: null,
	});
}

// Parse GroupUser with allowance relation
export function toGroupUserWithAllowanceResponse(payload: unknown): GroupUserWithAllowanceResponse {
	const p = payload as GroupUsersWithIncludesPrisma;
	return GroupUserWithAllowanceResponseSchema.parse({
		...p,
		created_at: new Date(p.created_at).toISOString(),
		updated_at: new Date(p.updated_at).toISOString(),
		allowance: p.allowance
			? {
					...p.allowance,
					created_at: new Date(p.allowance.created_at).toISOString(),
					updated_at: new Date(p.allowance.updated_at).toISOString(),
				}
			: null,
	});
}

export type GroupUserPrismaPayload = GroupUsersWithIncludesPrisma;
