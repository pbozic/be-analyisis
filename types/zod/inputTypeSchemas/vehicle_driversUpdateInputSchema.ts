import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { vehiclesUpdateOneRequiredWithoutDriversNestedInputSchema } from './vehiclesUpdateOneRequiredWithoutDriversNestedInputSchema';
import { driversUpdateOneRequiredWithoutVehiclesNestedInputSchema } from './driversUpdateOneRequiredWithoutVehiclesNestedInputSchema';

export const vehicle_driversUpdateInputSchema: z.ZodType<Prisma.vehicle_driversUpdateInput> = z
	.object({
		vehicle_drivers_id: z
			.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		can_drive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		vehicle: z.lazy(() => vehiclesUpdateOneRequiredWithoutDriversNestedInputSchema).optional(),
		driver: z.lazy(() => driversUpdateOneRequiredWithoutVehiclesNestedInputSchema).optional(),
	})
	.strict();

export default vehicle_driversUpdateInputSchema;
