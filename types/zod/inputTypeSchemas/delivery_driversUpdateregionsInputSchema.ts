import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const delivery_driversUpdateregionsInputSchema: z.ZodType<Prisma.delivery_driversUpdateregionsInput> = z
	.object({
		set: z.string().array().optional(),
		push: z.union([z.string(), z.string().array()]).optional(),
	})
	.strict();

export default delivery_driversUpdateregionsInputSchema;
