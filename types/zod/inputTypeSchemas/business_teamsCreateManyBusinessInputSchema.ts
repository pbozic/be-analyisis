import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const business_teamsCreateManyBusinessInputSchema: z.ZodType<Prisma.business_teamsCreateManyBusinessInput> = z.object({
  business_teams_id: z.string().uuid().optional(),
  team_name: z.string(),
  limit_per_person: z.number(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default business_teamsCreateManyBusinessInputSchema;
