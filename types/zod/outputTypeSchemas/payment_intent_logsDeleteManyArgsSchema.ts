import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsWhereInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereInputSchema';

export const payment_intent_logsDeleteManyArgsSchema: z.ZodType<Prisma.payment_intent_logsDeleteManyArgs> = z
	.object({
		where: payment_intent_logsWhereInputSchema.optional(),
	})
	.strict();

export default payment_intent_logsDeleteManyArgsSchema;
