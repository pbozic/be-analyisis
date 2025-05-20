import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { fiscal_devicesWhereInputSchema } from './fiscal_devicesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BusinessListRelationFilterSchema } from './BusinessListRelationFilterSchema';

export const fiscal_devicesWhereUniqueInputSchema: z.ZodType<Prisma.fiscal_devicesWhereUniqueInput> = z.object({
  fiscal_devices_id: z.string().uuid()
})
.and(z.object({
  fiscal_devices_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => fiscal_devicesWhereInputSchema),z.lazy(() => fiscal_devicesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => fiscal_devicesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => fiscal_devicesWhereInputSchema),z.lazy(() => fiscal_devicesWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  businesses: z.lazy(() => BusinessListRelationFilterSchema).optional()
}).strict());

export default fiscal_devicesWhereUniqueInputSchema;
