import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';

export const EnumCASHBACK_SOURCEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCASHBACK_SOURCEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => CASHBACK_SOURCESchema).optional(),
		})
		.strict();

export default EnumCASHBACK_SOURCEFieldUpdateOperationsInputSchema;
