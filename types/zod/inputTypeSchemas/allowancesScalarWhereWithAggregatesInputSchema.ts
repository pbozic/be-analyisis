import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const allowancesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.allowancesScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => allowancesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => allowancesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => allowancesScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => allowancesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => allowancesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			allowance_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			group_user_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			business_users_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			amount_taxi_wallet: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			amount_transfer_wallet: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			amount_delivery_wallet: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			amount_any_wallet: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			amount_taxi_purchase_order: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			amount_transfer_purchase_order: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			amount_delivery_purchase_order: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			amount_any_purchase_order: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default allowancesScalarWhereWithAggregatesInputSchema;
