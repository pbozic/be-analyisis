import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableArgsSchema } from "../outputTypeSchemas/translatableArgsSchema"

export const translationsIncludeSchema: z.ZodType<Prisma.translationsInclude> = z.object({
  translatable: z.union([z.boolean(),z.lazy(() => translatableArgsSchema)]).optional(),
}).strict()

export default translationsIncludeSchema;
