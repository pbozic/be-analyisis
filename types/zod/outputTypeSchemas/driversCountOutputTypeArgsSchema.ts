import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversCountOutputTypeSelectSchema } from './driversCountOutputTypeSelectSchema';

export const driversCountOutputTypeArgsSchema: z.ZodType<Prisma.driversCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => driversCountOutputTypeSelectSchema).nullish(),
}).strict();

export default driversCountOutputTypeSelectSchema;
