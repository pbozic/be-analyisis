import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';
import { flag_historyUpdateWithoutUserInputSchema } from './flag_historyUpdateWithoutUserInputSchema';
import { flag_historyUncheckedUpdateWithoutUserInputSchema } from './flag_historyUncheckedUpdateWithoutUserInputSchema';
import { flag_historyCreateWithoutUserInputSchema } from './flag_historyCreateWithoutUserInputSchema';
import { flag_historyUncheckedCreateWithoutUserInputSchema } from './flag_historyUncheckedCreateWithoutUserInputSchema';

export const flag_historyUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.flag_historyUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => flag_historyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => flag_historyUpdateWithoutUserInputSchema),z.lazy(() => flag_historyUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => flag_historyCreateWithoutUserInputSchema),z.lazy(() => flag_historyUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default flag_historyUpsertWithWhereUniqueWithoutUserInputSchema;
