import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';

export const EnumSORTING_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSORTING_TYPEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SORTING_TYPESchema).optional()
}).strict();

export default EnumSORTING_TYPEFieldUpdateOperationsInputSchema;
