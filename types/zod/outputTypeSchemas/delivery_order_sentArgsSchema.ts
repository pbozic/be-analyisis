import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_order_sentSelectSchema } from '../inputTypeSchemas/delivery_order_sentSelectSchema';
import { delivery_order_sentIncludeSchema } from '../inputTypeSchemas/delivery_order_sentIncludeSchema';

export const delivery_order_sentArgsSchema: z.ZodType<Prisma.delivery_order_sentDefaultArgs> = z.object({
  select: z.lazy(() => delivery_order_sentSelectSchema).optional(),
  include: z.lazy(() => delivery_order_sentIncludeSchema).optional(),
}).strict();

export default delivery_order_sentArgsSchema;
