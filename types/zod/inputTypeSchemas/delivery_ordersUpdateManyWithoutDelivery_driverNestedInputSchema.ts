import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutDelivery_driverInputSchema } from './delivery_ordersCreateWithoutDelivery_driverInputSchema';
import { delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema';
import { delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema } from './delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema';
import { delivery_ordersUpsertWithWhereUniqueWithoutDelivery_driverInputSchema } from './delivery_ordersUpsertWithWhereUniqueWithoutDelivery_driverInputSchema';
import { delivery_ordersCreateManyDelivery_driverInputEnvelopeSchema } from './delivery_ordersCreateManyDelivery_driverInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithWhereUniqueWithoutDelivery_driverInputSchema } from './delivery_ordersUpdateWithWhereUniqueWithoutDelivery_driverInputSchema';
import { delivery_ordersUpdateManyWithWhereWithoutDelivery_driverInputSchema } from './delivery_ordersUpdateManyWithWhereWithoutDelivery_driverInputSchema';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';

export const delivery_ordersUpdateManyWithoutDelivery_driverNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateManyWithoutDelivery_driverNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersCreateWithoutDelivery_driverInputSchema).array(),z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutDelivery_driverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => delivery_ordersCreateManyDelivery_driverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutDelivery_driverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutDelivery_driverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => delivery_ordersScalarWhereInputSchema),z.lazy(() => delivery_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default delivery_ordersUpdateManyWithoutDelivery_driverNestedInputSchema;
