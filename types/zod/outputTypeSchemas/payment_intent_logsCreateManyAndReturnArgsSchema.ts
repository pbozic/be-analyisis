import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsCreateManyInputSchema } from '../inputTypeSchemas/payment_intent_logsCreateManyInputSchema'

export const payment_intent_logsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.payment_intent_logsCreateManyAndReturnArgs> = z.object({
  data: z.union([ payment_intent_logsCreateManyInputSchema,payment_intent_logsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default payment_intent_logsCreateManyAndReturnArgsSchema;
