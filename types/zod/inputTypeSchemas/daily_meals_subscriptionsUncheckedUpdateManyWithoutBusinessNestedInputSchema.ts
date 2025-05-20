import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateWithoutBusinessInputSchema } from './daily_meals_subscriptionsCreateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema } from './daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema';
import { daily_meals_subscriptionsUpsertWithWhereUniqueWithoutBusinessInputSchema } from './daily_meals_subscriptionsUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { daily_meals_subscriptionsCreateManyBusinessInputEnvelopeSchema } from './daily_meals_subscriptionsCreateManyBusinessInputEnvelopeSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithWhereUniqueWithoutBusinessInputSchema } from './daily_meals_subscriptionsUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { daily_meals_subscriptionsUpdateManyWithWhereWithoutBusinessInputSchema } from './daily_meals_subscriptionsUpdateManyWithWhereWithoutBusinessInputSchema';
import { daily_meals_subscriptionsScalarWhereInputSchema } from './daily_meals_subscriptionsScalarWhereInputSchema';

export const daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => daily_meals_subscriptionsCreateWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsCreateWithoutBusinessInputSchema).array(),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => daily_meals_subscriptionsCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema),z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessNestedInputSchema;
