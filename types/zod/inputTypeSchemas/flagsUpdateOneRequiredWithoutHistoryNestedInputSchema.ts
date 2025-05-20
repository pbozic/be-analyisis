import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsCreateWithoutHistoryInputSchema } from './flagsCreateWithoutHistoryInputSchema';
import { flagsUncheckedCreateWithoutHistoryInputSchema } from './flagsUncheckedCreateWithoutHistoryInputSchema';
import { flagsCreateOrConnectWithoutHistoryInputSchema } from './flagsCreateOrConnectWithoutHistoryInputSchema';
import { flagsUpsertWithoutHistoryInputSchema } from './flagsUpsertWithoutHistoryInputSchema';
import { flagsWhereUniqueInputSchema } from './flagsWhereUniqueInputSchema';
import { flagsUpdateToOneWithWhereWithoutHistoryInputSchema } from './flagsUpdateToOneWithWhereWithoutHistoryInputSchema';
import { flagsUpdateWithoutHistoryInputSchema } from './flagsUpdateWithoutHistoryInputSchema';
import { flagsUncheckedUpdateWithoutHistoryInputSchema } from './flagsUncheckedUpdateWithoutHistoryInputSchema';

export const flagsUpdateOneRequiredWithoutHistoryNestedInputSchema: z.ZodType<Prisma.flagsUpdateOneRequiredWithoutHistoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => flagsCreateWithoutHistoryInputSchema),z.lazy(() => flagsUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => flagsCreateOrConnectWithoutHistoryInputSchema).optional(),
  upsert: z.lazy(() => flagsUpsertWithoutHistoryInputSchema).optional(),
  connect: z.lazy(() => flagsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => flagsUpdateToOneWithWhereWithoutHistoryInputSchema),z.lazy(() => flagsUpdateWithoutHistoryInputSchema),z.lazy(() => flagsUncheckedUpdateWithoutHistoryInputSchema) ]).optional(),
}).strict();

export default flagsUpdateOneRequiredWithoutHistoryNestedInputSchema;
