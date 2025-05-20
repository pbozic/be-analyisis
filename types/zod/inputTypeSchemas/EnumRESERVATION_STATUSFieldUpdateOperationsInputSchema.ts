import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';

export const EnumRESERVATION_STATUSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRESERVATION_STATUSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RESERVATION_STATUSSchema).optional()
}).strict();

export default EnumRESERVATION_STATUSFieldUpdateOperationsInputSchema;
