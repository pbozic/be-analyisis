import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const fiscal_devicesCountOutputTypeSelectSchema: z.ZodType<Prisma.fiscal_devicesCountOutputTypeSelect> = z
	.object({
		businesses: z.boolean().optional(),
	})
	.strict();

export default fiscal_devicesCountOutputTypeSelectSchema;
