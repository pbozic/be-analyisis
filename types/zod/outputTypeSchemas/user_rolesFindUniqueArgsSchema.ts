import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesIncludeSchema } from '../inputTypeSchemas/user_rolesIncludeSchema';
import { user_rolesWhereUniqueInputSchema } from '../inputTypeSchemas/user_rolesWhereUniqueInputSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_rolesSelectSchema: z.ZodType<Prisma.user_rolesSelect> = z
	.object({
		user_roles_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		role: z.boolean().optional(),
		primary: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export const user_rolesFindUniqueArgsSchema: z.ZodType<Prisma.user_rolesFindUniqueArgs> = z
	.object({
		select: user_rolesSelectSchema.optional(),
		include: user_rolesIncludeSchema.optional(),
		where: user_rolesWhereUniqueInputSchema,
	})
	.strict();

export default user_rolesFindUniqueArgsSchema;
