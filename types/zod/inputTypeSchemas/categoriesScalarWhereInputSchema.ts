import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumCATEGORY_TYPEFilterSchema } from './EnumCATEGORY_TYPEFilterSchema';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const categoriesScalarWhereInputSchema: z.ZodType<Prisma.categoriesScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => categoriesScalarWhereInputSchema),
				z.lazy(() => categoriesScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => categoriesScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => categoriesScalarWhereInputSchema),
				z.lazy(() => categoriesScalarWhereInputSchema).array(),
			])
			.optional(),
		categories_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		tag: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		icon_file_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		category_type: z
			.union([z.lazy(() => EnumCATEGORY_TYPEFilterSchema), z.lazy(() => CATEGORY_TYPESchema)])
			.optional(),
		parent_categories_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		translatable_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		deleted_at: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
	})
	.strict();

export default categoriesScalarWhereInputSchema;
