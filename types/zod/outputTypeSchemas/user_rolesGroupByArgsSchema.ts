import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesWhereInputSchema } from '../inputTypeSchemas/user_rolesWhereInputSchema';
import { user_rolesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/user_rolesOrderByWithAggregationInputSchema';
import { User_rolesScalarFieldEnumSchema } from '../inputTypeSchemas/User_rolesScalarFieldEnumSchema';
import { user_rolesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/user_rolesScalarWhereWithAggregatesInputSchema';

export const user_rolesGroupByArgsSchema: z.ZodType<Prisma.user_rolesGroupByArgs> = z
	.object({
		where: user_rolesWhereInputSchema.optional(),
		orderBy: z
			.union([user_rolesOrderByWithAggregationInputSchema.array(), user_rolesOrderByWithAggregationInputSchema])
			.optional(),
		by: User_rolesScalarFieldEnumSchema.array(),
		having: user_rolesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default user_rolesGroupByArgsSchema;
