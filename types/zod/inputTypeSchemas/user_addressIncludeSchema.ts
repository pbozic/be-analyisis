import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { addressesArgsSchema } from '../outputTypeSchemas/addressesArgsSchema';

export const user_addressIncludeSchema: z.ZodType<Prisma.user_addressInclude> = z
	.object({
		users: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		address: z.union([z.boolean(), z.lazy(() => addressesArgsSchema)]).optional(),
	})
	.strict();

export default user_addressIncludeSchema;
