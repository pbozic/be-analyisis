import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';

export const EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBUSINESS_TYPEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => BUSINESS_TYPESchema).optional(),
		})
		.strict();

export default EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema;
