import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesWhereInputSchema } from '../inputTypeSchemas/vehiclesWhereInputSchema';
import { vehiclesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/vehiclesOrderByWithAggregationInputSchema';
import { VehiclesScalarFieldEnumSchema } from '../inputTypeSchemas/VehiclesScalarFieldEnumSchema';
import { vehiclesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/vehiclesScalarWhereWithAggregatesInputSchema';

export const vehiclesGroupByArgsSchema: z.ZodType<Prisma.vehiclesGroupByArgs> = z
	.object({
		where: vehiclesWhereInputSchema.optional(),
		orderBy: z
			.union([vehiclesOrderByWithAggregationInputSchema.array(), vehiclesOrderByWithAggregationInputSchema])
			.optional(),
		by: VehiclesScalarFieldEnumSchema.array(),
		having: vehiclesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default vehiclesGroupByArgsSchema;
