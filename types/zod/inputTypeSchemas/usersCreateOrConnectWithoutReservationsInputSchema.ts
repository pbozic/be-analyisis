import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutReservationsInputSchema } from './usersCreateWithoutReservationsInputSchema';
import { usersUncheckedCreateWithoutReservationsInputSchema } from './usersUncheckedCreateWithoutReservationsInputSchema';

export const usersCreateOrConnectWithoutReservationsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutReservationsInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutReservationsInputSchema),z.lazy(() => usersUncheckedCreateWithoutReservationsInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutReservationsInputSchema;
