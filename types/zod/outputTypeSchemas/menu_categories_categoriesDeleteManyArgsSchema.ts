import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categories_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categories_categoriesWhereInputSchema'

export const menu_categories_categoriesDeleteManyArgsSchema: z.ZodType<Prisma.menu_categories_categoriesDeleteManyArgs> = z.object({
  where: menu_categories_categoriesWhereInputSchema.optional(),
}).strict() ;

export default menu_categories_categoriesDeleteManyArgsSchema;
