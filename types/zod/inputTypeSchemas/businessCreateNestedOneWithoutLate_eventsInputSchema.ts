import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutLate_eventsInputSchema } from './businessCreateWithoutLate_eventsInputSchema';
import { businessUncheckedCreateWithoutLate_eventsInputSchema } from './businessUncheckedCreateWithoutLate_eventsInputSchema';
import { businessCreateOrConnectWithoutLate_eventsInputSchema } from './businessCreateOrConnectWithoutLate_eventsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutLate_eventsInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutLate_eventsInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutLate_eventsInputSchema),z.lazy(() => businessUncheckedCreateWithoutLate_eventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutLate_eventsInputSchema).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional()
}).strict();

export default businessCreateNestedOneWithoutLate_eventsInputSchema;
