import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';
import { EnumACTIVITY_TYPEFieldUpdateOperationsInputSchema } from './EnumACTIVITY_TYPEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';

export const driver_activity_logsUncheckedUpdateInputSchema: z.ZodType<Prisma.driver_activity_logsUncheckedUpdateInput> =
	z
		.object({
			driver_activity_log_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			driver_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			activity_type: z
				.union([
					z.lazy(() => ACTIVITY_TYPESchema),
					z.lazy(() => EnumACTIVITY_TYPEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			started_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			ended_at: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			timeout_at: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			lockout_until: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
		})
		.strict();

export default driver_activity_logsUncheckedUpdateInputSchema;
