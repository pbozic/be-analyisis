import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const settlementsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.settlementsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => settlementsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => settlementsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => settlementsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => settlementsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => settlementsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			settlement_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			municipalities_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			eid_naselje: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			feature_id: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			geojson: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default settlementsScalarWhereWithAggregatesInputSchema;
