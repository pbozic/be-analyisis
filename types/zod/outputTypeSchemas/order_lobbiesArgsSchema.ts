import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesSelectSchema } from '../inputTypeSchemas/order_lobbiesSelectSchema';
import { order_lobbiesIncludeSchema } from '../inputTypeSchemas/order_lobbiesIncludeSchema';

export const order_lobbiesArgsSchema: z.ZodType<Prisma.order_lobbiesDefaultArgs> = z.object({
  select: z.lazy(() => order_lobbiesSelectSchema).optional(),
  include: z.lazy(() => order_lobbiesIncludeSchema).optional(),
}).strict();

export default order_lobbiesArgsSchema;
