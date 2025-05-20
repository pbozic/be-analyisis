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

export const vehiclesUncheckedUpdateManyWithoutDelivery_driverInputSchema: z.ZodType<Prisma.vehiclesUncheckedUpdateManyWithoutDelivery_driverInput> =
	z
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
			vehicle_specification_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
		})
		.strict();

export default vehiclesUncheckedUpdateManyWithoutDelivery_driverInputSchema;
