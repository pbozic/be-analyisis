import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithoutAction_creatorInputSchema } from './account_actionsUpdateWithoutAction_creatorInputSchema';
import { account_actionsUncheckedUpdateWithoutAction_creatorInputSchema } from './account_actionsUncheckedUpdateWithoutAction_creatorInputSchema';
import { account_actionsCreateWithoutAction_creatorInputSchema } from './account_actionsCreateWithoutAction_creatorInputSchema';
import { account_actionsUncheckedCreateWithoutAction_creatorInputSchema } from './account_actionsUncheckedCreateWithoutAction_creatorInputSchema';

export const account_actionsUpsertWithWhereUniqueWithoutAction_creatorInputSchema: z.ZodType<Prisma.account_actionsUpsertWithWhereUniqueWithoutAction_creatorInput> = z.object({
  where: z.lazy(() => account_actionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => account_actionsUpdateWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUncheckedUpdateWithoutAction_creatorInputSchema) ]),
  create: z.union([ z.lazy(() => account_actionsCreateWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutAction_creatorInputSchema) ]),
}).strict();

export default account_actionsUpsertWithWhereUniqueWithoutAction_creatorInputSchema;
