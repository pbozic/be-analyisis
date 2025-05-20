import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsScalarWhereInputSchema } from './account_actionsScalarWhereInputSchema';
import { account_actionsUpdateManyMutationInputSchema } from './account_actionsUpdateManyMutationInputSchema';
import { account_actionsUncheckedUpdateManyWithoutUserInputSchema } from './account_actionsUncheckedUpdateManyWithoutUserInputSchema';

export const account_actionsUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.account_actionsUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => account_actionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => account_actionsUpdateManyMutationInputSchema),z.lazy(() => account_actionsUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default account_actionsUpdateManyWithWhereWithoutUserInputSchema;
