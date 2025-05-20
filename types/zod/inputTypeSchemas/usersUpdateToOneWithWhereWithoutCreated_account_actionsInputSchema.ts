import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutCreated_account_actionsInputSchema } from './usersUpdateWithoutCreated_account_actionsInputSchema';
import { usersUncheckedUpdateWithoutCreated_account_actionsInputSchema } from './usersUncheckedUpdateWithoutCreated_account_actionsInputSchema';

export const usersUpdateToOneWithWhereWithoutCreated_account_actionsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutCreated_account_actionsInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutCreated_account_actionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCreated_account_actionsInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutCreated_account_actionsInputSchema;
