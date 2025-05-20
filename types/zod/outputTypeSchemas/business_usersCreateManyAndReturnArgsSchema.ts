import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersCreateManyInputSchema } from '../inputTypeSchemas/business_usersCreateManyInputSchema';

export const business_usersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.business_usersCreateManyAndReturnArgs> = z
	.object({
		data: z.union([business_usersCreateManyInputSchema, business_usersCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default business_usersCreateManyAndReturnArgsSchema;
