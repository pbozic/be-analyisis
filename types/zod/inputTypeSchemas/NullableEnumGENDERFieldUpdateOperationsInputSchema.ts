import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GENDERSchema } from './GENDERSchema';

export const NullableEnumGENDERFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumGENDERFieldUpdateOperationsInput> =
	z
		.object({
			set: z
				.lazy(() => GENDERSchema)
				.optional()
				.nullable(),
		})
		.strict();

export default NullableEnumGENDERFieldUpdateOperationsInputSchema;
