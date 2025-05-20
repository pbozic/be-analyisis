import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableSelectSchema } from '../inputTypeSchemas/translatableSelectSchema';
import { translatableIncludeSchema } from '../inputTypeSchemas/translatableIncludeSchema';

export const translatableArgsSchema: z.ZodType<Prisma.translatableDefaultArgs> = z.object({
  select: z.lazy(() => translatableSelectSchema).optional(),
  include: z.lazy(() => translatableIncludeSchema).optional(),
}).strict();

export default translatableArgsSchema;
