import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { businessOrderByRelationAggregateInputSchema } from './businessOrderByRelationAggregateInputSchema';

export const financesOrderByWithRelationInputSchema: z.ZodType<Prisma.financesOrderByWithRelationInput> = z.object({
  finance_id: z.lazy(() => SortOrderSchema).optional(),
  bank_name: z.lazy(() => SortOrderSchema).optional(),
  account_holder: z.lazy(() => SortOrderSchema).optional(),
  account_number: z.lazy(() => SortOrderSchema).optional(),
  payment_preferences: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  business: z.lazy(() => businessOrderByRelationAggregateInputSchema).optional()
}).strict();

export default financesOrderByWithRelationInputSchema;
