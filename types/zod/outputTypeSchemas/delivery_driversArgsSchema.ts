import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversSelectSchema } from '../inputTypeSchemas/delivery_driversSelectSchema';
import { delivery_driversIncludeSchema } from '../inputTypeSchemas/delivery_driversIncludeSchema';

export const delivery_driversArgsSchema: z.ZodType<Prisma.delivery_driversDefaultArgs> = z
	.object({
		select: z.lazy(() => delivery_driversSelectSchema).optional(),
		include: z.lazy(() => delivery_driversIncludeSchema).optional(),
	})
	.strict();

export default delivery_driversArgsSchema;
