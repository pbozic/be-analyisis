import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { promo_sectionsOrderByWithRelationInputSchema } from './promo_sectionsOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const promo_sections_buyOrderByWithRelationInputSchema: z.ZodType<Prisma.promo_sections_buyOrderByWithRelationInput> =
	z
		.object({
			promo_sections_buy_id: z.lazy(() => SortOrderSchema).optional(),
			promo_sections_id: z.lazy(() => SortOrderSchema).optional(),
			stripe_subscription_id: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			active_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			expires_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			tier: z.lazy(() => SortOrderSchema).optional(),
			promo_section: z.lazy(() => promo_sectionsOrderByWithRelationInputSchema).optional(),
			business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
			bought_by: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default promo_sections_buyOrderByWithRelationInputSchema;
