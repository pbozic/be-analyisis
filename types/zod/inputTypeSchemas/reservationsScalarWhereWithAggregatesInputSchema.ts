import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumRESERVATION_STATUSWithAggregatesFilterSchema } from './EnumRESERVATION_STATUSWithAggregatesFilterSchema';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const reservationsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.reservationsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => reservationsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => reservationsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => reservationsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => reservationsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => reservationsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			reservation_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			seats: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			date: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			time: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			datetime: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			business_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			user_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			status: z
				.union([
					z.lazy(() => EnumRESERVATION_STATUSWithAggregatesFilterSchema),
					z.lazy(() => RESERVATION_STATUSSchema),
				])
				.optional(),
			table: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
		})
		.strict();

export default reservationsScalarWhereWithAggregatesInputSchema;
