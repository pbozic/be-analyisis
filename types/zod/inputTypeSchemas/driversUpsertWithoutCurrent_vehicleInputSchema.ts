import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutCurrent_vehicleInputSchema } from './driversUpdateWithoutCurrent_vehicleInputSchema';
import { driversUncheckedUpdateWithoutCurrent_vehicleInputSchema } from './driversUncheckedUpdateWithoutCurrent_vehicleInputSchema';
import { driversCreateWithoutCurrent_vehicleInputSchema } from './driversCreateWithoutCurrent_vehicleInputSchema';
import { driversUncheckedCreateWithoutCurrent_vehicleInputSchema } from './driversUncheckedCreateWithoutCurrent_vehicleInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutCurrent_vehicleInputSchema: z.ZodType<Prisma.driversUpsertWithoutCurrent_vehicleInput> = z.object({
  update: z.union([ z.lazy(() => driversUpdateWithoutCurrent_vehicleInputSchema),z.lazy(() => driversUncheckedUpdateWithoutCurrent_vehicleInputSchema) ]),
  create: z.union([ z.lazy(() => driversCreateWithoutCurrent_vehicleInputSchema),z.lazy(() => driversUncheckedCreateWithoutCurrent_vehicleInputSchema) ]),
  where: z.lazy(() => driversWhereInputSchema).optional()
}).strict();

export default driversUpsertWithoutCurrent_vehicleInputSchema;
