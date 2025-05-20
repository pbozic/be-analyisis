import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReservationsInputSchema } from './usersCreateWithoutReservationsInputSchema';
import { usersUncheckedCreateWithoutReservationsInputSchema } from './usersUncheckedCreateWithoutReservationsInputSchema';
import { usersCreateOrConnectWithoutReservationsInputSchema } from './usersCreateOrConnectWithoutReservationsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutReservationsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutReservationsInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutReservationsInputSchema),z.lazy(() => usersUncheckedCreateWithoutReservationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutReservationsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutReservationsInputSchema;
