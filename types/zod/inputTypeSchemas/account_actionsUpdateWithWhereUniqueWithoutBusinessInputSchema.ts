import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithoutBusinessInputSchema } from './account_actionsUpdateWithoutBusinessInputSchema';
import { account_actionsUncheckedUpdateWithoutBusinessInputSchema } from './account_actionsUncheckedUpdateWithoutBusinessInputSchema';

export const account_actionsUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.account_actionsUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => account_actionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => account_actionsUpdateWithoutBusinessInputSchema),z.lazy(() => account_actionsUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default account_actionsUpdateWithWhereUniqueWithoutBusinessInputSchema;
