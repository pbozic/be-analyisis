import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const business_clientsScalarWhereInputSchema: z.ZodType<Prisma.business_clientsScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => business_clientsScalarWhereInputSchema),
				z.lazy(() => business_clientsScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => business_clientsScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => business_clientsScalarWhereInputSchema),
				z.lazy(() => business_clientsScalarWhereInputSchema).array(),
			])
			.optional(),
		business_clients_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
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
	})
	.strict();

export default business_clientsScalarWhereInputSchema;
