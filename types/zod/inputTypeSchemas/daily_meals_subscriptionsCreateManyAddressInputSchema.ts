import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const daily_meals_subscriptionsCreateManyAddressInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateManyAddressInput> = z.object({
  daily_meals_subscriptions_id: z.string().uuid().optional(),
  grouped_id: z.string(),
  user_id: z.string(),
  business_id: z.string(),
  menu_id: z.string(),
  menu_categories_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  date: z.coerce.date(),
  quantity: z.number().int().optional(),
  order_created: z.coerce.date().optional().nullable(),
  restaurant_comment: z.string().optional().nullable(),
  courier_comment: z.string().optional().nullable()
}).strict();

export default daily_meals_subscriptionsCreateManyAddressInputSchema;
