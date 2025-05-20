import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutActivity_logsInputSchema } from './driversCreateWithoutActivity_logsInputSchema';
import { driversUncheckedCreateWithoutActivity_logsInputSchema } from './driversUncheckedCreateWithoutActivity_logsInputSchema';

export const driversCreateOrConnectWithoutActivity_logsInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutActivity_logsInput> = z.object({
  where: z.lazy(() => driversWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => driversCreateWithoutActivity_logsInputSchema),z.lazy(() => driversUncheckedCreateWithoutActivity_logsInputSchema) ]),
}).strict();

export default driversCreateOrConnectWithoutActivity_logsInputSchema;
