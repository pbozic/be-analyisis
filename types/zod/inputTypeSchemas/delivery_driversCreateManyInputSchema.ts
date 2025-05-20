import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { delivery_driversCreateregionsInputSchema } from './delivery_driversCreateregionsInputSchema';

export const delivery_driversCreateManyInputSchema: z.ZodType<Prisma.delivery_driversCreateManyInput> = z.object({
  delivery_driver_id: z.string().uuid().optional(),
  online: z.boolean().optional().nullable(),
  on_order: z.boolean().optional().nullable(),
  delivers_daily_meals: z.boolean().optional().nullable(),
  working_hours: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  business_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  delivery_timeline: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  last_ping_at: z.coerce.date().optional(),
  on_daily_meals: z.boolean().optional().nullable(),
  is_inactive: z.boolean().optional().nullable(),
  scheduled_meals_route: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  regions: z.union([ z.lazy(() => delivery_driversCreateregionsInputSchema),z.string().array() ]).optional(),
  partner_cash_balance: z.number().optional().nullable(),
  daily_meal_business_id: z.string().optional().nullable()
}).strict();

export default delivery_driversCreateManyInputSchema;
