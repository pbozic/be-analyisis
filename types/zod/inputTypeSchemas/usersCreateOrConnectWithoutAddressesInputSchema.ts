import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutAddressesInputSchema } from './usersCreateWithoutAddressesInputSchema';
import { usersUncheckedCreateWithoutAddressesInputSchema } from './usersUncheckedCreateWithoutAddressesInputSchema';

export const usersCreateOrConnectWithoutAddressesInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutAddressesInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutAddressesInputSchema;
