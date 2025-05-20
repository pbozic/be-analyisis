import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutUserInputSchema } from './daily_meals_subscriptionsCreateWithoutUserInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema';
import { daily_meals_subscriptionsUpsertWithWhereUniqueWithoutUserInputSchema } from './daily_meals_subscriptionsUpsertWithWhereUniqueWithoutUserInputSchema';
import { daily_meals_subscriptionsCreateManyUserInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyUserInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithWhereUniqueWithoutUserInputSchema } from './daily_meals_subscriptionsUpdateWithWhereUniqueWithoutUserInputSchema';
import { daily_meals_subscriptionsUpdateManyWithWhereWithoutUserInputSchema } from './daily_meals_subscriptionsUpdateManyWithWhereWithoutUserInputSchema';
import { daily_meals_subscriptionsScalarWhereInputSchema } from './daily_meals_subscriptionsScalarWhereInputSchema';

export const daily_meals_subscriptionsUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => daily_meals_subscriptionsCreateWithoutUserInputSchema),z.lazy(() => daily_meals_subscriptionsCreateWithoutUserInputSchema).array(),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema),z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => daily_meals_subscriptionsCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema),z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default daily_meals_subscriptionsUncheckedUpdateManyWithoutUserNestedInputSchema;
