import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneWithoutLate_eventsNestedInputSchema } from './usersUpdateOneWithoutLate_eventsNestedInputSchema';
import { businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema } from './businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema';
import { delivery_ordersUpdateOneWithoutLate_eventsNestedInputSchema } from './delivery_ordersUpdateOneWithoutLate_eventsNestedInputSchema';
import { taxi_ordersUpdateOneWithoutLate_eventsNestedInputSchema } from './taxi_ordersUpdateOneWithoutLate_eventsNestedInputSchema';

export const late_eventsUpdateWithoutScoring_pointsInputSchema: z.ZodType<Prisma.late_eventsUpdateWithoutScoring_pointsInput> =
	z
		.object({
			late_events_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			seconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			users: z.lazy(() => usersUpdateOneWithoutLate_eventsNestedInputSchema).optional(),
			businesses: z.lazy(() => businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema).optional(),
			delivery_orders: z.lazy(() => delivery_ordersUpdateOneWithoutLate_eventsNestedInputSchema).optional(),
			taxi_orders: z.lazy(() => taxi_ordersUpdateOneWithoutLate_eventsNestedInputSchema).optional(),
		})
		.strict();

export default late_eventsUpdateWithoutScoring_pointsInputSchema;
