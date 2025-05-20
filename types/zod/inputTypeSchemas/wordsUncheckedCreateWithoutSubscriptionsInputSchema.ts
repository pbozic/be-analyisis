import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema } from './word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema';

export const wordsUncheckedCreateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.wordsUncheckedCreateWithoutSubscriptionsInput> =
	z
		.object({
			word_id: z.string().uuid().optional(),
			word: z.string(),
			popularity: z.number().int().optional(),
			categories_id: z.string().optional().nullable(),
			translatable_id: z.string(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			bundles: z.lazy(() => word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema).optional(),
		})
		.strict();

export default wordsUncheckedCreateWithoutSubscriptionsInputSchema;
