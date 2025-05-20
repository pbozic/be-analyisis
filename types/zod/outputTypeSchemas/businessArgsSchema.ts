import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessSelectSchema } from '../inputTypeSchemas/businessSelectSchema';
import { businessIncludeSchema } from '../inputTypeSchemas/businessIncludeSchema';

export const businessArgsSchema: z.ZodType<Prisma.businessDefaultArgs> = z.object({
  select: z.lazy(() => businessSelectSchema).optional(),
  include: z.lazy(() => businessIncludeSchema).optional(),
}).strict();

export default businessArgsSchema;
