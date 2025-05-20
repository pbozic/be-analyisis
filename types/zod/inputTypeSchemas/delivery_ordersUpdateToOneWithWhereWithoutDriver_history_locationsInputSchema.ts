import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUpdateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_ordersUpdateWithoutDriver_history_locationsInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema) ]),
}).strict();

export default delivery_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema;
