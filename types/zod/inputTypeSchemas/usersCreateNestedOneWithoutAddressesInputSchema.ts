import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutAddressesInputSchema } from './usersCreateWithoutAddressesInputSchema';
import { usersUncheckedCreateWithoutAddressesInputSchema } from './usersUncheckedCreateWithoutAddressesInputSchema';
import { usersCreateOrConnectWithoutAddressesInputSchema } from './usersCreateOrConnectWithoutAddressesInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutAddressesInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutAddressesInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutAddressesInputSchema;
