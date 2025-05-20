import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutAccount_actionsInputSchema } from './usersUpdateWithoutAccount_actionsInputSchema';
import { usersUncheckedUpdateWithoutAccount_actionsInputSchema } from './usersUncheckedUpdateWithoutAccount_actionsInputSchema';

export const usersUpdateToOneWithWhereWithoutAccount_actionsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutAccount_actionsInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutAccount_actionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutAccount_actionsInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutAccount_actionsInputSchema;
