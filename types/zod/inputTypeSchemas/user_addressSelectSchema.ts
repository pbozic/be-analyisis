import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { addressesArgsSchema } from '../outputTypeSchemas/addressesArgsSchema';

export const user_addressSelectSchema: z.ZodType<Prisma.user_addressSelect> = z
	.object({
		user_id: z.boolean().optional(),
		address_id: z.boolean().optional(),
		name: z.boolean().optional(),
		icon: z.boolean().optional(),
		primary: z.boolean().optional(),
		users: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		address: z.union([z.boolean(), z.lazy(() => addressesArgsSchema)]).optional(),
	})
	.strict();

export default user_addressSelectSchema;
