import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { businessUpdateOneRequiredWithoutMenusNestedInputSchema } from './businessUpdateOneRequiredWithoutMenusNestedInputSchema';
import { menu_categoriesUpdateManyWithoutMenuNestedInputSchema } from './menu_categoriesUpdateManyWithoutMenuNestedInputSchema';

export const menusUpdateWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menusUpdateWithoutDaily_meal_subscribersInput> =
	z
		.object({
			menu_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			active: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			menu_categories_ordered: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			isDailyMeal: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			date: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			business: z.lazy(() => businessUpdateOneRequiredWithoutMenusNestedInputSchema).optional(),
			categories: z.lazy(() => menu_categoriesUpdateManyWithoutMenuNestedInputSchema).optional(),
		})
		.strict();

export default menusUpdateWithoutDaily_meal_subscribersInputSchema;
