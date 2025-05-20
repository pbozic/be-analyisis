import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WordsListRelationFilterSchema } from './WordsListRelationFilterSchema';

export const word_bundlesWhereInputSchema: z.ZodType<Prisma.word_bundlesWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => word_bundlesWhereInputSchema), z.lazy(() => word_bundlesWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => word_bundlesWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => word_bundlesWhereInputSchema), z.lazy(() => word_bundlesWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		words: z.lazy(() => WordsListRelationFilterSchema).optional(),
	})
	.strict();

export default word_bundlesWhereInputSchema;
