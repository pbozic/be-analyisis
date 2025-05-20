import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereInputSchema } from './transactionsWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { EnumTRANSACTION_TYPEFilterSchema } from './EnumTRANSACTION_TYPEFilterSchema';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { Taxi_ordersNullableRelationFilterSchema } from './Taxi_ordersNullableRelationFilterSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { DocumentsListRelationFilterSchema } from './DocumentsListRelationFilterSchema';
import { Wallet_fundsNullableRelationFilterSchema } from './Wallet_fundsNullableRelationFilterSchema';
import { wallet_fundsWhereInputSchema } from './wallet_fundsWhereInputSchema';

export const transactionsWhereUniqueInputSchema: z.ZodType<Prisma.transactionsWhereUniqueInput> = z
	.object({
		transaction_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				transaction_id: z.string().uuid().optional(),
				AND: z
					.union([
						z.lazy(() => transactionsWhereInputSchema),
						z.lazy(() => transactionsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => transactionsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => transactionsWhereInputSchema),
						z.lazy(() => transactionsWhereInputSchema).array(),
					])
					.optional(),
				user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				amount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				type: z
					.union([z.lazy(() => EnumTRANSACTION_TYPEFilterSchema), z.lazy(() => TRANSACTION_TYPESchema)])
					.optional(),
				description: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				delivery_order_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				taxi_order_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				wallet_fund_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				taxi_order: z
					.union([
						z.lazy(() => Taxi_ordersNullableRelationFilterSchema),
						z.lazy(() => taxi_ordersWhereInputSchema),
					])
					.optional()
					.nullable(),
				delivery_order: z
					.union([
						z.lazy(() => Delivery_ordersNullableRelationFilterSchema),
						z.lazy(() => delivery_ordersWhereInputSchema),
					])
					.optional()
					.nullable(),
				user: z
					.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional(),
				documents: z.lazy(() => DocumentsListRelationFilterSchema).optional(),
				wallet_funds: z
					.union([
						z.lazy(() => Wallet_fundsNullableRelationFilterSchema),
						z.lazy(() => wallet_fundsWhereInputSchema),
					])
					.optional()
					.nullable(),
			})
			.strict()
	);

export default transactionsWhereUniqueInputSchema;
