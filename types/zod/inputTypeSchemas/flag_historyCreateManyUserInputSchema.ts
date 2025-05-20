import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const flag_historyCreateManyUserInputSchema: z.ZodType<Prisma.flag_historyCreateManyUserInput> = z
	.object({
		flag_history_id: z.string().uuid().optional(),
		flag_id: z.string(),
		status: z.boolean(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default flag_historyCreateManyUserInputSchema;
