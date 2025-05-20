import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesWhereInputSchema } from '../inputTypeSchemas/user_rolesWhereInputSchema';

export const user_rolesDeleteManyArgsSchema: z.ZodType<Prisma.user_rolesDeleteManyArgs> = z
	.object({
		where: user_rolesWhereInputSchema.optional(),
	})
	.strict();

export default user_rolesDeleteManyArgsSchema;
