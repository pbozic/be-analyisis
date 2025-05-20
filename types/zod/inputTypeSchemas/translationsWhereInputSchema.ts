import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TranslatableRelationFilterSchema } from './TranslatableRelationFilterSchema';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';

export const translationsWhereInputSchema: z.ZodType<Prisma.translationsWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => translationsWhereInputSchema), z.lazy(() => translationsWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => translationsWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => translationsWhereInputSchema), z.lazy(() => translationsWhereInputSchema).array()])
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
		translatable: z
			.union([z.lazy(() => TranslatableRelationFilterSchema), z.lazy(() => translatableWhereInputSchema)])
			.optional(),
	})
	.strict();

export default translationsWhereInputSchema;
