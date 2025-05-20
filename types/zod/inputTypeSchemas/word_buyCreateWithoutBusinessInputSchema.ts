import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateNestedOneWithoutSubscriptionsInputSchema } from './wordsCreateNestedOneWithoutSubscriptionsInputSchema';

export const word_buyCreateWithoutBusinessInputSchema: z.ZodType<Prisma.word_buyCreateWithoutBusinessInput> = z.object({
  word_buy_id: z.string().uuid().optional(),
  stripe_subscription_id: z.string(),
  price: z.number(),
  active_at: z.coerce.date(),
  expires_at: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  word: z.lazy(() => wordsCreateNestedOneWithoutSubscriptionsInputSchema)
}).strict();

export default word_buyCreateWithoutBusinessInputSchema;
