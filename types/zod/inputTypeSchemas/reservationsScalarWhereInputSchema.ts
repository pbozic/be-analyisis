import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRESERVATION_STATUSFilterSchema } from './EnumRESERVATION_STATUSFilterSchema';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const reservationsScalarWhereInputSchema: z.ZodType<Prisma.reservationsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => reservationsScalarWhereInputSchema),z.lazy(() => reservationsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => reservationsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => reservationsScalarWhereInputSchema),z.lazy(() => reservationsScalarWhereInputSchema).array() ]).optional(),
  reservation_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  seats: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  time: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  datetime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRESERVATION_STATUSFilterSchema),z.lazy(() => RESERVATION_STATUSSchema) ]).optional(),
  table: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default reservationsScalarWhereInputSchema;
