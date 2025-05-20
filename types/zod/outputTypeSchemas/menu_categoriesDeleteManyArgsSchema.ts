import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categoriesWhereInputSchema'

export const menu_categoriesDeleteManyArgsSchema: z.ZodType<Prisma.menu_categoriesDeleteManyArgs> = z.object({
  where: menu_categoriesWhereInputSchema.optional(),
}).strict() ;

export default menu_categoriesDeleteManyArgsSchema;
