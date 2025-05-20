import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsScalarWhereInputSchema } from './account_actionsScalarWhereInputSchema';
import { account_actionsUpdateManyMutationInputSchema } from './account_actionsUpdateManyMutationInputSchema';
import { account_actionsUncheckedUpdateManyWithoutBusinessInputSchema } from './account_actionsUncheckedUpdateManyWithoutBusinessInputSchema';

export const account_actionsUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.account_actionsUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => account_actionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => account_actionsUpdateManyMutationInputSchema),z.lazy(() => account_actionsUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export default account_actionsUpdateManyWithWhereWithoutBusinessInputSchema;
