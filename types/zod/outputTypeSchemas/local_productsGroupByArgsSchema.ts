import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsWhereInputSchema } from '../inputTypeSchemas/local_productsWhereInputSchema';
import { local_productsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/local_productsOrderByWithAggregationInputSchema';
import { Local_productsScalarFieldEnumSchema } from '../inputTypeSchemas/Local_productsScalarFieldEnumSchema';
import { local_productsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/local_productsScalarWhereWithAggregatesInputSchema';

export const local_productsGroupByArgsSchema: z.ZodType<Prisma.local_productsGroupByArgs> = z
	.object({
		where: local_productsWhereInputSchema.optional(),
		orderBy: z
			.union([
				local_productsOrderByWithAggregationInputSchema.array(),
				local_productsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Local_productsScalarFieldEnumSchema.array(),
		having: local_productsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default local_productsGroupByArgsSchema;
