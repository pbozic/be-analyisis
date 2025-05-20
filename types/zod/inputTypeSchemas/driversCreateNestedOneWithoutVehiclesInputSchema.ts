import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutVehiclesInputSchema } from './driversCreateWithoutVehiclesInputSchema';
import { driversUncheckedCreateWithoutVehiclesInputSchema } from './driversUncheckedCreateWithoutVehiclesInputSchema';
import { driversCreateOrConnectWithoutVehiclesInputSchema } from './driversCreateOrConnectWithoutVehiclesInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutVehiclesInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutVehiclesInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutVehiclesInputSchema),z.lazy(() => driversUncheckedCreateWithoutVehiclesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutVehiclesInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional()
}).strict();

export default driversCreateNestedOneWithoutVehiclesInputSchema;
