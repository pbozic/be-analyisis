import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersScalarWhereInputSchema } from './group_usersScalarWhereInputSchema';
import { group_usersUpdateManyMutationInputSchema } from './group_usersUpdateManyMutationInputSchema';
import { group_usersUncheckedUpdateManyWithoutParent_userInputSchema } from './group_usersUncheckedUpdateManyWithoutParent_userInputSchema';

export const group_usersUpdateManyWithWhereWithoutParent_userInputSchema: z.ZodType<Prisma.group_usersUpdateManyWithWhereWithoutParent_userInput> = z.object({
  where: z.lazy(() => group_usersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => group_usersUpdateManyMutationInputSchema),z.lazy(() => group_usersUncheckedUpdateManyWithoutParent_userInputSchema) ]),
}).strict();

export default group_usersUpdateManyWithWhereWithoutParent_userInputSchema;
