import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersIncludeSchema } from '../inputTypeSchemas/group_usersIncludeSchema';
import { group_usersCreateInputSchema } from '../inputTypeSchemas/group_usersCreateInputSchema';
import { group_usersUncheckedCreateInputSchema } from '../inputTypeSchemas/group_usersUncheckedCreateInputSchema';
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

export const group_usersCreateArgsSchema: z.ZodType<Prisma.group_usersCreateArgs> = z
	.object({
		select: group_usersSelectSchema.optional(),
		include: group_usersIncludeSchema.optional(),
		data: z.union([group_usersCreateInputSchema, group_usersUncheckedCreateInputSchema]),
	})
	.strict();

export default group_usersCreateArgsSchema;
