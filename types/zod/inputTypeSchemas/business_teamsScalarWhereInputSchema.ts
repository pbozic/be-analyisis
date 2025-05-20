import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const business_teamsScalarWhereInputSchema: z.ZodType<Prisma.business_teamsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => business_teamsScalarWhereInputSchema),z.lazy(() => business_teamsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => business_teamsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => business_teamsScalarWhereInputSchema),z.lazy(() => business_teamsScalarWhereInputSchema).array() ]).optional(),
  business_teams_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  team_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  limit_per_person: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default business_teamsScalarWhereInputSchema;
