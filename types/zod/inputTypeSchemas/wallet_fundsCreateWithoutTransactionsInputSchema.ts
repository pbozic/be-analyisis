import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';
import { referralsCreateNestedOneWithoutCreditsInputSchema } from './referralsCreateNestedOneWithoutCreditsInputSchema';
import { usersCreateNestedOneWithoutWallet_fundsInputSchema } from './usersCreateNestedOneWithoutWallet_fundsInputSchema';

export const wallet_fundsCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.wallet_fundsCreateWithoutTransactionsInput> = z.object({
  wallet_funds_id: z.string().uuid().optional(),
  charge_id: z.string().optional().nullable(),
  amount: z.number().int(),
  reserved_order: z.string().optional().nullable(),
  reserved_daily_meals_subscription: z.string().optional().nullable(),
  reserved_business: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  expires_at: z.coerce.date().optional().nullable(),
  type: z.lazy(() => FUNDS_TYPESchema),
  status: z.lazy(() => CREDIT_STATUSSchema).optional().nullable(),
  referral: z.lazy(() => referralsCreateNestedOneWithoutCreditsInputSchema).optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutWallet_fundsInputSchema)
}).strict();

export default wallet_fundsCreateWithoutTransactionsInputSchema;
