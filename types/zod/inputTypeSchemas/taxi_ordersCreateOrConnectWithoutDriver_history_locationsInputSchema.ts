import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutDriver_history_locationsInputSchema } from './taxi_ordersCreateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema';

export const taxi_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutDriver_history_locationsInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutDriver_history_locationsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema;
