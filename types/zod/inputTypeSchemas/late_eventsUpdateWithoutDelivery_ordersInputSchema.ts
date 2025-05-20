import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneWithoutLate_eventsNestedInputSchema } from './usersUpdateOneWithoutLate_eventsNestedInputSchema';
import { businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema } from './businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema';
import { taxi_ordersUpdateOneWithoutLate_eventsNestedInputSchema } from './taxi_ordersUpdateOneWithoutLate_eventsNestedInputSchema';
import { scoring_pointsUpdateOneWithoutLate_eventsNestedInputSchema } from './scoring_pointsUpdateOneWithoutLate_eventsNestedInputSchema';

export const late_eventsUpdateWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.late_eventsUpdateWithoutDelivery_ordersInput> = z.object({
  late_events_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => usersUpdateOneWithoutLate_eventsNestedInputSchema).optional(),
  businesses: z.lazy(() => businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersUpdateOneWithoutLate_eventsNestedInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsUpdateOneWithoutLate_eventsNestedInputSchema).optional()
}).strict();

export default late_eventsUpdateWithoutDelivery_ordersInputSchema;
