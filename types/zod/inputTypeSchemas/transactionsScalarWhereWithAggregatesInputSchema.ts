import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { EnumTRANSACTION_TYPEWithAggregatesFilterSchema } from './EnumTRANSACTION_TYPEWithAggregatesFilterSchema';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const transactionsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.transactionsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => transactionsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => transactionsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => transactionsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => transactionsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => transactionsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			transaction_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			user_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			amount: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			type: z
				.union([
					z.lazy(() => EnumTRANSACTION_TYPEWithAggregatesFilterSchema),
					z.lazy(() => TRANSACTION_TYPESchema),
				])
				.optional(),
			description: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			delivery_order_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			taxi_order_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			wallet_fund_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
		})
		.strict();

export default transactionsScalarWhereWithAggregatesInputSchema;
