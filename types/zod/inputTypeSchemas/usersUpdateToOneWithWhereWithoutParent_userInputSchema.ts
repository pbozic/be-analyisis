import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutParent_userInputSchema } from './usersUpdateWithoutParent_userInputSchema';
import { usersUncheckedUpdateWithoutParent_userInputSchema } from './usersUncheckedUpdateWithoutParent_userInputSchema';

export const usersUpdateToOneWithWhereWithoutParent_userInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutParent_userInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutParent_userInputSchema),z.lazy(() => usersUncheckedUpdateWithoutParent_userInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutParent_userInputSchema;
