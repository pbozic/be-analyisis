import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { menu_categoriesCreatecategoriesInputSchema } from './menu_categoriesCreatecategoriesInputSchema';

export const menu_categoriesCreateManyMenuInputSchema: z.ZodType<Prisma.menu_categoriesCreateManyMenuInput> = z.object({
  menu_category_id: z.string().uuid().optional(),
  names: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  description: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  categories: z.union([ z.lazy(() => menu_categoriesCreatecategoriesInputSchema),z.string().array() ]).optional(),
  business_id: z.string(),
  order: z.number().int().optional().nullable(),
  price: z.number().optional().nullable(),
  menu_items_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  menu_order_index: z.number().int().optional().nullable()
}).strict();

export default menu_categoriesCreateManyMenuInputSchema;
