import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutDriver_history_locationsInputSchema } from './delivery_ordersCreateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema } from './delivery_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutDriver_history_locationsInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutDriver_history_locationsInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional()
}).strict();

export default delivery_ordersCreateNestedOneWithoutDriver_history_locationsInputSchema;
