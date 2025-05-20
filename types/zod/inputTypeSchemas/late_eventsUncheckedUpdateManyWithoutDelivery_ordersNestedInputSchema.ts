import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutDelivery_ordersInputSchema } from './late_eventsCreateWithoutDelivery_ordersInputSchema';
import { late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema } from './late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema';
import { late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema } from './late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema';
import { late_eventsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema } from './late_eventsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema';
import { late_eventsCreateManyDelivery_ordersInputEnvelopeSchema } from './late_eventsCreateManyDelivery_ordersInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema } from './late_eventsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema';
import { late_eventsUpdateManyWithWhereWithoutDelivery_ordersInputSchema } from './late_eventsUpdateManyWithWhereWithoutDelivery_ordersInputSchema';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';

export const late_eventsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema: z.ZodType<Prisma.late_eventsUncheckedUpdateManyWithoutDelivery_ordersNestedInput> = z.object({
  create: z.union([ z.lazy(() => late_eventsCreateWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsCreateWithoutDelivery_ordersInputSchema).array(),z.lazy(() => late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => late_eventsCreateManyDelivery_ordersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => late_eventsUpdateManyWithWhereWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUpdateManyWithWhereWithoutDelivery_ordersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => late_eventsScalarWhereInputSchema),z.lazy(() => late_eventsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default late_eventsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema;
