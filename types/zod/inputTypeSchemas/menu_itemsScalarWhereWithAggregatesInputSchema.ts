import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const menu_itemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.menu_itemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => menu_itemsScalarWhereWithAggregatesInputSchema),z.lazy(() => menu_itemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => menu_itemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => menu_itemsScalarWhereWithAggregatesInputSchema),z.lazy(() => menu_itemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  menu_item_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  names: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  allergens: z.lazy(() => StringNullableListFilterSchema).optional(),
  spicy_level: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  unit_size: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  sides: z.lazy(() => StringNullableListFilterSchema).optional(),
  extras: z.lazy(() => StringNullableListFilterSchema).optional(),
  ingredients: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  availability: z.lazy(() => StringNullableListFilterSchema).optional(),
  business_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  menu_category_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  daily_date: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_enabled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  menu_category_order_index: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default menu_itemsScalarWhereWithAggregatesInputSchema;
