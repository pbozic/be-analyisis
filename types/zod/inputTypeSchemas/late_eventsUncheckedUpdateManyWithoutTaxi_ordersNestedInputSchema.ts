import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutTaxi_ordersInputSchema } from './late_eventsCreateWithoutTaxi_ordersInputSchema';
import { late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema } from './late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema';
import { late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema } from './late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema';
import { late_eventsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema } from './late_eventsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema';
import { late_eventsCreateManyTaxi_ordersInputEnvelopeSchema } from './late_eventsCreateManyTaxi_ordersInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema } from './late_eventsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema';
import { late_eventsUpdateManyWithWhereWithoutTaxi_ordersInputSchema } from './late_eventsUpdateManyWithWhereWithoutTaxi_ordersInputSchema';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';

export const late_eventsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema: z.ZodType<Prisma.late_eventsUncheckedUpdateManyWithoutTaxi_ordersNestedInput> = z.object({
  create: z.union([ z.lazy(() => late_eventsCreateWithoutTaxi_ordersInputSchema),z.lazy(() => late_eventsCreateWithoutTaxi_ordersInputSchema).array(),z.lazy(() => late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema),z.lazy(() => late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema),z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => late_eventsCreateManyTaxi_ordersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema),z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => late_eventsUpdateManyWithWhereWithoutTaxi_ordersInputSchema),z.lazy(() => late_eventsUpdateManyWithWhereWithoutTaxi_ordersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => late_eventsScalarWhereInputSchema),z.lazy(() => late_eventsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default late_eventsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema;
