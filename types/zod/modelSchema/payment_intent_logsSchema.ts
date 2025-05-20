import { z } from 'zod';

/////////////////////////////////////////
// PAYMENT INTENT LOGS SCHEMA
/////////////////////////////////////////

export const payment_intent_logsSchema = z.object({
  payment_intent_logs_id: z.string().uuid(),
  stripe_id: z.string(),
  created_at: z.coerce.date(),
})

export type payment_intent_logs = z.infer<typeof payment_intent_logsSchema>

export default payment_intent_logsSchema;
