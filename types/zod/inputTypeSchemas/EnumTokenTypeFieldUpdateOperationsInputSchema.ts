import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenTypeSchema } from './TokenTypeSchema';

export const EnumTokenTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTokenTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TokenTypeSchema).optional()
}).strict();

export default EnumTokenTypeFieldUpdateOperationsInputSchema;
