import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateNestedOneWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesCreateNestedOneWithoutDaily_meal_subscribersInputSchema';
import { usersCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema } from './usersCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema';
import { menusCreateNestedOneWithoutDaily_meal_subscribersInputSchema } from './menusCreateNestedOneWithoutDaily_meal_subscribersInputSchema';
import { addressesCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema } from './addressesCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema';

export const daily_meals_subscriptionsCreateWithoutBusinessInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateWithoutBusinessInput> = z.object({
  daily_meals_subscriptions_id: z.string().uuid().optional(),
  grouped_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  date: z.coerce.date(),
  quantity: z.number().int().optional(),
  order_created: z.coerce.date().optional().nullable(),
  restaurant_comment: z.string().optional().nullable(),
  courier_comment: z.string().optional().nullable(),
  menu_category: z.lazy(() => menu_categoriesCreateNestedOneWithoutDaily_meal_subscribersInputSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema),
  menu: z.lazy(() => menusCreateNestedOneWithoutDaily_meal_subscribersInputSchema),
  address: z.lazy(() => addressesCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema)
}).strict();

export default daily_meals_subscriptionsCreateWithoutBusinessInputSchema;
