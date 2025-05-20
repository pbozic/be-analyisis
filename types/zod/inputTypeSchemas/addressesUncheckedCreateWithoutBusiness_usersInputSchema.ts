import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressUncheckedCreateNestedManyWithoutAddressInputSchema } from './user_addressUncheckedCreateNestedManyWithoutAddressInputSchema';
import { businessUncheckedCreateNestedManyWithoutAddressInputSchema } from './businessUncheckedCreateNestedManyWithoutAddressInputSchema';
import { businessUncheckedCreateNestedManyWithoutDelivery_addressInputSchema } from './businessUncheckedCreateNestedManyWithoutDelivery_addressInputSchema';
import { daily_meals_subscriptionsUncheckedCreateNestedManyWithoutAddressInputSchema } from './daily_meals_subscriptionsUncheckedCreateNestedManyWithoutAddressInputSchema';

export const addressesUncheckedCreateWithoutBusiness_usersInputSchema: z.ZodType<Prisma.addressesUncheckedCreateWithoutBusiness_usersInput> = z.object({
  address_id: z.string().uuid().optional(),
  address: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  street: z.string().optional().nullable(),
  house_number: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postal: z.string().optional().nullable(),
  users: z.lazy(() => user_addressUncheckedCreateNestedManyWithoutAddressInputSchema).optional(),
  businesses: z.lazy(() => businessUncheckedCreateNestedManyWithoutAddressInputSchema).optional(),
  businesses_delivery_address: z.lazy(() => businessUncheckedCreateNestedManyWithoutDelivery_addressInputSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsUncheckedCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default addressesUncheckedCreateWithoutBusiness_usersInputSchema;
