import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsCreateWithoutUsersInputSchema } from './business_teamsCreateWithoutUsersInputSchema';
import { business_teamsUncheckedCreateWithoutUsersInputSchema } from './business_teamsUncheckedCreateWithoutUsersInputSchema';
import { business_teamsCreateOrConnectWithoutUsersInputSchema } from './business_teamsCreateOrConnectWithoutUsersInputSchema';
import { business_teamsWhereUniqueInputSchema } from './business_teamsWhereUniqueInputSchema';

export const business_teamsCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.business_teamsCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => business_teamsCreateWithoutUsersInputSchema),z.lazy(() => business_teamsUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => business_teamsCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => business_teamsWhereUniqueInputSchema).optional()
}).strict();

export default business_teamsCreateNestedOneWithoutUsersInputSchema;
