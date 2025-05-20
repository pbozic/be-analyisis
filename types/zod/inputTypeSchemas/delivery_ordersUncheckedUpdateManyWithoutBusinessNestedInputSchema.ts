import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutBusinessInputSchema } from './delivery_ordersCreateWithoutBusinessInputSchema';
import { delivery_ordersUncheckedCreateWithoutBusinessInputSchema } from './delivery_ordersUncheckedCreateWithoutBusinessInputSchema';
import { delivery_ordersCreateOrConnectWithoutBusinessInputSchema } from './delivery_ordersCreateOrConnectWithoutBusinessInputSchema';
import { delivery_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema } from './delivery_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { delivery_ordersCreateManyBusinessInputEnvelopeSchema } from './delivery_ordersCreateManyBusinessInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema } from './delivery_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { delivery_ordersUpdateManyWithWhereWithoutBusinessInputSchema } from './delivery_ordersUpdateManyWithWhereWithoutBusinessInputSchema';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';

export const delivery_ordersUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.delivery_ordersUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutBusinessInputSchema),z.lazy(() => delivery_ordersCreateWithoutBusinessInputSchema).array(),z.lazy(() => delivery_ordersUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => delivery_ordersCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => delivery_ordersCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => delivery_ordersCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => delivery_ordersScalarWhereInputSchema),z.lazy(() => delivery_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default delivery_ordersUncheckedUpdateManyWithoutBusinessNestedInputSchema;
