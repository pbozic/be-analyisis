import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersCreateNestedOneWithoutAllowanceInputSchema } from './group_usersCreateNestedOneWithoutAllowanceInputSchema';
import { business_usersCreateNestedOneWithoutAllowanceInputSchema } from './business_usersCreateNestedOneWithoutAllowanceInputSchema';

export const allowancesCreateInputSchema: z.ZodType<Prisma.allowancesCreateInput> = z.object({
  allowance_id: z.string().uuid().optional(),
  amount_taxi_wallet: z.number().optional(),
  amount_transfer_wallet: z.number().optional(),
  amount_delivery_wallet: z.number().optional(),
  amount_any_wallet: z.number().optional(),
  amount_taxi_purchase_order: z.number().optional().nullable(),
  amount_transfer_purchase_order: z.number().optional().nullable(),
  amount_delivery_purchase_order: z.number().optional().nullable(),
  amount_any_purchase_order: z.number().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => group_usersCreateNestedOneWithoutAllowanceInputSchema).optional(),
  business_user: z.lazy(() => business_usersCreateNestedOneWithoutAllowanceInputSchema).optional()
}).strict();

export default allowancesCreateInputSchema;
