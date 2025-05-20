import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema } from './EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';
import { EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema } from './EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema';
import { businessUpdateOneWithoutAccount_actionsNestedInputSchema } from './businessUpdateOneWithoutAccount_actionsNestedInputSchema';
import { usersUpdateOneWithoutAccount_actionsNestedInputSchema } from './usersUpdateOneWithoutAccount_actionsNestedInputSchema';

export const account_actionsUpdateWithoutAction_creatorInputSchema: z.ZodType<Prisma.account_actionsUpdateWithoutAction_creatorInput> = z.object({
  account_action_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),z.lazy(() => EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.lazy(() => ACCOUNT_ACTIONSSchema),z.lazy(() => EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema) ]).optional(),
  business: z.lazy(() => businessUpdateOneWithoutAccount_actionsNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateOneWithoutAccount_actionsNestedInputSchema).optional()
}).strict();

export default account_actionsUpdateWithoutAction_creatorInputSchema;
