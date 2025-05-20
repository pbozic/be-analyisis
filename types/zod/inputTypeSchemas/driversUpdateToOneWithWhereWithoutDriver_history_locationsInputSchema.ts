import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutDriver_history_locationsInputSchema } from './driversUpdateWithoutDriver_history_locationsInputSchema';
import { driversUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './driversUncheckedUpdateWithoutDriver_history_locationsInputSchema';

export const driversUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutDriver_history_locationsInput> = z.object({
  where: z.lazy(() => driversWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => driversUpdateWithoutDriver_history_locationsInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDriver_history_locationsInputSchema) ]),
}).strict();

export default driversUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema;
