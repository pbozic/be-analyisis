import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { usersOrderByRelationAggregateInputSchema } from './usersOrderByRelationAggregateInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';

export const business_teamsOrderByWithRelationInputSchema: z.ZodType<Prisma.business_teamsOrderByWithRelationInput> = z.object({
  business_teams_id: z.lazy(() => SortOrderSchema).optional(),
  team_name: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  limit_per_person: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => usersOrderByRelationAggregateInputSchema).optional(),
  business: z.lazy(() => businessOrderByWithRelationInputSchema).optional()
}).strict();

export default business_teamsOrderByWithRelationInputSchema;
