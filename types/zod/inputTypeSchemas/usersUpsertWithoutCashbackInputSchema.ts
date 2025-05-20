import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutCashbackInputSchema } from './usersUpdateWithoutCashbackInputSchema';
import { usersUncheckedUpdateWithoutCashbackInputSchema } from './usersUncheckedUpdateWithoutCashbackInputSchema';
import { usersCreateWithoutCashbackInputSchema } from './usersCreateWithoutCashbackInputSchema';
import { usersUncheckedCreateWithoutCashbackInputSchema } from './usersUncheckedCreateWithoutCashbackInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutCashbackInputSchema: z.ZodType<Prisma.usersUpsertWithoutCashbackInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutCashbackInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCashbackInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutCashbackInputSchema),z.lazy(() => usersUncheckedCreateWithoutCashbackInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutCashbackInputSchema;
