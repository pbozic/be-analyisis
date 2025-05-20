import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const payment_intent_logsSelectSchema: z.ZodType<Prisma.payment_intent_logsSelect> = z.object({
  payment_intent_logs_id: z.boolean().optional(),
  stripe_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
}).strict()

export default payment_intent_logsSelectSchema;
