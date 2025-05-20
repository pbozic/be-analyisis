import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';

export const NullableEnumVEHICLE_CLASSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumVEHICLE_CLASSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => VEHICLE_CLASSSchema).optional().nullable()
}).strict();

export default NullableEnumVEHICLE_CLASSFieldUpdateOperationsInputSchema;
