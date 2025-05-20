import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutCurrent_vehicleInputSchema } from './driversUpdateWithoutCurrent_vehicleInputSchema';
import { driversUncheckedUpdateWithoutCurrent_vehicleInputSchema } from './driversUncheckedUpdateWithoutCurrent_vehicleInputSchema';

export const driversUpdateToOneWithWhereWithoutCurrent_vehicleInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutCurrent_vehicleInput> = z.object({
  where: z.lazy(() => driversWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => driversUpdateWithoutCurrent_vehicleInputSchema),z.lazy(() => driversUncheckedUpdateWithoutCurrent_vehicleInputSchema) ]),
}).strict();

export default driversUpdateToOneWithWhereWithoutCurrent_vehicleInputSchema;
