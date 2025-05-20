import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutAddressesInputSchema } from './usersCreateNestedOneWithoutAddressesInputSchema';
import { addressesCreateNestedOneWithoutUsersInputSchema } from './addressesCreateNestedOneWithoutUsersInputSchema';

export const user_addressCreateInputSchema: z.ZodType<Prisma.user_addressCreateInput> = z
	.object({
		name: z.string().optional().nullable(),
		icon: z.string().optional().nullable(),
		primary: z.boolean().optional(),
		users: z.lazy(() => usersCreateNestedOneWithoutAddressesInputSchema),
		address: z.lazy(() => addressesCreateNestedOneWithoutUsersInputSchema),
	})
	.strict();

export default user_addressCreateInputSchema;
