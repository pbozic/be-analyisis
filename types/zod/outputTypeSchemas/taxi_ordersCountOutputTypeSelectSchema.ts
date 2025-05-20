import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const taxi_ordersCountOutputTypeSelectSchema: z.ZodType<Prisma.taxi_ordersCountOutputTypeSelect> = z.object({
  history: z.boolean().optional(),
  grouped_orders: z.boolean().optional(),
  driver_history_locations: z.boolean().optional(),
  wallet_transfer: z.boolean().optional(),
  transactions: z.boolean().optional(),
  cashback: z.boolean().optional(),
  scoring_points: z.boolean().optional(),
  late_events: z.boolean().optional(),
}).strict();

export default taxi_ordersCountOutputTypeSelectSchema;
