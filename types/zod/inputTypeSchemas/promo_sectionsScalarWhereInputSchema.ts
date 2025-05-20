import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumPROMO_SERVICE_TYPESFilterSchema } from './EnumPROMO_SERVICE_TYPESFilterSchema';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';

export const promo_sectionsScalarWhereInputSchema: z.ZodType<Prisma.promo_sectionsScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => promo_sectionsScalarWhereInputSchema),
				z.lazy(() => promo_sectionsScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => promo_sectionsScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => promo_sectionsScalarWhereInputSchema),
				z.lazy(() => promo_sectionsScalarWhereInputSchema).array(),
			])
			.optional(),
		promo_sections_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		tag: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		active: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		description: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		prices: z.lazy(() => JsonNullableFilterSchema).optional(),
		limits: z.lazy(() => JsonNullableFilterSchema).optional(),
		stripe_product_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		canPurchase: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		t1price: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		t2price: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		t3price: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		order: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		service_type: z
			.union([z.lazy(() => EnumPROMO_SERVICE_TYPESFilterSchema), z.lazy(() => PROMO_SERVICE_TYPESSchema)])
			.optional(),
		promo_duration_days: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		translatable_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		display_cards_per_page: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
	})
	.strict();

export default promo_sectionsScalarWhereInputSchema;
