import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { translationsOrderByRelationAggregateInputSchema } from './translationsOrderByRelationAggregateInputSchema';
import { wordsOrderByRelationAggregateInputSchema } from './wordsOrderByRelationAggregateInputSchema';
import { categoriesOrderByRelationAggregateInputSchema } from './categoriesOrderByRelationAggregateInputSchema';
import { promo_sectionsOrderByRelationAggregateInputSchema } from './promo_sectionsOrderByRelationAggregateInputSchema';

export const translatableOrderByWithRelationInputSchema: z.ZodType<Prisma.translatableOrderByWithRelationInput> = z
	.object({
		translatable_id: z.lazy(() => SortOrderSchema).optional(),
		translations: z.lazy(() => translationsOrderByRelationAggregateInputSchema).optional(),
		words: z.lazy(() => wordsOrderByRelationAggregateInputSchema).optional(),
		categories: z.lazy(() => categoriesOrderByRelationAggregateInputSchema).optional(),
		promo_sections: z.lazy(() => promo_sectionsOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default translatableOrderByWithRelationInputSchema;
