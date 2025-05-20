import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumLOST_FOUND_STATUSFilterSchema } from './EnumLOST_FOUND_STATUSFilterSchema';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const lost_itemsScalarWhereInputSchema: z.ZodType<Prisma.lost_itemsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => lost_itemsScalarWhereInputSchema),z.lazy(() => lost_itemsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => lost_itemsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => lost_itemsScalarWhereInputSchema),z.lazy(() => lost_itemsScalarWhereInputSchema).array() ]).optional(),
  lost_item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumLOST_FOUND_STATUSFilterSchema),z.lazy(() => LOST_FOUND_STATUSSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  found: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default lost_itemsScalarWhereInputSchema;
