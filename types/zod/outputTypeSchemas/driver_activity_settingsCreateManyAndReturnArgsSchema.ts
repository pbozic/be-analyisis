import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_settingsCreateManyInputSchema } from '../inputTypeSchemas/driver_activity_settingsCreateManyInputSchema';

export const driver_activity_settingsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.driver_activity_settingsCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				driver_activity_settingsCreateManyInputSchema,
				driver_activity_settingsCreateManyInputSchema.array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default driver_activity_settingsCreateManyAndReturnArgsSchema;
