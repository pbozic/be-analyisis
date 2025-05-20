import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { menu_itemsUpdateallergensInputSchema } from './menu_itemsUpdateallergensInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { menu_itemsUpdatesidesInputSchema } from './menu_itemsUpdatesidesInputSchema';
import { menu_itemsUpdateextrasInputSchema } from './menu_itemsUpdateextrasInputSchema';
import { menu_itemsUpdateavailabilityInputSchema } from './menu_itemsUpdateavailabilityInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { menu_categoriesUpdateOneWithoutMenu_itemsNestedInputSchema } from './menu_categoriesUpdateOneWithoutMenu_itemsNestedInputSchema';

export const menu_itemsUpdateWithoutDocumentsInputSchema: z.ZodType<Prisma.menu_itemsUpdateWithoutDocumentsInput> = z
	.object({
		menu_item_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		names: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		description: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		allergens: z.union([z.lazy(() => menu_itemsUpdateallergensInputSchema), z.string().array()]).optional(),
		spicy_level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		unit_size: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
		discount: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		sides: z.union([z.lazy(() => menu_itemsUpdatesidesInputSchema), z.string().array()]).optional(),
		extras: z.union([z.lazy(() => menu_itemsUpdateextrasInputSchema), z.string().array()]).optional(),
		ingredients: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		availability: z.union([z.lazy(() => menu_itemsUpdateavailabilityInputSchema), z.string().array()]).optional(),
		business_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		daily_date: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		is_enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
		menu_category_order_index: z
			.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		menu_category: z.lazy(() => menu_categoriesUpdateOneWithoutMenu_itemsNestedInputSchema).optional(),
	})
	.strict();

export default menu_itemsUpdateWithoutDocumentsInputSchema;
