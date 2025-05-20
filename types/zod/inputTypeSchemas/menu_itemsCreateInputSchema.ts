import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { menu_itemsCreateallergensInputSchema } from './menu_itemsCreateallergensInputSchema';
import { menu_itemsCreatesidesInputSchema } from './menu_itemsCreatesidesInputSchema';
import { menu_itemsCreateextrasInputSchema } from './menu_itemsCreateextrasInputSchema';
import { menu_itemsCreateavailabilityInputSchema } from './menu_itemsCreateavailabilityInputSchema';
import { menu_categoriesCreateNestedOneWithoutMenu_itemsInputSchema } from './menu_categoriesCreateNestedOneWithoutMenu_itemsInputSchema';
import { documentsCreateNestedManyWithoutMenu_itemsInputSchema } from './documentsCreateNestedManyWithoutMenu_itemsInputSchema';

export const menu_itemsCreateInputSchema: z.ZodType<Prisma.menu_itemsCreateInput> = z
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
		availability: z.union([z.lazy(() => menu_itemsCreateavailabilityInputSchema), z.string().array()]).optional(),
		business_id: z.string(),
		daily_date: z.coerce.date().optional().nullable(),
		is_enabled: z.boolean().optional(),
		menu_category_order_index: z.number().int().optional().nullable(),
		menu_category: z.lazy(() => menu_categoriesCreateNestedOneWithoutMenu_itemsInputSchema).optional(),
		documents: z.lazy(() => documentsCreateNestedManyWithoutMenu_itemsInputSchema).optional(),
	})
	.strict();

export default menu_itemsCreateInputSchema;
