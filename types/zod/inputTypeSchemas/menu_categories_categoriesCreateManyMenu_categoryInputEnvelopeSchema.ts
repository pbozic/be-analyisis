import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesCreateManyMenu_categoryInputSchema } from './menu_categories_categoriesCreateManyMenu_categoryInputSchema';

export const menu_categories_categoriesCreateManyMenu_categoryInputEnvelopeSchema: z.ZodType<Prisma.menu_categories_categoriesCreateManyMenu_categoryInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => menu_categories_categoriesCreateManyMenu_categoryInputSchema),
				z.lazy(() => menu_categories_categoriesCreateManyMenu_categoryInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default menu_categories_categoriesCreateManyMenu_categoryInputEnvelopeSchema;
