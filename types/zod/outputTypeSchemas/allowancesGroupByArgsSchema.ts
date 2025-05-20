import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allowancesWhereInputSchema } from '../inputTypeSchemas/allowancesWhereInputSchema';
import { allowancesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/allowancesOrderByWithAggregationInputSchema';
import { AllowancesScalarFieldEnumSchema } from '../inputTypeSchemas/AllowancesScalarFieldEnumSchema';
import { allowancesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/allowancesScalarWhereWithAggregatesInputSchema';

export const allowancesGroupByArgsSchema: z.ZodType<Prisma.allowancesGroupByArgs> = z
	.object({
		where: allowancesWhereInputSchema.optional(),
		orderBy: z
			.union([allowancesOrderByWithAggregationInputSchema.array(), allowancesOrderByWithAggregationInputSchema])
			.optional(),
		by: AllowancesScalarFieldEnumSchema.array(),
		having: allowancesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default allowancesGroupByArgsSchema;
