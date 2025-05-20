import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutLate_eventsInputSchema } from './businessUpdateWithoutLate_eventsInputSchema';
import { businessUncheckedUpdateWithoutLate_eventsInputSchema } from './businessUncheckedUpdateWithoutLate_eventsInputSchema';
import { businessCreateWithoutLate_eventsInputSchema } from './businessCreateWithoutLate_eventsInputSchema';
import { businessUncheckedCreateWithoutLate_eventsInputSchema } from './businessUncheckedCreateWithoutLate_eventsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutLate_eventsInputSchema: z.ZodType<Prisma.businessUpsertWithoutLate_eventsInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutLate_eventsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutLate_eventsInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutLate_eventsInputSchema),z.lazy(() => businessUncheckedCreateWithoutLate_eventsInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutLate_eventsInputSchema;
