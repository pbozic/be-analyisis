import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_sections_buyCountOrderByAggregateInputSchema: z.ZodType<Prisma.promo_sections_buyCountOrderByAggregateInput> =
	z
		.object({
			promo_sections_buy_id: z.lazy(() => SortOrderSchema).optional(),
			promo_sections_id: z.lazy(() => SortOrderSchema).optional(),
			stripe_subscription_id: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			active_at: z.lazy(() => SortOrderSchema).optional(),
			expires_at: z.lazy(() => SortOrderSchema).optional(),
			tier: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default promo_sections_buyCountOrderByAggregateInputSchema;
