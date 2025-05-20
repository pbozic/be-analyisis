import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutTransactionsInputSchema } from './usersUpdateWithoutTransactionsInputSchema';
import { usersUncheckedUpdateWithoutTransactionsInputSchema } from './usersUncheckedUpdateWithoutTransactionsInputSchema';

export const usersUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutTransactionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutTransactionsInputSchema;
