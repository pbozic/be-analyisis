import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';

export const EnumCASHBACK_STATUSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCASHBACK_STATUSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CASHBACK_STATUSSchema).optional()
}).strict();

export default EnumCASHBACK_STATUSFieldUpdateOperationsInputSchema;
