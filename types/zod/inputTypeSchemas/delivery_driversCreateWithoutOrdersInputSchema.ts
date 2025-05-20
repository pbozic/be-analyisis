import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { delivery_driversCreateregionsInputSchema } from './delivery_driversCreateregionsInputSchema';
import { usersCreateNestedOneWithoutDelivery_driverInputSchema } from './usersCreateNestedOneWithoutDelivery_driverInputSchema';
import { vehiclesCreateNestedManyWithoutDelivery_driverInputSchema } from './vehiclesCreateNestedManyWithoutDelivery_driverInputSchema';
import { delivery_order_sentCreateNestedManyWithoutDelivery_driverInputSchema } from './delivery_order_sentCreateNestedManyWithoutDelivery_driverInputSchema';
import { documentsCreateNestedManyWithoutDelivery_driverInputSchema } from './documentsCreateNestedManyWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsCreateNestedManyWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsCreateNestedManyWithoutDelivery_driverInputSchema';
import { businessCreateNestedOneWithoutDaily_meal_driversInputSchema } from './businessCreateNestedOneWithoutDaily_meal_driversInputSchema';

export const delivery_driversCreateWithoutOrdersInputSchema: z.ZodType<Prisma.delivery_driversCreateWithoutOrdersInput> = z.object({
  delivery_driver_id: z.string().uuid().optional(),
  online: z.boolean().optional().nullable(),
  on_order: z.boolean().optional().nullable(),
  delivers_daily_meals: z.boolean().optional().nullable(),
  working_hours: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  business_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  delivery_timeline: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  last_ping_at: z.coerce.date().optional(),
  on_daily_meals: z.boolean().optional().nullable(),
  is_inactive: z.boolean().optional().nullable(),
  scheduled_meals_route: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  regions: z.union([ z.lazy(() => delivery_driversCreateregionsInputSchema),z.string().array() ]).optional(),
  partner_cash_balance: z.number().optional().nullable(),
  user: z.lazy(() => usersCreateNestedOneWithoutDelivery_driverInputSchema).optional(),
  vehicles: z.lazy(() => vehiclesCreateNestedManyWithoutDelivery_driverInputSchema).optional(),
  received_orders: z.lazy(() => delivery_order_sentCreateNestedManyWithoutDelivery_driverInputSchema).optional(),
  documents: z.lazy(() => documentsCreateNestedManyWithoutDelivery_driverInputSchema).optional(),
  delivery_driver_history_locations: z.lazy(() => delivery_driver_history_locationsCreateNestedManyWithoutDelivery_driverInputSchema).optional(),
  daily_meal_business: z.lazy(() => businessCreateNestedOneWithoutDaily_meal_driversInputSchema).optional()
}).strict();

export default delivery_driversCreateWithoutOrdersInputSchema;
