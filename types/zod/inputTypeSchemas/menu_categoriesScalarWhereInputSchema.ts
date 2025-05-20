import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';

export const menu_categoriesScalarWhereInputSchema: z.ZodType<Prisma.menu_categoriesScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => menu_categoriesScalarWhereInputSchema),
				z.lazy(() => menu_categoriesScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => menu_categoriesScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => menu_categoriesScalarWhereInputSchema),
				z.lazy(() => menu_categoriesScalarWhereInputSchema).array(),
			])
			.optional(),
		menu_category_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		names: z.lazy(() => JsonNullableFilterSchema).optional(),
		description: z.lazy(() => JsonNullableFilterSchema).optional(),
		categories: z.lazy(() => StringNullableListFilterSchema).optional(),
		business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		menu_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		order: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		price: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		menu_items_ordered: z.lazy(() => JsonNullableFilterSchema).optional(),
		menu_order_index: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
	})
	.strict();

export default menu_categoriesScalarWhereInputSchema;
