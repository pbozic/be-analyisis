import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedOneWithoutWord_buysInputSchema } from './businessCreateNestedOneWithoutWord_buysInputSchema';

export const word_buyCreateWithoutWordInputSchema: z.ZodType<Prisma.word_buyCreateWithoutWordInput> = z.object({
  word_buy_id: z.string().uuid().optional(),
  stripe_subscription_id: z.string(),
  price: z.number(),
  active_at: z.coerce.date(),
  expires_at: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  business: z.lazy(() => businessCreateNestedOneWithoutWord_buysInputSchema)
}).strict();

export default word_buyCreateWithoutWordInputSchema;
