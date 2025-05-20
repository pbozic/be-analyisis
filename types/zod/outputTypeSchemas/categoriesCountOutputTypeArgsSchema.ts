import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesCountOutputTypeSelectSchema } from './categoriesCountOutputTypeSelectSchema';

export const categoriesCountOutputTypeArgsSchema: z.ZodType<Prisma.categoriesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => categoriesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default categoriesCountOutputTypeSelectSchema;
