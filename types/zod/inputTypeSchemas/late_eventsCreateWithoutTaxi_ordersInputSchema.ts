import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutLate_eventsInputSchema } from './usersCreateNestedOneWithoutLate_eventsInputSchema';
import { businessCreateNestedOneWithoutLate_eventsInputSchema } from './businessCreateNestedOneWithoutLate_eventsInputSchema';
import { delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema } from './delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema';
import { scoring_pointsCreateNestedOneWithoutLate_eventsInputSchema } from './scoring_pointsCreateNestedOneWithoutLate_eventsInputSchema';

export const late_eventsCreateWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.late_eventsCreateWithoutTaxi_ordersInput> = z.object({
  late_events_id: z.string().uuid().optional(),
  seconds: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutLate_eventsInputSchema).optional(),
  businesses: z.lazy(() => businessCreateNestedOneWithoutLate_eventsInputSchema),
  delivery_orders: z.lazy(() => delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsCreateNestedOneWithoutLate_eventsInputSchema).optional()
}).strict();

export default late_eventsCreateWithoutTaxi_ordersInputSchema;
