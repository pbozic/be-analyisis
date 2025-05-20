import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutCashbackInputSchema } from './usersCreateWithoutCashbackInputSchema';
import { usersUncheckedCreateWithoutCashbackInputSchema } from './usersUncheckedCreateWithoutCashbackInputSchema';
import { usersCreateOrConnectWithoutCashbackInputSchema } from './usersCreateOrConnectWithoutCashbackInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutCashbackInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutCashbackInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutCashbackInputSchema),z.lazy(() => usersUncheckedCreateWithoutCashbackInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCashbackInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutCashbackInputSchema;
