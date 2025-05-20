import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { vehicle_driversCountOrderByAggregateInputSchema } from './vehicle_driversCountOrderByAggregateInputSchema';
import { vehicle_driversMaxOrderByAggregateInputSchema } from './vehicle_driversMaxOrderByAggregateInputSchema';
import { vehicle_driversMinOrderByAggregateInputSchema } from './vehicle_driversMinOrderByAggregateInputSchema';

export const vehicle_driversOrderByWithAggregationInputSchema: z.ZodType<Prisma.vehicle_driversOrderByWithAggregationInput> = z.object({
  vehicle_drivers_id: z.lazy(() => SortOrderSchema).optional(),
  vehicle_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  can_drive: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => vehicle_driversCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => vehicle_driversMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => vehicle_driversMinOrderByAggregateInputSchema).optional()
}).strict();

export default vehicle_driversOrderByWithAggregationInputSchema;
