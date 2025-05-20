import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressIncludeSchema } from '../inputTypeSchemas/user_addressIncludeSchema';
import { user_addressWhereInputSchema } from '../inputTypeSchemas/user_addressWhereInputSchema';
import { user_addressOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_addressOrderByWithRelationInputSchema';
import { user_addressWhereUniqueInputSchema } from '../inputTypeSchemas/user_addressWhereUniqueInputSchema';
import { User_addressScalarFieldEnumSchema } from '../inputTypeSchemas/User_addressScalarFieldEnumSchema';
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

export const user_addressFindManyArgsSchema: z.ZodType<Prisma.user_addressFindManyArgs> = z
	.object({
		select: user_addressSelectSchema.optional(),
		include: user_addressIncludeSchema.optional(),
		where: user_addressWhereInputSchema.optional(),
		orderBy: z
			.union([user_addressOrderByWithRelationInputSchema.array(), user_addressOrderByWithRelationInputSchema])
			.optional(),
		cursor: user_addressWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([User_addressScalarFieldEnumSchema, User_addressScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default user_addressFindManyArgsSchema;
