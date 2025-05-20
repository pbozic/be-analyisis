import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const daily_meals_subscriptionsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsMaxOrderByAggregateInput> =
	z
		.object({
			daily_meals_subscriptions_id: z.lazy(() => SortOrderSchema).optional(),
			grouped_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			menu_id: z.lazy(() => SortOrderSchema).optional(),
			address_id: z.lazy(() => SortOrderSchema).optional(),
			menu_categories_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			date: z.lazy(() => SortOrderSchema).optional(),
			quantity: z.lazy(() => SortOrderSchema).optional(),
			order_created: z.lazy(() => SortOrderSchema).optional(),
			restaurant_comment: z.lazy(() => SortOrderSchema).optional(),
			courier_comment: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default daily_meals_subscriptionsMaxOrderByAggregateInputSchema;
