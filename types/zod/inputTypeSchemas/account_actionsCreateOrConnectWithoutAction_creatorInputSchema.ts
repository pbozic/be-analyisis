import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsCreateWithoutAction_creatorInputSchema } from './account_actionsCreateWithoutAction_creatorInputSchema';
import { account_actionsUncheckedCreateWithoutAction_creatorInputSchema } from './account_actionsUncheckedCreateWithoutAction_creatorInputSchema';

export const account_actionsCreateOrConnectWithoutAction_creatorInputSchema: z.ZodType<Prisma.account_actionsCreateOrConnectWithoutAction_creatorInput> = z.object({
  where: z.lazy(() => account_actionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => account_actionsCreateWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutAction_creatorInputSchema) ]),
}).strict();

export default account_actionsCreateOrConnectWithoutAction_creatorInputSchema;
