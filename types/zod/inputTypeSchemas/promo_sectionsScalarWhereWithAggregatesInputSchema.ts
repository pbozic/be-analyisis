import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema } from './EnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';

export const promo_sectionsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.promo_sectionsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => promo_sectionsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => promo_sectionsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => promo_sectionsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => promo_sectionsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => promo_sectionsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			promo_sections_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			tag: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			active: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			description: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			prices: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
			limits: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
			stripe_product_id: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			canPurchase: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			t1price: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			t2price: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			t3price: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			order: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			service_type: z
				.union([
					z.lazy(() => EnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema),
					z.lazy(() => PROMO_SERVICE_TYPESSchema),
				])
				.optional(),
			promo_duration_days: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			translatable_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			display_cards_per_page: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
		})
		.strict();

export default promo_sectionsScalarWhereWithAggregatesInputSchema;
