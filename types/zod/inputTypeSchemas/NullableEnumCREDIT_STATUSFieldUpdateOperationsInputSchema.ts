import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';

export const NullableEnumCREDIT_STATUSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumCREDIT_STATUSFieldUpdateOperationsInput> =
	z
		.object({
			set: z
				.lazy(() => CREDIT_STATUSSchema)
				.optional()
				.nullable(),
		})
		.strict();

export default NullableEnumCREDIT_STATUSFieldUpdateOperationsInputSchema;
