import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutReservationsInputSchema } from './businessCreateWithoutReservationsInputSchema';
import { businessUncheckedCreateWithoutReservationsInputSchema } from './businessUncheckedCreateWithoutReservationsInputSchema';

export const businessCreateOrConnectWithoutReservationsInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutReservationsInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutReservationsInputSchema),z.lazy(() => businessUncheckedCreateWithoutReservationsInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutReservationsInputSchema;
