import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsWhereInputSchema } from '../inputTypeSchemas/wordsWhereInputSchema';

export const wordsDeleteManyArgsSchema: z.ZodType<Prisma.wordsDeleteManyArgs> = z
	.object({
		where: wordsWhereInputSchema.optional(),
	})
	.strict();

export default wordsDeleteManyArgsSchema;
