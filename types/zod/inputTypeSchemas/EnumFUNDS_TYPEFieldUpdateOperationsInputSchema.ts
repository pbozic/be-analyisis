import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';

export const EnumFUNDS_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFUNDS_TYPEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => FUNDS_TYPESchema).optional(),
		})
		.strict();

export default EnumFUNDS_TYPEFieldUpdateOperationsInputSchema;
