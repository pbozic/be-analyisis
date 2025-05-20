import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsSelectSchema } from '../inputTypeSchemas/flagsSelectSchema';
import { flagsIncludeSchema } from '../inputTypeSchemas/flagsIncludeSchema';

export const flagsArgsSchema: z.ZodType<Prisma.flagsDefaultArgs> = z.object({
  select: z.lazy(() => flagsSelectSchema).optional(),
  include: z.lazy(() => flagsIncludeSchema).optional(),
}).strict();

export default flagsArgsSchema;
