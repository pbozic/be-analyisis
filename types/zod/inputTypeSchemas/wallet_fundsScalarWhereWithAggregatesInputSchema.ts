import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { EnumFUNDS_TYPEWithAggregatesFilterSchema } from './EnumFUNDS_TYPEWithAggregatesFilterSchema';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { EnumCREDIT_STATUSNullableWithAggregatesFilterSchema } from './EnumCREDIT_STATUSNullableWithAggregatesFilterSchema';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';

export const wallet_fundsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.wallet_fundsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => wallet_fundsScalarWhereWithAggregatesInputSchema),z.lazy(() => wallet_fundsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => wallet_fundsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => wallet_fundsScalarWhereWithAggregatesInputSchema),z.lazy(() => wallet_fundsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  wallet_funds_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  referral_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  charge_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  amount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  reserved_order: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  reserved_daily_meals_subscription: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  reserved_business: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  expires_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumFUNDS_TYPEWithAggregatesFilterSchema),z.lazy(() => FUNDS_TYPESchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumCREDIT_STATUSNullableWithAggregatesFilterSchema),z.lazy(() => CREDIT_STATUSSchema) ]).optional().nullable(),
}).strict();

export default wallet_fundsScalarWhereWithAggregatesInputSchema;
