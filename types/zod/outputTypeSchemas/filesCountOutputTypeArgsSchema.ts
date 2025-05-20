import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCountOutputTypeSelectSchema } from './filesCountOutputTypeSelectSchema';

export const filesCountOutputTypeArgsSchema: z.ZodType<Prisma.filesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => filesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default filesCountOutputTypeSelectSchema;
