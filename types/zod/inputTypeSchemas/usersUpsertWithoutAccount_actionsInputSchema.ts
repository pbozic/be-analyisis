import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutAccount_actionsInputSchema } from './usersUpdateWithoutAccount_actionsInputSchema';
import { usersUncheckedUpdateWithoutAccount_actionsInputSchema } from './usersUncheckedUpdateWithoutAccount_actionsInputSchema';
import { usersCreateWithoutAccount_actionsInputSchema } from './usersCreateWithoutAccount_actionsInputSchema';
import { usersUncheckedCreateWithoutAccount_actionsInputSchema } from './usersUncheckedCreateWithoutAccount_actionsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutAccount_actionsInputSchema: z.ZodType<Prisma.usersUpsertWithoutAccount_actionsInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutAccount_actionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutAccount_actionsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutAccount_actionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutAccount_actionsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutAccount_actionsInputSchema;
