import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';
import { flag_historyCreateWithoutFlagInputSchema } from './flag_historyCreateWithoutFlagInputSchema';
import { flag_historyUncheckedCreateWithoutFlagInputSchema } from './flag_historyUncheckedCreateWithoutFlagInputSchema';

export const flag_historyCreateOrConnectWithoutFlagInputSchema: z.ZodType<Prisma.flag_historyCreateOrConnectWithoutFlagInput> = z.object({
  where: z.lazy(() => flag_historyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => flag_historyCreateWithoutFlagInputSchema),z.lazy(() => flag_historyUncheckedCreateWithoutFlagInputSchema) ]),
}).strict();

export default flag_historyCreateOrConnectWithoutFlagInputSchema;
