import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutLate_eventsInputSchema } from './businessCreateWithoutLate_eventsInputSchema';
import { businessUncheckedCreateWithoutLate_eventsInputSchema } from './businessUncheckedCreateWithoutLate_eventsInputSchema';

export const businessCreateOrConnectWithoutLate_eventsInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutLate_eventsInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutLate_eventsInputSchema),z.lazy(() => businessUncheckedCreateWithoutLate_eventsInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutLate_eventsInputSchema;
