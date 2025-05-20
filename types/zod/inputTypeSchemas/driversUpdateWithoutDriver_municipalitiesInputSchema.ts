import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { driversUpdateregionsInputSchema } from './driversUpdateregionsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneWithoutDriverNestedInputSchema } from './usersUpdateOneWithoutDriverNestedInputSchema';
import { vehicle_driversUpdateManyWithoutDriverNestedInputSchema } from './vehicle_driversUpdateManyWithoutDriverNestedInputSchema';
import { taxi_ordersUpdateManyWithoutDriverNestedInputSchema } from './taxi_ordersUpdateManyWithoutDriverNestedInputSchema';
import { taxi_order_sentUpdateManyWithoutDriverNestedInputSchema } from './taxi_order_sentUpdateManyWithoutDriverNestedInputSchema';
import { delivery_ordersUpdateManyWithoutDriverNestedInputSchema } from './delivery_ordersUpdateManyWithoutDriverNestedInputSchema';
import { delivery_order_sentUpdateManyWithoutDriverNestedInputSchema } from './delivery_order_sentUpdateManyWithoutDriverNestedInputSchema';
import { documentsUpdateManyWithoutDriversNestedInputSchema } from './documentsUpdateManyWithoutDriversNestedInputSchema';
import { driver_history_locationsUpdateManyWithoutDriverNestedInputSchema } from './driver_history_locationsUpdateManyWithoutDriverNestedInputSchema';
import { vehiclesUpdateOneWithoutCurrent_driverNestedInputSchema } from './vehiclesUpdateOneWithoutCurrent_driverNestedInputSchema';
import { driver_activity_logsUpdateManyWithoutDriverNestedInputSchema } from './driver_activity_logsUpdateManyWithoutDriverNestedInputSchema';

export const driversUpdateWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.driversUpdateWithoutDriver_municipalitiesInput> = z.object({
  driver_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  business_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  online: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  on_order: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  working_hours: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  ride_requirements: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  last_used_vehicle_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  delivery_timeline: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  last_ping_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_inactive: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  transfer_requirements: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  regions: z.union([ z.lazy(() => driversUpdateregionsInputSchema),z.string().array() ]).optional(),
  handles_taxi_orders: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  handles_transfer_orders: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  handles_delivery_orders: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  taxi_orders_toggled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  transfer_orders_toggled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  delivery_orders_toggled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  partner_cash_balance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  come_to_work_last_sent_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => usersUpdateOneWithoutDriverNestedInputSchema).optional(),
  vehicles: z.lazy(() => vehicle_driversUpdateManyWithoutDriverNestedInputSchema).optional(),
  orders: z.lazy(() => taxi_ordersUpdateManyWithoutDriverNestedInputSchema).optional(),
  received_orders: z.lazy(() => taxi_order_sentUpdateManyWithoutDriverNestedInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersUpdateManyWithoutDriverNestedInputSchema).optional(),
  received_delivery_orders: z.lazy(() => delivery_order_sentUpdateManyWithoutDriverNestedInputSchema).optional(),
  documents: z.lazy(() => documentsUpdateManyWithoutDriversNestedInputSchema).optional(),
  driver_history_locations: z.lazy(() => driver_history_locationsUpdateManyWithoutDriverNestedInputSchema).optional(),
  current_vehicle: z.lazy(() => vehiclesUpdateOneWithoutCurrent_driverNestedInputSchema).optional(),
  activity_logs: z.lazy(() => driver_activity_logsUpdateManyWithoutDriverNestedInputSchema).optional()
}).strict();

export default driversUpdateWithoutDriver_municipalitiesInputSchema;
