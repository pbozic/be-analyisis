import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutCreated_account_actionsInputSchema } from './usersUpdateWithoutCreated_account_actionsInputSchema';
import { usersUncheckedUpdateWithoutCreated_account_actionsInputSchema } from './usersUncheckedUpdateWithoutCreated_account_actionsInputSchema';
import { usersCreateWithoutCreated_account_actionsInputSchema } from './usersCreateWithoutCreated_account_actionsInputSchema';
import { usersUncheckedCreateWithoutCreated_account_actionsInputSchema } from './usersUncheckedCreateWithoutCreated_account_actionsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutCreated_account_actionsInputSchema: z.ZodType<Prisma.usersUpsertWithoutCreated_account_actionsInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutCreated_account_actionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCreated_account_actionsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutCreated_account_actionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutCreated_account_actionsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutCreated_account_actionsInputSchema;
