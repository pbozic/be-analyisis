import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumFUNDS_TYPEFilterSchema } from './EnumFUNDS_TYPEFilterSchema';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { EnumCREDIT_STATUSNullableFilterSchema } from './EnumCREDIT_STATUSNullableFilterSchema';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';

export const wallet_fundsScalarWhereInputSchema: z.ZodType<Prisma.wallet_fundsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => wallet_fundsScalarWhereInputSchema),z.lazy(() => wallet_fundsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => wallet_fundsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => wallet_fundsScalarWhereInputSchema),z.lazy(() => wallet_fundsScalarWhereInputSchema).array() ]).optional(),
  wallet_funds_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  referral_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  charge_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  amount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reserved_order: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  reserved_daily_meals_subscription: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  reserved_business: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expires_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumFUNDS_TYPEFilterSchema),z.lazy(() => FUNDS_TYPESchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumCREDIT_STATUSNullableFilterSchema),z.lazy(() => CREDIT_STATUSSchema) ]).optional().nullable(),
}).strict();

export default wallet_fundsScalarWhereInputSchema;
