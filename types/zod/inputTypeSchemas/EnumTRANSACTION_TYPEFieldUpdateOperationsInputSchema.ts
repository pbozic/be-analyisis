import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';

export const EnumTRANSACTION_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTRANSACTION_TYPEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => TRANSACTION_TYPESchema).optional(),
		})
		.strict();

export default EnumTRANSACTION_TYPEFieldUpdateOperationsInputSchema;
