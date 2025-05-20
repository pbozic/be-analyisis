import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { user_addressUncheckedUpdateManyWithoutAddressNestedInputSchema } from './user_addressUncheckedUpdateManyWithoutAddressNestedInputSchema';
import { businessUncheckedUpdateManyWithoutDelivery_addressNestedInputSchema } from './businessUncheckedUpdateManyWithoutDelivery_addressNestedInputSchema';
import { business_usersUncheckedUpdateManyWithoutOperating_addressNestedInputSchema } from './business_usersUncheckedUpdateManyWithoutOperating_addressNestedInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateManyWithoutAddressNestedInputSchema } from './daily_meals_subscriptionsUncheckedUpdateManyWithoutAddressNestedInputSchema';

export const addressesUncheckedUpdateWithoutBusinessesInputSchema: z.ZodType<Prisma.addressesUncheckedUpdateWithoutBusinessesInput> =
	z
		.object({
			address_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			address: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			street: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			house_number: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			city: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			country: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			postal: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			users: z.lazy(() => user_addressUncheckedUpdateManyWithoutAddressNestedInputSchema).optional(),
			businesses_delivery_address: z
				.lazy(() => businessUncheckedUpdateManyWithoutDelivery_addressNestedInputSchema)
				.optional(),
			business_users: z
				.lazy(() => business_usersUncheckedUpdateManyWithoutOperating_addressNestedInputSchema)
				.optional(),
			daily_meals_subscriptions: z
				.lazy(() => daily_meals_subscriptionsUncheckedUpdateManyWithoutAddressNestedInputSchema)
				.optional(),
		})
		.strict();

export default addressesUncheckedUpdateWithoutBusinessesInputSchema;
