import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateWithoutBusinessInputSchema } from './account_actionsCreateWithoutBusinessInputSchema';
import { account_actionsUncheckedCreateWithoutBusinessInputSchema } from './account_actionsUncheckedCreateWithoutBusinessInputSchema';
import { account_actionsCreateOrConnectWithoutBusinessInputSchema } from './account_actionsCreateOrConnectWithoutBusinessInputSchema';
import { account_actionsUpsertWithWhereUniqueWithoutBusinessInputSchema } from './account_actionsUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { account_actionsCreateManyBusinessInputEnvelopeSchema } from './account_actionsCreateManyBusinessInputEnvelopeSchema';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithWhereUniqueWithoutBusinessInputSchema } from './account_actionsUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { account_actionsUpdateManyWithWhereWithoutBusinessInputSchema } from './account_actionsUpdateManyWithWhereWithoutBusinessInputSchema';
import { account_actionsScalarWhereInputSchema } from './account_actionsScalarWhereInputSchema';

export const account_actionsUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.account_actionsUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => account_actionsCreateWithoutBusinessInputSchema),z.lazy(() => account_actionsCreateWithoutBusinessInputSchema).array(),z.lazy(() => account_actionsUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => account_actionsCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => account_actionsCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => account_actionsUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => account_actionsUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => account_actionsCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => account_actionsUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => account_actionsUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => account_actionsUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => account_actionsUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => account_actionsScalarWhereInputSchema),z.lazy(() => account_actionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default account_actionsUpdateManyWithoutBusinessNestedInputSchema;
