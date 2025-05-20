import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutTransactionsInputSchema } from './usersUpdateWithoutTransactionsInputSchema';
import { usersUncheckedUpdateWithoutTransactionsInputSchema } from './usersUncheckedUpdateWithoutTransactionsInputSchema';
import { usersCreateWithoutTransactionsInputSchema } from './usersCreateWithoutTransactionsInputSchema';
import { usersUncheckedCreateWithoutTransactionsInputSchema } from './usersUncheckedCreateWithoutTransactionsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.usersUpsertWithoutTransactionsInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutTransactionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutTransactionsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutTransactionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutTransactionsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutTransactionsInputSchema;
