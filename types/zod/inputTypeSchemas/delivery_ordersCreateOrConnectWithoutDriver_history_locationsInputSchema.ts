import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutDriver_history_locationsInputSchema } from './delivery_ordersCreateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema';

export const delivery_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutDriver_history_locationsInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutDriver_history_locationsInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema) ]),
}).strict();

export default delivery_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema;
