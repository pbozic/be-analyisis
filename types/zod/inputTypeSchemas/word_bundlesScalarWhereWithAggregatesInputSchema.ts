import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const word_bundlesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.word_bundlesScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => word_bundlesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => word_bundlesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => word_bundlesScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => word_bundlesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => word_bundlesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			description: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default word_bundlesScalarWhereWithAggregatesInputSchema;
