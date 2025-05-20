import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithoutBusinessInputSchema } from './account_actionsUpdateWithoutBusinessInputSchema';
import { account_actionsUncheckedUpdateWithoutBusinessInputSchema } from './account_actionsUncheckedUpdateWithoutBusinessInputSchema';
import { account_actionsCreateWithoutBusinessInputSchema } from './account_actionsCreateWithoutBusinessInputSchema';
import { account_actionsUncheckedCreateWithoutBusinessInputSchema } from './account_actionsUncheckedCreateWithoutBusinessInputSchema';

export const account_actionsUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.account_actionsUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => account_actionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => account_actionsUpdateWithoutBusinessInputSchema),z.lazy(() => account_actionsUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => account_actionsCreateWithoutBusinessInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default account_actionsUpsertWithWhereUniqueWithoutBusinessInputSchema;
