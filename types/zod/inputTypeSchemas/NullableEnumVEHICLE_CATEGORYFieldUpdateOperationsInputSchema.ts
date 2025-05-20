import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';

export const NullableEnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumVEHICLE_CATEGORYFieldUpdateOperationsInput> =
	z
		.object({
			set: z
				.lazy(() => VEHICLE_CATEGORYSchema)
				.optional()
				.nullable(),
		})
		.strict();

export default NullableEnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema;
