import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_driversWhereInputSchema } from '../inputTypeSchemas/vehicle_driversWhereInputSchema';
import { vehicle_driversOrderByWithRelationInputSchema } from '../inputTypeSchemas/vehicle_driversOrderByWithRelationInputSchema';
import { vehicle_driversWhereUniqueInputSchema } from '../inputTypeSchemas/vehicle_driversWhereUniqueInputSchema';

export const vehicle_driversAggregateArgsSchema: z.ZodType<Prisma.vehicle_driversAggregateArgs> = z
	.object({
		where: vehicle_driversWhereInputSchema.optional(),
		orderBy: z
			.union([
				vehicle_driversOrderByWithRelationInputSchema.array(),
				vehicle_driversOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: vehicle_driversWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default vehicle_driversAggregateArgsSchema;
