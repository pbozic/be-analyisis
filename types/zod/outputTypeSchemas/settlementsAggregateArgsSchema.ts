import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { settlementsWhereInputSchema } from '../inputTypeSchemas/settlementsWhereInputSchema';
import { settlementsOrderByWithRelationInputSchema } from '../inputTypeSchemas/settlementsOrderByWithRelationInputSchema';
import { settlementsWhereUniqueInputSchema } from '../inputTypeSchemas/settlementsWhereUniqueInputSchema';

export const settlementsAggregateArgsSchema: z.ZodType<Prisma.settlementsAggregateArgs> = z
	.object({
		where: settlementsWhereInputSchema.optional(),
		orderBy: z
			.union([settlementsOrderByWithRelationInputSchema.array(), settlementsOrderByWithRelationInputSchema])
			.optional(),
		cursor: settlementsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default settlementsAggregateArgsSchema;
