import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { vehiclesUpdateOneRequiredWithoutDriversNestedInputSchema } from './vehiclesUpdateOneRequiredWithoutDriversNestedInputSchema';

export const vehicle_driversUpdateWithoutDriverInputSchema: z.ZodType<Prisma.vehicle_driversUpdateWithoutDriverInput> =
	z
		.object({
			vehicle_drivers_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			can_drive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			vehicle: z.lazy(() => vehiclesUpdateOneRequiredWithoutDriversNestedInputSchema).optional(),
		})
		.strict();

export default vehicle_driversUpdateWithoutDriverInputSchema;
