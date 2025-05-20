import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsUniqueBusinessClientCompoundUniqueInputSchema } from './business_clientsUniqueBusinessClientCompoundUniqueInputSchema';
import { business_clientsWhereInputSchema } from './business_clientsWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { Taxi_ordersListRelationFilterSchema } from './Taxi_ordersListRelationFilterSchema';

export const business_clientsWhereUniqueInputSchema: z.ZodType<Prisma.business_clientsWhereUniqueInput> = z
	.union([
		z.object({
			business_clients_id: z.string().uuid(),
			uniqueBusinessClient: z.lazy(() => business_clientsUniqueBusinessClientCompoundUniqueInputSchema),
		}),
		z.object({
			business_clients_id: z.string().uuid(),
		}),
		z.object({
			uniqueBusinessClient: z.lazy(() => business_clientsUniqueBusinessClientCompoundUniqueInputSchema),
		}),
	])
	.and(
		z
			.object({
				business_clients_id: z.string().uuid().optional(),
				uniqueBusinessClient: z
					.lazy(() => business_clientsUniqueBusinessClientCompoundUniqueInputSchema)
					.optional(),
				AND: z
					.union([
						z.lazy(() => business_clientsWhereInputSchema),
						z.lazy(() => business_clientsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => business_clientsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => business_clientsWhereInputSchema),
						z.lazy(() => business_clientsWhereInputSchema).array(),
					])
					.optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				first_name: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				last_name: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				email: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				telephone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				telephone_code: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				telephone_number: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				business: z
					.union([z.lazy(() => BusinessNullableRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional()
					.nullable(),
				taxi_orders: z.lazy(() => Taxi_ordersListRelationFilterSchema).optional(),
			})
			.strict()
	);

export default business_clientsWhereUniqueInputSchema;
