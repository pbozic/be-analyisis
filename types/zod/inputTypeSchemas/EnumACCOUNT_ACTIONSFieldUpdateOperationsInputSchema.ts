import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';

export const EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumACCOUNT_ACTIONSFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => ACCOUNT_ACTIONSSchema).optional(),
		})
		.strict();

export default EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema;
