import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';
import { usersCreateNestedOneWithoutScoring_pointsInputSchema } from './usersCreateNestedOneWithoutScoring_pointsInputSchema';
import { businessCreateNestedOneWithoutScoring_pointsInputSchema } from './businessCreateNestedOneWithoutScoring_pointsInputSchema';
import { delivery_ordersCreateNestedOneWithoutScoring_pointsInputSchema } from './delivery_ordersCreateNestedOneWithoutScoring_pointsInputSchema';
import { taxi_ordersCreateNestedOneWithoutScoring_pointsInputSchema } from './taxi_ordersCreateNestedOneWithoutScoring_pointsInputSchema';

export const scoring_pointsCreateWithoutLate_eventsInputSchema: z.ZodType<Prisma.scoring_pointsCreateWithoutLate_eventsInput> = z.object({
  scoring_points_id: z.string().uuid().optional(),
  points: z.number().int(),
  isPenalty: z.boolean(),
  reason: z.lazy(() => SCORING_POINTS_REASONSchema),
  expiration_date: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutScoring_pointsInputSchema).optional(),
  businesses: z.lazy(() => businessCreateNestedOneWithoutScoring_pointsInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersCreateNestedOneWithoutScoring_pointsInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersCreateNestedOneWithoutScoring_pointsInputSchema).optional()
}).strict();

export default scoring_pointsCreateWithoutLate_eventsInputSchema;
