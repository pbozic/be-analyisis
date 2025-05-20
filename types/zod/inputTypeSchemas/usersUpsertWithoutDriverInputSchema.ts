import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutDriverInputSchema } from './usersUpdateWithoutDriverInputSchema';
import { usersUncheckedUpdateWithoutDriverInputSchema } from './usersUncheckedUpdateWithoutDriverInputSchema';
import { usersCreateWithoutDriverInputSchema } from './usersCreateWithoutDriverInputSchema';
import { usersUncheckedCreateWithoutDriverInputSchema } from './usersUncheckedCreateWithoutDriverInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutDriverInputSchema: z.ZodType<Prisma.usersUpsertWithoutDriverInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutDriverInputSchema),z.lazy(() => usersUncheckedUpdateWithoutDriverInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutDriverInputSchema),z.lazy(() => usersUncheckedCreateWithoutDriverInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutDriverInputSchema;
