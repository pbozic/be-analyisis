import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersCountOutputTypeSelectSchema } from './delivery_ordersCountOutputTypeSelectSchema';

export const delivery_ordersCountOutputTypeArgsSchema: z.ZodType<Prisma.delivery_ordersCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => delivery_ordersCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default delivery_ordersCountOutputTypeSelectSchema;
