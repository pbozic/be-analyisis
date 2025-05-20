import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRESERVATION_STATUSFilterSchema } from './EnumRESERVATION_STATUSFilterSchema';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const reservationsWhereInputSchema: z.ZodType<Prisma.reservationsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => reservationsWhereInputSchema),z.lazy(() => reservationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => reservationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => reservationsWhereInputSchema),z.lazy(() => reservationsWhereInputSchema).array() ]).optional(),
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
  business: z.union([ z.lazy(() => BusinessRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
}).strict();

export default reservationsWhereInputSchema;
