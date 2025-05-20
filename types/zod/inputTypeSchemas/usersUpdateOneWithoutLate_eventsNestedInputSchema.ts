import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutLate_eventsInputSchema } from './usersCreateWithoutLate_eventsInputSchema';
import { usersUncheckedCreateWithoutLate_eventsInputSchema } from './usersUncheckedCreateWithoutLate_eventsInputSchema';
import { usersCreateOrConnectWithoutLate_eventsInputSchema } from './usersCreateOrConnectWithoutLate_eventsInputSchema';
import { usersUpsertWithoutLate_eventsInputSchema } from './usersUpsertWithoutLate_eventsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutLate_eventsInputSchema } from './usersUpdateToOneWithWhereWithoutLate_eventsInputSchema';
import { usersUpdateWithoutLate_eventsInputSchema } from './usersUpdateWithoutLate_eventsInputSchema';
import { usersUncheckedUpdateWithoutLate_eventsInputSchema } from './usersUncheckedUpdateWithoutLate_eventsInputSchema';

export const usersUpdateOneWithoutLate_eventsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutLate_eventsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutLate_eventsInputSchema),z.lazy(() => usersUncheckedCreateWithoutLate_eventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutLate_eventsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutLate_eventsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutLate_eventsInputSchema),z.lazy(() => usersUpdateWithoutLate_eventsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLate_eventsInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneWithoutLate_eventsNestedInputSchema;
