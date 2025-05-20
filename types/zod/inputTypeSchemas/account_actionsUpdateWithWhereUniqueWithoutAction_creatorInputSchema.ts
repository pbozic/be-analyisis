import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithoutAction_creatorInputSchema } from './account_actionsUpdateWithoutAction_creatorInputSchema';
import { account_actionsUncheckedUpdateWithoutAction_creatorInputSchema } from './account_actionsUncheckedUpdateWithoutAction_creatorInputSchema';

export const account_actionsUpdateWithWhereUniqueWithoutAction_creatorInputSchema: z.ZodType<Prisma.account_actionsUpdateWithWhereUniqueWithoutAction_creatorInput> = z.object({
  where: z.lazy(() => account_actionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => account_actionsUpdateWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUncheckedUpdateWithoutAction_creatorInputSchema) ]),
}).strict();

export default account_actionsUpdateWithWhereUniqueWithoutAction_creatorInputSchema;
