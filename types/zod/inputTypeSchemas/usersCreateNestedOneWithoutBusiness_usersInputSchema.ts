import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutBusiness_usersInputSchema } from './usersCreateWithoutBusiness_usersInputSchema';
import { usersUncheckedCreateWithoutBusiness_usersInputSchema } from './usersUncheckedCreateWithoutBusiness_usersInputSchema';
import { usersCreateOrConnectWithoutBusiness_usersInputSchema } from './usersCreateOrConnectWithoutBusiness_usersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutBusiness_usersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutBusiness_usersInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutBusiness_usersInputSchema),z.lazy(() => usersUncheckedCreateWithoutBusiness_usersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutBusiness_usersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutBusiness_usersInputSchema;
