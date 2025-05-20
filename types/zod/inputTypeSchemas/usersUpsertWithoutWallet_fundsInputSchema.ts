import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutWallet_fundsInputSchema } from './usersUpdateWithoutWallet_fundsInputSchema';
import { usersUncheckedUpdateWithoutWallet_fundsInputSchema } from './usersUncheckedUpdateWithoutWallet_fundsInputSchema';
import { usersCreateWithoutWallet_fundsInputSchema } from './usersCreateWithoutWallet_fundsInputSchema';
import { usersUncheckedCreateWithoutWallet_fundsInputSchema } from './usersUncheckedCreateWithoutWallet_fundsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutWallet_fundsInputSchema: z.ZodType<Prisma.usersUpsertWithoutWallet_fundsInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutWallet_fundsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutWallet_fundsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutWallet_fundsInputSchema),z.lazy(() => usersUncheckedCreateWithoutWallet_fundsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutWallet_fundsInputSchema;
