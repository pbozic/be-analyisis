import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereInputSchema } from './daily_meals_subscriptionsWhereInputSchema';

export const Daily_meals_subscriptionsListRelationFilterSchema: z.ZodType<Prisma.Daily_meals_subscriptionsListRelationFilter> =
	z
		.object({
			every: z.lazy(() => daily_meals_subscriptionsWhereInputSchema).optional(),
			some: z.lazy(() => daily_meals_subscriptionsWhereInputSchema).optional(),
			none: z.lazy(() => daily_meals_subscriptionsWhereInputSchema).optional(),
		})
		.strict();

export default Daily_meals_subscriptionsListRelationFilterSchema;
