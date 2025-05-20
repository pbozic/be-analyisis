import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_specificationsCreateManyInputSchema } from '../inputTypeSchemas/vehicle_specificationsCreateManyInputSchema';

export const vehicle_specificationsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.vehicle_specificationsCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				vehicle_specificationsCreateManyInputSchema,
				vehicle_specificationsCreateManyInputSchema.array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default vehicle_specificationsCreateManyAndReturnArgsSchema;
