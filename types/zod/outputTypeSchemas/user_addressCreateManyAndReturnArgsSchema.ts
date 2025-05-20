import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressCreateManyInputSchema } from '../inputTypeSchemas/user_addressCreateManyInputSchema';

export const user_addressCreateManyAndReturnArgsSchema: z.ZodType<Prisma.user_addressCreateManyAndReturnArgs> = z
	.object({
		data: z.union([user_addressCreateManyInputSchema, user_addressCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default user_addressCreateManyAndReturnArgsSchema;
