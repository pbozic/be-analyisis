import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsCreateWithoutHistoryInputSchema } from './flagsCreateWithoutHistoryInputSchema';
import { flagsUncheckedCreateWithoutHistoryInputSchema } from './flagsUncheckedCreateWithoutHistoryInputSchema';
import { flagsCreateOrConnectWithoutHistoryInputSchema } from './flagsCreateOrConnectWithoutHistoryInputSchema';
import { flagsWhereUniqueInputSchema } from './flagsWhereUniqueInputSchema';

export const flagsCreateNestedOneWithoutHistoryInputSchema: z.ZodType<Prisma.flagsCreateNestedOneWithoutHistoryInput> = z.object({
  create: z.union([ z.lazy(() => flagsCreateWithoutHistoryInputSchema),z.lazy(() => flagsUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => flagsCreateOrConnectWithoutHistoryInputSchema).optional(),
  connect: z.lazy(() => flagsWhereUniqueInputSchema).optional()
}).strict();

export default flagsCreateNestedOneWithoutHistoryInputSchema;
