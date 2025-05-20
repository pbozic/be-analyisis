import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { wallet_fundsUncheckedUpdateManyWithoutReferralNestedInputSchema } from './wallet_fundsUncheckedUpdateManyWithoutReferralNestedInputSchema';

export const referralsUncheckedUpdateWithoutReferrerInputSchema: z.ZodType<Prisma.referralsUncheckedUpdateWithoutReferrerInput> = z.object({
  referral_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referred_user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  conditions_met: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  reward_claimed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  credits: z.lazy(() => wallet_fundsUncheckedUpdateManyWithoutReferralNestedInputSchema).optional()
}).strict();

export default referralsUncheckedUpdateWithoutReferrerInputSchema;
