import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { User_addressListRelationFilterSchema } from './User_addressListRelationFilterSchema';
import { BusinessListRelationFilterSchema } from './BusinessListRelationFilterSchema';
import { Business_usersListRelationFilterSchema } from './Business_usersListRelationFilterSchema';
import { Daily_meals_subscriptionsListRelationFilterSchema } from './Daily_meals_subscriptionsListRelationFilterSchema';

export const addressesWhereInputSchema: z.ZodType<Prisma.addressesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => addressesWhereInputSchema),z.lazy(() => addressesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => addressesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => addressesWhereInputSchema),z.lazy(() => addressesWhereInputSchema).array() ]).optional(),
  address_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  latitude: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  longitude: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  street: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  house_number: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postal: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  users: z.lazy(() => User_addressListRelationFilterSchema).optional(),
  businesses: z.lazy(() => BusinessListRelationFilterSchema).optional(),
  businesses_delivery_address: z.lazy(() => BusinessListRelationFilterSchema).optional(),
  business_users: z.lazy(() => Business_usersListRelationFilterSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => Daily_meals_subscriptionsListRelationFilterSchema).optional()
}).strict();

export default addressesWhereInputSchema;
