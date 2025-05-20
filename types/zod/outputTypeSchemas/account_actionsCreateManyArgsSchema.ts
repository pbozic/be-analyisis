import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsCreateManyInputSchema } from '../inputTypeSchemas/account_actionsCreateManyInputSchema'

export const account_actionsCreateManyArgsSchema: z.ZodType<Prisma.account_actionsCreateManyArgs> = z.object({
  data: z.union([ account_actionsCreateManyInputSchema,account_actionsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default account_actionsCreateManyArgsSchema;
