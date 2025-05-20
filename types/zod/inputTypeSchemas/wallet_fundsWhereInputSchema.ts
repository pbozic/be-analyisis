import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumFUNDS_TYPEFilterSchema } from './EnumFUNDS_TYPEFilterSchema';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { EnumCREDIT_STATUSNullableFilterSchema } from './EnumCREDIT_STATUSNullableFilterSchema';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';
import { ReferralsNullableRelationFilterSchema } from './ReferralsNullableRelationFilterSchema';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { TransactionsListRelationFilterSchema } from './TransactionsListRelationFilterSchema';

export const wallet_fundsWhereInputSchema: z.ZodType<Prisma.wallet_fundsWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => wallet_fundsWhereInputSchema), z.lazy(() => wallet_fundsWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => wallet_fundsWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => wallet_fundsWhereInputSchema), z.lazy(() => wallet_fundsWhereInputSchema).array()])
			.optional(),
		wallet_funds_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		referral_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		charge_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		amount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		reserved_order: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		reserved_daily_meals_subscription: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		reserved_business: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		expires_at: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		type: z.union([z.lazy(() => EnumFUNDS_TYPEFilterSchema), z.lazy(() => FUNDS_TYPESchema)]).optional(),
		status: z
			.union([z.lazy(() => EnumCREDIT_STATUSNullableFilterSchema), z.lazy(() => CREDIT_STATUSSchema)])
			.optional()
			.nullable(),
		referral: z
			.union([z.lazy(() => ReferralsNullableRelationFilterSchema), z.lazy(() => referralsWhereInputSchema)])
			.optional()
			.nullable(),
		user: z.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)]).optional(),
		transactions: z.lazy(() => TransactionsListRelationFilterSchema).optional(),
	})
	.strict();

export default wallet_fundsWhereInputSchema;
