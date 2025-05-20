import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsSelectSchema } from '../inputTypeSchemas/lost_itemsSelectSchema';
import { lost_itemsIncludeSchema } from '../inputTypeSchemas/lost_itemsIncludeSchema';

export const lost_itemsArgsSchema: z.ZodType<Prisma.lost_itemsDefaultArgs> = z.object({
  select: z.lazy(() => lost_itemsSelectSchema).optional(),
  include: z.lazy(() => lost_itemsIncludeSchema).optional(),
}).strict();

export default lost_itemsArgsSchema;
