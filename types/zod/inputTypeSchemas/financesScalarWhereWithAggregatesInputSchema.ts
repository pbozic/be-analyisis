import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const financesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.financesScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => financesScalarWhereWithAggregatesInputSchema),
				z.lazy(() => financesScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => financesScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => financesScalarWhereWithAggregatesInputSchema),
				z.lazy(() => financesScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		finance_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		bank_name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		account_holder: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		account_number: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		payment_preferences: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
		created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default financesScalarWhereWithAggregatesInputSchema;
