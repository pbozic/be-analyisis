import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { EnumFUNDS_TYPEFieldUpdateOperationsInputSchema } from './EnumFUNDS_TYPEFieldUpdateOperationsInputSchema';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';
import { NullableEnumCREDIT_STATUSFieldUpdateOperationsInputSchema } from './NullableEnumCREDIT_STATUSFieldUpdateOperationsInputSchema';
import { referralsUpdateOneWithoutCreditsNestedInputSchema } from './referralsUpdateOneWithoutCreditsNestedInputSchema';
import { usersUpdateOneRequiredWithoutWallet_fundsNestedInputSchema } from './usersUpdateOneRequiredWithoutWallet_fundsNestedInputSchema';
import { transactionsUpdateManyWithoutWallet_fundsNestedInputSchema } from './transactionsUpdateManyWithoutWallet_fundsNestedInputSchema';

export const wallet_fundsUpdateInputSchema: z.ZodType<Prisma.wallet_fundsUpdateInput> = z.object({
  wallet_funds_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  charge_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reserved_order: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reserved_daily_meals_subscription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reserved_business: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expires_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => FUNDS_TYPESchema),z.lazy(() => EnumFUNDS_TYPEFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CREDIT_STATUSSchema),z.lazy(() => NullableEnumCREDIT_STATUSFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  referral: z.lazy(() => referralsUpdateOneWithoutCreditsNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutWallet_fundsNestedInputSchema).optional(),
  transactions: z.lazy(() => transactionsUpdateManyWithoutWallet_fundsNestedInputSchema).optional()
}).strict();

export default wallet_fundsUpdateInputSchema;
