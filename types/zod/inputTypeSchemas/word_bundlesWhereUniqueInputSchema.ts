import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesWhereInputSchema } from './word_bundlesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WordsListRelationFilterSchema } from './WordsListRelationFilterSchema';

export const word_bundlesWhereUniqueInputSchema: z.ZodType<Prisma.word_bundlesWhereUniqueInput> = z
	.object({
		id: z.string().uuid(),
	})
	.and(
		z
			.object({
				id: z.string().uuid().optional(),
				AND: z
					.union([
						z.lazy(() => word_bundlesWhereInputSchema),
						z.lazy(() => word_bundlesWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => word_bundlesWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => word_bundlesWhereInputSchema),
						z.lazy(() => word_bundlesWhereInputSchema).array(),
					])
					.optional(),
				name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				description: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				words: z.lazy(() => WordsListRelationFilterSchema).optional(),
			})
			.strict()
	);

export default word_bundlesWhereUniqueInputSchema;
