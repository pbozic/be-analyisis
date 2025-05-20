import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithoutUserInputSchema } from './account_actionsUpdateWithoutUserInputSchema';
import { account_actionsUncheckedUpdateWithoutUserInputSchema } from './account_actionsUncheckedUpdateWithoutUserInputSchema';

export const account_actionsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.account_actionsUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => account_actionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => account_actionsUpdateWithoutUserInputSchema),z.lazy(() => account_actionsUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default account_actionsUpdateWithWhereUniqueWithoutUserInputSchema;
