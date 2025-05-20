import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsWhereUniqueInputSchema } from './business_teamsWhereUniqueInputSchema';
import { business_teamsCreateWithoutUsersInputSchema } from './business_teamsCreateWithoutUsersInputSchema';
import { business_teamsUncheckedCreateWithoutUsersInputSchema } from './business_teamsUncheckedCreateWithoutUsersInputSchema';

export const business_teamsCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.business_teamsCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => business_teamsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => business_teamsCreateWithoutUsersInputSchema),z.lazy(() => business_teamsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default business_teamsCreateOrConnectWithoutUsersInputSchema;
