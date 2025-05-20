import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersCreateWithoutChild_userInputSchema } from './group_usersCreateWithoutChild_userInputSchema';
import { group_usersUncheckedCreateWithoutChild_userInputSchema } from './group_usersUncheckedCreateWithoutChild_userInputSchema';
import { group_usersCreateOrConnectWithoutChild_userInputSchema } from './group_usersCreateOrConnectWithoutChild_userInputSchema';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';

export const group_usersUncheckedCreateNestedOneWithoutChild_userInputSchema: z.ZodType<Prisma.group_usersUncheckedCreateNestedOneWithoutChild_userInput> = z.object({
  create: z.union([ z.lazy(() => group_usersCreateWithoutChild_userInputSchema),z.lazy(() => group_usersUncheckedCreateWithoutChild_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => group_usersCreateOrConnectWithoutChild_userInputSchema).optional(),
  connect: z.lazy(() => group_usersWhereUniqueInputSchema).optional()
}).strict();

export default group_usersUncheckedCreateNestedOneWithoutChild_userInputSchema;
