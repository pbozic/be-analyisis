import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsSelectSchema } from '../inputTypeSchemas/documentsSelectSchema';
import { documentsIncludeSchema } from '../inputTypeSchemas/documentsIncludeSchema';

export const documentsArgsSchema: z.ZodType<Prisma.documentsDefaultArgs> = z.object({
  select: z.lazy(() => documentsSelectSchema).optional(),
  include: z.lazy(() => documentsIncludeSchema).optional(),
}).strict();

export default documentsArgsSchema;
