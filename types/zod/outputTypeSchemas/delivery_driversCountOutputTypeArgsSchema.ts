import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversCountOutputTypeSelectSchema } from './delivery_driversCountOutputTypeSelectSchema';

export const delivery_driversCountOutputTypeArgsSchema: z.ZodType<Prisma.delivery_driversCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => delivery_driversCountOutputTypeSelectSchema).nullish(),
}).strict();

export default delivery_driversCountOutputTypeSelectSchema;
