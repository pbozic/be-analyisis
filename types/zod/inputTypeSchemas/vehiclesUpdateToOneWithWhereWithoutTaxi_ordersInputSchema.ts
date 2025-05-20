import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesUpdateWithoutTaxi_ordersInputSchema } from './vehiclesUpdateWithoutTaxi_ordersInputSchema';
import { vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema } from './vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const vehiclesUpdateToOneWithWhereWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.vehiclesUpdateToOneWithWhereWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => vehiclesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => vehiclesUpdateWithoutTaxi_ordersInputSchema),z.lazy(() => vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default vehiclesUpdateToOneWithWhereWithoutTaxi_ordersInputSchema;
