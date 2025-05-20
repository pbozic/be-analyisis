import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateWithoutBusinessInputSchema } from './order_lobbiesCreateWithoutBusinessInputSchema';
import { order_lobbiesUncheckedCreateWithoutBusinessInputSchema } from './order_lobbiesUncheckedCreateWithoutBusinessInputSchema';
import { order_lobbiesCreateOrConnectWithoutBusinessInputSchema } from './order_lobbiesCreateOrConnectWithoutBusinessInputSchema';
import { order_lobbiesUpsertWithWhereUniqueWithoutBusinessInputSchema } from './order_lobbiesUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { order_lobbiesCreateManyBusinessInputEnvelopeSchema } from './order_lobbiesCreateManyBusinessInputEnvelopeSchema';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesUpdateWithWhereUniqueWithoutBusinessInputSchema } from './order_lobbiesUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { order_lobbiesUpdateManyWithWhereWithoutBusinessInputSchema } from './order_lobbiesUpdateManyWithWhereWithoutBusinessInputSchema';
import { order_lobbiesScalarWhereInputSchema } from './order_lobbiesScalarWhereInputSchema';

export const order_lobbiesUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.order_lobbiesUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => order_lobbiesCreateWithoutBusinessInputSchema),z.lazy(() => order_lobbiesCreateWithoutBusinessInputSchema).array(),z.lazy(() => order_lobbiesUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => order_lobbiesUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => order_lobbiesCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => order_lobbiesCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => order_lobbiesUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => order_lobbiesUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => order_lobbiesCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => order_lobbiesWhereUniqueInputSchema),z.lazy(() => order_lobbiesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => order_lobbiesWhereUniqueInputSchema),z.lazy(() => order_lobbiesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => order_lobbiesWhereUniqueInputSchema),z.lazy(() => order_lobbiesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => order_lobbiesWhereUniqueInputSchema),z.lazy(() => order_lobbiesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => order_lobbiesUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => order_lobbiesUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => order_lobbiesUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => order_lobbiesUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => order_lobbiesScalarWhereInputSchema),z.lazy(() => order_lobbiesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default order_lobbiesUpdateManyWithoutBusinessNestedInputSchema;
