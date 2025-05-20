import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { NullableEnumVEHICLE_CLASSFieldUpdateOperationsInputSchema } from './NullableEnumVEHICLE_CLASSFieldUpdateOperationsInputSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { NullableEnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema } from './NullableEnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { documentsUncheckedUpdateManyWithoutVehiclesNestedInputSchema } from './documentsUncheckedUpdateManyWithoutVehiclesNestedInputSchema';
import { vehicle_driversUncheckedUpdateManyWithoutVehicleNestedInputSchema } from './vehicle_driversUncheckedUpdateManyWithoutVehicleNestedInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema';
import { delivery_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema } from './delivery_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema';
import { driversUncheckedUpdateOneWithoutCurrent_vehicleNestedInputSchema } from './driversUncheckedUpdateOneWithoutCurrent_vehicleNestedInputSchema';

export const vehiclesUncheckedUpdateInputSchema: z.ZodType<Prisma.vehiclesUncheckedUpdateInput> = z
	.object({
		vehicle_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		business_id: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		active: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		class: z
			.union([
				z.lazy(() => VEHICLE_CLASSSchema),
				z.lazy(() => NullableEnumVEHICLE_CLASSFieldUpdateOperationsInputSchema),
			])
			.optional()
			.nullable(),
		category: z
			.union([
				z.lazy(() => VEHICLE_CATEGORYSchema),
				z.lazy(() => NullableEnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema),
			])
			.optional()
			.nullable(),
		make: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		model: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		color: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		license_plate: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		delivery_driver_id: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		vehicle_specification_id: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		documents: z.lazy(() => documentsUncheckedUpdateManyWithoutVehiclesNestedInputSchema).optional(),
		drivers: z.lazy(() => vehicle_driversUncheckedUpdateManyWithoutVehicleNestedInputSchema).optional(),
		taxi_orders: z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema).optional(),
		delivery_orders: z.lazy(() => delivery_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema).optional(),
		current_driver: z.lazy(() => driversUncheckedUpdateOneWithoutCurrent_vehicleNestedInputSchema).optional(),
	})
	.strict();

export default vehiclesUncheckedUpdateInputSchema;
