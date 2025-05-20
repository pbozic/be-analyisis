import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';
import { flag_historyUpdateWithoutUserInputSchema } from './flag_historyUpdateWithoutUserInputSchema';
import { flag_historyUncheckedUpdateWithoutUserInputSchema } from './flag_historyUncheckedUpdateWithoutUserInputSchema';

export const flag_historyUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.flag_historyUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => flag_historyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => flag_historyUpdateWithoutUserInputSchema),z.lazy(() => flag_historyUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default flag_historyUpdateWithWhereUniqueWithoutUserInputSchema;
