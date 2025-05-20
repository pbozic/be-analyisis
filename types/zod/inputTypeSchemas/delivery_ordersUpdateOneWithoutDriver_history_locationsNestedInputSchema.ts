import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutDriver_history_locationsInputSchema } from './delivery_ordersCreateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema } from './delivery_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUpsertWithoutDriver_history_locationsInputSchema } from './delivery_ordersUpsertWithoutDriver_history_locationsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUpdateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUpdateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema';

export const delivery_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutDriver_history_locationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutDriver_history_locationsInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema).optional(),
  upsert: z.lazy(() => delivery_ordersUpsertWithoutDriver_history_locationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => delivery_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema),z.lazy(() => delivery_ordersUpdateWithoutDriver_history_locationsInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema) ]).optional(),
}).strict();

export default delivery_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema;
