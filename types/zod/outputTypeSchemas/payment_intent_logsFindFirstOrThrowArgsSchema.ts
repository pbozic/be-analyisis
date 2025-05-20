import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { payment_intent_logsWhereInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereInputSchema';
import { payment_intent_logsOrderByWithRelationInputSchema } from '../inputTypeSchemas/payment_intent_logsOrderByWithRelationInputSchema';
import { payment_intent_logsWhereUniqueInputSchema } from '../inputTypeSchemas/payment_intent_logsWhereUniqueInputSchema';
import { Payment_intent_logsScalarFieldEnumSchema } from '../inputTypeSchemas/Payment_intent_logsScalarFieldEnumSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const payment_intent_logsSelectSchema: z.ZodType<Prisma.payment_intent_logsSelect> = z
	.object({
		payment_intent_logs_id: z.boolean().optional(),
		stripe_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
	})
	.strict();

export const payment_intent_logsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.payment_intent_logsFindFirstOrThrowArgs> =
	z
		.object({
			select: payment_intent_logsSelectSchema.optional(),
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
			distinct: z
				.union([Payment_intent_logsScalarFieldEnumSchema, Payment_intent_logsScalarFieldEnumSchema.array()])
				.optional(),
		})
		.strict();

export default payment_intent_logsFindFirstOrThrowArgsSchema;
