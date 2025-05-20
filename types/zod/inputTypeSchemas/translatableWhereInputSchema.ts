import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { TranslationsListRelationFilterSchema } from './TranslationsListRelationFilterSchema';
import { WordsListRelationFilterSchema } from './WordsListRelationFilterSchema';
import { CategoriesListRelationFilterSchema } from './CategoriesListRelationFilterSchema';
import { Promo_sectionsListRelationFilterSchema } from './Promo_sectionsListRelationFilterSchema';

export const translatableWhereInputSchema: z.ZodType<Prisma.translatableWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => translatableWhereInputSchema), z.lazy(() => translatableWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => translatableWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => translatableWhereInputSchema), z.lazy(() => translatableWhereInputSchema).array()])
			.optional(),
		translatable_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		translations: z.lazy(() => TranslationsListRelationFilterSchema).optional(),
		words: z.lazy(() => WordsListRelationFilterSchema).optional(),
		categories: z.lazy(() => CategoriesListRelationFilterSchema).optional(),
		promo_sections: z.lazy(() => Promo_sectionsListRelationFilterSchema).optional(),
	})
	.strict();

export default translatableWhereInputSchema;
