import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsCreateManyInputSchema } from '../inputTypeSchemas/wordsCreateManyInputSchema';

export const wordsCreateManyArgsSchema: z.ZodType<Prisma.wordsCreateManyArgs> = z
	.object({
		data: z.union([wordsCreateManyInputSchema, wordsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default wordsCreateManyArgsSchema;
