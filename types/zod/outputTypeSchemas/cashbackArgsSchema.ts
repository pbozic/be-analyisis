import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { cashbackSelectSchema } from '../inputTypeSchemas/cashbackSelectSchema';
import { cashbackIncludeSchema } from '../inputTypeSchemas/cashbackIncludeSchema';

export const cashbackArgsSchema: z.ZodType<Prisma.cashbackDefaultArgs> = z.object({
  select: z.lazy(() => cashbackSelectSchema).optional(),
  include: z.lazy(() => cashbackIncludeSchema).optional(),
}).strict();

export default cashbackArgsSchema;
