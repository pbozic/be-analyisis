import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_driversMaxOrderByAggregateInputSchema: z.ZodType<Prisma.delivery_driversMaxOrderByAggregateInput> = z.object({
  delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
  online: z.lazy(() => SortOrderSchema).optional(),
  on_order: z.lazy(() => SortOrderSchema).optional(),
  delivers_daily_meals: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  last_ping_at: z.lazy(() => SortOrderSchema).optional(),
  on_daily_meals: z.lazy(() => SortOrderSchema).optional(),
  is_inactive: z.lazy(() => SortOrderSchema).optional(),
  partner_cash_balance: z.lazy(() => SortOrderSchema).optional(),
  daily_meal_business_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default delivery_driversMaxOrderByAggregateInputSchema;
