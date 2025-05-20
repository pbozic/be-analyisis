import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesSelectSchema } from '../inputTypeSchemas/local_pricesSelectSchema';
import { local_pricesIncludeSchema } from '../inputTypeSchemas/local_pricesIncludeSchema';

export const local_pricesArgsSchema: z.ZodType<Prisma.local_pricesDefaultArgs> = z.object({
  select: z.lazy(() => local_pricesSelectSchema).optional(),
  include: z.lazy(() => local_pricesIncludeSchema).optional(),
}).strict();

export default local_pricesArgsSchema;
