import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { fiscal_devicesCountOrderByAggregateInputSchema } from './fiscal_devicesCountOrderByAggregateInputSchema';
import { fiscal_devicesMaxOrderByAggregateInputSchema } from './fiscal_devicesMaxOrderByAggregateInputSchema';
import { fiscal_devicesMinOrderByAggregateInputSchema } from './fiscal_devicesMinOrderByAggregateInputSchema';

export const fiscal_devicesOrderByWithAggregationInputSchema: z.ZodType<Prisma.fiscal_devicesOrderByWithAggregationInput> = z.object({
  fiscal_devices_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => fiscal_devicesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => fiscal_devicesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => fiscal_devicesMinOrderByAggregateInputSchema).optional()
}).strict();

export default fiscal_devicesOrderByWithAggregationInputSchema;
