import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { Menu_categoriesNullableRelationFilterSchema } from './Menu_categoriesNullableRelationFilterSchema';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';
import { DocumentsListRelationFilterSchema } from './DocumentsListRelationFilterSchema';

export const menu_itemsWhereInputSchema: z.ZodType<Prisma.menu_itemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => menu_itemsWhereInputSchema),z.lazy(() => menu_itemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => menu_itemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => menu_itemsWhereInputSchema),z.lazy(() => menu_itemsWhereInputSchema).array() ]).optional(),
  menu_item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  names: z.lazy(() => JsonFilterSchema).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.lazy(() => JsonFilterSchema).optional(),
  allergens: z.lazy(() => StringNullableListFilterSchema).optional(),
  spicy_level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  unit_size: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  sides: z.lazy(() => StringNullableListFilterSchema).optional(),
  extras: z.lazy(() => StringNullableListFilterSchema).optional(),
  ingredients: z.lazy(() => JsonFilterSchema).optional(),
  availability: z.lazy(() => StringNullableListFilterSchema).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  menu_category_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  daily_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  menu_category_order_index: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  menu_category: z.union([ z.lazy(() => Menu_categoriesNullableRelationFilterSchema),z.lazy(() => menu_categoriesWhereInputSchema) ]).optional().nullable(),
  documents: z.lazy(() => DocumentsListRelationFilterSchema).optional()
}).strict();

export default menu_itemsWhereInputSchema;
