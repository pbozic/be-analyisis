import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const wordsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.wordsScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => wordsScalarWhereWithAggregatesInputSchema),
				z.lazy(() => wordsScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => wordsScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => wordsScalarWhereWithAggregatesInputSchema),
				z.lazy(() => wordsScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		word_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		word: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		popularity: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
		categories_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		translatable_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default wordsScalarWhereWithAggregatesInputSchema;
