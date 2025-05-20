import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_specificationsWhereInputSchema } from '../inputTypeSchemas/vehicle_specificationsWhereInputSchema';
import { vehicle_specificationsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/vehicle_specificationsOrderByWithAggregationInputSchema';
import { Vehicle_specificationsScalarFieldEnumSchema } from '../inputTypeSchemas/Vehicle_specificationsScalarFieldEnumSchema';
import { vehicle_specificationsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/vehicle_specificationsScalarWhereWithAggregatesInputSchema';

export const vehicle_specificationsGroupByArgsSchema: z.ZodType<Prisma.vehicle_specificationsGroupByArgs> = z
	.object({
		where: vehicle_specificationsWhereInputSchema.optional(),
		orderBy: z
			.union([
				vehicle_specificationsOrderByWithAggregationInputSchema.array(),
				vehicle_specificationsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Vehicle_specificationsScalarFieldEnumSchema.array(),
		having: vehicle_specificationsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default vehicle_specificationsGroupByArgsSchema;
