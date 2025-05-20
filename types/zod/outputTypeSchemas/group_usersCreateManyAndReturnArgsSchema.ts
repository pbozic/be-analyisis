import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersCreateManyInputSchema } from '../inputTypeSchemas/group_usersCreateManyInputSchema';

export const group_usersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.group_usersCreateManyAndReturnArgs> = z
	.object({
		data: z.union([group_usersCreateManyInputSchema, group_usersCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default group_usersCreateManyAndReturnArgsSchema;
