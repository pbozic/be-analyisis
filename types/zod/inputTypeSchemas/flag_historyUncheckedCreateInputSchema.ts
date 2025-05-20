import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const flag_historyUncheckedCreateInputSchema: z.ZodType<Prisma.flag_historyUncheckedCreateInput> = z
	.object({
		flag_history_id: z.string().uuid().optional(),
		flag_id: z.string(),
		user_id: z.string(),
		status: z.boolean(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default flag_historyUncheckedCreateInputSchema;
