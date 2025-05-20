import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersWhereInputSchema } from '../inputTypeSchemas/group_usersWhereInputSchema';
import { group_usersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/group_usersOrderByWithAggregationInputSchema';
import { Group_usersScalarFieldEnumSchema } from '../inputTypeSchemas/Group_usersScalarFieldEnumSchema';
import { group_usersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/group_usersScalarWhereWithAggregatesInputSchema';

export const group_usersGroupByArgsSchema: z.ZodType<Prisma.group_usersGroupByArgs> = z
	.object({
		where: group_usersWhereInputSchema.optional(),
		orderBy: z
			.union([group_usersOrderByWithAggregationInputSchema.array(), group_usersOrderByWithAggregationInputSchema])
			.optional(),
		by: Group_usersScalarFieldEnumSchema.array(),
		having: group_usersScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default group_usersGroupByArgsSchema;
