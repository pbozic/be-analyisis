import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { payment_intent_logsWhereInputSchema } from './payment_intent_logsWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const payment_intent_logsWhereUniqueInputSchema: z.ZodType<Prisma.payment_intent_logsWhereUniqueInput> = z
	.union([
		z.object({
			payment_intent_logs_id: z.string().uuid(),
			stripe_id: z.string(),
		}),
		z.object({
			payment_intent_logs_id: z.string().uuid(),
		}),
		z.object({
			stripe_id: z.string(),
		}),
	])
	.and(
		z
			.object({
				payment_intent_logs_id: z.string().uuid().optional(),
				stripe_id: z.string().optional(),
				AND: z
					.union([
						z.lazy(() => payment_intent_logsWhereInputSchema),
						z.lazy(() => payment_intent_logsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => payment_intent_logsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => payment_intent_logsWhereInputSchema),
						z.lazy(() => payment_intent_logsWhereInputSchema).array(),
					])
					.optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
			})
			.strict()
	);

export default payment_intent_logsWhereUniqueInputSchema;
