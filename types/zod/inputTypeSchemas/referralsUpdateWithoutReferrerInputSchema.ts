import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutReferralNestedInputSchema } from './usersUpdateOneRequiredWithoutReferralNestedInputSchema';
import { wallet_fundsUpdateManyWithoutReferralNestedInputSchema } from './wallet_fundsUpdateManyWithoutReferralNestedInputSchema';

export const referralsUpdateWithoutReferrerInputSchema: z.ZodType<Prisma.referralsUpdateWithoutReferrerInput> = z.object({
  referral_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  conditions_met: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  reward_claimed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  referred: z.lazy(() => usersUpdateOneRequiredWithoutReferralNestedInputSchema).optional(),
  credits: z.lazy(() => wallet_fundsUpdateManyWithoutReferralNestedInputSchema).optional()
}).strict();

export default referralsUpdateWithoutReferrerInputSchema;
