import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const driver_municipalitiesUncheckedUpdateManyWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesUncheckedUpdateManyWithoutDriversInput> =
	z
		.object({
			driver_municipalities_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			municipalities_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export default driver_municipalitiesUncheckedUpdateManyWithoutDriversInputSchema;
