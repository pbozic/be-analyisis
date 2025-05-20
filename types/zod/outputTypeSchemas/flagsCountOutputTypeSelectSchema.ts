import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const flagsCountOutputTypeSelectSchema: z.ZodType<Prisma.flagsCountOutputTypeSelect> = z
	.object({
		history: z.boolean().optional(),
	})
	.strict();

export default flagsCountOutputTypeSelectSchema;
