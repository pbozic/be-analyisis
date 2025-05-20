import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsUpdateManyMutationInputSchema } from '../inputTypeSchemas/payment_intent_logsUpdateManyMutationInputSchema'
import { payment_intent_logsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/payment_intent_logsUncheckedUpdateManyInputSchema'
import { payment_intent_logsWhereInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereInputSchema'

export const payment_intent_logsUpdateManyArgsSchema: z.ZodType<Prisma.payment_intent_logsUpdateManyArgs> = z.object({
  data: z.union([ payment_intent_logsUpdateManyMutationInputSchema,payment_intent_logsUncheckedUpdateManyInputSchema ]),
  where: payment_intent_logsWhereInputSchema.optional(),
}).strict() ;

export default payment_intent_logsUpdateManyArgsSchema;
