import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesWhereInputSchema } from '../inputTypeSchemas/local_pricesWhereInputSchema';
import { local_pricesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/local_pricesOrderByWithAggregationInputSchema';
import { Local_pricesScalarFieldEnumSchema } from '../inputTypeSchemas/Local_pricesScalarFieldEnumSchema';
import { local_pricesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/local_pricesScalarWhereWithAggregatesInputSchema';

export const local_pricesGroupByArgsSchema: z.ZodType<Prisma.local_pricesGroupByArgs> = z
	.object({
		where: local_pricesWhereInputSchema.optional(),
		orderBy: z
			.union([
				local_pricesOrderByWithAggregationInputSchema.array(),
				local_pricesOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Local_pricesScalarFieldEnumSchema.array(),
		having: local_pricesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default local_pricesGroupByArgsSchema;
