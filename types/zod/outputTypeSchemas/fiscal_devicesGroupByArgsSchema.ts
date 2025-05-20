import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesWhereInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereInputSchema';
import { fiscal_devicesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/fiscal_devicesOrderByWithAggregationInputSchema';
import { Fiscal_devicesScalarFieldEnumSchema } from '../inputTypeSchemas/Fiscal_devicesScalarFieldEnumSchema';
import { fiscal_devicesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/fiscal_devicesScalarWhereWithAggregatesInputSchema';

export const fiscal_devicesGroupByArgsSchema: z.ZodType<Prisma.fiscal_devicesGroupByArgs> = z
	.object({
		where: fiscal_devicesWhereInputSchema.optional(),
		orderBy: z
			.union([
				fiscal_devicesOrderByWithAggregationInputSchema.array(),
				fiscal_devicesOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Fiscal_devicesScalarFieldEnumSchema.array(),
		having: fiscal_devicesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default fiscal_devicesGroupByArgsSchema;
