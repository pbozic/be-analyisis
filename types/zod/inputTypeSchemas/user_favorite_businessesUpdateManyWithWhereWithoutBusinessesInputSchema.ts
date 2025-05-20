import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesScalarWhereInputSchema } from './user_favorite_businessesScalarWhereInputSchema';
import { user_favorite_businessesUpdateManyMutationInputSchema } from './user_favorite_businessesUpdateManyMutationInputSchema';
import { user_favorite_businessesUncheckedUpdateManyWithoutBusinessesInputSchema } from './user_favorite_businessesUncheckedUpdateManyWithoutBusinessesInputSchema';

export const user_favorite_businessesUpdateManyWithWhereWithoutBusinessesInputSchema: z.ZodType<Prisma.user_favorite_businessesUpdateManyWithWhereWithoutBusinessesInput> = z.object({
  where: z.lazy(() => user_favorite_businessesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => user_favorite_businessesUpdateManyMutationInputSchema),z.lazy(() => user_favorite_businessesUncheckedUpdateManyWithoutBusinessesInputSchema) ]),
}).strict();

export default user_favorite_businessesUpdateManyWithWhereWithoutBusinessesInputSchema;
