import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';

export const EnumDOCUMENT_TYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDOCUMENT_TYPEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => DOCUMENT_TYPESchema).optional(),
		})
		.strict();

export default EnumDOCUMENT_TYPEFieldUpdateOperationsInputSchema;
