import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { municipalitiesUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema } from './municipalitiesUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema';

export const driver_municipalitiesUpdateWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesUpdateWithoutDriversInput> =
	z
		.object({
			driver_municipalities_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			municipalities: z
				.lazy(() => municipalitiesUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema)
				.optional(),
		})
		.strict();

export default driver_municipalitiesUpdateWithoutDriversInputSchema;
