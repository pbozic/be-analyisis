import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const word_buyCreateManyWordInputSchema: z.ZodType<Prisma.word_buyCreateManyWordInput> = z.object({
  word_buy_id: z.string().uuid().optional(),
  stripe_subscription_id: z.string(),
  price: z.number(),
  active_at: z.coerce.date(),
  expires_at: z.coerce.date(),
  business_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();

export default word_buyCreateManyWordInputSchema;
