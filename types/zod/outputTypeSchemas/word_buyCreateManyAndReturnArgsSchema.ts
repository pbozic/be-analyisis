import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_buyCreateManyInputSchema } from '../inputTypeSchemas/word_buyCreateManyInputSchema';

export const word_buyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.word_buyCreateManyAndReturnArgs> = z
	.object({
		data: z.union([word_buyCreateManyInputSchema, word_buyCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default word_buyCreateManyAndReturnArgsSchema;
