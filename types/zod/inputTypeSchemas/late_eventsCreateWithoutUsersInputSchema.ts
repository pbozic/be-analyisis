import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedOneWithoutLate_eventsInputSchema } from './businessCreateNestedOneWithoutLate_eventsInputSchema';
import { delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema } from './delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema';
import { taxi_ordersCreateNestedOneWithoutLate_eventsInputSchema } from './taxi_ordersCreateNestedOneWithoutLate_eventsInputSchema';
import { scoring_pointsCreateNestedOneWithoutLate_eventsInputSchema } from './scoring_pointsCreateNestedOneWithoutLate_eventsInputSchema';

export const late_eventsCreateWithoutUsersInputSchema: z.ZodType<Prisma.late_eventsCreateWithoutUsersInput> = z.object({
  late_events_id: z.string().uuid().optional(),
  seconds: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  businesses: z.lazy(() => businessCreateNestedOneWithoutLate_eventsInputSchema),
  delivery_orders: z.lazy(() => delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersCreateNestedOneWithoutLate_eventsInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsCreateNestedOneWithoutLate_eventsInputSchema).optional()
}).strict();

export default late_eventsCreateWithoutUsersInputSchema;
