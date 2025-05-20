import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const menusScalarWhereInputSchema: z.ZodType<Prisma.menusScalarWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => menusScalarWhereInputSchema), z.lazy(() => menusScalarWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => menusScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => menusScalarWhereInputSchema), z.lazy(() => menusScalarWhereInputSchema).array()])
			.optional(),
		menu_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		active: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		menu_categories_ordered: z.lazy(() => JsonNullableFilterSchema).optional(),
		isDailyMeal: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		date: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
	})
	.strict();

export default menusScalarWhereInputSchema;
