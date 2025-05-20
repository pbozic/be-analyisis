import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateWithoutDelivery_driverInputSchema } from './delivery_order_sentCreateWithoutDelivery_driverInputSchema';
import { delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema';
import { delivery_order_sentCreateOrConnectWithoutDelivery_driverInputSchema } from './delivery_order_sentCreateOrConnectWithoutDelivery_driverInputSchema';
import { delivery_order_sentUpsertWithWhereUniqueWithoutDelivery_driverInputSchema } from './delivery_order_sentUpsertWithWhereUniqueWithoutDelivery_driverInputSchema';
import { delivery_order_sentCreateManyDelivery_driverInputEnvelopeSchema } from './delivery_order_sentCreateManyDelivery_driverInputEnvelopeSchema';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentUpdateWithWhereUniqueWithoutDelivery_driverInputSchema } from './delivery_order_sentUpdateWithWhereUniqueWithoutDelivery_driverInputSchema';
import { delivery_order_sentUpdateManyWithWhereWithoutDelivery_driverInputSchema } from './delivery_order_sentUpdateManyWithWhereWithoutDelivery_driverInputSchema';
import { delivery_order_sentScalarWhereInputSchema } from './delivery_order_sentScalarWhereInputSchema';

export const delivery_order_sentUncheckedUpdateManyWithoutDelivery_driverNestedInputSchema: z.ZodType<Prisma.delivery_order_sentUncheckedUpdateManyWithoutDelivery_driverNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_order_sentCreateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentCreateWithoutDelivery_driverInputSchema).array(),z.lazy(() => delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => delivery_order_sentCreateOrConnectWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentCreateOrConnectWithoutDelivery_driverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => delivery_order_sentUpsertWithWhereUniqueWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentUpsertWithWhereUniqueWithoutDelivery_driverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => delivery_order_sentCreateManyDelivery_driverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => delivery_order_sentWhereUniqueInputSchema),z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => delivery_order_sentWhereUniqueInputSchema),z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => delivery_order_sentWhereUniqueInputSchema),z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => delivery_order_sentWhereUniqueInputSchema),z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => delivery_order_sentUpdateWithWhereUniqueWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentUpdateWithWhereUniqueWithoutDelivery_driverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => delivery_order_sentUpdateManyWithWhereWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentUpdateManyWithWhereWithoutDelivery_driverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => delivery_order_sentScalarWhereInputSchema),z.lazy(() => delivery_order_sentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default delivery_order_sentUncheckedUpdateManyWithoutDelivery_driverNestedInputSchema;
