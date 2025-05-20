import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsUpdateWithoutUsersInputSchema } from './business_teamsUpdateWithoutUsersInputSchema';
import { business_teamsUncheckedUpdateWithoutUsersInputSchema } from './business_teamsUncheckedUpdateWithoutUsersInputSchema';
import { business_teamsCreateWithoutUsersInputSchema } from './business_teamsCreateWithoutUsersInputSchema';
import { business_teamsUncheckedCreateWithoutUsersInputSchema } from './business_teamsUncheckedCreateWithoutUsersInputSchema';
import { business_teamsWhereInputSchema } from './business_teamsWhereInputSchema';

export const business_teamsUpsertWithoutUsersInputSchema: z.ZodType<Prisma.business_teamsUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => business_teamsUpdateWithoutUsersInputSchema),z.lazy(() => business_teamsUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => business_teamsCreateWithoutUsersInputSchema),z.lazy(() => business_teamsUncheckedCreateWithoutUsersInputSchema) ]),
  where: z.lazy(() => business_teamsWhereInputSchema).optional()
}).strict();

export default business_teamsUpsertWithoutUsersInputSchema;
