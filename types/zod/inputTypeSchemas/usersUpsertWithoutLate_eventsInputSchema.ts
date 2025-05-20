import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutLate_eventsInputSchema } from './usersUpdateWithoutLate_eventsInputSchema';
import { usersUncheckedUpdateWithoutLate_eventsInputSchema } from './usersUncheckedUpdateWithoutLate_eventsInputSchema';
import { usersCreateWithoutLate_eventsInputSchema } from './usersCreateWithoutLate_eventsInputSchema';
import { usersUncheckedCreateWithoutLate_eventsInputSchema } from './usersUncheckedCreateWithoutLate_eventsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutLate_eventsInputSchema: z.ZodType<Prisma.usersUpsertWithoutLate_eventsInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutLate_eventsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLate_eventsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutLate_eventsInputSchema),z.lazy(() => usersUncheckedCreateWithoutLate_eventsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutLate_eventsInputSchema;
