import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesSelectSchema } from '../inputTypeSchemas/fiscal_devicesSelectSchema';
import { fiscal_devicesIncludeSchema } from '../inputTypeSchemas/fiscal_devicesIncludeSchema';

export const fiscal_devicesArgsSchema: z.ZodType<Prisma.fiscal_devicesDefaultArgs> = z.object({
  select: z.lazy(() => fiscal_devicesSelectSchema).optional(),
  include: z.lazy(() => fiscal_devicesIncludeSchema).optional(),
}).strict();

export default fiscal_devicesArgsSchema;
