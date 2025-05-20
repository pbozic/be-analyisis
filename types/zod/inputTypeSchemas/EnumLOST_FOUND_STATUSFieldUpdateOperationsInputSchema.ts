import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';

export const EnumLOST_FOUND_STATUSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLOST_FOUND_STATUSFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => LOST_FOUND_STATUSSchema).optional(),
		})
		.strict();

export default EnumLOST_FOUND_STATUSFieldUpdateOperationsInputSchema;
