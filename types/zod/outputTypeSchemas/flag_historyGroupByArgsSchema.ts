import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyWhereInputSchema } from '../inputTypeSchemas/flag_historyWhereInputSchema';
import { flag_historyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/flag_historyOrderByWithAggregationInputSchema';
import { Flag_historyScalarFieldEnumSchema } from '../inputTypeSchemas/Flag_historyScalarFieldEnumSchema';
import { flag_historyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/flag_historyScalarWhereWithAggregatesInputSchema';

export const flag_historyGroupByArgsSchema: z.ZodType<Prisma.flag_historyGroupByArgs> = z
	.object({
		where: flag_historyWhereInputSchema.optional(),
		orderBy: z
			.union([
				flag_historyOrderByWithAggregationInputSchema.array(),
				flag_historyOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Flag_historyScalarFieldEnumSchema.array(),
		having: flag_historyScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default flag_historyGroupByArgsSchema;
