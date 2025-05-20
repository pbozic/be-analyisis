import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutOrder_lobby_usersInputSchema } from './usersCreateWithoutOrder_lobby_usersInputSchema';
import { usersUncheckedCreateWithoutOrder_lobby_usersInputSchema } from './usersUncheckedCreateWithoutOrder_lobby_usersInputSchema';
import { usersCreateOrConnectWithoutOrder_lobby_usersInputSchema } from './usersCreateOrConnectWithoutOrder_lobby_usersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutOrder_lobby_usersInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutOrder_lobby_usersInputSchema),z.lazy(() => usersUncheckedCreateWithoutOrder_lobby_usersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutOrder_lobby_usersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutOrder_lobby_usersInputSchema;
