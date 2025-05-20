import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const group_usersCreateManyParent_userInputSchema: z.ZodType<Prisma.group_usersCreateManyParent_userInput> = z
	.object({
		group_user_id: z.string().uuid().optional(),
		child_user_id: z.string(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		enabled: z.boolean().optional(),
	})
	.strict();

export default group_usersCreateManyParent_userInputSchema;
