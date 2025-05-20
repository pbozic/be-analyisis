import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateNestedOneWithoutUsersInputSchema } from './addressesCreateNestedOneWithoutUsersInputSchema';

export const user_addressCreateWithoutUsersInputSchema: z.ZodType<Prisma.user_addressCreateWithoutUsersInput> = z
	.object({
		name: z.string().optional().nullable(),
		icon: z.string().optional().nullable(),
		primary: z.boolean().optional(),
		address: z.lazy(() => addressesCreateNestedOneWithoutUsersInputSchema),
	})
	.strict();

export default user_addressCreateWithoutUsersInputSchema;
