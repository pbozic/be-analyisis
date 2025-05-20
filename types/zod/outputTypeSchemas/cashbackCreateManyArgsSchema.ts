import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { cashbackCreateManyInputSchema } from '../inputTypeSchemas/cashbackCreateManyInputSchema';

export const cashbackCreateManyArgsSchema: z.ZodType<Prisma.cashbackCreateManyArgs> = z
	.object({
		data: z.union([cashbackCreateManyInputSchema, cashbackCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default cashbackCreateManyArgsSchema;
