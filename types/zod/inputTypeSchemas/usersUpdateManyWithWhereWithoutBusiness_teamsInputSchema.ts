import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersScalarWhereInputSchema } from './usersScalarWhereInputSchema';
import { usersUpdateManyMutationInputSchema } from './usersUpdateManyMutationInputSchema';
import { usersUncheckedUpdateManyWithoutBusiness_teamsInputSchema } from './usersUncheckedUpdateManyWithoutBusiness_teamsInputSchema';

export const usersUpdateManyWithWhereWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.usersUpdateManyWithWhereWithoutBusiness_teamsInput> = z.object({
  where: z.lazy(() => usersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => usersUpdateManyMutationInputSchema),z.lazy(() => usersUncheckedUpdateManyWithoutBusiness_teamsInputSchema) ]),
}).strict();

export default usersUpdateManyWithWhereWithoutBusiness_teamsInputSchema;
