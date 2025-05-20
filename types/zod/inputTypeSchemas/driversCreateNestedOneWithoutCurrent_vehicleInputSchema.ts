import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutCurrent_vehicleInputSchema } from './driversCreateWithoutCurrent_vehicleInputSchema';
import { driversUncheckedCreateWithoutCurrent_vehicleInputSchema } from './driversUncheckedCreateWithoutCurrent_vehicleInputSchema';
import { driversCreateOrConnectWithoutCurrent_vehicleInputSchema } from './driversCreateOrConnectWithoutCurrent_vehicleInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutCurrent_vehicleInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutCurrent_vehicleInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutCurrent_vehicleInputSchema),z.lazy(() => driversUncheckedCreateWithoutCurrent_vehicleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutCurrent_vehicleInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional()
}).strict();

export default driversCreateNestedOneWithoutCurrent_vehicleInputSchema;
