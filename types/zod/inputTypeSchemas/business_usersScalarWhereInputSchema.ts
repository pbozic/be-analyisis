import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { EnumCOMPANY_ROLEFilterSchema } from './EnumCOMPANY_ROLEFilterSchema';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';

export const business_usersScalarWhereInputSchema: z.ZodType<Prisma.business_usersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => business_usersScalarWhereInputSchema),z.lazy(() => business_usersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => business_usersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => business_usersScalarWhereInputSchema),z.lazy(() => business_usersScalarWhereInputSchema).array() ]).optional(),
  business_users_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  online: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  company_role: z.union([ z.lazy(() => EnumCOMPANY_ROLEFilterSchema),z.lazy(() => COMPANY_ROLESchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  operating_address_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default business_usersScalarWhereInputSchema;
