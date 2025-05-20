import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const settlementsCountOutputTypeSelectSchema: z.ZodType<Prisma.settlementsCountOutputTypeSelect> = z.object({
  weather_data: z.boolean().optional(),
}).strict();

export default settlementsCountOutputTypeSelectSchema;
