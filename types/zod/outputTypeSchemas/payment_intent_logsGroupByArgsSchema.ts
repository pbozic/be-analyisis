import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsWhereInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereInputSchema'
import { payment_intent_logsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/payment_intent_logsOrderByWithAggregationInputSchema'
import { Payment_intent_logsScalarFieldEnumSchema } from '../inputTypeSchemas/Payment_intent_logsScalarFieldEnumSchema'
import { payment_intent_logsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/payment_intent_logsScalarWhereWithAggregatesInputSchema'

export const payment_intent_logsGroupByArgsSchema: z.ZodType<Prisma.payment_intent_logsGroupByArgs> = z.object({
  where: payment_intent_logsWhereInputSchema.optional(),
  orderBy: z.union([ payment_intent_logsOrderByWithAggregationInputSchema.array(),payment_intent_logsOrderByWithAggregationInputSchema ]).optional(),
  by: Payment_intent_logsScalarFieldEnumSchema.array(),
  having: payment_intent_logsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default payment_intent_logsGroupByArgsSchema;
