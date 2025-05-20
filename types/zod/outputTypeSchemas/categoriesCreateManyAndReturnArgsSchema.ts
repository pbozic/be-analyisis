import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesCreateManyInputSchema } from '../inputTypeSchemas/categoriesCreateManyInputSchema';

export const categoriesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.categoriesCreateManyAndReturnArgs> = z
	.object({
		data: z.union([categoriesCreateManyInputSchema, categoriesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default categoriesCreateManyAndReturnArgsSchema;
