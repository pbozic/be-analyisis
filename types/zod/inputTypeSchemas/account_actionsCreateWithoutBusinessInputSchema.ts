import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';
import { usersCreateNestedOneWithoutAccount_actionsInputSchema } from './usersCreateNestedOneWithoutAccount_actionsInputSchema';
import { usersCreateNestedOneWithoutCreated_account_actionsInputSchema } from './usersCreateNestedOneWithoutCreated_account_actionsInputSchema';

export const account_actionsCreateWithoutBusinessInputSchema: z.ZodType<Prisma.account_actionsCreateWithoutBusinessInput> = z.object({
  account_action_id: z.string().uuid().optional(),
  created_at: z.coerce.date().optional(),
  reason: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),
  action: z.lazy(() => ACCOUNT_ACTIONSSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutAccount_actionsInputSchema).optional(),
  action_creator: z.lazy(() => usersCreateNestedOneWithoutCreated_account_actionsInputSchema).optional()
}).strict();

export default account_actionsCreateWithoutBusinessInputSchema;
