import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { menu_itemsCreateallergensInputSchema } from './menu_itemsCreateallergensInputSchema';
import { menu_itemsCreatesidesInputSchema } from './menu_itemsCreatesidesInputSchema';
import { menu_itemsCreateextrasInputSchema } from './menu_itemsCreateextrasInputSchema';
import { menu_itemsCreateavailabilityInputSchema } from './menu_itemsCreateavailabilityInputSchema';

export const menu_itemsUncheckedCreateWithoutDocumentsInputSchema: z.ZodType<Prisma.menu_itemsUncheckedCreateWithoutDocumentsInput> =
	z
		.object({
			menu_item_id: z.string().uuid().optional(),
			names: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			image: z.string().optional().nullable(),
			description: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			allergens: z.union([z.lazy(() => menu_itemsCreateallergensInputSchema), z.string().array()]).optional(),
			spicy_level: z.number().int(),
			unit_size: z.string(),
			price: z.number().optional(),
			discount: z.number().optional().nullable(),
			sides: z.union([z.lazy(() => menu_itemsCreatesidesInputSchema), z.string().array()]).optional(),
			extras: z.union([z.lazy(() => menu_itemsCreateextrasInputSchema), z.string().array()]).optional(),
			ingredients: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			availability: z
				.union([z.lazy(() => menu_itemsCreateavailabilityInputSchema), z.string().array()])
				.optional(),
			business_id: z.string(),
			menu_category_id: z.string().optional().nullable(),
			daily_date: z.coerce.date().optional().nullable(),
			is_enabled: z.boolean().optional(),
			menu_category_order_index: z.number().int().optional().nullable(),
		})
		.strict();

export default menu_itemsUncheckedCreateWithoutDocumentsInputSchema;
