import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsSelectSchema } from '../inputTypeSchemas/account_actionsSelectSchema';
import { account_actionsIncludeSchema } from '../inputTypeSchemas/account_actionsIncludeSchema';

export const account_actionsArgsSchema: z.ZodType<Prisma.account_actionsDefaultArgs> = z.object({
  select: z.lazy(() => account_actionsSelectSchema).optional(),
  include: z.lazy(() => account_actionsIncludeSchema).optional(),
}).strict();

export default account_actionsArgsSchema;
