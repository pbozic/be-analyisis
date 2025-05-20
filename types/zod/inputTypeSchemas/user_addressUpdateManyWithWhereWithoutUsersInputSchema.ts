import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressScalarWhereInputSchema } from './user_addressScalarWhereInputSchema';
import { user_addressUpdateManyMutationInputSchema } from './user_addressUpdateManyMutationInputSchema';
import { user_addressUncheckedUpdateManyWithoutUsersInputSchema } from './user_addressUncheckedUpdateManyWithoutUsersInputSchema';

export const user_addressUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.user_addressUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => user_addressScalarWhereInputSchema),
  data: z.union([ z.lazy(() => user_addressUpdateManyMutationInputSchema),z.lazy(() => user_addressUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export default user_addressUpdateManyWithWhereWithoutUsersInputSchema;
