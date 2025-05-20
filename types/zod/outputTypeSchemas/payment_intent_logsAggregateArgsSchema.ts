import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsWhereInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereInputSchema';
import { payment_intent_logsOrderByWithRelationInputSchema } from '../inputTypeSchemas/payment_intent_logsOrderByWithRelationInputSchema';
import { payment_intent_logsWhereUniqueInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereUniqueInputSchema';

export const payment_intent_logsAggregateArgsSchema: z.ZodType<Prisma.payment_intent_logsAggregateArgs> = z
	.object({
		where: payment_intent_logsWhereInputSchema.optional(),
		orderBy: z
			.union([
				payment_intent_logsOrderByWithRelationInputSchema.array(),
				payment_intent_logsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: payment_intent_logsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default payment_intent_logsAggregateArgsSchema;
