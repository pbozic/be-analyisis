import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateWithoutDriverInputSchema } from './delivery_order_sentCreateWithoutDriverInputSchema';
import { delivery_order_sentUncheckedCreateWithoutDriverInputSchema } from './delivery_order_sentUncheckedCreateWithoutDriverInputSchema';
import { delivery_order_sentCreateOrConnectWithoutDriverInputSchema } from './delivery_order_sentCreateOrConnectWithoutDriverInputSchema';
import { delivery_order_sentUpsertWithWhereUniqueWithoutDriverInputSchema } from './delivery_order_sentUpsertWithWhereUniqueWithoutDriverInputSchema';
import { delivery_order_sentCreateManyDriverInputEnvelopeSchema } from './delivery_order_sentCreateManyDriverInputEnvelopeSchema';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema } from './delivery_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema';
import { delivery_order_sentUpdateManyWithWhereWithoutDriverInputSchema } from './delivery_order_sentUpdateManyWithWhereWithoutDriverInputSchema';
import { delivery_order_sentScalarWhereInputSchema } from './delivery_order_sentScalarWhereInputSchema';

export const delivery_order_sentUncheckedUpdateManyWithoutDriverNestedInputSchema: z.ZodType<Prisma.delivery_order_sentUncheckedUpdateManyWithoutDriverNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_order_sentCreateWithoutDriverInputSchema),z.lazy(() => delivery_order_sentCreateWithoutDriverInputSchema).array(),z.lazy(() => delivery_order_sentUncheckedCreateWithoutDriverInputSchema),z.lazy(() => delivery_order_sentUncheckedCreateWithoutDriverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => delivery_order_sentCreateOrConnectWithoutDriverInputSchema),z.lazy(() => delivery_order_sentCreateOrConnectWithoutDriverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => delivery_order_sentUpsertWithWhereUniqueWithoutDriverInputSchema),z.lazy(() => delivery_order_sentUpsertWithWhereUniqueWithoutDriverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => delivery_order_sentCreateManyDriverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => delivery_order_sentWhereUniqueInputSchema),z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => delivery_order_sentWhereUniqueInputSchema),z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => delivery_order_sentWhereUniqueInputSchema),z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => delivery_order_sentWhereUniqueInputSchema),z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => delivery_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema),z.lazy(() => delivery_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => delivery_order_sentUpdateManyWithWhereWithoutDriverInputSchema),z.lazy(() => delivery_order_sentUpdateManyWithWhereWithoutDriverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => delivery_order_sentScalarWhereInputSchema),z.lazy(() => delivery_order_sentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default delivery_order_sentUncheckedUpdateManyWithoutDriverNestedInputSchema;
