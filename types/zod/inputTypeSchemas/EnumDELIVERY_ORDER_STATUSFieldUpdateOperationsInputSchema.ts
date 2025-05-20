import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';

export const EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => DELIVERY_ORDER_STATUSSchema).optional(),
		})
		.strict();

export default EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema;
