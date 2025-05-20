import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutVehiclesInputSchema } from './driversUpdateWithoutVehiclesInputSchema';
import { driversUncheckedUpdateWithoutVehiclesInputSchema } from './driversUncheckedUpdateWithoutVehiclesInputSchema';
import { driversCreateWithoutVehiclesInputSchema } from './driversCreateWithoutVehiclesInputSchema';
import { driversUncheckedCreateWithoutVehiclesInputSchema } from './driversUncheckedCreateWithoutVehiclesInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutVehiclesInputSchema: z.ZodType<Prisma.driversUpsertWithoutVehiclesInput> = z.object({
  update: z.union([ z.lazy(() => driversUpdateWithoutVehiclesInputSchema),z.lazy(() => driversUncheckedUpdateWithoutVehiclesInputSchema) ]),
  create: z.union([ z.lazy(() => driversCreateWithoutVehiclesInputSchema),z.lazy(() => driversUncheckedCreateWithoutVehiclesInputSchema) ]),
  where: z.lazy(() => driversWhereInputSchema).optional()
}).strict();

export default driversUpsertWithoutVehiclesInputSchema;
