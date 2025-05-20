import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const late_eventsUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.late_eventsUncheckedCreateWithoutUsersInput> = z.object({
  late_events_id: z.string().uuid().optional(),
  business_id: z.string(),
  delivery_order_id: z.string().optional().nullable(),
  taxi_order_id: z.string().optional().nullable(),
  scoring_points_id: z.string().optional().nullable(),
  seconds: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default late_eventsUncheckedCreateWithoutUsersInputSchema;
