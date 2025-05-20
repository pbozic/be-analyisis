import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';

export const menu_categoriesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.menu_categoriesScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => menu_categoriesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => menu_categoriesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => menu_categoriesScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => menu_categoriesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => menu_categoriesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			menu_category_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			names: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
			description: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
			categories: z.lazy(() => StringNullableListFilterSchema).optional(),
			business_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			menu_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			order: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			price: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			menu_items_ordered: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
			menu_order_index: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
		})
		.strict();

export default menu_categoriesScalarWhereWithAggregatesInputSchema;
