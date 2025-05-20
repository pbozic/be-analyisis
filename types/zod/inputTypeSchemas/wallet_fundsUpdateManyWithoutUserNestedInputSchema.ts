import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsCreateWithoutUserInputSchema } from './wallet_fundsCreateWithoutUserInputSchema';
import { wallet_fundsUncheckedCreateWithoutUserInputSchema } from './wallet_fundsUncheckedCreateWithoutUserInputSchema';
import { wallet_fundsCreateOrConnectWithoutUserInputSchema } from './wallet_fundsCreateOrConnectWithoutUserInputSchema';
import { wallet_fundsUpsertWithWhereUniqueWithoutUserInputSchema } from './wallet_fundsUpsertWithWhereUniqueWithoutUserInputSchema';
import { wallet_fundsCreateManyUserInputEnvelopeSchema } from './wallet_fundsCreateManyUserInputEnvelopeSchema';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsUpdateWithWhereUniqueWithoutUserInputSchema } from './wallet_fundsUpdateWithWhereUniqueWithoutUserInputSchema';
import { wallet_fundsUpdateManyWithWhereWithoutUserInputSchema } from './wallet_fundsUpdateManyWithWhereWithoutUserInputSchema';
import { wallet_fundsScalarWhereInputSchema } from './wallet_fundsScalarWhereInputSchema';

export const wallet_fundsUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.wallet_fundsUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => wallet_fundsCreateWithoutUserInputSchema),z.lazy(() => wallet_fundsCreateWithoutUserInputSchema).array(),z.lazy(() => wallet_fundsUncheckedCreateWithoutUserInputSchema),z.lazy(() => wallet_fundsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wallet_fundsCreateOrConnectWithoutUserInputSchema),z.lazy(() => wallet_fundsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => wallet_fundsUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => wallet_fundsUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => wallet_fundsCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => wallet_fundsWhereUniqueInputSchema),z.lazy(() => wallet_fundsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => wallet_fundsWhereUniqueInputSchema),z.lazy(() => wallet_fundsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => wallet_fundsWhereUniqueInputSchema),z.lazy(() => wallet_fundsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => wallet_fundsWhereUniqueInputSchema),z.lazy(() => wallet_fundsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => wallet_fundsUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => wallet_fundsUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => wallet_fundsUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => wallet_fundsUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => wallet_fundsScalarWhereInputSchema),z.lazy(() => wallet_fundsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default wallet_fundsUpdateManyWithoutUserNestedInputSchema;
