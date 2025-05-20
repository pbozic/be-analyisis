import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const driversCreateregionsInputSchema: z.ZodType<Prisma.driversCreateregionsInput> = z
	.object({
		set: z.string().array(),
	})
	.strict();

export default driversCreateregionsInputSchema;
