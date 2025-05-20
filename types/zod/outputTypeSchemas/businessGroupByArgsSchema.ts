import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessWhereInputSchema } from '../inputTypeSchemas/businessWhereInputSchema';
import { businessOrderByWithAggregationInputSchema } from '../inputTypeSchemas/businessOrderByWithAggregationInputSchema';
import { BusinessScalarFieldEnumSchema } from '../inputTypeSchemas/BusinessScalarFieldEnumSchema';
import { businessScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/businessScalarWhereWithAggregatesInputSchema';

export const businessGroupByArgsSchema: z.ZodType<Prisma.businessGroupByArgs> = z
	.object({
		where: businessWhereInputSchema.optional(),
		orderBy: z
			.union([businessOrderByWithAggregationInputSchema.array(), businessOrderByWithAggregationInputSchema])
			.optional(),
		by: BusinessScalarFieldEnumSchema.array(),
		having: businessScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default businessGroupByArgsSchema;
