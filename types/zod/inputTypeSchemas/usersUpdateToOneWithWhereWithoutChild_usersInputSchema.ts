import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutChild_usersInputSchema } from './usersUpdateWithoutChild_usersInputSchema';
import { usersUncheckedUpdateWithoutChild_usersInputSchema } from './usersUncheckedUpdateWithoutChild_usersInputSchema';

export const usersUpdateToOneWithWhereWithoutChild_usersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutChild_usersInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutChild_usersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutChild_usersInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutChild_usersInputSchema;
