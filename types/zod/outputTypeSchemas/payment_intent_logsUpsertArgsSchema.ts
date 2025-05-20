import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsWhereUniqueInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereUniqueInputSchema'
import { payment_intent_logsCreateInputSchema } from '../inputTypeSchemas/payment_intent_logsCreateInputSchema'
import { payment_intent_logsUncheckedCreateInputSchema } from '../inputTypeSchemas/payment_intent_logsUncheckedCreateInputSchema'
import { payment_intent_logsUpdateInputSchema } from '../inputTypeSchemas/payment_intent_logsUpdateInputSchema'
import { payment_intent_logsUncheckedUpdateInputSchema } from '../inputTypeSchemas/payment_intent_logsUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const payment_intent_logsSelectSchema: z.ZodType<Prisma.payment_intent_logsSelect> = z.object({
  payment_intent_logs_id: z.boolean().optional(),
  stripe_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
}).strict()

export const payment_intent_logsUpsertArgsSchema: z.ZodType<Prisma.payment_intent_logsUpsertArgs> = z.object({
  select: payment_intent_logsSelectSchema.optional(),
  where: payment_intent_logsWhereUniqueInputSchema,
  create: z.union([ payment_intent_logsCreateInputSchema,payment_intent_logsUncheckedCreateInputSchema ]),
  update: z.union([ payment_intent_logsUpdateInputSchema,payment_intent_logsUncheckedUpdateInputSchema ]),
}).strict() ;

export default payment_intent_logsUpsertArgsSchema;
