import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesWhereInputSchema } from '../inputTypeSchemas/financesWhereInputSchema';
import { financesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/financesOrderByWithAggregationInputSchema';
import { FinancesScalarFieldEnumSchema } from '../inputTypeSchemas/FinancesScalarFieldEnumSchema';
import { financesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/financesScalarWhereWithAggregatesInputSchema';

export const financesGroupByArgsSchema: z.ZodType<Prisma.financesGroupByArgs> = z
	.object({
		where: financesWhereInputSchema.optional(),
		orderBy: z
			.union([financesOrderByWithAggregationInputSchema.array(), financesOrderByWithAggregationInputSchema])
			.optional(),
		by: FinancesScalarFieldEnumSchema.array(),
		having: financesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default financesGroupByArgsSchema;
