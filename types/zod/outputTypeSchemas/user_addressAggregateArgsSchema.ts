import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressWhereInputSchema } from '../inputTypeSchemas/user_addressWhereInputSchema';
import { user_addressOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_addressOrderByWithRelationInputSchema';
import { user_addressWhereUniqueInputSchema } from '../inputTypeSchemas/user_addressWhereUniqueInputSchema';

export const user_addressAggregateArgsSchema: z.ZodType<Prisma.user_addressAggregateArgs> = z
	.object({
		where: user_addressWhereInputSchema.optional(),
		orderBy: z
			.union([user_addressOrderByWithRelationInputSchema.array(), user_addressOrderByWithRelationInputSchema])
			.optional(),
		cursor: user_addressWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default user_addressAggregateArgsSchema;
