import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';

export const Business_usersNullableRelationFilterSchema: z.ZodType<Prisma.Business_usersNullableRelationFilter> = z.object({
  is: z.lazy(() => business_usersWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => business_usersWhereInputSchema).optional().nullable()
}).strict();

export default Business_usersNullableRelationFilterSchema;
