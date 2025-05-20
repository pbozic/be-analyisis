import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutWallet_fundsInputSchema } from './usersCreateWithoutWallet_fundsInputSchema';
import { usersUncheckedCreateWithoutWallet_fundsInputSchema } from './usersUncheckedCreateWithoutWallet_fundsInputSchema';

export const usersCreateOrConnectWithoutWallet_fundsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutWallet_fundsInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutWallet_fundsInputSchema),z.lazy(() => usersUncheckedCreateWithoutWallet_fundsInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutWallet_fundsInputSchema;
