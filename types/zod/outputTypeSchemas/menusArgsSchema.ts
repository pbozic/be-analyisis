import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusSelectSchema } from '../inputTypeSchemas/menusSelectSchema';
import { menusIncludeSchema } from '../inputTypeSchemas/menusIncludeSchema';

export const menusArgsSchema: z.ZodType<Prisma.menusDefaultArgs> = z.object({
  select: z.lazy(() => menusSelectSchema).optional(),
  include: z.lazy(() => menusIncludeSchema).optional(),
}).strict();

export default menusArgsSchema;
