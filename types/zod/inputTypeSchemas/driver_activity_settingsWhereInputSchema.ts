import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const driver_activity_settingsWhereInputSchema: z.ZodType<Prisma.driver_activity_settingsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => driver_activity_settingsWhereInputSchema),z.lazy(() => driver_activity_settingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => driver_activity_settingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => driver_activity_settingsWhereInputSchema),z.lazy(() => driver_activity_settingsWhereInputSchema).array() ]).optional(),
  driver_activity_settings_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  first_offline_lockout: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  second_offline_lockout: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  online_timeout: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export default driver_activity_settingsWhereInputSchema;
