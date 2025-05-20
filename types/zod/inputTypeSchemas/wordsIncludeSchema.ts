import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesArgsSchema } from '../outputTypeSchemas/categoriesArgsSchema';
import { translatableArgsSchema } from '../outputTypeSchemas/translatableArgsSchema';
import { word_buyFindManyArgsSchema } from '../outputTypeSchemas/word_buyFindManyArgsSchema';
import { word_bundlesFindManyArgsSchema } from '../outputTypeSchemas/word_bundlesFindManyArgsSchema';
import { WordsCountOutputTypeArgsSchema } from '../outputTypeSchemas/WordsCountOutputTypeArgsSchema';

export const wordsIncludeSchema: z.ZodType<Prisma.wordsInclude> = z
	.object({
		category: z.union([z.boolean(), z.lazy(() => categoriesArgsSchema)]).optional(),
		translatable: z.union([z.boolean(), z.lazy(() => translatableArgsSchema)]).optional(),
		subscriptions: z.union([z.boolean(), z.lazy(() => word_buyFindManyArgsSchema)]).optional(),
		bundles: z.union([z.boolean(), z.lazy(() => word_bundlesFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => WordsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default wordsIncludeSchema;
