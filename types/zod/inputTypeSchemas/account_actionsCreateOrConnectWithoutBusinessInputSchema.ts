import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsCreateWithoutBusinessInputSchema } from './account_actionsCreateWithoutBusinessInputSchema';
import { account_actionsUncheckedCreateWithoutBusinessInputSchema } from './account_actionsUncheckedCreateWithoutBusinessInputSchema';

export const account_actionsCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.account_actionsCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => account_actionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => account_actionsCreateWithoutBusinessInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default account_actionsCreateOrConnectWithoutBusinessInputSchema;
