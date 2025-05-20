import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersWhereInputSchema } from '../inputTypeSchemas/group_usersWhereInputSchema';
import { group_usersOrderByWithRelationInputSchema } from '../inputTypeSchemas/group_usersOrderByWithRelationInputSchema';
import { group_usersWhereUniqueInputSchema } from '../inputTypeSchemas/group_usersWhereUniqueInputSchema';

export const group_usersAggregateArgsSchema: z.ZodType<Prisma.group_usersAggregateArgs> = z
	.object({
		where: group_usersWhereInputSchema.optional(),
		orderBy: z
			.union([group_usersOrderByWithRelationInputSchema.array(), group_usersOrderByWithRelationInputSchema])
			.optional(),
		cursor: group_usersWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default group_usersAggregateArgsSchema;
