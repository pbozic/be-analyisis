import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categories_categoriesCreateManyInputSchema } from '../inputTypeSchemas/menu_categories_categoriesCreateManyInputSchema'

export const menu_categories_categoriesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.menu_categories_categoriesCreateManyAndReturnArgs> = z.object({
  data: z.union([ menu_categories_categoriesCreateManyInputSchema,menu_categories_categoriesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default menu_categories_categoriesCreateManyAndReturnArgsSchema;
