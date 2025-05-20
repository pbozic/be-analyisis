import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { business_teamsCountOrderByAggregateInputSchema } from './business_teamsCountOrderByAggregateInputSchema';
import { business_teamsAvgOrderByAggregateInputSchema } from './business_teamsAvgOrderByAggregateInputSchema';
import { business_teamsMaxOrderByAggregateInputSchema } from './business_teamsMaxOrderByAggregateInputSchema';
import { business_teamsMinOrderByAggregateInputSchema } from './business_teamsMinOrderByAggregateInputSchema';
import { business_teamsSumOrderByAggregateInputSchema } from './business_teamsSumOrderByAggregateInputSchema';

export const business_teamsOrderByWithAggregationInputSchema: z.ZodType<Prisma.business_teamsOrderByWithAggregationInput> = z.object({
  business_teams_id: z.lazy(() => SortOrderSchema).optional(),
  team_name: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  limit_per_person: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => business_teamsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => business_teamsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => business_teamsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => business_teamsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => business_teamsSumOrderByAggregateInputSchema).optional()
}).strict();

export default business_teamsOrderByWithAggregationInputSchema;
