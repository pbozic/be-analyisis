import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesCountOutputTypeSelectSchema } from './fiscal_devicesCountOutputTypeSelectSchema';

export const fiscal_devicesCountOutputTypeArgsSchema: z.ZodType<Prisma.fiscal_devicesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => fiscal_devicesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default fiscal_devicesCountOutputTypeSelectSchema;
