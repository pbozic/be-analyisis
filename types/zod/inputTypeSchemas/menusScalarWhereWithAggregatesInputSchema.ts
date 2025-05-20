import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const menusScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.menusScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => menusScalarWhereWithAggregatesInputSchema),
				z.lazy(() => menusScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => menusScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => menusScalarWhereWithAggregatesInputSchema),
				z.lazy(() => menusScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		menu_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		business_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		active: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		menu_categories_ordered: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		isDailyMeal: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		date: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
	})
	.strict();

export default menusScalarWhereWithAggregatesInputSchema;
