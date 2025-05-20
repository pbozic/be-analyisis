import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Local_pricesListRelationFilterSchema } from './Local_pricesListRelationFilterSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const local_productsWhereInputSchema: z.ZodType<Prisma.local_productsWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => local_productsWhereInputSchema), z.lazy(() => local_productsWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => local_productsWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => local_productsWhereInputSchema), z.lazy(() => local_productsWhereInputSchema).array()])
			.optional(),
		local_product_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		currency: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		stripe_product_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		prices: z.lazy(() => Local_pricesListRelationFilterSchema).optional(),
		business: z
			.union([z.lazy(() => BusinessRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
			.optional(),
	})
	.strict();

export default local_productsWhereInputSchema;
