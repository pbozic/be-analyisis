import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';

export const EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCATEGORY_TYPEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CATEGORY_TYPESchema).optional()
}).strict();

export default EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema;
