import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsSelectSchema } from '../inputTypeSchemas/translationsSelectSchema';
import { translationsIncludeSchema } from '../inputTypeSchemas/translationsIncludeSchema';

export const translationsArgsSchema: z.ZodType<Prisma.translationsDefaultArgs> = z.object({
  select: z.lazy(() => translationsSelectSchema).optional(),
  include: z.lazy(() => translationsIncludeSchema).optional(),
}).strict();

export default translationsArgsSchema;
