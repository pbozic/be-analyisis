import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';

export const EnumTAXI_ORDER_STATUSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTAXI_ORDER_STATUSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TAXI_ORDER_STATUSSchema).optional()
}).strict();

export default EnumTAXI_ORDER_STATUSFieldUpdateOperationsInputSchema;
