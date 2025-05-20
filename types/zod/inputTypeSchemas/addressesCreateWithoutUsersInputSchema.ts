import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedManyWithoutAddressInputSchema } from './businessCreateNestedManyWithoutAddressInputSchema';
import { businessCreateNestedManyWithoutDelivery_addressInputSchema } from './businessCreateNestedManyWithoutDelivery_addressInputSchema';
import { business_usersCreateNestedManyWithoutOperating_addressInputSchema } from './business_usersCreateNestedManyWithoutOperating_addressInputSchema';
import { daily_meals_subscriptionsCreateNestedManyWithoutAddressInputSchema } from './daily_meals_subscriptionsCreateNestedManyWithoutAddressInputSchema';

export const addressesCreateWithoutUsersInputSchema: z.ZodType<Prisma.addressesCreateWithoutUsersInput> = z.object({
  address_id: z.string().uuid().optional(),
  address: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  street: z.string().optional().nullable(),
  house_number: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postal: z.string().optional().nullable(),
  businesses: z.lazy(() => businessCreateNestedManyWithoutAddressInputSchema).optional(),
  businesses_delivery_address: z.lazy(() => businessCreateNestedManyWithoutDelivery_addressInputSchema).optional(),
  business_users: z.lazy(() => business_usersCreateNestedManyWithoutOperating_addressInputSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default addressesCreateWithoutUsersInputSchema;
