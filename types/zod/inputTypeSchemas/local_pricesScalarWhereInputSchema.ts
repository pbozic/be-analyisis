import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const local_pricesScalarWhereInputSchema: z.ZodType<Prisma.local_pricesScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => local_pricesScalarWhereInputSchema),
				z.lazy(() => local_pricesScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => local_pricesScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => local_pricesScalarWhereInputSchema),
				z.lazy(() => local_pricesScalarWhereInputSchema).array(),
			])
			.optional(),
		local_prices_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		local_product_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		currency: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		stripe_price_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		stripe_product_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		tier: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default local_pricesScalarWhereInputSchema;
