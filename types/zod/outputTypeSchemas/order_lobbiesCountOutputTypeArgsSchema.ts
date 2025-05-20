import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesCountOutputTypeSelectSchema } from './order_lobbiesCountOutputTypeSelectSchema';

export const order_lobbiesCountOutputTypeArgsSchema: z.ZodType<Prisma.order_lobbiesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => order_lobbiesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default order_lobbiesCountOutputTypeSelectSchema;
