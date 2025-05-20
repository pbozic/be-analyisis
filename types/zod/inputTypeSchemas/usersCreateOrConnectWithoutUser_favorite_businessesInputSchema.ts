import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutUser_favorite_businessesInputSchema } from './usersCreateWithoutUser_favorite_businessesInputSchema';
import { usersUncheckedCreateWithoutUser_favorite_businessesInputSchema } from './usersUncheckedCreateWithoutUser_favorite_businessesInputSchema';

export const usersCreateOrConnectWithoutUser_favorite_businessesInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutUser_favorite_businessesInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutUser_favorite_businessesInputSchema),z.lazy(() => usersUncheckedCreateWithoutUser_favorite_businessesInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutUser_favorite_businessesInputSchema;
