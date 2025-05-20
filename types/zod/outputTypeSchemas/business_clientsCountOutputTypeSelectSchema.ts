import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const business_clientsCountOutputTypeSelectSchema: z.ZodType<Prisma.business_clientsCountOutputTypeSelect> = z
	.object({
		taxi_orders: z.boolean().optional(),
	})
	.strict();

export default business_clientsCountOutputTypeSelectSchema;
