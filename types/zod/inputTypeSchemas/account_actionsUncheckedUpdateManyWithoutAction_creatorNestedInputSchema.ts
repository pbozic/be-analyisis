import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateWithoutAction_creatorInputSchema } from './account_actionsCreateWithoutAction_creatorInputSchema';
import { account_actionsUncheckedCreateWithoutAction_creatorInputSchema } from './account_actionsUncheckedCreateWithoutAction_creatorInputSchema';
import { account_actionsCreateOrConnectWithoutAction_creatorInputSchema } from './account_actionsCreateOrConnectWithoutAction_creatorInputSchema';
import { account_actionsUpsertWithWhereUniqueWithoutAction_creatorInputSchema } from './account_actionsUpsertWithWhereUniqueWithoutAction_creatorInputSchema';
import { account_actionsCreateManyAction_creatorInputEnvelopeSchema } from './account_actionsCreateManyAction_creatorInputEnvelopeSchema';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithWhereUniqueWithoutAction_creatorInputSchema } from './account_actionsUpdateWithWhereUniqueWithoutAction_creatorInputSchema';
import { account_actionsUpdateManyWithWhereWithoutAction_creatorInputSchema } from './account_actionsUpdateManyWithWhereWithoutAction_creatorInputSchema';
import { account_actionsScalarWhereInputSchema } from './account_actionsScalarWhereInputSchema';

export const account_actionsUncheckedUpdateManyWithoutAction_creatorNestedInputSchema: z.ZodType<Prisma.account_actionsUncheckedUpdateManyWithoutAction_creatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => account_actionsCreateWithoutAction_creatorInputSchema),z.lazy(() => account_actionsCreateWithoutAction_creatorInputSchema).array(),z.lazy(() => account_actionsUncheckedCreateWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutAction_creatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => account_actionsCreateOrConnectWithoutAction_creatorInputSchema),z.lazy(() => account_actionsCreateOrConnectWithoutAction_creatorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => account_actionsUpsertWithWhereUniqueWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUpsertWithWhereUniqueWithoutAction_creatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => account_actionsCreateManyAction_creatorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => account_actionsUpdateWithWhereUniqueWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUpdateWithWhereUniqueWithoutAction_creatorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => account_actionsUpdateManyWithWhereWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUpdateManyWithWhereWithoutAction_creatorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => account_actionsScalarWhereInputSchema),z.lazy(() => account_actionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default account_actionsUncheckedUpdateManyWithoutAction_creatorNestedInputSchema;
