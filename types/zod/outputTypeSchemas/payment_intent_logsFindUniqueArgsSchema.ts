import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsWhereUniqueInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const payment_intent_logsSelectSchema: z.ZodType<Prisma.payment_intent_logsSelect> = z.object({
  payment_intent_logs_id: z.boolean().optional(),
  stripe_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
}).strict()

export const payment_intent_logsFindUniqueArgsSchema: z.ZodType<Prisma.payment_intent_logsFindUniqueArgs> = z.object({
  select: payment_intent_logsSelectSchema.optional(),
  where: payment_intent_logsWhereUniqueInputSchema,
}).strict() ;

export default payment_intent_logsFindUniqueArgsSchema;
