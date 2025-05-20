import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const translationsScalarWhereInputSchema: z.ZodType<Prisma.translationsScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => translationsScalarWhereInputSchema),
				z.lazy(() => translationsScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => translationsScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => translationsScalarWhereInputSchema),
				z.lazy(() => translationsScalarWhereInputSchema).array(),
			])
			.optional(),
		translations_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		translatable_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		field: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		language: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		translation: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default translationsScalarWhereInputSchema;
