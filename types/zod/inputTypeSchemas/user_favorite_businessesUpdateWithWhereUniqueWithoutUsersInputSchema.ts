import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';
import { user_favorite_businessesUpdateWithoutUsersInputSchema } from './user_favorite_businessesUpdateWithoutUsersInputSchema';
import { user_favorite_businessesUncheckedUpdateWithoutUsersInputSchema } from './user_favorite_businessesUncheckedUpdateWithoutUsersInputSchema';

export const user_favorite_businessesUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.user_favorite_businessesUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => user_favorite_businessesUpdateWithoutUsersInputSchema),z.lazy(() => user_favorite_businessesUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default user_favorite_businessesUpdateWithWhereUniqueWithoutUsersInputSchema;
