import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { user_addressUpdateManyWithoutAddressNestedInputSchema } from './user_addressUpdateManyWithoutAddressNestedInputSchema';
import { businessUpdateManyWithoutAddressNestedInputSchema } from './businessUpdateManyWithoutAddressNestedInputSchema';
import { businessUpdateManyWithoutDelivery_addressNestedInputSchema } from './businessUpdateManyWithoutDelivery_addressNestedInputSchema';
import { daily_meals_subscriptionsUpdateManyWithoutAddressNestedInputSchema } from './daily_meals_subscriptionsUpdateManyWithoutAddressNestedInputSchema';

export const addressesUpdateWithoutBusiness_usersInputSchema: z.ZodType<Prisma.addressesUpdateWithoutBusiness_usersInput> = z.object({
  address_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  latitude: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  longitude: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  house_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postal: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => user_addressUpdateManyWithoutAddressNestedInputSchema).optional(),
  businesses: z.lazy(() => businessUpdateManyWithoutAddressNestedInputSchema).optional(),
  businesses_delivery_address: z.lazy(() => businessUpdateManyWithoutDelivery_addressNestedInputSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsUpdateManyWithoutAddressNestedInputSchema).optional()
}).strict();

export default addressesUpdateWithoutBusiness_usersInputSchema;
