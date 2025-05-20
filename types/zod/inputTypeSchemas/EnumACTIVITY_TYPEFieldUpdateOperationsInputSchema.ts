import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';

export const EnumACTIVITY_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumACTIVITY_TYPEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ACTIVITY_TYPESchema).optional()
}).strict();

export default EnumACTIVITY_TYPEFieldUpdateOperationsInputSchema;
