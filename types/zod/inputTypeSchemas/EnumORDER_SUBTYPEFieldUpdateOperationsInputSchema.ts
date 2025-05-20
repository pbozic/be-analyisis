import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';

export const EnumORDER_SUBTYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumORDER_SUBTYPEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => ORDER_SUBTYPESchema).optional(),
		})
		.strict();

export default EnumORDER_SUBTYPEFieldUpdateOperationsInputSchema;
