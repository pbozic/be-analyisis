import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumACCOUNT_ACTIONS_REASONFilterSchema } from './EnumACCOUNT_ACTIONS_REASONFilterSchema';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { EnumACCOUNT_ACTIONSFilterSchema } from './EnumACCOUNT_ACTIONSFilterSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';

export const account_actionsScalarWhereInputSchema: z.ZodType<Prisma.account_actionsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => account_actionsScalarWhereInputSchema),z.lazy(() => account_actionsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => account_actionsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => account_actionsScalarWhereInputSchema),z.lazy(() => account_actionsScalarWhereInputSchema).array() ]).optional(),
  account_action_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  action_creator_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  reason: z.union([ z.lazy(() => EnumACCOUNT_ACTIONS_REASONFilterSchema),z.lazy(() => ACCOUNT_ACTIONS_REASONSchema) ]).optional(),
  action: z.union([ z.lazy(() => EnumACCOUNT_ACTIONSFilterSchema),z.lazy(() => ACCOUNT_ACTIONSSchema) ]).optional(),
}).strict();

export default account_actionsScalarWhereInputSchema;
