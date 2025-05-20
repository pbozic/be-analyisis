import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneWithoutLate_eventsNestedInputSchema } from './usersUpdateOneWithoutLate_eventsNestedInputSchema';
import { businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema } from './businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema';
import { delivery_ordersUpdateOneWithoutLate_eventsNestedInputSchema } from './delivery_ordersUpdateOneWithoutLate_eventsNestedInputSchema';
import { scoring_pointsUpdateOneWithoutLate_eventsNestedInputSchema } from './scoring_pointsUpdateOneWithoutLate_eventsNestedInputSchema';

export const late_eventsUpdateWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.late_eventsUpdateWithoutTaxi_ordersInput> =
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
			scoring_points: z.lazy(() => scoring_pointsUpdateOneWithoutLate_eventsNestedInputSchema).optional(),
		})
		.strict();

export default late_eventsUpdateWithoutTaxi_ordersInputSchema;
