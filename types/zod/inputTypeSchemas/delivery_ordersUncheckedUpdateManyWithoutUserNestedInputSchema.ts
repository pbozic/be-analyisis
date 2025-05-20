import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutUserInputSchema } from './delivery_ordersCreateWithoutUserInputSchema';
import { delivery_ordersUncheckedCreateWithoutUserInputSchema } from './delivery_ordersUncheckedCreateWithoutUserInputSchema';
import { delivery_ordersCreateOrConnectWithoutUserInputSchema } from './delivery_ordersCreateOrConnectWithoutUserInputSchema';
import { delivery_ordersUpsertWithWhereUniqueWithoutUserInputSchema } from './delivery_ordersUpsertWithWhereUniqueWithoutUserInputSchema';
import { delivery_ordersCreateManyUserInputEnvelopeSchema } from './delivery_ordersCreateManyUserInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithWhereUniqueWithoutUserInputSchema } from './delivery_ordersUpdateWithWhereUniqueWithoutUserInputSchema';
import { delivery_ordersUpdateManyWithWhereWithoutUserInputSchema } from './delivery_ordersUpdateManyWithWhereWithoutUserInputSchema';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';

export const delivery_ordersUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.delivery_ordersUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutUserInputSchema),z.lazy(() => delivery_ordersCreateWithoutUserInputSchema).array(),z.lazy(() => delivery_ordersUncheckedCreateWithoutUserInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => delivery_ordersCreateOrConnectWithoutUserInputSchema),z.lazy(() => delivery_ordersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => delivery_ordersCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => delivery_ordersScalarWhereInputSchema),z.lazy(() => delivery_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default delivery_ordersUncheckedUpdateManyWithoutUserNestedInputSchema;
