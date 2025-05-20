import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversUpdateWithoutVehiclesInputSchema } from './delivery_driversUpdateWithoutVehiclesInputSchema';
import { delivery_driversUncheckedUpdateWithoutVehiclesInputSchema } from './delivery_driversUncheckedUpdateWithoutVehiclesInputSchema';

export const delivery_driversUpdateToOneWithWhereWithoutVehiclesInputSchema: z.ZodType<Prisma.delivery_driversUpdateToOneWithWhereWithoutVehiclesInput> = z.object({
  where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_driversUpdateWithoutVehiclesInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutVehiclesInputSchema) ]),
}).strict();

export default delivery_driversUpdateToOneWithWhereWithoutVehiclesInputSchema;
