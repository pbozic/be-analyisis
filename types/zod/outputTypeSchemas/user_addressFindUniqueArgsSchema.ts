import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressIncludeSchema } from '../inputTypeSchemas/user_addressIncludeSchema';
import { user_addressWhereUniqueInputSchema } from '../inputTypeSchemas/user_addressWhereUniqueInputSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { addressesArgsSchema } from '../outputTypeSchemas/addressesArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const user_addressFindUniqueArgsSchema: z.ZodType<Prisma.user_addressFindUniqueArgs> = z
	.object({
		select: user_addressSelectSchema.optional(),
		include: user_addressIncludeSchema.optional(),
		where: user_addressWhereUniqueInputSchema,
	})
	.strict();

export default user_addressFindUniqueArgsSchema;
