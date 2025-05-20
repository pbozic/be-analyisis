import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutUser_favorite_businessesInputSchema } from './usersCreateWithoutUser_favorite_businessesInputSchema';
import { usersUncheckedCreateWithoutUser_favorite_businessesInputSchema } from './usersUncheckedCreateWithoutUser_favorite_businessesInputSchema';
import { usersCreateOrConnectWithoutUser_favorite_businessesInputSchema } from './usersCreateOrConnectWithoutUser_favorite_businessesInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutUser_favorite_businessesInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutUser_favorite_businessesInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutUser_favorite_businessesInputSchema),z.lazy(() => usersUncheckedCreateWithoutUser_favorite_businessesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutUser_favorite_businessesInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutUser_favorite_businessesInputSchema;
