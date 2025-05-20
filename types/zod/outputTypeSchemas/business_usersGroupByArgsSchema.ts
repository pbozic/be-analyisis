import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersWhereInputSchema } from '../inputTypeSchemas/business_usersWhereInputSchema';
import { business_usersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/business_usersOrderByWithAggregationInputSchema';
import { Business_usersScalarFieldEnumSchema } from '../inputTypeSchemas/Business_usersScalarFieldEnumSchema';
import { business_usersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/business_usersScalarWhereWithAggregatesInputSchema';

export const business_usersGroupByArgsSchema: z.ZodType<Prisma.business_usersGroupByArgs> = z
	.object({
		where: business_usersWhereInputSchema.optional(),
		orderBy: z
			.union([
				business_usersOrderByWithAggregationInputSchema.array(),
				business_usersOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Business_usersScalarFieldEnumSchema.array(),
		having: business_usersScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default business_usersGroupByArgsSchema;
