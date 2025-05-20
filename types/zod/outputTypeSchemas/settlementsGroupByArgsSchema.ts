import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { settlementsWhereInputSchema } from '../inputTypeSchemas/settlementsWhereInputSchema';
import { settlementsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/settlementsOrderByWithAggregationInputSchema';
import { SettlementsScalarFieldEnumSchema } from '../inputTypeSchemas/SettlementsScalarFieldEnumSchema';
import { settlementsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/settlementsScalarWhereWithAggregatesInputSchema';

export const settlementsGroupByArgsSchema: z.ZodType<Prisma.settlementsGroupByArgs> = z
	.object({
		where: settlementsWhereInputSchema.optional(),
		orderBy: z
			.union([settlementsOrderByWithAggregationInputSchema.array(), settlementsOrderByWithAggregationInputSchema])
			.optional(),
		by: SettlementsScalarFieldEnumSchema.array(),
		having: settlementsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default settlementsGroupByArgsSchema;
