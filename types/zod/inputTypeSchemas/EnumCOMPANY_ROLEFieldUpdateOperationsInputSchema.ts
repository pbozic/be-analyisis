import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';

export const EnumCOMPANY_ROLEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCOMPANY_ROLEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => COMPANY_ROLESchema).optional(),
		})
		.strict();

export default EnumCOMPANY_ROLEFieldUpdateOperationsInputSchema;
