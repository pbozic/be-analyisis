import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesWhereInputSchema } from '../inputTypeSchemas/word_bundlesWhereInputSchema';

export const word_bundlesDeleteManyArgsSchema: z.ZodType<Prisma.word_bundlesDeleteManyArgs> = z
	.object({
		where: word_bundlesWhereInputSchema.optional(),
	})
	.strict();

export default word_bundlesDeleteManyArgsSchema;
