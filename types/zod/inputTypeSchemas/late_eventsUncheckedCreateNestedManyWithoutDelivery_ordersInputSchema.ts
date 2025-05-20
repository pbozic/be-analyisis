import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutDelivery_ordersInputSchema } from './late_eventsCreateWithoutDelivery_ordersInputSchema';
import { late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema } from './late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema';
import { late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema } from './late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema';
import { late_eventsCreateManyDelivery_ordersInputEnvelopeSchema } from './late_eventsCreateManyDelivery_ordersInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';

export const late_eventsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.late_eventsUncheckedCreateNestedManyWithoutDelivery_ordersInput> = z.object({
  create: z.union([ z.lazy(() => late_eventsCreateWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsCreateWithoutDelivery_ordersInputSchema).array(),z.lazy(() => late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => late_eventsCreateManyDelivery_ordersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default late_eventsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema;
