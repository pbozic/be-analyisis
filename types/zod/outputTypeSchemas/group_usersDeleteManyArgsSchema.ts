import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersWhereInputSchema } from '../inputTypeSchemas/group_usersWhereInputSchema';

export const group_usersDeleteManyArgsSchema: z.ZodType<Prisma.group_usersDeleteManyArgs> = z
	.object({
		where: group_usersWhereInputSchema.optional(),
	})
	.strict();

export default group_usersDeleteManyArgsSchema;
