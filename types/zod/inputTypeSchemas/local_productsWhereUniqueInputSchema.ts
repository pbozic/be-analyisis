import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Local_pricesListRelationFilterSchema } from './Local_pricesListRelationFilterSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const local_productsWhereUniqueInputSchema: z.ZodType<Prisma.local_productsWhereUniqueInput> = z
	.union([
		z.object({
			local_product_id: z.string().uuid(),
			stripe_product_id: z.string(),
			business_id: z.string(),
		}),
		z.object({
			local_product_id: z.string().uuid(),
			stripe_product_id: z.string(),
		}),
		z.object({
			local_product_id: z.string().uuid(),
			business_id: z.string(),
		}),
		z.object({
			local_product_id: z.string().uuid(),
		}),
		z.object({
			stripe_product_id: z.string(),
			business_id: z.string(),
		}),
		z.object({
			stripe_product_id: z.string(),
		}),
		z.object({
			business_id: z.string(),
		}),
	])
	.and(
		z
			.object({
				local_product_id: z.string().uuid().optional(),
				stripe_product_id: z.string().optional(),
				business_id: z.string().optional(),
				AND: z
					.union([
						z.lazy(() => local_productsWhereInputSchema),
						z.lazy(() => local_productsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => local_productsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => local_productsWhereInputSchema),
						z.lazy(() => local_productsWhereInputSchema).array(),
					])
					.optional(),
				name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				description: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				currency: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				prices: z.lazy(() => Local_pricesListRelationFilterSchema).optional(),
				business: z
					.union([z.lazy(() => BusinessRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional(),
			})
			.strict()
	);

export default local_productsWhereUniqueInputSchema;
