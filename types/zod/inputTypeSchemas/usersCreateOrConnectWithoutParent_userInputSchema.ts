import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutParent_userInputSchema } from './usersCreateWithoutParent_userInputSchema';
import { usersUncheckedCreateWithoutParent_userInputSchema } from './usersUncheckedCreateWithoutParent_userInputSchema';

export const usersCreateOrConnectWithoutParent_userInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutParent_userInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutParent_userInputSchema),z.lazy(() => usersUncheckedCreateWithoutParent_userInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutParent_userInputSchema;
