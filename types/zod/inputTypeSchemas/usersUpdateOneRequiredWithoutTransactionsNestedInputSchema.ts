import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutTransactionsInputSchema } from './usersCreateWithoutTransactionsInputSchema';
import { usersUncheckedCreateWithoutTransactionsInputSchema } from './usersUncheckedCreateWithoutTransactionsInputSchema';
import { usersCreateOrConnectWithoutTransactionsInputSchema } from './usersCreateOrConnectWithoutTransactionsInputSchema';
import { usersUpsertWithoutTransactionsInputSchema } from './usersUpsertWithoutTransactionsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutTransactionsInputSchema } from './usersUpdateToOneWithWhereWithoutTransactionsInputSchema';
import { usersUpdateWithoutTransactionsInputSchema } from './usersUpdateWithoutTransactionsInputSchema';
import { usersUncheckedUpdateWithoutTransactionsInputSchema } from './usersUncheckedUpdateWithoutTransactionsInputSchema';

export const usersUpdateOneRequiredWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutTransactionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutTransactionsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutTransactionsInputSchema),z.lazy(() => usersUpdateWithoutTransactionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutTransactionsInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutTransactionsNestedInputSchema;
