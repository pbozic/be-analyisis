import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const promo_bannersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.promo_bannersScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => promo_bannersScalarWhereWithAggregatesInputSchema),
					z.lazy(() => promo_bannersScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => promo_bannersScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => promo_bannersScalarWhereWithAggregatesInputSchema),
					z.lazy(() => promo_bannersScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			promo_banners_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			size: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			text: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			promo_section_buy_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			file_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			promo_ads_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
		})
		.strict();

export default promo_bannersScalarWhereWithAggregatesInputSchema;
