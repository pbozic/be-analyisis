import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsCreateManyInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsCreateManyInputSchema';

export const delivery_driver_history_locationsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				delivery_driver_history_locationsCreateManyInputSchema,
				delivery_driver_history_locationsCreateManyInputSchema.array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default delivery_driver_history_locationsCreateManyAndReturnArgsSchema;
