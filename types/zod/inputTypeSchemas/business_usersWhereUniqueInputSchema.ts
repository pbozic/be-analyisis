import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersUniqueBusinessUserCompoundUniqueInputSchema } from './business_usersUniqueBusinessUserCompoundUniqueInputSchema';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { EnumCOMPANY_ROLEFilterSchema } from './EnumCOMPANY_ROLEFilterSchema';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { AddressesNullableRelationFilterSchema } from './AddressesNullableRelationFilterSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { AllowancesNullableRelationFilterSchema } from './AllowancesNullableRelationFilterSchema';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';
import { Taxi_ordersListRelationFilterSchema } from './Taxi_ordersListRelationFilterSchema';

export const business_usersWhereUniqueInputSchema: z.ZodType<Prisma.business_usersWhereUniqueInput> = z
	.union([
		z.object({
			business_users_id: z.string().uuid(),
			user_id: z.string(),
			uniqueBusinessUser: z.lazy(() => business_usersUniqueBusinessUserCompoundUniqueInputSchema),
		}),
		z.object({
			business_users_id: z.string().uuid(),
			user_id: z.string(),
		}),
		z.object({
			business_users_id: z.string().uuid(),
			uniqueBusinessUser: z.lazy(() => business_usersUniqueBusinessUserCompoundUniqueInputSchema),
		}),
		z.object({
			business_users_id: z.string().uuid(),
		}),
		z.object({
			user_id: z.string(),
			uniqueBusinessUser: z.lazy(() => business_usersUniqueBusinessUserCompoundUniqueInputSchema),
		}),
		z.object({
			user_id: z.string(),
		}),
		z.object({
			uniqueBusinessUser: z.lazy(() => business_usersUniqueBusinessUserCompoundUniqueInputSchema),
		}),
	])
	.and(
		z
			.object({
				business_users_id: z.string().uuid().optional(),
				user_id: z.string().optional(),
				uniqueBusinessUser: z.lazy(() => business_usersUniqueBusinessUserCompoundUniqueInputSchema).optional(),
				AND: z
					.union([
						z.lazy(() => business_usersWhereInputSchema),
						z.lazy(() => business_usersWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => business_usersWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => business_usersWhereInputSchema),
						z.lazy(() => business_usersWhereInputSchema).array(),
					])
					.optional(),
				online: z
					.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
					.optional()
					.nullable(),
				company_role: z
					.union([z.lazy(() => EnumCOMPANY_ROLEFilterSchema), z.lazy(() => COMPANY_ROLESchema)])
					.optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				operating_address_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				users: z
					.union([z.lazy(() => UsersNullableRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional()
					.nullable(),
				business: z
					.union([z.lazy(() => BusinessNullableRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional()
					.nullable(),
				operating_address: z
					.union([
						z.lazy(() => AddressesNullableRelationFilterSchema),
						z.lazy(() => addressesWhereInputSchema),
					])
					.optional()
					.nullable(),
				allowance: z
					.union([
						z.lazy(() => AllowancesNullableRelationFilterSchema),
						z.lazy(() => allowancesWhereInputSchema),
					])
					.optional()
					.nullable(),
				taxi_orders: z.lazy(() => Taxi_ordersListRelationFilterSchema).optional(),
			})
			.strict()
	);

export default business_usersWhereUniqueInputSchema;
