import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { delivery_driversUpdateregionsInputSchema } from './delivery_driversUpdateregionsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { usersUpdateOneWithoutDelivery_driverNestedInputSchema } from './usersUpdateOneWithoutDelivery_driverNestedInputSchema';
import { vehiclesUpdateManyWithoutDelivery_driverNestedInputSchema } from './vehiclesUpdateManyWithoutDelivery_driverNestedInputSchema';
import { delivery_ordersUpdateManyWithoutDelivery_driverNestedInputSchema } from './delivery_ordersUpdateManyWithoutDelivery_driverNestedInputSchema';
import { delivery_order_sentUpdateManyWithoutDelivery_driverNestedInputSchema } from './delivery_order_sentUpdateManyWithoutDelivery_driverNestedInputSchema';
import { documentsUpdateManyWithoutDelivery_driverNestedInputSchema } from './documentsUpdateManyWithoutDelivery_driverNestedInputSchema';
import { delivery_driver_history_locationsUpdateManyWithoutDelivery_driverNestedInputSchema } from './delivery_driver_history_locationsUpdateManyWithoutDelivery_driverNestedInputSchema';
import { businessUpdateOneWithoutDaily_meal_driversNestedInputSchema } from './businessUpdateOneWithoutDaily_meal_driversNestedInputSchema';

export const delivery_driversUpdateInputSchema: z.ZodType<Prisma.delivery_driversUpdateInput> = z.object({
  delivery_driver_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  online: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  on_order: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  delivers_daily_meals: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  working_hours: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  business_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  delivery_timeline: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  last_ping_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  on_daily_meals: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_inactive: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scheduled_meals_route: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  regions: z.union([ z.lazy(() => delivery_driversUpdateregionsInputSchema),z.string().array() ]).optional(),
  partner_cash_balance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => usersUpdateOneWithoutDelivery_driverNestedInputSchema).optional(),
  vehicles: z.lazy(() => vehiclesUpdateManyWithoutDelivery_driverNestedInputSchema).optional(),
  orders: z.lazy(() => delivery_ordersUpdateManyWithoutDelivery_driverNestedInputSchema).optional(),
  received_orders: z.lazy(() => delivery_order_sentUpdateManyWithoutDelivery_driverNestedInputSchema).optional(),
  documents: z.lazy(() => documentsUpdateManyWithoutDelivery_driverNestedInputSchema).optional(),
  delivery_driver_history_locations: z.lazy(() => delivery_driver_history_locationsUpdateManyWithoutDelivery_driverNestedInputSchema).optional(),
  daily_meal_business: z.lazy(() => businessUpdateOneWithoutDaily_meal_driversNestedInputSchema).optional()
}).strict();

export default delivery_driversUpdateInputSchema;
