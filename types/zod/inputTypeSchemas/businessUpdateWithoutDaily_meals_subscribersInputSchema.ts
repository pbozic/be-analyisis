import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema } from './EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';
import { EnumSORTING_TYPEFieldUpdateOperationsInputSchema } from './EnumSORTING_TYPEFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { addressesUpdateOneWithoutBusinessesNestedInputSchema } from './addressesUpdateOneWithoutBusinessesNestedInputSchema';
import { addressesUpdateOneWithoutBusinesses_delivery_addressNestedInputSchema } from './addressesUpdateOneWithoutBusinesses_delivery_addressNestedInputSchema';
import { financesUpdateOneWithoutBusinessNestedInputSchema } from './financesUpdateOneWithoutBusinessNestedInputSchema';
import { business_usersUpdateManyWithoutBusinessNestedInputSchema } from './business_usersUpdateManyWithoutBusinessNestedInputSchema';
import { documentsUpdateManyWithoutBusinessNestedInputSchema } from './documentsUpdateManyWithoutBusinessNestedInputSchema';
import { businessUpdateOneWithoutChild_businessesNestedInputSchema } from './businessUpdateOneWithoutChild_businessesNestedInputSchema';
import { businessUpdateManyWithoutParent_businessNestedInputSchema } from './businessUpdateManyWithoutParent_businessNestedInputSchema';
import { taxi_ordersUpdateManyWithoutBusinessNestedInputSchema } from './taxi_ordersUpdateManyWithoutBusinessNestedInputSchema';
import { delivery_ordersUpdateManyWithoutBusinessNestedInputSchema } from './delivery_ordersUpdateManyWithoutBusinessNestedInputSchema';
import { menusUpdateManyWithoutBusinessNestedInputSchema } from './menusUpdateManyWithoutBusinessNestedInputSchema';
import { reviewableUpdateOneWithoutBusinessNestedInputSchema } from './reviewableUpdateOneWithoutBusinessNestedInputSchema';
import { local_productsUpdateOneWithoutBusinessNestedInputSchema } from './local_productsUpdateOneWithoutBusinessNestedInputSchema';
import { word_buyUpdateManyWithoutBusinessNestedInputSchema } from './word_buyUpdateManyWithoutBusinessNestedInputSchema';
import { reservationsUpdateManyWithoutBusinessNestedInputSchema } from './reservationsUpdateManyWithoutBusinessNestedInputSchema';
import { promo_sections_buyUpdateManyWithoutBusinessNestedInputSchema } from './promo_sections_buyUpdateManyWithoutBusinessNestedInputSchema';
import { business_teamsUpdateManyWithoutBusinessNestedInputSchema } from './business_teamsUpdateManyWithoutBusinessNestedInputSchema';
import { order_lobbiesUpdateManyWithoutBusinessNestedInputSchema } from './order_lobbiesUpdateManyWithoutBusinessNestedInputSchema';
import { user_favorite_businessesUpdateManyWithoutBusinessesNestedInputSchema } from './user_favorite_businessesUpdateManyWithoutBusinessesNestedInputSchema';
import { scoring_pointsUpdateManyWithoutBusinessesNestedInputSchema } from './scoring_pointsUpdateManyWithoutBusinessesNestedInputSchema';
import { delivery_driversUpdateManyWithoutDaily_meal_businessNestedInputSchema } from './delivery_driversUpdateManyWithoutDaily_meal_businessNestedInputSchema';
import { late_eventsUpdateManyWithoutBusinessesNestedInputSchema } from './late_eventsUpdateManyWithoutBusinessesNestedInputSchema';
import { fiscal_devicesUpdateOneWithoutBusinessesNestedInputSchema } from './fiscal_devicesUpdateOneWithoutBusinessesNestedInputSchema';
import { account_actionsUpdateManyWithoutBusinessNestedInputSchema } from './account_actionsUpdateManyWithoutBusinessNestedInputSchema';
import { business_clientsUpdateManyWithoutBusinessNestedInputSchema } from './business_clientsUpdateManyWithoutBusinessNestedInputSchema';

export const businessUpdateWithoutDaily_meals_subscribersInputSchema: z.ZodType<Prisma.businessUpdateWithoutDaily_meals_subscribersInput> =
	z
		.object({
			business_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
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
			purchase_order_limit_amount: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			address: z.lazy(() => addressesUpdateOneWithoutBusinessesNestedInputSchema).optional(),
			delivery_address: z
				.lazy(() => addressesUpdateOneWithoutBusinesses_delivery_addressNestedInputSchema)
				.optional(),
			finances: z.lazy(() => financesUpdateOneWithoutBusinessNestedInputSchema).optional(),
			business_users: z.lazy(() => business_usersUpdateManyWithoutBusinessNestedInputSchema).optional(),
			documents: z.lazy(() => documentsUpdateManyWithoutBusinessNestedInputSchema).optional(),
			parent_business: z.lazy(() => businessUpdateOneWithoutChild_businessesNestedInputSchema).optional(),
			child_businesses: z.lazy(() => businessUpdateManyWithoutParent_businessNestedInputSchema).optional(),
			taxi_orders: z.lazy(() => taxi_ordersUpdateManyWithoutBusinessNestedInputSchema).optional(),
			delivery_orders: z.lazy(() => delivery_ordersUpdateManyWithoutBusinessNestedInputSchema).optional(),
			menus: z.lazy(() => menusUpdateManyWithoutBusinessNestedInputSchema).optional(),
			reviewable: z.lazy(() => reviewableUpdateOneWithoutBusinessNestedInputSchema).optional(),
			word_buy_stripe_product: z.lazy(() => local_productsUpdateOneWithoutBusinessNestedInputSchema).optional(),
			word_buys: z.lazy(() => word_buyUpdateManyWithoutBusinessNestedInputSchema).optional(),
			reservations: z.lazy(() => reservationsUpdateManyWithoutBusinessNestedInputSchema).optional(),
			promo_sections: z.lazy(() => promo_sections_buyUpdateManyWithoutBusinessNestedInputSchema).optional(),
			business_teams: z.lazy(() => business_teamsUpdateManyWithoutBusinessNestedInputSchema).optional(),
			business_order_lobbies: z.lazy(() => order_lobbiesUpdateManyWithoutBusinessNestedInputSchema).optional(),
			user_favorite_businesses: z
				.lazy(() => user_favorite_businessesUpdateManyWithoutBusinessesNestedInputSchema)
				.optional(),
			scoring_points: z.lazy(() => scoring_pointsUpdateManyWithoutBusinessesNestedInputSchema).optional(),
			daily_meal_drivers: z
				.lazy(() => delivery_driversUpdateManyWithoutDaily_meal_businessNestedInputSchema)
				.optional(),
			late_events: z.lazy(() => late_eventsUpdateManyWithoutBusinessesNestedInputSchema).optional(),
			fiscal_device: z.lazy(() => fiscal_devicesUpdateOneWithoutBusinessesNestedInputSchema).optional(),
			account_actions: z.lazy(() => account_actionsUpdateManyWithoutBusinessNestedInputSchema).optional(),
			business_clients: z.lazy(() => business_clientsUpdateManyWithoutBusinessNestedInputSchema).optional(),
		})
		.strict();

export default businessUpdateWithoutDaily_meals_subscribersInputSchema;
