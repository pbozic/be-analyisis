import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CategoriesNullableRelationFilterSchema } from './CategoriesNullableRelationFilterSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';
import { TranslatableRelationFilterSchema } from './TranslatableRelationFilterSchema';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';
import { Word_buyListRelationFilterSchema } from './Word_buyListRelationFilterSchema';
import { Word_bundlesListRelationFilterSchema } from './Word_bundlesListRelationFilterSchema';

export const wordsWhereInputSchema: z.ZodType<Prisma.wordsWhereInput> = z
	.object({
		AND: z.union([z.lazy(() => wordsWhereInputSchema), z.lazy(() => wordsWhereInputSchema).array()]).optional(),
		OR: z
			.lazy(() => wordsWhereInputSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => wordsWhereInputSchema), z.lazy(() => wordsWhereInputSchema).array()]).optional(),
		word_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		word: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		popularity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		categories_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		translatable_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		category: z
			.union([z.lazy(() => CategoriesNullableRelationFilterSchema), z.lazy(() => categoriesWhereInputSchema)])
			.optional()
			.nullable(),
		translatable: z
			.union([z.lazy(() => TranslatableRelationFilterSchema), z.lazy(() => translatableWhereInputSchema)])
			.optional(),
		subscriptions: z.lazy(() => Word_buyListRelationFilterSchema).optional(),
		bundles: z.lazy(() => Word_bundlesListRelationFilterSchema).optional(),
	})
	.strict();

export default wordsWhereInputSchema;
