import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';
import { group_usersCreateWithoutParent_userInputSchema } from './group_usersCreateWithoutParent_userInputSchema';
import { group_usersUncheckedCreateWithoutParent_userInputSchema } from './group_usersUncheckedCreateWithoutParent_userInputSchema';

export const group_usersCreateOrConnectWithoutParent_userInputSchema: z.ZodType<Prisma.group_usersCreateOrConnectWithoutParent_userInput> = z.object({
  where: z.lazy(() => group_usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => group_usersCreateWithoutParent_userInputSchema),z.lazy(() => group_usersUncheckedCreateWithoutParent_userInputSchema) ]),
}).strict();

export default group_usersCreateOrConnectWithoutParent_userInputSchema;
