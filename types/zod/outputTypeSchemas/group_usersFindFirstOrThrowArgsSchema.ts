import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersIncludeSchema } from '../inputTypeSchemas/group_usersIncludeSchema';
import { group_usersWhereInputSchema } from '../inputTypeSchemas/group_usersWhereInputSchema';
import { group_usersOrderByWithRelationInputSchema } from '../inputTypeSchemas/group_usersOrderByWithRelationInputSchema';
import { group_usersWhereUniqueInputSchema } from '../inputTypeSchemas/group_usersWhereUniqueInputSchema';
import { Group_usersScalarFieldEnumSchema } from '../inputTypeSchemas/Group_usersScalarFieldEnumSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { allowancesArgsSchema } from '../outputTypeSchemas/allowancesArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const group_usersSelectSchema: z.ZodType<Prisma.group_usersSelect> = z
	.object({
		group_user_id: z.boolean().optional(),
		parent_user_id: z.boolean().optional(),
		child_user_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		enabled: z.boolean().optional(),
		parent_user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		child_user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		allowance: z.union([z.boolean(), z.lazy(() => allowancesArgsSchema)]).optional(),
	})
	.strict();

export const group_usersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.group_usersFindFirstOrThrowArgs> = z
	.object({
		select: group_usersSelectSchema.optional(),
		include: group_usersIncludeSchema.optional(),
		where: group_usersWhereInputSchema.optional(),
		orderBy: z
			.union([group_usersOrderByWithRelationInputSchema.array(), group_usersOrderByWithRelationInputSchema])
			.optional(),
		cursor: group_usersWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([Group_usersScalarFieldEnumSchema, Group_usersScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default group_usersFindFirstOrThrowArgsSchema;
