import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateNestedOneWithoutWordsInputSchema } from './categoriesCreateNestedOneWithoutWordsInputSchema';
import { translatableCreateNestedOneWithoutWordsInputSchema } from './translatableCreateNestedOneWithoutWordsInputSchema';
import { word_buyCreateNestedManyWithoutWordInputSchema } from './word_buyCreateNestedManyWithoutWordInputSchema';
import { word_bundlesCreateNestedManyWithoutWordsInputSchema } from './word_bundlesCreateNestedManyWithoutWordsInputSchema';

export const wordsCreateInputSchema: z.ZodType<Prisma.wordsCreateInput> = z
	.object({
		word_id: z.string().uuid().optional(),
		word: z.string(),
		popularity: z.number().int().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		category: z.lazy(() => categoriesCreateNestedOneWithoutWordsInputSchema).optional(),
		translatable: z.lazy(() => translatableCreateNestedOneWithoutWordsInputSchema),
		subscriptions: z.lazy(() => word_buyCreateNestedManyWithoutWordInputSchema).optional(),
		bundles: z.lazy(() => word_bundlesCreateNestedManyWithoutWordsInputSchema).optional(),
	})
	.strict();

export default wordsCreateInputSchema;
