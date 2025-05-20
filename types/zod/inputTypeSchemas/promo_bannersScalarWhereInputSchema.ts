import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';

export const promo_bannersScalarWhereInputSchema: z.ZodType<Prisma.promo_bannersScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => promo_bannersScalarWhereInputSchema),
				z.lazy(() => promo_bannersScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => promo_bannersScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => promo_bannersScalarWhereInputSchema),
				z.lazy(() => promo_bannersScalarWhereInputSchema).array(),
			])
			.optional(),
		promo_banners_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		size: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		text: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		promo_section_buy_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		file_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		promo_ads_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
	})
	.strict();

export default promo_bannersScalarWhereInputSchema;
