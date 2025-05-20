import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema } from './EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';
import { EnumSORTING_TYPEFieldUpdateOperationsInputSchema } from './EnumSORTING_TYPEFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { business_usersUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './business_usersUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { documentsUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './documentsUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { delivery_ordersUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './delivery_ordersUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { menusUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './menusUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { local_productsUncheckedUpdateOneWithoutBusinessNestedInputSchema } from './local_productsUncheckedUpdateOneWithoutBusinessNestedInputSchema';
import { word_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './word_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { reservationsUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './reservationsUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { promo_sections_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './promo_sections_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { business_teamsUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './business_teamsUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { order_lobbiesUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './order_lobbiesUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { user_favorite_businessesUncheckedUpdateManyWithoutBusinessesNestedInputSchema } from './user_favorite_businessesUncheckedUpdateManyWithoutBusinessesNestedInputSchema';
import { scoring_pointsUncheckedUpdateManyWithoutBusinessesNestedInputSchema } from './scoring_pointsUncheckedUpdateManyWithoutBusinessesNestedInputSchema';
import { delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessNestedInputSchema } from './delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessNestedInputSchema';
import { late_eventsUncheckedUpdateManyWithoutBusinessesNestedInputSchema } from './late_eventsUncheckedUpdateManyWithoutBusinessesNestedInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { account_actionsUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './account_actionsUncheckedUpdateManyWithoutBusinessNestedInputSchema';
import { business_clientsUncheckedUpdateManyWithoutBusinessNestedInputSchema } from './business_clientsUncheckedUpdateManyWithoutBusinessNestedInputSchema';

export const businessUncheckedUpdateWithoutChild_businessesInputSchema: z.ZodType<Prisma.businessUncheckedUpdateWithoutChild_businessesInput> =
	z
		.object({
			business_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			address_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			delivery_address_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			finance_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			type: z
				.union([
					z.lazy(() => BUSINESS_TYPESchema),
					z.lazy(() => EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			is_business_unit: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			business_group_name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			description: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tax_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			registration_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			telephone: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			telephone_code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			telephone_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			website_url: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			working_hours: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			seats: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			minimum_order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			offers_daily_meals: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			offers_daily_meals_on_weekend: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			popular: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			new: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			parent_business_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			reviewable_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			stripe_account_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			stripe_customer_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			word_buy_stripe_product_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			word_buy_stripe_subscription_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			daily_users_sorted: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			daily_users_sorting_type: z
				.union([
					z.lazy(() => SORTING_TYPESchema),
					z.lazy(() => EnumSORTING_TYPEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			restaurant_overwhelmed: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			first_activated_at: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			active: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			sales_representative_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			fiscal_devices_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			purchase_order_limit_amount: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			business_users: z.lazy(() => business_usersUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
			documents: z.lazy(() => documentsUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
			taxi_orders: z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
			delivery_orders: z
				.lazy(() => delivery_ordersUncheckedUpdateManyWithoutBusinessNestedInputSchema)
				.optional(),
			menus: z.lazy(() => menusUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
			word_buy_stripe_product: z
				.lazy(() => local_productsUncheckedUpdateOneWithoutBusinessNestedInputSchema)
				.optional(),
			word_buys: z.lazy(() => word_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
			reservations: z.lazy(() => reservationsUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
			promo_sections: z
				.lazy(() => promo_sections_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema)
				.optional(),
			business_teams: z.lazy(() => business_teamsUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
			business_order_lobbies: z
				.lazy(() => order_lobbiesUncheckedUpdateManyWithoutBusinessNestedInputSchema)
				.optional(),
			user_favorite_businesses: z
				.lazy(() => user_favorite_businessesUncheckedUpdateManyWithoutBusinessesNestedInputSchema)
				.optional(),
			scoring_points: z
				.lazy(() => scoring_pointsUncheckedUpdateManyWithoutBusinessesNestedInputSchema)
				.optional(),
			daily_meal_drivers: z
				.lazy(() => delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessNestedInputSchema)
				.optional(),
			late_events: z.lazy(() => late_eventsUncheckedUpdateManyWithoutBusinessesNestedInputSchema).optional(),
			daily_meals_subscribers: z
				.lazy(() => daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessNestedInputSchema)
				.optional(),
			account_actions: z
				.lazy(() => account_actionsUncheckedUpdateManyWithoutBusinessNestedInputSchema)
				.optional(),
			business_clients: z
				.lazy(() => business_clientsUncheckedUpdateManyWithoutBusinessNestedInputSchema)
				.optional(),
		})
		.strict();

export default businessUncheckedUpdateWithoutChild_businessesInputSchema;
