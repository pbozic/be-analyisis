import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessCountOutputTypeSelectSchema } from './businessCountOutputTypeSelectSchema';

export const businessCountOutputTypeArgsSchema: z.ZodType<Prisma.businessCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => businessCountOutputTypeSelectSchema).nullish(),
}).strict();

export default businessCountOutputTypeSelectSchema;
