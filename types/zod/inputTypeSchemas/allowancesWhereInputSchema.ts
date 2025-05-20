import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Group_usersNullableRelationFilterSchema } from './Group_usersNullableRelationFilterSchema';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';
import { Business_usersNullableRelationFilterSchema } from './Business_usersNullableRelationFilterSchema';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';

export const allowancesWhereInputSchema: z.ZodType<Prisma.allowancesWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => allowancesWhereInputSchema), z.lazy(() => allowancesWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => allowancesWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => allowancesWhereInputSchema), z.lazy(() => allowancesWhereInputSchema).array()])
			.optional(),
		allowance_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		group_user_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		business_users_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		amount_taxi_wallet: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		amount_transfer_wallet: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		amount_delivery_wallet: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		amount_any_wallet: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		amount_taxi_purchase_order: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		amount_transfer_purchase_order: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		amount_delivery_purchase_order: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		amount_any_purchase_order: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		user: z
			.union([z.lazy(() => Group_usersNullableRelationFilterSchema), z.lazy(() => group_usersWhereInputSchema)])
			.optional()
			.nullable(),
		business_user: z
			.union([
				z.lazy(() => Business_usersNullableRelationFilterSchema),
				z.lazy(() => business_usersWhereInputSchema),
			])
			.optional()
			.nullable(),
	})
	.strict();

export default allowancesWhereInputSchema;
