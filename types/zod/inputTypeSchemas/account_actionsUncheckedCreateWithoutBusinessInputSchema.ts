import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';

export const account_actionsUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.account_actionsUncheckedCreateWithoutBusinessInput> = z.object({
  account_action_id: z.string().uuid().optional(),
  user_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  action_creator_user_id: z.string(),
  reason: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),
  action: z.lazy(() => ACCOUNT_ACTIONSSchema)
}).strict();

export default account_actionsUncheckedCreateWithoutBusinessInputSchema;
