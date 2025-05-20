import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableCountOutputTypeSelectSchema } from './translatableCountOutputTypeSelectSchema';

export const translatableCountOutputTypeArgsSchema: z.ZodType<Prisma.translatableCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => translatableCountOutputTypeSelectSchema).nullish(),
}).strict();

export default translatableCountOutputTypeSelectSchema;
