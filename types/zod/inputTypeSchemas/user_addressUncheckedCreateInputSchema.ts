import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_addressUncheckedCreateInputSchema: z.ZodType<Prisma.user_addressUncheckedCreateInput> = z
	.object({
		user_id: z.string(),
		address_id: z.string(),
		name: z.string().optional().nullable(),
		icon: z.string().optional().nullable(),
		primary: z.boolean().optional(),
	})
	.strict();

export default user_addressUncheckedCreateInputSchema;
