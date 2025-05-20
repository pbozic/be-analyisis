import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersSelectSchema } from '../inputTypeSchemas/delivery_ordersSelectSchema';
import { delivery_ordersIncludeSchema } from '../inputTypeSchemas/delivery_ordersIncludeSchema';

export const delivery_ordersArgsSchema: z.ZodType<Prisma.delivery_ordersDefaultArgs> = z.object({
  select: z.lazy(() => delivery_ordersSelectSchema).optional(),
  include: z.lazy(() => delivery_ordersIncludeSchema).optional(),
}).strict();

export default delivery_ordersArgsSchema;
