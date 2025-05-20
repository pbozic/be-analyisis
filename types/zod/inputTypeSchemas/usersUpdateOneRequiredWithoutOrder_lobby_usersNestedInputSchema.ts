import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutOrder_lobby_usersInputSchema } from './usersCreateWithoutOrder_lobby_usersInputSchema';
import { usersUncheckedCreateWithoutOrder_lobby_usersInputSchema } from './usersUncheckedCreateWithoutOrder_lobby_usersInputSchema';
import { usersCreateOrConnectWithoutOrder_lobby_usersInputSchema } from './usersCreateOrConnectWithoutOrder_lobby_usersInputSchema';
import { usersUpsertWithoutOrder_lobby_usersInputSchema } from './usersUpsertWithoutOrder_lobby_usersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema } from './usersUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema';
import { usersUpdateWithoutOrder_lobby_usersInputSchema } from './usersUpdateWithoutOrder_lobby_usersInputSchema';
import { usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema } from './usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema';

export const usersUpdateOneRequiredWithoutOrder_lobby_usersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutOrder_lobby_usersNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutOrder_lobby_usersInputSchema),z.lazy(() => usersUncheckedCreateWithoutOrder_lobby_usersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutOrder_lobby_usersInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutOrder_lobby_usersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema),z.lazy(() => usersUpdateWithoutOrder_lobby_usersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutOrder_lobby_usersNestedInputSchema;
