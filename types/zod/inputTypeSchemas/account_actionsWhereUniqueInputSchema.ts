import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereInputSchema } from './account_actionsWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumACCOUNT_ACTIONS_REASONFilterSchema } from './EnumACCOUNT_ACTIONS_REASONFilterSchema';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { EnumACCOUNT_ACTIONSFilterSchema } from './EnumACCOUNT_ACTIONSFilterSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const account_actionsWhereUniqueInputSchema: z.ZodType<Prisma.account_actionsWhereUniqueInput> = z.object({
  account_action_id: z.string().uuid()
})
.and(z.object({
  account_action_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => account_actionsWhereInputSchema),z.lazy(() => account_actionsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => account_actionsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => account_actionsWhereInputSchema),z.lazy(() => account_actionsWhereInputSchema).array() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  action_creator_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  reason: z.union([ z.lazy(() => EnumACCOUNT_ACTIONS_REASONFilterSchema),z.lazy(() => ACCOUNT_ACTIONS_REASONSchema) ]).optional(),
  action: z.union([ z.lazy(() => EnumACCOUNT_ACTIONSFilterSchema),z.lazy(() => ACCOUNT_ACTIONSSchema) ]).optional(),
  business: z.union([ z.lazy(() => BusinessNullableRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional().nullable(),
  user: z.union([ z.lazy(() => UsersNullableRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
  action_creator: z.union([ z.lazy(() => UsersNullableRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
}).strict());

export default account_actionsWhereUniqueInputSchema;
