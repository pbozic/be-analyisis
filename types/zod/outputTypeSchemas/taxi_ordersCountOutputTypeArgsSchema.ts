import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersCountOutputTypeSelectSchema } from './taxi_ordersCountOutputTypeSelectSchema';

export const taxi_ordersCountOutputTypeArgsSchema: z.ZodType<Prisma.taxi_ordersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => taxi_ordersCountOutputTypeSelectSchema).nullish(),
}).strict();

export default taxi_ordersCountOutputTypeSelectSchema;
