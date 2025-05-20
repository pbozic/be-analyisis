import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutDriver_history_locationsInputSchema } from './taxi_ordersCreateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema } from './taxi_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUpsertWithoutDriver_history_locationsInputSchema } from './taxi_ordersUpsertWithoutDriver_history_locationsInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema } from './taxi_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUpdateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUpdateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema';

export const taxi_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateOneWithoutDriver_history_locationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutDriver_history_locationsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema).optional(),
  upsert: z.lazy(() => taxi_ordersUpsertWithoutDriver_history_locationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => taxi_ordersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => taxi_ordersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => taxi_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema),z.lazy(() => taxi_ordersUpdateWithoutDriver_history_locationsInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema) ]).optional(),
}).strict();

export default taxi_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema;
