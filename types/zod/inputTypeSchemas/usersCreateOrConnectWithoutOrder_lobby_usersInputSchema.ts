import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutOrder_lobby_usersInputSchema } from './usersCreateWithoutOrder_lobby_usersInputSchema';
import { usersUncheckedCreateWithoutOrder_lobby_usersInputSchema } from './usersUncheckedCreateWithoutOrder_lobby_usersInputSchema';

export const usersCreateOrConnectWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutOrder_lobby_usersInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutOrder_lobby_usersInputSchema),z.lazy(() => usersUncheckedCreateWithoutOrder_lobby_usersInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutOrder_lobby_usersInputSchema;
