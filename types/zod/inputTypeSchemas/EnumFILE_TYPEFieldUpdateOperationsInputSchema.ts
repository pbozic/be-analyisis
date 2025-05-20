import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FILE_TYPESchema } from './FILE_TYPESchema';

export const EnumFILE_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFILE_TYPEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => FILE_TYPESchema).optional()
}).strict();

export default EnumFILE_TYPEFieldUpdateOperationsInputSchema;
