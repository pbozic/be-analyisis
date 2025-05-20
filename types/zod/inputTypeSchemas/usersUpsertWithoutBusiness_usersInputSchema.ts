import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutBusiness_usersInputSchema } from './usersUpdateWithoutBusiness_usersInputSchema';
import { usersUncheckedUpdateWithoutBusiness_usersInputSchema } from './usersUncheckedUpdateWithoutBusiness_usersInputSchema';
import { usersCreateWithoutBusiness_usersInputSchema } from './usersCreateWithoutBusiness_usersInputSchema';
import { usersUncheckedCreateWithoutBusiness_usersInputSchema } from './usersUncheckedCreateWithoutBusiness_usersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutBusiness_usersInputSchema: z.ZodType<Prisma.usersUpsertWithoutBusiness_usersInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutBusiness_usersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutBusiness_usersInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutBusiness_usersInputSchema),z.lazy(() => usersUncheckedCreateWithoutBusiness_usersInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutBusiness_usersInputSchema;
