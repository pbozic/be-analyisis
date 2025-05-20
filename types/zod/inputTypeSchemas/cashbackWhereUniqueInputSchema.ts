import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereInputSchema } from './cashbackWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumCASHBACK_TYPEFilterSchema } from './EnumCASHBACK_TYPEFilterSchema';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';
import { EnumCASHBACK_SOURCEFilterSchema } from './EnumCASHBACK_SOURCEFilterSchema';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';
import { EnumCASHBACK_STATUSFilterSchema } from './EnumCASHBACK_STATUSFilterSchema';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { Taxi_ordersNullableRelationFilterSchema } from './Taxi_ordersNullableRelationFilterSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const cashbackWhereUniqueInputSchema: z.ZodType<Prisma.cashbackWhereUniqueInput> = z
	.object({
		cashback_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				cashback_id: z.string().uuid().optional(),
				AND: z
					.union([z.lazy(() => cashbackWhereInputSchema), z.lazy(() => cashbackWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => cashbackWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => cashbackWhereInputSchema), z.lazy(() => cashbackWhereInputSchema).array()])
					.optional(),
				user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				amount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				type: z
					.union([z.lazy(() => EnumCASHBACK_TYPEFilterSchema), z.lazy(() => CASHBACK_TYPESchema)])
					.optional(),
				source: z
					.union([z.lazy(() => EnumCASHBACK_SOURCEFilterSchema), z.lazy(() => CASHBACK_SOURCESchema)])
					.optional(),
				status: z
					.union([z.lazy(() => EnumCASHBACK_STATUSFilterSchema), z.lazy(() => CASHBACK_STATUSSchema)])
					.optional(),
				description: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				earned_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				expires_at: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				converted_at: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				taxi_order_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				delivery_order_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				user: z
					.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional(),
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
			})
			.strict()
	);

export default cashbackWhereUniqueInputSchema;
