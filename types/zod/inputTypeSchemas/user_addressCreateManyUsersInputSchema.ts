import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_addressCreateManyUsersInputSchema: z.ZodType<Prisma.user_addressCreateManyUsersInput> = z
	.object({
		address_id: z.string(),
		name: z.string().optional().nullable(),
		icon: z.string().optional().nullable(),
		primary: z.boolean().optional(),
	})
	.strict();

export default user_addressCreateManyUsersInputSchema;
