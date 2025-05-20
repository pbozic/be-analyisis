import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesIncludeSchema } from '../inputTypeSchemas/user_rolesIncludeSchema';
import { user_rolesUpdateInputSchema } from '../inputTypeSchemas/user_rolesUpdateInputSchema';
import { user_rolesUncheckedUpdateInputSchema } from '../inputTypeSchemas/user_rolesUncheckedUpdateInputSchema';
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

export const user_rolesUpdateArgsSchema: z.ZodType<Prisma.user_rolesUpdateArgs> = z
	.object({
		select: user_rolesSelectSchema.optional(),
		include: user_rolesIncludeSchema.optional(),
		data: z.union([user_rolesUpdateInputSchema, user_rolesUncheckedUpdateInputSchema]),
		where: user_rolesWhereUniqueInputSchema,
	})
	.strict();

export default user_rolesUpdateArgsSchema;
