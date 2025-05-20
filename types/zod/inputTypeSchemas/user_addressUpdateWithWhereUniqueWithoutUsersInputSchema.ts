import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';
import { user_addressUpdateWithoutUsersInputSchema } from './user_addressUpdateWithoutUsersInputSchema';
import { user_addressUncheckedUpdateWithoutUsersInputSchema } from './user_addressUncheckedUpdateWithoutUsersInputSchema';

export const user_addressUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.user_addressUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => user_addressWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => user_addressUpdateWithoutUsersInputSchema),z.lazy(() => user_addressUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default user_addressUpdateWithWhereUniqueWithoutUsersInputSchema;
