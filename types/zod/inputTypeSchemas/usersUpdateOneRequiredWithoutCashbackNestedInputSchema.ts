import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutCashbackInputSchema } from './usersCreateWithoutCashbackInputSchema';
import { usersUncheckedCreateWithoutCashbackInputSchema } from './usersUncheckedCreateWithoutCashbackInputSchema';
import { usersCreateOrConnectWithoutCashbackInputSchema } from './usersCreateOrConnectWithoutCashbackInputSchema';
import { usersUpsertWithoutCashbackInputSchema } from './usersUpsertWithoutCashbackInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutCashbackInputSchema } from './usersUpdateToOneWithWhereWithoutCashbackInputSchema';
import { usersUpdateWithoutCashbackInputSchema } from './usersUpdateWithoutCashbackInputSchema';
import { usersUncheckedUpdateWithoutCashbackInputSchema } from './usersUncheckedUpdateWithoutCashbackInputSchema';

export const usersUpdateOneRequiredWithoutCashbackNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutCashbackNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutCashbackInputSchema),z.lazy(() => usersUncheckedCreateWithoutCashbackInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCashbackInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutCashbackInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutCashbackInputSchema),z.lazy(() => usersUpdateWithoutCashbackInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCashbackInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutCashbackNestedInputSchema;
