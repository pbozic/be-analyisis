import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';

export const ReferralsNullableRelationFilterSchema: z.ZodType<Prisma.ReferralsNullableRelationFilter> = z.object({
  is: z.lazy(() => referralsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => referralsWhereInputSchema).optional().nullable()
}).strict();

export default ReferralsNullableRelationFilterSchema;
