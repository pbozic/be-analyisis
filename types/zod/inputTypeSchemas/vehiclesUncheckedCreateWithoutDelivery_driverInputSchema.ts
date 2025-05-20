import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { documentsUncheckedCreateNestedManyWithoutVehiclesInputSchema } from './documentsUncheckedCreateNestedManyWithoutVehiclesInputSchema';
import { vehicle_driversUncheckedCreateNestedManyWithoutVehicleInputSchema } from './vehicle_driversUncheckedCreateNestedManyWithoutVehicleInputSchema';
import { taxi_ordersUncheckedCreateNestedManyWithoutVehicleInputSchema } from './taxi_ordersUncheckedCreateNestedManyWithoutVehicleInputSchema';
import { delivery_ordersUncheckedCreateNestedManyWithoutVehicleInputSchema } from './delivery_ordersUncheckedCreateNestedManyWithoutVehicleInputSchema';
import { driversUncheckedCreateNestedOneWithoutCurrent_vehicleInputSchema } from './driversUncheckedCreateNestedOneWithoutCurrent_vehicleInputSchema';

export const vehiclesUncheckedCreateWithoutDelivery_driverInputSchema: z.ZodType<Prisma.vehiclesUncheckedCreateWithoutDelivery_driverInput> =
	z
		.object({
			vehicle_id: z.string().uuid().optional(),
			business_id: z.string().optional().nullable(),
			active: z.boolean().optional().nullable(),
			class: z
				.lazy(() => VEHICLE_CLASSSchema)
				.optional()
				.nullable(),
			category: z
				.lazy(() => VEHICLE_CATEGORYSchema)
				.optional()
				.nullable(),
			make: z.string().optional().nullable(),
			model: z.string().optional().nullable(),
			color: z.string().optional().nullable(),
			license_plate: z.string().optional().nullable(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			vehicle_specification_id: z.string().optional().nullable(),
			documents: z.lazy(() => documentsUncheckedCreateNestedManyWithoutVehiclesInputSchema).optional(),
			drivers: z.lazy(() => vehicle_driversUncheckedCreateNestedManyWithoutVehicleInputSchema).optional(),
			taxi_orders: z.lazy(() => taxi_ordersUncheckedCreateNestedManyWithoutVehicleInputSchema).optional(),
			delivery_orders: z.lazy(() => delivery_ordersUncheckedCreateNestedManyWithoutVehicleInputSchema).optional(),
			current_driver: z.lazy(() => driversUncheckedCreateNestedOneWithoutCurrent_vehicleInputSchema).optional(),
		})
		.strict();

export default vehiclesUncheckedCreateWithoutDelivery_driverInputSchema;
