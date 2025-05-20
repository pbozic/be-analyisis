import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';

export const EnumCASHBACK_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCASHBACK_TYPEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CASHBACK_TYPESchema).optional()
}).strict();

export default EnumCASHBACK_TYPEFieldUpdateOperationsInputSchema;
