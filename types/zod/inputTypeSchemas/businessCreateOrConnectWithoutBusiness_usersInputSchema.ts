import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutBusiness_usersInputSchema } from './businessCreateWithoutBusiness_usersInputSchema';
import { businessUncheckedCreateWithoutBusiness_usersInputSchema } from './businessUncheckedCreateWithoutBusiness_usersInputSchema';

export const businessCreateOrConnectWithoutBusiness_usersInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutBusiness_usersInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_usersInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_usersInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutBusiness_usersInputSchema;
