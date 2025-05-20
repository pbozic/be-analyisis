import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/driver_history_locationsWhereInputSchema';

export const driver_history_locationsDeleteManyArgsSchema: z.ZodType<Prisma.driver_history_locationsDeleteManyArgs> = z
	.object({
		where: driver_history_locationsWhereInputSchema.optional(),
	})
	.strict();

export default driver_history_locationsDeleteManyArgsSchema;
