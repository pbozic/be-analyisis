import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesCreateManyCategoryInputSchema } from './menu_categories_categoriesCreateManyCategoryInputSchema';

export const menu_categories_categoriesCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.menu_categories_categoriesCreateManyCategoryInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => menu_categories_categoriesCreateManyCategoryInputSchema),
				z.lazy(() => menu_categories_categoriesCreateManyCategoryInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default menu_categories_categoriesCreateManyCategoryInputEnvelopeSchema;
