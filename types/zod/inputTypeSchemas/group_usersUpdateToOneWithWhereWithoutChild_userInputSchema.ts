import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';
import { group_usersUpdateWithoutChild_userInputSchema } from './group_usersUpdateWithoutChild_userInputSchema';
import { group_usersUncheckedUpdateWithoutChild_userInputSchema } from './group_usersUncheckedUpdateWithoutChild_userInputSchema';

export const group_usersUpdateToOneWithWhereWithoutChild_userInputSchema: z.ZodType<Prisma.group_usersUpdateToOneWithWhereWithoutChild_userInput> = z.object({
  where: z.lazy(() => group_usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => group_usersUpdateWithoutChild_userInputSchema),z.lazy(() => group_usersUncheckedUpdateWithoutChild_userInputSchema) ]),
}).strict();

export default group_usersUpdateToOneWithWhereWithoutChild_userInputSchema;
