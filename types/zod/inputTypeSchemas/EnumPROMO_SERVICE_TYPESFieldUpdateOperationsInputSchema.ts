import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';

export const EnumPROMO_SERVICE_TYPESFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPROMO_SERVICE_TYPESFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PROMO_SERVICE_TYPESSchema).optional()
}).strict();

export default EnumPROMO_SERVICE_TYPESFieldUpdateOperationsInputSchema;
