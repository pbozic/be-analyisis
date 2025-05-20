import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsCreateNestedOneWithoutHistoryInputSchema } from './flagsCreateNestedOneWithoutHistoryInputSchema';
import { usersCreateNestedOneWithoutFlag_changesInputSchema } from './usersCreateNestedOneWithoutFlag_changesInputSchema';

export const flag_historyCreateInputSchema: z.ZodType<Prisma.flag_historyCreateInput> = z
	.object({
		flag_history_id: z.string().uuid().optional(),
		status: z.boolean(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		flag: z.lazy(() => flagsCreateNestedOneWithoutHistoryInputSchema),
		user: z.lazy(() => usersCreateNestedOneWithoutFlag_changesInputSchema),
	})
	.strict();

export default flag_historyCreateInputSchema;
