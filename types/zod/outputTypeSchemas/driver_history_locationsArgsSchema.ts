import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_history_locationsSelectSchema } from '../inputTypeSchemas/driver_history_locationsSelectSchema';
import { driver_history_locationsIncludeSchema } from '../inputTypeSchemas/driver_history_locationsIncludeSchema';

export const driver_history_locationsArgsSchema: z.ZodType<Prisma.driver_history_locationsDefaultArgs> = z
	.object({
		select: z.lazy(() => driver_history_locationsSelectSchema).optional(),
		include: z.lazy(() => driver_history_locationsIncludeSchema).optional(),
	})
	.strict();

export default driver_history_locationsArgsSchema;
