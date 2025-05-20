import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsSelectSchema } from '../inputTypeSchemas/business_clientsSelectSchema';
import { business_clientsIncludeSchema } from '../inputTypeSchemas/business_clientsIncludeSchema';

export const business_clientsArgsSchema: z.ZodType<Prisma.business_clientsDefaultArgs> = z.object({
  select: z.lazy(() => business_clientsSelectSchema).optional(),
  include: z.lazy(() => business_clientsIncludeSchema).optional(),
}).strict();

export default business_clientsArgsSchema;
