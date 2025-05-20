import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressCreateNestedManyWithoutAddressInputSchema } from './user_addressCreateNestedManyWithoutAddressInputSchema';
import { businessCreateNestedManyWithoutAddressInputSchema } from './businessCreateNestedManyWithoutAddressInputSchema';
import { business_usersCreateNestedManyWithoutOperating_addressInputSchema } from './business_usersCreateNestedManyWithoutOperating_addressInputSchema';
import { daily_meals_subscriptionsCreateNestedManyWithoutAddressInputSchema } from './daily_meals_subscriptionsCreateNestedManyWithoutAddressInputSchema';

export const addressesCreateWithoutBusinesses_delivery_addressInputSchema: z.ZodType<Prisma.addressesCreateWithoutBusinesses_delivery_addressInput> = z.object({
  address_id: z.string().uuid().optional(),
  address: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  street: z.string().optional().nullable(),
  house_number: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postal: z.string().optional().nullable(),
  users: z.lazy(() => user_addressCreateNestedManyWithoutAddressInputSchema).optional(),
  businesses: z.lazy(() => businessCreateNestedManyWithoutAddressInputSchema).optional(),
  business_users: z.lazy(() => business_usersCreateNestedManyWithoutOperating_addressInputSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default addressesCreateWithoutBusinesses_delivery_addressInputSchema;
