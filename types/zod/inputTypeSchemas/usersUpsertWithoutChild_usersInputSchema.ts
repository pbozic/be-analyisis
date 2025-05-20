import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutChild_usersInputSchema } from './usersUpdateWithoutChild_usersInputSchema';
import { usersUncheckedUpdateWithoutChild_usersInputSchema } from './usersUncheckedUpdateWithoutChild_usersInputSchema';
import { usersCreateWithoutChild_usersInputSchema } from './usersCreateWithoutChild_usersInputSchema';
import { usersUncheckedCreateWithoutChild_usersInputSchema } from './usersUncheckedCreateWithoutChild_usersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutChild_usersInputSchema: z.ZodType<Prisma.usersUpsertWithoutChild_usersInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutChild_usersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutChild_usersInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutChild_usersInputSchema),z.lazy(() => usersUncheckedCreateWithoutChild_usersInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutChild_usersInputSchema;
