import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const business_teamsCountOutputTypeSelectSchema: z.ZodType<Prisma.business_teamsCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
}).strict();

export default business_teamsCountOutputTypeSelectSchema;
