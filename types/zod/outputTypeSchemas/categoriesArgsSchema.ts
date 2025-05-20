import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesSelectSchema } from '../inputTypeSchemas/categoriesSelectSchema';
import { categoriesIncludeSchema } from '../inputTypeSchemas/categoriesIncludeSchema';

export const categoriesArgsSchema: z.ZodType<Prisma.categoriesDefaultArgs> = z.object({
  select: z.lazy(() => categoriesSelectSchema).optional(),
  include: z.lazy(() => categoriesIncludeSchema).optional(),
}).strict();

export default categoriesArgsSchema;
