import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const payment_intent_logsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.payment_intent_logsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => payment_intent_logsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => payment_intent_logsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => payment_intent_logsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => payment_intent_logsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => payment_intent_logsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			payment_intent_logs_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			stripe_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default payment_intent_logsScalarWhereWithAggregatesInputSchema;
