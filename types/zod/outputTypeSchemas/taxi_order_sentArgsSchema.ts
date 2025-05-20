import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_order_sentSelectSchema } from '../inputTypeSchemas/taxi_order_sentSelectSchema';
import { taxi_order_sentIncludeSchema } from '../inputTypeSchemas/taxi_order_sentIncludeSchema';

export const taxi_order_sentArgsSchema: z.ZodType<Prisma.taxi_order_sentDefaultArgs> = z.object({
  select: z.lazy(() => taxi_order_sentSelectSchema).optional(),
  include: z.lazy(() => taxi_order_sentIncludeSchema).optional(),
}).strict();

export default taxi_order_sentArgsSchema;
