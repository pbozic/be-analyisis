import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';

export const EnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumVEHICLE_CATEGORYFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => VEHICLE_CATEGORYSchema).optional(),
		})
		.strict();

export default EnumVEHICLE_CATEGORYFieldUpdateOperationsInputSchema;
