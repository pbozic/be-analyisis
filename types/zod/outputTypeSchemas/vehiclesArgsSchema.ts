import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesSelectSchema } from '../inputTypeSchemas/vehiclesSelectSchema';
import { vehiclesIncludeSchema } from '../inputTypeSchemas/vehiclesIncludeSchema';

export const vehiclesArgsSchema: z.ZodType<Prisma.vehiclesDefaultArgs> = z
	.object({
		select: z.lazy(() => vehiclesSelectSchema).optional(),
		include: z.lazy(() => vehiclesIncludeSchema).optional(),
	})
	.strict();

export default vehiclesArgsSchema;
