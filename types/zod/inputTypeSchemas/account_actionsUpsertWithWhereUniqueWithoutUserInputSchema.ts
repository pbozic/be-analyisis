import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';
import { account_actionsUpdateWithoutUserInputSchema } from './account_actionsUpdateWithoutUserInputSchema';
import { account_actionsUncheckedUpdateWithoutUserInputSchema } from './account_actionsUncheckedUpdateWithoutUserInputSchema';
import { account_actionsCreateWithoutUserInputSchema } from './account_actionsCreateWithoutUserInputSchema';
import { account_actionsUncheckedCreateWithoutUserInputSchema } from './account_actionsUncheckedCreateWithoutUserInputSchema';

export const account_actionsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.account_actionsUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => account_actionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => account_actionsUpdateWithoutUserInputSchema),z.lazy(() => account_actionsUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => account_actionsCreateWithoutUserInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default account_actionsUpsertWithWhereUniqueWithoutUserInputSchema;
