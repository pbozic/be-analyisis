import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const taxi_order_sentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.taxi_order_sentScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => taxi_order_sentScalarWhereWithAggregatesInputSchema),
					z.lazy(() => taxi_order_sentScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => taxi_order_sentScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => taxi_order_sentScalarWhereWithAggregatesInputSchema),
					z.lazy(() => taxi_order_sentScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			taxi_order_sent_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			order_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			driver_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			accepted: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			location: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
			timeline: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			rejected: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		})
		.strict();

export default taxi_order_sentScalarWhereWithAggregatesInputSchema;
