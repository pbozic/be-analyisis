import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const business_usersCountOutputTypeSelectSchema: z.ZodType<Prisma.business_usersCountOutputTypeSelect> = z
	.object({
		taxi_orders: z.boolean().optional(),
	})
	.strict();

export default business_usersCountOutputTypeSelectSchema;
