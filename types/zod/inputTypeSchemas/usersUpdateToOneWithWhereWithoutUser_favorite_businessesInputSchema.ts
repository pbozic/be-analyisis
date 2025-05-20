import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutUser_favorite_businessesInputSchema } from './usersUpdateWithoutUser_favorite_businessesInputSchema';
import { usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema } from './usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema';

export const usersUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutUser_favorite_businessesInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutUser_favorite_businessesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema;
