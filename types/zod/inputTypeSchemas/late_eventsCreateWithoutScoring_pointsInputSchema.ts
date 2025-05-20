import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutLate_eventsInputSchema } from './usersCreateNestedOneWithoutLate_eventsInputSchema';
import { businessCreateNestedOneWithoutLate_eventsInputSchema } from './businessCreateNestedOneWithoutLate_eventsInputSchema';
import { delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema } from './delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema';
import { taxi_ordersCreateNestedOneWithoutLate_eventsInputSchema } from './taxi_ordersCreateNestedOneWithoutLate_eventsInputSchema';

export const late_eventsCreateWithoutScoring_pointsInputSchema: z.ZodType<Prisma.late_eventsCreateWithoutScoring_pointsInput> = z.object({
  late_events_id: z.string().uuid().optional(),
  seconds: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutLate_eventsInputSchema).optional(),
  businesses: z.lazy(() => businessCreateNestedOneWithoutLate_eventsInputSchema),
  delivery_orders: z.lazy(() => delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersCreateNestedOneWithoutLate_eventsInputSchema).optional()
}).strict();

export default late_eventsCreateWithoutScoring_pointsInputSchema;
