import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutParent_userInputSchema } from './usersUpdateWithoutParent_userInputSchema';
import { usersUncheckedUpdateWithoutParent_userInputSchema } from './usersUncheckedUpdateWithoutParent_userInputSchema';
import { usersCreateWithoutParent_userInputSchema } from './usersCreateWithoutParent_userInputSchema';
import { usersUncheckedCreateWithoutParent_userInputSchema } from './usersUncheckedCreateWithoutParent_userInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutParent_userInputSchema: z.ZodType<Prisma.usersUpsertWithoutParent_userInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutParent_userInputSchema),z.lazy(() => usersUncheckedUpdateWithoutParent_userInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutParent_userInputSchema),z.lazy(() => usersUncheckedCreateWithoutParent_userInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutParent_userInputSchema;
