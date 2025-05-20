import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { documentsCreateNestedManyWithoutVehiclesInputSchema } from './documentsCreateNestedManyWithoutVehiclesInputSchema';
import { delivery_driversCreateNestedOneWithoutVehiclesInputSchema } from './delivery_driversCreateNestedOneWithoutVehiclesInputSchema';
import { vehicle_specificationsCreateNestedOneWithoutVehicleInputSchema } from './vehicle_specificationsCreateNestedOneWithoutVehicleInputSchema';
import { taxi_ordersCreateNestedManyWithoutVehicleInputSchema } from './taxi_ordersCreateNestedManyWithoutVehicleInputSchema';
import { delivery_ordersCreateNestedManyWithoutVehicleInputSchema } from './delivery_ordersCreateNestedManyWithoutVehicleInputSchema';
import { driversCreateNestedOneWithoutCurrent_vehicleInputSchema } from './driversCreateNestedOneWithoutCurrent_vehicleInputSchema';

export const vehiclesCreateWithoutDriversInputSchema: z.ZodType<Prisma.vehiclesCreateWithoutDriversInput> = z.object({
  vehicle_id: z.string().uuid().optional(),
  business_id: z.string().optional().nullable(),
  active: z.boolean().optional().nullable(),
  class: z.lazy(() => VEHICLE_CLASSSchema).optional().nullable(),
  category: z.lazy(() => VEHICLE_CATEGORYSchema).optional().nullable(),
  make: z.string().optional().nullable(),
  model: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  license_plate: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  documents: z.lazy(() => documentsCreateNestedManyWithoutVehiclesInputSchema).optional(),
  delivery_driver: z.lazy(() => delivery_driversCreateNestedOneWithoutVehiclesInputSchema).optional(),
  vehicle_specification: z.lazy(() => vehicle_specificationsCreateNestedOneWithoutVehicleInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersCreateNestedManyWithoutVehicleInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersCreateNestedManyWithoutVehicleInputSchema).optional(),
  current_driver: z.lazy(() => driversCreateNestedOneWithoutCurrent_vehicleInputSchema).optional()
}).strict();

export default vehiclesCreateWithoutDriversInputSchema;
