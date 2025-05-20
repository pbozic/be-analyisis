import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsUpdateManyMutationInputSchema } from '../inputTypeSchemas/wordsUpdateManyMutationInputSchema';
import { wordsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/wordsUncheckedUpdateManyInputSchema';
import { wordsWhereInputSchema } from '../inputTypeSchemas/wordsWhereInputSchema';

export const wordsUpdateManyArgsSchema: z.ZodType<Prisma.wordsUpdateManyArgs> = z
	.object({
		data: z.union([wordsUpdateManyMutationInputSchema, wordsUncheckedUpdateManyInputSchema]),
		where: wordsWhereInputSchema.optional(),
	})
	.strict();

export default wordsUpdateManyArgsSchema;
