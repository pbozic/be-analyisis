import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsSelectSchema } from '../inputTypeSchemas/reservationsSelectSchema';
import { reservationsIncludeSchema } from '../inputTypeSchemas/reservationsIncludeSchema';

export const reservationsArgsSchema: z.ZodType<Prisma.reservationsDefaultArgs> = z.object({
  select: z.lazy(() => reservationsSelectSchema).optional(),
  include: z.lazy(() => reservationsIncludeSchema).optional(),
}).strict();

export default reservationsArgsSchema;
