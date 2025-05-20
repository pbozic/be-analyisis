import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';

export const EnumORDER_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumORDER_TYPEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => ORDER_TYPESchema).optional(),
		})
		.strict();

export default EnumORDER_TYPEFieldUpdateOperationsInputSchema;
