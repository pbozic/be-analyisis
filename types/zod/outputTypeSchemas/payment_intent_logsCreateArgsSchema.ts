import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsCreateInputSchema } from '../inputTypeSchemas/payment_intent_logsCreateInputSchema';
import { payment_intent_logsUncheckedCreateInputSchema } from '../inputTypeSchemas/payment_intent_logsUncheckedCreateInputSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const payment_intent_logsSelectSchema: z.ZodType<Prisma.payment_intent_logsSelect> = z
	.object({
		payment_intent_logs_id: z.boolean().optional(),
		stripe_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
	})
	.strict();

export const payment_intent_logsCreateArgsSchema: z.ZodType<Prisma.payment_intent_logsCreateArgs> = z
	.object({
		select: payment_intent_logsSelectSchema.optional(),
		data: z.union([payment_intent_logsCreateInputSchema, payment_intent_logsUncheckedCreateInputSchema]),
	})
	.strict();

export default payment_intent_logsCreateArgsSchema;
