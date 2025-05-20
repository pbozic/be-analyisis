import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { EnumLOST_FOUND_STATUSWithAggregatesFilterSchema } from './EnumLOST_FOUND_STATUSWithAggregatesFilterSchema';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const lost_itemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.lost_itemsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => lost_itemsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => lost_itemsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => lost_itemsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => lost_itemsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => lost_itemsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			lost_item_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			user_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			status: z
				.union([
					z.lazy(() => EnumLOST_FOUND_STATUSWithAggregatesFilterSchema),
					z.lazy(() => LOST_FOUND_STATUSSchema),
				])
				.optional(),
			description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			found: z
				.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
				.optional()
				.nullable(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default lost_itemsScalarWhereWithAggregatesInputSchema;
