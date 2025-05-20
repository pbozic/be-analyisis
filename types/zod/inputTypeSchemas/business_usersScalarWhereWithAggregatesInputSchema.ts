import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { EnumCOMPANY_ROLEWithAggregatesFilterSchema } from './EnumCOMPANY_ROLEWithAggregatesFilterSchema';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const business_usersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.business_usersScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => business_usersScalarWhereWithAggregatesInputSchema),
					z.lazy(() => business_usersScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => business_usersScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => business_usersScalarWhereWithAggregatesInputSchema),
					z.lazy(() => business_usersScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			business_users_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			online: z
				.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
				.optional()
				.nullable(),
			company_role: z
				.union([z.lazy(() => EnumCOMPANY_ROLEWithAggregatesFilterSchema), z.lazy(() => COMPANY_ROLESchema)])
				.optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			user_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			business_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			operating_address_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
		})
		.strict();

export default business_usersScalarWhereWithAggregatesInputSchema;
