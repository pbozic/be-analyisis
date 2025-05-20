import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutCashbackInputSchema } from './usersCreateWithoutCashbackInputSchema';
import { usersUncheckedCreateWithoutCashbackInputSchema } from './usersUncheckedCreateWithoutCashbackInputSchema';

export const usersCreateOrConnectWithoutCashbackInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutCashbackInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutCashbackInputSchema),z.lazy(() => usersUncheckedCreateWithoutCashbackInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutCashbackInputSchema;
