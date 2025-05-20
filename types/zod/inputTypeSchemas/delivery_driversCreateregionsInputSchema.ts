import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const delivery_driversCreateregionsInputSchema: z.ZodType<Prisma.delivery_driversCreateregionsInput> = z
	.object({
		set: z.string().array(),
	})
	.strict();

export default delivery_driversCreateregionsInputSchema;
