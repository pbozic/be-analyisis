import { z } from 'zod';
import {
    GroupUserResponseSchema,
    GroupUserDetailResponseSchema,
    GroupUserWithAllowanceResponseSchema,
    GroupUserListResponseSchema,
} from './groupUser.js';
import type { GroupUsersWithIncludesPrisma } from '../../../prisma/includes/group.js';

// Parse single GroupUser (scalars only)
export function toGroupUserResponse(payload: unknown) {
    return GroupUserResponseSchema.parse(payload) as z.infer<typeof GroupUserResponseSchema>;
}

// Parse GroupUser with parent_user relation
export function toGroupUserDetailResponse(payload: unknown) {
    return GroupUserDetailResponseSchema.parse(payload) as z.infer<typeof GroupUserDetailResponseSchema>;
}

// Parse GroupUser with allowance relation
export function toGroupUserWithAllowanceResponse(payload: unknown) {
    return GroupUserWithAllowanceResponseSchema.parse(payload) as z.infer<typeof GroupUserWithAllowanceResponseSchema>;
}

// Parse list results
export function toGroupUserList(rows: unknown[]) {
    return GroupUserListResponseSchema.parse({ data: rows }) as z.infer<typeof GroupUserListResponseSchema>;
}

export type GroupUserPrismaPayload = GroupUsersWithIncludesPrisma;
