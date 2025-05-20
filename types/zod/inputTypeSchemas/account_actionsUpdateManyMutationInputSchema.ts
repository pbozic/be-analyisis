import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema } from './EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';
import { EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema } from './EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema';

export const account_actionsUpdateManyMutationInputSchema: z.ZodType<Prisma.account_actionsUpdateManyMutationInput> = z.object({
  account_action_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),z.lazy(() => EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.lazy(() => ACCOUNT_ACTIONSSchema),z.lazy(() => EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default account_actionsUpdateManyMutationInputSchema;
