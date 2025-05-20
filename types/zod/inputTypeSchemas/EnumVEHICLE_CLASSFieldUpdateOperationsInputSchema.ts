import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';

export const EnumVEHICLE_CLASSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumVEHICLE_CLASSFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => VEHICLE_CLASSSchema).optional(),
		})
		.strict();

export default EnumVEHICLE_CLASSFieldUpdateOperationsInputSchema;
