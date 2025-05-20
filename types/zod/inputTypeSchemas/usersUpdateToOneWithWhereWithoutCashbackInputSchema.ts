import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutCashbackInputSchema } from './usersUpdateWithoutCashbackInputSchema';
import { usersUncheckedUpdateWithoutCashbackInputSchema } from './usersUncheckedUpdateWithoutCashbackInputSchema';

export const usersUpdateToOneWithWhereWithoutCashbackInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutCashbackInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutCashbackInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCashbackInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutCashbackInputSchema;
