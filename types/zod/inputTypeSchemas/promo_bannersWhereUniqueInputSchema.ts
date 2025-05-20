import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersWhereInputSchema } from './promo_bannersWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FilesRelationFilterSchema } from './FilesRelationFilterSchema';
import { filesWhereInputSchema } from './filesWhereInputSchema';
import { Promo_adsNullableRelationFilterSchema } from './Promo_adsNullableRelationFilterSchema';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';

export const promo_bannersWhereUniqueInputSchema: z.ZodType<Prisma.promo_bannersWhereUniqueInput> = z
	.object({
		promo_banners_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				promo_banners_id: z.string().uuid().optional(),
				AND: z
					.union([
						z.lazy(() => promo_bannersWhereInputSchema),
						z.lazy(() => promo_bannersWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => promo_bannersWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => promo_bannersWhereInputSchema),
						z.lazy(() => promo_bannersWhereInputSchema).array(),
					])
					.optional(),
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
				files: z
					.union([z.lazy(() => FilesRelationFilterSchema), z.lazy(() => filesWhereInputSchema)])
					.optional(),
				promo_ads: z
					.union([
						z.lazy(() => Promo_adsNullableRelationFilterSchema),
						z.lazy(() => promo_adsWhereInputSchema),
					])
					.optional()
					.nullable(),
			})
			.strict()
	);

export default promo_bannersWhereUniqueInputSchema;
