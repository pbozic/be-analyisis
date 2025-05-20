import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutDriver_history_locationsInputSchema } from './driversUpdateWithoutDriver_history_locationsInputSchema';
import { driversUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './driversUncheckedUpdateWithoutDriver_history_locationsInputSchema';
import { driversCreateWithoutDriver_history_locationsInputSchema } from './driversCreateWithoutDriver_history_locationsInputSchema';
import { driversUncheckedCreateWithoutDriver_history_locationsInputSchema } from './driversUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.driversUpsertWithoutDriver_history_locationsInput> = z.object({
  update: z.union([ z.lazy(() => driversUpdateWithoutDriver_history_locationsInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDriver_history_locationsInputSchema) ]),
  create: z.union([ z.lazy(() => driversCreateWithoutDriver_history_locationsInputSchema),z.lazy(() => driversUncheckedCreateWithoutDriver_history_locationsInputSchema) ]),
  where: z.lazy(() => driversWhereInputSchema).optional()
}).strict();

export default driversUpsertWithoutDriver_history_locationsInputSchema;
