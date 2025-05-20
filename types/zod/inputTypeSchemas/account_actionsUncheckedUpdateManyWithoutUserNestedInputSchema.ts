import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateWithoutUserInputSchema } from './account_actionsCreateWithoutUserInputSchema';
import { account_actionsUncheckedCreateWithoutUserInputSchema } from './account_actionsUncheckedCreateWithoutUserInputSchema';
import { account_actionsCreateOrConnectWithoutUserInputSchema } from './account_actionsCreateOrConnectWithoutUserInputSchema';
import { account_actionsUpsertWithWhereUniqueWithoutUserInputSchema } from './account_actionsUpsertWithWhereUniqueWithoutUserInputSchema';
import { account_actionsCreateManyUserInputEnvelopeSchema } from './account_actionsCreateManyUserInputEnvelopeSchema';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithWhereUniqueWithoutUserInputSchema } from './account_actionsUpdateWithWhereUniqueWithoutUserInputSchema';
import { account_actionsUpdateManyWithWhereWithoutUserInputSchema } from './account_actionsUpdateManyWithWhereWithoutUserInputSchema';
import { account_actionsScalarWhereInputSchema } from './account_actionsScalarWhereInputSchema';

export const account_actionsUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.account_actionsUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => account_actionsCreateWithoutUserInputSchema),z.lazy(() => account_actionsCreateWithoutUserInputSchema).array(),z.lazy(() => account_actionsUncheckedCreateWithoutUserInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => account_actionsCreateOrConnectWithoutUserInputSchema),z.lazy(() => account_actionsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => account_actionsUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => account_actionsUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => account_actionsCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => account_actionsUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => account_actionsUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => account_actionsUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => account_actionsUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => account_actionsScalarWhereInputSchema),z.lazy(() => account_actionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default account_actionsUncheckedUpdateManyWithoutUserNestedInputSchema;
