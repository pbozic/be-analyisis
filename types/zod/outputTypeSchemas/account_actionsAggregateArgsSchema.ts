import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsWhereInputSchema } from '../inputTypeSchemas/account_actionsWhereInputSchema';
import { account_actionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/account_actionsOrderByWithRelationInputSchema';
import { account_actionsWhereUniqueInputSchema } from '../inputTypeSchemas/account_actionsWhereUniqueInputSchema';

export const account_actionsAggregateArgsSchema: z.ZodType<Prisma.account_actionsAggregateArgs> = z
	.object({
		where: account_actionsWhereInputSchema.optional(),
		orderBy: z
			.union([
				account_actionsOrderByWithRelationInputSchema.array(),
				account_actionsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: account_actionsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default account_actionsAggregateArgsSchema;
