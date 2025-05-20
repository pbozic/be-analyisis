import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';
import { flag_historyCreateWithoutUserInputSchema } from './flag_historyCreateWithoutUserInputSchema';
import { flag_historyUncheckedCreateWithoutUserInputSchema } from './flag_historyUncheckedCreateWithoutUserInputSchema';

export const flag_historyCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.flag_historyCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => flag_historyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => flag_historyCreateWithoutUserInputSchema),z.lazy(() => flag_historyUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default flag_historyCreateOrConnectWithoutUserInputSchema;
