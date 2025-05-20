import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const payment_intent_logsUncheckedCreateInputSchema: z.ZodType<Prisma.payment_intent_logsUncheckedCreateInput> =
	z
		.object({
			payment_intent_logs_id: z.string().uuid().optional(),
			stripe_id: z.string(),
			created_at: z.coerce.date().optional(),
		})
		.strict();

export default payment_intent_logsUncheckedCreateInputSchema;
