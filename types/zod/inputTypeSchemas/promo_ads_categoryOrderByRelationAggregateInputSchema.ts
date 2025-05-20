import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_ads_categoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.promo_ads_categoryOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default promo_ads_categoryOrderByRelationAggregateInputSchema;
