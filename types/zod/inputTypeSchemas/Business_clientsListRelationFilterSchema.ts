import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsWhereInputSchema } from './business_clientsWhereInputSchema';

export const Business_clientsListRelationFilterSchema: z.ZodType<Prisma.Business_clientsListRelationFilter> = z.object({
  every: z.lazy(() => business_clientsWhereInputSchema).optional(),
  some: z.lazy(() => business_clientsWhereInputSchema).optional(),
  none: z.lazy(() => business_clientsWhereInputSchema).optional()
}).strict();

export default Business_clientsListRelationFilterSchema;
