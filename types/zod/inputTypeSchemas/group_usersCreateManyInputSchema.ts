import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const group_usersCreateManyInputSchema: z.ZodType<Prisma.group_usersCreateManyInput> = z
	.object({
		group_user_id: z.string().uuid().optional(),
		parent_user_id: z.string(),
		child_user_id: z.string(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		enabled: z.boolean().optional(),
	})
	.strict();

export default group_usersCreateManyInputSchema;
