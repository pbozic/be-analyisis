import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { USER_ROLESSchema } from './USER_ROLESSchema';

export const EnumUSER_ROLESFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUSER_ROLESFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => USER_ROLESSchema).optional()
}).strict();

export default EnumUSER_ROLESFieldUpdateOperationsInputSchema;
