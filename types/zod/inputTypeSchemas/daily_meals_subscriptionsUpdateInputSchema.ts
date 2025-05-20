import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { menu_categoriesUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema } from './menu_categoriesUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema';
import { usersUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema } from './usersUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema';
import { businessUpdateOneRequiredWithoutDaily_meals_subscribersNestedInputSchema } from './businessUpdateOneRequiredWithoutDaily_meals_subscribersNestedInputSchema';
import { menusUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema } from './menusUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema';
import { addressesUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema } from './addressesUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema';

export const daily_meals_subscriptionsUpdateInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateInput> = z
	.object({
		daily_meals_subscriptions_id: z
			.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		grouped_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		order_created: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		restaurant_comment: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		courier_comment: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		menu_category: z
			.lazy(() => menu_categoriesUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema)
			.optional(),
		user: z.lazy(() => usersUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema).optional(),
		business: z.lazy(() => businessUpdateOneRequiredWithoutDaily_meals_subscribersNestedInputSchema).optional(),
		menu: z.lazy(() => menusUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema).optional(),
		address: z.lazy(() => addressesUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema).optional(),
	})
	.strict();

export default daily_meals_subscriptionsUpdateInputSchema;
