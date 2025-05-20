import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumPROMO_SERVICE_TYPESFilterSchema } from './EnumPROMO_SERVICE_TYPESFilterSchema';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { Promo_bannersListRelationFilterSchema } from './Promo_bannersListRelationFilterSchema';
import { Promo_ads_categoryListRelationFilterSchema } from './Promo_ads_categoryListRelationFilterSchema';

export const promo_adsWhereInputSchema: z.ZodType<Prisma.promo_adsWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => promo_adsWhereInputSchema), z.lazy(() => promo_adsWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => promo_adsWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => promo_adsWhereInputSchema), z.lazy(() => promo_adsWhereInputSchema).array()])
			.optional(),
		promo_ads_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		text: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		tag: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		service_type: z
			.union([z.lazy(() => EnumPROMO_SERVICE_TYPESFilterSchema), z.lazy(() => PROMO_SERVICE_TYPESSchema)])
			.optional(),
		discount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		active: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		code: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		active_at: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		active_until: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		banner: z.lazy(() => Promo_bannersListRelationFilterSchema).optional(),
		categories: z.lazy(() => Promo_ads_categoryListRelationFilterSchema).optional(),
	})
	.strict();

export default promo_adsWhereInputSchema;
