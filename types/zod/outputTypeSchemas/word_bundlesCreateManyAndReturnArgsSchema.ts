import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesCreateManyInputSchema } from '../inputTypeSchemas/word_bundlesCreateManyInputSchema';

export const word_bundlesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.word_bundlesCreateManyAndReturnArgs> = z
	.object({
		data: z.union([word_bundlesCreateManyInputSchema, word_bundlesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default word_bundlesCreateManyAndReturnArgsSchema;
