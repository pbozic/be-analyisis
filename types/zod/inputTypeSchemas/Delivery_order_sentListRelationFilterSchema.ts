import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentWhereInputSchema } from './delivery_order_sentWhereInputSchema';

export const Delivery_order_sentListRelationFilterSchema: z.ZodType<Prisma.Delivery_order_sentListRelationFilter> = z
	.object({
		every: z.lazy(() => delivery_order_sentWhereInputSchema).optional(),
		some: z.lazy(() => delivery_order_sentWhereInputSchema).optional(),
		none: z.lazy(() => delivery_order_sentWhereInputSchema).optional(),
	})
	.strict();

export default Delivery_order_sentListRelationFilterSchema;
