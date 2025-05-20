import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';

export const cashbackUncheckedCreateWithoutDelivery_orderInputSchema: z.ZodType<Prisma.cashbackUncheckedCreateWithoutDelivery_orderInput> = z.object({
  cashback_id: z.string().uuid().optional(),
  user_id: z.string(),
  amount: z.number().int(),
  type: z.lazy(() => CASHBACK_TYPESchema),
  source: z.lazy(() => CASHBACK_SOURCESchema),
  status: z.lazy(() => CASHBACK_STATUSSchema).optional(),
  description: z.string().optional().nullable(),
  earned_at: z.coerce.date().optional(),
  expires_at: z.coerce.date().optional().nullable(),
  converted_at: z.coerce.date().optional().nullable(),
  taxi_order_id: z.string().optional().nullable()
}).strict();

export default cashbackUncheckedCreateWithoutDelivery_orderInputSchema;
