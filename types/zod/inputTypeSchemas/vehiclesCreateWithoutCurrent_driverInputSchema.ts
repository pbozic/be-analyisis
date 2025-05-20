import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { documentsCreateNestedManyWithoutVehiclesInputSchema } from './documentsCreateNestedManyWithoutVehiclesInputSchema';
import { vehicle_driversCreateNestedManyWithoutVehicleInputSchema } from './vehicle_driversCreateNestedManyWithoutVehicleInputSchema';
import { delivery_driversCreateNestedOneWithoutVehiclesInputSchema } from './delivery_driversCreateNestedOneWithoutVehiclesInputSchema';
import { vehicle_specificationsCreateNestedOneWithoutVehicleInputSchema } from './vehicle_specificationsCreateNestedOneWithoutVehicleInputSchema';
import { taxi_ordersCreateNestedManyWithoutVehicleInputSchema } from './taxi_ordersCreateNestedManyWithoutVehicleInputSchema';
import { delivery_ordersCreateNestedManyWithoutVehicleInputSchema } from './delivery_ordersCreateNestedManyWithoutVehicleInputSchema';

export const vehiclesCreateWithoutCurrent_driverInputSchema: z.ZodType<Prisma.vehiclesCreateWithoutCurrent_driverInput> = z.object({
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
  drivers: z.lazy(() => vehicle_driversCreateNestedManyWithoutVehicleInputSchema).optional(),
  delivery_driver: z.lazy(() => delivery_driversCreateNestedOneWithoutVehiclesInputSchema).optional(),
  vehicle_specification: z.lazy(() => vehicle_specificationsCreateNestedOneWithoutVehicleInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersCreateNestedManyWithoutVehicleInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersCreateNestedManyWithoutVehicleInputSchema).optional()
}).strict();

export default vehiclesCreateWithoutCurrent_driverInputSchema;
