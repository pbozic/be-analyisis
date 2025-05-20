import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const driversUpdateregionsInputSchema: z.ZodType<Prisma.driversUpdateregionsInput> = z
	.object({
		set: z.string().array().optional(),
		push: z.union([z.string(), z.string().array()]).optional(),
	})
	.strict();

export default driversUpdateregionsInputSchema;
