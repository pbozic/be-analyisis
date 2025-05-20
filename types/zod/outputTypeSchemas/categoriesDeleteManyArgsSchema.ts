import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesWhereInputSchema } from '../inputTypeSchemas/categoriesWhereInputSchema';

export const categoriesDeleteManyArgsSchema: z.ZodType<Prisma.categoriesDeleteManyArgs> = z
	.object({
		where: categoriesWhereInputSchema.optional(),
	})
	.strict();

export default categoriesDeleteManyArgsSchema;
