import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsArgsSchema } from '../outputTypeSchemas/flagsArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';

export const flag_historySelectSchema: z.ZodType<Prisma.flag_historySelect> = z
	.object({
		flag_history_id: z.boolean().optional(),
		flag_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		status: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		flag: z.union([z.boolean(), z.lazy(() => flagsArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export default flag_historySelectSchema;
