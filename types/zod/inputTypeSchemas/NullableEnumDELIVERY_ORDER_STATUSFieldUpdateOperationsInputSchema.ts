import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';

export const NullableEnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => DELIVERY_ORDER_STATUSSchema).optional().nullable()
}).strict();

export default NullableEnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema;
