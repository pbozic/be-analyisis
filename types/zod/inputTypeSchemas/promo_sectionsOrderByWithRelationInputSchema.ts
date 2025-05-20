import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { promo_sections_buyOrderByRelationAggregateInputSchema } from './promo_sections_buyOrderByRelationAggregateInputSchema';
import { translatableOrderByWithRelationInputSchema } from './translatableOrderByWithRelationInputSchema';

export const promo_sectionsOrderByWithRelationInputSchema: z.ZodType<Prisma.promo_sectionsOrderByWithRelationInput> = z
	.object({
		promo_sections_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		tag: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		prices: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		limits: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		stripe_product_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		canPurchase: z.lazy(() => SortOrderSchema).optional(),
		t1price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		t2price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		t3price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		order: z.lazy(() => SortOrderSchema).optional(),
		service_type: z.lazy(() => SortOrderSchema).optional(),
		promo_duration_days: z.lazy(() => SortOrderSchema).optional(),
		translatable_id: z.lazy(() => SortOrderSchema).optional(),
		display_cards_per_page: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		promo_section_buy: z.lazy(() => promo_sections_buyOrderByRelationAggregateInputSchema).optional(),
		translatable: z.lazy(() => translatableOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default promo_sectionsOrderByWithRelationInputSchema;
