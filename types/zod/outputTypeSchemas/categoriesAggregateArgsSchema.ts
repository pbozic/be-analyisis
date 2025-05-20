import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesWhereInputSchema } from '../inputTypeSchemas/categoriesWhereInputSchema';
import { categoriesOrderByWithRelationInputSchema } from '../inputTypeSchemas/categoriesOrderByWithRelationInputSchema';
import { categoriesWhereUniqueInputSchema } from '../inputTypeSchemas/categoriesWhereUniqueInputSchema';

export const categoriesAggregateArgsSchema: z.ZodType<Prisma.categoriesAggregateArgs> = z
	.object({
		where: categoriesWhereInputSchema.optional(),
		orderBy: z
			.union([categoriesOrderByWithRelationInputSchema.array(), categoriesOrderByWithRelationInputSchema])
			.optional(),
		cursor: categoriesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default categoriesAggregateArgsSchema;
