import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesWhereInputSchema } from '../inputTypeSchemas/vehiclesWhereInputSchema';
import { vehiclesOrderByWithRelationInputSchema } from '../inputTypeSchemas/vehiclesOrderByWithRelationInputSchema';
import { vehiclesWhereUniqueInputSchema } from '../inputTypeSchemas/vehiclesWhereUniqueInputSchema';

export const vehiclesAggregateArgsSchema: z.ZodType<Prisma.vehiclesAggregateArgs> = z
	.object({
		where: vehiclesWhereInputSchema.optional(),
		orderBy: z
			.union([vehiclesOrderByWithRelationInputSchema.array(), vehiclesOrderByWithRelationInputSchema])
			.optional(),
		cursor: vehiclesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default vehiclesAggregateArgsSchema;
