import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensWhereInputSchema } from '../inputTypeSchemas/allergensWhereInputSchema';
import { allergensOrderByWithAggregationInputSchema } from '../inputTypeSchemas/allergensOrderByWithAggregationInputSchema';
import { AllergensScalarFieldEnumSchema } from '../inputTypeSchemas/AllergensScalarFieldEnumSchema';
import { allergensScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/allergensScalarWhereWithAggregatesInputSchema';

export const allergensGroupByArgsSchema: z.ZodType<Prisma.allergensGroupByArgs> = z
	.object({
		where: allergensWhereInputSchema.optional(),
		orderBy: z
			.union([allergensOrderByWithAggregationInputSchema.array(), allergensOrderByWithAggregationInputSchema])
			.optional(),
		by: AllergensScalarFieldEnumSchema.array(),
		having: allergensScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default allergensGroupByArgsSchema;
