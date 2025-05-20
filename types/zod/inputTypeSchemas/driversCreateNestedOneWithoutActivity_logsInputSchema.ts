import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutActivity_logsInputSchema } from './driversCreateWithoutActivity_logsInputSchema';
import { driversUncheckedCreateWithoutActivity_logsInputSchema } from './driversUncheckedCreateWithoutActivity_logsInputSchema';
import { driversCreateOrConnectWithoutActivity_logsInputSchema } from './driversCreateOrConnectWithoutActivity_logsInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutActivity_logsInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutActivity_logsInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutActivity_logsInputSchema),z.lazy(() => driversUncheckedCreateWithoutActivity_logsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutActivity_logsInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional()
}).strict();

export default driversCreateNestedOneWithoutActivity_logsInputSchema;
