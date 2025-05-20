import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutDriver_history_locationsInputSchema } from './driversCreateWithoutDriver_history_locationsInputSchema';
import { driversUncheckedCreateWithoutDriver_history_locationsInputSchema } from './driversUncheckedCreateWithoutDriver_history_locationsInputSchema';

export const driversCreateOrConnectWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutDriver_history_locationsInput> = z.object({
  where: z.lazy(() => driversWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => driversCreateWithoutDriver_history_locationsInputSchema),z.lazy(() => driversUncheckedCreateWithoutDriver_history_locationsInputSchema) ]),
}).strict();

export default driversCreateOrConnectWithoutDriver_history_locationsInputSchema;
