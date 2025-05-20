import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsCountOutputTypeSelectSchema } from './business_clientsCountOutputTypeSelectSchema';

export const business_clientsCountOutputTypeArgsSchema: z.ZodType<Prisma.business_clientsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => business_clientsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default business_clientsCountOutputTypeSelectSchema;
