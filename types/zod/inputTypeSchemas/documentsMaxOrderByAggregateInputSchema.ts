import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const documentsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.documentsMaxOrderByAggregateInput> = z.object({
  document_id: z.lazy(() => SortOrderSchema).optional(),
  document_type: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  expiration_date: z.lazy(() => SortOrderSchema).optional(),
  issue_date: z.lazy(() => SortOrderSchema).optional(),
  public: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  vehicle_id: z.lazy(() => SortOrderSchema).optional(),
  menu_item_id: z.lazy(() => SortOrderSchema).optional(),
  lost_item_id: z.lazy(() => SortOrderSchema).optional(),
  transaction_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default documentsMaxOrderByAggregateInputSchema;
