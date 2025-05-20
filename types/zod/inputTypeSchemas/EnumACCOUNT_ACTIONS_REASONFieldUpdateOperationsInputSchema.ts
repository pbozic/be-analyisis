import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';

export const EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema).optional()
}).strict();

export default EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema;
