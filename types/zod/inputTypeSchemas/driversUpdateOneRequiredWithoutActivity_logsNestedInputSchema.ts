import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutActivity_logsInputSchema } from './driversCreateWithoutActivity_logsInputSchema';
import { driversUncheckedCreateWithoutActivity_logsInputSchema } from './driversUncheckedCreateWithoutActivity_logsInputSchema';
import { driversCreateOrConnectWithoutActivity_logsInputSchema } from './driversCreateOrConnectWithoutActivity_logsInputSchema';
import { driversUpsertWithoutActivity_logsInputSchema } from './driversUpsertWithoutActivity_logsInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutActivity_logsInputSchema } from './driversUpdateToOneWithWhereWithoutActivity_logsInputSchema';
import { driversUpdateWithoutActivity_logsInputSchema } from './driversUpdateWithoutActivity_logsInputSchema';
import { driversUncheckedUpdateWithoutActivity_logsInputSchema } from './driversUncheckedUpdateWithoutActivity_logsInputSchema';

export const driversUpdateOneRequiredWithoutActivity_logsNestedInputSchema: z.ZodType<Prisma.driversUpdateOneRequiredWithoutActivity_logsNestedInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutActivity_logsInputSchema),z.lazy(() => driversUncheckedCreateWithoutActivity_logsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutActivity_logsInputSchema).optional(),
  upsert: z.lazy(() => driversUpsertWithoutActivity_logsInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => driversUpdateToOneWithWhereWithoutActivity_logsInputSchema),z.lazy(() => driversUpdateWithoutActivity_logsInputSchema),z.lazy(() => driversUncheckedUpdateWithoutActivity_logsInputSchema) ]).optional(),
}).strict();

export default driversUpdateOneRequiredWithoutActivity_logsNestedInputSchema;
