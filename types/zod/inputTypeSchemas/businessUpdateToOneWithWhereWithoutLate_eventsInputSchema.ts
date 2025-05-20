import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutLate_eventsInputSchema } from './businessUpdateWithoutLate_eventsInputSchema';
import { businessUncheckedUpdateWithoutLate_eventsInputSchema } from './businessUncheckedUpdateWithoutLate_eventsInputSchema';

export const businessUpdateToOneWithWhereWithoutLate_eventsInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutLate_eventsInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutLate_eventsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutLate_eventsInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutLate_eventsInputSchema;
