import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesCreateManyInputSchema } from '../inputTypeSchemas/menu_categoriesCreateManyInputSchema';

export const menu_categoriesCreateManyArgsSchema: z.ZodType<Prisma.menu_categoriesCreateManyArgs> = z
	.object({
		data: z.union([menu_categoriesCreateManyInputSchema, menu_categoriesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default menu_categoriesCreateManyArgsSchema;
