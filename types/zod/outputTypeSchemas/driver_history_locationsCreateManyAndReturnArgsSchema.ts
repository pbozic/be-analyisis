import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_history_locationsCreateManyInputSchema } from '../inputTypeSchemas/driver_history_locationsCreateManyInputSchema';

export const driver_history_locationsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.driver_history_locationsCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				driver_history_locationsCreateManyInputSchema,
				driver_history_locationsCreateManyInputSchema.array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default driver_history_locationsCreateManyAndReturnArgsSchema;
