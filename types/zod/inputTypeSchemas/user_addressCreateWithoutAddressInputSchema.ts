import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutAddressesInputSchema } from './usersCreateNestedOneWithoutAddressesInputSchema';

export const user_addressCreateWithoutAddressInputSchema: z.ZodType<Prisma.user_addressCreateWithoutAddressInput> = z
	.object({
		name: z.string().optional().nullable(),
		icon: z.string().optional().nullable(),
		primary: z.boolean().optional(),
		users: z.lazy(() => usersCreateNestedOneWithoutAddressesInputSchema),
	})
	.strict();

export default user_addressCreateWithoutAddressInputSchema;
