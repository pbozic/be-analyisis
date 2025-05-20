import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersSelectSchema } from '../inputTypeSchemas/business_usersSelectSchema';
import { business_usersIncludeSchema } from '../inputTypeSchemas/business_usersIncludeSchema';

export const business_usersArgsSchema: z.ZodType<Prisma.business_usersDefaultArgs> = z.object({
  select: z.lazy(() => business_usersSelectSchema).optional(),
  include: z.lazy(() => business_usersIncludeSchema).optional(),
}).strict();

export default business_usersArgsSchema;
