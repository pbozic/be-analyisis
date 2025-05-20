import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversWhereInputSchema } from '../inputTypeSchemas/driversWhereInputSchema';
import { driversOrderByWithAggregationInputSchema } from '../inputTypeSchemas/driversOrderByWithAggregationInputSchema';
import { DriversScalarFieldEnumSchema } from '../inputTypeSchemas/DriversScalarFieldEnumSchema';
import { driversScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/driversScalarWhereWithAggregatesInputSchema';

export const driversGroupByArgsSchema: z.ZodType<Prisma.driversGroupByArgs> = z
	.object({
		where: driversWhereInputSchema.optional(),
		orderBy: z
			.union([driversOrderByWithAggregationInputSchema.array(), driversOrderByWithAggregationInputSchema])
			.optional(),
		by: DriversScalarFieldEnumSchema.array(),
		having: driversScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default driversGroupByArgsSchema;
