import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_specificationsWhereInputSchema } from '../inputTypeSchemas/vehicle_specificationsWhereInputSchema';

export const vehicle_specificationsDeleteManyArgsSchema: z.ZodType<Prisma.vehicle_specificationsDeleteManyArgs> = z
	.object({
		where: vehicle_specificationsWhereInputSchema.optional(),
	})
	.strict();

export default vehicle_specificationsDeleteManyArgsSchema;
