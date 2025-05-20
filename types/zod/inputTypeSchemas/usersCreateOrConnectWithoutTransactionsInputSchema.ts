import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutTransactionsInputSchema } from './usersCreateWithoutTransactionsInputSchema';
import { usersUncheckedCreateWithoutTransactionsInputSchema } from './usersUncheckedCreateWithoutTransactionsInputSchema';

export const usersCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutTransactionsInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutTransactionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutTransactionsInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutTransactionsInputSchema;
